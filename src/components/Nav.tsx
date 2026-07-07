type NavTheme = "hero" | "project";

export function Nav({ theme = "hero" }: { theme?: NavTheme }) {
  const isHero = theme === "hero";
  const links = [
    { href: "#projects", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isHero ? "bg-transparent text-cream" : "bg-cream/85 text-ink shadow-sm backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a
          href="#"
          className={`text-display text-lg font-semibold transition-colors duration-300 ${
            isHero ? "text-cream" : "text-ink"
          }`}
        >
          A.
        </a>
        <ul
          className={`hidden gap-8 text-xs font-medium uppercase tracking-[0.3em] md:flex transition-colors duration-300 ${
            isHero ? "text-cream" : "text-ink"
          }`}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-opacity hover:opacity-60">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <span
          className={`font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 ${
            isHero ? "text-cream" : "text-ink"
          }`}
        >
          43.61°N · 116.20°W
        </span>
      </div>
    </nav>
  );
}
