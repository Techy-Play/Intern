export function SundayNavbar() {
  const links = ["Product", "Solutions", "Pricing", "Resources"];

  return (
    <header className="rounded-full border border-black/10 bg-white/80 px-5 py-3 shadow-soft backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            Sunday.ai
          </p>
          <p className="text-lg font-semibold text-slate-900">Navbar Clone</p>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {links.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </nav>
        <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
          Get started
        </button>
      </div>
    </header>
  );
}
