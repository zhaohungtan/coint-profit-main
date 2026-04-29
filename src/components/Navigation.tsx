import { Button } from "@/components/ui/button";
import { Menu, LineChart } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/85 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-3 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <LineChart className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-bold tracking-tight">CoinProfit</span>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                TTD scenarios & desk
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <a href="/#chart" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Chart
            </a>
            <a href="/#insider" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Insider tape
            </a>
            <a href="/#scenario" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Scenario desk
            </a>
            <Link to="/careers" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </div>

          <div className="hidden md:block">
            <Button variant="hero" size="sm" asChild>
              <a href="/#scenario">Run scenario</a>
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
