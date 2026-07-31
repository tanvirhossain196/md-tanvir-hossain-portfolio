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
              className="hobby-card group relative rounded-lg border border-[#ede8dc]/25 backdrop-blur-sm px-5 sm:px-6 md:px-7 lg:px-8 py-6 sm:py-7 flex flex-col items-start text-left gap-5 sm:gap-6 transition-colors duration-500 hover:border-[#64FFDA]/60"
              style={{
                background:
                  "linear-gradient(145deg, rgba(20,42,68,0.5) 0%, rgba(14,30,52,0.5) 45%, rgba(10,22,38,0.5) 100%)",
              }}
            >
              {/* icon + title — same row, icon in the top-left corner */}
              <div className="relative z-10 flex items-center gap-3 w-full">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#16283f] border border-[#64FFDA]/30 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:border-[#64FFDA]/60">
                  <span className="text-base sm:text-lg leading-none">
                    {h.icon}
                  </span>
                </div>
                <h3 className="font-serif italic font-normal text-xl sm:text-2xl text-paper transition-colors duration-300 group-hover:text-[#64FFDA]">
                  {h.title}
                </h3>
              </div>

              {/* text block */}
              <div className="relative z-10">
                <div className="font-mono text-[9px] sm:text-[10px] text-paper uppercase tracking-[1.5px] sm:tracking-[2px] mb-3 sm:mb-4 transition-colors duration-300 group-hover:text-[#64FFDA]">
                  {h.sub}
                </div>
                <p className="text-paperdim text-[13px] sm:text-sm leading-relaxed">
                  {h.desc}
                </p>
              </div>

              {/* static row of items — icon + name, uniquely colored icon,
                  navy pill background, no animation of any kind. 2-up on
                  phones so each pill has enough room for longer labels
                  (e.g. "Anime OST") without the text spilling past its own
                  border; 3-up from sm+. */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 w-full">
                {h.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-start gap-1.5 sm:gap-2 min-w-0 rounded-md pl-1.5 sm:pl-2 pr-2.5 sm:pr-3.5 py-1.5 border border-[#64FFDA]/10 bg-[#0a1a2e]"
                  >
                    <span
                      className="w-6 h-6 sm:w-7 sm:h-7 rounded-md flex items-center justify-center text-xs sm:text-sm shrink-0"
                      style={{
                        backgroundColor: `${item.color}25`,
                        border: `1px solid ${item.color}66`,
                      }}
                    >
                      {item.icon}
                    </span>
                    <span className="font-mono text-[9.5px] sm:text-[11px] uppercase tracking-wide truncate min-w-0 text-paper">
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
