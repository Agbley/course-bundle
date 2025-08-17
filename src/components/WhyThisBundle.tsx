import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, Trophy, Users, Clock, BookOpen } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Job-Ready Skills",
    description: "Focus on practical skills that employers actively seek, not theoretical knowledge."
  },
  {
    icon: Zap,
    title: "Fast-Track Learning",
    description: "Compressed timeline with intensive, focused content designed for quick mastery."
  },
  {
    icon: Trophy,
    title: "Expert Instructors",
    description: "Learn from industry veterans with 10+ years of real-world experience."
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a community of learners and get peer support throughout your journey."
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Self-paced learning that fits around your current commitments and lifestyle."
  },
  {
    icon: BookOpen,
    title: "Lifetime Access",
    description: "Keep learning and referencing materials long after completing the courses."
  }
];

const WhyThisBundle = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose This Bundle?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlike scattered online courses, our bundle is strategically designed 
            to build complementary skills that work together in the real workplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 bg-card border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">5</div>
              <div className="text-lg">Expert-Led Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">30</div>
              <div className="text-lg">Days to Job-Ready</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">80%</div>
              <div className="text-lg">Launch Discount</div>
            </div>
          </div>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of professionals who've already accelerated their careers 
            with our proven methodology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyThisBundle;