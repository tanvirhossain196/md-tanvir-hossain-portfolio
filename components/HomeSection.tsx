import OrbitSkills from "@/components/OrbitSkills";
import Typewriter from "@/components/Typewriter";
import PhotoSlideshow from "@/components/PhotoSlideshow";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

const socials = [
  {
    label: "Facebook",
    Icon: FaFacebookF,
    href: "https://www.facebook.com/share/18uqRYn4CW/",
  },
  {
    label: "LinkedIn",
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/mdtanvirhossain196/",
  },
  {
    label: "Instagram",
    Icon: FaInstagram,
    href: "https://www.instagram.com/_tanvir._hossain_/",
  },
  {
    label: "GitHub",
    Icon: FaGithub,
    href: "https://github.com/tanvirhossain196",
  },
];

// Scattered code / dev snippets that float gently across the FULL section
// (not confined to a box or one side). Positions are percentages of the
// section so this reads as one continuous atmosphere behind everything.
// Colors reuse the existing tokens only (accent / paperdim) at low opacity.
const glyphs: {
  text: string;
  top: number;
  left: number;
  size: number;
  rotate: number;
  duration: number;
  delay: number;
  tone: "accent" | "dim";
  weight?: "bold";
}[] = [
  {
    text: "</>",
    top: 7,
    left: 6,
    size: 30,
    rotate: -12,
    duration: 9,
    delay: 0,
    tone: "accent",
    weight: "bold",
  },
  {
    text: "{ }",
    top: 12,
    left: 90,
    size: 34,
    rotate: 10,
    duration: 11,
    delay: 1,
    tone: "dim",
  },
  {
    text: "01101001",
    top: 21,
    left: 47,
    size: 13,
    rotate: 0,
    duration: 8,
    delay: 0.5,
    tone: "dim",
  },
  {
    text: "npm install",
    top: 33,
    left: 3,
    size: 12,
    rotate: -4,
    duration: 10,
    delay: 2,
    tone: "dim",
  },
  {
    text: "git commit -m",
    top: 4,
    left: 38,
    size: 12,
    rotate: 3,
    duration: 12,
    delay: 1.5,
    tone: "dim",
  },
  {
    text: "const dev = () =>",
    top: 46,
    left: 93,
    size: 12,
    rotate: -6,
    duration: 9,
    delay: 0.8,
    tone: "accent",
  },
  {
    text: "SELECT * FROM",
    top: 61,
    left: 9,
    size: 12,
    rotate: 5,
    duration: 10,
    delay: 2.4,
    tone: "dim",
  },
  {
    text: "<div />",
    top: 71,
    left: 82,
    size: 13,
    rotate: -3,
    duration: 11,
    delay: 1.2,
    tone: "dim",
  },
  {
    text: "import React",
    top: 83,
    left: 18,
    size: 12,
    rotate: 4,
    duration: 9,
    delay: 0.3,
    tone: "dim",
  },
  {
    text: "0x4F2A",
    top: 91,
    left: 62,
    size: 12,
    rotate: -8,
    duration: 8,
    delay: 1.8,
    tone: "accent",
  },
  {
    text: "λ",
    top: 51,
    left: 1,
    size: 30,
    rotate: 0,
    duration: 13,
    delay: 0.6,
    tone: "accent",
  },
  {
    text: "async / await",
    top: 16,
    left: 68,
    size: 12,
    rotate: 6,
    duration: 10,
    delay: 2.1,
    tone: "dim",
  },
  {
    text: ">_",
    top: 39,
    left: 57,
    size: 24,
    rotate: 0,
    duration: 7,
    delay: 0,
    tone: "accent",
    weight: "bold",
  },
  {
    text: "console.log()",
    top: 95,
    left: 33,
    size: 12,
    rotate: -2,
    duration: 9,
    delay: 1,
    tone: "dim",
  },
  {
    text: "#!/usr/bin/env",
    top: 2,
    left: 72,
    size: 11,
    rotate: -5,
    duration: 12,
    delay: 2.6,
    tone: "dim",
  },
  {
    text: "return true;",
    top: 65,
    left: 44,
    size: 12,
    rotate: 2,
    duration: 10,
    delay: 0.4,
    tone: "dim",
  },
];

// Tiny twinkling sparkle points scattered across the whole section.
const sparkles = [
  { top: 5, left: 20, size: 3, delay: 0 },
  { top: 9, left: 55, size: 2, delay: 0.6 },
  { top: 15, left: 78, size: 3, delay: 1.2 },
  { top: 24, left: 12, size: 2, delay: 0.3 },
  { top: 28, left: 63, size: 3, delay: 1.8 },
  { top: 36, left: 40, size: 2, delay: 0.9 },
  { top: 42, left: 85, size: 3, delay: 0.2 },
  { top: 48, left: 8, size: 2, delay: 1.5 },
  { top: 55, left: 30, size: 3, delay: 0.7 },
  { top: 58, left: 70, size: 2, delay: 2.1 },
  { top: 66, left: 52, size: 3, delay: 0.4 },
  { top: 72, left: 15, size: 2, delay: 1.1 },
  { top: 78, left: 90, size: 3, delay: 1.9 },
  { top: 85, left: 60, size: 2, delay: 0.5 },
  { top: 90, left: 25, size: 3, delay: 1.4 },
  { top: 95, left: 75, size: 2, delay: 0.8 },
];

function HeroBackdrop() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
    >
      <style>{`
        @keyframes floatDrift {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        @keyframes sparkleTwinkle {
          0%, 100% { opacity: 0.15; transform: scale(0.7); }
          50% { opacity: 0.9; transform: scale(1.15); }
        }
      `}</style>

      {/* Soft ambient glow blobs only (same accent token, used as light) —
          no grid/pattern here, since a hard-edged texture like that always
          creates a visible seam right where the section ends and the next
          one begins. Blurred glow fades to nothing gradually instead. */}
      <div className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full bg-[#64FFDA]/10 blur-[120px]" />
      <div className="absolute bottom-0 -right-24 w-[480px] h-[480px] rounded-full bg-[#64FFDA]/[0.06] blur-[150px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[620px] h-[280px] rounded-full bg-[#64FFDA]/5 blur-[150px]" />

      {/* Oversized watermark glyph — the one "signature" mark */}
      <div
        className="absolute -top-14 right-[-60px] font-mono font-bold text-[#64FFDA]/[0.05] leading-none select-none rotate-[-6deg]"
        style={{ fontSize: 300 }}
      >
        {"</>"}
      </div>

      {/* Scattered, lightweight code / dev snippets across the full section */}
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
            className={`font-mono whitespace-nowrap select-none ${
              g.tone === "accent" ? "text-[#64FFDA]/20" : "text-paperdim/20"
            } ${g.weight === "bold" ? "font-bold" : ""}`}
            style={{
              fontSize: g.size,
              display: "inline-block",
              animation: `floatDrift ${g.duration}s ease-in-out ${g.delay}s infinite`,
            }}
          >
            {g.text}
          </span>
        </div>
      ))}

      {/* Twinkling sparkle points ("fot fot") spread across the section */}
      {sparkles.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#64FFDA]"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            boxShadow: "0 0 8px 1px currentColor",
            animation: `sparkleTwinkle ${2.6 + s.delay}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative z-[2] min-h-screen flex items-center px-[5vw] pt-[110px] max-w-none w-full mx-auto overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #050b14 0%, #0a1f30 55%, #0e2c42 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <HeroBackdrop />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr_1.15fr] gap-12 lg:gap-10 xl:gap-16 items-center w-full max-w-[1800px] mx-auto">
        <div className="flex justify-center order-2 lg:order-1">
          <OrbitSkills />
        </div>
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <div className="font-mono text-[#64FFDA] text-sm tracking-[3px] uppercase mb-5">
            Hello, I&apos;m
          </div>
          {/* Two separate clamp formulas (below lg / from lg) because the
              layout itself changes shape at that breakpoint — single
              full-width column below lg, a narrower ~1.3fr grid column
              from lg onward. Sizing off one continuous vw formula across
              that boundary would make the name overflow/wrap right at
              the breakpoint since the available width suddenly shrinks.
              whitespace-nowrap + these two safe ranges keep "Md Tanvir
              Hossain" on one line at every screen size. */}
          <h2 className="font-serif font-light italic text-paper leading-[1.05] tracking-tight whitespace-nowrap text-[clamp(28px,6.5vw,50px)] lg:text-[clamp(30px,3vw,60px)]">
            Md Tanvir Hossain
          </h2>
          <div className="font-mono text-[#64FFDA] text-xl md:text-2xl mt-5">
            <Typewriter />
          </div>
          <p className="text-paperdim text-lg mt-6 max-w-xl mx-auto lg:mx-0">
            A passionate and curious learner who loves to explore the world of
            technology — bridging AI, design, and engineering.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 mt-8">
            {socials.map((social) => {
              const Icon = social.Icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-paperdim hover:border-[#64FFDA] hover:text-[#64FFDA] transition-colors"
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
          <div className="flex justify-center lg:justify-start gap-5 mt-9">
            {/* Both buttons share one hover language now: a soft lift,
                an accent glow shadow, and a diagonal light sweep that
                travels across on hover — same easing on both so they
                read as one consistent, deliberate interaction instead
                of two different tricks. */}
            <a
              href="#about"
              className="group relative inline-flex items-center overflow-hidden rounded-md border border-line px-7 py-3.5 font-mono text-sm tracking-wide uppercase text-paper transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:-translate-y-0.5 hover:border-[#64FFDA] hover:shadow-[0_10px_26px_-10px_rgba(100,255,218,0.55)]"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-[#64FFDA]/20 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-full" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#64FFDA]">
                About Me
              </span>
            </a>

            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-[#64FFDA] px-7 py-3.5 font-mono text-sm font-semibold uppercase text-[#0A0A0C] transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(100,255,218,0.6)]"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-full" />
              <span className="relative z-10">View Work</span>
              <FaArrowRight
                size={13}
                className="relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
        {/* Image column: bounded, fluid clamp — scales with viewport width
            like the Orbit component, but stays within a controlled
            min/max range so it never looks oversized on a big desktop
            monitor or undersized on a laptop. Width follows automatically
            from the 4:5 aspect ratio. */}
        <div className="order-3 flex justify-center">
          <div
            className="w-full aspect-[4/5] max-w-[440px] rounded-2xl bg-panelsolid border border-line overflow-hidden
              lg:w-auto lg:max-w-none lg:aspect-[4/5] lg:h-[clamp(380px,34vw,500px)]"
          >
            <PhotoSlideshow />
          </div>
        </div>
      </div>
    </section>
  );
}
