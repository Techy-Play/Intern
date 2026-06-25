'use client';

const logos = [
  { alt: 'Partner 1', src: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2026/06/wrap-1.svg' },
  { alt: 'Partner 2', src: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2026/06/wrap1.svg' },
  { alt: 'Partner 3', src: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2026/06/wrap2.svg' },
  { alt: 'Partner 4', src: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2026/06/wrap3.svg' },
  { alt: 'Partner 5', src: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2026/06/wrap4.svg' },
  { alt: 'Partner 6', src: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2026/06/wrap5.svg' },
  { alt: 'Partner 7', src: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2026/06/wrap6.svg' },
  { alt: 'Partner 8', src: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2026/06/wrap7.svg' },
  { alt: 'Partner 9', src: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2026/06/wrap8.svg' },
  { alt: 'Partner 10', src: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2026/06/wrap9.svg' },
  { alt: 'Partner 11', src: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2026/06/wrap13.svg' },
  { alt: 'Partner 12', src: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2026/06/wrap12.svg' },
  { alt: 'Partner 13', src: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2026/06/wrap11.svg' },
  { alt: 'Partner 14', src: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2026/06/wrap10.svg' },
];

export default function LogoCloud() {
  return (
    <section className="relative overflow-hidden bg-white text-black pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20">
      <div className="spade-container space-y-18 lg:space-y-24">
        <div className="flex flex-col items-center gap-10">
          <p className="text-14px-eyebrow w-full text-center opacity-80">
            Enriching billions of transactions for category-defining fintechs &amp; Fortune 500 banks every month
          </p>
          <div className="grid w-full grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-7 lg:gap-6">
            {logos.map((logo, i) => (
              <div key={i} className="relative flex h-[66px] flex-col items-center">
                <div className="flex h-7 w-full max-w-[136px] items-center justify-center lg:h-10 lg:w-[136px]">
                  <picture className="block max-h-full max-w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={logo.alt}
                      loading="lazy"
                      width={136}
                      height={40}
                      className="size-full object-contain object-center opacity-100"
                      src={logo.src}
                    />
                  </picture>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
