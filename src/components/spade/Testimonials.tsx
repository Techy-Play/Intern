'use client';

import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import NumberFlow from '@number-flow/react';

function ArrowSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 16" fill="none">
      <path d="M2.0326 15.6442L5.93597e-07 13.5799L9.02336e-08 2.0643L2.0326 -8.88478e-08L21.48 7.27606L21.48 8.36816L2.0326 15.6442Z" fill="currentColor"/>
    </svg>
  );
}

const slides = [
  {
    bg: 'bg-[#3e3d16]', // Bilt - Olive
    quote: "Spade's granular merchant data allows us to deliver new and innovative rewards on the more than $5 billion in neighborhood spend happening on our platform.",
    name: 'Brandt Smallwood',
    role: 'President',
    roleColor: 'text-sun',
    stats: [
      {
        value: 5,
        prefix: '$',
        suffix: 'B+',
        desc: 'rewarded by Bilt using Spade for accurate, hyper-local attribution',
      },
      {
        value: 100, // Placeholder value as not provided in HTML
        prefix: '',
        suffix: 'K+',
        desc: "Local businesses in Bilt's rewards network, accurately matched to transactions using Spade",
      }
    ],
    logoSrc: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2026/03/bilt-white.png',
    logoWidth: 274,
    logoHeight: 46,
    logoAlt: 'Bilt White',
    link: '/customers/bilt-enrichment-ai-agent/'
  },
  {
    bg: 'bg-[#3b2313]', // Coast - Brown
    quote: "We needed real-time controls that didn't create false declines. Spade's merchant and location data lets us approve legitimate fuel purchases while blocking misuse, and helps save our customers tens of thousands of dollars.",
    name: 'Daniel Simon',
    role: 'Co-founder and CEO',
    roleColor: 'text-sand',
    stats: [
      {
        value: 30000,
        prefix: '$',
        suffix: '',
        desc: 'in average annual savings reported by Coast customers with fleets of 10+ vehicles',
      },
      {
        value: 50,
        prefix: '<',
        suffix: 'ms',
        desc: ', speed at which Spade returns precise latitude and longitude for each transaction',
      }
    ],
    logoSrc: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2026/03/coast-white.png',
    logoWidth: 250,
    logoHeight: 46,
    logoAlt: 'Coast White',
    link: '/customers/coast/'
  },
  {
    bg: 'bg-[#182a15]', // Mercury - Deep Green
    quote: "When we can correctly identify the type of spend that's happening at a company, we can set up rules to automatically categorize those transactions. This alone can save hours for our customers each month",
    name: 'Anish Bhayani',
    role: 'Engineering Manager',
    roleColor: 'text-sun',
    stats: [
      {
        value: 3,
        prefix: '1 in ',
        suffix: '',
        desc: 'U.S. startups rely on transaction data enriched by Spade',
      },
      {
        value: 200,
        prefix: '',
        suffix: 'K+',
        desc: 'enrichment accuracy results in verified categorization for Mercury’s 200,000+ customers ',
      }
    ],
    logoSrc: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2026/03/mercury-1.svg',
    logoWidth: 120,
    logoHeight: 27,
    logoAlt: 'Mercury 1',
    link: '/customers/mercury/'
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  const [active, setActive] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActive(emblaApi.internalEngine().index.get());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      const autoplay = emblaApi.plugins().autoplay;
      if (autoplay) {
        autoplay.reset();
      }
    }
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden bg-sage-1 text-black pt-14 md:pt-20 lg:pt-32 pb-14 md:pb-20 lg:pb-32">
      <div className="spade-container">
        <div>
          <div className="w-full max-w-[26.625rem]">
            <h2 className="text-40px-heading max-sm:text-balance">Proven across payments and beyond</h2>
            <a className="inline-block mt-2.5 max-sm:hidden" href="/customers/">
              <div className="text-15px-btn flex items-center gap-x-1.25 mt-2.5 max-sm:hidden group">
                <span className="relative mt-0.5 inline-block h-[5px] w-[7px] shrink-0 overflow-hidden" aria-hidden="true">
                  <span className="absolute inset-0 block transition-transform duration-300 group-hover:-translate-y-full">
                    <ArrowSvg />
                  </span>
                  <span className="absolute inset-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    <ArrowSvg />
                  </span>
                </span>
                <span>See all case studies</span>
              </div>
            </a>
          </div>

          <div className="mt-12 flex items-start gap-x-6 sm:mt-14 md:mt-24 lg:mt-32">
            <nav aria-label="Customer stories" className="-mt-[0.3125rem] w-[2.875rem] shrink-0 max-md:hidden">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1} of 3`}
                  className={`group relative block cursor-pointer py-[0.3125rem] transition-[width] duration-300 ease-out ${i === active ? 'w-full' : 'w-[1.625rem]'}`}
                  onClick={() => scrollTo(i)}
                >
                  {i === active && (
                    <div aria-hidden="true" className="absolute top-[.115rem] left-0 flex h-[.6rem] w-3 items-center max-lg:hidden md:-translate-x-[200%]">
                      <ArrowSvg />
                    </div>
                  )}
                  <span className="relative block h-[3px] w-full overflow-hidden bg-black/10 transition-colors group-hover:bg-black/20">
                    {i === active && (
                      <span className="absolute inset-0 z-1 block bg-black animate-[fillBar_5s_linear]" />
                    )}
                  </span>
                </button>
              ))}
            </nav>

            <div className="min-w-0 flex-1">
              <div className="overflow-hidden max-md:overflow-visible!" ref={emblaRef}>
                <div className="flex touch-pan-y" style={{ backfaceVisibility: 'hidden' }}>
                  {slides.map((slide, i) => (
                    <div key={i} className="flex-[0_0_100%] min-w-0 shrink-0 pr-6 lg:pr-12">
                      <div className="flex gap-x-6">
                        {/* Main Quote Card */}
                        <a className="inline-block block w-full flex-1" href={slide.link}>
                          <div className={`relative flex flex-col gap-y-10 p-6 sm:p-8 lg:min-h-[23.75rem] lg:px-10 lg:py-9 ${slide.bg} text-white`}>
                            <div className="pointer-events-none absolute inset-0 z-10 !m-0">
                              <div className="absolute bg-sage-1" style={{ top: '-1px', left: '-1px', clipPath: 'polygon(0px 0px, 100% 0px, 0px 100%)', width: '13px', height: '13px' }}></div>
                              <div className="absolute bg-sage-1" style={{ top: '-1px', right: '-1px', clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%)', width: '13px', height: '13px' }}></div>
                              <div className="absolute bg-sage-1" style={{ bottom: '-1px', left: '-1px', clipPath: 'polygon(0px 0px, 0px 100%, 100% 100%)', width: '13px', height: '13px' }}></div>
                              <div className="absolute bg-sage-1" style={{ bottom: '-1px', right: '-1px', clipPath: 'polygon(100% 0px, 0px 100%, 100% 100%)', width: '13px', height: '13px' }}></div>
                            </div>
                            <blockquote className="w-full max-w-[26.375rem] relative z-20">
                              <p className="text-24px-heading relative">
                                <span className="absolute right-full" aria-hidden="true">“</span>
                                <span>{slide.quote}</span>
                                <span aria-hidden="true">”</span>
                              </p>
                              <cite className="text-11px-eyebrow-caps mt-8 block not-italic uppercase tracking-widest font-bold">
                                <span>{slide.name}, </span>
                                <span className={slide.roleColor}>{slide.role}</span>
                              </cite>
                            </blockquote>
                            <div className="mt-auto pt-10 flex items-center justify-between gap-x-6">
                              <div className="text-15px-btn flex items-center gap-x-1.25 group">
                                <span className="relative mt-0.5 inline-block h-1.25 w-1.75 shrink-0 overflow-hidden" aria-hidden="true">
                                  <span className="absolute inset-0 block transition-transform duration-300 group-hover:-translate-y-full">
                                    <ArrowSvg />
                                  </span>
                                  <span className="absolute inset-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                                    <ArrowSvg />
                                  </span>
                                </span>
                                <span>Read case study</span>
                              </div>
                              <picture className="block h-9 max-w-32 lg:w-30">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img alt={slide.logoAlt} loading="lazy" width={slide.logoWidth} height={slide.logoHeight} className="h-auto max-w-full object-contain object-right opacity-100" src={slide.logoSrc} />
                              </picture>
                            </div>
                          </div>
                        </a>

                        {/* Stat Cards */}
                        {slide.stats.map((stat, idx) => (
                          <div key={idx} className={`relative flex flex-col justify-between gap-y-12 p-4 md:px-6 md:py-5 w-1/3 shrink-0 xl:w-1/4 ${idx > 0 ? 'max-xl:hidden' : 'max-md:hidden'}`}>
                            <div className="pointer-events-none absolute inset-0 z-[2]">
                              <div className="absolute top-0 left-0 border-white/10 bg-black" style={{ clipPath: 'polygon(0px 0px, 100% 0px, 0px 100%)', width: '12px', height: '12px' }}></div>
                              <div className="absolute top-0 right-0 border-white/10 bg-black" style={{ clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%)', width: '12px', height: '12px' }}></div>
                              <div className="absolute bottom-0 left-0 border-white/10 bg-black" style={{ clipPath: 'polygon(0px 0px, 0px 100%, 100% 100%)', width: '12px', height: '12px' }}></div>
                              <div className="absolute right-0 bottom-0 border-white/10 bg-black" style={{ clipPath: 'polygon(100% 0px, 0px 100%, 100% 100%)', width: '12px', height: '12px' }}></div>
                            </div>
                            <div className="max-w-[10rem] space-y-2">
                              <div className="flex items-center gap-x-1.5 uppercase font-bold tracking-widest text-black/60">
                                <div className="text-moss w-1.5 shrink-0"><ArrowSvg /></div>
                                <p className="text-10px-stat-description">Stat</p>
                              </div>
                              <p className="text-10px-stat-description font-mono uppercase text-black/60 leading-tight">{stat.desc}</p>
                            </div>
                            <div className="text-64px-stat flex items-baseline tracking-tight">
                              {stat.prefix && <span>{stat.prefix}</span>}
                              <NumberFlow value={active === i ? stat.value : 0} />
                              {stat.suffix && <span>{stat.suffix}</span>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="mt-8 sm:hidden">
          <a className="inline-block w-full" href="/customers/">
            <div className="text-15px-btn flex items-center gap-x-1.25 w-full group">
              <span className="relative mt-0.5 inline-block h-[5px] w-[7px] shrink-0 overflow-hidden" aria-hidden="true">
                <span className="absolute inset-0 block transition-transform duration-300 group-hover:-translate-y-full">
                  <ArrowSvg />
                </span>
                <span className="absolute inset-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <ArrowSvg />
                </span>
              </span>
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
