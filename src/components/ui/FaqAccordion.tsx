import React, { useState } from 'react';
import { Plus, Check, Copy } from 'lucide-react';

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const faqs = [
    {
      q: 'How do you approach migrating an enterprise monolithic frontend to Micro-Frontends?',
      a: 'I employ a phased Strangler Fig pattern. Instead of a high-risk full rewrite, we identify discrete, high-value domain modules, establish strict TypeScript runtime contracts via Module Federation, and incrementally migrate views behind feature flags with transparent zero-downtime fallbacks.',
    },
    {
      q: 'When does it make sense to incorporate WebAssembly and Blazor into a web application?',
      a: 'WebAssembly shines when applications demand computationally heavy client-side processing: complex document parsing, real-time client encryption/compression, or executing mature algorithms compiled from C++, C#, or Rust without garbage collection pauses on the browser main thread.',
    },
    {
      q: 'How do you eliminate flakiness in end-to-end (E2E) test suites with WDIO v8?',
      a: 'The key is eliminating fragile DOM-dependent selectors in favor of semantic data-testids, state-driven explicit waits rather than hardcoded timeouts, controlled mocks for volatile third-party services, and isolated parallel test runs executed in containerized CI environments.',
    },
    {
      q: 'What is your availability for architectural advisory and engineering collaboration?',
      a: 'I am available for strategic architectural consultations, frontend infrastructure reviews, high-impact performance sprints, and technical advisory roles that complement my primary engineering work at UiPath.',
    },
    {
      q: 'How do we measure the tangible success of a frontend performance optimization?',
      a: 'Through real-user monitoring (RUM) tracking Core Web Vitals: driving Largest Contentful Paint (LCP) under 2.0s, Interaction to Next Paint (INP) below 150ms, and significantly reducing total blocking time (TBT) on low-power devices.',
    },
  ];

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText('saket.saurav20@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = 'saket.saurav20@gmail.com';
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (err) {
      console.warn('Clipboard write failed:', err);
    }
  };

  return (
    <section id="faq" className="py-24 md:py-36 px-6 md:px-12 bg-[#faf6f0] relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="font-serif italic text-sm text-[#d9654c] tracking-wide block mb-3">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1c1917] font-normal tracking-tight">
            Clear answers before we begin.
          </h2>
          <p className="font-sans text-sm text-[#78716c] font-light mt-4 max-w-md mx-auto">
            Have a different question? Reach out directly or copy my email below.
          </p>

          {/* Copy Email Pill Button */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[#e7e0d8] bg-[#ffffff] text-xs font-sans text-[#1c1917] mt-5 hover:border-[#1c1917] transition-all"
          >
            {copied ? (
              <>
                <Check size={14} className="text-[#81987e]" />
                <span className="text-[#81987e] font-medium">Email copied to clipboard!</span>
              </>
            ) : (
              <>
                <Copy size={13} className="text-[#78716c]" />
                <span>saket.saurav20@gmail.com</span>
              </>
            )}
          </button>
        </div>

        {/* Accordion List */}
        <div className="border-t border-[#e7e0d8] divide-y divide-[#e7e0d8]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6 transition-colors">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="font-serif text-xl sm:text-2xl text-[#1c1917] font-normal pr-6 group-hover:text-[#d9654c] transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full border border-[#1c1917] flex items-center justify-center text-[#1c1917] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-[#1c1917] text-[#faf6f0]' : ''
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-12 font-sans text-sm sm:text-base text-[#44403c] font-light leading-relaxed animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
