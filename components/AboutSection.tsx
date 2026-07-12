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
      className="relative z-[2] w-full py-[110px] overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #050b14 0%, #0a1f30 55%, #0e2c42 100%)",
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
        <div className="grid lg:grid-cols-[0.7fr_1fr] gap-14 items-start">
          {/* Identity panel — replaces the profile photo. Same footprint
              as the old image slot so the grid proportions next to the
              text column don't shift. */}
          <div className="w-full max-w-[560px] aspect-[3/4] lg:aspect-[4/5] rounded-2xl border border-line overflow-hidden mx-auto lg:mx-0 relative flex flex-col justify-between p-8 sm:p-10">
            <div
              className="absolute inset-0 -z-10"
              style={{ backgroundColor: "#06121e" }}
            />
            <div className="pointer-events-none absolute -top-14 -right-14 w-48 h-48 rounded-full bg-[#64FFDA]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 w-44 h-44 rounded-full bg-[#64FFDA]/5 blur-3xl" />

            {/* Quote */}
            <div className="relative z-10">
              <Quote size={28} className="text-[#64FFDA]/50 mb-4" />
              <p className="font-serif italic font-light text-paper text-[clamp(18px,2vw,24px)] leading-snug">
                Turning curiosity into code, and code into something that
                matters.
              </p>
            </div>

            {/* Stats grid */}
            <div className="relative z-10 grid grid-cols-2 gap-4 my-8">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-line/80 bg-black/20 p-4 flex flex-col gap-2"
                >
                  <s.icon
                    size={18}
                    strokeWidth={1.75}
                    className="text-[#64FFDA]"
                  />
                  <div className="font-display text-2xl text-paper leading-none">
                    {s.value}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wide text-paperdim">
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
                  className="font-mono text-[11px] uppercase tracking-wide px-3 py-1.5 rounded-full border border-[#64FFDA]/30 text-[#64FFDA] bg-[#64FFDA]/5"
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
            <p className="text-paperdim text-sm mb-8 max-w-xl">
              I&apos;m <b className="text-paper">Md Tanvir Hossain</b>, a
              passionate Software Engineer and CSE student. My work bridges the
              gap between AI, technology, and design — crafting intelligent,
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
