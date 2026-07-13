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
  },
];

export default function HobbiesOrbit() {
  return (
    // Full-bleed section: same gradient as VideoCV/About/Academic/Skills.
    // The max-width/padding constraint lives on the inner wrapper div instead.
    <section
      id="hobbies"
      className="relative z-[2] w-full py-14 sm:py-16 md:py-20 lg:py-24 xl:py-[110px] overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f182b 0%, #0d3450 55%, #0c4a6e 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10 px-5 sm:px-[5vw] max-w-[1560px] mx-auto">
        <SectionWatermark text="Hobbies" />

        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <div className="font-mono text-[#64FFDA] text-[11px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-2 sm:mb-3">
            Beyond Code
          </div>
          <h2 className="font-display text-[clamp(28px,6vw,50px)] text-paper px-2">
            Things I <em className="text-[#64FFDA] not-italic italic">Love</em>
          </h2>
          <p className="text-paperdim text-sm sm:text-base mt-2.5 sm:mt-3 px-4 sm:px-0">
            What keeps me inspired outside of work
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {hobbies.map((h) => (
            <div
              key={h.title}
              className="hobby-card group relative rounded-2xl border border-[#ede8dc]/25 backdrop-blur-sm px-5 sm:px-6 md:px-7 lg:px-8 py-6 sm:py-7 flex flex-col items-center text-center gap-5 sm:gap-6 transition-all duration-500 hover:border-[#64FFDA]/60 hover:-translate-y-2 hover:shadow-[0_25px_55px_-18px_rgba(100,255,218,0.35)]"
              style={{
                background:
                  "linear-gradient(145deg, rgba(20,42,68,0.5) 0%, rgba(14,30,52,0.5) 45%, rgba(10,22,38,0.5) 100%)",
              }}
            >
              {/* Diagonal shine sweep — same treatment as the Academic
                  Experience cards, gliding across on hover. */}
              <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-2xl">
                <div className="absolute top-0 -left-1/2 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-[#64FFDA]/15 to-transparent -translate-x-[120%] group-hover:translate-x-[420%] transition-transform duration-[1100ms] ease-out" />
              </div>

              {/* Corner accent glow on hover — matches the Academic
                  Experience cards */}
              <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#64FFDA]/0 group-hover:bg-[#64FFDA]/10 blur-3xl transition-all duration-500" />

              {/* hub — static, no orbit / no spin */}
              <div className="relative z-10 w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] rounded-full bg-[#16283f] border border-[#64FFDA]/40 flex flex-col items-center justify-center gap-0.5 shadow-[0_0_22px_rgba(100,255,218,0.25)] transition-transform duration-300 group-hover:scale-105">
                <span className="text-lg sm:text-xl leading-none">
                  {h.icon}
                </span>
              </div>

              {/* text block */}
              <div className="relative z-10">
                <h3 className="font-serif italic font-normal text-xl sm:text-2xl text-paper">
                  {h.title}
                </h3>
                <div className="font-mono text-[9px] sm:text-[10px] text-[#64FFDA] uppercase tracking-[1.5px] sm:tracking-[2px] mt-1 mb-3 sm:mb-4">
                  {h.sub}
                </div>
                <p className="text-paperdim text-[13px] sm:text-sm leading-relaxed max-w-sm mx-auto">
                  {h.desc}
                </p>
              </div>

              {/* static row of items — icon + name, uniquely colored per item,
                  no animation of any kind. 2-up on phones so each pill has
                  enough room for longer labels (e.g. "Anime OST") without
                  the text spilling past its own border; 3-up from sm+. */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 w-full">
                {h.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-start gap-1.5 sm:gap-2 min-w-0 rounded-full pl-1.5 sm:pl-2 pr-2.5 sm:pr-3.5 py-1.5 border backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.03]"
                    style={{
                      background: `linear-gradient(120deg, ${item.color}30 0%, ${item.color}0d 70%)`,
                      borderColor: `${item.color}55`,
                      boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08)`,
                    }}
                  >
                    <span
                      className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs sm:text-sm shrink-0"
                      style={{
                        backgroundColor: `${item.color}25`,
                        border: `1px solid ${item.color}66`,
                      }}
                    >
                      {item.icon}
                    </span>
                    <span
                      className="font-mono text-[9.5px] sm:text-[11px] uppercase tracking-wide truncate min-w-0"
                      style={{ color: item.color }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
