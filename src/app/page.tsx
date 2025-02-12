import Navigation from "@/components/navigation/Navigation";
import HeroSection from '@/components/HeroSection';
import TraeHeroSection from '@/components/TraeHeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <TraeHeroSection />
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}
