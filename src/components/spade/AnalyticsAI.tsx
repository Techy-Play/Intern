'use client';

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

export default function AnalyticsAI() {
  return (
    <section className="relative overflow-hidden bg-white text-black pt-0 pb-0">
      <div className="spade-container">
        <div className="relative w-full max-md:-mx-5 max-md:w-[calc(100%+2.5rem)] bg-forest text-white" style={{ overflow: 'hidden' }}>
          <CutCorners size={17} />

          {/* BG pattern */}
          <div className="absolute inset-0 opacity-60" style={{
            backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(197,232,77,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(197,232,77,0.05) 0%, transparent 40%)',
            backgroundSize: '100% 100%'
          }} />

          <div className="relative z-[1] flex flex-col gap-6 px-5 py-10 sm:p-8 md:flex-row md:gap-10 lg:p-10 xl:min-h-[37.1875rem]">
            {/* Left text */}
            <div className="flex w-full flex-col items-start text-left md:w-2/5 max-w-[27.875rem] shrink-0">
              <div className="inline-flex items-center gap-x-3 sm:gap-x-4 mb-4">
                <svg className="size-[26px] sm:size-[30px] shrink-0" viewBox="0 0 30 30" fill="none">
                  <rect width="30" height="30" rx="6" fill="white" fillOpacity="0.12"/>
                  <path d="M10 20V12h3v8h-3zm4-10v10h3V10h-3zm4 4v6h3v-6h-3z" fill="white"/>
                </svg>
                <span className="opacity-80 text-13px-eyebrow-caps">Analytics &amp; AI</span>
              </div>
              <h2 className="text-40px-heading-thin mt-auto text-white">Build intelligence on solid data</h2>
              <div className="mt-3 sm:mt-4 opacity-80">
                <p className="text-16px-body">Provide consistent merchant context across cards, transfers, and third party sources — powering personalized offers, new product features, and better cross-sell opportunities.</p>
              </div>
              <div className="flex items-center gap-x-5 mt-6 sm:mt-7">
                <a href="#" className="inline-block">
                  <div className="group relative inline-flex appearance-none items-center py-2.5 select-none transition-[color] justify-center text-white hover:text-black min-h-[2.6875rem] px-[1.125rem]">
                    <span className="absolute inset-0 rounded-md transition-all group-hover:scale-[0.98] origin-center bg-transparent border border-white/15 group-hover:bg-white group-hover:border-white"></span>
                    <span className="text-15px-btn relative z-10">Learn more</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right animation placeholder */}
            <div className="flex items-center justify-center md:flex-1 md:self-center md:px-4 lg:px-6">
              <div className="relative flex w-full max-w-[39rem] bg-white/5 rounded-lg" style={{ aspectRatio: '612/492', width: '100%', height: 'auto' }}>
                <div className="absolute inset-0 size-full rounded-lg" style={{
                  backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(197,232,77,0.06) 0%, transparent 60%)'
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
