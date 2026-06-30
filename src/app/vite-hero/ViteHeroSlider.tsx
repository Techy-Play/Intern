'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { VoidZeroBorder } from '@/components/voidzero/VoidZeroBorder';

export function ViteHeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [activeSlide, setActiveSlide] = useState(0);

  // Using the same placeholder/featured images as VoidZeroFeaturedResources for now
  const slides = [
    { url: "#", img: "/covers/update-2026-may.jpg", alt: "Slide 1" },
    { url: "#", img: "/covers/voidzero-cloudflare.jpg", alt: "Slide 2" },
    { url: "#", img: "/covers/announcing-rolldown-1-0.jpg", alt: "Slide 3" },
    { url: "#", img: "/covers/update-2026-apr.jpg", alt: "Slide 4" }
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
        .hero-carousel__viewport { overflow: hidden; width: 100%; }
        .hero-carousel__track { display: flex; touch-action: pan-y pinch-zoom; }
        .hero-carousel__slide { 
          flex: 0 0 100%; 
          min-width: 0; 
          display: flex;
          justify-content: center;
          padding: 0 1rem;
        }
        @media (min-width: 768px) {
          .hero-carousel__slide {
            padding: 0 2rem;
          }
        }
      `}</style>
      
      <div className="w-full relative flex flex-col items-center justify-center h-full pt-10">
        <section className="hero-carousel w-full max-w-6xl relative pb-16" dir="ltr" aria-label="Gallery" tabIndex={0}>
          <div className="hero-carousel__viewport cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <ol className="hero-carousel__track">
              {slides.map((slide, index) => (
                <li key={index} className="hero-carousel__slide">
                  <a href={slide.url} className="block w-full rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow relative group outline-1 outline-white/30 border border-white/20" tabIndex={-1}>
                    <img loading="lazy" src={`https://voidzero.dev${slide.img}`} alt={slide.alt} className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                  </a>
                </li>
              ))}
            </ol>
          </div>
          
          {/* Dots placed below the images */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 bg-black/50 backdrop-blur-md px-3 py-2 rounded-full border border-white/10">
            <ol className="flex justify-center gap-3">
              {slides.map((_, index) => (
                <li key={index}>
                  <button
                    type="button"
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeSlide === index ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/80'}`}
                    aria-label={`Navigate to slide ${index + 1}`}
                    aria-pressed={activeSlide === index}
                    onClick={() => scrollToSlide(index)}
                  ></button>
                </li>
              ))}
            </ol>
          </div>

          <div className="sr-only" aria-live="polite" aria-atomic="true">
            Item {activeSlide + 1} of {slides.length}
          </div>
        </section>
      </div>
    </>
  );
}
