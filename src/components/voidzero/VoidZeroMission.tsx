import React from 'react';
import { VoidZeroBorder } from './VoidZeroBorder';

export function VoidZeroMission() {
  return (
    <>
      <style>{`
        @font-face {
          font-family: 'APK Protocol';
          font-weight: 500;
          src: url(/assets/APK-Protocol-Medium.C7Mq9oGh.woff2) format("woff2");
        }
        .marketing-heading {
          font-family: 'APK Protocol', sans-serif;
          font-size: 1.5rem; /* fallback for var(--text-2xl) */
          font-size: var(--text-2xl, 1.5rem);
          line-height: 1.2;
          font-weight: 500;
          letter-spacing: -0.025em; /* fallback for var(--tracking-tight) */
          letter-spacing: var(--tracking-tight, -0.025em);
          color: var(--color-primary, #16171d);
          overflow-wrap: break-word;
          margin: 0;
        }
        @media (min-width: 48rem) {
          .marketing-heading {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <VoidZeroBorder theme="light" showTopBorder={true} containerClassName="px-5 md:px-10 py-10 md:py-40 flex flex-col items-center gap-10 bg-[#FBFAF7]">
        <h3 className="marketing-heading max-w-[45rem] text-center text-balance mx-auto"> Our mission is to make the next generation of JavaScript developers more productive than ever before. </h3>
        <div className="flex flex-row gap-6 items-baseline">
          <a href="/about" className="button">Learn more</a>
        </div>
      </VoidZeroBorder>
    </>
  );
}
