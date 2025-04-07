
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { InsightCard } from "@/components/insight-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tag } from "@/components/tag";
import { Footer } from "@/components/footer";
import { 
  Filter, 
  Grid2x2, 
  List, 
  PlusCircle, 
  Search
} from "lucide-react";

const DashboardPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  // Sample insights data
  const insights = [
    {
      id: 1,
      title: "The Future of Remote Work: Balancing Productivity and Wellbeing",
      excerpt: "Studies show that remote workers are 22% happier than office workers and report higher productivity levels when given proper tools and autonomy.",
      source: "linkedin",
      date: new Date('2023-11-12'),
      tags: [
        { name: "remote work", color: "blue" as const },
        { name: "productivity", color: "green" as const },
        { name: "wellbeing", color: "purple" as const }
      ]
    },
    {
      id: 2,
      title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      excerpt: "Small changes often appear to make no difference until you cross a critical threshold. The most powerful outcomes are the result of many small decisions.",
      source: "book",
      date: new Date('2023-10-25'),
      tags: [
        { name: "habits", color: "orange" as const },
        { name: "self-improvement", color: "purple" as const },
        { name: "psychology", color: "blue" as const }
      ]
    },
    {
      id: 3,
      title: "How to Leverage AI for Content Creation Without Losing Authenticity",
      excerpt: "AI tools can enhance creativity by generating ideas and streamlining workflows, but the human touch remains essential for resonance and connection.",
      source: "article",
      date: new Date('2023-12-05'),
      tags: [
        { name: "AI", color: "red" as const },
        { name: "content", color: "green" as const },
        { name: "creativity", color: "purple" as const }
      ]
    },
    {
      id: 4,
      title: "The Psychology of Decision Making: Why We Make Poor Choices",
      excerpt: "Our brains are wired with cognitive biases that can lead to poor decision making. Understanding these biases is the first step to overcoming them.",
      source: "article",
      date: new Date('2023-11-28'),
      tags: [
        { name: "psychology", color: "blue" as const },
        { name: "decision making", color: "orange" as const },
        { name: "cognitive bias", color: "purple" as const }
      ]
    },
    {
      id: 5,
      title: "Growth Strategy for Early-Stage Startups: Focus vs Diversification",
      excerpt: "When resources are limited, focusing on a core market and perfecting your product for that audience typically yields better results than trying to serve multiple segments.",
      source: "linkedin",
      date: new Date('2023-12-01'),
      tags: [
        { name: "startups", color: "green" as const },
        { name: "growth", color: "blue" as const },
        { name: "strategy", color: "red" as const }
      ]
    },
    {
      id: 6,
      title: "The Future of AI in Healthcare: Opportunities and Ethical Concerns",
      excerpt: "AI has the potential to revolutionize diagnostics, treatment planning, and administrative workflow, but raises important ethical questions about privacy and decision-making.",
      source: "article",
      date: new Date('2023-11-15'),
      tags: [
        { name: "AI", color: "red" as const },
        { name: "healthcare", color: "green" as const },
        { name: "ethics", color: "purple" as const }
      ]
    }
  ];
  
  // Popular tags extracted from insights
  const popularTags = [
    { name: "AI", count: 2 },
    { name: "psychology", count: 2 },
    { name: "productivity", count: 1 },
    { name: "startups", count: 1 },
    { name: "habits", count: 1 }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated={true} />
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Your Insight Library</h1>
              <p className="text-muted-foreground mt-1">
                Collect, organize, and reflect on your knowledge.
              </p>
            </div>
            
            <div className="flex gap-2">
              <Button asChild>
                <a href="/upload">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Insight
                </a>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <div className="content-card">
                <h2 className="font-medium mb-4">Filters</h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="search" className="text-sm font-medium block mb-2">
                      Search
                    </label>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="search"
                        placeholder="Search insights..."
                        className="pl-8"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Sources</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        LinkedIn
                      </label>
                      <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        Books
                      </label>
                      <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        Articles
                      </label>
                      <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        Twitter
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag) => (
                        <div key={tag.name} className="flex items-center gap-1.5">
                          <Tag>{tag.name}</Tag>
                          <span className="text-xs text-muted-foreground">{tag.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    <Filter className="mr-2 h-3 w-3" />
                    More Filters
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-muted-foreground">
                  {insights.length} insights
                </span>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("grid")}
                    className="h-8 w-8"
                  >
                    <Grid2x2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("list")}
                    className="h-8 w-8"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className={
                viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                : "grid grid-cols-1 gap-4"
              }>
                {insights.map((insight) => (
                  <InsightCard
                    key={insight.id}
                    title={insight.title}
                    excerpt={insight.excerpt}
                    source={insight.source}
                    date={insight.date}
                    tags={insight.tags}
                    onClick={() => {}}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;
