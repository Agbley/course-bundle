import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional learning environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="mb-6">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 Limited Time Launch Offer
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block">Job Ready</span>
          <span className="block text-accent">in 30 Days</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Master in-demand workplace skills with our handpicked bundle of 5 practical courses. 
          Start your career transformation today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="accent" size="lg" className="text-lg px-8 py-6 h-auto">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto bg-white/10 border-white/20 text-white hover:bg-white/20">
            <Play className="mr-2 h-5 w-5" />
            Watch Preview
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-accent font-semibold">✓</span>
            5 Comprehensive Courses
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent font-semibold">✓</span>
            Expert Instructors
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent font-semibold">✓</span>
            30-Day Career Plan
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;