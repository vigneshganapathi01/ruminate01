
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <main className="flex-1 container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="border rounded-lg p-8 bg-cream shadow-md">
            <h2 className="text-2xl font-bold text-navy-blue mb-6">Upload Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="bg-cream hover:bg-teal/10">Text</Button>
              <Button variant="outline" className="bg-cream hover:bg-teal/10">Highlight</Button>
              <Button variant="outline" className="bg-cream hover:bg-teal/10">Link</Button>
            </div>
          </div>
          
          <div className="border rounded-lg p-8 bg-cream shadow-md">
            <h2 className="text-2xl font-bold text-navy-blue mb-6">Add Tags & Notes</h2>
            <Button variant="outline" className="w-full bg-cream hover:bg-teal/10">Manual Annotations</Button>
          </div>
          
          <div className="border rounded-lg p-8 bg-cream shadow-md">
            <h2 className="text-2xl font-bold text-navy-blue mb-6">Explore Knowledge Maps</h2>
            <Button variant="outline" className="w-full bg-cream hover:bg-teal/10">Visual knowledge graph</Button>
          </div>
          
          <div className="border rounded-lg p-8 bg-cream shadow-md">
            <h2 className="text-2xl font-bold text-navy-blue mb-6">Export Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="bg-cream hover:bg-teal/10">PDF</Button>
              <Button variant="outline" className="bg-cream hover:bg-teal/10">Notion</Button>
              <Button variant="outline" className="bg-cream hover:bg-teal/10">Visual</Button>
            </div>
          </div>
        </div>
        
        <div className="border rounded-lg p-8 bg-cream shadow-md mb-12">
          <h2 className="text-2xl font-bold text-navy-blue mb-6">Export Insights</h2>
          <Link to="/upload">
            <Button className="bg-teal hover:bg-teal/90 text-white">Get Started</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
