'use client';

function ArrowSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 16" fill="none">
      <path d="M2.0326 15.6442L5.93597e-07 13.5799L9.02336e-08 2.0643L2.0326 -8.88478e-08L21.48 7.27606L21.48 8.36816L2.0326 15.6442Z" fill="currentColor"/>
    </svg>
  );
}

export default function DeveloperSection() {
  return (
    <section className="relative overflow-hidden bg-white text-black pt-20 md:pt-28 lg:pt-40 pb-20 md:pb-28 lg:pb-40">
      <div className="spade-container">
        <div className="flex flex-col-reverse justify-between gap-9 md:gap-8 lg:gap-10 items-center md:flex-row">
          {/* Left text */}
          <div className="w-full shrink-0 md:w-1/2 md:max-w-md">
            <div className="flex w-full flex-col items-start text-left">
              <div className="inline-flex items-center gap-x-3 sm:gap-x-4 mb-3.5">
                <span className="opacity-80 text-11px-eyebrow-caps">[Developers]</span>
              </div>
              <p className="text-28px-heading">
                Integrate Spade&apos;s API in minutes. No complex setup, no custom configuration — just high-performance enrichment that scales automatically.
              </p>
              <div className="flex items-center gap-x-5 mt-6 sm:mt-8">
                <a href="#" className="inline-block">
                  <div className="text-15px-btn flex items-center gap-x-1.5">
                    <span className="relative mt-0.5 inline-block h-[5px] w-[7px] shrink-0"><ArrowSvg /></span>
                    <span>Explore our docs</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right docs image */}
          <div className="relative w-full flex-1 md:max-w-[47.5rem]">
            <div className="relative w-full shrink-0" style={{ aspectRatio: '785/484' }}>
              <div className="relative size-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Docs Layer 1"
                  loading="lazy"
                  className="absolute inset-0 size-full object-contain"
                  src="https://spadewp.wpenginepowered.com/wp-content/uploads/2026/01/docs-layer-1.svg"
                />
                <picture className="absolute inset-0 block size-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="API Docs integration snippet and compliance"
                    loading="lazy"
                    className="size-full object-contain"
                    src="/media/docs-layer-2.avif"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
