import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // High-impact words reflecting Saket's engineering craft and the editorial aesthetic
  const words = [
    { text: 'Architecture', glyph: '✦' },
    { text: 'Micro-Frontends', glyph: '❋' },
    { text: 'WebAssembly', glyph: '✹' },
    { text: 'Automation', glyph: '✶' },
    { text: 'Saket Saurav', glyph: '⚡' },
  ];

  useEffect(() => {
    if (wordIndex < words.length - 1) {
      const timer = setTimeout(() => {
        setWordIndex((prev) => prev + 1);
      }, 450);
      return () => clearTimeout(timer);
    }

    // When the final word is reached, smoothly sequence exit animations
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      const finishTimer = setTimeout(() => {
        setIsFinished(true);
        onComplete?.();
      }, 800);
      return () => clearTimeout(finishTimer);
    }, 400);

    return () => clearTimeout(exitTimer);
  }, [wordIndex, words.length, onComplete]);

  if (isFinished) return null;

  const current = words[wordIndex];

  return (
    <div
      className={`fixed inset-0 z-[1000] bg-[#1c1917] text-[#faf6f0] flex flex-col items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] select-none pointer-events-auto ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Background subtle noise texture */}
      <div className="noise-overlay opacity-30" />

      {/* Main typographic loader matching the lamagadan.studio aesthetic */}
      <div className="relative flex flex-col items-center justify-center px-6">
        {/* Decorative monogram emblem */}
        <div className="flex items-center space-x-3 mb-6 font-serif text-2xl md:text-3xl tracking-widest text-[#d9654c]">
          <span className="font-light tracking-tighter">\\\</span>
          <span className="text-xl animate-spin-slow">{current.glyph}</span>
          <span className="font-light tracking-tighter">///</span>
        </div>

        {/* Word animation container */}
        <div className="h-16 md:h-20 flex items-center justify-center overflow-hidden">
          <span
            key={wordIndex}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#faf6f0] tracking-tight text-center animate-in fade-in slide-in-from-bottom-4 duration-300 italic font-normal"
          >
            {current.text}
          </span>
        </div>

        {/* Minimal progress line at the bottom */}
        <div className="w-48 h-[1px] bg-[#38332f] mt-8 overflow-hidden relative">
          <div
            className="h-full bg-[#d9654c] transition-all duration-300 ease-out"
            style={{ width: `${((wordIndex + 1) / words.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
