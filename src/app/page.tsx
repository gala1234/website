import Navigation from '@/components/navigation/Navigation';
import ImageSection from '@/components/ImageSection';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

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
