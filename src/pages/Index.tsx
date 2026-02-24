import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CredibilityBanner from '@/components/CredibilityBanner';
import ProductsSection from '@/components/ProductsSection';
import CareerTimeline from '@/components/CareerTimeline';
import SkillsSection from '@/components/SkillsSection';
import PhilosophySection from '@/components/PhilosophySection';
import MetricsSection from '@/components/MetricsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const scrollRef = useScrollReveal();

  return (
    <div ref={scrollRef} className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CredibilityBanner />
      <MetricsSection />
      <ProductsSection />
      <CareerTimeline />
      <SkillsSection />
      <PhilosophySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
