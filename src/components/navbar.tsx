
import { Link } from 'react-router-dom';
import { Logo } from './logo';
import { ThemeToggle } from './theme-provider';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { LogOut, Menu } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const navItems = [
    { label: 'Features', href: '/features' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Use Cases', href: '/use-cases' },
  ];

  const authenticatedNavItems = [
    { label: 'Dashboard', href: '/dashboard' },
  ];

  const items = user ? authenticatedNavItems : navItems;

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Logo size="sm" />
          </Link>
          
          <nav className="hidden md:flex gap-6">
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium transition-colors hover:text-teal"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          {user ? (
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden md:flex"
              onClick={() => signOut()}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm" className="hidden md:flex">
                <Link to="/login">
                  Login
                </Link>
              </Button>
              <Button asChild size="sm" className="hidden md:flex">
                <Link to="/signup">
                  Sign Up Free
                </Link>
              </Button>
            </>
          )}
          
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
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium py-2 transition-colors hover:text-teal"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          
          {user ? (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => {
                signOut();
                setMobileMenuOpen(false);
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <Button asChild variant="outline" size="sm">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                  Sign Up Free
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
