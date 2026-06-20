"use client";

import React, { useEffect, useRef, useState } from 'react';
import { VoidZeroBorder } from './VoidZeroBorder';
import NumberFlow from '@number-flow/react';

function AnimatedCounter({ value, formatOptions, suffix = "" }: { value: number, formatOptions?: any, suffix?: string }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span 
      ref={ref} 
      className="font-apk" 
      style={{ 
        fontFamily: "'APK Protocol', sans-serif", 
        fontWeight: 500, 
        fontVariantNumeric: 'tabular-nums' 
      }}
    >
      <NumberFlow 
        value={inView ? value : 0} 
        format={formatOptions} 
        style={{ fontFamily: "'APK Protocol', sans-serif", fontWeight: 500 }} 
      />
      {suffix}
    </span>
  );
}

const PROJECT_STATS = [
  {
    id: "vite",
    name: "Vite",
    total: 4664021084,
    weekly: { value: 121.4, suffix: "M+", maxFractionDigits: 1 },
    stars: { value: 81.3, suffix: "K+", maxFractionDigits: 1 },
    contributors: { value: 1.3, suffix: "K+", maxFractionDigits: 1 },
    color: "#8c52ff",
    startDate: "April 2020",
    icon: "/assets/vite-dark.CJsR88Md.svg"
  },
  {
    id: "viteplus",
    name: "Vite+",
    total: 4389743,
    weekly: { value: 502.6, suffix: "K+", maxFractionDigits: 1 },
    stars: { value: 4.9, suffix: "K+", maxFractionDigits: 1 },
    contributors: { value: 70, suffix: "+", maxFractionDigits: 0 },
    color: "#4f46e5",
    startDate: "January 2026",
    icon: "/assets/viteplus-dark.vBqu3gSt.svg"
  },
  {
    id: "vitest",
    name: "Vitest",
    total: 2059624775,
    weekly: { value: 59.8, suffix: "M+", maxFractionDigits: 1 },
    stars: { value: 16.7, suffix: "K+", maxFractionDigits: 1 },
    contributors: { value: 764, suffix: "+", maxFractionDigits: 0 },
    color: "#22c55e",
    startDate: "December 2021",
    icon: "/assets/vitest-dark.DLkIIEUp.svg"
  },
  {
    id: "rolldown",
    name: "Rolldown",
    total: 417757827,
    weekly: { value: 35, suffix: "M+", maxFractionDigits: 0 },
    stars: { value: 13.7, suffix: "K+", maxFractionDigits: 1 },
    contributors: { value: 185, suffix: "+", maxFractionDigits: 0 },
    color: "#ef4444",
    startDate: "March 2024",
    icon: "/assets/rolldown-dark.BaXpewsT.svg"
  },
  {
    id: "oxc",
    name: "Oxc",
    total: 113957570,
    weekly: { value: 7.4, suffix: "M+", maxFractionDigits: 1 },
    stars: { value: 21.5, suffix: "K+", maxFractionDigits: 1 },
    contributors: { value: 395, suffix: "+", maxFractionDigits: 0 },
    color: "#06b6d4",
    startDate: "December 2023",
    icon: "/assets/oxc-dark.BJRSsXEd.svg"
  }
];

export function VoidZeroDeveloperStats() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const activeProject = PROJECT_STATS[activeProjectIdx];

  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    let animationId: number;
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const w = canvas.width;
        const h = canvas.height;
        const bottomMargin = 40;
        
        // Generate points for smooth exponential curve with realistic dips
        const points: {x: number, y: number}[] = [];
        for (let i = 0; i <= w; i += 4) {
          const progress = i / w;
          // Steep exponential curve
          let base = Math.pow(progress, 6) * (h - bottomMargin - 20);
          
          // Realistic "dips" in the graph near the end
          if (progress > 0.88 && progress < 0.885) base -= 15;
          if (progress > 0.93 && progress < 0.935) base -= 40;
          if (progress > 0.97 && progress < 0.975) base -= 90;
          
          // Smooth sine wave noise
          const noise = Math.sin(progress * 150) * 2 + Math.sin(progress * 400) * 1;
          
          const y = (h - bottomMargin) - base + noise;
          points.push({ x: i, y });
        }
        
        let startTimestamp: number | null = null;
        const duration = 1200; 
        
        const render = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const elapsed = timestamp - startTimestamp;
          const progress = Math.min(elapsed / duration, 1);
          
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const currentWidth = w * easeProgress;
          
          ctx.clearRect(0, 0, w, h);
          ctx.beginPath();
          ctx.moveTo(0, h - bottomMargin);
          
          let lastX = 0;
          let lastY = h - bottomMargin;
          for (const point of points) {
            if (point.x <= currentWidth) {
              ctx.lineTo(point.x, point.y);
              lastX = point.x;
              lastY = point.y;
            } else {
              break;
            }
          }
          
          ctx.strokeStyle = activeProject.color; 
          ctx.lineWidth = 2.5;
          ctx.stroke();

          // Gradient fill
          const gradient = ctx.createLinearGradient(0, 0, 0, h - bottomMargin);
          gradient.addColorStop(0, activeProject.color + '33'); // 20% opacity at top
          gradient.addColorStop(1, activeProject.color + '00'); // 0% opacity at bottom

          ctx.lineTo(lastX, h - bottomMargin);
          ctx.lineTo(0, h - bottomMargin);
          ctx.fillStyle = gradient;
          ctx.fill();
          
          if (progress < 1) {
            animationId = requestAnimationFrame(render);
          }
        };
        
        animationId = requestAnimationFrame(render);
      }
    }
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [activeProjectIdx, activeProject.color]);

  return (
    <>
      <style>{`
        @keyframes fadeInStats {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-stats {
          animation: fadeInStats 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Header Section */}
      <VoidZeroBorder theme="light" showTopBorder={false} containerClassName="px-5 md:px-10 h-36 md:h-48 sm:h-80 flex flex-col justify-center gap-5">
        <h3 className="text-start max-w-lg text-balance text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight font-apk text-zinc-900">
          Trusted by millions of developers around the world
        </h3>
      </VoidZeroBorder>
      
      <div aria-live="polite" aria-atomic="true" className="sr-only"></div>
      
      {/* Stats Grid Section - Single outer border wrapper with ticks */}
      <VoidZeroBorder theme="light" containerClassName="flex flex-col">
        {/* Top Row: Total Downloads and Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-stroke">
          <div className="p-6 md:p-10 flex flex-col justify-start lg:justify-between gap-2 lg:gap-0 lg:min-h-[450px]">
            <h6 className="flex gap-2 items-center text-sm md:text-lg font-medium font-apk text-zinc-800">
              <span>Total downloads</span>
            </h6>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-medium tracking-tight lg:mt-auto font-apk">
              <AnimatedCounter value={activeProject.total} />
            </h1>
          </div>
          
          <div className="relative w-full aspect-[5/3.5] bg-white">
            <div className="absolute top-4 md:top-6 left-4 md:left-6 z-20 project-dropdown" ref={dropdownRef}>
              <div className="relative">
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  aria-expanded={isOpen} 
                  className="bg-white border border-stroke text-primary rounded-lg px-3 py-2 flex items-center gap-2 cursor-pointer shadow-sm text-sm hover:bg-slate-50 transition-colors"
                >
                  <img src={activeProject.icon} className="size-5" alt="" />
                  <span className="font-medium text-sm">{activeProject.name} <span className="hidden md:inline-block">Downloads</span></span>
                  <svg className={`size-3 ml-1 fill-primary transition-transform ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 7" aria-hidden="true">
                    <path d="M1.41 0L6 4.58 10.59 0 12 1.42l-6 6-6-6z"></path>
                  </svg>
                </button>
                
                {isOpen && (
                  <ul role="listbox" className="absolute top-full left-0 mt-1 w-48 bg-white border border-stroke rounded-lg shadow-lg overflow-hidden py-1 select-none">
                    {PROJECT_STATS.map((project, idx) => (
                      <li key={project.id} role="option" aria-selected={idx === activeProjectIdx}>
                        <button
                          onClick={() => {
                            setActiveProjectIdx(idx);
                            setIsOpen(false);
                          }}
                          className={`w-full px-3 py-2 text-left flex items-center justify-between transition-colors text-base cursor-pointer focus:outline-none focus:bg-stroke/20 hover:text-primary focus:text-primary ${idx === activeProjectIdx ? 'bg-slate-50' : 'hover:bg-stroke/20'}`}
                        >
                          <div className="flex items-center gap-2">
                            <img src={project.icon} className="size-5" alt="" />
                            <span className="font-medium text-sm">{project.name}</span>
                          </div>
                          {idx === activeProjectIdx && (
                            <svg className="size-4 text-primary ml-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="w-full h-full relative">
              <canvas ref={canvasRef} id="chart-canvas" width="1438" height="1007" style={{ display: 'block', boxSizing: 'border-box', height: '100%', width: '100%', objectFit: 'cover' }}></canvas>
              <div className="flex justify-between absolute bottom-4 md:bottom-6 left-6 md:left-10 right-6 md:right-10 pointer-events-none">
                <p key={`${activeProject.id}-date`} className="font-mono text-sm text-zinc-500 tracking-wide animate-fade-in-stats">{activeProject.startDate}</p>
                <p key={`${activeProject.id}-today`} className="font-mono text-sm text-zinc-500 tracking-wide animate-fade-in-stats">Today</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Row: Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-stroke divide-y lg:divide-y-0 lg:divide-x divide-stroke">
          <div className="flex flex-col justify-start gap-2 lg:gap-5 p-6 md:p-10 min-h-0 lg:min-h-[220px]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight font-apk text-zinc-900">
              <AnimatedCounter 
                value={activeProject.weekly.value} 
                formatOptions={{ minimumFractionDigits: activeProject.weekly.maxFractionDigits, maximumFractionDigits: activeProject.weekly.maxFractionDigits }} 
                suffix={activeProject.weekly.suffix} 
              />
            </h2>
            <p key={`${activeProject.id}-lbl1`} className="lead text-sm lg:text-base font-medium font-apk text-zinc-500 animate-fade-in-stats">Weekly NPM downloads</p>
          </div>
          <div className="flex flex-col justify-start gap-2 lg:gap-5 p-6 md:p-10 min-h-0 lg:min-h-[220px]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight font-apk text-zinc-900">
              <AnimatedCounter 
                value={activeProject.stars.value} 
                formatOptions={{ minimumFractionDigits: activeProject.stars.maxFractionDigits, maximumFractionDigits: activeProject.stars.maxFractionDigits }} 
                suffix={activeProject.stars.suffix} 
              />
            </h2>
            <p key={`${activeProject.id}-lbl2`} className="lead text-sm lg:text-base font-medium font-apk text-zinc-500 animate-fade-in-stats">GitHub Stars</p>
          </div>
          <div className="flex flex-col justify-start gap-2 lg:gap-5 p-6 md:p-10 min-h-0 lg:min-h-[220px]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight font-apk text-zinc-900">
              <AnimatedCounter 
                value={activeProject.contributors.value} 
                formatOptions={{ minimumFractionDigits: activeProject.contributors.maxFractionDigits, maximumFractionDigits: activeProject.contributors.maxFractionDigits }} 
                suffix={activeProject.contributors.suffix} 
              />
            </h2>
            <p key={`${activeProject.id}-lbl3`} className="lead text-sm lg:text-base font-medium font-apk text-zinc-500 animate-fade-in-stats">Contributors</p>
          </div>
        </div>
      </VoidZeroBorder>
    </>
  );
}
