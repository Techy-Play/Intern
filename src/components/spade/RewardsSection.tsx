'use client';

export default function RewardsSection() {
  return (
    <section className="relative overflow-hidden bg-white text-black pt-20 md:pt-28 lg:pt-40 pb-16 md:pb-24 lg:pb-36">
      <div className="spade-container">
        <div className="flex w-full flex-col items-center text-center">
          <div className="flex flex-col items-center text-center" style={{ maxWidth: '31.125rem' }}>
            <div className="inline-flex items-center gap-x-3 sm:gap-x-4 mb-4">
              <svg className="size-[26px] sm:size-[30px] shrink-0" viewBox="0 0 30 30" fill="none">
                <rect width="30" height="30" rx="6" fill="#18280E" fillOpacity="0.08"/>
                <path d="M15 10l1.45 4.47H21l-3.68 2.67 1.41 4.33L15 18.82l-3.73 2.65 1.41-4.33L9 14.47h4.55L15 10z" fill="#18280E"/>
              </svg>
              <span className="opacity-80 text-13px-eyebrow-caps">Rewards &amp; Attribution</span>
            </div>
            <h2 className="w-full text-40px-heading" style={{ maxWidth: '100%' }}>
              Connect every purchase to the right reward
            </h2>
            <div className="w-full opacity-80 mt-3 sm:mt-4" style={{ maxWidth: '100%' }}>
              <p className="text-16px-body">Give marketing teams true merchant and location-level clarity, enabling targeted, meaningful programs without messy data or guesswork.</p>
            </div>
            <div className="flex items-center gap-x-5 mt-6 sm:mt-7">
              <a href="#" className="inline-block">
                <div className="group relative inline-flex appearance-none items-center py-2.5 select-none transition-[color] justify-center text-black min-h-[2.6875rem] px-[1.125rem]">
                  <span className="absolute inset-0 rounded-md transition-all group-hover:scale-[0.98] origin-center bg-white border border-black/15 group-hover:bg-lemongrass group-hover:border-lemongrass"></span>
                  <span className="text-15px-btn relative z-10">Learn more</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Animation placeholder */}
        <div className="mx-auto w-full mt-12" style={{ maxWidth: '63rem' }}>
          <div className="relative flex bg-sage-1 rounded-lg" style={{ aspectRatio: '1067/407', width: '100%', height: 'auto' }}>
            <div className="absolute inset-0 size-full rounded-lg" style={{
              backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(197,232,77,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(24,40,14,0.04) 0%, transparent 50%)'
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
