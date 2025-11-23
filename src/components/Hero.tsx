import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-background-animated opacity-30" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Futuristic Holographic Orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/10 rounded-full blur-3xl hologram-orb" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-secondary/20 via-primary/15 to-accent/10 rounded-full blur-3xl hologram-orb" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-br from-accent/15 via-primary/10 to-secondary/15 rounded-full blur-3xl hologram-orb" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-primary/15 via-accent/20 to-secondary/10 rounded-full blur-3xl hologram-orb" style={{ animationDelay: "6s" }} />
      
      {/* Pulsing Energy Rings */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-primary/20 rounded-full pulse-energy" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 border border-secondary/20 rounded-full pulse-energy" style={{ animationDelay: "1.5s" }} />
      
      {/* Rotating Glow Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border-t-2 border-r-2 border-primary/30 rotate-slow glow-pulse" />
      <div className="absolute bottom-10 left-10 w-40 h-40 border-b-2 border-l-2 border-secondary/30 rotate-slow glow-pulse" style={{ animationDirection: "reverse", animationDuration: "25s" }} />
      
      {/* Data Stream Lines */}
      <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent data-stream" style={{ animationDelay: "0s" }} />
      <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-secondary/30 to-transparent data-stream" style={{ animationDelay: "2s" }} />
      <div className="absolute right-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent data-stream" style={{ animationDelay: "4s" }} />
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `hologram-float ${8 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm animate-slide-up">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Alternative Data Market: $18.74B → $135.8B by 2030</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Quantitative Trading
            <br />
            <span className="text-gradient">Powered by AI</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            CoinProfit combines machine learning with real-time data validation to identify optimal entry points across top exchanges. Systematically test alternative datasets before purchase.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="group">
              Get Early Access
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10">
              View Platform Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient">63%</div>
              <div className="text-sm text-muted-foreground">Annual Growth Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient-secondary">100+</div>
              <div className="text-sm text-muted-foreground">Datasets Validated</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient">$18M+</div>
              <div className="text-sm text-muted-foreground">Market Validation</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
