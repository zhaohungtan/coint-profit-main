import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, MapPin, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Careers = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      linkedin: formData.get("linkedin"),
      portfolio: formData.get("portfolio"),
      coverLetter: formData.get("coverLetter"),
      resume: formData.get("resume"),
    };

    // Create email body
    const emailBody = `
New Job Application - Remote SWE Intern

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
LinkedIn: ${data.linkedin || "Not provided"}
Portfolio: ${data.portfolio || "Not provided"}

Cover Letter:
${data.coverLetter}

Resume: ${data.resume ? (data.resume as File).name : "Not provided"}

---
This application was submitted through the CoinProfit careers page.
    `.trim();

    try {
      // Using Web3Forms (free, no signup required for basic use)
      // This will send emails directly to zhaohungtan1209@berkeley.edu
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "YOUR_WEB3FORMS_KEY"); // You'll need to get this from web3forms.com
      formDataToSend.append("subject", `Job Application - Remote SWE Intern - ${data.name}`);
      formDataToSend.append("email", "zhaohungtan1209@berkeley.edu");
      formDataToSend.append("name", data.name as string);
      formDataToSend.append("from_name", data.name as string);
      formDataToSend.append("message", emailBody);
      if (data.resume) {
        formDataToSend.append("resume", data.resume as File);
      }

      // For now, use mailto as primary method (works immediately)
      // To set up Web3Forms: 1) Go to web3forms.com 2) Get your access key 3) Replace YOUR_WEB3FORMS_KEY above
      const mailtoLink = `mailto:zhaohungtan1209@berkeley.edu?subject=Job Application - Remote SWE Intern - ${data.name}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
      
      setIsSubmitted(true);
      toast({
        title: "Application submitted!",
        description: "We'll review your application and get back to you soon.",
      });
      e.currentTarget.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Join the <span className="text-gradient">Future of Trading</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Build cutting-edge ML systems and quantitative trading infrastructure with a team of experts from UC Berkeley, UCLA, and top tech companies.
            </p>
          </div>
        </div>
      </section>

      {/* Job Posting */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-10 bg-gradient-to-br from-card to-card/50 border-primary/20">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">Remote Software Engineering Intern</h2>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>Remote</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>Full-time Internship</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 pt-6 border-t border-border">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">About the Role</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We're looking for a talented Software Engineering Intern to join our team and help build 
                      the next generation of quantitative trading infrastructure. You'll work on machine learning 
                      systems, data pipelines, and real-time trading platforms alongside our team of experts from 
                      UC Berkeley, UCLA, and top tech companies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">What You'll Do</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Develop and maintain ML-powered data validation systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Build real-time data pipelines for alternative data sources</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Work on trading infrastructure and exchange integrations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Collaborate with data scientists and quantitative researchers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Contribute to production-grade systems used in live trading</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">What We're Looking For</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Strong programming skills in Python, TypeScript, or similar languages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Experience with web development (React, Node.js, or similar)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Interest in machine learning, data science, or quantitative finance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Ability to work independently and in a remote environment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Currently pursuing or recently completed a degree in CS, Engineering, or related field</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">What We Offer</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Competitive internship compensation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Flexible remote work schedule</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Mentorship from industry experts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Opportunity to work on production trading systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Potential for full-time conversion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Apply for this Position
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below to submit your application
              </p>
            </div>

            {isSubmitted ? (
              <Card className="p-8 text-center bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
                <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for your interest. We've received your application and will review it shortly.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Submit Another Application
                </Button>
              </Card>
            ) : (
              <Card className="p-8 md:p-10 bg-gradient-to-br from-card to-card/50 border-primary/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn Profile</Label>
                      <Input
                        id="linkedin"
                        name="linkedin"
                        type="url"
                        placeholder="https://linkedin.com/in/yourname"
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio / GitHub</Label>
                    <Input
                      id="portfolio"
                      name="portfolio"
                      type="url"
                      placeholder="https://github.com/yourname or https://yourportfolio.com"
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume / CV *</Label>
                    <Input
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      className="bg-background/50 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                    />
                    <p className="text-xs text-muted-foreground">
                      Accepted formats: PDF, DOC, DOCX (Max 10MB)
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter *</Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      required
                      placeholder="Tell us why you're interested in this position and what you can bring to the team..."
                      rows={6}
                      className="bg-background/50 resize-none"
                    />
                    <p className="text-xs text-muted-foreground">
                      Please include why you're interested in CoinProfit and what makes you a great fit.
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      By submitting this form, you agree to our privacy policy and consent to being contacted about this position.
                    </p>
                  </div>
                </form>
              </Card>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Careers;

