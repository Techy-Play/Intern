"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function CTAButton() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    const videoEl = document.getElementById("video-section");
    if (!videoEl) return;
    const rect = videoEl.getBoundingClientRect();

    // When the bottom of the video section approaches the bottom of the screen,
    // it means the hero section is ending and the next section is entering.
    if (rect.bottom < window.innerHeight + 50) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  return (
    <motion.button
      initial={{ y: 0, x: "-50%" }}
      animate={{ y: isHidden ? 150 : 0, x: "-50%" }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-1/2 bottom-[4%] sm:bottom-[5%] flex w-[92%] max-w-[340px] sm:max-w-none sm:w-max items-center justify-between sm:justify-center rounded-[2rem] sm:rounded-full bg-[#f3dd1d] py-[16px] px-4 sm:py-[20px] sm:px-12 text-[0.7rem] sm:text-[0.95rem] font-medium leading-[1.2] tracking-[-0.03em] shadow-[0_16px_36px_rgba(0,0,0,0.15)] z-50 transition-transform hover:scale-105 active:scale-95 gap-2 sm:gap-8 cursor-pointer"
    >
      <span className="text-[#1e1e1e] font-normal tracking-wide whitespace-nowrap">
        Join the Founding Family
      </span>
      <span className="flex items-center justify-center text-[#1e1e1e]/60 font-normal tracking-wide whitespace-nowrap">
        Apply to the beta
        <motion.span 
          animate={{ opacity: [1, 0.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:inline-block ml-2 h-2 w-2 rounded-full bg-black/60" 
        />
      </span>
    </motion.button>
  );
}
