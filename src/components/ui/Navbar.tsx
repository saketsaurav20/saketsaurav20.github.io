import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Toolkit', href: '#toolkit' },
    { label: 'Beyond Work', href: '#beyond-work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (href === '#top') {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(element as HTMLElement, { offset: -80, duration: 1.2 });
      } else {
        const topOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf6f0]/90 backdrop-blur-md border-b border-[#e7e0d8] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand signature */}
        <a
          href="#top"
          className="group flex items-center space-x-2"
          onClick={(e) => handleSmoothScroll(e, '#top')}
        >
          <span className="font-serif text-2xl md:text-3xl font-normal text-[#1c1917] tracking-tight group-hover:text-[#d9654c] transition-colors">
            Saket Saurav
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#d9654c] mb-1" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-[13px] font-sans font-medium text-[#44403c] tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="relative py-1 hover:text-[#1c1917] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d9654c] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary Action Button */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="mailto:saket.saurav20@gmail.com"
            className="studio-btn px-6 py-2.5 rounded-full border border-[#1c1917] bg-[#1c1917] text-[#faf6f0] text-xs font-sans font-semibold tracking-wider uppercase hover:bg-[#d9654c] hover:border-[#d9654c] group"
          >
            <span className="whitespace-nowrap">Let's Talk</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-[#1c1917] hover:text-[#d9654c] transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-[#faf6f0] border-b border-[#e7e0d8] shadow-xl px-6 py-8 flex flex-col space-y-5 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-lg font-serif italic text-[#1c1917] hover:text-[#d9654c] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:saket.saurav20@gmail.com"
            className="text-center py-3 rounded-full bg-[#1c1917] text-[#faf6f0] text-xs font-semibold uppercase tracking-wider mt-4"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
};
