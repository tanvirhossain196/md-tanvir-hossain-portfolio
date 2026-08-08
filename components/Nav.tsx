"use client";

import { useEffect, useRef, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Sparkles,
  Award,
  Gamepad2,
  Mail,
  ArrowUpRight,
  Handshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const navLinks: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#academic", label: "Academic", icon: GraduationCap },
  { href: "#projects", label: "Projects", icon: FolderKanban },
  { href: "#skills", label: "Skills", icon: Sparkles },
  { href: "#certificates", label: "Certificates", icon: Award },
  { href: "#hobbies", label: "Hobbies", icon: Gamepad2 },
  { href: "#contact", label: "Contact", icon: Mail },
];

const RESUME_PDF_PATH = "/cv-pdf/MD_TANVIR_HOSSAIN_Resume.pdf";

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
    <span className="relative flex h-4 w-[22px] flex-col justify-between">
      <span
        className={`block h-[2px] w-full origin-center rounded-full bg-current transition-all duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] ${
          open ? "translate-y-[7px] rotate-45" : ""
        }`}
      />
      <span
        className={`block h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] ${
          open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
        }`}
      />
      <span
        className={`block h-[2px] w-full origin-center rounded-full bg-current transition-all duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] ${
          open ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

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
        className={`fixed inset-0 z-[90] bg-[#0e2a42]/60 backdrop-blur-[2px] transition-opacity duration-200 ease-[cubic-bezier(0.65,0,0.35,1)] lg:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel — a full-height sidebar that slides in from the right edge
          of the screen. It runs the full viewport height (sitting behind
          the navbar in stacking order) and shares the exact same solid
          color as the navbar, so the two read as one continuous surface
          with no seam or divider where they meet. */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!open ? "true" : "false"}
        className={`fixed inset-y-0 right-0 z-[95] w-[82vw] max-w-[360px] transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] will-change-transform lg:hidden ${
          open
            ? "pointer-events-auto translate-x-0"
            : "pointer-events-none translate-x-full"
        }`}
      >
        <div className="relative flex h-full flex-col overflow-hidden bg-[#0e2a42]">
          {/* Single-column nav list — scrolls internally if it overflows
              the sidebar's height. Top padding clears the fixed navbar
              that sits above this panel in stacking order. */}
          <ul className="relative m-0 flex min-h-0 flex-1 flex-col overflow-y-auto px-2 pt-[88px] pb-2 list-none">
            {navLinks.map((link, index) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id && id !== "home";
              const Icon = link.icon;
              const isLast = index === navLinks.length - 1;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    className={`group relative flex items-center gap-3 pl-5 pr-3.5 py-3 transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                      !isLast ? "border-b border-line/15" : ""
                    } ${
                      open
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0"
                    }`}
                    style={{
                      transitionDelay: open ? `${40 + index * 30}ms` : "0ms",
                    }}
                  >
                    {/* Active / hover accent bar on the far left edge */}
                    <span
                      className={`absolute left-0 top-1/2 w-[3px] -translate-y-1/2 rounded-r-full bg-[#64FFDA] transition-all duration-300 ${
                        isActive
                          ? "h-6 opacity-100"
                          : "h-3 opacity-0 group-hover:opacity-60"
                      }`}
                    />

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 ${
                        isActive
                          ? "border-[#64FFDA]/50 bg-[#64FFDA]/15 text-[#64FFDA]"
                          : "border-line/60 text-paperdim group-hover:border-[#64FFDA]/40 group-hover:text-[#64FFDA]"
                      }`}
                    >
                      <Icon size={15} strokeWidth={1.9} />
                    </span>

                    <span
                      className={`flex-1 font-sans text-[12.5px] font-medium uppercase tracking-[1.5px] transition-colors duration-300 ${
                        isActive
                          ? "text-paper"
                          : "text-paper/90 group-hover:text-paper"
                      }`}
                    >
                      {link.label}
                    </span>

                    <ArrowUpRight
                      size={14}
                      className={`shrink-0 transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 text-[#64FFDA] opacity-100"
                          : "-translate-x-1 text-paperdim opacity-0 group-hover:translate-x-0 group-hover:opacity-50"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div
            className={`relative border-t border-line/30 p-3 transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] ${
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
            style={{
              transitionDelay: open ? `${40 + navLinks.length * 30}ms` : "0ms",
            }}
          >
            <div className="flex items-center justify-center gap-8">
              <a
                href={RESUME_PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-center gap-2 rounded-md border border-[#F5F1E8]/60 bg-transparent px-4 py-3 font-sans text-[13px] font-semibold tracking-[1px] text-paper transition-colors duration-300 hover:border-[#64FFDA] hover:text-[#64FFDA] hover:bg-[#64FFDA]/10"
              >
                <DownloadIcon />
                Resume
              </a>

              <a
                href="https://wa.me/8801616122600"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-center gap-2 rounded-md border border-[#F5F1E8]/60 bg-transparent px-4 py-3 font-sans text-[13px] font-semibold tracking-[1px] text-paper transition-colors duration-300 hover:border-[#64FFDA] hover:text-[#64FFDA] hover:bg-[#64FFDA]/10"
              >
                <Handshake size={15} strokeWidth={2.2} />
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

type IndicatorState = { left: number; width: number; opacity: number };

export default function Nav() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [indicator, setIndicator] = useState<IndicatorState>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  // Tracks how far down the page the user has scrolled, as a 0–100
  // percentage, so the top accent bar can fill left-to-right as a scroll
  // progress indicator. Passive listener + rAF throttling keeps this
  // cheap even on long pages / low-end mobile devices.
  useEffect(() => {
    let ticking = false;

    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, pct)));
      ticking = false;
    }

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

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
      {/* Scroll progress bar — dim track spans the full width, filled bar
          grows left-to-right as the user scrolls down the page. */}
      <div className="fixed top-0 inset-x-0 h-[2px] z-[110] bg-line/20">
        <div
          className="h-full transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%`, backgroundColor: "#64FFDA" }}
        />
      </div>

      <nav
        className="fixed top-0 inset-x-0 z-[100] flex items-center justify-between px-5 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-[5vw] py-4 transition-colors duration-300"
        style={
          menuOpen
            ? { background: "#0e2a42" }
            : {
                background:
                  "linear-gradient(135deg, #0f182b 0%, #0d3450 55%, #0c4a6e 100%)",
                backgroundAttachment: "fixed",
                backgroundSize: "100vw 100vh",
                backgroundPosition: "top left",
              }
        }
      >
        {/* Logo - Left */}
        <a href="#home" className="group shrink-0 flex items-center">
          <Logo />
        </a>

        {/* Navigation Links - Center (desktop only) */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <ul className="relative flex items-center gap-1.5 xl:gap-2 list-none m-0 p-0">
            {/* Sliding Indicator */}
            <span
              className="absolute top-1/2 -translate-y-1/2 h-8 rounded-full bg-[#64FFDA]/10 border border-[#64FFDA]/50 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] pointer-events-none"
              style={{
                left: indicator.left,
                width: indicator.width,
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
                        : "text-paperdim/85 border-transparent hover:text-[#64FFDA]"
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
            className={`lg:hidden relative flex h-10 w-10 shrink-0 items-center justify-center transition-colors duration-300 ${
              menuOpen ? "text-[#64FFDA]" : "text-paperdim hover:text-[#64FFDA]"
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
