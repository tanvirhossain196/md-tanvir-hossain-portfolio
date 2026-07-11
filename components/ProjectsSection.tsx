"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaYoutube, FaTimes, FaPlay } from "react-icons/fa";
import SectionWatermark from "@/components/SectionWatermark";

type Project = {
  id: string;
  tag: string;
  category: string;
  title: string;
  desc: string;
  fullDesc: string;
  image: string;
  videoId?: string; // YouTube video ID only, e.g. "dQw4w9WgXcQ"
  github?: string;
  youtube?: string;
  techTags: string[];
};

const projects: Project[] = [
  {
    id: "inventory",
    tag: "C#",
    category: "WEB APPLICATION",
    title: "Inventory Management System",
    desc: "Full-stack system for stock tracking, product management & order processing.",
    fullDesc:
      "A full-stack web-based Inventory Management System designed to streamline stock tracking, product management, and order processing. Admins can add, update, and delete products, monitor stock levels in real time, and generate detailed reports for business insights.",
    image: "/images/projects/inventory-management.jpg",
    videoId: "VIDEO_ID_HERE",
    github: "#",
    youtube: "#",
    techTags: ["C#", "MySQL"],
  },
  {
    id: "dhaka-city-view",
    tag: "C++ · OPENGL",
    category: "COMPUTER GRAPHICS",
    title: "Dhaka City View",
    desc: "Cinematic visual project capturing the vibrant life and culture of Dhaka.",
    fullDesc:
      "A 2D/3D computer graphics project built with OpenGL and C++, recreating a cinematic scene of Dhaka city — animated traffic, buildings, and a moving city skyline rendered in real time.",
    image: "/images/projects/dhaka-city-view.jpg",
    videoId: "UDEKJ0RBK_c",
    github: "#",
    youtube: "https://www.youtube.com/watch?v=UDEKJ0RBK_c",
    techTags: ["C++", "OpenGL", "Animation"],
  },
  {
    id: "smart-iot-plant",
    tag: "IOT",
    category: "EMBEDDED SYSTEM",
    title: "Smart IoT Plant Care System",
    desc: "Automated plant monitoring using sensors, microcontrollers and Firebase.",
    fullDesc:
      "An automated plant watering and monitoring system built with ESP8266, soil moisture sensors, a rain sensor, and an LCD display. Sends real-time alerts and logs data to Firebase for remote monitoring.",
    image: "/images/projects/smart-iot-plant.jpg",
    videoId: "VIDEO_ID_HERE",
    github: "#",
    youtube: "#",
    techTags: ["ESP8266", "IoT", "Firebase"],
  },
  {
    id: "wireless-transmitter",
    tag: "HARDWARE",
    category: "DIY PROJECT",
    title: "Wireless Transmitter",
    desc: "RF-based wireless data transmitter built on embedded systems and circuit design.",
    fullDesc:
      "A DIY RF-based wireless transmitter and receiver circuit built from scratch on a breadboard, covering signal transmission, receiver circuitry, and embedded systems fundamentals.",
    image: "/images/projects/wireless-transmitter.jpg",
    videoId: "VIDEO_ID_HERE",
    github: "#",
    youtube: "#",
    techTags: ["Embedded Systems", "RF Circuit"],
  },
  {
    id: "hostel-management",
    tag: "HTML · CSS · JS · PHP · MYSQL",
    category: "WEB APPLICATION",
    title: "Hostel Management System",
    desc: "Complete system for room booking, fee tracking and student management.",
    fullDesc:
      "A complete web-based hostel management solution with room management, booking system, fee & payment tracking, complaint system, and automated reports — built with HTML, CSS, JavaScript, PHP, and MySQL.",
    image: "/images/projects/hostel-management.jpg",
    videoId: "VIDEO_ID_HERE",
    github: "#",
    youtube: "#",
    techTags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: "payoo-wallet",
    tag: "HTML · TAILWIND · DAISYUI · JAVASCRIPT",
    category: "MOBILE WEB APP",
    title: "Payoo — Mobile Wallet Web App",
    desc: "A Bangladesh-focused digital wallet web application featuring money transfer, mobile recharge, bill payment, QR transactions, finance tools, and 40+ wallet features.",
    fullDesc:
      "Payoo is a Bangladesh-focused digital wallet web application featuring money transfer, mobile recharge, bill payment, QR transactions, finance tools, and over 40 wallet features — built with a mobile-first responsive UI using Tailwind CSS and DaisyUI.",
    image: "/images/projects/payoo-wallet.jpg",
    videoId: "VIDEO_ID_HERE",
    github: "#",
    youtube: "#",
    techTags: ["HTML", "Tailwind CSS", "DaisyUI", "JavaScript"],
  },
];

// Same sparse programming-glyph motif as VideoCV/About/Academic, repositioned
// once again for variety. Kept faint so it doesn't fight the project cards.
const glyphs = [
  {
    text: "</>",
    top: 8,
    left: 6,
    size: 22,
    rotate: -9,
    duration: 9,
    delay: 0.2,
  },
  {
    text: "{ }",
    top: 78,
    left: 92,
    size: 20,
    rotate: 7,
    duration: 10,
    delay: 0.9,
  },
  {
    text: "01",
    top: 20,
    left: 95,
    size: 13,
    rotate: 0,
    duration: 8,
    delay: 0.5,
  },
  { text: ";", top: 90, left: 5, size: 18, rotate: 0, duration: 7, delay: 1.3 },
  {
    text: "git push origin",
    top: 14,
    left: 74,
    size: 11,
    rotate: 4,
    duration: 11,
    delay: 0.5,
  },
  {
    text: "function build() {}",
    top: 94,
    left: 46,
    size: 11,
    rotate: -3,
    duration: 9,
    delay: 1.6,
  },
  {
    text: "0x9E",
    top: 5,
    left: 40,
    size: 12,
    rotate: -6,
    duration: 10,
    delay: 1.1,
  },
  {
    text: "()",
    top: 55,
    left: 2,
    size: 20,
    rotate: 0,
    duration: 8,
    delay: 0.3,
  },
  {
    text: "npm test",
    top: 96,
    left: 18,
    size: 11,
    rotate: 3,
    duration: 9,
    delay: 1,
  },
];

// A muted echo of the VideoCV/About/Academic navy gradient, layered at low
// opacity on top of this section's own bg-bgsoft base — ties the section
// into the same visual family without matching it exactly, since this
// section keeps its own divider lines and slightly different surface color.
function ProjectsBackdrop() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(5,11,20,0.55) 0%, rgba(10,31,48,0.38) 55%, rgba(14,44,66,0.25) 100%)",
        }}
      />
      <style>{`
        @keyframes projectsGlyphDrift {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
      {glyphs.map((g, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: `${g.top}%`,
            left: `${g.left}%`,
            transform: `rotate(${g.rotate}deg)`,
          }}
        >
          <span
            className="font-mono text-paperdim/15 whitespace-nowrap select-none"
            style={{
              fontSize: g.size,
              display: "inline-block",
              animation: `projectsGlyphDrift ${g.duration}s ease-in-out ${g.delay}s infinite`,
            }}
          >
            {g.text}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);

  // Lock body scroll + close on Escape while modal is open
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  return (
    <section
      id="projects"
      className="relative z-[2] py-[70px] overflow-hidden bg-bgsoft/60 border-b border-line"
    >
      <ProjectsBackdrop />

      {/* Glowing top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#64FFDA]/70 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#64FFDA]/30 to-transparent blur-[2px]" />

      <div className="px-[5vw] max-w-[1460px] mx-auto relative">
        <SectionWatermark text="Work" />
        <div className="text-center mb-16">
          <div className="font-mono text-[#64FFDA] text-xs tracking-[3px] uppercase mb-3">
            Portfolio
          </div>
          <h2 className="font-display text-[clamp(32px,5vw,50px)] text-paper">
            My Amazing{" "}
            <em className="text-[#64FFDA] not-italic italic">Work</em>
          </h2>
          <p className="text-paperdim mt-3">
            Crafting Excellence — A Showcase of My Creative Journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(p)}
              className="text-left rounded-xl border border-line backdrop-blur-sm overflow-hidden group relative transition-all duration-300 hover:border-[#64FFDA]/60 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-15px_rgba(100,255,218,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#64FFDA]/60"
              style={{ backgroundColor: "#06121e" }}
            >
              {/* Diagonal shine sweep — same treatment as the Academic
                  section cards, for a consistent "signature" hover motion
                  across the site. Sits above everything, pointer-events
                  disabled so it never blocks the button click. */}
              <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
                <div className="absolute top-0 -left-1/2 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-[#64FFDA]/15 to-transparent -translate-x-[120%] group-hover:translate-x-[420%] transition-transform duration-[1100ms] ease-out" />
              </div>

              <div className="h-56 relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#64FFDA] flex items-center justify-center text-[#0A0A0C] shadow-lg scale-75 group-hover:scale-100 transition-transform duration-300">
                    <FaPlay size={16} className="ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <span className="font-mono text-[10px] tracking-wide uppercase px-3 py-1.5 rounded-full border border-[#64FFDA]/40 bg-[#64FFDA]/10 text-[#64FFDA] inline-block mb-3 group-hover:border-[#64FFDA]/70 group-hover:bg-[#64FFDA]/15 transition-colors">
                  {p.tag}
                </span>
                <h3 className="font-display text-lg text-paper">{p.title}</h3>
                <p className="text-paperdim text-sm mt-2 leading-relaxed">
                  {p.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-4 font-mono text-xs uppercase tracking-wide text-[#64FFDA]">
                  View Project
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActive(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-line bg-panelsolid shadow-2xl animate-[fadeIn_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 border border-line flex items-center justify-center text-paper hover:border-[#64FFDA] hover:text-[#64FFDA] transition-colors"
            >
              <FaTimes size={14} />
            </button>

            <div className="aspect-video w-full bg-black">
              {active.videoId && active.videoId !== "VIDEO_ID_HERE" ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${active.videoId}?autoplay=1`}
                  title={active.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="p-8">
              <span className="font-mono text-[10px] tracking-wide uppercase px-3 py-1.5 rounded-full border border-[#64FFDA]/40 text-[#64FFDA] inline-block mb-4">
                {active.category}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-paper mb-4">
                {active.title}
              </h3>
              <p className="text-paperdim text-sm leading-relaxed mb-6">
                {active.fullDesc}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {active.techTags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-3 py-1.5 rounded-md bg-bgsoft border border-line text-paperdim"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {active.github && (
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide px-5 py-3 rounded-md border border-[#64FFDA]/50 text-[#64FFDA] hover:bg-[#64FFDA]/10 hover:border-[#64FFDA] transition-colors"
                  >
                    <FaGithub size={14} /> Github Repository
                  </a>
                )}
                {active.youtube && (
                  <a
                    href={active.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide px-5 py-3 rounded-md bg-[#64FFDA] text-[#0A0A0C] font-semibold hover:brightness-110 transition-all"
                  >
                    <FaYoutube size={14} /> Watch on YouTube
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
