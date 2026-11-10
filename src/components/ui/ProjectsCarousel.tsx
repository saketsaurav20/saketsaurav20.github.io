import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export interface ProjectItem {
  id: string;
  company: string;
  title: string;
  role: string;
  period: string;
  location: string;
  category: string;
  description: string;
  color: string;
  bgTint: string;
  stats: { label: string; value: string }[];
  highlights: string[];
  tags: string[];
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'uipath',
    company: 'UiPath',
    title: 'Action Centre & Document Understanding MFE',
    role: 'Software Engineer 2',
    period: '2024 – Present',
    location: 'Bangalore, India',
    category: 'Micro-Frontends & WebAssembly',
    description: 'Enterprise task orchestration and automated document data extraction platform powered by a decoupled micro-frontend runtime architecture.',
    color: '#d9654c',
    bgTint: '#fbebe7',
    stats: [
      { label: 'E2E Testing', value: 'WDIO v8' },
      { label: 'Integration', value: 'WASM + Blazor' },
      { label: 'Telemetry', value: 'Core Web Vitals' },
    ],
    highlights: [
      'Spearheaded critical fixes and enhancements for E2E test suites in Action Centre using WDIO v8.',
      'Implemented Micro-Frontend (MFE) architecture enabling autonomous cross-team deployment lifecycles.',
      'Engineered Auto Variable Creation feature powering multi-facet Document Understanding capabilities.',
      'Optimized Azure telemetry monitoring for Largest Contentful Paint (LCP) and render time regressions.',
    ],
    tags: ['Micro-Frontends', 'TypeScript', 'WebAssembly', 'Blazor', 'WDIO v8', 'Azure'],
  },
  {
    id: 'aquera',
    company: 'Aquera',
    title: 'No-Code / Low-Code JML Identity Workflow Engine',
    role: 'Member Technical Staff - II',
    period: '2023 – 2024',
    location: 'Bangalore, India',
    category: 'Workflow Automation & React',
    description: 'Zero-to-one visual workflow UI platform automating Joiner, Mover, and Leaver (JML) identity lifecycles with multi-modal trigger pipelines.',
    color: '#81987e',
    bgTint: '#eef3ec',
    stats: [
      { label: 'Architecture', value: 'Zero-to-One' },
      { label: 'Triggers', value: 'Event & Schedule' },
      { label: 'Performance', value: 'Selective Caching' },
    ],
    highlights: [
      'Architected and deployed from scratch a zero-to-one No-Code/Low-Code UI platform for identity management.',
      'Engineered multi-modal execution engines for schedule triggers, event triggers, and cross-workflow pipes.',
      'Implemented rigorous UI optimizations including code-splitting, selective rendering barriers, and state caching.',
    ],
    tags: ['ReactJS', 'Workflow Engine', 'State Caching', 'Code-Splitting', 'TypeScript'],
  },
  {
    id: 'ibs',
    company: 'IBS Software',
    title: 'Global Airline Reservation Engine for ANA (Japan)',
    role: 'Senior Software Engineer (ReactJS)',
    period: '2022',
    location: 'Bangalore, India',
    category: 'High-Concurrency E-Commerce',
    description: 'High-concurrency reusable flight reservation booking components satisfying stringent aviation accessibility standards and SLA guarantees.',
    color: '#c99a4c',
    bgTint: '#fbf4e8',
    stats: [
      { label: 'Client', value: 'All Nippon Airways' },
      { label: 'Styling', value: '@Emotion + SCSS' },
      { label: 'SLA', value: '99.9% Booking UX' },
    ],
    highlights: [
      'Built high-concurrency reusable seat reservation and fare selection components for Nippon Airlines (ANA).',
      'Engineered modular styling architectures utilizing @Emotion Styled Components and SCSS design tokens.',
      'Translated complex wireframes into pixel-perfect interfaces with strict accessibility standards.',
    ],
    tags: ['ReactJS', '@Emotion', 'SCSS Tokens', 'High Concurrency', 'Aviation SLA'],
  },
  {
    id: 'accenture',
    company: 'Accenture',
    title: 'Cardinal Health Med-Pharma Commercial Portal',
    role: 'Frontend Development Associate',
    period: '2020 – 2022',
    location: 'Bangalore, India',
    category: 'Healthcare Enterprise Systems',
    description: 'Mission-critical commercial portal for pharmaceutical and healthcare distribution with predictable application state flows in Redux.',
    color: '#78716c',
    bgTint: '#f5efeb',
    stats: [
      { label: 'Testing', value: 'Jest Suites' },
      { label: 'State', value: 'Redux Enterprise' },
      { label: 'Domain', value: 'Cardinal Health' },
    ],
    highlights: [
      'Engineered mission-critical frontend components for Cardinal Health INC Med-Pharma commercial portal.',
      'Spearheaded Redux application state flows, achieving high test coverage with Jest unit testing suites.',
      'Built robust UI systems using SCSS and Material UI for sensitive healthcare workflows.',
    ],
    tags: ['ReactJS', 'Redux', 'Jest', 'Material UI', 'Healthcare Commerce'],
  },
];

export const ProjectsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = PORTFOLIO_PROJECTS;

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const current = projects[currentIndex];

  return (
    <section id="projects" className="py-24 md:py-36 px-6 md:px-12 bg-[#faf6f0] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header with Carousel Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#e7e0d8] gap-6">
          <div>
            <span className="font-serif italic text-sm text-[#d9654c] tracking-wide block mb-3">
              Selected Works
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1c1917] font-normal tracking-tight">
              Systems and platforms that have transformed real enterprise workflows.
            </h2>
          </div>

          {/* Minimalist Arrow Navigation Controls */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={prevProject}
              className="w-12 h-12 rounded-full border border-[#1c1917] flex items-center justify-center text-[#1c1917] hover:bg-[#1c1917] hover:text-[#faf6f0] transition-colors"
              aria-label="Previous project"
            >
              <ArrowLeft size={18} />
            </button>
            <span className="font-serif italic text-sm text-[#78716c] px-2">
              0{currentIndex + 1} / 0{projects.length}
            </span>
            <button
              onClick={nextProject}
              className="w-12 h-12 rounded-full border border-[#1c1917] flex items-center justify-center text-[#1c1917] hover:bg-[#1c1917] hover:text-[#faf6f0] transition-colors"
              aria-label="Next project"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Featured Project Showcase Card (Slider View) */}
        <div className="bg-[#ffffff] border border-[#e7e0d8] rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 transition-all duration-500">
          {/* Visual Schematic Panel */}
          <div
            className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#e7e0d8]"
            style={{ backgroundColor: current.bgTint }}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-[#ffffff] border border-[#e7e0d8] text-[#1c1917]">
                  {current.category}
                </span>
                <span className="font-serif italic text-sm text-[#78716c]">
                  {current.period}
                </span>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-[#ffffff] border border-[#e7e0d8] flex items-center justify-center text-2xl font-serif text-[#1c1917] mb-6 shadow-sm">
                {current.company.substring(0, 2).toUpperCase()}
              </div>

              <h3 className="font-serif text-3xl md:text-4xl text-[#1c1917] font-normal mb-3">
                {current.company}
              </h3>
              <p className="font-sans text-sm text-[#78716c] mb-6">
                {current.role} · {current.location}
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-2 pt-6 border-t border-[#e2d7cb]">
              {current.stats.map((stat) => (
                <div key={stat.label}>
                  <span className="font-sans text-[10px] text-[#78716c] uppercase block">
                    {stat.label}
                  </span>
                  <span className="font-serif text-sm md:text-base text-[#1c1917] font-medium block mt-0.5">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Details & Highlights Panel */}
          <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h4 className="font-serif text-2xl sm:text-3xl text-[#1c1917] font-normal mb-4">
                {current.title}
              </h4>
              <p className="font-sans text-base text-[#44403c] font-light leading-relaxed mb-8">
                {current.description}
              </p>

              <div className="space-y-3 mb-8">
                <span className="font-serif italic text-xs text-[#78716c] block mb-2 uppercase tracking-wider">
                  Key Technical Impact & Milestones
                </span>
                {current.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm text-[#44403c]">
                    <CheckCircle2 size={16} className="text-[#d9654c] shrink-0 mt-0.5" />
                    <span className="font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags & Action Link */}
            <div className="pt-8 border-t border-[#f0eae1] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#f5efeb] text-xs font-sans text-[#78716c] border border-[#e7e0d8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="mailto:saket.saurav20@gmail.com?subject=Inquiry%20about%20Architecture"
                className="studio-btn text-xs font-sans font-semibold text-[#1c1917] hover:text-[#d9654c] py-2 group"
              >
                <span className="whitespace-nowrap">Explore Architecture</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Mini Preview Thumbnails Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                currentIndex === idx
                  ? 'bg-[#ffffff] border-[#1c1917] shadow-sm'
                  : 'bg-[#faf6f0] border-[#e7e0d8] hover:border-[#b8aba0]'
              }`}
            >
              <span className="font-serif text-xs text-[#78716c] block">0{idx + 1}</span>
              <p className="font-serif text-lg text-[#1c1917] font-normal truncate mt-0.5">
                {proj.company}
              </p>
              <p className="font-sans text-[11px] text-[#78716c] truncate mt-0.5">
                {proj.category}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
