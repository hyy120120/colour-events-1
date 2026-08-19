import HeroSection from "@/components/home/HeroSection";
import StatementSection from "@/components/home/StatementSection";
import FeaturedWorkGrid from "@/components/home/FeaturedWorkGrid";
import ServicesHighlight from "@/components/home/ServicesHighlight";
import ClienteleGrid from "@/components/home/ClienteleGrid";
import LeadershipSection from "@/components/home/LeadershipSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatementSection />
      <FeaturedWorkGrid />
      <ServicesHighlight />
      <ClienteleGrid />
      <LeadershipSection />
    </>
  );
}
