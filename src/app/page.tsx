import Link from "next/link";

const projects = [
  {
    title: "Sunday.ai Navbar Clone",
    description:
      "A compact navigation-focused route that mirrors the first assessment task.",
    href: "/sunday",
    accent: "from-orange-100 to-amber-50",
  },
  {
    title: "VoidZero Section Clone",
    description:
      "A polished section-driven route for the second assessment task.",
    href: "/voidzero",
    accent: "from-slate-100 to-blue-50",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16 md:px-10">
      <section className="space-y-8 rounded-[2rem] border border-black/10 bg-white/75 p-8 shadow-soft backdrop-blur md:p-12">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            Frontend Assessment
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            One repository, two routed projects.
          </h1>
          <p className="text-base leading-7 text-slate-600 md:text-lg">
            This workspace keeps both tasks together so the reviewer can jump to
            each implementation from a single landing page.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`rounded-[1.75rem] border border-black/10 bg-gradient-to-br ${project.accent} p-6 transition hover:-translate-y-1 hover:shadow-soft`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Project
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                {project.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {project.description}
              </p>
              <Link
                href={project.href}
                className="mt-6 inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Open Project
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
