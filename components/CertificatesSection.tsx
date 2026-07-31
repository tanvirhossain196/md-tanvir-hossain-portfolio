import SectionWatermark from "@/components/SectionWatermark";
import { Layers, Globe, type LucideIcon } from "lucide-react";

const certificates: {
  icon: LucideIcon;
  year: string;
  title: string;
  desc: string;
  org: string;
}[] = [
  {
    icon: Layers,
    year: "2025",
    title: "Full Stack Web Development with JavaScript (MERN)",
    desc: "Completed an in-depth specialization covering MongoDB, Express.js, React, and Node.js to build full-stack web applications.",
    org: "Ostad",
  },
  {
    icon: Globe,
    year: "2025",
    title: "The Web Developer Bootcamp",
    desc: "Mastered full-stack web development covering HTML, CSS, JavaScript, Node.js, Express, and MongoDB.",
    org: "Programming Hero",
  },
  // {
  //   icon: "🤖",
  //   year: "2026",
  //   title: "Data Science and Machine Learning",
  //   desc: "Learned to analyze data, build predictive models, and develop intelligent systems using ML algorithms.",
  //   org: "Coursera",
  // },
];

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="relative z-[2] py-[110px] overflow-hidden border-b border-line"
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

      <div className="px-[5vw] max-w-[1470px] mx-auto relative">
        <SectionWatermark text="Certs" />
        <div className="text-center mb-16">
          <div className="font-mono text-[#64FFDA] text-xs tracking-[3px] uppercase mb-3">
            Credentials
          </div>
          <h2 className="font-display text-[clamp(32px,5vw,50px)] text-paper">
            Certificates &amp;{" "}
            <em className="text-[#64FFDA] not-italic italic">Achievements</em>
          </h2>
          <p className="text-paperdim mt-3">
            Verified learning milestones and recognized accomplishments
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificates.map((c) => (
            <div
              key={c.title}
              className="group relative rounded-lg border border-[#F5F1E8]/25 backdrop-blur-sm p-6 overflow-hidden transition-colors duration-500 hover:border-[#64FFDA]/60"
              style={{
                background:
                  "linear-gradient(165deg, #16324a 0%, #112742 55%, #0d1f36 100%)",
              }}
            >
              <div className="relative z-10 flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-lg bg-[#64FFDA]/10 border border-[#64FFDA]/30 flex items-center justify-center transition-colors duration-300 group-hover:border-[#64FFDA]/60">
                  <c.icon
                    size={20}
                    strokeWidth={2}
                    className="text-paper transition-colors duration-300 group-hover:text-[#64FFDA]"
                  />
                </div>
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-[#0a1a2e] border border-[#64FFDA]/10 text-[#64FFDA]">
                  {c.year}
                </span>
              </div>
              <h3 className="relative z-10 font-display text-lg text-paper transition-colors duration-300 group-hover:text-[#64FFDA]">
                {c.title}
              </h3>
              <p className="relative z-10 text-paperdim text-sm mt-2 mb-5 leading-relaxed">
                {c.desc}
              </p>
              <div className="relative z-10 font-mono text-xs text-paperdim mb-2">
                🎓 {c.org}
              </div>
              <a
                href="#"
                className="relative z-10 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-paper transition-colors duration-300 group-hover:text-[#64FFDA]"
              >
                View Certificate
                <span className="inline-block">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
