
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal to-teal/70 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(35%_25%_at_60%_100%,rgba(0,0,0,0.3),transparent)]" />
          
          <div className="relative flex flex-col items-center text-center px-6 py-16 md:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-6 max-w-3xl">
              Ready to transform how you collect and connect ideas?
            </h2>
            
            <p className="text-lg text-white/90 mb-10 max-w-2xl">
              Join our beta program today and be among the first to experience the power of thoughtful digital reflection.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/signup">
                  Start Free Trial
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white/30 hover:bg-white/20 hover:text-white">
                <Link to="/demo">
                  Watch Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
