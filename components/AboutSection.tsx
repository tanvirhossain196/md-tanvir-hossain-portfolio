import SectionWatermark from "@/components/SectionWatermark";
import AboutTabs from "@/components/AboutTabs";

// Same sparse programming-glyph motif used in VideoCVSection, repositioned
// so the two sections still feel like one continuous surface when you
// scroll from Video CV straight into About.
const glyphs = [
  {
    text: "</>",
    top: 10,
    left: 8,
    size: 22,
    rotate: -10,
    duration: 9,
    delay: 0,
  },
  {
    text: "{ }",
    top: 65,
    left: 90,
    size: 20,
    rotate: 8,
    duration: 10,
    delay: 1,
  },
  {
    text: "01",
    top: 22,
    left: 94,
    size: 13,
    rotate: 0,
    duration: 8,
    delay: 0.6,
  },
  { text: ";", top: 85, left: 6, size: 18, rotate: 0, duration: 7, delay: 1.4 },
  {
    text: "npm run build",
    top: 15,
    left: 72,
    size: 11,
    rotate: 4,
    duration: 11,
    delay: 0.4,
  },
  {
    text: "const About =>",
    top: 90,
    left: 55,
    size: 11,
    rotate: -3,
    duration: 9,
    delay: 1.8,
  },
  {
    text: "0x4A",
    top: 6,
    left: 42,
    size: 12,
    rotate: -6,
    duration: 10,
    delay: 0.9,
  },
  {
    text: "()",
    top: 45,
    left: 3,
    size: 20,
    rotate: 0,
    duration: 8,
    delay: 0.2,
  },
  {
    text: "export",
    top: 95,
    left: 22,
    size: 11,
    rotate: 3,
    duration: 9,
    delay: 1.1,
  },
];

// Identical gradient + fixed attachment as VideoCVSection so there's no
// visible seam between the two sections while scrolling.
function AboutBackdrop() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <style>{`
        @keyframes aboutGlyphDrift {
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
              animation: `aboutGlyphDrift ${g.duration}s ease-in-out ${g.delay}s infinite`,
            }}
          >
            {g.text}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function AboutSection() {
  return (
    // Full-bleed section: the gradient + glyphs cover the entire section
    // width (edge to edge, same as VideoCVSection), not just the centered
    // content column. The max-width/padding constraint lives on the inner
    // wrapper div instead.
    <section
      id="about"
      className="relative z-[2] w-full py-[110px] overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #050b14 0%, #0a1f30 55%, #0e2c42 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <AboutBackdrop />

      <div className="relative z-10 px-[5vw] max-w-[1300px] mx-auto">
        <SectionWatermark
          text="About"
          position="-top-10 -right-[16vw] sm:-right-24"
          weight="light"
          fontFamily="'Fraunces', serif"
          googleFontImport="Fraunces:ital,wght@1,300;1,600"
        />
        <div className="grid lg:grid-cols-[0.7fr_1fr] gap-14 items-start">
          {/* Image — significantly larger than before, sets the scale for
              the text column next to it */}
          <div className="w-full max-w-[560px] aspect-[3/4] lg:aspect-[4/5] rounded-2xl bg-panelsolid border border-line overflow-hidden mx-auto lg:mx-0">
            <img
              src="/images/profile/profile.jpg"
              alt="Md Tanvir Hossain"
              className="w-full h-full object-cover"
            />
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
