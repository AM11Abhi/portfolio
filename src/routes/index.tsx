import { createFileRoute } from "@tanstack/react-router";
import { HeroFlight } from "@/components/HeroFlight";

import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Nav } from "@/components/Nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhinav — Software Engineer & Builder" },
      {
        name: "description",
        content:
          "Personal portfolio of Abhinav — software engineer building products at the intersection of craft and scale.",
      },
      { property: "og:title", content: "Abhinav — Software Engineer & Builder" },
      {
        property: "og:description",
        content: "Exploration · Discovery · Building Things · Journey.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <HeroFlight />
      
      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
