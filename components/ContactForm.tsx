"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire this up to an email service (Formspree, Resend, EmailJS, etc.)
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="font-mono text-xs tracking-wide uppercase text-paperdim">
          Your Name
        </label>
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Md Tanvir Hossain"
          className="mt-2 w-full bg-panelsolid border border-line rounded-md px-4 py-3 text-sm text-paper placeholder:text-paperdim/50 focus:outline-none focus:border-[#64FFDA] transition-colors"
        />
      </div>
      <div>
        <label className="font-mono text-xs tracking-wide uppercase text-paperdim">
          Your Email
        </label>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="hello@example.com"
          className="mt-2 w-full bg-panelsolid border border-line rounded-md px-4 py-3 text-sm text-paper placeholder:text-paperdim/50 focus:outline-none focus:border-[#64FFDA] transition-colors"
        />
      </div>
      <div>
        <label className="font-mono text-xs tracking-wide uppercase text-paperdim">
          Message
        </label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell me about your project..."
          className="mt-2 w-full bg-panelsolid border border-line rounded-md px-4 py-3 text-sm text-paper placeholder:text-paperdim/50 focus:outline-none focus:border-[#64FFDA] transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="group relative w-full overflow-hidden font-mono text-sm tracking-wide uppercase border-2 border-[#64FFDA]/70 bg-transparent text-[#64FFDA] font-semibold rounded-md py-3.5 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] hover:-translate-y-0.5 hover:border-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#0A0A0C] hover:shadow-[0_20px_45px_-15px_rgba(100,255,218,0.55)]"
      >
        {/* Diagonal shine sweep — same treatment used across the site's
            card hovers, gliding across the button on hover. */}
        <span className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          <span className="absolute top-0 -left-1/2 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[120%] group-hover:translate-x-[420%] transition-transform duration-[900ms] ease-out" />
        </span>
        <span className="relative z-20 inline-block transition-transform duration-300 group-hover:scale-[1.03]">
          {status === "sent" ? "Message Sent ✓" : "Send Message →"}
        </span>
      </button>
      {status === "sent" && (
        <p className="text-xs text-paperdim font-mono">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
      )}
    </form>
  );
}
