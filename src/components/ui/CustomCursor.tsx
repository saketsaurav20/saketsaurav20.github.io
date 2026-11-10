import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.body.classList.add('custom-cursor-active');

    // Store mouse position and smooth trailing position
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isVisible = false;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        ringX = mouseX;
        ringY = mouseY;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }

      // Update inner dot immediately on mousemove (0ms latency, zero lag)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${isHovering ? 0 : 1})`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('clickable')
      ) {
        isHovering = true;
        if (ringRef.current) {
          ringRef.current.style.width = '48px';
          ringRef.current.style.height = '48px';
          ringRef.current.style.borderColor = '#d9654c';
          ringRef.current.style.backgroundColor = 'rgba(217, 101, 76, 0.08)';
        }
        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(0)`;
        }
      } else {
        isHovering = false;
        if (ringRef.current) {
          ringRef.current.style.width = '26px';
          ringRef.current.style.height = '26px';
          ringRef.current.style.borderColor = 'rgba(28, 25, 23, 0.35)';
          ringRef.current.style.backgroundColor = 'transparent';
        }
        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(1)`;
        }
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    // 60-120fps smooth lerp loop for the outer ring using translate3d (GPU accelerated)
    const renderLoop = () => {
      if (isVisible) {
        // High responsiveness lerp factor (0.22 creates ultra-smooth trailing with zero perception of lag)
        ringX += (mouseX - ringX) * 0.22;
        ringY += (mouseY - ringY) * 0.22;

        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
        }
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden">
      {/* Real-time inner dot: 0ms latency, GPU composited */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#d9654c] pointer-events-none opacity-0 will-change-transform"
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
          transition: 'transform 0.15s ease-out, opacity 0.2s ease',
        }}
      />
      {/* Silky smooth outer ring: 120fps hardware accelerated lerp */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[26px] h-[26px] rounded-full pointer-events-none opacity-0 border will-change-transform"
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
          borderColor: 'rgba(28, 25, 23, 0.35)',
          transition: 'width 0.25s cubic-bezier(0.2, 1, 0.3, 1), height 0.25s cubic-bezier(0.2, 1, 0.3, 1), border-color 0.25s ease, background-color 0.25s ease, opacity 0.2s ease',
        }}
      />
    </div>
  );
};
