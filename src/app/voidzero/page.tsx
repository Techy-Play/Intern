import { VoidZeroSection } from "@/components/voidzero/VoidZeroSection";

export default function VoidZeroPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-8 md:px-10 md:py-12">
      <div className="space-y-8">
        <VoidZeroSection />

        <section className="grid gap-4 md:grid-cols-3">
          {[
            ["Composable", "Clear building blocks for the section layout."],
            ["Focused", "Content hierarchy is kept front and center."],
            ["Assessment-ready", "Reviewers can inspect the route instantly."],
          ].map(([title, description]) => (
            <article
              key={title}
              className="rounded-[1.5rem] border border-black/10 bg-white/80 p-5 shadow-soft"
            >
              <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
