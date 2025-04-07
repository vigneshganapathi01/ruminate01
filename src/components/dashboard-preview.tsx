import { InsightCard } from './insight-card';
import { Button } from '@/components/ui/button';

export function DashboardPreview() {
  // Sample insight data
  const sampleInsights = [
    {
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
      title: "How to Leverage AI for Content Creation Without Losing Authenticity",
      excerpt: "AI tools can enhance creativity by generating ideas and streamlining workflows, but the human touch remains essential for resonance and connection.",
      source: "article",
      date: new Date('2023-12-05'),
      tags: [
        { name: "AI", color: "red" as const },
        { name: "content", color: "green" as const },
        { name: "creativity", color: "purple" as const }
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            All Your Insights in One Place
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Ruminate helps you collect and organize your insights from across the web.
          </p>
        </div>
        
        <div className="bg-card shadow-lg rounded-xl border max-w-5xl mx-auto overflow-hidden">
          <div className="border-b p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Your Insight Library</h3>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
            {sampleInsights.map((insight, index) => (
              <div key={index} className="p-6">
                <InsightCard
                  title={insight.title}
                  excerpt={insight.excerpt}
                  source={insight.source}
                  date={insight.date}
                  tags={insight.tags}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
