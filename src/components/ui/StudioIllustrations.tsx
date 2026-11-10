import React, { useState } from 'react';

// Botanical illustrated character flowers matching the exact lamagadan.studio artistic style:
// Organic curves, playful color-blocking, stippled petals, and interactive hover reaction!

export const TallBlueFlower: React.FC<{ className?: string }> = ({ className = "w-10 sm:w-14 md:w-16 h-14 sm:h-20 md:h-24" }) => {
  const [isWiggling, setIsWiggling] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsWiggling(true)}
      onAnimationEnd={() => setIsWiggling(false)}
      className={`inline-block align-middle mx-1.5 cursor-pointer transition-transform duration-300 hover:scale-115 select-none ${className} ${
        isWiggling ? 'animate-bounce' : ''
      }`}
      title="Interactive botanical bloom"
    >
      <svg viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
        {/* Curved stem in lilac */}
        <path
          d="M50 155 C 50 120, 60 95, 48 70 C 44 60, 48 45, 52 35"
          stroke="#9d7bb0"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* Deep teal organic leaves */}
        <path
          d="M48 115 C 32 110, 20 125, 25 135 C 32 142, 45 130, 49 122 Z"
          fill="#1d555c"
        />
        <path
          d="M53 95 C 68 88, 82 98, 78 110 C 70 118, 56 108, 52 100 Z"
          fill="#1d555c"
        />
        <path
          d="M46 75 C 32 68, 22 80, 28 90 C 35 96, 46 85, 48 80 Z"
          fill="#1d555c"
        />
        <path
          d="M52 58 C 65 52, 75 62, 70 72 C 62 78, 54 68, 51 64 Z"
          fill="#1d555c"
        />

        {/* Sky-blue ruffled petal bloom */}
        <path
          d="M30 35 C 20 28, 24 15, 35 15 C 40 8, 52 6, 60 12 C 70 6, 80 16, 78 28 C 84 35, 78 48, 68 48 C 60 52, 42 50, 34 45 C 26 44, 25 38, 30 35 Z"
          fill="#70b3e8"
        />
        {/* Soft peach inner flower cup */}
        <ellipse cx="52" cy="28" rx="16" ry="12" fill="#f89f78" />
        {/* Golden textured pollen center */}
        <ellipse cx="52" cy="27" rx="10" ry="7" fill="#f5c242" />
        {/* Little pollen dots */}
        <circle cx="48" cy="25" r="1.5" fill="#d9654c" />
        <circle cx="52" cy="28" r="1.5" fill="#d9654c" />
        <circle cx="56" cy="26" r="1.5" fill="#d9654c" />
        <circle cx="50" cy="29" r="1.5" fill="#d9654c" />
        <circle cx="54" cy="24" r="1.5" fill="#d9654c" />
      </svg>
    </span>
  );
};

export const CactiBerryFlower: React.FC<{ className?: string }> = ({ className = "w-9 sm:w-12 md:w-14 h-14 sm:h-20 md:h-24" }) => {
  const [isWiggling, setIsWiggling] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsWiggling(true)}
      onAnimationEnd={() => setIsWiggling(false)}
      className={`inline-block align-middle mx-1.5 cursor-pointer transition-transform duration-300 hover:scale-115 select-none ${className} ${
        isWiggling ? 'animate-bounce' : ''
      }`}
      title="Interactive botanical bloom"
    >
      <svg viewBox="0 0 90 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
        {/* Multiple green striated cactus-like stems */}
        <path
          d="M45 155 C 45 110, 45 80, 45 45"
          stroke="#1d8a7a"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M32 155 C 32 120, 28 95, 20 80"
          stroke="#2aa08e"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M58 155 C 58 120, 62 95, 70 80"
          stroke="#2aa08e"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Coral-red round berries popping out */}
        <circle cx="20" cy="75" r="9" fill="#e7502c" />
        <circle cx="70" cy="75" r="9" fill="#e7502c" />
        <circle cx="34" cy="62" r="8" fill="#f06a38" />
        <circle cx="56" cy="62" r="8" fill="#f06a38" />
        <circle cx="45" cy="40" r="10" fill="#e7502c" />

        {/* Small golden star blossoms */}
        <path d="M20 70 L22 75 L20 80 L18 75 Z" fill="#f5c242" />
        <path d="M70 70 L72 75 L70 80 L68 75 Z" fill="#f5c242" />
        <path d="M45 33 L47 40 L45 47 L43 40 Z" fill="#f5c242" />
        <path d="M22 105 L24 110 L22 115 L20 110 Z" fill="#f5c242" />
        <path d="M68 105 L70 110 L68 115 L66 110 Z" fill="#f5c242" />
      </svg>
    </span>
  );
};

export const WideOrangeBellFlower: React.FC<{ className?: string }> = ({ className = "w-11 sm:w-16 md:w-20 h-14 sm:h-20 md:h-24" }) => {
  const [isWiggling, setIsWiggling] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsWiggling(true)}
      onAnimationEnd={() => setIsWiggling(false)}
      className={`inline-block align-middle mx-1.5 cursor-pointer transition-transform duration-300 hover:scale-115 select-none ${className} ${
        isWiggling ? 'animate-bounce' : ''
      }`}
      title="Interactive botanical bloom"
    >
      <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
        {/* Pink textured base stalk */}
        <rect x="52" y="90" width="16" height="65" rx="8" fill="#f07888" />
        <line x1="56" y1="95" x2="56" y2="150" stroke="#d44b60" strokeWidth="1.5" />
        <line x1="60" y1="95" x2="60" y2="150" stroke="#d44b60" strokeWidth="1.5" />
        <line x1="64" y1="95" x2="64" y2="150" stroke="#d44b60" strokeWidth="1.5" />

        {/* Wavy turquoise-mint green side leaves */}
        <path
          d="M50 115 C 35 110, 20 120, 22 132 C 30 138, 48 132, 52 125 Z"
          fill="#44bda2"
        />
        <path
          d="M70 115 C 85 110, 100 120, 98 132 C 90 138, 72 132, 68 125 Z"
          fill="#44bda2"
        />

        {/* Large ruffled tulip/bell crown in vibrant orange */}
        <path
          d="M25 50 C 22 35, 32 30, 38 42 C 45 28, 55 28, 60 40 C 65 28, 75 28, 82 42 C 88 30, 98 35, 95 50 C 90 85, 80 92, 60 92 C 40 92, 30 85, 25 50 Z"
          fill="#f05423"
        />
        {/* Lavender-purple center cup with stippling dots */}
        <path
          d="M36 55 C 36 45, 48 40, 60 40 C 72 40, 84 45, 84 55 C 84 75, 75 80, 60 80 C 45 80, 36 75, 36 55 Z"
          fill="#9465b8"
        />
        {/* Stippled pattern dots inside */}
        <circle cx="50" cy="54" r="1.5" fill="#2d134b" />
        <circle cx="60" cy="50" r="1.5" fill="#2d134b" />
        <circle cx="70" cy="54" r="1.5" fill="#2d134b" />
        <circle cx="55" cy="62" r="1.5" fill="#2d134b" />
        <circle cx="65" cy="62" r="1.5" fill="#2d134b" />
        <circle cx="60" cy="70" r="1.5" fill="#2d134b" />
      </svg>
    </span>
  );
};

export const FloatingOrangeAsterisk: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 28 }) => (
  <span className={`inline-block pointer-events-none select-none ${className}`}>
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 4 C 20 12, 20 12, 20 20 M 20 20 C 20 28, 20 28, 20 36 M 20 20 C 13 15, 13 15, 6 10 M 20 20 C 27 25, 27 25, 34 30 M 20 20 C 27 15, 27 15, 34 10 M 20 20 C 13 25, 13 25, 6 30"
        stroke="#f05423"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

// Restored delicate card badges from previous design
export const FloatingBadge1: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`pointer-events-none select-none ${className}`}>
    <div className="bg-[#ffffff] border border-[#e7e0d8] shadow-lg rounded-2xl px-4 py-2.5 flex items-center space-x-3 transform rotate-[-3deg] hover:rotate-0 transition-transform">
      <span className="w-2.5 h-2.5 rounded-full bg-[#d9654c] animate-pulse" />
      <div>
        <p className="font-serif italic text-xs text-[#1c1917] leading-none">Software Engineer 2</p>
        <p className="font-sans text-[10px] text-[#78716c] uppercase tracking-wider mt-0.5">UiPath Bangalore</p>
      </div>
    </div>
  </div>
);

export const FloatingBadge2: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`pointer-events-none select-none ${className}`}>
    <div className="bg-[#faf6f0] border border-[#e2d7cb] shadow-lg rounded-full px-4 py-2 flex items-center space-x-2 transform rotate-[4deg]">
      <span className="text-sm">🏆</span>
      <span className="font-sans text-[11px] font-medium text-[#292524]">SIH Goldman Sachs Winner</span>
    </div>
  </div>
);

export const FloatingBadge3: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`pointer-events-none select-none ${className}`}>
    <div className="bg-[#ffffff] border border-[#e7e0d8] shadow-md rounded-2xl p-2.5 flex items-center space-x-2 transform rotate-[-2deg]">
      <div className="w-7 h-7 rounded-lg bg-[#fbebe7] flex items-center justify-center text-[#d9654c] font-mono text-xs font-bold">
        W8
      </div>
      <div className="text-left">
        <p className="font-sans text-[10px] font-semibold text-[#1c1917] leading-none">WDIO v8 + Blazor</p>
        <p className="font-sans text-[9px] text-[#78716c]">E2E Automation</p>
      </div>
    </div>
  </div>
);
