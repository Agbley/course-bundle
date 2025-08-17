import HeroSection from "@/components/HeroSection";
import CourseBundleOverview from "@/components/CourseBundleOverview";
import WhyThisBundle from "@/components/WhyThisBundle";
import InstructorHighlights from "@/components/InstructorHighlights";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CourseBundleOverview />
      <WhyThisBundle />
      <InstructorHighlights />
      <CTAFooter />
    </div>
  );
};

export default Index;
