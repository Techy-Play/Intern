import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { VoidZeroBorder } from './VoidZeroBorder';

export function VoidZeroFeaturedResources() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: (viewSize) => viewSize * 0.08, skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { url: "/posts/whats-new-may-2026", img: "/covers/update-2026-may.jpg", alt: "Tales from the Void: May 2026 Recap", tag: "// updates", title: "Tales from the Void: May 2026 Recap" },
    { url: "/posts/voidzero-cloudflare", img: "/covers/voidzero-cloudflare.jpg", alt: "VoidZero is Joining Cloudflare", tag: "// announcements", title: "VoidZero is Joining Cloudflare" },
    { url: "/posts/announcing-rolldown-1-0", img: "/covers/announcing-rolldown-1-0.jpg", alt: "Announcing Rolldown 1.0", tag: "// announcements", title: "Announcing Rolldown 1.0" },
    { url: "/posts/whats-new-apr-2026", img: "/covers/update-2026-apr.jpg", alt: "Tales from the Void: April 2026 Recap", tag: "// updates", title: "Tales from the Void: April 2026 Recap" },
    { url: "/posts/oxc-angular-compiler", img: "/covers/oxc-angular-compiler.jpg", alt: "How we made the Angular Compiler faster using AI", tag: "// ecosystem", title: "How we made the Angular Compiler faster using AI" },
    { url: "/posts/whats-new-mar-2026", img: "/covers/update-2026-mar.jpg", alt: "Tales from the Void: March 2026 Recap", tag: "// updates", title: "Tales from the Void: March 2026 Recap" },
    { url: "/posts/whats-new-march-launch-week-2026", img: "/covers/update-march-launch-week-2026.jpg", alt: "Tales from the Void: March Launch Week Recap", tag: "// updates", title: "Tales from the Void: March Launch Week Recap" },
    { url: "/posts/announcing-vite-plus-alpha", img: "/covers/announcing-vite-plus-alpha.jpg", alt: "Announcing Vite+ Alpha", tag: "// announcements", title: "Announcing Vite+ Alpha" }
  ];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollToSlide = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      const autoplay = emblaApi.plugins().autoplay;
      if (autoplay) autoplay.reset();
    }
  };

  return (
    <>
      <style>{`
        .carousel__viewport { overflow: hidden; }
        .carousel__track { display: flex; touch-action: pan-y pinch-zoom; }
        .carousel__slide { flex: 0 0 auto; min-width: 0; }
        .pointer-events-none-img img { pointer-events: none; }
        
        .marketing-heading {
          font-family: 'APK Protocol', sans-serif;
          font-size: 1.5rem; /* fallback for var(--text-2xl) */
          font-size: var(--text-2xl, 1.5rem);
          line-height: 1.2;
          font-weight: 500;
          letter-spacing: -0.025em; /* fallback for var(--tracking-tight) */
          letter-spacing: var(--tracking-tight, -0.025em);
          text-wrap: pretty;
          color: var(--color-primary, #16171d);
          overflow-wrap: break-word;
          margin: 0;
        }
        @media (min-width: 48rem) {
          .marketing-heading {
            font-size: 2.5rem;
          }
        }
      `}</style>
      <VoidZeroBorder theme="light" containerClassName="grid grid-cols-1 md:grid-cols-10 divide-y md:divide-y-0 md:divide-x divide-stroke h-auto md:h-[32.5rem]" tickSize={7}>
        <div className="flex flex-col md:col-span-4 bg-white">
          <div className="p-5 md:p-10 grow-0 md:grow flex flex-col gap-6 md:gap-10 md:h-72 justify-center md:justify-start">
            <h3 className="marketing-heading">
              Featured resources &amp; updates
            </h3>
            <a href="/blog" className="button w-fit bg-white border border-stroke text-primary rounded-md px-4 py-2 hover:bg-slate-50 transition-colors shadow-sm text-base" style={{ fontFamily: 'APK Protocol', fontWeight: 500 }}>All Resources</a>
          </div>
          <div className="px-6 py-6 md:px-10 pt-16 md:pb-8 flex flex-col gap-4 relative">
            <span className="bg-[#F4F3EC]/40 text-primary text-xs absolute top-3 left-3 p-2 rounded font-mono">js</span>
            <div className="flex flex-col gap-0">
              <div className="text-grey text-xs font-mono">resources</div>
              <div className="text-primary text-xs font-mono"> .filter<span className="text-grey">(i =&gt; i.collection ===</span> "featured"<span className="text-grey">)</span></div>
              <div className="text-primary text-xs font-mono"> .filter<span className="text-grey">(i =&gt; i.postedBy ===</span> "VoidZero"<span className="text-grey">)</span></div>
              <div className="text-primary text-xs font-mono"> .filter<span className="text-grey">(i =&gt; i.articles.length ===</span> 8<span className="text-grey">)</span></div>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-6 md:border-t-0 relative bg-white">
          <section className="carousel is-ltr is-effect-slide resources-carousel py-10 pb-30 md:pb-10 h-full flex flex-col" dir="ltr" aria-label="Gallery" tabIndex={0}>
            <div className="carousel__viewport pointer-events-none-img flex-grow w-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
              <ol className="carousel__track">
                {slides.map((slide, index) => (
                  <li key={index} className="carousel__slide">
                    <a href={slide.url} className="bg-white border border-stroke my-1 ml-5 md:ml-4 rounded w-[80vw] md:w-[25rem] lg:w-[21rem] aspect-square translate-x-[-1px] flex flex-col overflow-hidden hover:border-2 transition-all block" tabIndex={-1}>
                      <div className="w-full aspect-[2/1] overflow-hidden">
                        <img loading="lazy" src={`https://voidzero.dev${slide.img}`} alt={slide.alt} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-5 flex flex-col gap-4">
                        <span className="text-xs text-grey font-mono uppercase tracking-widest">{slide.tag}</span>
                        <h4 className="text-xl text-primary font-sans text-pretty font-normal">{slide.title}</h4>
                      </div>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
            <div className="absolute bottom-16 md:bottom-20 left-0 ml-6 md:ml-10 z-10">
              <ol className="carousel__pagination flex justify-start gap-2">
                {slides.map((_, index) => (
                  <li key={index} className="carousel__pagination-item">
                    <button
                      type="button"
                      className={`carousel__pagination-button w-2 h-2 rounded-full transition-colors ${activeSlide === index ? 'bg-primary' : 'bg-[#e5e4e7] hover:bg-grey'}`}
                      aria-label={`Navigate to slide ${index + 1}`}
                      aria-pressed={activeSlide === index}
                      onClick={() => scrollToSlide(index)}
                    ></button>
                  </li>
                ))}
              </ol>
            </div>

            <div className="carousel__liveregion sr-only" aria-live="polite" aria-atomic="true">
              Item {activeSlide + 1} of {slides.length}
            </div>
          </section>
        </div>
      </VoidZeroBorder>
    </>
  );
}
