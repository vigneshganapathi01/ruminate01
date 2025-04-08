
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/context/AuthContext";
import { Brain, FileText, Upload, ExternalLink, Download, Copy, SendHorizonal, Loader2, X } from "lucide-react";
import { useToast, toast } from "@/hooks/use-toast";
import { InsightInput, InsightOutput, insightService } from "@/services/api";
import { Tag } from "@/components/tag";

const Dashboard = () => {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<InsightOutput | null>(null);
  
  // Handle adding tags
  const handleAddTag = () => {
    if (!tagInput.trim() || tags.includes(tagInput.trim())) return;
    setTags([...tags, tagInput.trim()]);
    setTagInput("");
  };
  
  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      handleAddTag();
    }
  };

  // Generate insights
  const handleGenerateInsights = async () => {
    if (!content.trim()) {
      toast({
        title: "Content required",
        description: "Please enter some content to analyze.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);

    try {
      const input: InsightInput = {
        title: title.trim() || undefined,
        content: content.trim(),
        tags
      };

      const result = await insightService.generateInsights(input);
      setResult(result);

      // Save to database
      await insightService.saveInsight(input, result);

      toast({
        title: "Analysis complete!",
        description: "Your content has been processed successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error generating insights",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  // Copy to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Content has been copied to your clipboard."
    });
  };

  // Handle PDF export
  const exportToPDF = () => {
    // PDF export would be implemented here
    toast({
      title: "Export started",
      description: "Your PDF is being generated and will download shortly."
    });
  };

  // Reset state
  const handleReset = () => {
    setTitle("");
    setContent("");
    setTags([]);
    setResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">
              Welcome, {user?.user_metadata?.full_name || "User"}
            </h1>
            <p className="text-muted-foreground mt-2">
              Paste text, upload files, or enter content to analyze and gain insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title (Optional)</Label>
                <Input 
                  id="title" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Give your insight a name"
                  disabled={isGenerating}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea 
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Paste or type your content here..."
                  className="min-h-[200px]"
                  disabled={isGenerating}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (Optional)</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {tags.map((tag) => (
                    <div key={tag} className="flex items-center gap-1">
                      <Tag>
                        {tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-1 text-muted-foreground hover:text-foreground"
                          aria-label={`Remove tag ${tag}`}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Tag>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    id="tags"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Add tags (press Enter or comma to add)"
                    disabled={isGenerating}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleAddTag}
                    disabled={isGenerating || !tagInput.trim()}
                  >
                    Add
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={handleGenerateInsights} 
                  disabled={isGenerating || !content.trim()}
                  className="gap-2"
                >
                  {isGenerating ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Brain className="h-4 w-4" />
                  )}
                  {isGenerating ? "Generating..." : "Generate Insights"}
                </Button>
                
                <Button
                  variant="outline"
                  disabled={isGenerating}
                  onClick={handleReset}
                >
                  Start Over
                </Button>
              </div>
            </div>

            {/* Results Section */}
            <div>
              {!result ? (
                <div className="border border-dashed rounded-xl flex flex-col items-center justify-center p-12 h-full text-center">
                  <Brain className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="font-medium text-lg mb-2">No Insights Generated Yet</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Enter your content on the left and click "Generate Insights" to analyze your text.
                  </p>
                </div>
              ) : (
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{title || "Analysis Results"}</CardTitle>
                    <CardDescription>AI-generated insights about your content</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 overflow-auto max-h-[600px]">
                    <Tabs defaultValue="summary">
                      <TabsList className="mb-4">
                        <TabsTrigger value="summary">Summary</TabsTrigger>
                        <TabsTrigger value="insights">Key Insights</TabsTrigger>
                        <TabsTrigger value="questions">Questions</TabsTrigger>
                        <TabsTrigger value="visual">Visual Map</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="summary" className="space-y-4">
                        <div className="prose dark:prose-invert">
                          <p className="text-base">{result.summary}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost" 
                            size="sm" 
                            onClick={() => copyToClipboard(result.summary)}
                          >
                            <Copy className="h-4 w-4 mr-2" />
                            Copy
                          </Button>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="insights" className="space-y-4">
                        <ul className="space-y-2">
                          {result.keyInsights.map((insight, index) => (
                            <li key={index} className="flex gap-2 items-start">
                              <div className="bg-primary/20 text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                {index + 1}
                              </div>
                              <p>{insight}</p>
                            </li>
                          ))}
                        </ul>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost" 
                            size="sm" 
                            onClick={() => copyToClipboard(result.keyInsights.join('\n\n'))}
                          >
                            <Copy className="h-4 w-4 mr-2" />
                            Copy All
                          </Button>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="questions" className="space-y-4">
                        <ul className="space-y-3">
                          {result.questions.map((question, index) => (
                            <li key={index} className="border p-3 rounded-lg bg-muted/40">
                              <p className="text-base">{question}</p>
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                      
                      <TabsContent value="visual" className="space-y-4">
                        <div className="bg-muted/50 p-6 rounded-xl text-center h-60 flex items-center justify-center">
                          <div>
                            <p className="text-muted-foreground mb-2">
                              Visual map visualization placeholder
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Nodes: {result.visualData.nodes.length}, 
                              Connections: {result.visualData.edges.length}
                            </p>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                    
                    <div className="flex justify-end gap-2 pt-4 border-t">
                      <Button 
                        variant="outline" 
                        onClick={exportToPDF}
                        className="gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
