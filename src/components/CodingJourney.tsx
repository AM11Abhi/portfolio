import { useState, useEffect, useRef } from "react";
import { InView } from "@/components/core/in-view";
import { useInView, animate } from "motion/react";
import { SiLeetcode } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";

interface LeetCodeData {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalQuestions: number;
  easyTotal: number;
  mediumTotal: number;
  hardTotal: number;
}

const FALLBACK_DATA: LeetCodeData = {
  totalSolved: 305,
  easySolved: 116,
  mediumSolved: 175,
  hardSolved: 14,
  totalQuestions: 3985,
  easyTotal: 953,
  mediumTotal: 2081,
  hardTotal: 951,
};

export function CodingJourney() {
  const [data, setData] = useState<LeetCodeData>(FALLBACK_DATA);
  const [count, setCount] = useState(0);
  const [showStats, setShowStats] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/leetcode", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
              query getUserProfile($username: String!) {
                allQuestionsCount {
                  difficulty
                  count
                }
                matchedUser(username: $username) {
                  username
                  submitStats {
                    acSubmissionNum {
                      difficulty
                      count
                    }
                  }
                }
              }
            `,
            variables: { username: "0kcDnxvcmq" },
          }),
        });

        if (!response.ok) throw new Error("Failed to fetch");
        const json = await response.json();

        if (json.data && json.data.matchedUser) {
          const stats = json.data.matchedUser.submitStats.acSubmissionNum;
          const questions = json.data.allQuestionsCount;

          const totalSolved = stats.find((s: any) => s.difficulty === "All")?.count || 0;
          const easySolved = stats.find((s: any) => s.difficulty === "Easy")?.count || 0;
          const mediumSolved = stats.find((s: any) => s.difficulty === "Medium")?.count || 0;
          const hardSolved = stats.find((s: any) => s.difficulty === "Hard")?.count || 0;

          const totalQuestions = questions.find((q: any) => q.difficulty === "All")?.count || 0;
          const easyTotal = questions.find((q: any) => q.difficulty === "Easy")?.count || 0;
          const mediumTotal = questions.find((q: any) => q.difficulty === "Medium")?.count || 0;
          const hardTotal = questions.find((q: any) => q.difficulty === "Hard")?.count || 0;

          setData({
            totalSolved,
            easySolved,
            mediumSolved,
            hardSolved,
            totalQuestions,
            easyTotal,
            mediumTotal,
            hardTotal,
          });
        }
      } catch (error) {
        console.error("Error fetching LeetCode data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (isInView && data.totalSolved > 0) {
      const controls = animate(0, data.totalSolved, {
        duration: 1.2,
        ease: "easeOut",
        onUpdate: (value) => setCount(Math.round(value)),
        onComplete: () => {
          setShowStats(true);
          setTimeout(() => {
            setShowButton(true);
          }, 300);
        },
      });
      return () => controls.stop();
    }
  }, [isInView, data.totalSolved]);

  const easyPercentage = (data.easySolved / data.easyTotal) * 100;
  const mediumPercentage = (data.mediumSolved / data.mediumTotal) * 100;
  const hardPercentage = (data.hardSolved / data.hardTotal) * 100;

  return (
    <section
      id="coding-journey"
      className="relative border-t border-border px-6 py-24 md:px-16 md:py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.30]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="mb-16 text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
            05 — Coding Journey
          </p>
          <h2 className="text-display text-4xl text-foreground md:text-5xl mb-4">Coding Journey</h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Building problem-solving, one challenge at a time.
          </p>
        </header>

        <InView
          variants={{
            hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewOptions={{ amount: 0.25 }}
          once={true}
        >
          <div
            ref={containerRef}
            className="group max-w-xl mx-auto bg-background border border-border rounded-2xl p-8 md:p-12 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-foreground/20 hover:shadow-md flex flex-col items-center"
          >
            {/* Header / Logo */}
            <div className="flex items-center gap-2 mb-6">
              <SiLeetcode className="text-[#FFA116] h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                LeetCode Stats
              </span>
            </div>

            {/* Total Solved Emphasis */}
            <div className="text-center mb-10">
              <div className="text-6xl md:text-7xl font-bold font-display text-foreground tracking-tight select-none">
                {count}
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground mt-2">
                Total Problems Solved
              </p>
            </div>

            {/* Stats Breakdown */}
            <div
              className={`w-full grid gap-6 md:grid-cols-3 mb-10 transition-all duration-700 ease-out ${
                showStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {/* Easy Card */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                  <span className="text-[#00B8A3] uppercase tracking-wider">Easy</span>
                  <span className="text-foreground/80 font-mono">
                    {data.easySolved}{" "}
                    <span className="text-muted-foreground">/ {data.easyTotal}</span>
                  </span>
                </div>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#00B8A3] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${showStats ? easyPercentage : 0}%` }}
                  />
                </div>
              </div>

              {/* Medium Card */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                  <span className="text-[#FFC01E] uppercase tracking-wider">Medium</span>
                  <span className="text-foreground/80 font-mono">
                    {data.mediumSolved}{" "}
                    <span className="text-muted-foreground">/ {data.mediumTotal}</span>
                  </span>
                </div>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#FFC01E] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${showStats ? mediumPercentage : 0}%` }}
                  />
                </div>
              </div>

              {/* Hard Card */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                  <span className="text-[#EF4743] uppercase tracking-wider">Hard</span>
                  <span className="text-foreground/80 font-mono">
                    {data.hardSolved}{" "}
                    <span className="text-muted-foreground">/ {data.hardTotal}</span>
                  </span>
                </div>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#EF4743] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${showStats ? hardPercentage : 0}%` }}
                  />
                </div>
              </div>
            </div>

            {/* View Profile Button */}
            <div
              className={`transition-all duration-700 ease-out ${
                showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="https://leetcode.com/u/0kcDnxvcmq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border bg-background text-[10px] font-medium uppercase tracking-widest text-foreground transition-all duration-300 hover:bg-secondary hover:border-foreground/30 hover:shadow-sm"
              >
                View Profile
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
