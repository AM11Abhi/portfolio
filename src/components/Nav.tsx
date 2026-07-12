import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

type NavTheme = "hero" | "project";

export function Nav({ theme = "hero" }: { theme?: NavTheme }) {
  const isHero = theme === "hero";
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const links = [
    { href: "#projects", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Automatically close mobile menu and reset layout when switching to desktop width
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleBreakpointChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        setIsMenuOpen(false);
        document.body.style.overflow = "";
      }
    };

    // Run initially
    handleBreakpointChange(mediaQuery);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleBreakpointChange);
    } else {
      mediaQuery.addListener(handleBreakpointChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleBreakpointChange);
      } else {
        mediaQuery.removeListener(handleBreakpointChange);
      }
    };
  }, []);

  // Handle scroll position directly to reset to hero state at top of page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("hero");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section using IntersectionObserver
  useEffect(() => {
    const sections = [
      "projects",
      "about",
      "experience",
      "skills",
      "coding-journey",
      "gallery",
      "contact",
    ];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-20% 0px -60% 0px",
          threshold: 0,
        },
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  // Map page sections to main navigation items
  const getMappedActiveLink = (section: string) => {
    if (section === "projects") return "#projects";
    if (section === "about") return "#about";
    if (["experience", "skills", "coding-journey", "gallery"].includes(section))
      return "#experience";
    if (section === "contact") return "#contact";
    return "";
  };

  const mappedActiveLink = getMappedActiveLink(activeSection);

  // Custom smooth scroll logic that prevents jumpiness and sequences the hero flight
  const smoothScrollTo = (targetHref: string) => {
    setIsScrolling(true);
    const startScroll = window.scrollY;
    let endScroll = 0;

    if (targetHref === "#" || targetHref === "") {
      endScroll = 0;
    } else {
      const targetElement = document.getElementById(targetHref.replace("#", ""));
      const heroElement = document.getElementById("hero-flight");

      if (!targetElement) {
        setIsScrolling(false);
        return;
      }

      if (targetHref === "#projects" && heroElement) {
        // Scroll exactly to the completion state of the sticky hero plane transition
        const scrollableHeight = heroElement.offsetHeight - window.innerHeight;
        endScroll = heroElement.offsetTop + scrollableHeight * 0.92;
      } else {
        endScroll = targetElement.offsetTop;
      }
    }

    const duration = 500; // Snappy yet smooth 500ms scroll transition
    const startTime = performance.now();

    const easeOutCubic = (t: number) => {
      return 1 - Math.pow(1 - t, 3);
    };

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      const currentScroll = startScroll + (endScroll - startScroll) * easedProgress;
      window.scrollTo(0, currentScroll);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (isScrolling) return; // Prevent repeated clicks during animation
    smoothScrollTo(href);
  };

  // Dynamically resolve navigation styles to blend with the current section background
  const getNavClasses = (section: string, isHeroMode: boolean) => {
    if (isHeroMode) {
      return {
        bg: "bg-transparent",
        text: "text-cream",
        border: "border-transparent",
      };
    }

    switch (section) {
      case "projects":
        return {
          bg: "bg-background",
          text: "text-ink",
          border: "border-border/30",
        };
      case "about":
        return {
          bg: "bg-background",
          text: "text-ink",
          border: "border-border/30",
        };
      case "experience":
        return {
          bg: "bg-[#EAEDF1] dark:bg-secondary/45",
          text: "text-ink",
          border: "border-border/30",
        };
      case "skills":
        return {
          bg: "bg-background",
          text: "text-ink",
          border: "border-border/30",
        };
      case "coding-journey":
        return {
          bg: "bg-background",
          text: "text-ink",
          border: "border-border/30",
        };
      case "gallery":
        return {
          bg: "bg-[#F8F5EE] dark:bg-secondary/10",
          text: "text-ink",
          border: "border-border/30",
        };
      case "contact":
        return {
          bg: "bg-ink",
          text: "text-cream",
          border: "border-cream/10",
        };
      default:
        return {
          bg: "bg-background",
          text: "text-ink",
          border: "border-border/30",
        };
    }
  };

  const navClasses = getNavClasses(activeSection, isHero);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "bg-background text-ink border-transparent"
            : `${navClasses.bg} ${navClasses.text} border-b ${navClasses.border}`
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 transition-all duration-500 ease-in-out ${
            isHero ? "py-6" : "py-3.5"
          }`}
        >
          <a
            href="#"
            onClick={(e) => handleNavLinkClick(e, "#")}
            className={`text-display font-semibold transition-all duration-500 ease-in-out ${
              isHero ? "text-lg" : "text-base"
            }`}
          >
            A.
          </a>

          {/* Desktop Links */}
          <ul
            className={`hidden gap-8 font-medium uppercase transition-all duration-500 ease-in-out md:flex ${
              isHero ? "text-xs tracking-[0.3em]" : "text-[11px] tracking-[0.25em]"
            }`}
          >
            {links.map((l) => {
              const isLinkActive = mappedActiveLink === l.href;
              return (
                <li key={l.href} className="relative">
                  <a
                    href={l.href}
                    onClick={(e) => handleNavLinkClick(e, l.href)}
                    className="relative block py-1 transition-opacity hover:opacity-60"
                  >
                    {l.label}
                    {isLinkActive && (
                      <motion.span
                        layoutId="activeNavUnderline"
                        className="absolute left-0 right-0 -bottom-1 h-[1.5px] bg-current"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Coordinates / Mobile Toggle */}
          <div className="flex items-center">
            <span
              className={`hidden md:inline font-mono uppercase tracking-widest transition-all duration-500 ease-in-out ${
                isHero ? "text-[10px]" : "text-[9px]"
              }`}
            >
              43.61°N · 116.20°W
            </span>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 -mr-2 focus:outline-none transition-opacity hover:opacity-60"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background text-ink md:hidden overflow-hidden"
          >
            {/* Background Grid Pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.30]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, var(--border) 1px, transparent 1px),
                  linear-gradient(to bottom, var(--border) 1px, transparent 1px)
                `,
                backgroundSize: "72px 72px",
                maskImage: "radial-gradient(circle, black 35%, transparent 90%)",
                WebkitMaskImage: "radial-gradient(circle, black 35%, transparent 90%)",
              }}
            />

            <ul className="relative z-10 flex flex-col items-center gap-8 text-lg font-medium uppercase tracking-[0.4em] text-center">
              {links.map((l, idx) => {
                const isLinkActive = mappedActiveLink === l.href;
                return (
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                    key={l.href}
                  >
                    <a
                      href={l.href}
                      onClick={(e) => {
                        setIsMenuOpen(false);
                        handleNavLinkClick(e, l.href);
                      }}
                      className="relative py-2 block hover:opacity-60 transition-opacity"
                    >
                      {l.label}
                      {isLinkActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-current" />
                      )}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
