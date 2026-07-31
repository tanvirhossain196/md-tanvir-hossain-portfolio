"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaGithub, FaTimes, FaExpand, FaExternalLinkAlt } from "react-icons/fa";
import SectionWatermark from "@/components/SectionWatermark";

type Project = {
  id: string;
  tag: string;
  category: string;
  title: string;
  desc: string;
  fullDesc: string;
  image: string;
  github?: string;
  live?: string; // Live/deployed project URL
  techTags: string[];
};

const projects: Project[] = [
  {
    id: "event-flow",
    tag: "REACT.JS · NODE.JS · EXPRESS.JS · SUPABASE",
    category: "WEB APPLICATION",
    title: "Event Flow",
    desc: "Full-stack university event management and recommendation system with secure authentication, QR-based attendance, and media management.",
    fullDesc:
      "Developed a full-stack university event management and recommendation system with secure authentication, QR-based attendance, and Cloudinary integration for media management.",
    image: "/images/projects/event-flow.jpg",
    github:
      "https://github.com/tanvirhossain196/University-Event-Management-Platform-EventFlow",
    live: "https://eventflow-ewu.vercel.app/",
    techTags: [
      "React.js",
      "Node.js",
      "Express.js",
      "Supabase",
      "Prisma",
      "Passport.js",
      "Cloudinary",
    ],
  },
  {
    id: "surepay",
    tag: "NODE.JS · EXPRESS.JS · POSTGRESQL · NGINX",
    category: "MOBILE BANKING SYSTEM",
    title: "SurePay",
    desc: "Secure mobile banking backend with SSL encryption and an NGINX reverse proxy for load balancing and performance.",
    fullDesc:
      "Built a secure mobile banking backend with Node.js, Express.js, and PostgreSQL, implementing SSL encryption and NGINX reverse proxy for load balancing and performance.",
    image: "/images/projects/surepay.jpg",
    github: "https://github.com/tanvirhossain196/SurePay",
    live: "https://surepay.vercel.app/",
    techTags: ["Node.js", "Express.js", "PostgreSQL", "NGINX"],
  },
  {
    id: "learnroom",
    tag: "HTML5 · CSS · JAVASCRIPT · NODE.JS · MONGODB",
    category: "WEB APPLICATION",
    title: "Learnroom",
    desc: "Role-based online classroom platform with secure authentication and RESTful APIs for managing users, courses, and assignments.",
    fullDesc:
      "Developed a role-based online classroom platform with secure authentication and RESTful APIs for managing users, courses, and assignments.",
    image: "/images/projects/learnroom.jpg",
    github: "https://github.com/tanvirhossain196/Google-Classroom",
    live: "https://classroom479.vercel.app/",
    techTags: [
      "HTML5",
      "CSS",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Passport.js",
    ],
  },
  {
    id: "mess-management",
    tag: "JAVA · ANDROID STUDIO · FIREBASE",
    category: "MOBILE APPLICATION",
    title: "Mess Manage",
    desc: "Mobile app for managing mess members, daily meals, and monthly expense calculations with real-time data storage.",
    fullDesc:
      "Designed and developed a mobile application for managing mess members, daily meals, and monthly expense calculations. Implemented real-time data storage and authentication using Firebase to ensure secure and efficient data handling.",
    image: "/images/projects/mess-management.jpg",
    github: "#",
    live: "#",
    techTags: ["Java", "Android Studio", "Firebase"],
  },
];

export default function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);
  const [panelVisible, setPanelVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closePanel = () => {
    setPanelVisible(false);
    // Wait for the slide-out transition to finish before unmounting.
    setTimeout(() => setActive(null), 300);
  };

  // Slide the right-side panel in on mount, and lock body scroll +
  // close on Escape while it's open.
  useEffect(() => {
    if (!active) return;
    const id = requestAnimationFrame(() => setPanelVisible(true));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(id);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <section
      id="projects"
      className="relative z-[2] py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden border-b border-line"
      style={{
        background:
          "linear-gradient(345deg, #1e4160 0%, #15304a 55%, #102539 100%)",
      }}
    >
      {/* Glowing top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#64FFDA]/70 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#64FFDA]/30 to-transparent blur-[2px]" />

      {/* Glowing bottom line — same treatment as the top line, just lighter */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#64FFDA]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#64FFDA]/15 to-transparent blur-[2px]" />

      <div className="px-5 sm:px-[5vw] max-w-[1460px] mx-auto relative">
        <SectionWatermark text="Work" />
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <div className="font-mono text-[#64FFDA] text-[11px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-2 sm:mb-3">
            Portfolio
          </div>
          <h2 className="font-display text-[clamp(28px,6vw,50px)] text-paper px-2">
            Featured{" "}
            <em className="text-[#64FFDA] not-italic italic">Projects</em>
          </h2>
          <p className="text-paperdim text-sm sm:text-base mt-2.5 sm:mt-3 px-4 sm:px-0">
            Crafting Excellence — A Showcase of My Creative Journey
          </p>
        </div>

        {/* Card grid — big screenshot on top, slim title bar with an expand
            icon underneath, and a centered 3-icon hover toolbar (Github /
            Live / Expand) exactly matching the reference card style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {projects.map((p) => (
            <div
              key={p.id}
              className="text-left rounded-lg border border-[#F5F1E8]/20 overflow-hidden group relative"
            >
              <div className="h-56 sm:h-64 lg:h-72 relative overflow-hidden bg-[#0d1f36]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-[filter] duration-500 ease-out group-hover:blur-[8px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300" />

                <div className="absolute inset-0 z-30 flex items-start sm:items-center justify-end sm:justify-center p-2.5 sm:p-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center rounded-md sm:rounded-lg bg-[#0d1f36]/90 border border-[#64FFDA]/30 overflow-hidden scale-100 sm:scale-90 sm:group-hover:scale-100 transition-transform duration-300">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Github Repository"
                        className="flex items-center justify-center px-2.5 py-1.5 sm:px-6 sm:py-3 border-r border-white/20 text-paper hover:text-[#64FFDA] transition-colors duration-300"
                      >
                        <FaGithub className="text-sm sm:text-lg" />
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Link"
                        className="flex items-center justify-center px-2.5 py-1.5 sm:px-6 sm:py-3 border-r border-white/20 text-paper hover:text-[#64FFDA] transition-colors duration-300"
                      >
                        <FaExternalLinkAlt className="text-xs sm:text-base" />
                      </a>
                    )}
                    <button
                      type="button"
                      aria-label="Expand"
                      onClick={() => setActive(p)}
                      className="flex items-center justify-center px-2.5 py-1.5 sm:px-6 sm:py-3 text-paper hover:text-[#64FFDA] transition-colors duration-300"
                    >
                      <FaExpand className="text-xs sm:text-base" />
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 sm:py-3.5"
                style={{
                  background:
                    "linear-gradient(165deg, #16324a 0%, #112742 55%, #0d1f36 100%)",
                }}
              >
                <span className="font-display text-sm sm:text-base text-paper truncate">
                  {p.title}
                </span>
                <button
                  type="button"
                  aria-label="Expand"
                  onClick={() => setActive(p)}
                  className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-white/20 flex items-center justify-center text-paper hover:text-[#64FFDA] hover:border-[#64FFDA]/70 transition-colors duration-300"
                >
                  <FaExpand size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAIL PANEL — rendered via a portal straight onto document.body
          so it escapes this section's stacking context entirely and
          always sits above the fixed Nav (z-[100]), sliding in from the
          right with the page dimmed/blurred behind it. */}
      {mounted &&
        active &&
        createPortal(
          <div className="fixed inset-0 z-[300]">
            {/* Dimmed + blurred backdrop — lets the page (nav, cards) show
                through faintly on the left, same as the reference. */}
            <div
              className={`absolute inset-0 bg-[#050b14]/60 backdrop-blur-[3px] transition-opacity duration-300 ease-out ${
                panelVisible ? "opacity-100" : "opacity-0"
              }`}
              onClick={closePanel}
            />

            {/* Sliding panel */}
            <div
              className={`absolute top-0 right-0 h-full w-full sm:w-[63%] overflow-y-auto shadow-[-30px_0_60px_-25px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out ${
                panelVisible ? "translate-x-0" : "translate-x-full"
              }`}
              style={{
                background:
                  "linear-gradient(to top right, #0c4a6e 0%, #0e314c 50%, #163457 100%)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closePanel}
                aria-label="Close"
                className="absolute top-5 left-5 sm:top-8 sm:left-8 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/30 border border-line flex items-center justify-center text-paper hover:border-[#64FFDA] hover:text-[#64FFDA] transition-colors"
              >
                <FaTimes size={14} />
              </button>

              <div className="px-6 sm:px-10 lg:px-12 pt-20 sm:pt-24 pb-14 sm:pb-16">
                {/* Fixed-height frame, transparent background — image
                    always fits fully inside (no crop, no overflow/scroll)
                    whether it's wide+short or narrow+tall; object-contain
                    keeps its own aspect ratio and centers it. */}
                <div className="w-full sm:w-[55%] mx-auto mb-8 sm:mb-10">
                  <div className="h-64 sm:h-72 md:h-80 flex items-center justify-center bg-transparent">
                    <img
                      src={active.image}
                      alt={active.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-paper mb-2 sm:mb-3 whitespace-nowrap overflow-hidden text-ellipsis">
                  {active.title}
                </h3>
                <span className="inline-block font-sans text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-paper bg-[#0a192f] mb-5 sm:mb-6">
                  {active.category}
                </span>

                <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-2.5 sm:gap-3 mb-8 sm:mb-10">
                  {active.techTags.map((t) => (
                    <span
                      key={t}
                      className="shrink-0 font-sans text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-paper bg-[#0a192f]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-6 sm:gap-8 mt-10 sm:mt-16">
                  {active.github && (
                    <a
                      href={active.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-mono text-sm sm:text-base uppercase tracking-wide text-paper hover:text-[#64FFDA] transition-colors duration-300"
                    >
                      <FaGithub
                        size={18}
                        className="transition-transform duration-300 group-hover:rotate-[360deg]"
                      />
                      Github
                    </a>
                  )}
                  {active.live && (
                    <a
                      href={active.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-mono text-sm sm:text-base uppercase tracking-wide text-paper hover:text-[#64FFDA] transition-colors duration-300"
                    >
                      <FaExternalLinkAlt
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                      Live Link
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
