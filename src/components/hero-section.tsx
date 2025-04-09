
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles, FileText } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-sand">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-midnight">
              Transform content into 
              <span className="text-teal block">actionable insights</span>
            </h1>
            <p className="text-lg md:text-xl text-midnight mb-8 max-w-xl">
              Ruminate uses AI to analyze your documents, articles, and notes, 
              generating summaries, extracting key insights, and creating visual 
              knowledge maps to enhance your understanding.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base bg-teal text-midnight hover:bg-teal/90">
                <Link to="/dashboard">Try Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base text-midnight">
                <Link to="/login">Login</Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-8 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center">
                  <Brain className="h-4 w-4 text-teal" />
                </div>
                <span className="text-sm text-midnight">AI-powered analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-teal" />
                </div>
                <span className="text-sm text-midnight">Visual knowledge maps</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-teal" />
                </div>
                <span className="text-sm text-midnight">Export to PDF</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="bg-white rounded-2xl shadow-xl border p-6 z-10 relative">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-midnight">Document Analysis</h3>
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
          </div>
        </div>
      </div>
    </section>
  );
};
