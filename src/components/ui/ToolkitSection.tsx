import React, { useState } from 'react';
import { Layers, Sparkles } from 'lucide-react';

interface ToolItem {
  name: string;
  shape: 'round' | 'oval' | 'chop' | 'tag' | 'word';
  size?: 'big' | 'sm';
  color?: 'red' | 'uv' | 'ink' | 'mute';
  rotation: number; // degrees
  proof?: {
    company: string;
    year: string;
    metric: string;
  };
}

interface ToolkitCategory {
  title: string;
  tools: ToolItem[];
}

export const ToolkitSection: React.FC = () => {
  const [activeProof, setActiveProof] = useState<{
    name: string;
    company: string;
    year: string;
    metric: string;
  } | null>(null);

  // 8 Curated Categories reflecting Saket Saurav's enterprise engineering arsenal
  const categories: ToolkitCategory[] = [
    {
      title: 'Frontend Architecture',
      tools: [
        { name: 'React 18', shape: 'chop', size: 'big', color: 'red', rotation: -1.8 },
        { name: 'TypeScript', shape: 'round', size: 'big', color: 'ink', rotation: 1.4 },
        { name: 'Next.js', shape: 'word', size: 'big', color: 'ink', rotation: -2.5 },
        {
          name: 'Micro-Frontends',
          shape: 'oval',
          size: 'big',
          color: 'uv',
          rotation: -1.2,
          proof: { company: 'UiPath Action Centre', year: '2024', metric: 'Independent deploy pipelines across distributed pods' }
        },
        { name: 'Redux Toolkit', shape: 'tag', size: 'sm', color: 'mute', rotation: 2.1 },
        { name: 'Web Components', shape: 'word', size: 'sm', color: 'mute', rotation: -1.0 },
      ]
    },
    {
      title: 'WebAssembly & Systems',
      tools: [
        {
          name: 'WebAssembly',
          shape: 'round',
          size: 'big',
          color: 'uv',
          rotation: -2.8,
          proof: { company: 'UiPath Studio Web', year: '2023', metric: 'Near-native client execution for complex workflow ASTs' }
        },
        { name: 'C++', shape: 'chop', size: 'big', color: 'ink', rotation: 0.8 },
        { name: 'Blazor WASM', shape: 'oval', size: 'big', color: 'red', rotation: -2.2 },
        { name: 'Memory Profiling', shape: 'word', size: 'sm', color: 'mute', rotation: 1.6 },
        { name: 'V8 Engine Tuning', shape: 'tag', size: 'sm', color: 'mute', rotation: -3.4 },
        { name: 'Web Workers', shape: 'chop', size: 'sm', color: 'ink', rotation: 2.0 },
      ]
    },
    {
      title: 'Automation & Testing',
      tools: [
        {
          name: 'WebdriverIO v8',
          shape: 'chop',
          size: 'big',
          color: 'red',
          rotation: -1.5,
          proof: { company: 'UiPath E2E Core', year: '2024', metric: 'Architected automated test suites with sub-5 min CI runs' }
        },
        { name: 'Playwright', shape: 'oval', size: 'big', color: 'ink', rotation: 2.3 },
        { name: 'Cypress', shape: 'word', size: 'big', color: 'ink', rotation: -1.7 },
        { name: 'Jest & RTL', shape: 'tag', size: 'big', color: 'mute', rotation: 0.5 },
        { name: 'Vitest', shape: 'round', size: 'sm', color: 'uv', rotation: -2.0 },
        { name: 'Visual Regression', shape: 'word', size: 'sm', color: 'mute', rotation: 1.2 },
      ]
    },
    {
      title: 'Workflow & Low-Code',
      tools: [
        {
          name: 'Action Centre',
          shape: 'oval',
          size: 'big',
          color: 'red',
          rotation: -2.6,
          proof: { company: 'UiPath Enterprise', year: '2023', metric: 'Human-in-the-loop task routing across global enterprise tenants' }
        },
        { name: 'UiPath Studio', shape: 'word', size: 'big', color: 'ink', rotation: 1.1 },
        { name: 'BPMN Engines', shape: 'chop', size: 'big', color: 'ink', rotation: -3.0 },
        { name: 'Form Builders', shape: 'tag', size: 'sm', color: 'mute', rotation: -1.4 },
        { name: 'Event Triggers', shape: 'round', size: 'sm', color: 'uv', rotation: 2.2 },
        { name: 'Dynamic Schemas', shape: 'word', size: 'sm', color: 'mute', rotation: -0.6 },
      ]
    },
    {
      title: 'Backend & Cloud Services',
      tools: [
        { name: 'Node.js', shape: 'round', size: 'big', color: 'ink', rotation: 1.8 },
        { name: 'Python & Django', shape: 'chop', size: 'big', color: 'ink', rotation: -2.1 },
        {
          name: 'Azure DevOps',
          shape: 'word',
          size: 'big',
          color: 'red',
          rotation: -1.4,
          proof: { company: 'Enterprise Scale', year: '2023', metric: 'Multi-region release gates & automated artifact publishing' }
        },
        { name: 'Docker & K8s', shape: 'oval', size: 'big', color: 'uv', rotation: 2.7 },
        { name: 'REST & GraphQL', shape: 'tag', size: 'sm', color: 'mute', rotation: -2.5 },
        { name: 'Redis & Kafka', shape: 'word', size: 'sm', color: 'mute', rotation: 0.9 },
      ]
    },
    {
      title: 'CI/CD & Dev Experience',
      tools: [
        { name: 'GitHub Actions', shape: 'chop', size: 'big', color: 'uv', rotation: -1.9 },
        { name: 'Turborepo', shape: 'word', size: 'big', color: 'ink', rotation: 2.0 },
        { name: 'Vite 5', shape: 'oval', size: 'big', color: 'red', rotation: -2.4 },
        { name: 'ESLint & Prettier', shape: 'tag', size: 'sm', color: 'mute', rotation: 1.5 },
        { name: 'Lighthouse Audits', shape: 'round', size: 'sm', color: 'ink', rotation: -0.8 },
        { name: 'Semantic Release', shape: 'word', size: 'sm', color: 'mute', rotation: -1.7 },
      ]
    },
    {
      title: 'Performance & Observability',
      tools: [
        {
          name: 'Core Web Vitals',
          shape: 'oval',
          size: 'big',
          color: 'red',
          rotation: 1.6,
          proof: { company: 'UiPath Platform', year: '2024', metric: 'Reduced LCP from 3.2s to 1.1s across core workflow portals' }
        },
        { name: 'Bundle Splitting', shape: 'tag', size: 'big', color: 'mute', rotation: -2.2 },
        { name: 'Datadog & Sentry', shape: 'word', size: 'big', color: 'ink', rotation: -1.0 },
        { name: 'Leak Profiling', shape: 'chop', size: 'sm', color: 'uv', rotation: 2.5 },
        { name: 'Network Waterfalls', shape: 'round', size: 'sm', color: 'mute', rotation: -1.8 },
        { name: 'Tree Shaking', shape: 'word', size: 'sm', color: 'mute', rotation: 0.4 },
      ]
    },
    {
      title: 'Intelligent Automation & AI',
      tools: [
        {
          name: 'Smart Document AI',
          shape: 'round',
          size: 'big',
          color: 'red',
          rotation: -2.7,
          proof: { company: 'Smart India Hackathon', year: '2019', metric: 'Goldman Sachs 1st Place National Trophy for automated intelligence' }
        },
        { name: 'Prompt Engineering', shape: 'word', size: 'big', color: 'ink', rotation: 1.2 },
        { name: 'TensorFlow & ML', shape: 'chop', size: 'big', color: 'ink', rotation: -1.6 },
        { name: 'RPA Agent Bots', shape: 'oval', size: 'big', color: 'uv', rotation: 2.4 },
        { name: 'Semantic Search', shape: 'tag', size: 'sm', color: 'mute', rotation: -2.0 },
        { name: 'LLM Orchestration', shape: 'word', size: 'sm', color: 'mute', rotation: 0.8 },
      ]
    }
  ];

  const getColorClasses = (color?: 'red' | 'uv' | 'ink' | 'mute') => {
    switch (color) {
      case 'red':
        return 'text-[#d9654c] border-[#d9654c] hover:bg-[#d9654c]/10';
      case 'uv':
        return 'text-[#52796f] border-[#52796f] hover:bg-[#52796f]/10';
      case 'mute':
        return 'text-[#78716c] border-[#b0a89f] hover:text-[#1c1917] hover:border-[#1c1917]';
      case 'ink':
      default:
        return 'text-[#1c1917] border-[#1c1917] hover:bg-[#1c1917]/5';
    }
  };

  const getShapeClasses = (shape: 'round' | 'oval' | 'chop' | 'tag' | 'word') => {
    switch (shape) {
      case 'round':
        return 'tk-stamp-round';
      case 'oval':
        return 'tk-stamp-oval';
      case 'chop':
        return 'tk-stamp-chop';
      case 'tag':
        return 'tk-stamp-tag';
      case 'word':
        return 'tk-stamp-word';
    }
  };

  return (
    <section id="toolkit" className="relative py-28 md:py-36 px-6 md:px-12 bg-[#faf6f0] border-t border-[#e7e0d8] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#f5dfd5]/35 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-[#e3ebe0]/40 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Eyebrow & Headline matching serhii.website exact layout */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-[#e7e0d8] bg-[#ffffff] text-xs font-sans text-[#78716c] uppercase tracking-wider mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d9654c]" />
            <span>Toolkit</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#1c1917] tracking-tight leading-[1.08]">
            A practical stack,{' '}
            <span className="italic font-light text-[#d9654c]">used every week.</span>
          </h2>
          <p className="max-w-xl text-[#78716c] text-sm sm:text-base font-sans mt-4 leading-relaxed font-light">
            Battle-tested technologies and production frameworks powering resilient micro-frontends, high-speed test automation, and distributed enterprise workflows.
          </p>
        </div>

        {/* The Wall - Grid rows with hover dimming and organic rotated stamps */}
        <div className="toolkit-wall">
          {categories.map((category, idx) => (
            <div key={idx} className="toolkit-row group">
              {/* Category Heading in italic serif */}
              <h3 className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#1c1917] font-normal leading-tight tracking-tight select-none cursor-default group-hover:text-[#d9654c] transition-colors duration-300">
                {category.title}
              </h3>

              {/* Stamp badges flex row */}
              <ul className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5 list-none p-0 m-0">
                {category.tools.map((tool, tIdx) => {
                  const hasProof = !!tool.proof;
                  return (
                    <li
                      key={tIdx}
                      style={{ transform: `rotate(${tool.rotation}deg)` }}
                      className={`tk-stamp ${getShapeClasses(tool.shape)} ${getColorClasses(tool.color)} relative ${
                        hasProof ? 'cursor-pointer hover:border-[#d9654c]' : ''
                      }`}
                      onClick={() => {
                        if (tool.proof) {
                          setActiveProof(activeProof?.name === tool.name ? null : { name: tool.name, ...tool.proof });
                        }
                      }}
                      onMouseEnter={() => {
                        if (tool.proof) {
                          setActiveProof({ name: tool.name, ...tool.proof });
                        }
                      }}
                      title={hasProof ? `Click to inspect ${tool.name} production proof` : tool.name}
                    >
                      <span>{tool.name}</span>
                      {hasProof && (
                        <span className="inline-block ml-1.5 w-1.5 h-1.5 rounded-full bg-[#d9654c] animate-pulse" />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Interactive Production Proof Floating Card */}
        {activeProof && (
          <div className="mt-8 p-5 sm:p-6 rounded-2xl border border-[#e7e0d8] bg-[#ffffff] shadow-xl max-w-lg mx-auto flex items-start space-x-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#fae8dc] text-[#d9654c] flex items-center justify-center shrink-0">
              <Sparkles size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-serif italic text-lg text-[#1c1917] font-medium">{activeProof.name}</span>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[#f5efeb] text-[#78716c] font-semibold">
                  {activeProof.year}
                </span>
              </div>
              <p className="font-sans text-xs text-[#d9654c] font-semibold uppercase tracking-wider mt-0.5">
                {activeProof.company}
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#78716c] mt-2 leading-relaxed">
                {activeProof.metric}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
