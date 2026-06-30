"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VoidZeroBorder } from '@/components/voidzero/VoidZeroBorder';
import { VoidZeroNavbar } from '@/components/voidzero/VoidZeroNavbar';
import { VoidZeroBanner } from '@/components/voidzero/VoidZeroBanner';

export default function OAorgPage() {
  const [showBanner, setShowBanner] = useState(true);

  return (

    <div className="min-h-screen bg-gray-50 pb-20rem md:pb-32" style={{ fontFamily: 'apkProtocol, sans-serif' }}>

      {/* Header (Banner + Navbar) wrapped in Border */}
      <VoidZeroBorder theme="light" showTopBorder={false} containerClassName="bg-white">
        <VoidZeroBanner showBanner={showBanner} setShowBanner={setShowBanner} />
        <VoidZeroNavbar />
      </VoidZeroBorder>

      {/* Section 1: Hero */}
      <VoidZeroBorder theme="light" showTopBorder={false} containerClassName="bg-white" className="relative z-20" tickSize={7}>
        <div className="px-12 md:px-20 pt-32 md:pt-48 pb-12">
          <div className="flex flex-col gap-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight leading-relaxed">
              Crowdsourcing justice <br /> in every company OA
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 font-semibold tracking-tight leading-loose">
              The petition platform that ends <br />  cheating in tech hiring..
            </p>
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <img
            src="/oa/Protest_Hero.png"
            alt="Protest banner for fair hiring"
            className="w-[calc(100%+4px)] h-[calc(100%+10px)] object-cover max-w-none -m-[2px]"
          />
        </div>
      </VoidZeroBorder>

      {/* Section 2: Grid The Secret */}
      <VoidZeroBorder theme="light" containerClassName="grid grid-cols-1 md:grid-cols-2 bg-white" tickSize={7}>
        {/* Top Left */}
        <div className="p-10 md:border-r border-[#e5e4e7] flex items-start justify-center md:justify-start">
          <span className="text-lg text-[1.3rem] tracking-widest text-black font-medium text-center md:text-left">
            <span className="tracking-[0.5em]">// </span>OPEN SECRET OF TECH HIRING
          </span>
        </div>

        {/* Top Right */}
        <div className="p-4 md:p-10 pt-24 md:pt-[14rem] pb-6 md:pb-8 border-b border-[#e5e4e7] flex flex-col justify-end items-center md:items-start">
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-normal text-black tracking-tight text-center md:text-left">
            Cheating wins
          </h2>
        </div>

        {/* Bottom Left */}
        <div className="p-10 md:border-r border-[#e5e4e7] flex items-end justify-center md:justify-start">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-2xl md:text-3xl font-medium text-black">Merit is tested</p>
            <p className="text-2xl md:text-3xl font-medium text-black">Cheating is rewarded</p>
          </div>
        </div>

        {/* Bottom Right */}
        <div className="p-4 md:p-10 flex flex-col justify-center items-center md:items-start">
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-normal text-black tracking-tight text-center md:text-left">
            Hardwork loses
          </h2>
        </div>
      </VoidZeroBorder>

      {/* Section 3 & 4 Combined: THE PROBLEM + Grid Points */}
      <VoidZeroBorder theme="light" containerClassName="flex flex-col bg-white" tickSize={7}>

        {/* THE PROBLEM Header */}
        <div className="w-full bg-[#0a0a0a] text-white overflow-hidden py-0 px-6 md:px-12 flex items-end justify-center relative z-10 -mb-[1px]">
          <h2 className="lato-bold text-[14vw] xl:text-[200px] whitespace-nowrap leading-[0.75] uppercase tracking-tighter text-center select-none pt-4 sm:pt-6 md:pt-10 xl:pt-12 mb-[-0.05em]">
            THE PROBLEM
          </h2>
        </div>

        {/* Grid Points */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr]">
          <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-[#e5e4e7] flex flex-col justify-between">
            <div>
              <span className="text-sm md:text-base tracking-[0.2em] text-black/50 font-medium mb-3 block">
                // 01
              </span>
              <h3 className="text-4xl md:text-5xl font-medium text-black">The IIT/NIT Myth</h3>
            </div>
            <p className="text-lg md:text-xl leading-[2] text-[#333] max-w-xl mt-12 md:mt-0 font-semibold">
              The belief that IITs and NITs reflect the best talent pool is fading. These colleges have become hotspots of mass cheating with a significant no. of students relying on paid OA help from the Telegram groups. Most on-campus OAs are MCQ-based often answered with GPT. If a company has a coding round, it is often the case that the problems are relatively easy compared to LC weekly contests.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="p-10 md:p-12 border-b border-[#e5e4e7] flex-1 flex flex-col justify-start">
              <span className="text-sm md:text-base tracking-[0.2em] text-black/50 font-medium mb-3 block">
                // 02
              </span>
              <h3 className="text-3xl md:text-4xl font-medium text-black mb-6">The OA Illusion</h3>
              <p className="text-lg md:text-xl leading-[2] text-[#333] max-w-sm font-semibold">
                OAs of big tech companies have turned into a competition where knowing how to cheat matters more than real technical skills
              </p>
            </div>
            <div className="p-10 md:p-12 flex-1 flex flex-col justify-start">
              <span className="text-sm md:text-base tracking-[0.2em] text-black/50 font-medium mb-3 block">
                // 03
              </span>
              <h3 className="text-3xl md:text-4xl font-medium text-black mb-6">Telegram Economy</h3>
              <p className="text-lg md:text-xl leading-[2] text-[#333] max-w-sm font-semibold">
                Telegram groups that sell OA questions, solutions, even remote access to clear OAs & interview help (for online interviews)
              </p>
            </div>
          </div>
        </div>
      </VoidZeroBorder>

      {/* Section 5: Analog Devices */}
      <VoidZeroBorder theme="light" containerClassName="bg-gray-50/50 py-12 text-center" tickSize={7}>
        <h2 className="text-4xl md:text-6xl font-medium text-black tracking-tight">
          Analog Devices - 41 LPA
        </h2>
      </VoidZeroBorder>
      <VoidZeroBorder theme="light" containerClassName="grid grid-cols-1 md:grid-cols-2 bg-white">
        <div className="p-8 py-10 md:p-8 flex flex-col justify-center items-center md:items-start order-2 md:order-1 text-center md:text-left">
          <div className="space-y-4 md:space-y-6 text-lg md:text-2xl text-black font-medium leading-relaxed">
            <p>
              Not a CP Expert<br />
              Yet a 41 LPA <br />
              Not a LeetCode knight<br />
              Was waiting in the wing.
            </p>
            <p>
              With GPT, Gemini, Claude<br />
              & remote access in shadows<br />
              Just twenty-five MCQs—<br />
              A hiring bar asleep.
            </p>
          </div>
        </div>
        <div className="p-0 bg-gray-50 order-1 md:order-2 overflow-hidden w-full h-full">
          <img
            src="/oa/oa_screenshot.png"
            alt="OA Screenshot"
            className="w-[calc(100%+10px)] h-[calc(100%+10px)] max-w-none block mix-blend-multiply -m-[2px]"
          />
        </div>
      </VoidZeroBorder>

      {/* Section 6: Complaint Forum */}
      <VoidZeroBorder theme="light" containerClassName="bg-white flex flex-col" tickSize={6}>
        <div className="flex flex-col justify-end p-8 md:p-12 pt-24 md:pt-32 border-b border-[#e5e4e7]">
          <h2 className="text-2xl md:text-[2rem] font-medium text-[#222222] tracking-tight">
            We are not building a complaint forum
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr]">
          {/* Left Image */}
          <div className="relative min-h-[300px] md:min-h-0 overflow-hidden bg-gray-100">
            <img
              src="/oa/beautiful-sunset-sky.png"
              alt="Clouds"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col">
            <div className="bg-[#2A0808] text-white p-8 md:p-12 flex items-start min-h-[16rem]">
              <h3 className="pt-[4rem] pl-[0.8rem] md:pt-[8rem] md:pl-[2.7rem]  text-xl md:text-[1.75rem] font-medium tracking-tight leading-loose max-w-lg">
                Students can support petitions <br className="hidden md:block" /> requesting companies to
              </h3>
            </div>
            <div className="bg-white p-8 md:p-12 flex-1 flex items-start">
              <ul className="space-y-4 text-[1rem] md:text-[1.2rem] text-black font-medium list-disc pl-6 marker:text-black/80">
                <li className="pl-2">Audit companies OAs</li>
                <li className="pl-2">Stop reusing problem sets across OAs</li>
                <li className="pl-2">Conduct live verification rounds for shortlisted candidates</li>
                <li className="pl-2">Reassess candidates if an OA was compromised</li>
                <li className="pl-2">Publish an official hiring integrity response</li>
                <li className="pl-2">Review outcomes linked to confirmed OA integrity violations</li>
              </ul>
            </div>
          </div>
        </div>
      </VoidZeroBorder>

    </div>
  );
}
