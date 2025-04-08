
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { GoogleGenerativeAI } from "https://esm.sh/@google/generative-ai@0.1.1"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  
  try {
    // Get API key from environment
    const apiKey = Deno.env.get('GEMINI_API_KEY')
    if (!apiKey) {
      throw new Error("Missing API key")
    }

    // Parse request body
    const { content, title } = await req.json()
    
    if (!content) {
      return new Response(
        JSON.stringify({ error: "Content is required" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        }
      )
    }
    
    // Initialize the Gemini API
    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })
    
    // Create the prompt
    const prompt = `
      I need you to analyze the following content${title ? ` titled "${title}"` : ''}:
      
      ---
      ${content}
      ---
      
      Please provide the following in JSON format:
      1. summary: A concise summary of the content (max 3 paragraphs)
      2. keyInsights: An array of the 3-5 most important insights or key points
      3. questions: An array of 3 thought-provoking questions raised by the content
      4. connections: An array of related topics or concepts that could be connected to this content
      5. visualData: A JSON structure that can be used for visualization with nodes and edges (at least 5-7 nodes)
      
      Return ONLY the JSON without any additional explanation or markdown.
    `
    
    // Make the API call
    const result = await model.generateContent(prompt)
    const response = result.response
    const text = response.text()
    
    // Extract the JSON from the response
    let jsonResponse
    try {
      // Try to extract JSON if it's wrapped in code blocks or has extra text
      const jsonMatch = text.match(/```(?:json)?([\s\S]*?)```/) || text.match(/{[\s\S]*}/)
      const jsonString = jsonMatch ? jsonMatch[0].replace(/```json|```/g, '') : text
      jsonResponse = JSON.parse(jsonString.trim())
    } catch (e) {
      console.error("Error parsing JSON:", e)
      // Return raw text if JSON parsing fails
      return new Response(
        JSON.stringify({ 
          rawOutput: text,
          error: "Failed to parse JSON response"
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      )
    }
    
    return new Response(
      JSON.stringify(jsonResponse),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    )
  } catch (error) {
    console.error("Error:", error.message)
    
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    )
  }
})
