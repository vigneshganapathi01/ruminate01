
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tag } from "@/components/tag";
import { 
  ArrowLeft,
  Download,
  Search,
  Share,
  ZoomIn,
  ZoomOut,
  Maximize,
  Filter
} from "lucide-react";

const MapPage = () => {
  // This would ideally use a library like cytoscape.js for the actual mind mapping
  // But for this UI prototype we'll just show a placeholder
  
  const sampleTags = [
    { name: "AI", color: "red" as const },
    { name: "productivity", color: "green" as const },
    { name: "psychology", color: "blue" as const },
    { name: "startups", color: "orange" as const },
    { name: "habits", color: "purple" as const },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated={true} />
      
      <main className="flex-1 flex flex-col">
        <div className="container py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="/dashboard">
                  <ArrowLeft className="h-5 w-5" />
                </a>
              </Button>
              <h1 className="text-xl font-bold">Knowledge Map</h1>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Share className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-5 border-t">
          <div className="md:col-span-1 border-r p-4">
            <div className="sticky top-20 space-y-6">
              <div>
                <div className="relative mb-4">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search insights..."
                    className="pl-8"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Filter by Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {sampleTags.map((tag) => (
                    <Tag key={tag.name} color={tag.color} className="cursor-pointer">
                      {tag.name}
                    </Tag>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Map Settings</h3>
                <div className="space-y-3">
                  <div>
                    <label htmlFor="groupBy" className="text-xs block text-muted-foreground mb-1">
                      Group By
                    </label>
                    <select
                      id="groupBy"
                      className="w-full rounded-md border border-input bg-background px-3 py-1 text-sm"
                    >
                      <option value="tags">Tags</option>
                      <option value="source">Source</option>
                      <option value="date">Date</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="layout" className="text-xs block text-muted-foreground mb-1">
                      Layout
                    </label>
                    <select
                      id="layout"
                      className="w-full rounded-md border border-input bg-background px-3 py-1 text-sm"
                    >
                      <option value="cluster">Cluster</option>
                      <option value="tree">Tree</option>
                      <option value="force">Force-Directed</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div>
                <Button variant="outline" size="sm" className="w-full">
                  <Filter className="mr-2 h-3 w-3" />
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-4 relative h-[calc(100vh-64px-64px)]">
            <div className="absolute inset-0 bg-muted/30 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block rounded-full bg-teal p-6 mb-4">
                  <svg 
                    viewBox="0 0 64 64" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                  >
                    <path 
                      d="M32 8C14.4 8 8 19.2 8 32C8 44.8 14.4 56 32 56C49.6 56 56 44.8 56 32C56 19.2 49.6 8 32 8ZM32 48C22.4 48 16 41.6 16 32C16 22.4 22.4 16 32 16C41.6 16 48 22.4 48 32C48 41.6 41.6 48 32 48Z" 
                      fill="currentColor" 
                      fillOpacity="0.2"
                    />
                    <path 
                      d="M53.6 22.4C50.4 14.4 42.4 8 32 8V16C38.4 16 44 19.2 46.4 24.8C48 28.8 48 36 44.8 40C41.6 44 36 46.4 32 46.4V54.4C38.4 54.4 46.4 50.4 51.2 44C56 36.8 56 28.8 53.6 22.4Z" 
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-medium mb-2">Your Knowledge Map</h2>
                <p className="text-muted-foreground max-w-sm mx-auto mb-6">
                  Visualize connections between your insights and discover patterns in your thinking.
                </p>
                <p className="text-sm text-muted-foreground">
                  This is a placeholder for the visual mind map.<br />
                  In production, this would use Cytoscape.js or a similar library.
                </p>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 flex gap-2">
              <Button variant="outline" size="icon">
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Maximize className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MapPage;
