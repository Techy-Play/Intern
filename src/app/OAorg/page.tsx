import Image from "next/image";
import { VoidZeroBorder } from '@/components/voidzero/VoidZeroBorder';

export default function OAorgPage() {
  return (
    <div className="min-h-screen bg-gray-50 " style={{ fontFamily: 'apkProtocol, sans-serif' }}>

      {/* Section 1: Hero */}
      <VoidZeroBorder theme="light" showTopBorder={false} containerClassName="bg-white" tickSize={7}>
        <div className="px-10 pt-20 pb-12">
          <div className="flex flex-col gap-6 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-normal text-black tracking-tight leading-[1.1]">
              Crowdsourcing justice <br /> in every company OA
            </h1>
            <p className="text-lg md:text-xl text-gray-800 font-medium tracking-tight">
              The petition platform that ends <br /> cheating in tech hiring..
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
        <div className="p-10 border-b md:border-b-0 md:border-r border-[#e5e4e7] flex flex-col justify-between min-h-[300px] items-center text-center md:items-start md:text-left">
          <span className="text-lg text-[1.3rem] tracking-widest text-black font-medium">
            <span className="tracking-[0.5em]">//</span>OPEN SECRET OF TECH HIRING
          </span>
          <div className="space-y-1 pb-4 mt-10">
            <p className="text-xl md:text-2xl font-medium text-black">Merit is tested</p>
            <p className="text-xl md:text-2xl font-medium text-black">Cheating is rewarded</p>
          </div>
        </div>
        <div className="flex flex-row md:flex-col md:min-h-[300px]">
          <div className="p-4 md:p-10 flex-1 flex flex-col justify-center items-center md:items-start border-r md:border-r-0 md:border-b border-[#e5e4e7]">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-normal text-black tracking-tight text-center md:text-left">
              Cheating wins
            </h2>
          </div>
          <div className="p-4 md:p-10 flex-1 flex flex-col justify-center items-center md:items-start">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-normal text-black tracking-tight text-center md:text-left">
              Hardwork loses
            </h2>
          </div>
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
          <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-[#e5e4e7] flex flex-col justify-start">
            <div>
              <span className="text-base md:text-lg tracking-widest text-black/50 font-medium mb-6 block">
                // 01
              </span>
              <h3 className="text-4xl md:text-5xl font-medium text-black mb-6 md:mb-8">The IIT/NIT Myth</h3>
            </div>
            <p className="text-lg md:text-xl leading-loose text-black max-w-xl">
              The belief that IITs and NITs reflect the best talent pool is fading. These colleges have become hotspots of mass cheating with a significant no. of students relying on paid OA help from the Telegram groups. Most on-campus OAs are MCQ-based often answered with GPT. If a company has a coding round, it is often the case that the problems are relatively easy compared to LC weekly contests.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="p-10 md:p-12 border-b border-[#e5e4e7] flex-1 flex flex-col justify-start">
              <span className="text-base md:text-lg tracking-widest text-black/50 font-medium mb-6 block">
                // 02
              </span>
              <h3 className="text-3xl md:text-4xl font-medium text-black mb-4">The OA Illusion</h3>
              <p className="text-base md:text-lg leading-relaxed text-black max-w-sm">
                OAs of big tech companies have turned into a competition where knowing how to cheat matters more than real technical skills
              </p>
            </div>
            <div className="p-10 md:p-12 flex-1 flex flex-col justify-start">
              <span className="text-base md:text-lg tracking-widest text-black/50 font-medium mb-6 block">
                // 03
              </span>
              <h3 className="text-3xl md:text-4xl font-medium text-black mb-4">Telegram Economy</h3>
              <p className="text-base md:text-lg leading-relaxed text-black max-w-sm">
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
              <span className="text-[1.5rem] md:text-[2rem] font-extrabold">No</span>t a <span className="text-[1.5rem] md:text-[2rem] font-extrabold">CP</span> Expert<br />
              <span className="text-[1.5rem] md:text-[2rem] font-extrabold">No</span>t a <span className="text-[1.5rem] md:text-[2rem] font-extrabold">LeetCode</span> knight<br />
              <span className="text-[1.5rem] md:text-[2rem] font-extrabold">Yet a 41 LPA </span>offer<br />
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
        <div className="p-6 md:p-10 border-b border-[#e5e4e7]">
          <h2 className="text-2xl md:text-3xl font-medium text-[#222222] tracking-tight">
            We are not building a complaint forum
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr]">
          {/* Left Image */}
          <div className="relative min-h-[300px] md:min-h-0 overflow-hidden">
            <img
              src="/oa/beautiful-sunset-sky.png"
              alt="Clouds"
              className="absolute inset-0 w-[calc(100%+10px)] h-[calc(100%+10px)] max-w-none object-cover -m-[2px]"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col">
            <div className="bg-[#2A0808] text-white p-8 md:p-12 flex-1 flex items-center">
              <h3 className="text-xl md:text-2xl font-medium tracking-tight leading-relaxed max-w-sm">
                Students can support petitions <br className="hidden md:block" /> requesting companies to
              </h3>
            </div>
            <div className="bg-white p-8 md:p-12 flex-1 flex items-center border-t border-[#e5e4e7]">
              <ul className="space-y-3 text-[1rem] md:text-[1.25rem] text-black font-medium list-none p-0 m-0">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span> Audit companies OAs
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span> Stop reusing problem sets across OAs
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span> Conduct live verification rounds for shortlisted candidates
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span> Reassess candidates if an OA was compromised
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span> Publish an official hiring integrity response
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span> Review outcomes linked to confirmed OA integrity violations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </VoidZeroBorder>

    </div>
  );
}
