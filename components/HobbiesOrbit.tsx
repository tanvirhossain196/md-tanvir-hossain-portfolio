import SectionWatermark from "@/components/SectionWatermark";

type OrbitItem = {
  icon: string;
  label: string;
  color: string; // hex accent for this node
};

type Hobby = {
  icon: string;
  title: string;
  sub: string;
  desc: string;
  items: OrbitItem[];
  radius: number; // px distance of every orbit item from the hub center
  duration: number; // seconds per full rotation
};

const hobbies: Hobby[] = [
  {
    icon: "🎮",
    title: "Gaming",
    sub: "Strategy · Reflexes · Focus",
    desc: "Every match is a small puzzle. Gaming sharpens the same instincts I lean on while debugging — reading patterns fast, deciding under pressure, adapting when the plan breaks.",
    items: [
      { icon: "🎯", label: "PUBG", color: "#F5A623" },
      { icon: "🚗", label: "Forza", color: "#4FC3F7" },
      { icon: "🔫", label: "GTA 5", color: "#E5533D" },
      { icon: "⚽", label: "PES", color: "#8BC34A" },
    ],
    radius: 40,
    duration: 10,
  },
  {
    icon: "🎬",
    title: "Movies",
    sub: "Stories · Language · Ideas",
    desc: "Watching English films is how I trained my spoken English without noticing it. Sci-fi worlds and documentary pacing quietly shape how I imagine new projects.",
    items: [
      { icon: "🛸", label: "Sci-Fi", color: "#5C7CFA" },
      { icon: "🎙️", label: "Docs", color: "#E0E0E0" },
      { icon: "🎭", label: "Drama", color: "#E56399" },
    ],
    radius: 40,
    duration: 10,
  },
  {
    icon: "🎧",
    title: "Music",
    sub: "Focus · Flow · Rhythm",
    desc: "A good playlist is half my dev environment. Lo-fi keeps me in flow while coding, film scores are where I go when a problem needs patience.",
    items: [
      { icon: "🌙", label: "Lo-fi", color: "#B197FC" },
      { icon: "🎻", label: "Scores", color: "#D4AF37" },
      { icon: "🎌", label: "Anime OST", color: "#E5533D" },
      { icon: "🥁", label: "Rock", color: "#F5A623" },
    ],
    radius: 40,
    duration: 10,
  },
];

// Same sparse programming-glyph motif as VideoCV/About/Academic/Skills,
// repositioned once more for variety.
const glyphs = [
  {
    text: "</>",
    top: 8,
    left: 5,
    size: 22,
    rotate: -9,
    duration: 9,
    delay: 0.1,
  },
  {
    text: "{ }",
    top: 76,
    left: 93,
    size: 20,
    rotate: 7,
    duration: 10,
    delay: 0.75,
  },
  {
    text: "01",
    top: 23,
    left: 95,
    size: 13,
    rotate: 0,
    duration: 8,
    delay: 0.4,
  },
  {
    text: ";",
    top: 88,
    left: 4,
    size: 18,
    rotate: 0,
    duration: 7,
    delay: 1.15,
  },
  {
    text: "while (true) {}",
    top: 14,
    left: 74,
    size: 11,
    rotate: 4,
    duration: 11,
    delay: 0.5,
  },
  {
    text: "// side quests",
    top: 92,
    left: 48,
    size: 11,
    rotate: -3,
    duration: 9,
    delay: 1.45,
  },
  {
    text: "0x8B",
    top: 4,
    left: 39,
    size: 12,
    rotate: -6,
    duration: 10,
    delay: 1,
  },
  {
    text: "()",
    top: 50,
    left: 2,
    size: 20,
    rotate: 0,
    duration: 8,
    delay: 0.25,
  },
  {
    text: "sleep(0)",
    top: 96,
    left: 20,
    size: 11,
    rotate: 3,
    duration: 9,
    delay: 0.9,
  },
];

// Identical gradient + fixed attachment as VideoCV/About/Academic/Skills so
// there's no visible seam anywhere along the scroll.
function HobbiesBackdrop() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <style>{`
        @keyframes hobbiesGlyphDrift {
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
              animation: `hobbiesGlyphDrift ${g.duration}s ease-in-out ${g.delay}s infinite`,
            }}
          >
            {g.text}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function HobbiesOrbit() {
  return (
    // Full-bleed section: gradient + glyphs cover the entire section width
    // (edge to edge), same treatment as VideoCV/About/Academic/Skills. The
    // max-width/padding constraint lives on the inner wrapper div instead.
    <section
      id="hobbies"
      className="relative z-[2] w-full py-[110px] overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #050b14 0%, #0a1f30 55%, #0e2c42 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <HobbiesBackdrop />

      <div className="relative z-10 px-[5vw] max-w-[1300px] mx-auto">
        <SectionWatermark text="Hobbies" />

        <div className="text-center mb-16">
          <div className="font-mono text-[#64FFDA] text-xs tracking-[3px] uppercase mb-3">
            Beyond Code
          </div>
          <h2 className="font-display text-[clamp(32px,5vw,50px)] text-paper">
            Things I <em className="text-[#64FFDA] not-italic italic">Love</em>
          </h2>
          <p className="text-paperdim mt-3">
            What keeps me inspired outside of work — each orbit is a small world
            of its own
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((h) => (
            <div
              key={h.title}
              className="hobby-card group relative rounded-2xl border border-line backdrop-blur-sm p-7 flex flex-col items-center text-center gap-7 transition-all duration-500 hover:border-[#64FFDA]/50 hover:-translate-y-2 hover:shadow-[0_25px_55px_-18px_rgba(100,255,218,0.35)]"
              style={{ backgroundColor: "#06121e" }}
            >
              {/* Diagonal shine sweep — same treatment as the Academic
                  Experience cards, gliding across on hover. */}
              <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-2xl">
                <div className="absolute top-0 -left-1/2 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-[#64FFDA]/15 to-transparent -translate-x-[120%] group-hover:translate-x-[420%] transition-transform duration-[1100ms] ease-out" />
              </div>

              {/* Corner accent glow on hover — matches the Academic
                  Experience cards */}
              <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#64FFDA]/0 group-hover:bg-[#64FFDA]/10 blur-3xl transition-all duration-500" />
              {/* Orbit hub — no clip mask; sized with margin so nothing ever touches the edge */}
              <div
                className="orbit-wrap relative shrink-0 mx-auto"
                style={{
                  width: 280,
                  height: 280,
                  // @ts-expect-error CSS custom property
                  "--orbit-duration": `${h.duration}s`,
                }}
              >
                {/* soft ambient glow behind everything */}
                <div className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-[#64FFDA]/20 blur-2xl pointer-events-none" />

                {/* dashed track — every item sits exactly on this line */}
                <svg
                  viewBox="0 0 280 280"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  <circle
                    cx="140"
                    cy="140"
                    r={h.radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="2 7"
                    className="text-line"
                  />
                </svg>

                {/* rotating ring holding the orbit items — one shared center, one shared radius */}
                <div className="orbit-track absolute inset-0">
                  {h.items.map((item, i) => {
                    const angle = (360 / h.items.length) * i;
                    return (
                      // anchor: a zero-size point sitting exactly at the hub's center
                      <div
                        key={item.label}
                        className="absolute top-1/2 left-1/2 w-0 h-0"
                      >
                        {/* pushes the point out to the same radius, along this item's angle */}
                        <div
                          style={{
                            transform: `rotate(${angle}deg) translate(${h.radius}px)`,
                          }}
                        >
                          {/* centers the badge box itself on that exact point + cancels the static angle */}
                          <div
                            className="orbit-counter absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
                            style={{ transform: `rotate(${-angle}deg)` }}
                          >
                            {/* cancels the ring's continuous spin — label always stays upright, never rotates */}
                            <div className="orbit-spin-cancel">
                              <div
                                className="node-badge relative w-[92px] h-[92px] rounded-full flex flex-col items-center justify-center gap-1.5 border backdrop-blur-sm transition-transform duration-300 group-hover:scale-105"
                                style={{
                                  background: `linear-gradient(160deg, ${item.color}70 0%, ${item.color}25 45%, transparent 100%)`,
                                  borderColor: `${item.color}80`,
                                  boxShadow: `inset 0 1px 0 rgba(255,255,255,0.15), 0 0 16px 0 ${item.color}40`,
                                }}
                              >
                                {/* colored tick — overlaid, doesn't affect the badge's own centering */}
                                <span
                                  className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full"
                                  style={{ backgroundColor: item.color }}
                                />
                                <div className="text-2xl leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                                  {item.icon}
                                </div>
                                <div
                                  className="font-mono text-[10px] leading-tight uppercase tracking-wide text-center px-1 whitespace-nowrap text-white"
                                  style={{
                                    textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                                  }}
                                >
                                  {item.label}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* center hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[58px] h-[58px] rounded-full bg-[#16283f] border border-[#64FFDA]/40 flex flex-col items-center justify-center gap-0.5 shadow-[0_0_22px_rgba(100,255,218,0.25)] transition-transform duration-300 group-hover:scale-105">
                    <span className="text-base leading-none">{h.icon}</span>
                    <span className="font-mono text-[6px] tracking-wide uppercase text-[#64FFDA]">
                      {h.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* text block, separate from the orbit */}
              <div>
                <h3 className="font-serif italic font-normal text-2xl text-paper">
                  {h.title}
                </h3>
                <div className="font-mono text-[10px] text-[#64FFDA] uppercase tracking-[2px] mt-1 mb-4">
                  {h.sub}
                </div>
                <p className="text-paperdim text-sm leading-relaxed max-w-sm mx-auto">
                  {h.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .orbit-track {
            animation: orbit-spin var(--orbit-duration, 24s) linear infinite;
          }
          .orbit-spin-cancel {
            animation: orbit-spin-reverse var(--orbit-duration, 24s) linear infinite;
          }
          .hobby-card:hover .orbit-track,
          .hobby-card:hover .orbit-spin-cancel {
            animation-play-state: paused;
          }
          @keyframes orbit-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes orbit-spin-reverse {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @media (prefers-reduced-motion: reduce) {
            .orbit-track, .orbit-spin-cancel {
              animation: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
