"use client";

import { motion } from "framer-motion";
import HeroVideo from "./HeroVideo";

export default function VideoSection() {
  return (
    <motion.div 
      id="video-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative h-[100vh] w-full overflow-hidden rounded-t-[10px]"
    >
      <HeroVideo />
    </motion.div>
  );
}
