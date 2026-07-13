import type { CSSProperties } from "react";
import SectionWatermark from "@/components/SectionWatermark";
import { FaReact, FaJava, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import { Lock, Smartphone } from "lucide-react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiPhp,
  SiFigma,
  SiGit,
  SiDocker,
  SiPostman,
  SiNginx,
  SiJsonwebtokens,
} from "react-icons/si";

// Accepts icons from both react-icons and lucide-react, since a couple of
// concept badges (Responsive Design, HTTPS/SSL) use lucide glyphs instead
// of a brand mark.
type AnyIcon = IconType | LucideIcon;

const techIconMap: Record<string, { icon: AnyIcon; color: string }> = {
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  React: { icon: FaReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  Bootstrap: { icon: SiBootstrap, color: "#7952B3" },
  "Responsive Design": { icon: Smartphone, color: "#64FFDA" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  Express: { icon: SiExpress, color: "#FFFFFF" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  SQLite: { icon: SiSqlite, color: "#7DD3FC" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Python: { icon: SiPython, color: "#3776AB" },
  Java: { icon: FaJava, color: "#EA2D2E" },
  "C++": { icon: SiCplusplus, color: "#00599C" },
  PHP: { icon: SiPhp, color: "#8892BF" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: FaGithub, color: "#FFFFFF" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  "VS Code": { icon: VscVscode, color: "#007ACC" },
  "JWT Auth": { icon: SiJsonwebtokens, color: "#FFFFFF" },
  NGINX: { icon: SiNginx, color: "#009639" },
  "HTTPS/SSL": { icon: Lock, color: "#64FFDA" },
};

const skillGroups = [
  {
    icon: "🖥️",
    title: "Frontend",
    desc: "Building responsive, interactive and visually polished user interfaces.",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind",
      "Bootstrap",
      "Responsive Design",
    ],
    accent: "#3b82f6", // blue
  },
  {
    icon: "🗄️",
    title: "Backend",
    desc: "Developing robust server-side logic and REST APIs.",
    items: ["Node.js", "Express"],
    accent: "#22c55e", // green
  },
  {
    icon: "🗃️",
    title: "Database",
    desc: "Structured and lightweight data storage across relational and NoSQL systems.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
    accent: "#ec4899", // pink
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
    items: ["Figma", "Git", "GitHub", "Docker", "Postman", "VS Code"],
    accent: "#f59e0b", // amber
  },
  {
    icon: "🔐",
    title: "Security & Performance",
    desc: "Implementing authentication, encryption and performance-focused deployment.",
    items: ["JWT Auth", "NGINX", "HTTPS/SSL"],
    accent: "#ef4444", // red
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
          "linear-gradient(135deg, #0f182b 0%, #0d3450 55%, #0c4a6e 100%)",
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="group relative rounded-2xl border-[var(--border-c)] border overflow-hidden p-6 sm:p-7 lg:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--border-h)] hover:shadow-[0_25px_55px_-18px_var(--glow-h)]"
              style={
                {
                  background: `linear-gradient(150deg, ${g.accent}1f 0%, #101f2fe8 50%, #0d1d2c 100%)`,
                  "--border-c": `${g.accent}30`,
                  "--border-h": `${g.accent}90`,
                  "--glow-h": `${g.accent}59`,
                } as CSSProperties
              }
            >
              {/* Diagonal shine sweep — same treatment as the Academic
                  Experience cards, gliding across on hover. */}
              <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
                <div className="absolute top-0 -left-1/2 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-[#64FFDA]/15 to-transparent -translate-x-[120%] group-hover:translate-x-[420%] transition-transform duration-[1100ms] ease-out" />
              </div>

              {/* Corner accent glow on hover — matches the Academic
                  Experience cards */}
              <div
                className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500"
                style={{ background: `${g.accent}26` }}
              />

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
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {g.items.map((item) => {
                  const tech = techIconMap[item];
                  return (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-[12.5px] lg:text-[13px] px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-bgsoft border border-line text-paperdim transition-colors hover:border-[#64FFDA]/50 hover:text-[#64FFDA] hover:bg-[#64FFDA]/5"
                    >
                      {tech && (
                        <tech.icon
                          className="w-[13px] h-[13px] sm:w-[15px] sm:h-[15px]"
                          color={tech.color}
                        />
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
