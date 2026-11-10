import React from 'react';
import { Check, Code2, Award, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 bg-[#f5efeb] border-y border-[#e7e0d8] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <span className="font-serif italic text-sm text-[#d9654c] tracking-wide block mb-3">
            Who I Am
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1c1917] font-normal tracking-tight max-w-3xl leading-[1.15]">
            Behind every resilient architecture lies a single purpose:{' '}
            <span className="italic text-[#78716c]">making immense complexity feel completely invisible.</span>
          </h2>
        </div>

        {/* 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual Portrait & Metric Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#ffffff] border border-[#e7e0d8] rounded-3xl p-8 shadow-sm relative overflow-hidden">
              {/* Decorative background watermark */}
              <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-[#fbebe7] opacity-60 -z-0" />

              {/* Developer Avatar / Studio Portrait Badge */}
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-[#1c1917] text-[#faf6f0] flex items-center justify-center font-serif text-3xl font-normal mb-6 shadow-md">
                  SS
                </div>

                <h3 className="font-serif text-2xl text-[#1c1917] font-normal mb-1">
                  Saket Saurav
                </h3>
                <p className="font-sans text-xs text-[#78716c] uppercase tracking-wider mb-6">
                  Software Engineer 2 · UiPath
                </p>

                <p className="font-sans text-sm text-[#44403c] leading-relaxed mb-6 font-light">
                  Specializing at the intersection of mission-critical enterprise systems and high-fidelity user experiences.
                </p>

                <div className="space-y-3 pt-6 border-t border-[#f0eae1]">
                  <div className="flex items-center space-x-3 text-xs text-[#44403c]">
                    <span className="w-5 h-5 rounded-full bg-[#e3ebe0] flex items-center justify-center text-[#586f55]">
                      <Check size={12} />
                    </span>
                    <span>Micro-Frontends & Module Federation</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-[#44403c]">
                    <span className="w-5 h-5 rounded-full bg-[#e3ebe0] flex items-center justify-center text-[#586f55]">
                      <Check size={12} />
                    </span>
                    <span>WebAssembly & Blazor Workers</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-[#44403c]">
                    <span className="w-5 h-5 rounded-full bg-[#e3ebe0] flex items-center justify-center text-[#586f55]">
                      <Check size={12} />
                    </span>
                    <span>End-to-End Automation with WDIO v8</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stat Tiles */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#ffffff] border border-[#e7e0d8] rounded-2xl p-5">
                <span className="font-serif text-3xl text-[#d9654c] block">5+</span>
                <span className="font-sans text-xs text-[#78716c] mt-1 block">Years across distributed systems</span>
              </div>
              <div className="bg-[#ffffff] border border-[#e7e0d8] rounded-2xl p-5">
                <span className="font-serif text-3xl text-[#1c1917] block">SIH '19</span>
                <span className="font-sans text-xs text-[#78716c] mt-1 block">National Winner (Goldman Sachs)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6 font-sans text-base sm:text-lg text-[#44403c] font-light leading-relaxed">
            <p>
              I firmly believe that enterprise-grade software doesn't have to feel cumbersome or fragile. Across my career at global scale companies including <strong className="font-medium text-[#1c1917]">UiPath</strong>, <strong className="font-medium text-[#1c1917]">Aquera</strong>, <strong className="font-medium text-[#1c1917]">IBS Software</strong>, and <strong className="font-medium text-[#1c1917]">Accenture</strong>, I have led transitions from monolithic bottlenecks to decoupled, independent architectures.
            </p>

            <p>
              At UiPath, I contribute to the team driving <span className="text-[#1c1917] font-medium underline decoration-[#d9654c]/60 underline-offset-4">Action Centre and Document Understanding</span>, optimizing Core Web Vitals telemetry (LCP, render latencies, responsiveness) and guaranteeing that exhaustive WDIO v8 automated test suites protect every production release.
            </p>

            <p>
              My approach blends technical rigor with design precision: when an interface feels natural and the backend responds within milliseconds, distributed organizations execute without friction.
            </p>

            {/* Philosophy Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="bg-[#faf6f0] border border-[#e7e0d8] rounded-2xl p-6">
                <Code2 size={20} className="text-[#d9654c] mb-3" />
                <h4 className="font-serif text-lg text-[#1c1917] mb-1 font-normal">
                  Maintainable Code
                </h4>
                <p className="font-sans text-xs text-[#78716c] leading-relaxed">
                  Strict TypeScript contracts, clean module boundaries, and high-coverage test suites that inspire total confidence.
                </p>
              </div>

              <div className="bg-[#faf6f0] border border-[#e7e0d8] rounded-2xl p-6">
                <Zap size={20} className="text-[#81987e] mb-3" />
                <h4 className="font-serif text-lg text-[#1c1917] mb-1 font-normal">
                  Extreme Performance
                </h4>
                <p className="font-sans text-xs text-[#78716c] leading-relaxed">
                  Bundle size budgeting, strategic code-splitting, WebAssembly workers, and memory-leak prevention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
