import React from 'react';
import { ArrowUpRight, MessageCircle, Mail, Award } from 'lucide-react';

export const FooterCTA: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#1c1917] text-[#faf6f0] pt-24 md:pt-36 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Soft background ambient glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#d9654c]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Conversion CTA Block */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="font-serif italic text-sm text-[#d9654c] tracking-wide block mb-4">
            Ready to build together?
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] tracking-tight mb-8">
            Everything begins with a <span className="italic text-[#d9654c]">conversation.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#a8a29e] font-light leading-relaxed mb-10 max-w-xl">
            Tell me about your platform, your scalability challenges, or your next major release. Let's engineer the optimal technical foundation together.
          </p>

          {/* Action Buttons Row with clean side-by-side icons and smooth hover */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/919986971805?text=Hi%20Saket,%20I%20would%20love%20to%20connect%20regarding%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="studio-btn px-7 py-3.5 rounded-full bg-[#d9654c] text-[#faf6f0] text-xs font-sans font-semibold tracking-wider uppercase hover:bg-[#b94e37] group"
            >
              <MessageCircle size={15} className="shrink-0" />
              <span className="whitespace-nowrap">WhatsApp</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>

            <a
              href="mailto:saket.saurav20@gmail.com"
              className="studio-btn px-7 py-3.5 rounded-full border border-[#44403c] bg-transparent text-[#faf6f0] text-xs font-sans font-semibold tracking-wider uppercase hover:border-[#faf6f0] group"
            >
              <Mail size={15} className="shrink-0" />
              <span className="whitespace-nowrap">Direct Email</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="studio-btn px-7 py-3.5 rounded-full border border-[#44403c] bg-transparent text-[#a8a29e] hover:text-[#faf6f0] text-xs font-sans font-semibold tracking-wider uppercase hover:border-[#faf6f0] group"
            >
              <span className="whitespace-nowrap">LinkedIn</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>
          </div>
        </div>

        {/* Quick Nav Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-[#292524] text-xs font-sans text-[#a8a29e]">
          <div>
            <span className="text-[#faf6f0] font-medium block mb-3 font-serif italic text-sm">Navigation</span>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-[#faf6f0] transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-[#faf6f0] transition-colors">Projects</a></li>
              <li><a href="#services" className="hover:text-[#faf6f0] transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-[#faf6f0] transition-colors">Process</a></li>
            </ul>
          </div>

          <div>
            <span className="text-[#faf6f0] font-medium block mb-3 font-serif italic text-sm">Specialties</span>
            <ul className="space-y-2">
              <li>Micro-Frontends & MFE</li>
              <li>WebAssembly & Blazor</li>
              <li>WDIO v8 E2E Testing</li>
              <li>Core Web Vitals</li>
            </ul>
          </div>

          <div>
            <span className="text-[#faf6f0] font-medium block mb-3 font-serif italic text-sm">Location & Contact</span>
            <ul className="space-y-2">
              <li>Bangalore, India</li>
              <li>+91 9986971805</li>
              <li>saket.saurav20@gmail.com</li>
            </ul>
          </div>

          <div>
            <span className="text-[#faf6f0] font-medium block mb-3 font-serif italic text-sm">Honors</span>
            <p className="text-[#78716c] leading-relaxed">
              1st Place National Winner — Smart India Hackathon (SIH 2019) under Goldman Sachs.
            </p>
          </div>
        </div>

        {/* Bottom Legal / Copyright Strip */}
        <div className="pt-8 border-t border-[#292524] flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-[#78716c] gap-4">
          <p>© {new Date().getFullYear()} Saket Saurav. Engineered with technical rigor and editorial precision.</p>
          <div className="flex items-center space-x-6">
            <a href="#top" className="hover:text-[#faf6f0] transition-colors">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
