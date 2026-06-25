'use client';

import { useEffect, useRef, useState } from 'react';

function CutCorners({ size = 1, color = 'bg-white' }: { size?: number; color?: string }) {
  const s = `${size}px`;
  return (
    <div className="pointer-events-none absolute inset-0 z-10 !m-0">
      <div className={`absolute ${color}`} style={{ top: '-1px', left: '-1px', clipPath: 'polygon(0 0, 100% 0, 0 100%)', width: s, height: s }} />
      <div className={`absolute ${color}`} style={{ top: '-1px', right: '-1px', clipPath: 'polygon(0 0, 100% 0, 100% 100%)', width: s, height: s }} />
      <div className={`absolute ${color}`} style={{ bottom: '-1px', left: '-1px', clipPath: 'polygon(0 0, 0 100%, 100% 100%)', width: s, height: s }} />
      <div className={`absolute ${color}`} style={{ bottom: '-1px', right: '-1px', clipPath: 'polygon(100% 0, 0 100%, 100% 100%)', width: s, height: s }} />
    </div>
  );
}

export default function ScrollReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalHeight = sectionRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / totalHeight));
      setProgress(p);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slide1Opacity = progress < 0.3 ? 1 : Math.max(0, 1 - (progress - 0.3) / 0.2);
  const slide2Opacity = progress < 0.4 ? 0 : Math.min(1, (progress - 0.4) / 0.2);
  const overlayOpacity = progress < 0.35 ? 0 : Math.min(1, (progress - 0.35) / 0.25);
  const slide2Y = progress < 0.4 ? 40 : Math.max(0, 40 * (1 - (progress - 0.4) / 0.2));

  return (
    <section className="relative overflow-visible bg-white text-black pt-0 pb-0 px-5 lg:px-8">
      <div ref={sectionRef}>
        <div className="h-[380vh] max-md:-mx-5 max-md:mt-4">
          <div className="sticky top-0 flex min-h-screen flex-col items-center justify-center overflow-hidden">
            {/* Dark forest background */}
            <div className="absolute inset-x-0 inset-y-0 md:inset-y-16" style={{ opacity: 1 }}>
              <div className="relative size-full bg-forest">
                <CutCorners size={17} />
              </div>
            </div>

            {/* White overlay for transition */}
            <div className="absolute inset-0" style={{ opacity: overlayOpacity, background: 'white' }} />

            {/* Slide 1: White text */}
            <div
              className="absolute inset-0 flex items-center justify-center p-6 py-8 md:p-12 z-[1]"
              style={{ opacity: slide1Opacity }}
            >
              <div className="text-48px-heading w-full text-center max-sm:text-balance text-white" style={{ maxWidth: '44.25rem' }}>
                Financial institutions process billions of transactions every day,{' '}
                <span className="text-lemongrass">but most of that data is hard to use.</span>
              </div>
            </div>

            {/* Slide 2: Black text */}
            <div
              className="absolute inset-0 flex items-center justify-center p-6 py-8 md:p-12 z-[3]"
              style={{ opacity: slide2Opacity, transform: `translateY(${slide2Y}px)` }}
            >
              <div className="text-48px-heading w-full text-center max-sm:text-balance text-black" style={{ maxWidth: '51.75rem' }}>
                Spade enriches transaction data in real time, adding structure, accuracy, and intelligence at every layer.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
