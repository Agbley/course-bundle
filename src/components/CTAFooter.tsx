import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { 
  Clock, 
  CheckCircle, 
  Star, 
  Shield, 
  CreditCard,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  Trophy,
  Users,
  Zap
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const pricingFeatures = [
  "5 comprehensive courses",
  "Lifetime access to content",
  "1-on-1 mentorship sessions",
  "Industry-recognized certificates",
  "Job placement assistance",
  "30-day money-back guarantee",
  "Private community access",
  "Weekly live Q&A sessions"
];

const testimonials = [
  {
    name: "Jessica Park",
    role: "Software Engineer at Amazon",
    content: "This bundle completely changed my career trajectory. Within 60 days, I landed my dream job!",
    rating: 5
  },
  {
    name: "Carlos Martinez",
    role: "Marketing Manager at Spotify",
    content: "The practical approach and real-world projects made all the difference. Highly recommended!",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Data Scientist at Netflix",
    content: "Best investment I've made in my career. The instructors are world-class and the content is top-notch.",
    rating: 5
  }
];

export const CTAFooter = () => {
  const [email, setEmail] = useState("");
  const [countdown, setCountdown] = useState({ days: 2, hours: 14, minutes: 33 });

  const handleEnrollment = () => {
    if (email) {
      toast({
        title: "Enrollment Successful! 🎉",
        description: "Welcome to Yam Education! Check your email for course access.",
      });
      setEmail("");
    }
  };

  const handleNewsletterSignup = () => {
    if (email) {
      toast({
        title: "Subscribed! 📧",
        description: "You'll receive free career tips and course updates.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-gradient-to-b from-primary to-primary/90 text-white">
      {/* Main CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-white/20 text-white border-white/30">
              Limited Time Offer
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Ready to Transform Your Career?
            </h2>
            
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join 50,000+ professionals who've accelerated their careers with our proven curriculum.
            </p>

            {/* Countdown Timer */}
            <Card className="max-w-md mx-auto mb-8 bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5" />
                  Limited Time Pricing Ends In:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-secondary">{countdown.days}</div>
                    <div className="text-xs text-white/70">Days</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">{countdown.hours}</div>
                    <div className="text-xs text-white/70">Hours</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">{countdown.minutes}</div>
                    <div className="text-xs text-white/70">Minutes</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-3xl text-white/60 line-through">$497</div>
              <div className="text-5xl font-bold text-secondary">$197</div>
              <Badge variant="secondary" className="bg-secondary text-white">
                60% OFF
              </Badge>
            </div>

            {/* Main CTA Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="text-lg px-12 py-6 mb-8 bg-secondary hover:bg-secondary/90 text-white font-bold shadow-2xl hover:scale-110 transition-all duration-300 animate-glow"
                >
                  <Trophy className="w-6 h-6 mr-3" />
                  Enroll Now - Start Today!
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Secure Your Spot Now!</DialogTitle>
                  <DialogDescription>
                    Complete your enrollment and start your career transformation today.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">Job Ready in 30 Days Bundle</span>
                      <span className="text-2xl font-bold text-primary">$197</span>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      {pricingFeatures.slice(0, 4).map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="enroll-email">Email Address</Label>
                      <Input
                        id="enroll-email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <Button onClick={handleEnrollment} className="w-full" size="lg">
                      <CreditCard className="w-5 h-5 mr-2" />
                      Complete Enrollment - $197
                    </Button>
                  </div>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Shield className="w-4 h-4" />
                      <span>Secure payment • 30-day money-back guarantee</span>
                    </div>
                    <p>💳 We accept all major credit cards and PayPal</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                30-Day Guarantee
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                50,000+ Students
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                4.9/5 Rating
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Instant Access
              </div>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.name} 
                  className="bg-white/10 border-white/20 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-white/90 mb-3">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                      <div className="text-xs text-white/70">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-white/20" />

      {/* Footer Info */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Yam Education</h3>
              <p className="text-white/80 mb-4">
                Empowering professionals with practical skills for career success.
              </p>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (555) 123-4567
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  hello@yameducation.com
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-secondary transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Instructors</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Career Services</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-secondary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Refund Policy</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <p className="text-white/80 mb-4 text-sm">
                Get free career tips and course updates.
              </p>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                />
                <Button 
                  onClick={handleNewsletterSignup}
                  variant="secondary" 
                  size="sm" 
                  className="w-full"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <Separator className="bg-white/20 my-8" />

          <div className="text-center text-white/60 text-sm">
            <p>&copy; 2024 Yam Education. All rights reserved. Built with ❤️ for ambitious professionals.</p>
          </div>
        </div>
      </section>
    </footer>
  );
};