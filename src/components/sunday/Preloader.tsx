"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the entire page (images, videos, fonts) to finish loading
    const handleLoad = () => {
      // Slight delay so the transition is smooth and not just an instant flash
      setTimeout(() => setIsLoading(false), 800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f8f7f3]"
        >
          {/* Pulsing Sunday.ai logo */}
          <motion.div
            animate={{ 
              rotate: [0, 90, 90, 180, 180, 270, 270, 360, 360],
              scale: [1, 1.1, 1], 
              opacity: [0.6, 1, 0.6] 
            }}
            transition={{ 
              rotate: {
                duration: 2, 
                repeat: Infinity, 
                times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
                ease: "easeInOut"
              },
              scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <svg width="41" height="40" viewBox="0 0 41 40" fill="#1b1b1b" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.55566 0.0754395C12.3521 -0.246563 14.9502 0.48279 17.0459 1.94165C19.1415 3.40047 21.8783 3.38721 23.9541 1.94165C26.0299 0.495963 28.648 -0.246492 31.4443 0.0754395C36.3364 0.640582 40.2962 4.53727 40.9111 9.38696C41.4797 13.8753 39.2585 17.8908 35.748 20.0002H35.7422C39.2522 22.1097 41.4736 26.1246 40.9053 30.6125C40.2905 35.4687 36.3238 39.3663 31.4385 39.925C28.6422 40.247 26.0438 39.5175 23.9482 38.0588C21.8526 36.6 19.1149 36.6131 17.0391 38.0588C14.9633 39.5044 12.3451 40.247 9.54883 39.925C4.66349 39.3598 0.703671 35.4622 0.0888672 30.6125C-0.472836 26.1245 1.74177 22.1096 5.25195 20.0002C1.74155 17.8908 -0.479673 13.8753 0.0888672 9.38696C0.703727 4.5373 4.67029 0.640643 9.55566 0.0754395ZM20.4277 9.27954C14.4784 9.27975 9.65527 14.0799 9.65527 20.0002C9.65542 25.9205 14.4785 30.7198 20.4277 30.72C26.3771 30.72 31.2 25.9206 31.2002 20.0002C31.2002 14.0798 26.3772 9.27954 20.4277 9.27954Z"></path>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
