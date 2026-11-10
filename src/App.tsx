import { useEffect } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/ui/Preloader';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/ui/Navbar';
import { HeroSection } from './components/ui/HeroSection';
import { AboutSection } from './components/ui/AboutSection';
import { ProjectsCarousel } from './components/ui/ProjectsCarousel';
import { ToolkitSection } from './components/ui/ToolkitSection';
import { BeyondWorkSection } from './components/ui/BeyondWorkSection';
import { ServicesSection } from './components/ui/ServicesSection';
import { ProcessSection } from './components/ui/ProcessSection';
import { TestimonialsMarquee } from './components/ui/TestimonialsMarquee';
import { FaqAccordion } from './components/ui/FaqAccordion';
import { FooterCTA } from './components/ui/FooterCTA';

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll for fluid editorial motion
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });

    (window as any).__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#faf6f0] text-[#1c1917] font-sans selection:bg-[#d9654c] selection:text-[#faf6f0]">
      {/* Editorial Loading Screen matching lamagadan.studio */}
      <Preloader />

      {/* Editorial Film Grain Noise Overlay */}
      <div className="noise-overlay" />

      {/* Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Sticky Studio Navigation */}
      <Navbar />

      {/* Structured Sections matching lamagadan.studio flow */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsCarousel />
        <ToolkitSection />
        <BeyondWorkSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsMarquee />
        <FaqAccordion />
      </main>

      {/* Conversion Footer */}
      <FooterCTA />
    </div>
  );
}
