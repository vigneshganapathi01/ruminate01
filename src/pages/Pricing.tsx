
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("annually");
  
  const plans = [
    {
      name: "Free",
      description: "Great for getting started and exploring the basics.",
      price: {
        monthly: "$0",
        annually: "$0",
      },
      features: [
        "100 insights",
        "Basic tagging",
        "Simple knowledge maps",
        "Web app access",
      ],
      cta: "Get Started",
      ctaLink: "/signup",
      highlight: false,
    },
    {
      name: "Pro",
      description: "Perfect for individuals serious about knowledge management.",
      price: {
        monthly: "$12",
        annually: "$9",
      },
      features: [
        "Unlimited insights",
        "Advanced tagging & AI suggestions",
        "Full knowledge map capabilities",
        "Web & mobile access",
        "Export to multiple formats",
        "Browser extension",
      ],
      cta: "Start Free Trial",
      ctaLink: "/signup",
      highlight: true,
    },
    {
      name: "Team",
      description: "Collaborate and share insights with your whole team.",
      price: {
        monthly: "$29",
        annually: "$24",
      },
      features: [
        "Everything in Pro",
        "Team sharing & collaboration",
        "Shared knowledge maps",
        "Team knowledge spaces",
        "Admin controls",
        "Integration with other tools",
      ],
      cta: "Contact Sales",
      ctaLink: "/contact",
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the plan that's right for you
              </p>
              
              <div className="flex items-center justify-center mt-8">
                <div className="bg-muted p-1 rounded-full">
                  <button
                    className={cn(
                      "px-6 py-2 rounded-full text-sm font-medium transition-all",
                      billingCycle === "monthly"
                        ? "bg-background shadow text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    onClick={() => setBillingCycle("monthly")}
                  >
                    Monthly
                  </button>
                  <button
                    className={cn(
                      "px-6 py-2 rounded-full text-sm font-medium transition-all",
                      billingCycle === "annually"
                        ? "bg-background shadow text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    onClick={() => setBillingCycle("annually")}
                  >
                    Annually
                  </button>
                </div>
                <div className="ml-4 text-xs bg-teal/10 text-teal px-3 py-1 rounded-full">
                  Save 25%
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan) => (
                <div 
                  key={plan.name}
                  className={cn(
                    "rounded-xl border overflow-hidden",
                    plan.highlight ? "border-teal/50 shadow-lg" : "border-border"
                  )}
                >
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      {plan.description}
                    </p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold">
                        {plan.price[billingCycle]}
                      </span>
                      {plan.price[billingCycle] !== "$0" && (
                        <span className="text-muted-foreground ml-2">
                          /mo {billingCycle === "annually" && "billed annually"}
                        </span>
                      )}
                    </div>
                    
                    <Button 
                      asChild 
                      className={cn(
                        "w-full mb-6",
                        !plan.highlight && "bg-muted text-foreground hover:bg-muted/80"
                      )}
                    >
                      <a href={plan.ctaLink}>{plan.cta}</a>
                    </Button>
                    
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-teal mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-20">
              <div className="max-w-3xl mx-auto rounded-xl border p-8">
                <div className="flex items-center justify-between flex-col md:flex-row gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Enterprise Plan</h3>
                    <p className="text-muted-foreground">
                      Need a custom solution for your organization? Contact our sales team to discuss enterprise options.
                    </p>
                  </div>
                  <Button asChild size="lg">
                    <a href="/contact">Contact Sales</a>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              
              <div className="max-w-3xl mx-auto grid gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Can I change my plan later?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can upgrade, downgrade, or cancel your plan at any time. When you upgrade, you'll get immediate access to the new features. If you downgrade, the changes will apply at the end of your billing cycle.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Is there a limit to how much I can store?</h3>
                  <p className="text-muted-foreground">
                    Free accounts are limited to 100 insights. Pro and Team accounts have unlimited insights storage. There are fair use policies for file attachments and API usage.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">How does the free trial work?</h3>
                  <p className="text-muted-foreground">
                    Our 14-day free trial gives you full access to all Pro features. No credit card is required to start. At the end of the trial, you can choose to subscribe or downgrade to the Free plan.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Can I export my data if I decide to leave?</h3>
                  <p className="text-muted-foreground">
                    Absolutely. Ruminate allows you to export all your data in multiple formats including Markdown, CSV, and JSON, ensuring you always have access to your insights.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">What payment methods do you accept?</h3>
                  <p className="text-muted-foreground">
                    We accept all major credit cards, PayPal, and for Enterprise customers, we can arrange invoicing options. All payments are securely processed through Stripe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
