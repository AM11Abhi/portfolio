import { InView } from "@/components/core/in-view";
import { FaJava, FaDatabase } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiPython,
  SiPytorch,
  SiFastapi,
  SiOpencv,
  SiGoogle, // Gemini API
  SiHuggingface,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiDocker,
  SiVercel,
  SiRender,
} from "react-icons/si";

const groups = [
  {
    label: "AI & Machine Learning",
    items: [
      { name: "Python", icon: SiPython },
      { name: "PyTorch", icon: SiPytorch },
      { name: "FastAPI", icon: SiFastapi },
      { name: "OpenCV", icon: SiOpencv },
      { name: "Gemini API", icon: SiGoogle },
      { name: "Hugging Face", icon: SiHuggingface },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
  {
    label: "Backend & Database",
    items: [
      { name: "Java", icon: FaJava },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
      { name: "PL/SQL", icon: FaDatabase },
    ],
  },
  {
    label: "Developer Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
      { name: "VS Code", icon: VscVscode },
    ],
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
          <h2 className="text-display text-4xl text-foreground md:text-5xl">What I reach for.</h2>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <InView
              key={g.label}
              variants={{
                hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{
                duration: 0.65,
                ease: "easeOut",
                delay: i * 0.08,
              }}
              viewOptions={{ amount: 0.15 }}
              once={true}
            >
              <div className="group flex flex-col h-full bg-background border border-border rounded-2xl p-8 md:p-10 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-foreground/20 hover:shadow-md">
                <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                  {g.label}
                </p>
                <ul className="space-y-4">
                  {g.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.name} className="flex items-center gap-3">
                        {Icon && (
                          <div className="text-muted-foreground transition-transform duration-200 ease-out group-hover:scale-[1.12]">
                            <Icon className="h-5 w-5" />
                          </div>
                        )}
                        <span className="text-display text-base text-foreground font-medium">
                          {item.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
