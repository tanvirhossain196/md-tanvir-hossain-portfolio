import OrbitSkills from "@/components/OrbitSkills";
import Typewriter from "@/components/Typewriter";
import PhotoSlideshow from "@/components/PhotoSlideshow";
import { Handshake } from "lucide-react";
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

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative z-[2] min-h-screen flex items-center px-[5vw] pt-[110px] max-w-none w-full mx-auto overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f182b 0%, #0d3450 55%, #0c4a6e 100%)",
        backgroundAttachment: "fixed",
        backgroundSize: "100vw 100vh",
        backgroundPosition: "top left",
      }}
    >
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
          <p className="text-paperdim text-lg mt-6 max-w-xl mx-auto lg:mx-0 text-balance">
            Front-end developer skilled in React.js, Next.js, TypeScript,
            JavaScript, and Tailwind CSS. I build clean, responsive, and
            user-friendly web applications with modern technologies. Let's
            create something amazing together!
          </p>
          <div className="flex justify-center lg:justify-start gap-5 mt-8">
            {socials.map((social) => {
              const Icon = social.Icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full border border-white/10 bg-[#0d3450]/25 flex items-center justify-center text-white hover:border-[#64FFDA] hover:text-[#64FFDA] hover:bg-[#64FFDA]/10 transition-colors"
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
          <div className="flex flex-nowrap justify-center lg:justify-start gap-2 sm:gap-4 lg:gap-5 mt-9">
            {/* All three buttons share one fixed width so they read as a
                matched set, plus one hover language: a soft lift, an
                accent glow border, and a diagonal light sweep across on
                hover. Sized down slightly (vs. the original) and kept
                nowrap so mobile/tablet still fit all three in a single
                row without wrapping or overflow. */}
            <a
              href="#about"
              className="group relative inline-flex w-[104px] sm:w-[125px] lg:w-[135px] items-center justify-center overflow-hidden rounded-md border border-[#ede8dc]/50 bg-transparent py-3 sm:py-3 lg:py-3.5 font-mono text-[12px] sm:text-[13px] tracking-wide uppercase text-[#ede8dc] transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:-translate-y-0.5 hover:border-[#64FFDA] hover:text-[#64FFDA]"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-full" />
              <span className="relative z-10">About Me</span>
            </a>

            <a
              href="https://wa.me/8801616122600"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-[104px] sm:w-[125px] lg:w-[135px] items-center justify-center gap-1.5 overflow-hidden rounded-md border border-[#ede8dc]/50 bg-transparent py-3 sm:py-3 lg:py-3.5 font-mono text-[12px] sm:text-[13px] font-semibold tracking-wide uppercase text-[#ede8dc] transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:-translate-y-0.5 hover:border-[#64FFDA] hover:text-[#64FFDA]"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-full" />
              <Handshake
                size={13}
                strokeWidth={2.2}
                className="relative z-10 shrink-0"
              />
              <span className="relative z-10">Hire Me</span>
            </a>

            <a
              href="#projects"
              className="group relative inline-flex w-[104px] sm:w-[125px] lg:w-[135px] items-center justify-center gap-1.5 overflow-hidden rounded-md border border-[#ede8dc]/50 bg-transparent py-3 sm:py-3 lg:py-3.5 font-mono text-[12px] sm:text-[13px] font-semibold uppercase text-[#ede8dc] transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:-translate-y-0.5 hover:border-[#64FFDA] hover:text-[#64FFDA]"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-full" />
              <span className="relative z-10">View Work</span>
              <FaArrowRight
                size={12}
                className="relative z-10 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-1"
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
          <div className="relative w-full max-w-[440px] lg:w-auto lg:max-w-none">
            <div
              className="relative w-full aspect-[4/5] rounded-lg bg-panelsolid overflow-hidden
                border border-[#64FFDA]/40
                shadow-[0_18px_40px_-8px_rgba(2,10,25,0.9)]
                lg:w-auto lg:aspect-[4/5] lg:h-[clamp(380px,34vw,500px)]"
            >
              <PhotoSlideshow />
              {/* Subtle bottom-to-top depth overlay so the frame reads as one composed panel, not a flat cutout */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f182b]/45 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
