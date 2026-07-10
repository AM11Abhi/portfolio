import deloitteLogo from "@/assets/logos/deloitte.svg";
import pwcLogo from "@/assets/logos/pwc.svg";
import jpmorganLogo from "@/assets/logos/jpmorgan.svg";

const roles = [
  {
    year: "June 2026 — August 2026",
    role: "Summer Intern",
    company: "Deloitte – Digital Excellence Centre",
    detail:
      "Worked as a Full-Stack Development Intern, contributing to enterprise applications and gaining hands-on experience building scalable software solutions in a professional development environment.",
    logo: deloitteLogo,
    logoClass: "h-[34px] md:h-[43px]",
  },
  {
    year: "January 2026 — July 2026",
    role: "PwC Advisory Launchpad Program Trainee",
    company: "PwC India",
    detail:
      "Completed the PwC Advisory Launchpad Program, developing consulting, analytical, and problem-solving skills through structured training, case studies, and industry-oriented learning.",
    logo: pwcLogo,
    logoClass: "h-[30px] md:h-[39px]",
  },
  {
    year: "June 2025",
    role: "Winner – JPMorgan Chase Code for Good Hackathon",
    company: "JPMorgan Chase & Co.",
    detail:
      "Selected among 200+ finalists from a nationwide pool of 1000+ applicants for JPMorgan Chase Code for Good 2025. Collaborated in a 6-member team to build a React.js and Node.js solution for a nonprofit organization within 24 hours, securing 1st place.",
    logo: jpmorganLogo,
    logoClass: "h-[35px] md:h-[44px]",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border bg-secondary/40 px-6 py-24 md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-16">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
            03 — Experience
          </p>
          <h2 className="text-display text-4xl text-foreground md:text-5xl">The flight log.</h2>
        </header>

        <ol className="space-y-px bg-border">
          {roles.map((r) => (
            <li
              key={r.role}
              className="group grid gap-4 bg-background p-8 transition-colors hover:bg-secondary md:grid-cols-12 md:gap-8 md:p-10"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {r.year}
                </p>
                {r.logo && (
                  <img
                    src={r.logo}
                    alt={`${r.company} logo`}
                    className={`mt-4 block w-auto object-contain transition-transform duration-200 ease-in-out group-hover:scale-[1.10] ${r.logoClass}`}
                  />
                )}
              </div>
              <div className="md:col-span-4">
                <h3 className="text-display text-xl text-foreground md:text-2xl">{r.role}</h3>
                <p className="text-sm text-muted-foreground">{r.company}</p>
              </div>
              <p className="text-sm leading-relaxed text-foreground/80 md:col-span-5">{r.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
