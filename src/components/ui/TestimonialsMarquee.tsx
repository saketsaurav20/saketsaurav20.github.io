import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const TestimonialsMarquee: React.FC = () => {
  const [activeQuote, setActiveQuote] = useState(0);

  const testimonials = [
    {
      text: "Saket transformed how our engineering teams deploy frontend modules. His implementation of micro-frontends and WDIO v8 automation in UiPath Action Centre completely eliminated release day regressions.",
      name: "Engineering Lead",
      role: "UiPath Automation Platform",
      org: "UiPath Enterprise",
    },
    {
      text: "His ability to take a zero-to-one concept like our Low-Code Identity UI at Aquera and turn it into a high-performance, reactive platform in record time was exceptional.",
      name: "Product & Architecture Director",
      role: "Workflow & Identity Systems",
      org: "Aquera Technologies",
    },
    {
      text: "Saket delivered flawless UI components under ANA's stringent aviation SLAs. His attention to code splitting, accessibility, and modular styles made our codebase a pleasure to work with.",
      name: "Principal Architect",
      role: "Airline Reservation Engine",
      org: "IBS Software",
    },
    {
      text: "Winner of Smart India Hackathon 2019 out of thousands of engineering participants nationwide. His team's architecture for Goldman Sachs was standout in both technical depth and UI elegance.",
      name: "Hackathon Evaluation Jury",
      role: "Ministry of Education & Goldman Sachs",
      org: "SIH 2019 National Finals",
    },
  ];

  const nextQuote = () => {
    setActiveQuote((prev) => (prev + 1) % testimonials.length);
  };

  const prevQuote = () => {
    setActiveQuote((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeQuote];

  return (
    <section id="testimonials" className="py-24 md:py-36 bg-[#f5efeb] border-y border-[#e7e0d8] overflow-hidden relative">
      {/* Signature Infinite Marquee Ticker Headline in English */}
      <div className="mb-20 py-4 border-y border-[#e7e0d8] bg-[#faf6f0]">
        <div className="marquee-container">
          <div className="marquee-content animate-marquee font-serif text-2xl sm:text-3xl md:text-4xl italic text-[#1c1917] whitespace-nowrap">
            <span>Engineering teams & leaders I have scaled systems with</span>
            <span className="text-[#d9654c] mx-4">✦</span>
            <span>Engineering teams & leaders I have scaled systems with</span>
            <span className="text-[#d9654c] mx-4">✦</span>
            <span>Engineering teams & leaders I have scaled systems with</span>
            <span className="text-[#d9654c] mx-4">✦</span>
          </div>
          <div className="marquee-content animate-marquee font-serif text-2xl sm:text-3xl md:text-4xl italic text-[#1c1917] whitespace-nowrap" aria-hidden="true">
            <span>Engineering teams & leaders I have scaled systems with</span>
            <span className="text-[#d9654c] mx-4">✦</span>
            <span>Engineering teams & leaders I have scaled systems with</span>
            <span className="text-[#d9654c] mx-4">✦</span>
            <span>Engineering teams & leaders I have scaled systems with</span>
            <span className="text-[#d9654c] mx-4">✦</span>
          </div>
        </div>
      </div>

      {/* Testimonial Pull-Quote Showcase */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative">
        {/* Large Decorative Quotation Glyph */}
        <span className="font-serif text-7xl md:text-9xl text-[#d9654c]/20 block leading-none select-none mb-[-2rem]">
          “
        </span>

        <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1c1917] font-normal leading-snug tracking-tight mb-10">
          {current.text}
        </blockquote>

        <div className="mb-8">
          <cite className="not-italic font-sans text-sm font-semibold text-[#1c1917] block">
            {current.name}
          </cite>
          <span className="font-sans text-xs text-[#78716c] block mt-0.5">
            {current.role} · <strong className="font-normal text-[#1c1917]">{current.org}</strong>
          </span>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center space-x-3">
          <button
            onClick={prevQuote}
            className="w-10 h-10 rounded-full border border-[#1c1917] flex items-center justify-center text-[#1c1917] hover:bg-[#1c1917] hover:text-[#faf6f0] transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={16} />
          </button>
          <span className="font-serif italic text-xs text-[#78716c] px-3">
            0{activeQuote + 1} / 0{testimonials.length}
          </span>
          <button
            onClick={nextQuote}
            className="w-10 h-10 rounded-full border border-[#1c1917] flex items-center justify-center text-[#1c1917] hover:bg-[#1c1917] hover:text-[#faf6f0] transition-colors"
            aria-label="Next testimonial"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
