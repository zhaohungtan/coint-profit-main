import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="/logo.jpeg" 
              alt="CoinProfit Logo" 
              className="h-10 w-auto object-contain drop-shadow-sm"
              onError={(e) => {
                console.error('Logo failed to load:', e);
                (e.target as HTMLImageElement).style.display = 'none';
              }}
              loading="eager"
            />
            <span className="text-xl font-bold">CoinProfit</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#platform" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Platform
            </a>
            <a href="/#validation" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Data Validation
            </a>
            <a href="/#team" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Team
            </a>
            <a href="/careers" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Careers
            </a>
            <a href="/#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
