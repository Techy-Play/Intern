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

export default function RiskAuth() {
  return (
    <section className="relative overflow-hidden bg-white text-black pt-20 md:pt-28 lg:pt-40 pb-0">
      <div className="spade-container">
        <div className="flex flex-col-reverse justify-between gap-9 md:gap-8 lg:gap-10 items-end md:flex-row">
          {/* Left text column */}
          <div className="w-full shrink-0 md:w-1/2 md:max-w-md">
            <div className="flex w-full flex-col items-start text-left">
              <div className="inline-flex items-center gap-x-3 sm:gap-x-4 mb-3.5">
                <svg className="size-[26px] sm:size-[30px] shrink-0" viewBox="0 0 30 30" fill="none">
                  <rect width="30" height="30" rx="6" fill="#18280E" fillOpacity="0.08"/>
                  <path d="M15 8a4 4 0 0 0-4 4v2h-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-1v-2a4 4 0 0 0-4-4zm-2 4a2 2 0 1 1 4 0v2h-4v-2z" fill="#18280E"/>
                </svg>
                <span className="opacity-80 text-13px-eyebrow-caps">Risk &amp; Authorization</span>
              </div>
              <h2 className="text-40px-heading-thin">Make every authorization smarter</h2>
              <div className="mt-2.5 sm:mt-3 opacity-80">
                <p className="text-16px-body">Return enriched merchant and location data in under 50 milliseconds — helping teams make faster, more accurate authorization decisions.</p>
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
              <span className="text-20px-stat">&lt;50ms</span>
              <p className="text-11px-stat-description leading-tight">P99 enrichment latency</p>
            </div>
          </div>

          {/* Right image column */}
          <div className="relative w-full flex-1 md:max-w-[47.5rem]">
            <CutCorners size={13} />
            <div className="relative w-full shrink-0" style={{ aspectRatio: '2280/1527' }}>
              <div className="relative size-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Risk Auth Lifestyle"
                  loading="lazy"
                  width={2280}
                  height={1527}
                  className="h-auto max-w-full"
                  src="https://spadewp.wpenginepowered.com/wp-content/uploads/2025/12/Risk-Auth-Lifestyle.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
