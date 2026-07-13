"use client";

import { useState } from "react";
import SectionWatermark from "@/components/SectionWatermark";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaPaperPlane,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import type { IconType } from "react-icons";

const socials: { label: string; Icon: IconType; href: string }[] = [
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

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire this up to your API route / email service of choice.
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="relative z-[2] py-[110px] overflow-hidden border-b border-line"
      style={{
        background:
          "linear-gradient(345deg, #1e4160 0%, #15304a 55%, #102539 100%)",
      }}
    >
      {/* glowing top line — same treatment as the Certificates section */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#64FFDA]/70 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#64FFDA]/30 to-transparent blur-[2px]" />

      {/* Glowing bottom line — same treatment as the top line, just lighter */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#64FFDA]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#64FFDA]/15 to-transparent blur-[2px]" />

      <div className="px-[5vw] max-w-[1400px] mx-auto relative overflow-hidden">
        <SectionWatermark text="Contact" />

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="font-mono text-[#64FFDA] text-xs tracking-[3px] uppercase mb-3">
              Get In Touch
            </div>
            <h2 className="font-display text-[clamp(32px,5vw,50px)] text-paper leading-tight">
              Let&apos;s Work
              <br />
              <em className="text-[#64FFDA] not-italic italic">Together</em>
            </h2>
            <p className="text-paperdim mt-5 max-w-sm">
              Have a project in mind or want to collaborate? Feel free to reach
              out — I&apos;d love to hear from you.
            </p>

            <div className="mt-8 space-y-3 font-mono text-sm text-[#CFEFE8]">
              <a
                href="mailto:mdtanvirhossain4680@gmail.com"
                className="flex items-center gap-3 hover:text-[#64FFDA] transition-colors w-fit"
              >
                <FaEnvelope className="text-[#64FFDA]" />
                <span>mdtanvirhossain4680@gmail.com</span>
              </a>
              <a
                href="tel:+8801616122600"
                className="flex items-center gap-3 hover:text-[#64FFDA] transition-colors w-fit"
              >
                <FaPhoneAlt className="text-[#64FFDA]" />
                <span>+880 1616-122600</span>
              </a>
            </div>

            <div className="flex gap-4 mt-8">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-[#F5F1E8]/50 flex items-center justify-center text-paper/80 hover:border-[#64FFDA] hover:text-[#64FFDA] transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div
            className="rounded-xl border border-[#F5F1E8]/25 p-8"
            style={{
              background:
                "linear-gradient(165deg, #16324a 0%, #112742 55%, #0d1f36 100%)",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  placeholder="Name"
                  aria-label="Your Name"
                  className="w-full rounded-md bg-white/[0.04] border border-white/25 px-4 py-3 text-sm text-paper placeholder:text-paperdim/50 focus:outline-none focus:border-[#64FFDA]/60 transition-colors"
                />
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  placeholder="Email"
                  aria-label="Your Email"
                  className="w-full rounded-md bg-white/[0.04] border border-white/25 px-4 py-3 text-sm text-paper placeholder:text-paperdim/50 focus:outline-none focus:border-[#64FFDA]/60 transition-colors"
                />
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  placeholder="Phone"
                  aria-label="Your Phone"
                  className="w-full rounded-md bg-white/[0.04] border border-white/25 px-4 py-3 text-sm text-paper placeholder:text-paperdim/50 focus:outline-none focus:border-[#64FFDA]/60 transition-colors"
                />
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, subject: e.target.value }))
                  }
                  placeholder="Subject"
                  aria-label="Subject"
                  className="w-full rounded-md bg-white/[0.04] border border-white/25 px-4 py-3 text-sm text-paper placeholder:text-paperdim/50 focus:outline-none focus:border-[#64FFDA]/60 transition-colors"
                />
              </div>

              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                placeholder="Message"
                aria-label="Message"
                className="w-full rounded-md bg-white/[0.04] border border-white/25 px-4 py-3 text-sm text-paper placeholder:text-paperdim/50 focus:outline-none focus:border-[#64FFDA]/60 transition-colors resize-none"
              />

              <button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md border-2 border-[#F5F1E8]/60 bg-transparent font-mono text-xs tracking-wide uppercase font-semibold px-8 py-3.5 text-paper transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] hover:-translate-y-0.5 hover:border-[#64FFDA] hover:text-[#64FFDA] hover:shadow-[0_20px_45px_-15px_rgba(100,255,218,0.35)]"
              >
                {/* Diagonal shine sweep — a subtle accent glide across the
                    button on hover, since the button itself no longer
                    fills solid on hover (border + text color change only). */}
                <span className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
                  <span className="absolute top-0 -left-1/2 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-[#64FFDA]/20 to-transparent -translate-x-[120%] group-hover:translate-x-[420%] transition-transform duration-[900ms] ease-out" />
                </span>
                <span className="relative z-20 flex items-center gap-2 transition-transform duration-300 group-hover:scale-[1.03]">
                  <FaPaperPlane
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  />
                  {sent ? "Message Sent" : "Send Message"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
