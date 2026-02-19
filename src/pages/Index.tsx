import HeroSection from "@/components/sections/HeroSection";
import ExecutiveOverview from "@/components/sections/ExecutiveOverview";
import MarketContext from "@/components/sections/MarketContext";
import BrandFoundation from "@/components/sections/BrandFoundation";
import DigitalInfrastructure from "@/components/sections/DigitalInfrastructure";
import AuthorityTrust from "@/components/sections/AuthorityTrust";
import DigitalPerformance from "@/components/sections/DigitalPerformance";
import ExperientialActivation from "@/components/sections/ExperientialActivation";
import ExecutionRoadmap from "@/components/sections/ExecutionRoadmap";
import MarketingBudget from "@/components/sections/MarketingBudget";
import PerformanceFramework from "@/components/sections/PerformanceFramework";
import OwnerDecisionFramework from "@/components/sections/OwnerDecisionFramework";
import Year2Transition from "@/components/sections/Year2Transition";
import Footer from "@/components/Footer";
import DownloadButton from "@/components/DownloadButton";

const Index = () => {
  console.log("Index page rendering");
  return (
    <div className="bg-background min-h-screen">
      <DownloadButton />
      <HeroSection />
      <ExecutiveOverview />
      <MarketContext />
      <BrandFoundation />
      <DigitalInfrastructure />
      <AuthorityTrust />
      <DigitalPerformance />
      <ExperientialActivation />
      <ExecutionRoadmap />
      <MarketingBudget />
      <PerformanceFramework />
      <OwnerDecisionFramework />
      <Year2Transition />
      <Footer />
    </div>
  );
};

export default Index;
