
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                How Ruminate Works
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your journey from scattered insights to connected knowledge
              </p>
            </div>
            
            <div className="space-y-24 max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal font-medium mb-4">1</div>
                  <h2 className="text-2xl font-bold mb-4">Collect</h2>
                  <p className="text-muted-foreground mb-4">
                    Save valuable insights from anywhere using our browser extension, email forwarding, or by directly typing into Ruminate. We support content from articles, books, podcasts, videos, and more.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Browser extension for one-click saving</span>
                    </li>
                    <li className="flex gap-2">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Forward emails to save@ruminate.app</span>
                    </li>
                    <li className="flex gap-2">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Web and mobile apps for direct input</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted rounded-xl p-6 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="h-16 w-16 mx-auto text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <p className="mt-4 text-sm text-muted-foreground">Collect Interface Illustration</p>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                <div className="md:order-2">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal font-medium mb-4">2</div>
                  <h2 className="text-2xl font-bold mb-4">Organize</h2>
                  <p className="text-muted-foreground mb-4">
                    Our AI helps you categorize and tag your content, making it easy to build a structured knowledge base without the manual work. Create collections or let Ruminate suggest them based on your content.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>AI-powered tagging suggestions</span>
                    </li>
                    <li className="flex gap-2">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Smart collections based on content</span>
                    </li>
                    <li className="flex gap-2">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Custom folders and organization</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted rounded-xl p-6 h-64 flex items-center justify-center md:order-1">
                  <div className="text-center">
                    <svg className="h-16 w-16 mx-auto text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                    </svg>
                    <p className="mt-4 text-sm text-muted-foreground">Organize Interface Illustration</p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal font-medium mb-4">3</div>
                  <h2 className="text-2xl font-bold mb-4">Connect</h2>
                  <p className="text-muted-foreground mb-4">
                    Discover relationships between your insights with our visual knowledge maps. See how ideas connect across different sources and topics to gain new perspectives.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Interactive knowledge maps</span>
                    </li>
                    <li className="flex gap-2">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Automatic relationship suggestions</span>
                    </li>
                    <li className="flex gap-2">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Custom connection creation</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted rounded-xl p-6 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="h-16 w-16 mx-auto text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <p className="mt-4 text-sm text-muted-foreground">Connect Interface Illustration</p>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                <div className="md:order-2">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal font-medium mb-4">4</div>
                  <h2 className="text-2xl font-bold mb-4">Create</h2>
                  <p className="text-muted-foreground mb-4">
                    Transform your insights into new content. Export collections as documents, presentations, or share knowledge maps with your team or audience.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Export to multiple formats (PDF, Markdown)</span>
                    </li>
                    <li className="flex gap-2">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Integration with note-taking apps</span>
                    </li>
                    <li className="flex gap-2">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Shareable links and collaboration</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted rounded-xl p-6 h-64 flex items-center justify-center md:order-1">
                  <div className="text-center">
                    <svg className="h-16 w-16 mx-auto text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                    <p className="mt-4 text-sm text-muted-foreground">Create Interface Illustration</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-20 text-center">
              <h2 className="text-2xl font-bold mb-6">Ready to get started?</h2>
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

export default HowItWorksPage;
