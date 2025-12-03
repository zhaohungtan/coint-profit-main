import { Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
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
            </div>
            <p className="text-sm text-muted-foreground">
              Quantitative crypto trading powered by machine learning and alternative data validation
            </p>
          </div>
          
          {/* Platform */}
          <div className="space-y-4">
            <h4 className="font-semibold">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Trading Engine</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Data Validation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Access</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#team" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/careers" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Risk Disclosure</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 CoinProfit. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Github className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
