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

// Kept identical in color, with extra intermediate stops so the fade
// renders smoothly instead of banding.
const GRADIENT =
  "linear-gradient(135deg, #0f182b 0%, #0e2a44 28%, #0d3450 55%, #0c3f60 78%, #0c4a6e 100%)";

export default function IntroLoader({
  children,
  name = "TANVIR.HOSSAIN",
  title = "SOFTWARE ENGINEER · BANGLADESH",
  duration = 1500,
}: IntroLoaderProps) {
  const [percent, setPercent] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // The full duration is spent on the reveal (bracket + wipe + counter).
    // Once it's done, the switch to the real page is instant — no fade,
    // no transition, just a normal change.
    const revealMs = prefersReduced ? 150 : duration;

    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / revealMs) * 100));
      setPercent(pct);
      if (elapsed < revealMs) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const switchTimer = setTimeout(() => {
      setExiting(true);
    }, revealMs);

    // Overlay stays mounted for the fade's duration, then unmounts.
    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, revealMs + 500);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(switchTimer);
      clearTimeout(unmountTimer);
    };
  }, [duration]);

  const [first, last] = name.split(".");

  const statusLabel =
    percent < 30
      ? "INITIALIZING"
      : percent < 65
        ? "LOADING MODULES"
        : percent < 95
          ? "RENDERING INTERFACE"
          : "SYSTEM READY";

  // Same swap as before — overlay out, page in — just eased over 0.5s
  // instead of snapping instantly.
  const overlayStyle: React.CSSProperties = {
    backgroundImage: GRADIENT,
    opacity: exiting ? 0 : 1,
    transition: "opacity 500ms ease",
  };

  const pageStyle: React.CSSProperties = {
    opacity: exiting ? 1 : 0,
    transition: "opacity 500ms ease",
  };

  return (
    <>
      {/* Main page sits mounted underneath the whole time — nothing is
          delayed, it just becomes visible once the intro clears. */}
      <div style={pageStyle}>{children}</div>

      {mounted && (
        <div
          className="fixed inset-0 z-[999] overflow-hidden flex items-center justify-center px-6"
          style={overlayStyle}
        >
          {/* Noise overlay — breaks up gradient banding so the fade reads
              as perfectly smooth, with no visible horizontal line streaks */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* Corner accents — quick snap, not a slow draw */}
          <div
            className="pointer-events-none absolute top-6 left-6 w-20 h-14 border-l border-t border-[#c9a659]/40"
            style={{ animation: "introSnapIn 260ms ease-out forwards" }}
          />
          <div
            className="pointer-events-none absolute bottom-6 right-6 w-20 h-14 border-r border-b border-[#c9a659]/40 opacity-0"
            style={{ animation: "introSnapIn 260ms ease-out 60ms forwards" }}
          />

          {/* Centered content — rides with the sheet as one solid unit,
              no separate motion of its own */}
          <div>
            <div className="relative flex flex-col items-center">
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
                style={{
                  animation: "introFadeUp 300ms ease-out 200ms forwards",
                }}
              >
                {title}
              </span>

              {/* Progress line — one continuous smooth fill, no segments */}
              <div className="mt-6 flex flex-col items-center gap-2 w-56 sm:w-64">
                <div className="relative h-px w-full bg-white/15 overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#c9a659] transition-[width] duration-150 ease-out"
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <div className="flex items-center justify-between w-full font-mono text-[9px] sm:text-[10px] tracking-[1.5px] text-white/35 uppercase">
                  <span>{statusLabel}</span>
                  <span className="text-[#c9a659] tabular-nums">
                    {percent}%
                  </span>
                </div>
              </div>
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
