import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Atlas Routing Engine",
    description:
      "Distributed pathfinding service handling 12M+ daily route requests across a continental graph.",
    stack: ["Go", "Redis", "PostgreSQL", "gRPC"],
    href: "#",
  },
  {
    title: "Compass — Note Editor",
    description:
      "A minimalist, offline-first writing app with local-first sync and end-to-end encryption.",
    stack: ["React", "TypeScript", "CRDT", "Rust"],
    href: "#",
  },
  {
    title: "Loft Analytics",
    description:
      "Realtime product analytics platform with a hand-built query engine over a columnar store.",
    stack: ["Rust", "ClickHouse", "Kafka", "Next.js"],
    href: "#",
  },
  {
    title: "Field Notes",
    description:
      "A travel journal that turns GPX traces into illustrated, shareable expedition stories.",
    stack: ["Swift", "MapKit", "SwiftUI"],
    href: "#",
  },
];

export function Projects({ inHero = false }: { inHero?: boolean }) {
  return (
    <section
      id="projects"
      className={
        inHero
          ? "h-full overflow-hidden px-4 pb-4 pt-16 md:px-16 md:py-20"
          : "px-6 py-24 md:px-16 md:py-32"
      }
    >
      <div className="mx-auto max-w-6xl">
        <header
          className={
            inHero
              ? "mb-4 flex items-end justify-between gap-6 md:mb-16"
              : "mb-12 flex items-end justify-between gap-6 md:mb-16"
          }
        >
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
              01 — Selected Work
            </p>
            <h2
              className={
                inHero
                  ? "text-display text-2xl text-foreground sm:text-3xl md:text-6xl"
                  : "text-display text-4xl text-foreground md:text-6xl"
              }
            >
              Things I've built
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
            A small collection of products and systems I've shipped — each one a journey of its own.
          </p>
        </header>

        <div className="grid gap-px bg-border md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className={
                inHero
                  ? "group relative flex flex-col gap-2 bg-background p-3 transition-colors hover:bg-secondary sm:gap-3 sm:p-4 md:gap-6 md:p-10"
                  : "group relative flex flex-col gap-6 bg-background p-8 transition-colors hover:bg-secondary md:p-10"
              }
            >
              <div className="flex items-start justify-between gap-4">
                <h3
                  className={
                    inHero
                      ? "text-display text-lg text-foreground sm:text-xl md:text-3xl"
                      : "text-display text-2xl text-foreground md:text-3xl"
                  }
                >
                  {p.title}
                </h3>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
              <p
                className={
                  inHero
                    ? "overflow-hidden text-xs leading-snug text-muted-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] sm:text-sm md:text-base md:leading-relaxed"
                    : "text-sm leading-relaxed text-muted-foreground md:text-base"
                }
              >
                {p.description}
              </p>
              <div
                className={
                  inHero
                    ? "mt-auto flex flex-wrap gap-1.5 md:gap-2"
                    : "mt-auto flex flex-wrap gap-2"
                }
              >
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className={
                      inHero
                        ? "border border-border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground md:px-2.5 md:py-1 md:text-[10px]"
                        : "border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                    }
                  >
                    {s}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
