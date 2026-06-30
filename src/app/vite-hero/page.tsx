import { VoidZeroBorder } from "@/components/voidzero/VoidZeroBorder";
import { ViteHeroSlider } from "./ViteHeroSlider";

export default function ViteHero() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden font-apk font-medium py-10 md:py-20">
      <VoidZeroBorder
        theme="light"
        showTopBorder={false}
        containerClassName="flex flex-col justify-start items-center gap-6 pt-14 pb-6"
      >
        <div className="w-full sm:w-2xl flex flex-col justify-start items-center gap-10 px-5 sm:px-0">
          <div className="flex flex-col justify-start items-center gap-4">
            {/* Logo */}
            <img
              src="https://viteplus.dev/icon.svg"
              alt="Vite+ Logo"
              className="w-9"
            />

            {/* Heading with shine gradient animation */}
            <h1 className="text-center text-primary text-balance vite-hero-shine-text font-bold text-3xl lg:text-5xl sm:text-5xl md:text-5xl leading-tight tracking-tight">
              <span className="inline-block">The Unified</span>
              <br />
              <span className="inline-block">Toolchain</span>{' '}
              <br className="hidden-above-359" />
              <span className="inline-block">for the Web</span>
            </h1>

            {/* Subtitle */}
            <p className="self-stretch text-center text-balance text-nickel md:text-lg m-0">
              Manage your runtime, package manager, and frontend stack with one tool.
            </p>

            {/* License text */}
            <p className="text-sm text-grey font-apk font-medium">
              Free and open source under the MIT license.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            {/* Get started - primary button with gradient border */}
            <a
              href="/guide"
              target="_self"
              className="vite-hero-btn-primary button"
            >
              <span className="relative z-10">Get started</span>
            </a>

            {/* Read the Announcement */}
            <a
              href="https://voidzero.dev/posts/announcing-vite-plus-alpha"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Read the Announcement
            </a>

            {/* Copy Prompt */}
            <button
              type="button"
              className="button"
              aria-label="Copy Prompt for setting up Vite+ with an AI assistant"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="size-4"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                </g>
              </svg>
              <span>Copy Prompt</span>
            </button>
          </div>
        </div>
      </VoidZeroBorder>

      <VoidZeroBorder theme="light" containerClassName="overflow-hidden">
        {/* Terminal / Slider Section */}
        <section className="w-full border-t border-[#e5e4e7] h-auto pb-10 bg-wine bg-[url('/assets/terminal-background.jpg')] bg-cover bg-top flex justify-center pt-28 overflow-clip">
          <ViteHeroSlider />
        </section>
      </VoidZeroBorder>
    </div>
  );
}
