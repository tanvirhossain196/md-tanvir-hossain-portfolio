"use client";

import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#academic", label: "Academic" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certificates" },
  { href: "#hobbies", label: "Hobbies" },
  { href: "#contact", label: "Contact" },
];

const RESUME_PDF_PATH = "/cv-pdf/MD_TANVIR_HOSSAIN_CV.pdf";

function DownloadIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function Logo() {
  return (
    <svg
      viewBox="0 0 252 170"
      className="h-7 w-auto transition-transform duration-300 group-hover:scale-105"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="thLogoGradient"
          x1="0"
          y1="0"
          x2="252"
          y2="170"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#64FFDA" />
          <stop offset="100%" stopColor="#64FFDA" />
        </linearGradient>
      </defs>

      <path
        d="M0,0 H146 V25 H87 V170 H58 V25 H0 Z"
        fill="url(#thLogoGradient)"
        fillOpacity="0.95"
        stroke="#64FFDA"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      <path
        d="M117,38 H146 V72 H223 V0 H252 V170 H223 V96 H146 V170 H117 Z"
        fill="url(#thLogoGradient)"
        fillOpacity="0.95"
        stroke="#64FFDA"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Hamburger that morphs into an X. Built from 3 individually animated bars
// rather than an icon-font/svg-swap, so the morph itself is the animation
// (nothing "pops" in/out — it smoothly rotates/slides into the X shape).
function MenuToggleIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-[14px] w-[18px] flex-col justify-between">
      <span
        className={`block h-[2px] w-full origin-center rounded-full bg-current transition-all duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] ${
          open ? "translate-y-[6px] rotate-45" : ""
        }`}
      />
      <span
        className={`block h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] ${
          open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
        }`}
      />
      <span
        className={`block h-[2px] w-full origin-center rounded-full bg-current transition-all duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] ${
          open ? "-translate-y-[6px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

// The slide-down mobile panel + its backdrop. Kept as its own component so
// Nav() itself stays readable. Design language matches the rest of the
// site (monospace index numbers, accent glow, hairline borders) instead of
// a generic full-screen white/black dropdown — meant to feel like part of
// this portfolio, not a default UI-kit component.
function MobileMenu({
  open,
  onClose,
  activeSection,
}: {
  open: boolean;
  onClose: () => void;
  activeSection: string;
}) {
  return (
    <>
      {/* Backdrop — click anywhere here (i.e. outside the panel) to close.
          Sits at a lower z-index than <nav>, so clicks on the navbar /
          hamburger itself are never swallowed by this layer. */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-[90] bg-[#050b14]/70 backdrop-blur-sm transition-opacity duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] lg:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!open ? "true" : "false"}
        className={`fixed inset-x-4 top-[72px] z-[95] origin-top transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] lg:hidden ${
          open
            ? "pointer-events-auto translate-y-0 scale-y-100 opacity-100"
            : "pointer-events-none -translate-y-3 scale-y-95 opacity-0"
        }`}
      >
        <div className="relative overflow-hidden rounded-2xl border border-[#64FFDA]/25 bg-[#0a1420]/95 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.75)] backdrop-blur-2xl">
          {/* Ambient corner glows — same visual language as the hero backdrop */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#64FFDA]/10 blur-[60px]" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#64FFDA]/5 blur-[60px]" />
          {/* Oversized watermark glyph, matches the hero's "</>" motif */}
          <div className="pointer-events-none absolute -bottom-6 -right-4 select-none font-mono text-[90px] font-bold leading-none text-[#64FFDA]/[0.04]">
            {"</>"}
          </div>

          <ul className="relative flex flex-col gap-0.5 p-3">
            {navLinks.map((link, index) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id && id !== "home";

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    className={`group flex items-center gap-3.5 rounded-xl border px-4 py-3.5 transition-all duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                      open
                        ? "translate-x-0 opacity-100"
                        : "translate-x-5 opacity-0"
                    } ${
                      isActive
                        ? "border-[#64FFDA]/40 bg-[#64FFDA]/10 text-paper"
                        : "border-transparent text-paperdim/70 hover:border-[#64FFDA]/30 hover:bg-[#64FFDA]/[0.06] hover:text-paper"
                    }`}
                    style={{
                      transitionDelay: open ? `${70 + index * 45}ms` : "0ms",
                    }}
                  >
                    <span className="font-mono text-[10px] tabular-nums text-[#64FFDA]/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-[13px] font-medium uppercase tracking-[2px]">
                      {link.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="ml-auto text-[#64FFDA] opacity-0 transition-opacity duration-300 group-hover:opacity-70"
                    >
                      &rarr;
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div
            className={`relative border-t border-line/30 p-3 transition-all duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] ${
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{
              transitionDelay: open ? `${70 + navLinks.length * 45}ms` : "0ms",
            }}
          >
            <a
              href={RESUME_PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-xl border border-[#64FFDA]/80 bg-transparent px-5 py-3 font-sans text-[13px] font-semibold tracking-[1px] text-[#64FFDA] transition-colors duration-300 hover:bg-[#64FFDA] hover:text-[#0A0A0C]"
            >
              <DownloadIcon />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

type IndicatorState = { left: number; width: number; opacity: number };

export default function Nav() {
  const [activeSection, setActiveSection] = useState("home");
  const [indicator, setIndicator] = useState<IndicatorState>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeSection === "home") {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
      return;
    }
    const index = navLinks.findIndex(
      (link) => link.href.replace("#", "") === activeSection,
    );
    const el = linkRefs.current[index];
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
    }
  }, [activeSection]);

  // Lock background scroll while the mobile menu is open, and make sure
  // Escape closes it too (keyboard users, not just mouse/touch).
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  // If the viewport grows past the `lg` breakpoint while the mobile menu
  // is open (e.g. rotating a tablet, or resizing a browser window), make
  // sure it doesn't stay stuck open once the desktop nav reappears.
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close the mobile menu automatically whenever the active section
  // changes (i.e. the user actually navigated somewhere).
  useEffect(() => {
    setMenuOpen(false);
  }, [activeSection]);

  return (
    <>
      <div className="fixed top-0 inset-x-0 h-[2px] z-[110] bg-gradient-to-r from-accent via-accentsoft to-accent" />

      <nav className="fixed top-0 inset-x-0 z-[100] flex items-center justify-between px-5 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-[5vw] py-4 bg-bg/30 backdrop-blur-xl border-b border-line/40 shadow-[0_4px_30px_rgba(0,0,0,0.25)]">
        {/* Logo - Left */}
        <a href="#home" className="group shrink-0 flex items-center">
          <Logo />
        </a>

        {/* Navigation Links - Center (desktop only) */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <ul className="relative flex items-center gap-1.5 xl:gap-2 list-none m-0 p-0">
            {/* Sliding Indicator */}
            <span
              className="absolute top-1/2 -translate-y-1/2 h-8 rounded-full bg-[#64FFDA]/10 border border-[#64FFDA]/50 shadow-[0_0_16px_-2px_rgba(100,255,218,0.45)] transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] pointer-events-none"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.opacity,
              }}
            />
            {/* Glowing Dot */}
            <span
              className="absolute -top-2.5 -translate-y-0 w-1 h-1 rounded-full bg-[#64FFDA] shadow-[0_0_8px_2px_rgba(100,255,218,0.7)] transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] pointer-events-none"
              style={{
                left: indicator.width
                  ? indicator.left + indicator.width / 2 - 2
                  : 0,
                opacity: indicator.opacity,
              }}
            />

            {navLinks.map((link, index) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id && id !== "home";

              return (
                <li key={link.href}>
                  <a
                    ref={(el) => {
                      linkRefs.current[index] = el;
                    }}
                    href={link.href}
                    className={`relative z-10 font-sans text-[11px] lg:text-[12px] font-medium tracking-[2px] uppercase px-3.5 lg:px-4 py-1.5 rounded-full border transition-all duration-300 whitespace-nowrap ${
                      isActive
                        ? "text-paper border-transparent"
                        : "text-paperdim/65 border-transparent hover:text-paper hover:bg-[#64FFDA]/10 hover:border-[#64FFDA]/50 hover:shadow-[0_0_16px_-2px_rgba(100,255,218,0.45)]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right side: Resume button (desktop) + hamburger (mobile/tablet) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={RESUME_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 font-sans text-[12px] lg:text-[12.5px] font-semibold tracking-[1px] px-5 py-2.5 border border-[#64FFDA]/80 text-[#64FFDA] rounded-md bg-transparent hover:bg-[#64FFDA] hover:text-[#0A0A0C] transition-colors duration-300 whitespace-nowrap"
          >
            <DownloadIcon />
            Resume
          </a>

          {/* Hamburger / close toggle — only shown below `lg`, exactly
              where the desktop nav links are hidden. */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen ? "true" : "false"}
            className={`lg:hidden relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              menuOpen
                ? "border-[#64FFDA]/60 bg-[#64FFDA]/10 text-[#64FFDA] shadow-[0_0_16px_-2px_rgba(100,255,218,0.45)]"
                : "border-line/60 text-paperdim hover:border-[#64FFDA]/50 hover:text-[#64FFDA]"
            }`}
          >
            <MenuToggleIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
