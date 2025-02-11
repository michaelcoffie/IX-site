import HeroSection from "./HeroSection";
import NewsCarousel from "./NewsCarousel";
import QuickAccessGrid from "./QuickAccessGrid";
import SocialFeed from "./SocialFeed";
import StatsSection from "./StatsSection";

import ChapterShowcase from "./ChapterShowcase";

function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <HeroSection />
      <ChapterShowcase />
      <NewsCarousel />
      <QuickAccessGrid />
      <SocialFeed />
      <StatsSection />
    </div>
  );
}

export default Home;
