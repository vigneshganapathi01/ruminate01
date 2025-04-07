
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Brain, Sparkles, Share2 } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_30%_at_50%_40%,rgba(51,195,240,0.1),rgba(255,255,255,0))]" />
      <div className="container flex flex-col items-center text-center">
        <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm mb-8">
          <Sparkles className="h-4 w-4 text-teal" />
          <span className="text-muted-foreground">Now in public beta</span>
        </div>
        
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
          Reflect. Connect. Create.
        </h1>
        
        <p className="max-w-2xl text-muted-foreground sm:text-xl mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Ruminate helps you collect insightful content, reflect deeply, and transform your thoughts into visual knowledge maps.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button asChild size="lg">
            <Link to="/signup">
              Try Demo
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/signup">
              Sign Up Free
            </Link>
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl w-full animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex flex-col items-center text-center p-4">
            <div className="rounded-full bg-teal/10 p-3 mb-4">
              <Brain className="h-6 w-6 text-teal" />
            </div>
            <h3 className="text-lg font-medium mb-2">Thoughtful Collection</h3>
            <p className="text-muted-foreground text-sm">
              Easily save content from any platform to build your personal knowledge repository.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="rounded-full bg-teal/10 p-3 mb-4">
              <Sparkles className="h-6 w-6 text-teal" />
            </div>
            <h3 className="text-lg font-medium mb-2">AI-Powered Insights</h3>
            <p className="text-muted-foreground text-sm">
              Automatically summarize, cluster, and visualize your content to discover new connections.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="rounded-full bg-teal/10 p-3 mb-4">
              <Share2 className="h-6 w-6 text-teal" />
            </div>
            <h3 className="text-lg font-medium mb-2">Seamless Sharing</h3>
            <p className="text-muted-foreground text-sm">
              Export your insights to PDF, Notion, or as visual maps to share with others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
