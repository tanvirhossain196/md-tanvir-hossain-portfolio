import SectionWatermark from "@/components/SectionWatermark";
import { FaReact, FaJava, FaGithub } from "react-icons/fa";
import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiPhp,
  SiFigma,
  SiGit,
  SiDocker,
} from "react-icons/si";

const techIconMap: Record<string, { icon: IconType; color: string }> = {
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  React: { icon: FaReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  Express: { icon: SiExpress, color: "#FFFFFF" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Python: { icon: SiPython, color: "#3776AB" },
  Java: { icon: FaJava, color: "#EA2D2E" },
  "C++": { icon: SiCplusplus, color: "#00599C" },
  PHP: { icon: SiPhp, color: "#8892BF" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: FaGithub, color: "#FFFFFF" },
  Docker: { icon: SiDocker, color: "#2496ED" },
};

const skillGroups = [
  {
    icon: "🖥️",
    title: "Frontend",
    desc: "Building responsive, interactive and visually polished user interfaces.",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"],
    accent: "#3b82f6", // blue
  },
  {
    icon: "🗄️",
    title: "Backend",
    desc: "Developing robust server-side logic, REST APIs and database-driven apps.",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    accent: "#22c55e", // green
  },
  {
    icon: "🧠",
    title: "Languages",
    desc: "Strong foundation in object-oriented and systems programming.",
    items: ["TypeScript", "Python", "Java", "C++", "C", "PHP"],
    accent: "#a855f7", // violet
  },
  {
    icon: "🛠️",
    title: "Tools",
    desc: "Industry-standard tools for design, version control and productivity.",
    items: ["Figma", "Git", "GitHub", "Docker"],
    accent: "#f59e0b", // amber
  },
];

export default function SkillsSection() {
  return (
    // Full-bleed section: gradient + glyphs cover the entire section width
    // (edge to edge), same treatment as VideoCV/About/Academic. The
    // max-width/padding constraint lives on the inner wrapper div instead.
    <section
      id="skills"
      className="relative z-[2] w-full py-16 sm:py-20 md:py-24 lg:py-[110px] overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #050b14 0%, #0a1f30 55%, #0e2c42 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10 px-[5vw] max-w-[1480px] mx-auto">
        <SectionWatermark text="Skills" />
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="font-mono text-[#64FFDA] text-xs tracking-[3px] uppercase mb-3">
            Expertise
          </div>
          <h2 className="font-serif font-normal text-[clamp(32px,5vw,52px)] text-paper tracking-tight">
            Earned <em className="text-[#64FFDA] italic font-light">Skills</em>
          </h2>
          <p className="text-paperdim mt-3">
            Mastering Expertise — Showcasing Skills with Proficiency
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="group relative rounded-2xl border border-line overflow-hidden p-6 sm:p-7 lg:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_55px_-18px_rgba(100,255,218,0.35)]"
              style={{
                background: `linear-gradient(150deg, ${g.accent}3d 0%, #0c1f30f0 55%, #0c1f30 100%)`,
                borderColor: `${g.accent}40`,
              }}
            >
              {/* Diagonal shine sweep — same treatment as the Academic
                  Experience cards, gliding across on hover. */}
              <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
                <div className="absolute top-0 -left-1/2 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-[#64FFDA]/15 to-transparent -translate-x-[120%] group-hover:translate-x-[420%] transition-transform duration-[1100ms] ease-out" />
              </div>

              {/* Corner accent glow on hover — matches the Academic
                  Experience cards */}
              <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#64FFDA]/0 group-hover:bg-[#64FFDA]/10 blur-3xl transition-all duration-500" />

              {/* Top accent bar — the clearest visual cue that each card
                  belongs to a different category */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: g.accent }}
              />

              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-5 border transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${g.accent}26`,
                  borderColor: `${g.accent}66`,
                }}
              >
                {g.icon}
              </div>
              <h3 className="font-display text-lg sm:text-xl text-paper">
                {g.title}
              </h3>
              <p className="text-paperdim text-sm mt-2.5 sm:mt-3 mb-5 sm:mb-6 leading-relaxed">
                {g.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => {
                  const tech = techIconMap[item];
                  return (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] px-2.5 sm:px-3 py-1.5 rounded-full bg-bgsoft border border-line text-paperdim transition-colors hover:border-[#64FFDA]/50 hover:text-[#64FFDA] hover:bg-[#64FFDA]/5"
                    >
                      {tech && (
                        <tech.icon size={12} style={{ color: tech.color }} />
                      )}
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
