"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { menuItems } from "../../data/menu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Purely direction-based logic, no magnitude thresholds
    if (latest > previous && latest > 0) {
      setIsHidden(true); // Scroll Down
    } else if (latest < previous) {
      setIsHidden(false); // Scroll Up
    }
  });

  return (
    <>
      {/* Dimmed backdrop when menu is open */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.header
        initial={{ y: -150 }}
        animate={{ y: isHidden && !isMenuOpen ? -150 : 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 right-0 left-0 z-[100] mx-auto p-4 md:p-6 flex justify-center"
      >
        <motion.div
          ref={menuRef}
          initial={false}
          animate={{
            width: isMenuOpen ? (
              windowWidth === 0 ? "631px" :

                windowWidth >= 1280 ? "50vw" :
                  windowWidth >= 1164 ? "850px" :
                    windowWidth >= 960 ? "750px" :
                      windowWidth >= 731 ? "600px" :
                        "calc(100vw - 2rem)"
            ) : (
              windowWidth === 0 ? "330px" :
                windowWidth >= 960 ? "330px" :
                  windowWidth >= 731 ? "600px" :
                    "calc(100vw - 2rem)"
            ),
            borderRadius: "10px"
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden border border-black/10 bg-white text-black shadow-sm max-w-[100vw]"
        >
          {/* Top Bar (Always visible) */}
          <div className="flex h-[60px] w-full items-center justify-between">
            <Link aria-label="Home" href="/sunday" onClick={() => setIsMenuOpen(false)} className="flex h-[60px] w-[60px] items-center justify-center relative group">
              <motion.svg
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                whileHover={{ rotate: isMenuOpen ? 270 : 180 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                width="41" height="40" viewBox="0 0 41 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="p-2 absolute"
              >
                <path d="M9.55566 0.0754395C12.3521 -0.246563 14.9502 0.48279 17.0459 1.94165C19.1415 3.40047 21.8783 3.38721 23.9541 1.94165C26.0299 0.495963 28.648 -0.246492 31.4443 0.0754395C36.3364 0.640582 40.2962 4.53727 40.9111 9.38696C41.4797 13.8753 39.2585 17.8908 35.748 20.0002H35.7422C39.2522 22.1097 41.4736 26.1246 40.9053 30.6125C40.2905 35.4687 36.3238 39.3663 31.4385 39.925C28.6422 40.247 26.0438 39.5175 23.9482 38.0588C21.8526 36.6 19.1149 36.6131 17.0391 38.0588C14.9633 39.5044 12.3451 40.247 9.54883 39.925C4.66349 39.3598 0.703671 35.4622 0.0888672 30.6125C-0.472836 26.1245 1.74177 22.1096 5.25195 20.0002C1.74155 17.8908 -0.479673 13.8753 0.0888672 9.38696C0.703727 4.5373 4.67029 0.640643 9.55566 0.0754395ZM20.4277 9.27954C14.4784 9.27975 9.65527 14.0799 9.65527 20.0002C9.65542 25.9205 14.4785 30.7198 20.4277 30.72C26.3771 30.72 31.2 25.9206 31.2002 20.0002C31.2002 14.0798 26.3772 9.27954 20.4277 9.27954Z"></path>
              </motion.svg>
            </Link>

            <Link className="flex h-[60px] items-center px-4" aria-label="Home" href="/sunday" onClick={() => setIsMenuOpen(false)}>
              <svg width="982" height="145" viewBox="0 0 982 145" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-[14px] w-auto">
                <path d="M888.8 142.4H922.2V90L981.2 2.4H943.2L906.4 57.8H906.2L869.4 2.4H829.8L888.8 90.2V142.4ZM769.8 82C769.8 101.4 756.8 116 735.6 116C712.6 116 698.4 98.8 698.4 72.4C698.4 46 712.6 28.8 735.6 28.8C756.8 28.8 769.8 43.4 769.8 62.8V82ZM769.2 124.6H770V142.4H803.4V2.4H770V20.2H769.2C761.8 7.8 746.6 0 727.4 0C689.6 0 663.6 29.4 663.6 72.4C663.6 115.4 689.6 144.8 727.4 144.8C746.6 144.8 761.8 137 769.2 124.6ZM536.8 113.4V31.4H560C584.4 31.4 598.8 43.4 598.8 72.4C598.8 101.4 584.4 113.4 560 113.4H536.8ZM503.2 142.4H560.6C606 142.4 633.6 117.8 633.6 72.2C633.6 26.6 606 2.4 560.6 2.4H503.2V142.4ZM364.6 20.2H363.8V2.4H330.4V142.4H364V64.8C364 41.4 377.8 28.8 397 28.8C416.2 28.8 429.2 41.4 429.2 64.8V142.4H462.8V65.8C462.8 25.8 443 0 407.2 0C387.6 0 372 7.8 364.6 20.2ZM224.6 144.8C265.2 144.8 289.6 119 289.6 79V2.4H256.2V80C256.2 103.4 242.8 115.2 224.4 115.2C206 115.2 193 103.4 193 80V2.4H159.4V79C159.4 119 183.6 144.8 224.6 144.8ZM2.2 127.8C20.2 140 40.4 144.8 61.2 144.8C99.8 144.8 125.8 127.6 125.8 99.2C125.8 70.8 104.4 58.2 78.2 56.8L54.4 55.2C41.6 54.4 33.6 51 33.6 42.2C33.6 32.8 44.2 27.8 62 27.8C79.8 27.8 97.6 33.2 113.4 44.4V12.6C99.4 3.8 80.2 0 62.6 0C24.2 0 0 18.4 0 44.8C0 72.6 20.8 85 46.6 86.6L70.4 88.4C83.4 89.2 92.2 92.8 92.2 101.8C92.2 112 80.2 117 62.6 117C39.4 117 18 107.2 2.2 95V127.8Z"></path>
              </svg>
            </Link>

            <button className="group relative h-[60px] w-[60px] cursor-pointer" aria-label="Toggle menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="absolute inset-0 m-2 flex items-center justify-center rounded-lg transition-colors duration-200"></div>
              {/* Hamburger lines that animate to 'X' */}
              <span className="absolute h-[2px] w-[20px] rounded-full bg-black transition-all duration-300" style={{ left: '50%', top: isMenuOpen ? '50%' : '45%', transform: `translateX(-50%) translateY(-50%) ${isMenuOpen ? 'rotate(45deg)' : 'rotate(0deg)'}` }}></span>
              <span className="absolute h-[2px] w-[20px] rounded-full bg-black transition-all duration-300" style={{ left: '50%', bottom: isMenuOpen ? '50%' : '45%', transform: `translateX(-50%) translateY(50%) ${isMenuOpen ? 'rotate(-45deg)' : 'rotate(0deg)'}` }}></span>
            </button>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="flex flex-col px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                  <div className="mt-2 sm:mt-6 grid gap-6 sm:gap-8 grid-cols-1 min-[960px]:grid-cols-2">
                    <nav className="flex flex-col gap-2.5 sm:gap-2 text-[1.4rem] sm:text-[1.15rem] font-[500] text-[#1a1a1a] group">
                      {menuItems.map((item) => (
                        <div key={item} className="cursor-pointer transition-colors duration-300 w-max group-hover:text-black/30 hover:!text-[#1a1a1a]" onClick={() => setIsMenuOpen(false)}>
                          {item}
                        </div>
                      ))}
                    </nav>

                    <div className="relative aspect-[16/10] sm:aspect-video w-full overflow-hidden rounded-[1rem] bg-gray-100">
                      <img
                        src="https://image.mux.com/xLLkokRSG7wrmPVmYfSE3Hz2TwlKI83Ohf8vHejgI4o/thumbnail.webp?time=0"
                        alt="Our story"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md border border-transparent hover:bg-white hover:text-black hover:border-black/10 transition-colors px-4 py-2 sm:px-3 sm:py-1.5 text-[0.95rem] sm:text-sm font-medium text-white shadow-sm">
                          <div className="flex h-6 w-6 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-white text-black transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-[1px] sm:w-[10px] sm:h-[10px] sm:translate-x-[0.5px]">
                              <polygon points="6 3 20 12 6 21 6 3"></polygon>
                            </svg>
                          </div>
                          Our story
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 flex flex-row items-center justify-between gap-2 sm:gap-3 text-[0.75rem] sm:text-[0.8rem] font-normal text-[#888]">
                    <span className="hidden sm:block">The helpful robotics company</span>
                    <span>Launching 2026</span>
                    <span className="flex items-center gap-1.5 sm:gap-2 cursor-pointer hover:text-[#444] transition-colors">
                      Beta Application
                      <motion.span
                        animate={{ opacity: [1, 0.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                        className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#f3dd1d]"
                      />
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.header>
    </>
  );
}
