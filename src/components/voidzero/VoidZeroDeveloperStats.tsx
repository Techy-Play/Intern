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
    <span ref={ref}>
      <NumberFlow value={inView ? value : 0} format={formatOptions} />
      {suffix}
    </span>
  );
}

export function VoidZeroDeveloperStats() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        const w = canvasRef.current.width;
        const h = canvasRef.current.height;
        ctx.clearRect(0, 0, w, h);
        ctx.beginPath();
        ctx.moveTo(0, h - 20);
        
        for (let i = 0; i <= w; i += 10) {
          const progress = i / w;
          const y = (h - 20) - Math.pow(progress, 4) * (h - 100);
          ctx.lineTo(i, y + Math.random() * 20 - 10);
        }
        
        ctx.strokeStyle = '#8c52ff'; 
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.fillStyle = 'rgba(140, 82, 255, 0.1)';
        ctx.fill();
      }
    }
  }, []);

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
            <AnimatedCounter value={4664021084} />
          </h1>
        </div>
        
        <div className="relative w-full aspect-[5/3.5] bg-white">
          <div className="absolute top-4 md:top-6 left-4 md:left-6 z-10 project-dropdown">
            <button aria-expanded="false" aria-label="Select project: Vite" aria-haspopup="listbox" className="bg-white border border-stroke text-primary rounded-md px-3 py-1.5 flex items-center gap-2 cursor-pointer shadow-sm text-sm font-medium hover:bg-slate-50">
              <img src="/assets/vite.5rp3iChU.svg" className="size-5" alt="Vite" />
              <span>Vite <span className="hidden md:inline-block">Downloads</span></span>
              <svg className="size-3 ml-1 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 7" aria-hidden="true">
                <path d="M1.41 0L6 4.58 10.59 0 12 1.42l-6 6-6-6z"></path>
              </svg>
            </button>
          </div>
          <div className="w-full h-full relative">
            <canvas ref={canvasRef} id="chart-canvas" width="1438" height="1007" style={{ display: 'block', boxSizing: 'border-box', height: '100%', width: '100%', objectFit: 'cover' }}></canvas>
            <div className="flex justify-between absolute bottom-4 md:bottom-6 left-6 md:left-10 right-6 md:right-10 pointer-events-none">
              <p className="font-mono text-xs text-nickel tracking-wide">April 2020</p>
              <p className="font-mono text-xs text-nickel tracking-wide">Today</p>
            </div>
          </div>
        </div>
      </VoidZeroBorder>
      
      <VoidZeroBorder theme="light" containerClassName="grid grid-cols-1 lg:grid-cols-3 border-t border-ceramic divide-y lg:divide-y-0 lg:divide-x divide-ceramic">
        <div className="flex flex-col justify-between p-6 md:p-10 min-h-[200px] md:min-h-[280px]">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight font-apk">
            <AnimatedCounter value={121.4} formatOptions={{ minimumFractionDigits: 1, maximumFractionDigits: 1 }} suffix="M+" />
          </h2>
          <p className="lead text-sm font-medium font-apk text-nickel">Weekly NPM downloads</p>
        </div>
        <div className="flex flex-col justify-between p-6 md:p-10 min-h-[200px] md:min-h-[280px]">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight font-apk">
            <AnimatedCounter value={81.3} formatOptions={{ minimumFractionDigits: 1, maximumFractionDigits: 1 }} suffix="K+" />
          </h2>
          <p className="lead text-sm font-medium font-apk text-nickel">GitHub Stars</p>
        </div>
        <div className="flex flex-col justify-between p-6 md:p-10 min-h-[200px] md:min-h-[280px]">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight font-apk">
            <AnimatedCounter value={1.3} formatOptions={{ minimumFractionDigits: 1, maximumFractionDigits: 1 }} suffix="K+" />
          </h2>
          <p className="lead text-sm font-medium font-apk text-nickel">Contributors</p>
        </div>
      </VoidZeroBorder>
    </>
  );
}
