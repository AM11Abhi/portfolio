const roles = [
  {
    year: "2023 — Now",
    role: "Senior Software Engineer",
    company: "Northwind Labs",
    detail:
      "Leading the platform team building developer infrastructure used by 4,000+ engineers across the company.",
  },
  {
    year: "2021 — 2023",
    role: "Software Engineer",
    company: "Cirrus & Co.",
    detail:
      "Shipped the realtime collaboration stack and rewrote the sync engine, cutting p99 latency by 68%.",
  },
  {
    year: "2019 — 2021",
    role: "Founding Engineer",
    company: "Meridian (acquired)",
    detail:
      "First engineer at a logistics startup. Built the routing service, the dashboard, and most of the AWS bill.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-secondary/40 px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
            03 — Experience
          </p>
          <h2 className="text-display text-4xl text-foreground md:text-5xl">
            The flight log.
          </h2>
        </header>

        <ol className="space-y-px bg-border">
          {roles.map((r) => (
            <li
              key={r.role}
              className="grid gap-4 bg-background p-8 transition-colors hover:bg-secondary md:grid-cols-12 md:gap-8 md:p-10"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {r.year}
                </p>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-display text-xl text-foreground md:text-2xl">
                  {r.role}
                </h3>
                <p className="text-sm text-muted-foreground">{r.company}</p>
              </div>
              <p className="text-sm leading-relaxed text-foreground/80 md:col-span-5">
                {r.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
