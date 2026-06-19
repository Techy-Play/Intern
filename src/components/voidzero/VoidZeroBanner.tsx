'use client';

import React, { useState } from 'react';

export function VoidZeroBanner({ showBanner, setShowBanner }: { showBanner: boolean; setShowBanner: (val: boolean) => void }) {
  if (!showBanner) return null;

  return (
    <div className="top-banner hidden md:block relative w-full overflow-hidden lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-60 bg-[#08060d]" data-theme="dark">
      <a href="https://voidzero.dev/posts/voidzero-cloudflare" target="_blank" rel="noopener noreferrer" className="group block relative w-full no-underline text-white">
        {/* Banner background image */}
        <img src="/assets/footer.C-44yuQw.jpg" alt="" aria-hidden="true" className="banner-background absolute inset-0 size-full object-cover" loading="eager" />
        <div className="banner-gradient absolute inset-0" aria-hidden="true"></div>
        <div className="banner-shine absolute inset-0" aria-hidden="true"></div>

        <div className="relative z-10 w-full h-10 flex px-4">
          <div className="flex items-center gap-2 w-full max-w-[1440px] mx-auto px-4">
            <img src="/assets/logo-transparent.svg" alt="VoidZero icon" className="size-5 shrink-0 hidden sm:block drop-shadow-md/70" />
            <span className="text-xs translate-y-px font-bold font-mono leading-snug tracking-wide uppercase whitespace-nowrap overflow-hidden text-ellipsis text-white text-shadow-md/50">VoidZero is joining Cloudflare</span>
            <svg className="shrink-0 transition-transform duration-200 group-hover:translate-x-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="20" height="20" rx="4" fill="#08060D"></rect>
              <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" stroke="white" strokeOpacity="0.15"></rect>
              <path d="M10 6L14 10L10 14" stroke="white" strokeWidth="1.2" strokeLinejoin="round"></path>
              <path d="M14 10L6 10" stroke="white" strokeWidth="1.2" strokeLinejoin="round"></path>
            </svg>
          </div>
        </div>
      </a>

      <button
        onClick={() => setShowBanner(false)}
        aria-label="Close banner"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 text-white hover:opacity-70 transition-opacity"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" className="iconify iconify--lucide size-5 cursor-pointer">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6L6 18M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  );
}
