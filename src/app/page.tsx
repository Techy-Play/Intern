import Link from "next/link";

const projects = [
  {
    title: "Sunday.ai Navbar Clone",
    description:
      "A compact navigation-focused route that mirrors the first assessment task, featuring intricate dropdowns and responsive design.",
    href: "/sunday",
    glow: "hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.4)]",
    borderHover: "group-hover:border-orange-500/50",
    textGradient: "from-orange-400 to-amber-300",
    bgGradient: "from-orange-500/10 to-amber-500/5",
  },
  {
    title: "VoidZero Section Clone",
    description:
      "A polished, section-driven route for the second assessment task featuring deep dark mode aesthetics, interactive 3D elements, and complex layout grids.",
    href: "/voidzero",
    glow: "hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.4)]",
    borderHover: "group-hover:border-sky-500/50",
    textGradient: "from-sky-400 to-blue-500",
    bgGradient: "from-sky-500/10 to-blue-500/5",
  },
];

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050505] font-sans text-white selection:bg-white/20">
      {/* Dynamic Background Elements */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-600/15 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-20 md:px-10">
        <div className="mb-16 md:mb-24 text-center space-y-6">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Frontend Assessment
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-10">
          {projects.map((project) => (
            <Link href={project.href} key={project.title} className={`group block outline-none rounded-[2rem] transition-all duration-500 ease-out hover:-translate-y-2 ${project.glow}`}>
              <article
                className={`relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-8 transition-colors duration-500 ${project.borderHover}`}
              >
                {/* Background Subtle Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                
                <div className="relative z-10 space-y-4">
                  <h2 className={`text-3xl font-bold tracking-tight bg-gradient-to-br ${project.textGradient} bg-clip-text text-transparent`}>
                    {project.title}
                  </h2>
                  <p className="text-base leading-relaxed text-white/60">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 mt-12 flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-wide text-white/80 group-hover:text-white transition-colors">
                    Explore Project
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 group-hover:translate-x-2 group-hover:bg-white/20">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
