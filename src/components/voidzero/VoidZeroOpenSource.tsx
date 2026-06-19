"use client";

import React, { useEffect, useRef, useState } from "react";
import Rive from "@rive-app/react-canvas";

const projects = [
  {
    id: "viteplus",
    title: "Vite+",
    heading: "The unified toolchain for the web",
    desc: "Vite+ is the entry point to web application development that manages your runtime, package manager, and frontend toolchain.",
    url: "https://viteplus.dev",
    repo: "https://github.com/voidzero-dev/vite-plus",
    stars: "new",
    contributors: null,
    image: "https://voidzero.dev/assets/viteplus.DWFNSSex.png",
    icon: "https://voidzero.dev/assets/viteplus-light.CYpc0gnV.svg",
    gradient: "bg-gradient-to-br from-[#4b32c3] to-[#8c52ff]",
  },
  {
    id: "vite",
    title: "Vite",
    heading: "The build tool for the web",
    desc: "Vite is the default choice for single-page web applications and the foundation for fullstack frameworks like TanStack Start, Nuxt, SvelteKit and more.",
    url: "https://vite.dev",
    repo: "https://github.com/vitejs/vite",
    stars: "81.3k",
    contributors: "1,298",
    image: "https://voidzero.dev/assets/vite.5rp3iChU.svg",
    icon: "https://voidzero.dev/assets/vite-light.MG8M2jAW.svg",
    gradient: "bg-gradient-to-br from-[#41d1ff] to-[#bd34fe]",
  },
  {
    id: "vitest",
    title: "Vitest",
    heading: "The next-generation test runner",
    desc: "Vitest is a feature-rich test runner that understands your Vite config, is Jest-compatible, and works out-of-the-box with TypeScript & ESM.",
    url: "https://vitest.dev",
    repo: "https://github.com/vitest-dev/vitest",
    stars: "16.7k",
    contributors: "764",
    image: "https://voidzero.dev/assets/vitest.C33Vbobj.png",
    icon: "https://voidzero.dev/assets/vitest-light.BeSPX0d3.svg",
    gradient: "bg-gradient-to-br from-[#72A52C] to-[#fcc72b]",
  },
  {
    id: "rolldown",
    title: "Rolldown",
    heading: "The blazing fast JavaScript bundler",
    desc: "Rolldown is a Rust-based bundler with Rollup-compatible API, and esbuild-equivalent performance & feature set. It also powers Vite version 8 and above.",
    url: "https://rolldown.rs",
    repo: "https://github.com/rolldown/rolldown",
    stars: "13.7k",
    contributors: "185",
    image: "https://voidzero.dev/assets/rolldown.CauT8S1f.svg",
    icon: "https://voidzero.dev/assets/rolldown-light.Su7w3UUn.svg",
    gradient: "bg-gradient-to-br from-[#FF5C00] to-[#FF9000]",
  },
  {
    id: "oxc",
    title: "Oxc",
    heading: "The fastest JavaScript language toolchain",
    desc: "Oxc is the foundation of our unified toolchain. It includes linter (oxlint), formatter (oxfmt), parser, resolver, transformer, and minifier, all with state-of-the-art performance.",
    url: "https://oxc.rs",
    repo: "https://github.com/oxc-project/oxc",
    stars: "21.5k",
    contributors: "395",
    image: "/assets/oxc-hero.png",
    icon: "https://voidzero.dev/assets/oxc-light.BlLWBvd-.svg",
    gradient: "bg-gradient-to-br from-[#1cd2ae] to-[#0f8b72]",
  }
];

export function VoidZeroOpenSource() {
  const [activeProject, setActiveProject] = useState("viteplus");
  const [revealedProjects, setRevealedProjects] = useState<string[]>(["viteplus"]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-project-id") || "";
            setActiveProject(id);
            setRevealedProjects((prev) => (prev.includes(id) ? prev : [...prev, id]));
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    const elements = document.querySelectorAll("[data-project-id]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="bg-primary text-white min-h-screen w-full px-2vw md:px-3 sm:px-0vw lg:px-7vw" data-theme="dark">
      {/* Top Header */}
      <section className="border-t border-x border-nickel p-5 md:pl-10 w-full max-w-7xl mx-auto ticks">
        <span className="text-nickel dark:text-white text-xs font-bold font-mono uppercase tracking-wide">OSS</span>
      </section>

      <section className="border-t border-x border-nickel px-10 h-48 sm:h-90 flex flex-col justify-center gap-5 w-full max-w-7xl mx-auto ticks">
        <h2 className="text-start text-white text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight">Open Source</h2>
        <p className="font-apk max-w-md text-balance text-white/70 text-base md:text-lg leading-relaxed">
          We are the creators, maintainers, and contributors of some of the most critical infrastructure projects in the JavaScript ecosystem.
        </p>
      </section>

      {/* Main Split Layout */}
      <section className="border-t border-x border-nickel flex flex-col md:flex-row relative w-full max-w-7xl mx-auto ticks">

        {/* Sticky Sidebar (Hidden on mobile <768px, shown on md and larger) */}
        <div className="w-72 p-10 sticky top-0 self-start hidden md:flex flex-col">
          <ul className="flex flex-col gap-4">
            {projects.map(p => (
              <li key={p.id}>
                <button 
                  type="button" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(p.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }} 
                  className="flex gap-4 text-sm md:text-base cursor-pointer bg-transparent border-none p-0 items-center hover:opacity-80 transition-opacity"
                >
                  <img 
                    src={p.icon} 
                    alt={p.title} 
                    className={`w-6 h-6 object-contain transition-all duration-500 ease-out ${activeProject === p.id ? "opacity-100" : "opacity-40 grayscale"}`} 
                  /> 
                  <span className={`transition-colors duration-500 ease-out font-apk font-medium ${activeProject === p.id ? "text-white/60" : "text-white/20"}`}>
                    {p.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content Columns */}
        <div className="w-full md:border-l border-nickel">
          {projects.map((p, idx) => (
            <div
              key={p.id}
              id={p.id}
              data-project-id={p.id}
              className={`grid lg:grid-cols-2 w-full ${idx > 0 ? "border-t border-nickel" : ""}`}
            >
              {/* Text Area */}
              <div className="flex flex-col p-10 justify-between gap-10 lg:gap-20">
                <div className="flex flex-col gap-5 max-w-[20rem] md:max-w-[26rem]">
                  <span className="text-grey text-xs md:text-[13px] font-mono uppercase tracking-wide">{p.title}</span>
                  <h4 className="font-apk text-white text-[1.35rem] md:text-[1.85rem] font-medium tracking-tight text-pretty leading-tight pr-0 md:pr-12 lg:pr-20">{p.heading}</h4>
                  <p className="font-apk text-white/70 text-base max-w-[24rem] text-pretty leading-[1.6] md:pr-10 lg:pr-14">
                    {p.desc}
                  </p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 mt-5 text-[15px] font-apk font-medium text-white bg-transparent border border-white/20 rounded-md hover:bg-white/10 transition-colors w-fit"
                  >
                    Explore {p.title}
                  </a>
                </div>

                {/* GitHub Stats */}
                <div className="flex gap-4 divide-nickel items-center bg-slate px-3 py-1 w-fit rounded-sm font-apk">
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-white">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                  {p.stars === "new" ? (
                    <div className="flex gap-1 items-baseline">
                      <span className="text-electric text-base tracking-tight font-medium">new</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex gap-1 items-baseline">
                        <span className="text-white text-base font-medium tracking-tight">{p.stars}</span>
                        <span className="text-grey text-base tracking-tight">stars</span>
                      </div>
                      {p.contributors && (
                        <div className="flex gap-1 items-baseline">
                          <span className="text-white text-base font-medium tracking-tight">{p.contributors}</span>
                          <span className="text-grey text-base tracking-tight">contributors</span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Graphic Area */}
              <div className={`flex flex-col ${p.id === 'viteplus' || p.id === 'vite' ? 'min-h-[16rem] sm:min-h-[30rem]' : p.id === 'vitest' ? 'min-h-[18rem] sm:min-h-[30rem]' : 'min-h-[22rem] sm:min-h-[30rem]'}`}>
                <div className={`relative pl-10 h-full flex flex-col ${p.id === 'vitest' ? 'justify-end pt-10 sm:pt-0' : p.id === 'rolldown' ? 'justify-center py-10 sm:py-0' : 'justify-center'} overflow-clip`}>
                  <div className={`absolute inset-0 bg-${p.id} transition-opacity duration-700 ease-out ${revealedProjects.includes(p.id) ? 'opacity-100' : 'opacity-0'}`}></div>
                  {p.id === 'oxc' ? (
                    <div className={`relative transition-transform duration-700 ease-out z-10 ${revealedProjects.includes(p.id) ? 'translate-x-0' : 'translate-x-10'} w-full flex items-center justify-center mt-6 md:mt-8`}>
                      <div className="touch-none select-none pointer-events-none w-full aspect-square">
                        <Rive src="/assets/oxc-animation.riv" stateMachines="State Machine 1" className="w-full h-full" />
                      </div>
                    </div>
                  ) : (
                    <div className={`block p-2 relative bg-slate rounded-tl ${p.id === 'vitest' ? '' : 'rounded-bl'} outline-1 outline-offset-[2px] outline-white/20 transition-transform duration-700 ease-out z-10 ${revealedProjects.includes(p.id) ? 'translate-x-0' : 'translate-x-10'} mt-6 md:mt-8`}>
                      <img loading="lazy" src={p.image} alt="terminal" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
