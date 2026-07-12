import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import landingPixelArt from "@/assets/landing-pixel-art.png.png";
import cessna from "@/assets/cessna.png";
import { Projects } from "./Projects";
import { useIsMobile } from "@/hooks/use-mobile";

export function HeroFlight({
  onNavThemeChange,
}: {
  onNavThemeChange?: (theme: "hero" | "project") => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [isTransitionComplete, setIsTransitionComplete] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  // Airplane travels right -> left, then keeps moving away while the projects panel rests.
  const planeXRange = isMobile ? ["120vw", "-75vw", "-95vw"] : ["110vw", "-18vw", "-38vw"];
  const planeX = useTransform(p, [0, 0.9, 1], planeXRange);
  const planeY = useTransform(p, [0, 0.38, 0.9, 1], ["0vh", "-2vh", "0vh", "1vh"]);

  // Projects panel lands before the sticky section ends, creating a calmer pause at the top.
  const panelXRangeProgress = isMobile ? [0.22, 0.9, 1] : [0.05, 0.9, 1];
  const panelX = useTransform(p, panelXRangeProgress, ["110vw", "0vw", "0vw"]);
  useMotionValueEvent(p, "change", (latest) => {
    onNavThemeChange?.(latest > 0.55 ? "project" : "hero");
    setIsTransitionComplete(latest >= 0.9);
  });

  // Hero content gently parallaxes and fades as the panel covers it
  const heroOpacity = useTransform(p, [0.46, 0.9], [1, 0]);
  const heroScale = useTransform(p, [0, 1], [1, 1.05]);
  const skyY = useTransform(p, [0, 1], ["0%", "0%"]);

  const scrollHintOpacity = useTransform(p, [0, 0.05], [1, 0]);

  return (
    <section id="hero-flight" ref={ref} className="relative h-[260vh] md:h-[300vh]">
      <div className="sticky top-0 h-[100lvh] w-full overflow-hidden bg-cream">
        {/* Pixel art landscape hero */}
        <motion.div
          style={{ y: skyY, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src={landingPixelArt}
            alt="Pixel art mountain landscape with adventurer on a cliff"
            className="h-full w-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink/30" />
        </motion.div>

        {/* Hero typography — sits between distant and foreground mountains */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6"
        >
          <div className="w-full max-w-7xl">
            <p className="mb-3 text-center text-[10px] font-medium uppercase tracking-[0.4em] text-cream md:mb-4 md:text-xs drop-shadow-[0_2px_8px_rgba(20,30,60,0.7)]">
              Hello, I'm
            </p>
            <h1
              className="text-display text-center text-[24vw] leading-[0.85] text-cream md:text-[15vw] drop-shadow-[0_6px_30px_rgba(20,30,60,0.7)]"
              style={{ letterSpacing: "-0.06em" }}
            >
              Abhinav
            </h1>
          </div>
        </motion.div>

        {/* Sub-headline & scroll indicator below the mountains */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-x-0 bottom-6 z-30 flex flex-col items-center gap-6 px-6 text-center"
        >
          <p className="max-w-xl text-sm text-cream/90 md:text-base">
            Software Engineer & Builder — building products, exploring ideas, and creating digital
            experiences.
          </p>
          <motion.div
            style={{ opacity: scrollHintOpacity }}
            className="flex flex-col items-center gap-2 text-cream/80"
          >
            <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
            <span
              className="block h-4 w-px bg-cream/60"
              style={{ animation: "scroll-hint 1.8s ease-in-out infinite" }}
            />
          </motion.div>
        </motion.div>

        {/* Airplane — drags Projects panel from right to left */}
        <motion.div style={{ x: planeX, y: planeY }} className="absolute top-[38%] z-40">
          <div
            className="relative flex items-center"
            style={{ animation: "float-prop 4s ease-in-out infinite" }}
          >
            <img
              src={cessna}
              alt="Cessna aircraft"
              className="h-auto w-[195px] select-none drop-shadow-[0_20px_30px_rgba(20,30,60,0.25)] sm:w-[235px] md:w-[260px]"
              width={260}
              height={170}
            />
            {/* Tether line connecting tail to panel */}
            <div className="absolute left-full top-1/2 h-px w-[16vw] sm:w-[24vw] md:w-[12vw] -translate-y-1/2 bg-gradient-to-r from-ink/40 to-ink/10" />
          </div>
        </motion.div>

        {/* Projects panel — dragged in from the right */}
        <motion.div
          style={{ x: panelX }}
          className="absolute inset-y-0 right-0 z-30 w-full bg-background shadow-[-30px_0_80px_-20px_rgba(20,30,60,0.25)]"
        >
          <div className="h-full w-full overflow-hidden">
            <Projects inHero isScrollable={isTransitionComplete} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
