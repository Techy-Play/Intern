"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

export default function VideoWrapper({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll();

  // The video starts with a 2.5vw gap. By the time we scroll ~250px (which is roughly the distance for the top of the video to reach the sticky text), the padding becomes 0vw.
  const paddingX = useTransform(scrollY, [0, 250], ["2.5vw", "0vw"]);

  return (
    <motion.div
      style={{ paddingLeft: paddingX, paddingRight: paddingX }}
      className="relative w-full z-20"
    >
      {children}
    </motion.div>
  );
}
