
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles, FileText } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-sand/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform content into 
              <span className="text-teal block">actionable insights</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Ruminate uses AI to analyze your documents, articles, and notes, 
              generating summaries, extracting key insights, and creating visual 
              knowledge maps to enhance your understanding.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/dashboard">Try Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/login">Login</Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-8 mt-12">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-teal" />
                <span className="text-sm">AI-powered analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-teal" />
                <span className="text-sm">Visual knowledge maps</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-teal" />
                <span className="text-sm">Export to PDF</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="bg-card rounded-2xl shadow-xl border p-6 z-10 relative animate-scale-in">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Document Analysis</h3>
                <div className="bg-teal/20 text-teal px-2 py-1 rounded-full text-xs">
                  AI Processing
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="h-2 bg-muted rounded w-full"></div>
                <div className="h-2 bg-muted rounded w-3/4"></div>
                <div className="h-2 bg-muted rounded w-5/6"></div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="border rounded-lg p-3 bg-background/50">
                  <div className="text-xs text-muted-foreground">Summary</div>
                  <div className="h-2 bg-muted rounded w-full mt-2"></div>
                  <div className="h-2 bg-muted rounded w-2/3 mt-1"></div>
                </div>
                <div className="border rounded-lg p-3 bg-background/50">
                  <div className="text-xs text-muted-foreground">Key Points</div>
                  <div className="h-2 bg-muted rounded w-full mt-2"></div>
                  <div className="h-2 bg-muted rounded w-3/4 mt-1"></div>
                </div>
              </div>
              <div className="bg-midnight/5 dark:bg-white/5 rounded-lg h-32 flex items-center justify-center">
                <div className="text-xs text-muted-foreground">Knowledge Map Visualization</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-40 h-40 bg-teal/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-midnight/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
