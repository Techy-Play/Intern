'use client';

import React, { useState, useRef, useEffect } from 'react';

/* ─── Design tokens (exact VoidZero CSS values) ─────────────────────────────── */
const STROKE = '#e5e4e7';
const PRIMARY = '#08060D';
const GREY = '#867e8e';
const NICKEL = '#3b3440';
const F4 = '#F4F3EC';

type MenuState = 'closed' | 'open' | 'closing';

const PROJECTS = [
  { title: 'Vite+', desc: 'The unified JavaScript toolchain built on top of Vite.', icon: 'https://voidzero.dev/assets/viteplus-light.CYpc0gnV.svg', href: 'https://viteplus.dev' },
  { title: 'Vite', desc: 'A blazing fast frontend build tool powering next-gen web apps.', icon: 'https://voidzero.dev/assets/vite-light.MG8M2jAW.svg', href: 'https://vite.dev' },
  { title: 'Vitest', desc: "A Vite-native testing framework. It's fast!", icon: 'https://voidzero.dev/assets/vitest-light.BeSPX0d3.svg', href: 'https://vitest.dev' },
  { title: 'Rolldown', desc: 'A Rust-based bundler for Javascript with Rollup-compatible API', icon: 'https://voidzero.dev/assets/rolldown-light.Su7w3UUn.svg', href: 'https://rolldown.rs/' },
  { title: 'Oxc', desc: 'A collection of JavaScript tools written in Rust', icon: 'https://voidzero.dev/assets/oxc-light.BlLWBvd-.svg', href: 'https://oxc.rs/' },
];

export function VoidZeroNavbar() {
  const [menu, setMenu] = useState<MenuState>('closed');
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ossOpen, setOssOpen] = useState(false);

  const clearAll = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const openMenu = () => { clearAll(); setMenu('open'); };
  const beginClose = () => {
    clearAll();
    hoverTimer.current = setTimeout(() => {
      setMenu('closing');
      closeTimer.current = setTimeout(() => setMenu('closed'), 230);
    }, 90);
  };

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = '0px';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [mobileOpen]);

  useEffect(() => () => clearAll(), []);

  const closeMobile = () => { setMobileOpen(false); setOssOpen(false); };

  return (
    <>
      {/* ══ DESKTOP HEADER ══ */}
      <div className="relative z-50 bg-white">
        <header className="vz-wrapper flex items-center justify-between px-5 lg:px-6 py-5 lg:py-7" style={{ borderBottom: menu !== 'closed' ? `1px solid ${STROKE}` : 'none' }}>
          <div className="flex items-center gap-10">
            <a href="/" aria-label="VoidZero" className="shrink-0 flex items-center">
              <LogoSVG fill={PRIMARY} />
            </a>
            <nav className="hidden md:block" aria-label="Main navigation">
              <ul className="flex items-center m-0 p-0 list-none">
                <li className="relative" onMouseEnter={openMenu} onMouseLeave={beginClose}>
                  <a href="#" className="vz-nav-link px-5" aria-haspopup="true" aria-expanded={menu === 'open'}>
                    Open Source
                    <svg className={`ml-1 shrink-0 size-[11px] transition-transform duration-200 ${menu === 'open' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 7" fill="currentColor" aria-hidden="true">
                      <path d="M1.41 0L6 4.58 10.59 0 12 1.42l-6 6-6-6z" />
                    </svg>
                  </a>
                </li>
                <li><a href="/blog" className="vz-nav-link px-5">Blog</a></li>
                <li><a href="/about" className="vz-nav-link px-5">About</a></li>
                <li>
                  <a href="https://void.cloud/" target="_blank" rel="noopener noreferrer" className="vz-nav-link px-5">
                    Void
                    <svg className="ml-1 shrink-0 size-[11px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2.81802 2.81803L9.18198 2.81803L9.18198 9.18199" stroke={PRIMARY} strokeWidth="1.5" />
                      <path d="M9.18213 2.81802L2.81817 9.18198" stroke={PRIMARY} strokeWidth="1.5" />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-1">
              <a href="https://github.com/voidzero-dev" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="flex size-8 items-center justify-center transition-opacity opacity-50 hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 24 24" className="size-[18px]"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
              </a>
              <a href="https://x.com/voidzerodev" aria-label="X" target="_blank" rel="noopener noreferrer" className="flex size-8 items-center justify-center transition-opacity opacity-50 hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 24 24" className="size-[18px]"><path fill="currentColor" d="M14.234 10.162L22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299l-.929-1.329L3.076 1.56h3.182l5.965 8.532l.929 1.329l7.754 11.09h-3.182z"></path></svg>
              </a>
              <a href="https://discord.gg/cC6TEVFKSx" aria-label="Discord" target="_blank" rel="noopener noreferrer" className="flex size-8 items-center justify-center transition-opacity opacity-50 hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 24 24" className="size-[18px]"><path fill="currentColor" d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0a13 13 0 0 0-.617-1.25a.08.08 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.1.1 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.08.08 0 0 0 .084-.028a14 14 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13 13 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10 10 0 0 0 .372-.292a.07.07 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .078.01q.181.149.373.292a.077.077 0 0 1-.006.127a12.3 12.3 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028a19.8 19.8 0 0 0 6.002-3.03a.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418"></path></svg>
              </a>
              <a href="https://bsky.app/profile/voidzero.dev" aria-label="Bluesky" target="_blank" rel="noopener noreferrer" className="flex size-8 items-center justify-center transition-opacity opacity-50 hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 24 24" className="size-[18px]"><path fill="currentColor" d="M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037c-.856 3.061-3.978 3.842-6.755 3.37c4.854.826 6.089 3.562 3.422 6.299c-5.065 5.196-7.28-1.304-7.847-2.97c-.104-.305-.152-.448-.153-.327c0-.121-.05.022-.153.327c-.568 1.666-2.782 8.166-7.847 2.97c-2.667-2.737-1.432-5.473 3.422-6.3c-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026"></path></svg>
              </a>
            </div>
            <button aria-expanded={mobileOpen} aria-controls="mobile-menu" aria-label="Toggle navigation menu" className="md:hidden p-2 -mr-2 text-primary hover:opacity-70 transition-opacity cursor-pointer" type="button" onClick={() => setMobileOpen(true)}>
              <svg className="size-6" viewBox="0 0 18 8" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M0 0.75H18" stroke="currentColor" strokeWidth="1.5" />
                <path d="M0 6.75H18" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </header>

        {/* ── Desktop mega-menu ── */}
        {menu !== 'closed' && (
          <div className="absolute top-full left-0 right-0 z-[999]" onMouseEnter={openMenu} onMouseLeave={beginClose}>
            <div className={`vz-wrapper bg-white megamenu-shadow ticks-light ${menu === 'closing' ? 'vz-menu-out' : 'vz-menu-in'}`} style={{ borderBottom: `1px solid ${STROKE}` }}>
              <div className="mx-6 md:mx-28" style={{ borderLeft: `1px solid ${STROKE}`, borderRight: `1px solid ${STROKE}` }}>
                <div className="px-5 h-12 flex items-center" style={{ borderBottom: `1px solid ${STROKE}` }}>
                  <p className="font-mono text-xs font-medium uppercase tracking-widest" style={{ color: GREY }}>Products //</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {PROJECTS.map((p, i) => (
                    <DesktopProjectCard key={p.title} {...p} lastCol={i === 2 || i === 4} />
                  ))}
                  <a href="/posts/whats-new-may-2026" className="group block relative overflow-hidden cursor-pointer" style={{ borderBottom: `1px solid ${STROKE}` }}>
                    <div className="overflow-hidden h-full min-h-[120px] md:min-h-[96px] lg:min-h-[132px] bg-white">
                      <img src="https://voidzero.dev/covers/update-2026-may.jpg" alt="Tales from the Void" className="w-full h-full object-contain transition-transform duration-300 ease-out md:scale-90 lg:scale-100 group-hover:scale-105 md:group-hover:scale-95 lg:group-hover:scale-105" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ══ MOBILE FULL-SCREEN OVERLAY ══ */}
      {mobileOpen && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation menu" className="md:hidden fixed inset-0 z-[1001] flex flex-col" style={{ backgroundColor: '#16171d' }}>
          <section className="vz-wrapper flex-1 flex flex-col h-full animate-fade-in">

            {/* Mobile header */}
            <div className="w-full pl-5 pr-7 py-5 flex items-center justify-between shrink-0">
              <a href="/" onClick={closeMobile} aria-label="VoidZero"><LogoSVG fill="#FFFFFF" /></a>
              <button type="button" aria-label="Close navigation menu" onClick={closeMobile} className="p-2 -mr-2 text-white hover:opacity-70 transition-opacity cursor-pointer">
                <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex flex-col overflow-y-auto" style={{ height: 'calc(100vh - 88px)', scrollbarWidth: 'none' } as React.CSSProperties}>
              <nav className="flex-1 w-full pt-6 pb-8" aria-label="Mobile navigation">
                <ul className="m-0 p-0 list-none space-y-1">

                  {/* Open Source — expandable */}
                  <li>
                    <button type="button" aria-expanded={ossOpen} onClick={() => setOssOpen(v => !v)} className="w-full text-left py-3 px-4 text-lg text-white flex items-center justify-between cursor-pointer bg-transparent border-0 hover:opacity-80 transition-opacity" style={{ fontFamily: 'APK Protocol', fontWeight: 500 }}>
                      <span>Open Source</span>
                      <svg className={`size-4 shrink-0 transition-transform duration-200 ${ossOpen ? 'rotate-180' : ''}`} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M13.8638 0.530325L7.1971 7.19699L0.530438 0.530324" stroke={F4} strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {ossOpen && (
                      <div className="w-full bg-[#14121a]">
                        <div className="px-4 h-12 flex items-center" style={{ borderTop: `1px solid ${NICKEL}` }}>
                          <p className="font-mono text-xs font-medium uppercase tracking-widest" style={{ color: GREY }}>Products //</p>
                        </div>
                        <div className="flex flex-col" style={{ borderBottom: `1px solid ${NICKEL}` }}>
                          {PROJECTS.map(p => (
                            <MobileProjectCard key={p.title} {...p} />
                          ))}
                          <a href="/posts/whats-new-may-2026" className="group block relative overflow-hidden cursor-pointer" style={{ borderTop: `1px solid ${NICKEL}` }}>
                            <div className="overflow-hidden w-full h-[160px] bg-black">
                              <img src="https://voidzero.dev/covers/update-2026-may.jpg" alt="Tales from the Void" className="w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-105" />
                            </div>
                          </a>
                        </div>
                      </div>
                    )}
                  </li>

                  {/* Blog */}
                  <li>
                    <a href="/blog" onClick={closeMobile} className="flex py-3 px-4 text-lg items-center justify-between hover:opacity-80 transition-opacity" style={{ color: '#ffffff', fontFamily: 'APK Protocol', fontWeight: 500 }}>Blog</a>
                  </li>

                  {/* About */}
                  <li>
                    <a href="/about" onClick={closeMobile} className="flex py-3 px-4 text-lg items-center justify-between hover:opacity-80 transition-opacity" style={{ color: '#ffffff', fontFamily: 'APK Protocol', fontWeight: 500 }}>About</a>
                  </li>

                  {/* Void */}
                  <li>
                    <a href="https://void.cloud/" target="_blank" rel="noopener noreferrer" onClick={closeMobile} className="flex py-3 px-4 text-lg items-center justify-between hover:opacity-80 transition-opacity" style={{ color: '#ffffff', fontFamily: 'APK Protocol', fontWeight: 500 }}>
                      Void
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.81802 2.81803L9.18198 2.81803L9.18198 9.18199" stroke="#ffffff" strokeWidth="1.5" />
                        <path d="M9.18213 2.81802L2.81817 9.18198" stroke="#ffffff" strokeWidth="1.5" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Footer social icons */}
              <div className="w-full py-12 mt-auto relative tick-dark-left tick-dark-right" style={{ borderTop: `1px solid ${NICKEL}` }}>
                <div className="space-y-12">
                  <div className="relative tick-dark-left tick-dark-right" style={{ borderTop: `1px solid ${NICKEL}` }} />
                  <div className="flex items-center justify-center gap-4 pb-12">
                    <a href="https://github.com/voidzero-dev" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" className="size-6" style={{ color: '#ffffff' }}><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                    </a>
                    <a href="https://x.com/voidzerodev" aria-label="X" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" className="size-6" style={{ color: '#ffffff' }}><path fill="currentColor" d="M14.234 10.162L22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299l-.929-1.329L3.076 1.56h3.182l5.965 8.532l.929 1.329l7.754 11.09h-3.182z"></path></svg>
                    </a>
                    <a href="https://discord.gg/cC6TEVFKSx" aria-label="Discord" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" className="size-6" style={{ color: '#ffffff' }}><path fill="currentColor" d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0a13 13 0 0 0-.617-1.25a.08.08 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.1.1 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.08.08 0 0 0 .084-.028a14 14 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13 13 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10 10 0 0 0 .372-.292a.07.07 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .078.01q.181.149.373.292a.077.077 0 0 1-.006.127a12.3 12.3 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028a19.8 19.8 0 0 0 6.002-3.03a.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418"></path></svg>
                    </a>
                    <a href="https://bsky.app/profile/voidzero.dev" aria-label="Bluesky" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" className="size-6" style={{ color: '#ffffff' }}><path fill="currentColor" d="M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037c-.856 3.061-3.978 3.842-6.755 3.37c4.854.826 6.089 3.562 3.422 6.299c-5.065 5.196-7.28-1.304-7.847-2.97c-.104-.305-.152-.448-.153-.327c0-.121-.05.022-.153.327c-.568 1.666-2.782 8.166-7.847 2.97c-2.667-2.737-1.432-5.473 3.422-6.3c-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

/* ── Logo SVG (parameterised fill) ── */
function LogoSVG({ fill }: { fill: string }) {
  return (
    <svg className="h-4 w-auto" viewBox="0 0 91 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.3271 0C33.439 2.66469e-05 36.6504 2.56908 36.6504 7.5C36.6503 12.4308 33.4389 15 27.3271 15C21.2156 14.9999 18.0245 12.4307 18.0244 7.5C18.0244 2.56914 21.2155 9.51756e-05 27.3271 0ZM70.0195 0C67.0714 4.22099 67.0541 10.7638 70.0195 15H68.0273C65.0612 10.7638 65.0785 4.22098 68.0273 0H70.0195ZM88.2852 0C91.2333 4.22097 91.2506 10.7638 88.2852 15H86.293C89.2591 10.7638 89.2418 4.22099 86.293 0H88.2852ZM78.1562 0.0205078C82.2875 0.0205671 85.6357 3.36945 85.6357 7.5C85.6357 11.6306 82.2868 14.9794 78.1562 14.9795C74.0257 14.9795 70.6768 11.6306 70.6768 7.5C70.6768 3.36943 74.0257 0.0205323 78.1562 0.0205078ZM9.13672 10.6904L12.9072 0.249023H18.0664L12.3477 14.751H5.71777L0 0.249023H5.30371L9.13672 10.6904ZM43.5293 14.751H38.5566V0.249023H43.5293V14.751ZM55.166 0.249023C60.2005 0.249035 63.0801 2.52763 63.0801 7.5C63.08 12.4722 60.1798 14.7509 55.1455 14.751H46.0498V0.249023H55.166ZM82.7119 4.3584C82.6014 4.11078 82.27 4.06433 82.0986 4.27441L75.6289 12.209C75.4742 12.3996 75.5485 12.6852 75.7764 12.7764C76.4463 13.0443 77.2391 13.1768 78.1562 13.1768C81.5506 13.1767 83.2676 11.3536 83.2676 7.5C83.2676 6.23413 83.0814 5.18989 82.7119 4.3584ZM27.3271 3.56348C24.4475 3.56357 23.1006 4.80673 23.1006 7.5C23.1006 10.1931 24.4476 11.4159 27.3271 11.416C30.2069 11.416 31.5537 10.2139 31.5537 7.5C31.5537 4.78594 30.2069 3.5635 27.3271 3.56348ZM51.0225 11.2295H54.4619C56.8234 11.2294 57.9834 10.2138 57.9834 7.5C57.9834 4.78608 56.8235 3.77064 54.4619 3.77051H51.0225V11.2295ZM78.1562 1.84375C74.7426 1.84377 73.0449 3.66711 73.0449 7.5C73.0449 8.77075 73.2304 9.82088 73.6006 10.6572C73.7106 10.9054 74.0426 10.9515 74.2139 10.7412L80.6719 2.80566C80.8271 2.61506 80.752 2.32972 80.5234 2.23926C79.8556 1.97478 79.0664 1.84376 78.1562 1.84375Z" fill={fill} />
    </svg>
  );
}

/* ── Desktop product card ── */
function DesktopProjectCard({ title, desc, icon, href, lastCol = false }: { title: string; desc: string; icon: string; href: string; lastCol?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group relative block p-5 transition-colors duration-150 hover:bg-[#08060D]" style={{ borderBottom: `1px solid ${STROKE}`, borderRight: lastCol ? 'none' : `1px solid ${STROKE}` }}>
      <svg className="absolute top-5 right-5" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2.81802 2.81803L9.18198 2.81803L9.18198 9.18199" className="stroke-black group-hover:stroke-white transition-colors duration-150" strokeWidth="1.25" strokeLinejoin="round" />
        <path d="M9.18213 2.81802L2.81817 9.18198" className="stroke-black group-hover:stroke-white transition-colors duration-150" strokeWidth="1.25" strokeLinejoin="round" />
      </svg>
      <img src={icon} alt={`${title} logo`} className="mb-6 w-8 h-8 rounded p-1 bg-[#08060D]" />
      <h3 className="font-apk text-lg font-medium mb-1 transition-colors duration-150 group-hover:text-white" style={{ color: PRIMARY }}>{title}</h3>
      <p className="font-apk text-sm text-balance transition-colors duration-150 group-hover:text-gray-300" style={{ color: GREY }}>{desc}</p>
    </a>
  );
}

/* ── Mobile product card (dark theme, single-column) ── */
function MobileProjectCard({ title, desc, icon, href }: { title: string; desc: string; icon: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="relative block px-4 py-6 hover:opacity-80 transition-opacity" style={{ borderTop: `1px solid ${NICKEL}` }}>
      <svg className="absolute top-6 right-4" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2.81802 2.81803L9.18198 2.81803L9.18198 9.18199" stroke={F4} strokeWidth="1.25" strokeLinejoin="round" />
        <path d="M9.18213 2.81802L2.81817 9.18198" stroke={F4} strokeWidth="1.25" strokeLinejoin="round" />
      </svg>
      <img src={icon} alt={`${title} logo`} className="mb-4 w-8 h-8 rounded p-1 bg-[#08060D]" />
      <div className="pr-6">
        <h3 className="text-lg text-white mb-1" style={{ fontFamily: 'APK Protocol', fontWeight: 500 }}>{title}</h3>
        <p className="text-sm text-balance" style={{ fontFamily: 'APK Protocol', color: GREY }}>{desc}</p>
      </div>
    </a>
  );
}

/* ── Desktop social link ── */
function DesktopSocial({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="flex size-8 items-center justify-center transition-colors duration-150" style={{ color: GREY }} onMouseEnter={e => (e.currentTarget.style.color = PRIMARY)} onMouseLeave={e => (e.currentTarget.style.color = GREY)}>
      {children}
    </a>
  );
}

/* ── Mobile social link (white, size-6) ── */
function MobileSocial({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity flex items-center justify-center size-6" style={{ color: '#ffffff' }}>
      {children}
    </a>
  );
}

function GitHubSVG() { return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>; }
function XSVG() { return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14.234 10.162L22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299l-.929-1.329L3.076 1.56h3.182l5.965 8.532l.929 1.329l7.754 11.09h-3.182z" /></svg>; }
function DiscordSVG() { return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0a13 13 0 0 0-.617-1.25a.08.08 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.1.1 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.08.08 0 0 0 .084-.028a14 14 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13 13 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10 10 0 0 0 .372-.292a.07.07 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .078.01q.181.149.373.292a.077.077 0 0 1-.006.127a12.3 12.3 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028a19.8 19.8 0 0 0 6.002-3.03a.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418" /></svg>; }
function BlueskySVG() { return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037c-.856 3.061-3.978 3.842-6.755 3.37c4.854.826 6.089 3.562 3.422 6.299c-5.065 5.196-7.28-1.304-7.847-2.97c-.104-.305-.152-.448-.153-.327c0-.121-.05.022-.153.327c-.568 1.666-2.782 8.166-7.847 2.97c-2.667-2.737-1.432-5.473 3.422-6.3c-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026" /></svg>; }
