import SectionWatermark from "@/components/SectionWatermark";
import AboutTabs from "@/components/AboutTabs";
import { Quote, GraduationCap, Code2, FolderGit2, Layers } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "3.73", label: "CGPA" },
  { icon: Code2, value: "4+", label: "Years Coding" },
  { icon: FolderGit2, value: "10+", label: "Projects Built" },
  { icon: Layers, value: "15+", label: "Technologies" },
];

const focusAreas = ["AI", "Web Dev", "UI/UX", "Systems"];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-[2] w-full py-16 sm:py-20 md:py-24 lg:py-[110px] overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f182b 0%, #0d3450 55%, #0c4a6e 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10 px-[5vw] max-w-[1300px] mx-auto">
        <SectionWatermark
          text="About"
          position="-top-10 -right-[16vw] sm:-right-24"
          weight="light"
          fontFamily="'Fraunces', serif"
          googleFontImport="Fraunces:ital,wght@1,300;1,600"
        />
        <div className="grid lg:grid-cols-[0.7fr_1fr] gap-10 sm:gap-12 lg:gap-14 items-start">
          {/* Identity panel — replaces the profile photo. Same footprint
              as the old image slot so the grid proportions next to the
              text column don't shift. */}
          <div className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[560px] rounded-2xl border border-[#ede8dc]/25 overflow-hidden mx-auto lg:mx-0 relative flex flex-col gap-6 sm:gap-7 p-6 sm:p-8 lg:gap-0 lg:justify-between lg:p-10 lg:aspect-[4/5]">
            <div
              className="absolute inset-0 -z-10"
              style={{ backgroundColor: "rgba(6,14,26,0.12)" }}
            />

            {/* Quote */}
            <div className="relative z-10">
              <Quote size={28} className="text-[#64FFDA]/50 mb-4" />
              <p className="font-serif italic font-light text-paper text-[clamp(18px,2vw,24px)] leading-snug">
                Turning curiosity into code, and code into something that
                matters.
              </p>
            </div>

            {/* Stats grid */}
            <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4 lg:my-8">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-[#ede8dc]/15 bg-black/5 p-3.5 sm:p-4 flex flex-col gap-2"
                >
                  <s.icon
                    size={18}
                    strokeWidth={1.75}
                    className="text-[#64FFDA]"
                  />
                  <div className="font-display text-xl sm:text-2xl text-paper leading-none">
                    {s.value}
                  </div>
                  <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wide text-paperdim">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Focus areas */}
            <div className="relative z-10 flex flex-wrap gap-2">
              {focusAreas.map((f) => (
                <span
                  key={f}
                  className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wide px-2.5 sm:px-3 py-1.5 rounded-full border border-[#64FFDA]/30 text-[#64FFDA] bg-[#64FFDA]/5"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Text column */}
          <div>
            <div className="font-mono text-[#64FFDA] text-[11px] tracking-[3px] uppercase mb-2">
              Who I Am
            </div>
            <h2 className="font-display text-[clamp(24px,3vw,34px)] text-paper mb-4">
              Software Engineer
            </h2>
            <p className="text-paperdim text-sm mb-6 sm:mb-8 max-w-xl">
              I&apos;m <b className="text-paper">Md Tanvir Hossain</b>, a
              passionate Software Engineer and student. My work bridges the gap
              between AI, technology, and design — crafting intelligent,
              scalable solutions that seamlessly integrate aesthetics with
              functionality.
            </p>

            {/* Education / Basic Skills / Soft Skills tabs — kept at their
                normal, compact size (not scaled up) so they stay readable
                and don't compete with the larger image next to them. */}
            <AboutTabs />
          </div>
        </div>
      </div>
    </section>
  );
}
