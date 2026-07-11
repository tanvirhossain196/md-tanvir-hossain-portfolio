// A few light programming glyphs, kept sparse on purpose — this section
// should stay quiet, not compete with the hero.
const glyphs = [
  {
    text: "</>",
    top: 12,
    left: 5,
    size: 22,
    rotate: -10,
    duration: 9,
    delay: 0,
  },
  {
    text: "{ }",
    top: 70,
    left: 91,
    size: 20,
    rotate: 8,
    duration: 10,
    delay: 1,
  },
  {
    text: "01",
    top: 28,
    left: 93,
    size: 13,
    rotate: 0,
    duration: 8,
    delay: 0.6,
  },
  { text: ";", top: 80, left: 4, size: 18, rotate: 0, duration: 7, delay: 1.4 },
  {
    text: "npm run dev",
    top: 18,
    left: 78,
    size: 11,
    rotate: 4,
    duration: 11,
    delay: 0.4,
  },
  {
    text: "const x =>",
    top: 88,
    left: 62,
    size: 11,
    rotate: -3,
    duration: 9,
    delay: 1.8,
  },
  {
    text: "0x2F",
    top: 8,
    left: 40,
    size: 12,
    rotate: -6,
    duration: 10,
    delay: 0.9,
  },
  {
    text: "()",
    top: 50,
    left: 2,
    size: 20,
    rotate: 0,
    duration: 8,
    delay: 0.2,
  },
  {
    text: "import",
    top: 92,
    left: 18,
    size: 11,
    rotate: 3,
    duration: 9,
    delay: 1.1,
  },
];

// Same gradient as HomeSection, painted with a fixed viewport attachment so
// it reads as one continuous background across the section boundary — no
// seam, no separate color block.
function VideoCVBackdrop() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <style>{`
        @keyframes videoGlyphDrift {
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
              animation: `videoGlyphDrift ${g.duration}s ease-in-out ${g.delay}s infinite`,
            }}
          >
            {g.text}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function VideoCVSection() {
  return (
    <section
      className="relative z-[2] w-full py-[60px] overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #050b14 0%, #0a1f30 55%, #0e2c42 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <VideoCVBackdrop />

      <div className="relative z-10 px-[5vw] max-w-[1000px] mx-auto text-center">
        <div className="flex items-center gap-4 mb-4">
          <span className="flex-1 h-px bg-line" />
          <span className="font-mono text-[11px] tracking-wide uppercase px-4 py-2 rounded-full border border-[#64FFDA]/40 text-[#64FFDA] flex items-center gap-2">
            ▶ Video CV
          </span>
          <span className="flex-1 h-px bg-line" />
        </div>
        <div className="aspect-[16/10] rounded-xl bg-panelsolid border border-line flex items-center justify-center relative overflow-hidden">
          <button
            aria-label="Play video CV"
            className="w-16 h-16 rounded-full bg-[#64FFDA]/15 border border-[#64FFDA]/40 flex items-center justify-center text-[#64FFDA] text-xl transition-all duration-300 hover:bg-[#64FFDA]/25 hover:scale-110 hover:shadow-[0_0_30px_rgba(100,255,218,0.4)]"
          >
            ▶
          </button>
        </div>
        <div className="flex justify-between items-center mt-4 text-left">
          <p className="text-paperdim text-sm">
            Watch my Video CV to learn more about my background and goals.
          </p>
          <a
            href="#"
            className="group font-mono text-xs uppercase tracking-wide text-[#64FFDA] whitespace-nowrap ml-4 inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            Watch on YouTube
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
