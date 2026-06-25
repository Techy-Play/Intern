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

export default function IndustrySection() {
  return (
    <section className="relative overflow-x-clip overflow-visible bg-white text-black pt-0 pb-0">
      <div className="spade-container">
        <div className="pt-20 pb-16 sm:py-20 lg:py-28">
          <div className="relative flex flex-col items-center justify-center">
            <h2 className="text-48px-heading mx-auto w-full max-w-[27rem] text-center">
              Built for every layer of modern finance
            </h2>

            {/* Video placeholder (desktop) */}
            <div className="relative z-[100] mx-auto aspect-[340/360] w-full max-w-[21.25rem] max-lg:hidden mt-8">
              <div className="size-full rounded-lg bg-sage-1" style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(24,40,14,0.06) 0%, transparent 60%)'
              }} />
            </div>

            {/* Industry cards */}
            <div className="mt-14 flex flex-col gap-8 w-full max-w-3xl mx-auto">
              {industries.map((ind, i) => (
                <a key={i} href={ind.href} className="block">
                  <div className="relative border border-sage-3 flex flex-col items-center gap-3 px-6 pt-5 pb-7">
                    {/* Cut corners */}
                    <div className="pointer-events-none absolute inset-0 z-[2]">
                      <div className="absolute -top-px -left-px bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)', width: '12px', height: '12px' }} />
                      <div className="absolute -top-px -right-px bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)', width: '12px', height: '12px' }} />
                      <div className="absolute -bottom-px -left-px bg-white" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)', width: '12px', height: '12px' }} />
                      <div className="absolute -right-px -bottom-px bg-white" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)', width: '12px', height: '12px' }} />
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <span className="text-11px-eyebrow-caps mb-3 opacity-80">[{ind.label}]</span>
                      <h3 className="text-20px-heading mb-0.5">{ind.title}</h3>
                      <p className="text-16px-body opacity-80 max-sm:text-balance">{ind.desc}</p>
                      <div className="text-15px-btn flex items-center gap-x-1.5 mt-3.5">
                        <span className="relative mt-0.5 inline-block h-[5px] w-[7px] shrink-0">
                          <ArrowSvg />
                        </span>
                        <span>Learn more</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
