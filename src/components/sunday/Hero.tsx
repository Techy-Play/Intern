"use client";

import { motion, useMotionValue, useAnimationFrame, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

export function HeroTextContent({
  className = "",
  colorClass = "text-[#1b1b1b]",
  subtitle1Class = "text-[#555555]",
  subtitle2Class = "text-[#8a8a8a]"
}: {
  className?: string, colorClass?: string, subtitle1Class?: string, subtitle2Class?: string
}) {
  return (
    <div className={`flex w-full flex-col items-center justify-center text-center px-4 ${className}`}>
      <div className="space-y-0.5 text-[0.85rem] leading-tight sm:text-[1rem]" style={{ fontFamily: "var(--font-mono)", fontWeight: 400 }}>
        <p className={subtitle1Class}>The helpful home robot</p>
        <p className={subtitle2Class}>Beta launching late 2026</p>
      </div>
      <h1
        className={`mt-5 sm:mt-5 max-w-[24ch] px-4 mx-auto text-[3rem] font-normal leading-[0.92] tracking-[-0.055em] sm:text-[3rem] md:text-[6rem] lg:text-[6rem] xl:text-[9.5rem] ${colorClass}`}
        style={{ fontFamily: "'Pliant', sans-serif", fontWeight: 400 }}
      >
        S<span style={{ fontFamily: "'Poppins', sans-serif" }}>a</span>y hello to Memo
      </h1>
    </div>
  );
}

export function HeroTextLayerA() {
  const heroRef = useRef<HTMLDivElement>(null);
  const opacity = useMotionValue(1);
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 0) {
      setIsHidden(true);
    } else if (latest < previous) {
      setIsHidden(false);
    }
  });

  useAnimationFrame(() => {
    const videoEl = document.getElementById("video-section");
    if (!heroRef.current || !videoEl) return;

    const heroRect = heroRef.current.getBoundingClientRect();
    const videoRect = videoEl.getBoundingClientRect();

    if (videoRect.top > heroRect.top) {
      opacity.set(1);
    } else {
      opacity.set(0);
    }
  });

  // 140px/160px is the original top, 40px/60px is the hidden top.
  // Note: we can't cleanly use responsive values in `animate={{ top: ... }}` directly,
  // so we'll compute it or just use an average offset. Let's use `y` translation instead of `top` 
  // because `y` does not trigger layout thrashing and keeps sticky behavior intact!
  // Wait, if we use `y`, it moves visually. For a sticky element, translating `y` visually shifts the sticky stopping point!
  return (
    <motion.section
      id="hero-section"
      ref={heroRef}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ opacity }}
      className="sticky top-[140px] sm:top-[160px] z-10 w-full"
    >
      <HeroTextContent />
    </motion.section>
  );
}

export function HeroTextLayerB() {
  const layerRef = useRef<HTMLDivElement>(null);
  const opacity = useMotionValue(1);
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 0) {
      setIsHidden(true);
    } else if (latest < previous) {
      setIsHidden(false);
    }
  });

  useAnimationFrame(() => {
    const videoEl = document.getElementById("video-section");
    if (!layerRef.current || !videoEl) return;

    const layerRect = layerRef.current.getBoundingClientRect();
    const videoRect = videoEl.getBoundingClientRect();

    // Define the remaining video distance below the text
    const distanceToExit = videoRect.bottom - layerRect.bottom;

    // Semantic threshold: We start fading out when 25% of the video height is left.
    const fadeThreshold = videoRect.height * 0.25;

    if (distanceToExit > fadeThreshold || videoRect.top > layerRect.top) {
      opacity.set(1);
    } else if (distanceToExit > 0) {
      const progress = distanceToExit / fadeThreshold;
      opacity.set(progress);
    } else {
      opacity.set(0);
    }
  });

  return (
    <motion.div
      ref={layerRef}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ opacity }}
      className="fixed top-[140px] sm:top-[160px] inset-x-0 w-full pointer-events-none flex flex-col items-center"
    >
      <div className="w-full max-w-[1512px]">
        <HeroTextContent
          colorClass="text-white"
          subtitle1Class="text-white"
        />
      </div>
    </motion.div>
  );
}
