'use client';

function ArrowSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 16" fill="none">
      <path d="M2.0326 15.6442L5.93597e-07 13.5799L9.02336e-08 2.0643L2.0326 -8.88478e-08L21.48 7.27606L21.48 8.36816L2.0326 15.6442Z" fill="currentColor"/>
    </svg>
  );
}

const industries = [
  {
    label: 'Fintechs',
    title: 'Infrastructure for innovation',
    desc: 'Power new products, rewards, and AI capabilities with a data foundation that scales.',
    href: '#',
  },
  {
    label: 'Banks',
    title: 'Clarity at enterprise scale',
    desc: 'Unify authorization, analytics, and AI on one trusted platform.',
    href: '#',
  },
  {
    label: 'AI',
    title: 'AI that learns from the truth',
    desc: 'Feed your models clean, enriched data that makes intelligence actionable.',
    href: '#',
  },
];

import { useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';

export default function IndustrySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = latest * videoRef.current.duration;
    }
  });

  // Animation values for the three text blocks
  // Fintechs Block (Phase 1)
  const fintechsOpacity = useTransform(scrollYProgress, [0, 0.3, 0.33, 1], [1, 1, 0, 0]);
  const fintechsX = useTransform(scrollYProgress, [0, 0.3, 0.33, 1], [0, 0, 60, 60]); // 60 is inward for left side
  const fintechsVisibility = useTransform(scrollYProgress, (pos) => pos <= 0.33 ? "visible" : "hidden");

  // Banks Block (Phase 2)
  const banksOpacity = useTransform(scrollYProgress, [0, 0.3, 0.33, 0.63, 0.66, 1], [0, 0, 1, 1, 0, 0]);
  const banksX = useTransform(scrollYProgress, [0, 0.3, 0.33, 0.63, 0.66, 1], [-60, -60, 0, 0, -60, -60]); // -60 is inward for right side
  const banksVisibility = useTransform(scrollYProgress, (pos) => pos >= 0.3 && pos <= 0.66 ? "visible" : "hidden");

  // AI Block (Phase 3)
  const aiOpacity = useTransform(scrollYProgress, [0, 0.63, 0.66, 1], [0, 0, 1, 1]);
  const aiX = useTransform(scrollYProgress, [0, 0.63, 0.66, 1], [60, 60, 0, 0]); // 60 is inward for left side
  const aiVisibility = useTransform(scrollYProgress, (pos) => pos >= 0.63 ? "visible" : "hidden");

  return (
    <section id="" className="relative overflow-x-clip overflow-visible bg-white text-black pt-0 pb-0">
      <div className="container">
        <div ref={containerRef} className="pt-20 pb-16 sm:py-20 lg:h-[400vh] lg:py-0">
          <div className="relative flex flex-col items-center justify-center lg:sticky lg:top-0 lg:h-screen">
            <h2 className="text-48px-heading mx-auto w-full max-w-[27rem] text-center">Built for every layer of modern finance</h2>
            
            <div className="relative z-[100] mx-auto aspect-[340/360] w-full max-w-[21.25rem] max-lg:hidden">
              <video 
                ref={videoRef}
                className="block h-full w-full object-contain" 
                playsInline 
                preload="auto" 
                muted 
                src="/media/d5cc5c6c-f98b-4f6a-8102-e0b34761a9c4.mp4"
              />
            </div>
            
            <div className="relative mx-auto -mt-6 flex w-full max-w-[68.5rem] flex-col items-center lg:justify-center">
              <div className="pointer-events-auto absolute inset-0 mx-auto w-full px-6 max-lg:hidden">
                
                {/* Fintechs Block */}
                <motion.div className="pointer-events-auto absolute bottom-12 left-0 w-[17.125rem]" style={{ opacity: fintechsOpacity, x: fintechsX, visibility: fintechsVisibility }}>
                  <div className="relative flex flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" width="425" height="32" viewBox="0 0 425 32" fill="none" className="mb-2 max-xl:hidden">
                      <path d="M424.27 0.500163L0.5 0.5L0.499999 31.3387" stroke="#18280E" strokeDasharray="2.52 2.52"></path>
                    </svg>
                    <div className="relative mb-3.5 flex">
                      <span className="text-11px-eyebrow-caps opacity-80">[fintechs]</span>
                      <div className="absolute top-[0.3125rem] right-[calc(100%+1rem)] w-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 16" fill="none">
                          <path d="M2.0326 15.6442L5.93597e-07 13.5799L9.02336e-08 2.0643L2.0326 -8.88478e-08L21.48 7.27606L21.48 8.36816L2.0326 15.6442Z" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-20px-heading">Infrastructure for innovation</h3>
                      <p className="text-16px-body opacity-80">Power new products, rewards, and AI capabilities with a data foundation that scales.</p>
                    </div>
                    <div className="mt-1">
                      <a target="" className="inline-block" href="/industry/fintechs/">
                        <div className="text-15px-btn flex items-center gap-x-1.25">
                          <span className="relative mt-0.5 inline-block h-1.25 w-1.75 shrink-0" aria-hidden="true">
                            <span className="absolute inset-0 block" style={{ opacity: 1, transform: 'none' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 16" fill="none">
                                <path d="M2.0326 15.6442L5.93597e-07 13.5799L9.02336e-08 2.0643L2.0326 -8.88478e-08L21.48 7.27606L21.48 8.36816L2.0326 15.6442Z" fill="currentColor"></path>
                              </svg>
                            </span>
                          </span>
                          <span>Learn more</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Banks Block */}
                <motion.div className="pointer-events-auto absolute bottom-12 right-0 w-[16.375rem]" style={{ opacity: banksOpacity, x: banksX, visibility: banksVisibility }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="141" height="1" viewBox="0 0 141 1" fill="none" className="absolute top-[2.625rem] right-[calc(100%+1rem)] max-xl:hidden">
                    <line y1="0.5" x2="141" y2="0.5" stroke="#18280E" strokeDasharray="2.52 2.52"></line>
                  </svg>
                  <div className="relative flex flex-col">
                    <div className="relative mb-3.5 flex">
                      <span className="text-11px-eyebrow-caps opacity-80">[Banks]</span>
                      <div className="absolute top-[0.3125rem] right-[calc(100%+1rem)] w-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 16" fill="none">
                          <path d="M2.0326 15.6442L5.93597e-07 13.5799L9.02336e-08 2.0643L2.0326 -8.88478e-08L21.48 7.27606L21.48 8.36816L2.0326 15.6442Z" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-20px-heading">Clarity at enterprise scale</h3>
                      <p className="text-16px-body opacity-80">Unify authorization, analytics, and AI on one trusted platform.</p>
                    </div>
                    <div className="mt-1">
                      <a target="" className="inline-block" href="/industry/banks/">
                        <div className="text-15px-btn flex items-center gap-x-1.25">
                          <span className="relative mt-0.5 inline-block h-1.25 w-1.75 shrink-0" aria-hidden="true">
                            <span className="absolute inset-0 block" style={{ opacity: 1, transform: 'none' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 16" fill="none">
                                <path d="M2.0326 15.6442L5.93597e-07 13.5799L9.02336e-08 2.0643L2.0326 -8.88478e-08L21.48 7.27606L21.48 8.36816L2.0326 15.6442Z" fill="currentColor"></path>
                              </svg>
                            </span>
                          </span>
                          <span>Learn more</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* AI Block */}
                <motion.div className="pointer-events-auto absolute bottom-12 left-0 w-[17.125rem]" style={{ opacity: aiOpacity, x: aiX, visibility: aiVisibility }}>
                  <div className="relative flex flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" width="425" height="32" viewBox="0 0 425 32" fill="none" className="mb-2 max-xl:hidden">
                      <path d="M424.27 0.500163L0.5 0.5L0.499999 31.3387" stroke="#18280E" strokeDasharray="2.52 2.52"></path>
                    </svg>
                    <div className="relative mb-3.5 flex">
                      <span className="text-11px-eyebrow-caps opacity-80">[AI]</span>
                      <div className="absolute top-[0.3125rem] right-[calc(100%+1rem)] w-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 16" fill="none">
                          <path d="M2.0326 15.6442L5.93597e-07 13.5799L9.02336e-08 2.0643L2.0326 -8.88478e-08L21.48 7.27606L21.48 8.36816L2.0326 15.6442Z" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-20px-heading">&nbsp;AI that learns from the truth</h3>
                      <p className="text-16px-body opacity-80">Feed your models clean, enriched data that makes intelligence actionable.</p>
                    </div>
                    <div className="mt-1">
                      <a target="" className="inline-block" href="/industry/ai/">
                        <div className="text-15px-btn flex items-center gap-x-1.25">
                          <span className="relative mt-0.5 inline-block h-1.25 w-1.75 shrink-0" aria-hidden="true">
                            <span className="absolute inset-0 block" style={{ opacity: 1, transform: 'none' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 16" fill="none">
                                <path d="M2.0326 15.6442L5.93597e-07 13.5799L9.02336e-08 2.0643L2.0326 -8.88478e-08L21.48 7.27606L21.48 8.36816L2.0326 15.6442Z" fill="currentColor"></path>
                              </svg>
                            </span>
                          </span>
                          <span>Learn more</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>

            <div className="mt-14 flex flex-col gap-8 lg:hidden w-full max-w-[27rem] mx-auto">
              <div className="relative border border-sage-3 flex flex-col items-center gap-3 px-6 pt-5 pb-7">
                <div className="pointer-events-none absolute inset-0 z-[2]">
                  <div className="absolute -top-px -left-px bg-white border border-sage-3" style={{ clipPath: 'polygon(0px 0px, 100% 0px, 0px 100%)', width: '12px', height: '12px' }}></div>
                  <div className="absolute -top-px -right-px bg-white border border-sage-3" style={{ clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%)', width: '12px', height: '12px' }}></div>
                  <div className="absolute -bottom-px -left-px bg-white border border-sage-3" style={{ clipPath: 'polygon(0px 0px, 0px 100%, 100% 100%)', width: '12px', height: '12px' }}></div>
                  <div className="absolute -right-px -bottom-px bg-white border border-sage-3" style={{ clipPath: 'polygon(100% 0px, 0px 100%, 100% 100%)', width: '12px', height: '12px' }}></div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-11px-eyebrow-caps mb-3 opacity-80">[fintechs]</span>
                  <h3 className="text-20px-heading mb-0.5">Infrastructure for innovation</h3>
                  <p className="text-16px-body opacity-80 max-sm:text-balance">Power new products, rewards, and AI capabilities with a data foundation that scales.</p>
                  <div className="text-15px-btn flex items-center gap-x-1.25 mt-3.5">
                    <span className="relative mt-0.5 inline-block h-1.25 w-1.75 shrink-0" aria-hidden="true">
                      <span className="absolute inset-0 block" style={{ opacity: 1, transform: 'none' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 16" fill="none"><path d="M2.0326 15.6442L5.93597e-07 13.5799L9.02336e-08 2.0643L2.0326 -8.88478e-08L21.48 7.27606L21.48 8.36816L2.0326 15.6442Z" fill="currentColor"></path></svg>
                      </span>
                    </span>
                    <span>Learn more</span>
                  </div>
                  <a href="/industry/fintechs/" className="absolute inset-0 h-full w-full"></a>
                </div>
              </div>

              <div className="relative border border-sage-3 flex flex-col items-center gap-3 px-6 pt-5 pb-7">
                <div className="pointer-events-none absolute inset-0 z-[2]">
                  <div className="absolute -top-px -left-px bg-white border border-sage-3" style={{ clipPath: 'polygon(0px 0px, 100% 0px, 0px 100%)', width: '12px', height: '12px' }}></div>
                  <div className="absolute -top-px -right-px bg-white border border-sage-3" style={{ clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%)', width: '12px', height: '12px' }}></div>
                  <div className="absolute -bottom-px -left-px bg-white border border-sage-3" style={{ clipPath: 'polygon(0px 0px, 0px 100%, 100% 100%)', width: '12px', height: '12px' }}></div>
                  <div className="absolute -right-px -bottom-px bg-white border border-sage-3" style={{ clipPath: 'polygon(100% 0px, 0px 100%, 100% 100%)', width: '12px', height: '12px' }}></div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-11px-eyebrow-caps mb-3 opacity-80">[Banks]</span>
                  <h3 className="text-20px-heading mb-0.5">Clarity at enterprise scale</h3>
                  <p className="text-16px-body opacity-80 max-sm:text-balance">Unify authorization, analytics, and AI on one trusted platform.</p>
                  <div className="text-15px-btn flex items-center gap-x-1.25 mt-3.5">
                    <span className="relative mt-0.5 inline-block h-1.25 w-1.75 shrink-0" aria-hidden="true">
                      <span className="absolute inset-0 block" style={{ opacity: 1, transform: 'none' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 16" fill="none"><path d="M2.0326 15.6442L5.93597e-07 13.5799L9.02336e-08 2.0643L2.0326 -8.88478e-08L21.48 7.27606L21.48 8.36816L2.0326 15.6442Z" fill="currentColor"></path></svg>
                      </span>
                    </span>
                    <span>Learn more</span>
                  </div>
                  <a href="/industry/banks/" className="absolute inset-0 h-full w-full"></a>
                </div>
              </div>
              
              <div className="relative border border-sage-3 flex flex-col items-center gap-3 px-6 pt-5 pb-7">
                <div className="pointer-events-none absolute inset-0 z-[2]">
                  <div className="absolute -top-px -left-px bg-white border border-sage-3" style={{ clipPath: 'polygon(0px 0px, 100% 0px, 0px 100%)', width: '12px', height: '12px' }}></div>
                  <div className="absolute -top-px -right-px bg-white border border-sage-3" style={{ clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%)', width: '12px', height: '12px' }}></div>
                  <div className="absolute -bottom-px -left-px bg-white border border-sage-3" style={{ clipPath: 'polygon(0px 0px, 0px 100%, 100% 100%)', width: '12px', height: '12px' }}></div>
                  <div className="absolute -right-px -bottom-px bg-white border border-sage-3" style={{ clipPath: 'polygon(100% 0px, 0px 100%, 100% 100%)', width: '12px', height: '12px' }}></div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-11px-eyebrow-caps mb-3 opacity-80">[AI]</span>
                  <h3 className="text-20px-heading mb-0.5">&nbsp;AI that learns from the truth</h3>
                  <p className="text-16px-body opacity-80 max-sm:text-balance">Feed your models clean, enriched data that makes intelligence actionable.</p>
                  <div className="text-15px-btn flex items-center gap-x-1.25 mt-3.5">
                    <span className="relative mt-0.5 inline-block h-1.25 w-1.75 shrink-0" aria-hidden="true">
                      <span className="absolute inset-0 block" style={{ opacity: 1, transform: 'none' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 16" fill="none"><path d="M2.0326 15.6442L5.93597e-07 13.5799L9.02336e-08 2.0643L2.0326 -8.88478e-08L21.48 7.27606L21.48 8.36816L2.0326 15.6442Z" fill="currentColor"></path></svg>
                      </span>
                    </span>
                    <span>Learn more</span>
                  </div>
                  <a href="/industry/ai/" className="absolute inset-0 h-full w-full"></a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
