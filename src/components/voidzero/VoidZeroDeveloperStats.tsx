"use client";

import React, { useEffect, useRef, useState, useMemo } from 'react';
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
    <span ref={ref}>
      <NumberFlow value={inView ? value : 0} format={formatOptions} />
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
    hueRotate: "0deg"
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
    hueRotate: "-40deg"
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
    hueRotate: "-140deg"
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
    hueRotate: "150deg"
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
    hueRotate: "100deg"
  }
];

// Simple seeded random to keep chart consistent for a project
function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export function VoidZeroDeveloperStats() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const activeProject = PROJECT_STATS[activeProjectIdx];

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        const w = canvasRef.current.width;
        const h = canvasRef.current.height;
        ctx.clearRect(0, 0, w, h);
        ctx.beginPath();
        ctx.moveTo(0, h - 20);
        
        let seed = activeProjectIdx + 1;
        for (let i = 0; i <= w; i += 10) {
          const progress = i / w;
          const y = (h - 20) - Math.pow(progress, 4) * (h - 100);
          ctx.lineTo(i, y + seededRandom(seed++) * 20 - 10);
        }
        
        ctx.strokeStyle = activeProject.color; 
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        
        // Add semi transparent fill
        ctx.fillStyle = activeProject.color + '1A'; // 10% opacity in hex
        ctx.fill();
      }
    }
  }, [activeProjectIdx, activeProject.color]);

  return (
    <>
      <VoidZeroBorder theme="light" showTopBorder={false} containerClassName="px-5 md:px-10 h-36 md:h-48 sm:h-80 flex flex-col justify-center gap-5">
        <h3 className="text-start max-w-lg text-balance text-4xl font-medium tracking-tight font-apk">
          Trusted by millions of developers around the world
        </h3>
      </VoidZeroBorder>
      
      <div aria-live="polite" aria-atomic="true" className="sr-only"></div>
      
      <VoidZeroBorder theme="light" containerClassName="grid grid-cols-1 lg:grid-cols-2 border-t border-ceramic divide-y lg:divide-y-0 lg:divide-x divide-ceramic">
        <div className="p-6 md:p-10 flex flex-col justify-between min-h-[300px] lg:min-h-[450px]">
          <h6 className="flex gap-2 items-center text-sm font-medium font-apk">
            <span>Total downloads</span>
          </h6>
          <h1 className="text-6xl md:text-7xl lg:text-[5rem] font-medium tracking-tight mt-auto font-apk">
            <AnimatedCounter value={activeProject.total} />
          </h1>
        </div>
        
        <div className="relative w-full aspect-[5/3.5] bg-white">
          <div className="absolute top-4 md:top-6 left-4 md:left-6 z-20 project-dropdown">
            <div className="relative">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen} 
                className="bg-white border border-stroke text-primary rounded-md px-3 py-1.5 flex items-center gap-2 cursor-pointer shadow-sm text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                <img src="/assets/vite.5rp3iChU.svg" className="size-5" alt="" style={{ filter: `hue-rotate(${activeProject.hueRotate})` }} />
                <span>{activeProject.name} <span className="hidden md:inline-block">Downloads</span></span>
                <svg className={`size-3 ml-1 fill-primary transition-transform ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 7" aria-hidden="true">
                  <path d="M1.41 0L6 4.58 10.59 0 12 1.42l-6 6-6-6z"></path>
                </svg>
              </button>
              
              {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-stroke rounded-md shadow-lg overflow-hidden py-1">
                  {PROJECT_STATS.map((project, idx) => (
                    <button
                      key={project.id}
                      onClick={() => {
                        setActiveProjectIdx(idx);
                        setIsOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left flex items-center justify-between hover:bg-slate-50 transition-colors text-sm font-medium"
                    >
                      <div className="flex items-center gap-2">
                        <img src="/assets/vite.5rp3iChU.svg" className="size-4" alt="" style={{ filter: `hue-rotate(${project.hueRotate})` }} />
                        <span>{project.name}</span>
                      </div>
                      {idx === activeProjectIdx && (
                        <svg className="size-3 text-nickel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="w-full h-full relative">
            <canvas ref={canvasRef} id="chart-canvas" width="1438" height="1007" style={{ display: 'block', boxSizing: 'border-box', height: '100%', width: '100%', objectFit: 'cover' }}></canvas>
            <div className="flex justify-between absolute bottom-4 md:bottom-6 left-6 md:left-10 right-6 md:right-10 pointer-events-none">
              <p className="font-mono text-xs text-nickel tracking-wide">{activeProject.startDate}</p>
              <p className="font-mono text-xs text-nickel tracking-wide">Today</p>
            </div>
          </div>
        </div>
      </VoidZeroBorder>
      
      <VoidZeroBorder theme="light" containerClassName="grid grid-cols-1 lg:grid-cols-3 border-t border-ceramic divide-y lg:divide-y-0 lg:divide-x divide-ceramic">
        <div className="flex flex-col justify-between p-6 md:p-10 min-h-[200px] md:min-h-[280px]">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight font-apk">
            <AnimatedCounter 
              value={activeProject.weekly.value} 
              formatOptions={{ minimumFractionDigits: activeProject.weekly.maxFractionDigits, maximumFractionDigits: activeProject.weekly.maxFractionDigits }} 
              suffix={activeProject.weekly.suffix} 
            />
          </h2>
          <p className="lead text-sm font-medium font-apk text-nickel">Weekly NPM downloads</p>
        </div>
        <div className="flex flex-col justify-between p-6 md:p-10 min-h-[200px] md:min-h-[280px]">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight font-apk">
            <AnimatedCounter 
              value={activeProject.stars.value} 
              formatOptions={{ minimumFractionDigits: activeProject.stars.maxFractionDigits, maximumFractionDigits: activeProject.stars.maxFractionDigits }} 
              suffix={activeProject.stars.suffix} 
            />
          </h2>
          <p className="lead text-sm font-medium font-apk text-nickel">GitHub Stars</p>
        </div>
        <div className="flex flex-col justify-between p-6 md:p-10 min-h-[200px] md:min-h-[280px]">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight font-apk">
            <AnimatedCounter 
              value={activeProject.contributors.value} 
              formatOptions={{ minimumFractionDigits: activeProject.contributors.maxFractionDigits, maximumFractionDigits: activeProject.contributors.maxFractionDigits }} 
              suffix={activeProject.contributors.suffix} 
            />
          </h2>
          <p className="lead text-sm font-medium font-apk text-nickel">Contributors</p>
        </div>
      </VoidZeroBorder>
    </>
  );
}
