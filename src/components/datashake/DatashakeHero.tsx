"use client";
import React, { useEffect, useRef } from 'react';
import Script from 'next/script';
import '@/app/datashake/datashake.css';



export default function DatashakeHero() {
  const rotateTrackRef = useRef<HTMLDivElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;
    let tl: any;

    const initGsap = () => {
      if (!(window as any).gsap) {
        setTimeout(initGsap, 200);
        return;
      }
      const gsap = (window as any).gsap;

      if (!rotateTrackRef.current) return;
      const track = rotateTrackRef.current;
      
      // Select only the original items
      const originalItems = Array.from(track.querySelectorAll('.rotate-item:not(.cloned-item)')) as HTMLElement[];
      if (originalItems.length === 0) return;

      function getItemHeight() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let isLandscape = width > height;
        if (width <= 480) { 
          return 36; 
        } else if (width <= 768) {
          return isLandscape ? 38 : 48;
        } else {
          return 53; 
        }
      }

      let itemHeight = getItemHeight();

      function createAnimation() {
        if (tl) tl.kill();
        gsap.set(track, { y: 0 });

        // Remove old clones to prevent infinite duplication
        track.querySelectorAll('.cloned-item').forEach(el => el.remove());

        // Re-clone items dynamically
        originalItems.forEach((item) => {
          const clone = item.cloneNode(true) as HTMLElement;
          clone.classList.add('cloned-item');
          track.appendChild(clone);
        });

        tl = gsap.timeline({ repeat: -1 });

        originalItems.forEach((_, index) => {
          tl.to(track, { 
            y: -(index + 1) * itemHeight,
            duration: 1,
            ease: "expo.inOut",
            delay: 1
          });
        });

        // Instant reset (seamless loop)
        tl.set(track, { y: 0 });
      }

      createAnimation();

      window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          let newHeight = getItemHeight();
          if (newHeight !== itemHeight) {
            itemHeight = newHeight;
            createAnimation();
          }
        }, 250);
      });
    };

    initGsap();

    return () => {
      if (tl) tl.kill();
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <>
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" strategy="lazyOnload" />
      
      <div className="hero-section bottom-border">
        <div className="padding-global">
          <div className="container-large side-border">
            <div className="spacer-medium"></div>
            
            <div className="grid-2col">
              <div className="text-wrapper padding-3rem">
                <div className="flex-v gap-full min-gap-6rem mobile-2rem">
                  <div className="flex-v">
                    <div className="eyebrow-main">
                      <div className="text-size-small text-color-grey">
                        <a href="https://www.datashake.com/resources/social-data-coverage-report-2026" target="_blank" className="blog-link" rel="noreferrer">
                          The Social Data Coverage Report 2026 is here ⚡
                        </a>
                      </div>
                    </div>
                    <div className="rotate-wrapper">
                      <h1 className="heading-style-h1 is-48px">One API. One schema. Cleaned, normalized. Search and filter across</h1>
                      <div className="rotate-absolute" ref={itemsContainerRef}>
                        <div className="rotate-list" ref={rotateTrackRef} style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }}>
                          <div className="rotate-item"><div className="h1-rotate">customer conversations</div></div>
                          <div className="rotate-item"><div className="h1-rotate">social media</div></div>
                          <div className="rotate-item"><div className="h1-rotate">review sites</div></div>
                          <div className="rotate-item"><div className="h1-rotate">app stores</div></div>
                          <div className="rotate-item"><div className="h1-rotate">forums</div></div>
                          <div className="rotate-item"><div className="h1-rotate">e-commerce platforms</div></div>
                          <div className="rotate-item"><div className="h1-rotate">ratings directories</div></div>
                          <div className="rotate-item"><div className="h1-rotate">150+ sources</div></div>
                          {/* The GSAP script dynamically creates cloned-items so it works robustly */}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-v gap-2rem">
                    <div className="text-wrapper size-450px">
                      <div className="text-size-large text-color-grey">
                        Replace multiple vendors with one partner you can trust for comprehensive, fast and scalable data from 150+ sources.
                      </div>
                    </div>
                    <div className="button-group">
                      <a data-wf--button-arrow--variant="base" href="/demo" className="button w-inline-block">
                        <div>Book a demo</div>
                        <div className="icon-32px w-embed">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 8H8.5V18.5H22.4395L19.1895 15.25L20.25 14.1895L25.3105 19.25L20.25 24.3105L19.1895 23.25L22.4395 20H7V8Z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </a>
                      <a data-wf--button-outline--variant="base" href="/platform" className="button is-secondary w-inline-block">
                        <div className="text-block-2">Explore the platform</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="image-wrapper border-left z-index-1">
                <div className="lottie-wrapper">
                  {/* Instead of relying on Webflow's broken interaction engine, we use lottie-player directly */}
                  {React.createElement("lottie-player", {
                    src: "/datashake-assets/696a8c18bb5e32c024ab3933_970 01 BGa2.json",
                    background: "transparent",
                    speed: "1",
                    style: { width: '100%', height: '100%' },
                    loop: true,
                    autoplay: true
                  })}
                </div>
                <img 
                  src="/datashake-assets/6938803c45536fc95cbcf5fb_Hero-Image.webp" 
                  loading="lazy" 
                  sizes="(max-width: 1390px) 100vw, 1390px" 
                  srcSet="/datashake-assets/6938803c45536fc95cbcf5fb_Hero-Image-p-500.webp 500w, /datashake-assets/6938803c45536fc95cbcf5fb_Hero-Image-p-800.webp 800w, /datashake-assets/6938803c45536fc95cbcf5fb_Hero-Image-p-1080.webp 1080w, /datashake-assets/6938803c45536fc95cbcf5fb_Hero-Image.webp 1390w" 
                  alt="User reviews and social media post excerpts" 
                  className="image-lottie" 
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
