
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const UseCasesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                Use Cases
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how different professionals use Ruminate to enhance their work
              </p>
            </div>
            
            <Tabs defaultValue="researchers" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="researchers">Researchers</TabsTrigger>
                <TabsTrigger value="writers">Writers</TabsTrigger>
                <TabsTrigger value="students">Students</TabsTrigger>
                <TabsTrigger value="professionals">Professionals</TabsTrigger>
              </TabsList>
              
              <TabsContent value="researchers" className="space-y-8">
                <div className="bg-card rounded-xl p-8 border space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-teal/10 flex items-center justify-center text-teal">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14C14.7614 14 17 11.7614 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 11.7614 9.23858 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Academic Researchers</h2>
                      <p className="text-muted-foreground">Organizing research papers and connecting ideas</p>
                    </div>
                  </div>
                  
                  <p>
                    Academic researchers use Ruminate to organize their literature reviews, connect findings across multiple papers, and discover relationships between different research areas. The visual knowledge maps help identify research gaps and generate new hypotheses.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                      <h3 className="font-medium">Key Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex gap-2 items-start">
                          <svg className="h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Organize research papers by topic, methodology, or findings</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <svg className="h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Visualize connections between research fields</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <svg className="h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Generate literature review exports with citation links</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                      <h3 className="font-medium">User Story</h3>
                      <p className="text-sm">
                        "As a neuroscience researcher, I used to have dozens of PDFs with no way to see connections between them. Ruminate helps me categorize papers and visualize how different brain regions interact according to the literature. This has led to three new research hypotheses for my lab."
                      </p>
                      <p className="text-sm font-medium">— Dr. Sarah Johnson, Neuroscience Department</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="writers" className="space-y-8">
                <div className="bg-card rounded-xl p-8 border space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-teal/10 flex items-center justify-center text-teal">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 19L19 12L22 15L15 22L12 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18 13L16.5 5.5L2 2L5.5 16.5L13 18L18 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 2L9.586 9.586" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Writers & Content Creators</h2>
                      <p className="text-muted-foreground">Organizing research and developing content structures</p>
                    </div>
                  </div>
                  
                  <p>
                    Writers and content creators use Ruminate to collect research, organize their thoughts, and develop content outlines. The ability to connect related ideas helps them create richer, more interconnected content and identify potential article series or book chapters.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                      <h3 className="font-medium">Key Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex gap-2 items-start">
                          <svg className="h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Build content outlines from collected research</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <svg className="h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Discover connections between topics for article series</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <svg className="h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Export organized insights directly to writing tools</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                      <h3 className="font-medium">User Story</h3>
                      <p className="text-sm">
                        "I was struggling with my second book until I started using Ruminate. I collected hundreds of notes and research snippets, and the knowledge maps helped me see patterns I wouldn't have noticed. I restructured my entire outline based on these connections, and the book is so much stronger now."
                      </p>
                      <p className="text-sm font-medium">— Michael Chen, Author & Journalist</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="students" className="space-y-8">
                <div className="bg-card rounded-xl p-8 border space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-teal/10 flex items-center justify-center text-teal">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 10V15C22 18.3137 22 20 20 20H4C2 20 2 18.3137 2 15V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12V4C9 3.20435 9.31607 2.44129 9.87868 1.87868C10.4413 1.31607 11.2044 1 12 1C12.7956 1 13.5587 1.31607 14.1213 1.87868C14.6839 2.44129 15 3.20435 15 4V12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Students</h2>
                      <p className="text-muted-foreground">Note-taking and study preparation</p>
                    </div>
                  </div>
                  
                  <p>
                    Students use Ruminate to take and organize notes from lectures, readings, and research. The platform helps them connect concepts across different courses, prepare for exams by creating study guides, and develop comprehensive research papers.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                      <h3 className="font-medium">Key Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex gap-2 items-start">
                          <svg className="h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Organize lecture notes and readings by subject</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <svg className="h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Connect concepts across different classes</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <svg className="h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Create study guides by exporting connected notes</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                      <h3 className="font-medium">User Story</h3>
                      <p className="text-sm">
                        "I take notes in all my classes and used to struggle with seeing how they connect. With Ruminate, I can tag concepts and see how what I'm learning in psychology relates to my sociology class. My thesis paper was much stronger because I could visualize all these connections."
                      </p>
                      <p className="text-sm font-medium">— Emma Lopez, Graduate Student</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="professionals" className="space-y-8">
                <div className="bg-card rounded-xl p-8 border space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-teal/10 flex items-center justify-center text-teal">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Knowledge Workers</h2>
                      <p className="text-muted-foreground">Project research and professional development</p>
                    </div>
                  </div>
                  
                  <p>
                    Knowledge workers use Ruminate to gather research for projects, track industry trends, and organize their continuous learning. The platform helps them connect ideas from different resources and quickly access relevant information when needed.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                      <h3 className="font-medium">Key Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex gap-2 items-start">
                          <svg className="h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Organize project research and client information</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <svg className="h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Track industry trends and competitive intelligence</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <svg className="h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Build and share knowledge bases with teams</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                      <h3 className="font-medium">User Story</h3>
                      <p className="text-sm">
                        "As a product manager, I need to stay on top of industry trends, user research, and competitive analysis. Ruminate helps me organize all this information and see connections that inform our product roadmap. I can easily share relevant insights with different teams when making decisions."
                      </p>
                      <p className="text-sm font-medium">— David Wilson, Senior Product Manager</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-20 text-center">
              <h2 className="text-2xl font-bold mb-6">Find your own use case</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Ruminate is flexible enough to adapt to your specific needs. Join thousands of users who are transforming how they capture and connect insights.
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild size="lg">
                  <a href="/signup">Start Your Free Trial</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/contact">Contact Sales</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default UseCasesPage;
