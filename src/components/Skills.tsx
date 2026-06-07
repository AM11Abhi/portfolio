const groups = [
  {
    label: "Languages",
    items: ["TypeScript", "Go", "Rust", "Python", "Swift", "SQL"],
  },
  {
    label: "Systems",
    items: ["PostgreSQL", "Redis", "Kafka", "ClickHouse", "gRPC", "GraphQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "TanStack", "Tailwind", "Framer Motion"],
  },
  {
    label: "Infra & Tools",
    items: ["AWS", "Cloudflare", "Terraform", "Docker", "Linear", "Figma"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-border px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
            04 — Toolkit
          </p>
          <h2 className="text-display text-4xl text-foreground md:text-5xl">
            What I reach for.
          </h2>
        </header>

        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.label} className="bg-background p-8 md:p-10">
              <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {g.label}
              </p>
              <ul className="space-y-2.5">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="text-display text-xl text-foreground md:text-2xl"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
