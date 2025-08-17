import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Clock } from "lucide-react";

const CTAFooter = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      {/* Main CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Career Transformation 
            <span className="block text-accent">Starts Today</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Join the thousands of professionals who've already fast-tracked their careers. 
            Don't let another month pass without taking action.
          </p>

          <div className="bg-white/10 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-accent" />
              <span className="text-accent font-semibold">Limited Time Offer</span>
            </div>
            <div className="text-center mb-6">
              <div className="text-sm text-primary-foreground/80 mb-2">Bundle Value: <span className="line-through">$497</span></div>
              <div className="text-5xl font-bold text-accent mb-2">$97</div>
              <div className="text-lg text-primary-foreground/90">80% Launch Discount</div>
            </div>
            <div className="text-sm text-primary-foreground/80">
              ⚡ Offer expires in 48 hours | ⚡ Only 500 spots available
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="accent" size="lg" className="text-lg px-12 py-6 h-auto">
              Enroll Now - $97
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Mail className="mr-2 h-5 w-5" />
              Get Course Details
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-primary-foreground/80">
            <div className="flex items-center justify-center gap-2">
              <span className="text-accent font-bold">✓</span>
              30-Day Money Back Guarantee
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-accent font-bold">✓</span>
              Lifetime Course Access
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-accent font-bold">✓</span>
              Certificate of Completion
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-3 text-accent">Yam Education</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Our Mission</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-accent">Courses</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">All Courses</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Course Bundles</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Free Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-accent">Support</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-accent">Legal</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Yam Education. All rights reserved. | 
              <span className="text-accent"> Transform your career in 30 days.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CTAFooter;