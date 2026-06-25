'use client';

function CutCorners({ size = 13, color = 'bg-white' }: { size?: number; color?: string }) {
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

export default function UserExperience() {
  return (
    <section className="relative overflow-hidden bg-white text-black pt-20 md:pt-28 lg:pt-40 pb-0">
      <div className="spade-container">
        <div className="flex flex-col-reverse justify-between gap-9 md:gap-8 lg:gap-10 items-end md:flex-row-reverse">
          {/* Right text column */}
          <div className="w-full shrink-0 md:w-1/2 md:max-w-md">
            <div className="flex w-full flex-col items-start text-left">
              <div className="inline-flex items-center gap-x-3 sm:gap-x-4 mb-3.5">
                <svg className="size-[26px] sm:size-[30px] shrink-0" viewBox="0 0 30 30" fill="none">
                  <rect width="30" height="30" rx="6" fill="#18280E" fillOpacity="0.08"/>
                  <circle cx="15" cy="12" r="4" fill="#18280E"/>
                  <path d="M9 22c0-3.31 2.69-6 6-6s6 2.69 6 6H9z" fill="#18280E"/>
                </svg>
                <span className="opacity-80 text-13px-eyebrow-caps">User Experience</span>
              </div>
              <h2 className="text-40px-heading-thin">Move disputes to the merchant</h2>
              <div className="mt-2.5 sm:mt-3 opacity-80">
                <p className="text-16px-body">Give customers the clarity they need to recognize charges or contact the merchant directly — before a dispute ever reaches your support team.</p>
              </div>
              <div className="flex items-center gap-x-5 mt-6 sm:mt-8">
                <a href="#" className="inline-block">
                  <div className="group relative inline-flex appearance-none items-center py-2.5 select-none transition-[color] justify-center text-black min-h-[2.6875rem] px-[1.125rem]">
                    <span className="absolute inset-0 rounded-md transition-all group-hover:scale-[0.98] origin-center bg-white border border-black/15 group-hover:bg-lemongrass group-hover:border-lemongrass"></span>
                    <span className="text-15px-btn relative z-10">Learn more</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Stat badge */}
            <div className="relative bg-sage-1 inline-flex items-center gap-x-3 p-3.5 pl-3 max-lg:w-full mt-10 sm:mt-14 md:max-w-[22.625rem] md:text-balance xl:mt-20">
              <CutCorners size={13} />
              <span className="text-20px-stat">95%</span>
              <p className="text-11px-stat-description leading-tight">physical transactions matched with an exact geolocation</p>
            </div>
          </div>

          {/* Left image placeholder */}
          <div className="relative w-full flex-1 md:max-w-[47.5rem]">
            <CutCorners size={13} />
            <div className="relative flex bg-sage-1" style={{ aspectRatio: '790/509', width: '100%', height: 'auto' }}>
              <div className="absolute inset-0 size-full" style={{
                backgroundImage: 'radial-gradient(circle at 40% 50%, rgba(24,40,14,0.05) 0%, transparent 50%), radial-gradient(circle at 60% 50%, rgba(197,232,77,0.06) 0%, transparent 50%)'
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
