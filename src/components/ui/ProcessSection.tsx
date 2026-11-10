import React from 'react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Diagnostic & Architecture Blueprint',
      subtitle: 'Mapping current state, bottlenecks, and boundaries',
      text: 'We analyze dependency graphs, existing Core Web Vitals telemetry, and team deployment workflows to define clear domain boundaries, shared contracts, and isolation tiers.',
      deliverables: [
        'Dependency audit & bundle composition analysis',
        'Micro-frontend boundaries & shared singleton definitions',
        'Risk mitigation roadmap with fallback strategy',
      ],
    },
    {
      number: '02',
      title: 'Modular Prototyping & Module Federation',
      subtitle: 'Constructing independent, fault-tolerant foundations',
      text: 'We configure local development environments and CI integration pipelines. Each module compiles and tests in complete isolation before composing into the host shell.',
      deliverables: [
        'Webpack / Vite Module Federation setup',
        'Strictly typed TypeScript contracts shared via NPM / subpackages',
        'Decoupled local developer sandboxes',
      ],
    },
    {
      number: '03',
      title: 'Rigorous Implementation & Test Automation',
      subtitle: 'Clean code backed by deterministic E2E test suites',
      text: 'Developing accessible, responsive components paired with WDIO v8 end-to-end suites that ensure cross-boundary regressions are caught long before hitting staging.',
      deliverables: [
        'Strictly typed UI components with clear layer separation',
        'Deterministic WDIO v8 suites covering critical paths',
        'Automated PR regression checks and code coverage gates',
      ],
    },
    {
      number: '04',
      title: 'Telemetry Optimization & Production Release',
      subtitle: 'Real-time telemetry and zero-downtime deployment',
      text: 'Continuous Core Web Vitals profiling in production via Azure Application Insights, ensuring real users experience sub-second response times and immediate interactivity.',
      deliverables: [
        'Performance & runtime error telemetry dashboards',
        'Progressive rollout strategy (Canary / Blue-Green)',
        'Comprehensive technical documentation for internal engineering teams',
      ],
    },
  ];

  return (
    <section id="process" className="py-24 md:py-36 px-6 md:px-12 bg-[#faf6f0] relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-serif italic text-sm text-[#d9654c] tracking-wide block mb-3">
            My Process
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1c1917] font-normal tracking-tight leading-[1.15]">
            How we engineer together:{' '}
            <span className="italic text-[#78716c]">from initial blueprint to production with zero friction.</span>
          </h2>
        </div>

        {/* Stepped Timeline */}
        <div className="space-y-12 relative before:content-[''] before:absolute before:left-6 md:before:left-12 before:top-4 before:bottom-4 before:w-[1px] before:bg-[#e7e0d8]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative pl-16 md:pl-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
            >
              {/* Number Circle on the Timeline */}
              <div className="absolute left-0 top-0 w-12 md:w-24 flex items-center justify-start">
                <span className="w-12 h-12 rounded-full bg-[#ffffff] border border-[#1c1917] text-[#1c1917] font-serif text-base flex items-center justify-center font-normal shadow-sm group-hover:bg-[#1c1917] group-hover:text-[#faf6f0] transition-colors">
                  {step.number}
                </span>
              </div>

              {/* Title & Narrative */}
              <div className="lg:col-span-7">
                <span className="font-sans text-xs text-[#78716c] uppercase tracking-wider block mb-1">
                  {step.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1c1917] font-normal mb-4">
                  {step.title}
                </h3>
                <p className="font-sans text-base text-[#44403c] font-light leading-relaxed">
                  {step.text}
                </p>
              </div>

              {/* Deliverables Card */}
              <div className="lg:col-span-5 bg-[#ffffff] border border-[#e7e0d8] rounded-2xl p-6 shadow-sm">
                <span className="font-serif italic text-xs text-[#d9654c] block mb-3">
                  Phase Deliverables
                </span>
                <ul className="space-y-2">
                  {step.deliverables.map((deliv, dIdx) => (
                    <li
                      key={dIdx}
                      className="font-sans text-xs text-[#44403c] font-light flex items-start space-x-2"
                    >
                      <span className="text-[#81987e] font-bold">✓</span>
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
