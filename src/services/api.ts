
import { supabase } from "@/integrations/supabase/client";
import { Database } from "@/integrations/supabase/types";

export type InsightInput = {
  title?: string;
  content: string;
  tags?: string[];
};

export type InsightOutput = {
  summary: string;
  keyInsights: string[];
  questions: string[];
  connections: string[];
  visualData: {
    nodes: Array<{ id: string; label: string }>;
    edges: Array<{ source: string; target: string }>;
  };
};

export const insightService = {
  generateInsights: async (data: InsightInput): Promise<InsightOutput> => {
    const { data: response, error } = await supabase.functions.invoke("generate-insights", {
      body: {
        content: data.content,
        title: data.title || undefined
      }
    });

    if (error) {
      throw new Error(error.message);
    }

    return response as InsightOutput;
  },

  saveInsight: async (
    input: InsightInput, 
    output: InsightOutput
  ) => {
    const { data, error } = await supabase
      .from('insights')
      .insert({
        title: input.title || "Untitled Insight",
        original_content: input.content,
        summary: output.summary,
        insights: JSON.stringify(output.keyInsights),
        visual_map_data: {
          nodes: output.visualData.nodes,
          edges: output.visualData.edges,
          questions: output.questions,
          connections: output.connections
        },
        tags: input.tags || []
      })
      .select();

    if (error) {
      throw new Error(error.message);
    }

    return data[0];
  },

  getUserInsights: async () => {
    const { data, error } = await supabase
      .from('insights')
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  getInsightById: async (id: string) => {
    const { data, error } = await supabase
      .from('insights')
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  deleteInsight: async (id: string) => {
    const { error } = await supabase
      .from('insights')
      .delete()
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }

    return true;
  }
};
