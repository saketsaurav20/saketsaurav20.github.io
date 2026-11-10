import React, { useState, useEffect, useRef, useCallback } from 'react';

// ─── Motion tokens (tune from here) ──────────────────────────────────
const T = {
  // Clock
  loopPeriod: 6000,          // one full idle cycle, ms

  // Breathing
  breathAmp: 1.5,            // units of rise on the torso
  breathPeriod: 3600,        // ms

  // Head
  tiltAmp: 3.5,              // degrees
  tiltPeriod: 4500,          // ms

  // Arm idle sway
  armSwayAmp: 3,             // degrees
  armSwayPeriodL: 3200,
  armSwayPeriodR: 2800,

  // Hair follow-through
  hairDelay: 110,            // ms behind head
  hairStrength: 0.45,

  // Blink
  blinkClose: 110,           // ms
  blinkHold: 40,
  blinkOpen: 190,
  blinkInterval: [2800, 3800], // range

  // Gaze
  maxPupilOffset: 3.5,
  pupilDivisor: 55,

  // 2.5D parallax
  faceShiftX: 4,
  faceShiftY: 2.5,
  headRotFactor: 5,

  // Wave (on click)
  waveSpeed: 14,
  waveAmp: 20,
  waveDuration: 1400,

  // Squash
  squashDuration: 180,
};

// ─── Helpers (pure functions of clock time) ──────────────────────────
/** Smooth oscillation −1 → 1 */
const wave = (t: number, period: number, phase = 0) =>
  Math.sin(((t % period) / period + phase) * Math.PI * 2);

// ─── Component ───────────────────────────────────────────────────────
export const AnimatedCharacter: React.FC<{ className?: string }> = ({ className = '' }) => {
  // --- state ---------------------------------------------------------
  const [time, setTime] = useState(0);           // ms clock
  const [blink, setBlink] = useState(0);          // 0 = open, 1 = closed
  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isSquashed, setIsSquashed] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isLanding, setIsLanding] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const waveTimerRef = useRef<ReturnType<typeof setTimeout>>();

  // Start hidden way off-screen (above viewport), then drop down right as preloader finishes (~2600ms)
  useEffect(() => {
    // Drop starts when preloader finishes sliding away (~2600ms)
    const dropTimer = setTimeout(() => {
      setIsLanding(false);
    }, 2600);

    // 1. Trigger landing impact squash right as character hits the floor (at 3700ms)
    const squashTimer = setTimeout(() => {
      setIsSquashed(true);
    }, 3700);

    // 2. Release squash and settle into stance
    const releaseTimer = setTimeout(() => {
      setIsSquashed(false);
    }, 4150);

    // 3. Trigger wave and show "Hi!" speech bubble after landing (4300ms)
    const bubbleTimer = setTimeout(() => {
      setIsWaving(true);
      setShowSpeechBubble(true);
    }, 4300);

    // 4. Hide speech bubble and stop waving after a few seconds
    const hideBubbleTimer = setTimeout(() => {
      setShowSpeechBubble(false);
    }, 7000);

    const stopWaveTimer = setTimeout(() => {
      setIsWaving(false);
    }, 6000);

    return () => {
      clearTimeout(dropTimer);
      clearTimeout(squashTimer);
      clearTimeout(releaseTimer);
      clearTimeout(bubbleTimer);
      clearTimeout(hideBubbleTimer);
      clearTimeout(stopWaveTimer);
    };
  }, []);

  // --- reduced-motion ------------------------------------------------
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const h = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, []);

  // --- visibility (IntersectionObserver) -----------------------------
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver(([e]) => setIsVisible(e.isIntersecting), { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // --- one clock (RAF) -----------------------------------------------
  useEffect(() => {
    if (!isVisible || reducedMotion) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }
    const tick = (t: number) => { setTime(t); rafRef.current = requestAnimationFrame(tick); };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [isVisible, reducedMotion]);

  // --- pointer tracking ----------------------------------------------
  const updatePointer = useCallback((cx: number, cy: number) => {
    const el = containerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPointerPos({ x: cx - (r.left + r.width / 2), y: cy - (r.top + r.height / 2) });
  }, []);

  useEffect(() => {
    const mm = (e: MouseEvent) => updatePointer(e.clientX, e.clientY);
    const tm = (e: TouchEvent) => { if (e.touches[0]) updatePointer(e.touches[0].clientX, e.touches[0].clientY); };
    window.addEventListener('mousemove', mm, { passive: true });
    window.addEventListener('touchmove', tm, { passive: true });
    return () => { window.removeEventListener('mousemove', mm); window.removeEventListener('touchmove', tm); };
  }, [updatePointer]);

  // --- blink (scheduled, not random per frame) -----------------------
  useEffect(() => {
    if (reducedMotion) return;
    let tid: ReturnType<typeof setTimeout>;
    const schedule = () => {
      const delay = T.blinkInterval[0] + Math.random() * (T.blinkInterval[1] - T.blinkInterval[0]);
      tid = setTimeout(() => {
        setBlink(1);
        setTimeout(() => { setBlink(0); schedule(); }, T.blinkClose + T.blinkHold + T.blinkOpen);
      }, delay);
    };
    schedule();
    return () => clearTimeout(tid);
  }, [reducedMotion]);

  // --- click: squash + wave ------------------------------------------
  const handleClick = () => {
    setIsSquashed(true);
    setIsWaving(true);
    setTimeout(() => setIsSquashed(false), T.squashDuration);
    if (waveTimerRef.current) clearTimeout(waveTimerRef.current);
    waveTimerRef.current = setTimeout(() => setIsWaving(false), T.waveDuration);
  };

  // ─── derived motion (all from `time`) ──────────────────────────────
  const alive = !reducedMotion && isVisible;
  const t = time;  // ms

  // breathing: torso rises
  const breath = alive ? wave(t, T.breathPeriod) * T.breathAmp : 0;
  // weight shift: subtle sideways drift
  const weightShift = alive ? wave(t, 5200, 0.3) * 1.2 : 0;

  // head idle tilt
  const idleTilt = alive ? wave(t, T.tiltPeriod) * T.tiltAmp : 0;

  // hair follow-through: reacts to head tilt a beat behind
  const hairLag = alive ? wave(t - T.hairDelay, T.tiltPeriod) * T.tiltAmp : 0;
  const hairFollow = (idleTilt - hairLag) * T.hairStrength;

  // arm idle sway (asymmetric periods)
  const armIdleL = alive ? wave(t, T.armSwayPeriodL, 0.1) * T.armSwayAmp : 0;
  const armIdleR = alive ? wave(t, T.armSwayPeriodR, 0.6) * T.armSwayAmp : 0;

  // leg idle sway
  const legSwayL = alive ? wave(t, 4000, 0.0) * 1.5 : 0;
  const legSwayR = alive ? wave(t, 3800, 0.5) * 1.5 : 0;

  // wave gesture on click
  const waveCycle = isWaving && alive ? Math.sin(t / 1000 * T.waveSpeed) * T.waveAmp : 0;

  // pointer / gaze
  const pAngle = Math.atan2(pointerPos.y, pointerPos.x);
  const pDist = Math.hypot(pointerPos.x, pointerPos.y);
  const pupilR = Math.min(T.maxPupilOffset, pDist / T.pupilDivisor);
  const pupilX = Math.cos(pAngle) * pupilR;
  const pupilY = Math.sin(pAngle) * pupilR;

  const halfW = typeof window !== 'undefined' ? window.innerWidth / 2 : 400;
  const halfH = typeof window !== 'undefined' ? window.innerHeight / 2 : 400;
  const sfx = Math.max(-1, Math.min(1, pointerPos.x / halfW));
  const sfy = Math.max(-1, Math.min(1, pointerPos.y / halfH));

  const headRot = idleTilt + sfx * T.headRotFactor;
  const faceX = sfx * T.faceShiftX;
  const faceY = sfy * T.faceShiftY;

  // squash transform with authentic jump physics: drops from way above the viewport (off-screen)
  const containerTx = isLanding
    ? 'translateY(-650px) scale(0.7, 1.3)' // starts far off-screen above the webpage with stretch
    : isSquashed
    ? 'scale(1.22, 0.78) translateY(10px)' // heavier impact squash upon landing
    : isHovered
    ? 'scale(1.04) translateY(-2px)'
    : 'scale(1) translateY(0)';

  // shadow breathes with height
  const shadowRx = isSquashed ? 46 : isHovered ? 42 : 38;
  const shadowRy = isSquashed ? 11 : 8;
  const shadowOp = isSquashed ? 0.2 : 0.1;

  // ─── SVG viewBox: 200×240 (taller to fit full boy) ─────────────────
  return (
    <div
      ref={containerRef}
      role="button"
      tabIndex={0}
      aria-label="Interactive character companion"
      onClick={handleClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(); } }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsSquashed(false); }}
      className={`relative select-none cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#d9654c] rounded-2xl transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${className}`}
      style={{ transform: containerTx, transformOrigin: 'bottom center', perspective: '600px' }}
    >
      <svg viewBox="0 0 200 260" className="w-full h-full overflow-visible drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
        {/* ── Ground Shadow ── */}
        <ellipse
          cx="100" cy="248"
          rx={shadowRx} ry={shadowRy}
          fill="#1c1917"
          opacity={shadowOp}
          className="transition-all duration-200"
        />

        {/* ── Legs ── */}
        <g style={{ transform: `translateY(${-breath * 0.3}px)`, transformOrigin: '100px 210px' }}>
          {/* Left leg */}
          <g style={{ transformOrigin: '84px 192px', transform: `rotate(${legSwayL}deg)` }}>
            <rect x="76" y="192" width="16" height="36" rx="7" fill="#f0c8a0" stroke="#1c1917" strokeWidth="2" />
            <rect x="74" y="218" width="20" height="18" rx="6" fill="#ffffff" stroke="#1c1917" strokeWidth="2" />
            <line x1="76" y1="222" x2="92" y2="222" stroke="#d9654c" strokeWidth="1.5" />
            <line x1="76" y1="226" x2="92" y2="226" stroke="#d9654c" strokeWidth="1.5" />
            <line x1="76" y1="230" x2="92" y2="230" stroke="#d9654c" strokeWidth="1.5" />
            <ellipse cx="84" cy="238" rx="14" ry="8" fill="#d9654c" stroke="#1c1917" strokeWidth="2" />
          </g>
          {/* Right leg */}
          <g style={{ transformOrigin: '116px 192px', transform: `rotate(${legSwayR}deg)` }}>
            <rect x="108" y="192" width="16" height="36" rx="7" fill="#f0c8a0" stroke="#1c1917" strokeWidth="2" />
            <rect x="106" y="218" width="20" height="18" rx="6" fill="#ffffff" stroke="#1c1917" strokeWidth="2" />
            <line x1="108" y1="222" x2="124" y2="222" stroke="#d9654c" strokeWidth="1.5" />
            <line x1="108" y1="226" x2="124" y2="226" stroke="#d9654c" strokeWidth="1.5" />
            <line x1="108" y1="230" x2="124" y2="230" stroke="#d9654c" strokeWidth="1.5" />
            <ellipse cx="116" cy="238" rx="14" ry="8" fill="#d9654c" stroke="#1c1917" strokeWidth="2" />
          </g>
        </g>

        {/* ── Torso group (breathes + weight shift) ── */}
        <g style={{ transform: `translate(${weightShift}px, ${-breath}px)`, transformOrigin: '100px 210px' }}>

          {/* Blue shorts */}
          <path
            d="M 70 180 L 70 204 Q 84 208 100 206 Q 116 208 130 204 L 130 180 Q 116 188 100 188 Q 84 188 70 180 Z"
            fill="#4488cc"
            stroke="#1c1917"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Shorts center line */}
          <line x1="100" y1="188" x2="100" y2="206" stroke="#3377aa" strokeWidth="1.5" />

          {/* Red polo shirt body */}
          <path
            d="M 66 120 Q 60 150 64 182 Q 82 190 100 190 Q 118 190 136 182 Q 140 150 134 120 Q 118 130 100 130 Q 82 130 66 120 Z"
            fill="#d9654c"
            stroke="#1c1917"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Shirt vertical stripes */}
          <line x1="86" y1="138" x2="86" y2="182" stroke="#c45540" strokeWidth="1.2" opacity="0.5" />
          <line x1="93" y1="134" x2="93" y2="186" stroke="#c45540" strokeWidth="1.2" opacity="0.5" />
          <line x1="100" y1="132" x2="100" y2="188" stroke="#c45540" strokeWidth="1.2" opacity="0.5" />
          <line x1="107" y1="134" x2="107" y2="186" stroke="#c45540" strokeWidth="1.2" opacity="0.5" />
          <line x1="114" y1="138" x2="114" y2="182" stroke="#c45540" strokeWidth="1.2" opacity="0.5" />

          {/* Collar */}
          <path
            d="M 82 120 L 100 130 L 118 120"
            fill="none"
            stroke="#1c1917"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* White button */}
          <circle cx="100" cy="140" r="3" fill="#faf6f0" stroke="#1c1917" strokeWidth="1.5" />

          {/* ── Left Arm (hangs at side, idle sway) ── */}
          <g style={{
            transformOrigin: '66px 126px',
            transform: `rotate(${armIdleL}deg)`,
          }}>
            {/* Upper arm (skin, short sleeve covers shoulder) */}
            <path
              d="M 66 126 Q 52 140 48 156 Q 50 162 56 160 Q 62 148 68 136"
              fill="#f0c8a0"
              stroke="#1c1917"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Hand */}
            <circle cx="52" cy="160" r="7" fill="#f0c8a0" stroke="#1c1917" strokeWidth="2" />
            {/* Short sleeve */}
            <path
              d="M 64 120 Q 56 124 54 134 Q 62 138 68 130"
              fill="#d9654c"
              stroke="#1c1917"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </g>

          {/* ── Right Arm (waves on click, idle sway otherwise) ── */}
          <g style={{
            transformOrigin: '134px 126px',
            transform: isWaving
              ? `rotate(${-55 + waveCycle}deg)`
              : `rotate(${armIdleR}deg)`,
            transition: isWaving ? 'none' : 'transform 300ms cubic-bezier(0.34,1.56,0.64,1)',
          }}>
            {/* Upper arm */}
            <path
              d="M 134 126 Q 148 140 152 156 Q 150 162 144 160 Q 138 148 132 136"
              fill="#f0c8a0"
              stroke="#1c1917"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Hand */}
            <circle cx="148" cy="160" r="7" fill="#f0c8a0" stroke="#1c1917" strokeWidth="2" />
            {/* Short sleeve */}
            <path
              d="M 136 120 Q 144 124 146 134 Q 138 138 132 130"
              fill="#d9654c"
              stroke="#1c1917"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </g>
        </g>

        {/* ── Head Group (tilts, breathes up) ── */}
        <g style={{
          transform: `rotate(${headRot}deg) translateY(${-breath + (isSquashed ? 3 : 0)}px)`,
          transformOrigin: '100px 100px',
          transition: isSquashed ? 'transform 100ms ease' : 'transform 250ms ease-out',
        }}>
          {/* Head shape — rounded square, skin tone */}
          <rect
            x="62" y="52"
            width="76" height="72"
            rx="34"
            fill="#f0c8a0"
            stroke="#1c1917"
            strokeWidth="3"
          />

          {/* Ears */}
          <ellipse cx="62" cy="88" rx="6" ry="8" fill="#f0c8a0" stroke="#1c1917" strokeWidth="2" />
          <ellipse cx="138" cy="88" rx="6" ry="8" fill="#f0c8a0" stroke="#1c1917" strokeWidth="2" />

          {/* Hair — brown, side-swept style */}
          <g style={{
            transform: `rotate(${hairFollow}deg)`,
            transformOrigin: '100px 70px',
          }}>
            <path
              d="M 66 74 Q 64 52 80 44 Q 96 36 112 42 Q 128 48 134 66 Q 136 74 134 78 Q 130 68 118 60 Q 106 54 92 56 Q 78 58 70 70 Z"
              fill="#5C3D2E"
              stroke="#1c1917"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Hair top volume / swoosh */}
            <path
              d="M 84 48 Q 96 34 114 42 Q 126 48 128 58 Q 120 50 108 46 Q 94 44 84 48 Z"
              fill="#6B4A3A"
              stroke="none"
            />
          </g>

          {/* ── Face features (parallax shifted by pointer) ── */}
          <g style={{ transform: `translate(${faceX}px, ${faceY}px)` }}>
            {/* Eyebrows */}
            <path d="M 78 72 Q 84 68 92 72" fill="none" stroke="#5C3D2E" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 108 72 Q 116 68 122 72" fill="none" stroke="#5C3D2E" strokeWidth="2.5" strokeLinecap="round" />

            {/* Glasses frames — rounded rectangles over each eye + bridge */}
            <g>
              {/* Left lens */}
              <rect x="74" y="74" width="24" height="18" rx="5" fill="none" stroke="#1c1917" strokeWidth="2.5" />
              {/* Right lens */}
              <rect x="102" y="74" width="24" height="18" rx="5" fill="none" stroke="#1c1917" strokeWidth="2.5" />
              {/* Bridge */}
              <line x1="98" y1="82" x2="102" y2="82" stroke="#1c1917" strokeWidth="2.5" strokeLinecap="round" />
              {/* Left temple arm (toward left ear) */}
              <line x1="74" y1="78" x2="66" y2="76" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" />
              {/* Right temple arm (toward right ear) */}
              <line x1="126" y1="78" x2="134" y2="76" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* Left eye white */}
            <ellipse cx="86" cy="82" rx="9" ry="10" fill="#ffffff" stroke="#1c1917" strokeWidth="2" />
            {/* Left pupil + catchlight */}
            {blink === 0 && (
              <>
                <circle cx={86 + pupilX} cy={82 + pupilY} r={4} fill="#1c1917" />
                <circle cx={86 + pupilX + 1.5} cy={82 + pupilY - 1.5} r={1.5} fill="#ffffff" />
              </>
            )}
            {/* Left blink lid */}
            {blink === 1 && (
              <path d="M 78 82 Q 86 88 94 82" fill="none" stroke="#1c1917" strokeWidth="2.5" strokeLinecap="round" />
            )}

            {/* Right eye white */}
            <ellipse cx="114" cy="82" rx="9" ry="10" fill="#ffffff" stroke="#1c1917" strokeWidth="2" />
            {/* Right pupil + catchlight */}
            {blink === 0 && (
              <>
                <circle cx={114 + pupilX} cy={82 + pupilY} r={4} fill="#1c1917" />
                <circle cx={114 + pupilX + 1.5} cy={82 + pupilY - 1.5} r={1.5} fill="#ffffff" />
              </>
            )}
            {/* Right blink lid */}
            {blink === 1 && (
              <path d="M 106 82 Q 114 88 122 82" fill="none" stroke="#1c1917" strokeWidth="2.5" strokeLinecap="round" />
            )}

            {/* Nose — small triangle hint */}
            <path d="M 98 92 L 100 96 L 102 92" fill="none" stroke="#d4956e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Mouth */}
            {isSquashed ? (
              /* Surprised O */
              <ellipse cx="100" cy="104" rx="5" ry="6" fill="#d9654c" stroke="#1c1917" strokeWidth="2" />
            ) : isHovered ? (
              /* Big happy open smile with tongue */
              <g>
                <path d="M 90 100 Q 100 116 110 100" fill="#d9654c" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" />
                {/* Tongue */}
                <ellipse cx="100" cy="110" rx="5" ry="4" fill="#e8887a" />
                {/* Teeth line */}
                <line x1="92" y1="102" x2="108" y2="102" stroke="#ffffff" strokeWidth="2" />
              </g>
            ) : (
              /* Gentle smile */
              <path d="M 92 102 Q 100 110 108 102" fill="none" stroke="#1c1917" strokeWidth="2.5" strokeLinecap="round" />
            )}

            {/* Cheek blush */}
            <circle cx="74" cy="96" r={isHovered ? 6 : 4} fill="#f0a28c" opacity={isHovered ? 0.6 : 0.35} className="transition-all duration-300" />
            <circle cx="126" cy="96" r={isHovered ? 6 : 4} fill="#f0a28c" opacity={isHovered ? 0.6 : 0.35} className="transition-all duration-300" />
          </g>

          {/* ── "Hi!" Speech Bubble (smooth pop-in and fade out) ── */}
          {showSpeechBubble && (
            <g className="transition-all duration-700 ease-out animate-in fade-in zoom-in-95 duration-500" transform="translate(142, 35)">
              {/* Bubble background */}
              <path
                d="M 0 16 Q 0 0 16 0 L 52 0 Q 68 0 68 16 L 68 38 Q 68 54 52 54 L 20 54 L 6 68 L 12 54 L 16 54 Q 0 54 0 38 Z"
                fill="#ffffff"
                stroke="#1c1917"
                strokeWidth="2.5"
                filter="drop-shadow(0px 3px 6px rgba(0,0,0,0.12))"
              />
              {/* Text "Hi!" */}
              <text
                x="34"
                y="34"
                textAnchor="middle"
                fill="#1c1917"
                fontFamily="sans-serif"
                fontSize="18"
                fontWeight="bold"
              >
                Hi!
              </text>
            </g>
          )}
        </g>
      </svg>
    </div>
  );
};
