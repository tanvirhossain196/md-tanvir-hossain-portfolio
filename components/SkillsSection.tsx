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
    items: ["Figma", "Git", "GitHub", "Postman", "VS Code"],
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
              className="group relative rounded-lg border border-[#ede8dc]/25 overflow-hidden shadow-[0_10px_28px_-8px_rgba(0,0,0,0.35)] p-6 sm:p-7 lg:p-8 transition-colors duration-500 hover:border-[#64FFDA]/60"
              style={
                {
                  background:
                    "linear-gradient(145deg, rgba(20,42,68,0.5) 0%, rgba(14,30,52,0.5) 45%, rgba(10,22,38,0.5) 100%)",
                } as CSSProperties
              }
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-sm sm:text-base border transition-colors duration-300 bg-[#64FFDA]/10 border-[#64FFDA]/30 group-hover:border-[#64FFDA]/60 shrink-0">
                  {g.icon}
                </div>
                <h3 className="font-display text-lg sm:text-xl text-paper transition-colors duration-300 group-hover:text-[#64FFDA]">
                  {g.title}
                </h3>
              </div>
              <p className="text-paperdim text-sm mt-2.5 sm:mt-3 mb-5 sm:mb-6 leading-relaxed">
                {g.desc}
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                {g.items.map((item) => {
                  const tech = techIconMap[item];
                  return (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-[12px] lg:text-[13px] px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-md bg-[#0a1a2e] border border-[#64FFDA]/10 text-paper transition-colors duration-300 hover:border-[#64FFDA]/50"
                    >
                      {tech && (
                        <tech.icon
                          className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] shrink-0"
                          color={tech.color}
                        />
                      )}
                      <span className="truncate">{item}</span>
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
