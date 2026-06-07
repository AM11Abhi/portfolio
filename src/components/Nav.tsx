export function Nav() {
  const links = [
    { href: "#projects", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#" className="text-display text-lg font-semibold text-cream">
          A.
        </a>
        <ul className="hidden gap-8 text-xs font-medium uppercase tracking-[0.3em] text-cream md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-opacity hover:opacity-60">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <span className="font-mono text-[10px] uppercase tracking-widest text-cream">
          43.61°N · 116.20°W
        </span>
      </div>
    </nav>
  );
}
