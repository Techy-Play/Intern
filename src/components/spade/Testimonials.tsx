'use client';

import { useState, useEffect } from 'react';

function ArrowSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 16" fill="none">
      <path d="M2.0326 15.6442L5.93597e-07 13.5799L9.02336e-08 2.0643L2.0326 -8.88478e-08L21.48 7.27606L21.48 8.36816L2.0326 15.6442Z" fill="currentColor"/>
    </svg>
  );
}

function CutCorners({ size = 13, color = 'bg-sage-1' }: { size?: number; color?: string }) {
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

const slides = [
  {
    bg: 'bg-gold',
    quote: "Spade\u2019s granular merchant data allows us to deliver new and innovative rewards on the more than $5 billion in neighborhood spend happening on our platform.",
    name: 'Brandt Smallwood',
    role: 'President',
    roleColor: 'text-sun',
    company: 'Bilt',
    stat: '$5B+',
    statDesc: 'rewarded by Bilt using Spade for accurate, hyper-local attribution',
  },
  {
    bg: 'bg-earth',
    quote: "We needed real-time controls that didn\u2019t create false declines. Spade\u2019s merchant and location data lets us approve legitimate fuel purchases while blocking misuse.",
    name: 'Daniel Simon',
    role: 'Co-founder and CEO',
    roleColor: 'text-sand',
    company: 'Coast',
    stat: '$39K',
    statDesc: 'in average annual savings reported by Coast customers with fleets of 10+ vehicles',
  },
  {
    bg: 'bg-forest',
    quote: "When we can correctly identify the type of spend that\u2019s happening at a company, we can set up rules to automatically categorize those transactions. This alone can save hours for our customers each month.",
    name: 'Anish Bhayani',
    role: 'Engineering Manager',
    roleColor: 'text-sun',
    company: 'Mercury',
    stat: '1 in 3',
    statDesc: 'U.S. startups rely on transaction data enriched by Spade',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative overflow-hidden bg-sage-1 text-black pt-14 md:pt-20 lg:pt-32 pb-14 md:pb-20 lg:pb-32">
      <div className="spade-container">
        <div className="w-full max-w-[26.625rem]">
          <h2 className="text-40px-heading max-sm:text-balance">Proven across payments and beyond</h2>
          <a href="#" className="inline-block mt-2.5 max-sm:hidden">
            <div className="text-15px-btn flex items-center gap-x-1.5 mt-2.5">
              <span className="relative mt-0.5 inline-block h-[5px] w-[7px] shrink-0"><ArrowSvg /></span>
              <span>See all case studies</span>
            </div>
          </a>
        </div>

        <div className="mt-12 flex items-start gap-x-6 sm:mt-14 md:mt-[5.75rem]">
          {/* Navigation dots */}
          <nav aria-label="Customer stories" className="-mt-[0.3125rem] w-[2.875rem] shrink-0 max-md:hidden">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1} of ${slides.length}`}
                onClick={() => setActive(i)}
                className={`group relative block cursor-pointer py-[0.3125rem] transition-[width] ease-out ${i === active ? 'w-full' : 'w-[1.625rem]'}`}
              >
                <span className="relative block h-[3px] w-full overflow-hidden bg-black/10 transition-colors group-hover:bg-black/20">
                  {i === active && (
                    <span className="absolute inset-0 bg-black animate-[fillBar_5s_linear]" style={{ animation: 'fillBar 5s linear forwards' }} />
                  )}
                </span>
              </button>
            ))}
          </nav>

          {/* Active slide */}
          <div className="min-w-0 flex-1">
            <div className="flex gap-x-6">
              <div className={`relative flex flex-col gap-y-10 p-6 sm:p-8 lg:min-h-[23.75rem] lg:px-10 lg:py-9 ${slide.bg} text-white flex-1`}>
                <CutCorners size={13} color="bg-sage-1" />
                <blockquote className="w-full max-w-[26.375rem]">
                  <p className="text-24px-heading relative">
                    <span className="absolute right-full" aria-hidden="true">&ldquo;</span>
                    <span>{slide.quote}</span>
                    <span aria-hidden="true">&rdquo;</span>
                  </p>
                  <cite className="text-11px-eyebrow-caps mt-3.5 block not-italic">
                    <span className="opacity-80">{slide.name}, </span>
                    <span className={slide.roleColor}>{slide.role}</span>
                  </cite>
                </blockquote>
                <div className="mt-auto flex items-center justify-between gap-x-6">
                  <div className="text-15px-btn flex items-center gap-x-1.5">
                    <span className="relative mt-0.5 inline-block h-[5px] w-[7px] shrink-0"><ArrowSvg /></span>
                    <span>Read case study</span>
                  </div>
                  <span className="text-15px-btn opacity-80">{slide.company}</span>
                </div>
              </div>

              {/* Side stat panel */}
              <div className="relative flex flex-col justify-between gap-y-12 p-4 md:px-6 md:py-5 w-1/3 shrink-0 max-md:hidden lg:w-1/4">
                <div className="pointer-events-none absolute inset-0 z-[2]">
                  <div className="absolute top-0 left-0 bg-sage-1" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)', width: '12px', height: '12px' }} />
                  <div className="absolute top-0 right-0 bg-sage-1" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)', width: '12px', height: '12px' }} />
                  <div className="absolute bottom-0 left-0 bg-sage-1" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)', width: '12px', height: '12px' }} />
                  <div className="absolute right-0 bottom-0 bg-sage-1" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)', width: '12px', height: '12px' }} />
                </div>
                <div className="max-w-[10rem] space-y-0.5">
                  <div className="flex items-center gap-x-1.5">
                    <div className="text-moss w-1.5 shrink-0"><ArrowSvg /></div>
                    <p className="text-10px-stat-description">Stat</p>
                  </div>
                  <p className="text-10px-stat-description">{slide.statDesc}</p>
                </div>
                <span className="text-64px-stat">{slide.stat}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 sm:hidden">
          <a href="#" className="inline-block w-full">
            <div className="text-15px-btn flex items-center gap-x-1.5 w-full">
              <span className="relative mt-0.5 inline-block h-[5px] w-[7px] shrink-0"><ArrowSvg /></span>
              <span>See all case studies</span>
            </div>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fillBar {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
