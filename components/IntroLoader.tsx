"use client";

import { useEffect, useState } from "react";

type IntroLoaderProps = {
  /** Everything that should appear once the intro is done. */
  children: React.ReactNode;
  /** Shown as "[ FIRST.LAST ]" — split on the dot. */
  name?: string;
  /** Small uppercase line under the name. */
  title?: string;
  /** Total time (ms) from first paint to the page being fully visible. */
  duration?: number;
};

export default function IntroLoader({
  children,
  name = "TANVIR.HOSSAIN",
  title = "SOFTWARE ENGINEER · BANGLADESH",
  duration = 1000,
}: IntroLoaderProps) {
  const [percent, setPercent] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [mounted, setMounted] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setReduced(prefersReduced);

    // Reveal phase (bracket + wipe + counter) is 60% of the total time,
    // the iris-close exit takes the remaining 40%.
    const revealMs = prefersReduced ? 150 : Math.round(duration * 0.6);
    const exitMs = prefersReduced ? 150 : duration - revealMs;

    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / revealMs) * 100));
      setPercent(pct);
      if (elapsed < revealMs) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const exitTimer = setTimeout(() => setExiting(true), revealMs);
    const removeTimer = setTimeout(() => setMounted(false), revealMs + exitMs);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [duration]);

  const [first, last] = name.split(".");

  return (
    <>
      {/* Main page sits mounted underneath the whole time — nothing is
          delayed, it just becomes visible once the intro clears. */}
      <div
        className={`transition-opacity duration-500 ease-out ${
          exiting ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>

      {mounted && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0f182b 0%, #0d3450 55%, #0c4a6e 100%)",
            clipPath: exiting
              ? "circle(0% at 50% 50%)"
              : "circle(150% at 50% 50%)",
            transition: reduced
              ? "opacity 150ms ease-out"
              : "clip-path 400ms cubic-bezier(0.65,0,0.35,1)",
            opacity: reduced && exiting ? 0 : 1,
          }}
        >
          {/* Corner accents — quick snap, not a slow draw */}
          <div
            className="pointer-events-none absolute top-6 left-6 w-24 h-16 border-l border-t border-[#c9a659]/40"
            style={{ animation: "introSnapIn 260ms ease-out forwards" }}
          />
          <div
            className="pointer-events-none absolute bottom-6 right-6 w-24 h-16 border-r border-b border-[#c9a659]/40 opacity-0"
            style={{ animation: "introSnapIn 260ms ease-out 60ms forwards" }}
          />

          <div className="relative flex flex-col items-center px-6">
            {/* Bracketed name with a curtain-wipe reveal */}
            <div className="relative flex items-center gap-2.5 sm:gap-3">
              <span
                className="font-mono text-2xl sm:text-3xl text-[#c9a659] opacity-0"
                style={{ animation: "introBracket 260ms ease-out forwards" }}
              >
                [
              </span>

              <span className="relative overflow-hidden inline-block">
                <span className="font-serif text-2xl sm:text-4xl tracking-wide text-[#ECE8DC] whitespace-nowrap block">
                  {first}
                  <span className="text-[#c9a659]">.</span>
                  {last}
                </span>
                <span
                  className="absolute inset-0 bg-[#0d3450]"
                  style={{
                    animation:
                      "introWipe 420ms cubic-bezier(0.65,0,0.35,1) 60ms forwards",
                  }}
                />
              </span>

              <span
                className="font-mono text-2xl sm:text-3xl text-[#c9a659] opacity-0"
                style={{ animation: "introBracket 260ms ease-out forwards" }}
              >
                ]
              </span>
            </div>

            {/* Title */}
            <span
              className="mt-3 font-mono text-[10px] sm:text-[11px] tracking-[2px] sm:tracking-[3px] text-white/40 uppercase opacity-0"
              style={{ animation: "introFadeUp 300ms ease-out 200ms forwards" }}
            >
              {title}
            </span>

            {/* Progress line + live percentage */}
            <div className="mt-5 sm:mt-6 flex items-center gap-3 sm:gap-4 w-52 sm:w-64">
              <div className="relative h-px flex-1 bg-white/15 overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-[#c9a659]"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <span className="font-mono text-[10px] sm:text-[11px] tabular-nums text-[#c9a659] w-8 sm:w-9 text-right">
                {percent}%
              </span>
            </div>
          </div>

          <style>{`
            @keyframes introSnapIn {
              from { opacity: 0; transform: scale(0.85); }
              to { opacity: 1; transform: scale(1); }
            }
            @keyframes introBracket {
              from { opacity: 0; transform: translateY(4px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes introFadeUp {
              from { opacity: 0; transform: translateY(4px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes introWipe {
              from { transform: translateX(0%); }
              to { transform: translateX(101%); }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
