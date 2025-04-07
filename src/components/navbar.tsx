
import { Link } from 'react-router-dom';
import { Logo } from './logo';
import { ThemeToggle } from './theme-provider';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Navbar({ isAuthenticated = false }: { isAuthenticated?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-cream backdrop-blur supports-[backdrop-filter]:bg-cream/95">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Logo size="sm" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/dashboard"
            className="text-navy-blue font-medium text-base hover:text-teal transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/maps"
            className="text-navy-blue font-medium text-base hover:text-teal transition-colors"
          >
            Explore Maps
          </Link>
          <Link
            to="/upload"
            className="text-navy-blue font-medium text-base hover:text-teal transition-colors"
          >
            Export Insights
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "md:hidden border-t overflow-hidden transition-all",
        mobileMenuOpen ? "max-h-64" : "max-h-0"
      )}>
        <div className="container py-4 flex flex-col gap-4">
          <Link
            to="/dashboard"
            className="text-navy-blue font-medium py-2 transition-colors hover:text-teal"
            onClick={() => setMobileMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/maps"
            className="text-navy-blue font-medium py-2 transition-colors hover:text-teal"
            onClick={() => setMobileMenuOpen(false)}
          >
            Explore Maps
          </Link>
          <Link
            to="/upload"
            className="text-navy-blue font-medium py-2 transition-colors hover:text-teal"
            onClick={() => setMobileMenuOpen(false)}
          >
            Export Insights
          </Link>
        </div>
      </div>
    </header>
  );
}
