'use client';

export default function RewardsSection() {
  return (
    <section className="relative overflow-hidden bg-white text-black pt-20 md:pt-28 lg:pt-40 pb-16 md:pb-24 lg:pb-36">
      <div className="spade-container space-y-18 lg:space-y-24">
        <div className="flex w-full flex-col items-center text-center">
          <div className="text-card flex flex-col items-center text-center" style={{ maxWidth: '31.125rem' }}>
            <div className="inline-flex items-center gap-x-3 sm:gap-x-4 mb-4">
              <picture className="block size-6.5 shrink-0 sm:size-7.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Heart Icon" loading="lazy" width="30" height="30" className="size-full opacity-100" src="https://spadewp.wpenginepowered.com/wp-content/uploads/2025/12/heart-icon.svg" />
              </picture>
              <span className="opacity-80 text-13px-eyebrow-caps">Rewards &amp; Attribution</span>
            </div>
            <h2 className="w-full text-40px-heading" style={{ maxWidth: '100%' }}>
              Connect every purchase to the right reward
            </h2>
            <div className="prose w-full opacity-80 mt-3 sm:mt-4" style={{ maxWidth: '100%' }}>
              <p>Give marketing teams true merchant and location-level clarity, enabling targeted, meaningful programs without messy data or guesswork.</p>
            </div>
            <div className="flex items-center gap-x-5 mt-6 sm:mt-7">
              <a className="inline-block" href="/use-case/rewards-and-attribution/">
                <div className="group relative inline-flex appearance-none items-center py-2.5 select-none transition-[color] justify-center text-black min-h-[2.6875rem] px-4.5">
                  <span className="absolute inset-0 rounded-md transition-all duration-300 group-hover:scale-[0.98] origin-center bg-white border border-black/15 group-hover:bg-lemongrass group-hover:border-lemongrass"></span>
                  <span className="text-15px-btn relative z-10">Learn more</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full" style={{ maxWidth: '63rem' }}>
          <div className="relative flex" style={{ aspectRatio: '1067 / 407', width: '100%', height: 'auto' }}>
            <div className="absolute inset-0 size-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/media/download (2).png" 
                alt="Rewards placeholder" 
                className="size-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
