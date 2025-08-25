import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, CheckCircle, Star, Users, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    if (email) {
      toast({
        title: "Welcome to Yam Education! 🎉",
        description: "We'll send you course details and exclusive offers.",
      });
      setEmail("");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Modern workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/70"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium animate-scale-in">
            <Star className="w-4 h-4 mr-2" />
            Trusted by 50,000+ professionals
          </Badge>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Job Ready in{" "}
            <span className="bg-gradient-to-r from-secondary to-yellow-400 bg-clip-text text-transparent animate-glow">
              30 Days
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master 5 essential workplace skills that top employers demand. 
            Get hired faster with our practical, project-based learning approach.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-white/90">
            <div className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Users className="w-5 h-5" />
              <span className="font-medium">50k+ Students</span>
            </div>
            <div className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Clock className="w-5 h-5" />
              <span className="font-medium">30 Days</span>
            </div>
            <div className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Job Guarantee</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="hero" size="lg" className="text-lg px-8 py-4 animate-scale-in">
                  <Calendar className="w-5 h-5 mr-2" />
                  Start Learning Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Start Your Journey Today!</DialogTitle>
                  <DialogDescription>
                    Join thousands of professionals who transformed their careers in just 30 days.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <Button onClick={handleSignUp} className="w-full" size="lg">
                    Get Started - $197
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    ✅ 30-day money-back guarantee<br/>
                    ✅ Lifetime access to course materials<br/>
                    ✅ Job placement assistance
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary animate-scale-in" style={{ animationDelay: "0.2s" }}>
              Watch Preview
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-12 text-white/80 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <p className="text-sm mb-4">Trusted by employees at:</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <span className="font-semibold">Google</span>
              <span className="font-semibold">Microsoft</span>
              <span className="font-semibold">Apple</span>
              <span className="font-semibold">Amazon</span>
              <span className="font-semibold">Meta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};