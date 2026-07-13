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

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative z-[2] min-h-screen flex items-center px-[5vw] pt-[110px] max-w-none w-full mx-auto overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f182b 0%, #0d3450 55%, #0c4a6e 100%)",
        backgroundAttachment: "fixed",
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
                  className="w-11 h-11 rounded-full border border-white/10 bg-[#0d3450]/25 flex items-center justify-center text-white hover:border-[#64FFDA] hover:text-[#64FFDA] hover:bg-[#64FFDA]/10 transition-colors"
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
              className="group relative inline-flex items-center overflow-hidden rounded-md border border-[#ede8dc]/50 bg-transparent px-7 py-3.5 font-mono text-sm tracking-wide uppercase text-[#ede8dc] transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:-translate-y-0.5 hover:border-[#64FFDA] hover:text-[#64FFDA]"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-full" />
              <span className="relative z-10">About Me</span>
            </a>

            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md border border-[#ede8dc]/50 bg-transparent px-7 py-3.5 font-mono text-sm font-semibold uppercase text-[#ede8dc] transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:-translate-y-0.5 hover:border-[#64FFDA] hover:text-[#64FFDA]"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-full" />
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
