import Navbar from "@/components/sunday/Navbar";
import CTAButton from "@/components/sunday/CTAButton";
import { HeroTextLayerA, HeroTextLayerB } from "@/components/sunday/Hero";
import VideoSection from "@/components/sunday/VideoSection";
import VideoWrapper from "@/components/sunday/VideoWrapper";
import AnimatedText from "@/components/sunday/AnimatedText";
import Preloader from "@/components/sunday/Preloader";

export default function SundayPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#1b1b1b]">
      <Preloader />
      <Navbar />
      <CTAButton />

      <div className="mx-auto flex w-full flex-col items-center gap-12 sm:gap-16 pt-[140px] sm:pt-[160px]">

        {/* Layer A (Bottom): Normal Document Flow */}
        <HeroTextLayerA />

        {/* The Z-Index Sandwich: Video (z-20) and Layer B (z-30) */}
        <VideoWrapper>

          {/* Middle Layer: Video Section */}
          <VideoSection />

          {/* Top Layer (Layer B): Clipped White Text Overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-30"
            // The video border-radius is 10px at the top. 
            // We match that exact radius so the text perfectly clips at the video's rounded corners.
            style={{ clipPath: "inset(0 round 10px 10px 0 0)", WebkitClipPath: "inset(0 round 10px 10px 0 0)" }}
          >
            <HeroTextLayerB />
          </div>

        </VideoWrapper>

      </div>

      <div className="mb-[100vh] mx-auto flex-col items-center px-4 pb-20 sm:px-6 lg:px-8">
        <AnimatedText />
        <p>This space is left for Testing the scroll over the video animation :)</p>
      </div>
    </main>
  );
}
