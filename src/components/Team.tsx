import { Card } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const founders = [
  {
    name: "Harry Tan",
    title: "Co-Founder",
    education: "UC Berkeley '25",
    experience: "Ex-Spotify, Infosys, Kohl's",
    expertise: "ML & Analytics",
    description: "Specialized in machine learning systems and predictive analytics with experience building production ML pipelines at scale.",
    linkedin: "https://www.linkedin.com/in/harry-tan-184711202/",
  },
  {
    name: "Jack Wang",
    title: "Co-Founder",
    education: "CS & Econ @ UC Berkeley",
    experience: "Ex-Uber",
    expertise: "Quantitative Trading",
    description: "Computer Science and Economics background with hands-on experience in high-frequency trading systems and market microstructure.",
    linkedin: "https://www.linkedin.com/in/jack-wang1/",
  },
  {
    name: "Michael Yip",
    title: "Technical Lead",
    education: "MEng Data Science @ UCLA",
    experience: "Ex-IBM",
    expertise: "Fraud and Risk",
    description: "Expert in fraud detection and risk management systems with extensive experience in data science and machine learning applications.",
    linkedin: "https://www.linkedin.com/in/michaelyip0219/",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Led by <span className="text-gradient">Expert Founders</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cornell MFE, Columbia, Berkeley, and UCLA masters team with quantitative depth to build production-grade ML validation systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-to-br from-card to-card/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                      <div className="text-primary font-medium">{founder.title}</div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                        asChild
                      >
                        <a 
                          href={founder.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`${founder.name}'s LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4 text-primary" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Mail className="w-4 h-4 text-primary" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Education:</span>
                      <span className="font-medium">{founder.education}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="font-medium">{founder.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Expertise:</span>
                      <span className="font-medium text-accent">{founder.expertise}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {founder.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20 inline-block">
              <p className="text-sm text-muted-foreground">
                Backed by expertise from <span className="font-semibold text-foreground">Cornell MFE</span>, <span className="font-semibold text-foreground">Columbia</span>, <span className="font-semibold text-foreground">Berkeley</span>, and <span className="font-semibold text-foreground">UCLA</span>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
