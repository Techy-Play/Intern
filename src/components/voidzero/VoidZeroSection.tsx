export function VoidZeroSection() {
  return (
    <section className="grid gap-8 rounded-[2rem] border border-slate-200 bg-[#f6f3ee] p-8 shadow-soft md:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
          VoidZero
        </p>
        <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          Section clone with a bold editorial rhythm.
        </h1>
        <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
          This route gives reviewers a focused clone that demonstrates layout,
          spacing, hierarchy, and component structure without changing the app
          shell.
        </p>
      </div>
      <div className="grid gap-4 rounded-[1.75rem] bg-slate-950 p-6 text-white">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-white/60">Focus</p>
          <p className="mt-1 text-2xl font-semibold">Design systems</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-white/60">Signal</p>
          <p className="mt-1 text-2xl font-semibold">Clear hierarchy</p>
        </div>
      </div>
    </section>
  );
}
