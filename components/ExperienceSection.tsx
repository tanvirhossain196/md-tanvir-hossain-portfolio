import SectionWatermark from "@/components/SectionWatermark";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

type Experience = {
  role: string;
  org: string;
  duration: string;
  points: string[];
};

// Add more entries here later — the grid below renders every item in this
// array, 3 per row (sm:2, lg:3). With a single entry it simply sits in the
// first (left) cell of the grid.
const experiences: Experience[] = [
  {
    role: "Undergraduate Teaching Assistant (UTA)",
    org: "East West University (Department of CSE)",
    duration: "02/2025 — 01/2026",
    points: [
      "Assisted faculty during programming laboratory sessions.",
      "Guided students in debugging and problem solving.",
      "Evaluated assignments and supported lab activities.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative z-[2] py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-bgsoft/60 border-b border-line"
    >
      {/* Muted navy gradient overlay — same treatment as the Projects
          section so both sections share the identical background split. */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(5,11,20,0.55) 0%, rgba(10,31,48,0.38) 55%, rgba(14,44,66,0.25) 100%)",
        }}
      />

      {/* Glowing top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#64FFDA]/70 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#64FFDA]/30 to-transparent blur-[2px]" />

      <div className="px-5 sm:px-[5vw] max-w-[1460px] mx-auto relative">
        <SectionWatermark text="Experience" />

        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <div className="font-mono text-[#64FFDA] text-[11px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-2 sm:mb-3">
            Career
          </div>
          <h2 className="font-serif font-normal text-[clamp(28px,6vw,52px)] text-paper tracking-tight px-2">
            Professional{" "}
            <em className="text-[#64FFDA] italic font-light">Experience</em>
          </h2>
          <p className="text-paperdim text-sm sm:text-base mt-2.5 sm:mt-3 px-4 sm:px-0">
            Hands-on roles that shaped how I work with people, not just code
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="text-left rounded-xl border border-line backdrop-blur-sm overflow-hidden group relative p-5 sm:p-6 lg:p-7 xl:p-8 transition-all duration-300 hover:border-[#64FFDA]/60 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-15px_rgba(100,255,218,0.35)]"
              style={{ backgroundColor: "#06121e" }}
            >
              {/* Diagonal shine sweep — same treatment as the Projects
                  section cards, for a consistent hover motion across the site. */}
              <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
                <div className="absolute top-0 -left-1/2 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-[#64FFDA]/15 to-transparent -translate-x-[120%] group-hover:translate-x-[420%] transition-transform duration-[1100ms] ease-out" />
              </div>

              <div className="relative z-10 flex flex-col gap-3.5 sm:gap-4 mb-4 sm:mb-5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 rounded-xl bg-[#64FFDA]/10 border border-[#64FFDA]/30 flex items-center justify-center text-[#64FFDA] transition-all duration-300 group-hover:scale-110 group-hover:border-[#64FFDA]/60">
                    <Briefcase
                      size={20}
                      strokeWidth={1.75}
                      className="sm:w-[22px] sm:h-[22px]"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-base sm:text-lg lg:text-xl text-paper leading-snug break-words">
                      {exp.role}
                    </h3>
                    <div className="text-paperdim text-xs sm:text-sm mt-1">
                      {exp.org}
                    </div>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 self-start font-mono text-[10px] sm:text-[11px] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-[#64FFDA]/40 text-[#64FFDA] whitespace-nowrap">
                  <Calendar size={12} />
                  {exp.duration}
                </span>
              </div>

              <ul className="relative z-10 flex flex-col gap-2 sm:gap-2.5 pl-1">
                {exp.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 sm:gap-2.5 text-paperdim text-[13px] sm:text-sm leading-relaxed"
                  >
                    <CheckCircle2
                      size={15}
                      strokeWidth={1.75}
                      className="text-[#64FFDA]/70 mt-0.5 shrink-0"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
