
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-provider";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/hooks/use-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await signIn(email, password);
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Login successful",
        description: "Welcome back to Ruminate!",
      });
      
      navigate("/dashboard");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: error.message || "Please check your credentials and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setIsLoading(true);
    
    try {
      const { error } = await signIn("demo@ruminate.app", "demo123");
      
      if (error) {
        throw error;
      }
      
      navigate("/dashboard");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Demo login failed",
        description: "The demo account might not be set up. Try signing up instead.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container flex justify-between items-center h-16">
        <Link to="/" className="flex items-center gap-2">
          <Logo size="sm" />
        </Link>
        <ThemeToggle />
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center py-12">
        <div className="w-full max-w-md px-8 py-12 rounded-2xl border bg-card shadow-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground mt-2">
              Sign in to your Ruminate account
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                disabled={isLoading}
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="text-xs text-teal hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                disabled={isLoading}
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">or</span>
              </div>
            </div>
            
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={handleDemoLogin}
              disabled={isLoading}
            >
              Try Demo
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-teal hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
