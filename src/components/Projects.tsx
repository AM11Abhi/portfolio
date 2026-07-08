import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "SSBPrep",
    description:
      "Full-stack SSB preparation platform featuring timed psychological tests, AI-powered mock interviews with voice mode, and a responsive user experience.",
    stack: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/AM11Abhi/ssbprep",
    live: "https://ssbprep.vercel.app/",
  },
  {
    title: "TruthLens",
    description:
      "AI-powered image tampering detector that classifies and localizes manipulated regions using a 4-channel ResNet18 model, Grad-CAM++, and Error Level Analysis.",
    stack: ["PyTorch", "FastAPI", "React"],
    github: "https://github.com/AM11Abhi/tampering-detector",
    live: "",
  },
  {
    title: "VisionSat",
    description:
      "Satellite land-cover classification platform with CNN/ResNet models, Grad-CAM visualizations, and real-time inference through a modern web interface.",
    stack: ["Python", "Flask", "TypeScript", "Docker", "Hugging Face"],
    github: "https://github.com/swaekaa/VisionSat",
    live: "https://vision-sat.vercel.app/",
  },
  {
    title: "FaujiConnect",
    description:
      "Community platform for military families featuring secure authentication, real-time chat, and dedicated community spaces.",
    stack: ["React", "Node.js", "Firebase"],
    github: "https://github.com/AM11Abhi/faujiconnect",
    live: "https://faujiconnect.vercel.app/",
  },
  {
    title: "PR Summarizer",
    description:
      "AI-powered GitHub Action that automatically summarizes Pull Requests using Google Gemini. It extracts code diffs, processes them, generates concise AI summaries, and posts them as comments directly on Pull Requests, helping streamline the code review process.",
    stack: ["GitHub Actions", "Python", "Google Gemini API", "YAML"],
    github: "https://github.com/AM11Abhi/pr-summarizer",
    live: "",
  },
  {
    title: "Email Reminder System",
    description:
      "Full-stack reminder application that lets users schedule emails for future dates and automatically sends them using a background scheduler. Includes reminder management, UTC-based scheduling, and automated email delivery.",
    stack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/AM11Abhi/emailremindersystem",
    live: "",
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
            <div
              key={p.title}
              onClick={() => window.open(p.live || p.github, "_blank", "noopener,noreferrer")}
              className={
                (inHero
                  ? "group relative flex flex-col gap-2 bg-background p-3 transition-colors hover:bg-secondary sm:gap-3 sm:p-4 md:gap-6 md:p-10"
                  : "group relative flex flex-col gap-6 bg-background p-8 transition-colors hover:bg-secondary md:p-10") +
                " cursor-pointer"
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
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                <div
                  className={inHero ? "flex flex-wrap gap-1.5 md:gap-2" : "flex flex-wrap gap-2"}
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
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-wider">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Github
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
