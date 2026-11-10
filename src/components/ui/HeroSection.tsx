import React from 'react';
import { ArrowUpRight, Calendar, Sparkles } from 'lucide-react';
import {
  TallBlueFlower,
  CactiBerryFlower,
  WideOrangeBellFlower,
  FloatingOrangeAsterisk,
  FloatingBadge1,
  FloatingBadge2,
  FloatingBadge3
} from './StudioIllustrations';

export const HeroSection: React.FC = () => {
  return (
    <section id="top" className="relative min-h-[90vh] md:min-h-screen pt-32 md:pt-40 pb-20 px-6 md:px-12 flex flex-col justify-between overflow-hidden">
      {/* Background soft ambient tints */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f5dfd5]/40 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#e3ebe0]/40 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Floating Asterisk stars like lamagadan.studio */}
      <div className="hidden lg:block absolute top-28 left-24 animate-float">
        <FloatingOrangeAsterisk size={32} />
      </div>
      <div className="hidden lg:block absolute bottom-32 left-1/4 animate-float-slow">
        <FloatingOrangeAsterisk size={24} />
      </div>
      <div className="hidden lg:block absolute top-40 right-1/4 animate-float">
        <FloatingOrangeAsterisk size={28} />
      </div>

      {/* Floating Badges inspired by hero-volador elements */}
      <div className="hidden lg:block absolute top-36 right-16 animate-float">
        <FloatingBadge1 />
      </div>
      <div className="hidden lg:block absolute bottom-44 left-12 animate-float-slow">
        <FloatingBadge2 />
      </div>
      <div className="hidden xl:block absolute top-1/2 right-24 animate-float">
        <FloatingBadge3 />
      </div>

      {/* Centered Main Hero Block */}
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center text-center relative z-10 my-auto">
        {/* Subtle pill tag - fully isolated on its own centered row */}
        <div className="flex justify-center w-full mb-8">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#e7e0d8] bg-[#ffffff]/80 backdrop-blur-sm text-xs font-sans text-[#78716c] shadow-xs">
            <Sparkles size={12} className="text-[#d9654c]" />
            <span>Frontend Architecture & Automation Engineering</span>
          </div>
        </div>

        {/* Large Typographic Headline - perfectly centered and balanced like lamagadan.studio */}
        <div className="w-full flex justify-center mb-8">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#1c1917] leading-[1.14] tracking-tight text-center">
            <span className="relative inline-block">
              <span className="hidden sm:inline-block absolute -top-4 -left-7">
                <FloatingOrangeAsterisk size={24} />
              </span>
              Architecture
            </span>{' '}
            <TallBlueFlower />{' '}
            <span>for</span>
            <br className="hidden sm:inline" />
            <span>platforms</span>{' '}
            <CactiBerryFlower />{' '}
            <span>with a</span>
            <br className="hidden sm:inline" />
            <span className="relative inline-block">
              <span className="hidden sm:inline-block absolute -bottom-4 -left-6">
                <FloatingOrangeAsterisk size={20} />
              </span>
              story
            </span>{' '}
            <WideOrangeBellFlower />{' '}
            <span>to scale</span>{' '}
            <FloatingOrangeAsterisk size={28} className="align-middle ml-1" />
          </h1>
        </div>

        {/* Empathetic & authoritative subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#78716c] font-sans font-light leading-relaxed mb-12 text-center">
          Hi, I am <span className="text-[#1c1917] font-medium">Saket Saurav</span>. Software Engineer 2 at{' '}
          <span className="text-[#1c1917] font-medium border-b border-[#d9654c]">UiPath</span>. Architecting resilient
          micro-frontends, WebAssembly integrations, and high-performance test automation platforms.
        </p>

        {/* Action Button Row with clean, side-by-side icons and smooth hover */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <a
            href="https://wa.me/919986971805?text=Hi%20Saket,%20I%20would%20love%20to%20connect%20regarding%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="studio-btn w-full sm:w-auto px-8 py-4 rounded-full bg-[#1c1917] text-[#faf6f0] text-xs font-sans font-semibold tracking-wider uppercase hover:bg-[#d9654c] shadow-sm group"
          >
            <span className="whitespace-nowrap">Chat via WhatsApp</span>
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </a>

          <a
            href="mailto:saket.saurav20@gmail.com"
            className="studio-btn studio-btn-outline w-full sm:w-auto px-8 py-4 rounded-full border border-[#e7e0d8] bg-[#ffffff] text-[#1c1917] text-xs font-sans font-semibold tracking-wider uppercase hover:border-[#1c1917] group"
          >
            <Calendar size={15} className="text-[#d9654c] shrink-0" />
            <span className="whitespace-nowrap">Schedule 30-Min Call</span>
            <ArrowUpRight size={13} className="text-[#78716c] group-hover:text-[#1c1917] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </a>
        </div>
      </div>

      {/* Bottom Editorial Strip */}
      <div className="max-w-6xl mx-auto w-full pt-12 border-t border-[#e7e0d8] mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
        <div>
          <span className="font-serif italic text-xs text-[#78716c] block">Location</span>
          <p className="font-sans text-sm text-[#1c1917] font-medium mt-0.5">Bangalore, India</p>
        </div>
        <div>
          <span className="font-serif italic text-xs text-[#78716c] block">Current Focus</span>
          <p className="font-sans text-sm text-[#1c1917] font-medium mt-0.5">UiPath Action Centre</p>
        </div>
        <div>
          <span className="font-serif italic text-xs text-[#78716c] block">National Honor</span>
          <p className="font-sans text-sm text-[#1c1917] font-medium mt-0.5">SIH Winner (Goldman Sachs)</p>
        </div>
        <div>
          <span className="font-serif italic text-xs text-[#78716c] block">Availability</span>
          <p className="font-sans text-sm text-[#1c1917] font-medium mt-0.5 flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[#81987e] inline-block animate-pulse" />
            <span>Open to collaboration</span>
          </p>
        </div>
      </div>
    </section>
  );
};
