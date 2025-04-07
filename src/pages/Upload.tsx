import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link as LinkIcon, Upload as UploadIcon, Mail, Share, BookOpen } from "lucide-react";
import { Tag } from "@/components/tag";

const UploadPage = () => {
  const [activeTab, setActiveTab] = useState<'text' | 'link' | 'email'>('text');
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [email, setEmail] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  
  const handleAddTag = () => {
    if (!tagInput.trim() || tags.includes(tagInput.trim())) return;
    setTags([...tags, tagInput.trim()]);
    setTagInput("");
  };
  
  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      handleAddTag();
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", { 
      type: activeTab, 
      title, 
      content, 
      link, 
      email, 
      tags 
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated={true} />
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold">Add New Insight</h1>
              <p className="text-muted-foreground mt-2">
                Capture and reflect on new content
              </p>
            </div>
            
            <div className="content-card">
              <div className="flex border-b mb-6">
                <button
                  className={`px-4 py-3 text-sm font-medium flex items-center gap-2 border-b-2 -mb-px ${
                    activeTab === 'text'
                      ? 'border-teal text-teal'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setActiveTab('text')}
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Text</span>
                </button>
                <button
                  className={`px-4 py-3 text-sm font-medium flex items-center gap-2 border-b-2 -mb-px ${
                    activeTab === 'link'
                      ? 'border-teal text-teal'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setActiveTab('link')}
                >
                  <LinkIcon className="h-4 w-4" />
                  <span>Link</span>
                </button>
                <button
                  className={`px-4 py-3 text-sm font-medium flex items-center gap-2 border-b-2 -mb-px ${
                    activeTab === 'email'
                      ? 'border-teal text-teal'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setActiveTab('email')}
                >
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {activeTab === 'text' && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter a title for your insight"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="content">Content</Label>
                      <Textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Paste or type your content here"
                        className="min-h-[200px]"
                        required
                      />
                    </div>
                  </div>
                )}
                
                {activeTab === 'link' && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="link">Link URL</Label>
                      <Input
                        id="link"
                        type="url"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        placeholder="https://example.com/article"
                        required
                      />
                    </div>
                    
                    <div className="p-6 bg-muted/50 rounded-lg border border-dashed text-center">
                      <LinkIcon className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <h3 className="font-medium">Link Preview</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Enter a valid URL to see a preview of the content
                      </p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'email' && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Content</Label>
                      <Textarea
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Paste the email content here"
                        className="min-h-[200px]"
                        required
                      />
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>
                        Or forward emails to{" "}
                        <span className="font-medium text-foreground">
                          save@ruminate.app
                        </span>
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="space-y-2 pt-4 border-t">
                  <Label htmlFor="tags">Tags</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map((tag) => (
                      <div key={tag} className="flex items-center gap-1">
                        <Tag>
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="ml-1 text-muted-foreground hover:text-foreground"
                          >
                            &times;
                          </button>
                        </Tag>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      id="tags"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Add tags (comma separated)"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleAddTag}
                    >
                      Add
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline" asChild>
                    <Link to="/dashboard">Cancel</Link>
                  </Button>
                  <Button type="submit">
                    <UploadIcon className="mr-2 h-4 w-4" />
                    Save Insight
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UploadPage;
