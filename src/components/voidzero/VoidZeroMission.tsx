import React from 'react';
import { VoidZeroBorder } from './VoidZeroBorder';

export function VoidZeroMission() {
  return (
    <VoidZeroBorder theme="light" containerClassName="px-5 md:px-10 py-16 md:py-40 flex flex-col items-center gap-10 bg-[#FBFAF7]">
      <h3 className="max-w-[45rem] text-center text-balance mx-auto text-3xl md:text-5xl font-medium tracking-tight leading-tight">
        Our mission is to make the next generation of JavaScript developers more productive than ever before.
      </h3>
      <div className="flex flex-row gap-6 items-baseline">
        <a href="/about" className="button border border-stroke px-6 py-2 rounded text-primary hover:bg-black/5 transition-colors font-medium">
          Learn more
        </a>
      </div>
    </VoidZeroBorder>
  );
}
