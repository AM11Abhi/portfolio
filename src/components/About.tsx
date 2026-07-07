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
        </div>
        <div className="space-y-8 md:col-span-7 md:col-start-6">
          <p className="text-lg leading-relaxed text-foreground/85">
            I'm a software engineer who treats every project like a small expedition — pick a
            direction worth walking in, pack light, and trust the path will reveal itself.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            I've spent the last several years building backend systems, developer tools, and
            consumer products at the intersection of craft and scale. I care about good interfaces,
            honest typography, and software that respects the people using it.
          </p>

          <div className="grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Education
              </p>
              <p className="text-sm text-foreground">B.Tech, Computer Science</p>
              <p className="text-sm text-muted-foreground">IIT — 2019</p>
            </div>
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Interests
              </p>
              <p className="text-sm text-foreground">Aviation, hiking, type design, espresso.</p>
            </div>
            <div className="sm:col-span-2">
              <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Looking ahead
              </p>
              <p className="text-sm text-foreground">
                Building tools that make complex systems feel calm — and starting something of my
                own worth a long flight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
