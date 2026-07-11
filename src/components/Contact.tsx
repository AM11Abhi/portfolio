import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", value: "hello@abhinav.dev", href: "mailto:hello@abhinav.dev" },
  { label: "GitHub", value: "github.com/abhinav", href: "https://github.com" },
  { label: "LinkedIn", value: "linkedin.com/in/abhinav", href: "https://linkedin.com" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-ink px-6 py-24 text-cream md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.4em] text-cream/60">
          07 — Get in touch
        </p>
        <h2 className="text-display max-w-3xl text-5xl leading-[0.95] text-cream md:text-7xl">
          Got a destination in mind? Let's plot a course.
        </h2>

        <div className="mt-16 grid gap-px bg-cream/10 md:grid-cols-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group flex items-center justify-between gap-4 bg-ink p-8 transition-colors hover:bg-cream/5"
            >
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-cream/50">
                  {l.label}
                </p>
                <p className="text-display text-lg text-cream md:text-xl">{l.value}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-cream/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cream" />
            </a>
          ))}
        </div>

        <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50">
          <span>© {new Date().getFullYear()} Abhinav. Built with curiosity.</span>
          <span className="font-mono uppercase tracking-widest">N172AB · cleared for takeoff</span>
        </footer>
      </div>
    </section>
  );
}
