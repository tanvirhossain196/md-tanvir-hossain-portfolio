import SectionWatermark from "@/components/SectionWatermark";

const certificates = [
  {
    icon: "🐍",
    year: "2024",
    title: "Python for Everybody",
    desc: "Completed an in-depth specialization covering Python fundamentals, data structures, and data visualization.",
    org: "Coursera · University of Michigan",
  },
  {
    icon: "🌐",
    year: "2025",
    title: "The Web Developer Bootcamp",
    desc: "Mastered full-stack web development covering HTML, CSS, JavaScript, Node.js, Express, and MongoDB.",
    org: "Udemy",
  },
  {
    icon: "🤖",
    year: "2026",
    title: "Data Science and Machine Learning",
    desc: "Learned to analyze data, build predictive models, and develop intelligent systems using ML algorithms.",
    org: "Coursera",
  },
];

// A muted echo of the VideoCV/About/Academic/Skills navy gradient, layered
// at low opacity on top of this section's own bg-bgsoft base — same
// treatment as ProjectsSection, since this section also keeps its own
// divider lines and slightly different surface color rather than matching
// the other sections exactly.
function CertificatesBackdrop() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(22,36,58,0.6) 0%, rgba(19,68,100,0.45) 55%, rgba(18,94,134,0.32) 100%)",
        }}
      />
    </div>
  );
}

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="relative z-[2] py-[110px] overflow-hidden bg-bgsoft/60 border-b border-line"
    >
      <CertificatesBackdrop />

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
              className="group relative rounded-xl border border-line backdrop-blur-sm p-6 overflow-hidden transition-all duration-500 hover:border-[#64FFDA]/50 hover:-translate-y-2 hover:shadow-[0_25px_55px_-18px_rgba(100,255,218,0.35)]"
              style={{
                background:
                  "linear-gradient(165deg, #0c1f31 0%, #071320 55%, #050d17 100%)",
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

              <div className="relative z-10 flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-lg bg-[#64FFDA]/10 border border-[#64FFDA]/30 flex items-center justify-center text-lg transition-all duration-300 group-hover:scale-110 group-hover:border-[#64FFDA]/60">
                  {c.icon}
                </div>
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-[#64FFDA]/40 text-[#64FFDA]">
                  {c.year}
                </span>
              </div>
              <h3 className="relative z-10 font-display text-lg text-paper">
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
                className="relative z-10 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-[#64FFDA] transition-colors duration-300 group-hover:text-white"
              >
                View Certificate
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
