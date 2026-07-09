import { useState, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    title: "PR Summarizer",
    description:
      "AI-powered GitHub Action that automatically summarizes Pull Requests using Google Gemini. It extracts code diffs, processes them, generates concise AI summaries, and posts them as comments directly on Pull Requests, helping streamline the code review process.",
    stack: ["GitHub Actions", "Python", "Google Gemini API", "YAML"],
    github: "https://github.com/AM11Abhi/pr-summarizer",
    live: "",
  },
];

const moreProjects = [
  {
    title: "FaujiConnect",
    description:
      "Community platform for military families featuring secure authentication, real-time chat, and dedicated community spaces.",
    stack: ["React", "Node.js", "Firebase"],
    github: "https://github.com/AM11Abhi/faujiconnect",
    live: "https://faujiconnect.vercel.app/",
  },
  {
    title: "Email Reminder System",
    description:
      "Full-stack reminder application that schedules and automatically sends reminder emails.",
    stack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/AM11Abhi/emailremindersystem",
    live: "",
  },
];

export function Projects({
  inHero = false,
  isScrollable = false,
}: {
  inHero?: boolean;
  isScrollable?: boolean;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <section
      id="projects"
      className={
        inHero
          ? `h-full no-scrollbar px-4 pb-4 pt-16 md:px-16 md:py-20 ${
              isScrollable
                ? "overflow-y-auto pointer-events-auto"
                : "overflow-hidden pointer-events-none"
            }`
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

          {/* View More Projects Card */}
          <div
            onClick={() => setIsModalOpen(true)}
            className={
              (inHero
                ? "group relative flex flex-col justify-center items-center bg-background p-4 transition-colors hover:bg-secondary sm:p-6 md:p-10"
                : "group relative flex flex-col justify-center items-center bg-background p-8 transition-colors hover:bg-secondary md:p-10") +
              " cursor-pointer text-center min-h-[120px] md:min-h-[160px] md:col-span-2"
            }
          >
            <h3
              className={
                inHero
                  ? "font-display text-sm text-muted-foreground group-hover:text-foreground transition-colors sm:text-base md:text-lg flex items-center gap-2 font-medium"
                  : "font-display text-base text-muted-foreground group-hover:text-foreground transition-colors md:text-lg flex items-center gap-2 font-medium"
              }
            >
              View More Projects{" "}
              <span className="transition-transform group-hover:translate-x-1.5 duration-300">
                →
              </span>
            </h3>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/65 backdrop-blur-md cursor-default pointer-events-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-background border border-border p-6 md:p-10 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-6 border-b border-border mb-6">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground mb-1">
                    Archive
                  </p>
                  <h3 className="text-display text-2xl text-foreground md:text-3xl">
                    More Projects
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-muted-foreground hover:text-foreground p-2 transition-colors border border-border/80 hover:border-border rounded-none"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Body / Scrollable Grid */}
              <div className="overflow-y-auto pr-1 space-y-6 flex-1">
                <div className="grid gap-4 sm:grid-cols-2">
                  {moreProjects.map((p) => (
                    <div
                      key={p.title}
                      onClick={() =>
                        window.open(p.live || p.github, "_blank", "noopener,noreferrer")
                      }
                      className="group relative flex flex-col gap-4 border border-border bg-background p-6 transition-colors hover:bg-secondary cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="text-display text-lg text-foreground md:text-xl font-medium">
                          {p.title}
                        </h4>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {p.description}
                      </p>
                      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-2">
                        <div className="flex flex-wrap gap-1.5">
                          {p.stack.map((s) => (
                            <span
                              key={s}
                              className="border border-border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-wider">
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
