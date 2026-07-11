import { InView } from "@/components/core/in-view";
import profilePic from "@/assets/images/profile.jpg";

export function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
            02 — About
          </p>
          <h2 className="text-display text-4xl text-foreground md:text-5xl">
            A builder, quietly curious.
          </h2>
          <div className="mt-8">
            <InView
              variants={{
                hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              viewOptions={{ amount: 0.4 }}
              once={true}
            >
              <img
                src={profilePic}
                alt="Abhinav's portrait"
                className="about-portrait w-full max-w-[240px] sm:max-w-[220px] md:max-w-[260px] h-auto object-cover rounded-2xl shadow-sm transition-transform duration-200 ease-out"
              />
            </InView>
          </div>
        </div>
        <div className="space-y-8 md:col-span-7 md:col-start-6">
          <InView
            variants={{
              hidden: { opacity: 0, x: 24, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
            viewOptions={{ amount: 0.25 }}
            once={true}
          >
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-foreground/85">
                I'm a Computer Science student at Manipal University Jaipur who enjoys building software
                that solves practical problems. My interests span full-stack development, artificial
                intelligence, and building products that people genuinely find useful.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                I've built AI-powered applications, hackathon-winning solutions, developer tools, and
                full-stack web applications. From detecting manipulated images to automating developer
                workflows, I enjoy taking ideas from concept to deployment.
              </p>

              <div className="grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Education
                  </p>
                  <p className="text-sm text-foreground">B.Tech, Computer Science & Engineering</p>
                  <p className="text-sm text-muted-foreground">
                    Manipal University Jaipur (2023 – 2027)
                  </p>
                  <p className="text-sm text-muted-foreground">CGPA: 9.45/10</p>
                </div>
                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Interests
                  </p>
                  <p className="text-sm text-foreground">
                    Sports, Squash, Formula 1, Video Editing, Gaming, Defence
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Looking ahead
                  </p>
                  <p className="text-sm text-foreground">
                    I'm looking forward to contributing to products that impact real-world users while
                    continuing to learn, build, and explore emerging technologies.
                  </p>
                </div>
              </div>
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
}
