import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FOUNDERS } from "@/data/founders";
import { Linkedin } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto max-w-4xl px-4 pb-20 pt-28 md:px-6">
        <Card className="border-border/60 bg-card/60">
          <CardHeader>
            <CardTitle className="text-2xl">About this build</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 text-sm leading-relaxed text-muted-foreground">
            <p>
              CoinProfit is a front-end-only playground: synthetic TTD price paths, demo insider-style rows, and a
              scenario desk that maps sliders to LONG / SHORT / NEUTRAL labels. It is not affiliated with The
              Trade Desk, Inc., and it does not execute trades or stream live market data.
            </p>
            <p>
              The old careers flow was removed in the revamp. If you are hiring for a real role, host the
              application on your ATS or company site — not on an unofficial market-education page.
            </p>

            <div className="space-y-4 border-t border-border/50 pt-8">
              <h3 className="text-lg font-semibold text-foreground">Founders</h3>
              <p className="text-muted-foreground">
                This project is built by the team below. Connect on LinkedIn if you want to reach them.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {FOUNDERS.map((founder) => (
                  <Card key={founder.name} className="border-border/60 bg-background/40">
                    <CardContent className="space-y-3 p-5">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold text-foreground">{founder.name}</p>
                          <p className="text-xs text-primary">{founder.title}</p>
                        </div>
                        <Button variant="outline" size="sm" className="shrink-0 gap-1.5" asChild>
                          <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                            LinkedIn
                          </a>
                        </Button>
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground">{founder.description}</p>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <p>
                          <span className="text-foreground/70">Education:</span> {founder.education}
                        </p>
                        <p>
                          <span className="text-foreground/70">Experience:</span> {founder.experience}
                        </p>
                        <p>
                          <span className="text-foreground/70">Expertise:</span> {founder.expertise}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Button asChild variant="hero" className="mt-2">
              <Link to="/">Back to home</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
