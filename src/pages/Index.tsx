
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Bonus from "@/components/Bonus";
import TargetAudience from "@/components/TargetAudience";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Bonus />
      <TargetAudience />
      <FinalCTA />
    </div>
  );
};

export default Index;
