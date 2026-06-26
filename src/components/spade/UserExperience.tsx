'use client';

import NumberFlow from '@number-flow/react';

function CutCorners({ size = 13, color = 'bg-white' }: { size?: number; color?: string }) {
  const s = `${size}px`;
  return (
    <div className="pointer-events-none absolute inset-0 z-10 !m-0">
      <div className={`absolute ${color}`} style={{ top: '-1px', left: '-1px', clipPath: 'polygon(0px 0px, 100% 0px, 0px 100%)', width: s, height: s }} />
      <div className={`absolute ${color}`} style={{ top: '-1px', right: '-1px', clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%)', width: s, height: s }} />
      <div className={`absolute ${color}`} style={{ bottom: '-1px', left: '-1px', clipPath: 'polygon(0px 0px, 0px 100%, 100% 100%)', width: s, height: s }} />
      <div className={`absolute ${color}`} style={{ bottom: '-1px', right: '-1px', clipPath: 'polygon(100% 0px, 0px 100%, 100% 100%)', width: s, height: s }} />
    </div>
  );
}

export default function UserExperience() {
  return (
    <section className="relative overflow-hidden bg-white text-black pt-0 pb-0">
      <div className="spade-container space-y-20 md:space-y-28 lg:space-y-32">
        
        {/* Analytics & AI Block */}
        <div className="relative w-full max-md:-mx-5 max-md:w-[calc(100%+2.5rem)] bg-forest text-white">
          <CutCorners size={17} color="bg-white" />
          <picture className="block opacity-60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              alt="Analytics And AI Feature BG" 
              loading="lazy" 
              className="object-cover opacity-100" 
              src="https://spadewp.wpenginepowered.com/wp-content/uploads/2026/01/analytics-and-AI-feature-BG.svg" 
              style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px' }} 
            />
          </picture>
          <div className="relative z-[1] flex flex-col gap-6 px-5 py-10 sm:p-8 md:flex-row md:gap-10 lg:p-10 xl:min-h-[37.1875rem]">
            <div className="flex w-full flex-col items-start text-left md:w-2/5 max-w-[27.875rem] shrink-0">
              <div className="inline-flex items-center gap-x-3 sm:gap-x-4 mb-4">
                <picture className="block size-6.5 shrink-0 sm:size-7.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Analytics Icon" loading="lazy" width="30" height="30" className="size-full opacity-100" src="https://spadewp.wpenginepowered.com/wp-content/uploads/2025/12/analytics-icon.svg" />
                </picture>
                <span className="opacity-80 text-13px-eyebrow-caps">Analytics & AI</span>
              </div>
              <h2 className="text-40px-heading-thin mt-auto">Build intelligence on solid data</h2>
              <div className="prose mt-3 sm:mt-4 opacity-80">
                <p>Provide consistent merchant context across cards, transfers, and third party sources — powering personalized offers, new product features, and better cross-sell opportunities.</p>
              </div>
              <div className="flex items-center gap-x-5 mt-6 sm:mt-7">
                <a className="inline-block" href="/use-case/analytics-and-ai/">
                  <div className="group relative inline-flex appearance-none items-center py-2.5 select-none transition-[color] justify-center text-white hover:text-black min-h-[2.6875rem] px-4.5">
                    <span className="absolute inset-0 rounded-md transition-all duration-300 group-hover:scale-[0.98] origin-center bg-transparent border border-white/15 group-hover:bg-white group-hover:border-white"></span>
                    <span className="text-15px-btn relative z-10">Learn more</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center md:flex-1 md:self-center md:px-4 lg:px-6 z-10">
              <div className="relative flex w-full max-w-[39rem]" style={{ aspectRatio: '612 / 492', width: '100%', height: 'auto' }}>
                <picture className="absolute inset-0 size-full flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    alt="Analytics Dashboard View" 
                    loading="lazy" 
                    className="w-full h-full object-cover rounded-lg" 
                    src="/media/download (3).png" 
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>

        {/* User Experience Block */}
        <div className="flex flex-col-reverse justify-between gap-9 md:gap-8 lg:gap-10 items-end md:flex-row-reverse pb-20">
          <div className="w-full shrink-0 md:w-1/2 md:max-w-md">
            <div className="flex w-full flex-col items-start text-left">
              <div className="inline-flex items-center gap-x-3 sm:gap-x-4 mb-3.5">
                <picture className="block size-6.5 shrink-0 sm:size-7.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="User Icon" loading="lazy" width="30" height="30" className="size-full opacity-100" src="https://spadewp.wpenginepowered.com/wp-content/uploads/2025/12/user-icon.svg" />
                </picture>
                <span className="opacity-80 text-13px-eyebrow-caps">User Experience</span>
              </div>
              <h2 className="text-40px-heading-thin">Move disputes to the merchant</h2>
              <div className="prose mt-2.5 sm:mt-3 opacity-80">
                <p>Give customers the clarity they need to recognize charges or contact the merchant directly — before a dispute ever reaches your support team.</p>
              </div>
              <div className="flex items-center gap-x-5 mt-6 sm:mt-8">
                <a className="inline-block" href="/use-case/user-experience/">
                  <div className="group relative inline-flex appearance-none items-center py-2.5 select-none transition-[color] justify-center text-black min-h-[2.6875rem] px-4.5">
                    <span className="absolute inset-0 rounded-md transition-all duration-300 group-hover:scale-[0.98] origin-center bg-white border border-black/15 group-hover:bg-lemongrass group-hover:border-lemongrass"></span>
                    <span className="text-15px-btn relative z-10">Learn more</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="relative bg-sage-1 inline-flex items-center gap-x-3 p-3.5 pl-3 max-lg:w-full mt-10 sm:mt-14 md:max-w-[22.625rem] md:text-balance xl:mt-20">
              <CutCorners size={9} color="bg-white" />
              <span className="text-20px-stat relative inline-grid shrink-0 *:[grid-area:1/1]">
                <NumberFlow value={95} suffix="%" className="invisible" aria-hidden="true" />
                <NumberFlow value={95} suffix="%" />
              </span>
              <p className="text-11px-stat-description font-bold leading-tight">physical transactions matched with an exact geolocation</p>
            </div>
          </div>
          <div className="relative w-full flex-1 md:max-w-[47.5rem]">
            <CutCorners size={17} color="bg-white" />
            <div className="relative flex bg-sage-1" style={{ aspectRatio: '790 / 509', width: '100%', height: 'auto' }}>
              <picture className="absolute inset-0 size-full flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  alt="User Experience Interface" 
                  loading="lazy" 
                  className="w-full h-full object-cover rounded-lg" 
                  src="/media/download (5).png" 
                />
              </picture>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
