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

export default function RiskAuth() {
  return (
    <section className="relative overflow-hidden bg-white text-black pt-20 md:pt-28 lg:pt-40 pb-0">
      <div className="spade-container space-y-20 md:space-y-28 lg:space-y-32">
        <div className="two-column-content flex flex-col-reverse justify-between gap-9 md:gap-8 lg:gap-10 items-end md:flex-row">
          <div className="w-full shrink-0 md:w-1/2 md:max-w-md">
            <div className="flex w-full flex-col items-start text-left">
              <div className="inline-flex items-center gap-x-3 sm:gap-x-4 mb-3.5">
                <picture className="block size-6.5 shrink-0 sm:size-7.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Padlock Icon" loading="lazy" width="30" height="30" className="size-full opacity-100" src="https://spadewp.wpenginepowered.com/wp-content/uploads/2025/12/padlock-icon.svg" />
                </picture>
                <span className="opacity-80 text-13px-eyebrow-caps">Risk &amp; Authorization</span>
              </div>
              <h2 className="text-40px-heading-thin">Make every authorization smarter</h2>
              <div className="prose mt-2.5 sm:mt-3 opacity-80">
                <p>Return enriched merchant and location data in under 50 milliseconds — helping teams make faster, more accurate authorization decisions.</p>
              </div>
              <div className="flex items-center gap-x-5 mt-6 sm:mt-8">
                <a className="inline-block" href="/use-case/risk-authorization/">
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
                <NumberFlow value={50} prefix="<" suffix="ms" className="invisible" aria-hidden="true" />
                <NumberFlow value={50} prefix="<" suffix="ms" />
              </span>
              <p className="text-11px-stat-description leading-tight">P99 enrichment latency</p>
            </div>
          </div>
          <div className="relative w-full flex-1 md:max-w-[47.5rem]">
            <CutCorners size={17} color="bg-white" />
            <div className="relative w-full shrink-0" style={{ aspectRatio: '2280 / 1527' }}>
              <div className="relative size-full">
                <picture className="block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Risk Auth Lifestyle" loading="lazy" width="2280" height="1527" className="h-auto max-w-full opacity-100" src="https://spadewp.wpenginepowered.com/wp-content/uploads/2025/12/Risk-Auth-Lifestyle.jpg" />
                </picture>
              </div>
              <div className="absolute inset-0 size-full z-[2]">
                <div className="relative flex" style={{ aspectRatio: '760 / 509', width: '100%', height: 'auto' }}>
                  <div className="absolute inset-0 size-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/media/download.png" alt="Overlay" className="size-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
