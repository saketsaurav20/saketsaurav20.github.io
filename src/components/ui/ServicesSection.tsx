import React from 'react';
import { ArrowUpRight, Cpu, Layers, Gauge, ShieldCheck } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      tag: 'Frontend Architecture',
      model: 'Consultancy / Project',
      timeline: '2 – 4 weeks',
      title: 'Micro-Frontends & Module Federation Transition',
      description: 'Decouple monolithic web applications into autonomous micro-frontends, empowering distributed teams to ship code independently without collisions.',
      bullets: [
        'Runtime contract definitions and domain boundary design',
        'Webpack Module Federation or Vite micro-runtime configurations',
        'Secure shared state strategies and memory leak prevention',
        'Phased zero-downtime migration blueprints',
      ],
      badge: 'Most Requested',
    },
    {
      tag: 'Extreme Performance',
      model: 'Audit & Optimization',
      timeline: '1 – 3 weeks',
      title: 'Core Web Vitals & WebAssembly Optimization',
      description: 'Elevate your LCP, FID, and INP metrics to the 95th percentile. Integrate C++/Rust modules via WebAssembly for intensive in-browser computation.',
      bullets: [
        'Deep diagnostic profiling of main-thread execution bottlenecks',
        'Web Worker and Blazor WASM architectures for background processing',
        'Advanced code-splitting strategies and critical resource prioritization',
        'Continuous telemetry monitoring via Azure Application Insights',
      ],
      badge: 'High Impact',
    },
    {
      tag: 'Automation & Quality',
      model: 'E2E Architecture',
      timeline: '2 – 5 weeks',
      title: 'Resilient E2E Test Infrastructure with WDIO v8 & Jest',
      description: 'Engineer fast, dependable automated test suites that eliminate flaky tests and protect mission-critical production release pipelines.',
      bullets: [
        'Scalable Page Object Model (POM) design patterns',
        'CI/CD integration for GitHub Actions and Azure DevOps pipelines',
        'Exhaustive cross-boundary testing across interconnected micro-frontends',
        'Automated regression dashboards and build stability metrics',
      ],
      badge: 'Continuous Quality',
    },
  ];

  const addons = [
    {
      icon: <Layers size={20} className="text-[#d9654c]" />,
      title: 'Design Systems & Tokens',
      desc: 'Accessible, thoroughly documented component libraries with Emotion, Tailwind, or CSS Modules ready to scale.',
    },
    {
      icon: <Cpu size={20} className="text-[#81987e]" />,
      title: 'No-Code / Low-Code Engines',
      desc: 'Visual workflow builders and dynamic form generators turning complex business rules into intuitive UIs.',
    },
    {
      icon: <Gauge size={20} className="text-[#c99a4c]" />,
      title: 'UI Architecture Reviews',
      desc: 'Strategic code reviews to uncover architectural antipatterns and security flaws before reaching production.',
    },
    {
      icon: <ShieldCheck size={20} className="text-[#1c1917]" />,
      title: 'Client-Side Security & SLAs',
      desc: 'Input sanitization, XSS mitigation, and compliance with strict high-concurrency enterprise availability SLAs.',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-36 px-6 md:px-12 bg-[#f5efeb] border-t border-[#e7e0d8] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="font-serif italic text-sm text-[#d9654c] tracking-wide block mb-3">
            Services & Capabilities
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1c1917] font-normal tracking-tight leading-[1.12]">
            Choose where we begin.{' '}
            <span className="italic text-[#78716c]">I guide you through every architectural milestone.</span>
          </h2>
        </div>

        {/* Primary Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((serv) => (
            <div
              key={serv.title}
              className="bg-[#ffffff] border border-[#e7e0d8] rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-[#f5efeb] text-[#78716c] border border-[#e7e0d8]">
                    {serv.tag}
                  </span>
                  <span className="font-serif italic text-xs text-[#d9654c]">
                    {serv.badge}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="font-sans text-xs text-[#78716c] block">Engagement</span>
                  <span className="font-serif text-lg text-[#1c1917] font-medium block">
                    {serv.model} · <span className="font-sans text-xs font-normal text-[#78716c]">{serv.timeline}</span>
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#1c1917] font-normal mb-3 leading-snug">
                  {serv.title}
                </h3>

                <p className="font-sans text-sm text-[#44403c] font-light leading-relaxed mb-6">
                  {serv.description}
                </p>

                <div className="space-y-2.5 pt-6 border-t border-[#f0eae1] mb-8">
                  {serv.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="font-sans text-xs text-[#44403c] font-light flex items-start space-x-2">
                      <span className="text-[#d9654c] font-bold">—</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="mailto:saket.saurav20@gmail.com?subject=Architecture%20Inquiry"
                className="studio-btn w-full py-3.5 rounded-full border border-[#1c1917] text-center text-xs font-sans font-semibold uppercase tracking-wider hover:bg-[#1c1917] hover:text-[#faf6f0] transition-colors group"
              >
                <span className="whitespace-nowrap">Request Proposal</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>
            </div>
          ))}
        </div>

        {/* Pricing & Scope Clarification Note */}
        <p className="text-center font-sans text-xs text-[#78716c] italic max-w-xl mx-auto mb-20">
          * Indicative scope and timelines tailored to team size, dependency complexity, and existing codebase maturity.
        </p>

        {/* Secondary Addons: "Complementary Capabilities" */}
        <div className="pt-12 border-t border-[#e7e0d8]">
          <h3 className="font-serif text-2xl md:text-3xl text-[#1c1917] font-normal mb-8">
            Complementary Expertise
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon) => (
              <div
                key={addon.title}
                className="bg-[#ffffff] border border-[#e7e0d8] rounded-2xl p-6 hover:border-[#b8aba0] transition-colors"
              >
                <div className="mb-4">{addon.icon}</div>
                <h4 className="font-serif text-lg text-[#1c1917] font-normal mb-2">
                  {addon.title}
                </h4>
                <p className="font-sans text-xs text-[#78716c] font-light leading-relaxed">
                  {addon.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
