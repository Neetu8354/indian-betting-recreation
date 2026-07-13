import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { StatsBar } from "@/components/StatsBar";
import { WinnersTicker } from "@/components/WinnersTicker";
import { TrustSection } from "@/components/TrustSection";
import { PopularGames } from "@/components/PopularGames";
import { GameSections } from "@/components/GameSections";
import { LiveScores } from "@/components/LiveScores";
import { Promotions } from "@/components/Promotions";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { PaymentBar } from "@/components/PaymentBar";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useSeo } from "@/hooks/use-seo";

const Index = () => {
  useSeo({
    title: "Khelo24Admin – Online Cricket Betting & Casino Games India",
    description: "Join Khelo24Admin for online cricket betting, live casino games, Aviator and Teen Patti in India. Fast registration, mobile-friendly platform and 24/7 player support. 18+ Only.",
    canonical: "/",
    keywords: "khelo24login, khelo24admin, online cricket betting, casino games india, aviator game, teen patti online, fast withdrawal betting, safe online sports betting",
  });

  return (
    <main>
      <Header />
      <h1 className="sr-only">Play Online Games on Khelo24Admin.live</h1>
      <HeroSlider />
      <StatsBar />
      <WinnersTicker />
      <TrustSection />
      <PopularGames />
      <GameSections />
      <LiveScores />
      <Promotions />
      <WhatsAppCTA />
      <PaymentBar />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
