import Navigation from '@/components/navigation/Navigation';
import ImageSection from '@/components/sections/ImageSection';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <HeroSection />
        <ImageSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}
