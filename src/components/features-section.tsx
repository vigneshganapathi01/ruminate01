
import { 
  BookCopy, 
  BrainCircuit, 
  FileDigit, 
  FolderKanban, 
  Link as LinkIcon, 
  Share, 
  Tag,
  Upload
} from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: <Upload className="h-6 w-6 text-teal" />,
      title: "Collect from Anywhere",
      description: "Browser extension, mobile share sheet, and email-forwarding make saving content effortless."
    },
    {
      icon: <Tag className="h-6 w-6 text-teal" />,
      title: "Organize with Tags",
      description: "Create custom categories and filter your content library for quick access."
    },
    {
      icon: <BrainCircuit className="h-6 w-6 text-teal" />,
      title: "AI Summarization",
      description: "Get concise summaries of your saved content to quickly capture key insights."
    },
    {
      icon: <FolderKanban className="h-6 w-6 text-teal" />,
      title: "Theme Clustering",
      description: "AI-powered grouping reveals patterns and connections across your content."
    },
    {
      icon: <BookCopy className="h-6 w-6 text-teal" />,
      title: "Personal Notes",
      description: "Add your own thoughts and reflections to any saved content."
    },
    {
      icon: <FileDigit className="h-6 w-6 text-teal" />,
      title: "Visual Mind Maps",
      description: "Transform your insights into interactive knowledge maps."
    },
    {
      icon: <Share className="h-6 w-6 text-teal" />,
      title: "Export Options",
      description: "Share as PDF, export to Notion, or create shareable visual links."
    },
    {
      icon: <LinkIcon className="h-6 w-6 text-teal" />,
      title: "Connect Platforms",
      description: "Link your accounts for seamless content collection across services."
    }
  ];

  return (
    <section className="py-20" id="features">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Your Digital Second Brain
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Ruminate helps you capture, connect, and create with your most valuable insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="content-card hover:border-teal/30 transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="rounded-full bg-teal/10 p-3 w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
