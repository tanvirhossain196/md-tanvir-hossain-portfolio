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

// A role reads as "current" only if its own duration says so — never guess
// from the system clock. Keeps the status chip honest as entries are added.
function getStatus(duration: string): "ONGOING" | "COMPLETED" {
  return /present|current/i.test(duration) ? "ONGOING" : "COMPLETED";
}

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
            "linear-gradient(135deg, rgba(22,36,58,0.6) 0%, rgba(19,68,100,0.45) 55%, rgba(18,94,134,0.32) 100%)",
        }}
      />

      {/* Glowing top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#64FFDA]/70 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#64FFDA]/30 to-transparent blur-[2px]" />

      {/* Glowing bottom line — same treatment as the top line, just lighter */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#64FFDA]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#64FFDA]/15 to-transparent blur-[2px]" />

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
          {experiences.map((exp) => {
            const status = getStatus(exp.duration);
            return (
              <div
                key={exp.role}
                tabIndex={0}
                className="group relative flex text-left rounded-lg border border-[#64FFDA]/25 overflow-hidden transition-all duration-300 shadow-[0_10px_34px_-16px_rgba(100,255,218,0.25)] hover:border-[#64FFDA]/60 focus-visible:border-[#64FFDA]/60 hover:-translate-y-1.5 focus-visible:-translate-y-1.5 hover:shadow-[0_20px_45px_-15px_rgba(100,255,218,0.4)] focus-visible:shadow-[0_20px_45px_-15px_rgba(100,255,218,0.4)] outline-none focus-visible:ring-1 focus-visible:ring-[#64FFDA]/50"
                style={{
                  background:
                    "linear-gradient(165deg, #12293f 0%, #0a1a2b 55%, #071522 100%)",
                  clipPath:
                    "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)",
                }}
              >
                {/* Top accent bar — a slim gradient edge that gives the
                    card a clear visual anchor against the section
                    background, without relying on hover to be noticed. */}
                <div className="absolute top-0 left-0 right-[22px] h-[2px] bg-gradient-to-r from-[#64FFDA]/70 via-[#64FFDA]/30 to-transparent z-20" />
                {/* Folded-corner tab — the card reads as a personnel record,
                    so the top-right corner is "turned up" like a dossier page. */}
                <div
                  className="absolute top-0 right-0 w-[22px] h-[22px] z-20 pointer-events-none transition-colors duration-300 group-hover:[background:linear-gradient(135deg,rgba(100,255,218,0.55),rgba(6,18,30,0.95))]"
                  style={{
                    clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                    background:
                      "linear-gradient(135deg, rgba(100,255,218,0.22), rgba(6,18,30,0.95))",
                  }}
                />

                {/* Diagonal shine sweep — same treatment as the Projects
                    section cards, for a consistent hover motion across the site. */}
                <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
                  <div className="absolute top-0 -left-1/2 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-[#64FFDA]/15 to-transparent -translate-x-[120%] group-hover:translate-x-[420%] transition-transform duration-[1100ms] ease-out" />
                </div>

                {/* Main content */}
                <div className="relative z-10 flex-1 min-w-0 p-5 sm:p-6 lg:p-7">
                  <div className="flex items-start gap-3">
                    {/* Role icon — sits directly with the title instead of
                        living in a separate spine column. */}
                    <div className="shrink-0 mt-0.5 w-9 h-9 sm:w-10 sm:h-10 rounded-md border border-[#64FFDA]/30 bg-[#64FFDA]/10 flex items-center justify-center">
                      <Briefcase
                        size={16}
                        strokeWidth={1.75}
                        className="text-[#64FFDA]"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-base sm:text-lg lg:text-xl text-paper leading-snug break-words">
                        {exp.role}
                      </h3>
                      <div className="text-paperdim text-xs sm:text-sm mt-1 break-words">
                        {exp.org}
                      </div>
                    </div>
                  </div>

                  {/* Duration rendered as a record field rather than a pill —
                      label + value, matching the dossier motif — paired with
                      a status chip so the timeframe carries a real signal
                      (still serving / concluded) rather than just a date. */}
                  <div className="flex flex-wrap items-center gap-2 mt-3 sm:mt-3.5 font-mono text-[10px] sm:text-[11px]">
                    <Calendar
                      size={12}
                      className="text-[#64FFDA]/70 shrink-0"
                    />
                    <span className="text-[#64FFDA] tracking-wide">
                      {exp.duration}
                    </span>
                    <span
                      className={`ml-auto inline-flex items-center gap-1 rounded-sm border px-1.5 py-0.5 tracking-[1.5px] uppercase ${
                        status === "ONGOING"
                          ? "border-[#64FFDA]/50 text-[#64FFDA]"
                          : "border-paperdim/25 text-paperdim/60"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          status === "ONGOING"
                            ? "bg-[#64FFDA] motion-safe:animate-pulse"
                            : "bg-paperdim/50"
                        }`}
                      />
                      {status}
                    </span>
                  </div>

                  <div className="h-px w-full bg-line my-4 sm:my-4.5" />

                  <ul className="flex flex-col gap-2 sm:gap-2.5">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
