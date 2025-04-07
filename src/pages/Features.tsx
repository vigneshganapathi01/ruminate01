
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                Features
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover all the powerful tools Ruminate offers to transform your insights into knowledge
              </p>
            </div>
            
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="flex flex-col gap-4">
                <div className="h-12 w-12 rounded-lg bg-teal/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Insight Collection</h3>
                <p className="text-muted-foreground">
                  Save content from articles, books, podcasts, and more with our browser extension, email forwarding, or direct input.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="flex flex-col gap-4">
                <div className="h-12 w-12 rounded-lg bg-teal/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Smart Tagging</h3>
                <p className="text-muted-foreground">
                  Automatically categorize your insights with AI-powered tagging suggestions to build a connected knowledge base.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="flex flex-col gap-4">
                <div className="h-12 w-12 rounded-lg bg-teal/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal" />
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Visual Knowledge Maps</h3>
                <p className="text-muted-foreground">
                  Visualize connections between your insights with interactive knowledge maps that reveal patterns and relationships.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="flex flex-col gap-4">
                <div className="h-12 w-12 rounded-lg bg-teal/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal" />
                    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Search & Filter</h3>
                <p className="text-muted-foreground">
                  Quickly find the insights you need with powerful search and filtering capabilities across your entire knowledge base.
                </p>
              </div>
              
              {/* Feature 5 */}
              <div className="flex flex-col gap-4">
                <div className="h-12 w-12 rounded-lg bg-teal/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal" />
                    <path d="M10 7L15 12L10 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Export & Share</h3>
                <p className="text-muted-foreground">
                  Export your insights to Markdown, PDF, or share them directly with colleagues and collaborators.
                </p>
              </div>
              
              {/* Feature 6 */}
              <div className="flex flex-col gap-4">
                <div className="h-12 w-12 rounded-lg bg-teal/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal" />
                    <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal" />
                    <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal" />
                    <path d="M8.58984 13.5098L15.4198 17.4898" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal" />
                    <path d="M15.4098 6.50977L8.58984 10.4898" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Cross-Platform Sync</h3>
                <p className="text-muted-foreground">
                  Access your insights across all your devices with seamless synchronization between desktop, mobile, and web.
                </p>
              </div>
            </div>
            
            <div className="mt-20 text-center">
              <h2 className="text-2xl font-bold mb-6">Ready to transform how you capture insights?</h2>
              <div className="flex justify-center gap-4">
                <a href="/signup" className="inline-flex items-center justify-center rounded-md bg-teal px-6 py-3 text-sm font-medium text-white shadow hover:bg-teal/90">
                  Try for free
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FeaturesPage;
