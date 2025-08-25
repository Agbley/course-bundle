import { HeroSection } from "@/components/HeroSection";
import { CourseBundleOverview } from "@/components/CourseBundleOverview";
import { WhyThisBundle } from "@/components/WhyThisBundle";
import { InstructorHighlights } from "@/components/InstructorHighlights";
import { CTAFooter } from "@/components/CTAFooter";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CourseBundleOverview />
      <WhyThisBundle />
      <InstructorHighlights />
      <CTAFooter />
      <Toaster />
    </div>
  );
};

export default Index;
