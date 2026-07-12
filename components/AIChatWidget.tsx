"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bot,
  X,
  Send,
  Code2,
  FolderKanban,
  GraduationCap,
  Star,
  Target,
  Heart,
  type LucideIcon,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import type { IconType } from "react-icons";

type RichType = "skills" | "projects" | "education";

type Message = {
  from: "bot" | "user";
  text?: string;
  rich?: RichType;
};

// --- Real portfolio data (kept in sync with the actual site content —
// AboutTabs.tsx for education, ProjectsSection.tsx for project titles) ---

const skillsList: { label: string; Icon: IconType; color: string }[] = [
  { label: "React", Icon: SiReact, color: "#61DAFB" },
  { label: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { label: "Node.js", Icon: SiNodedotjs, color: "#6CC24A" },
  { label: "Python", Icon: SiPython, color: "#3776AB" },
  { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { label: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
];

const projectsList: string[] = [
  "Inventory Management System",
  "Dhaka City View",
  "Smart IoT Plant Care System",
  "Wireless Transmitter",
  "Hostel Management System",
  "Payoo — Mobile Wallet Web App",
];

const educationList: {
  degree: string;
  org: string;
  meta: string;
  year: string;
}[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    org: "East West University (EWU)",
    meta: "Current CGPA : 3.73 / 4.00",
    year: "2022 — 2026",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    org: "Milestone College",
    meta: "GPA : 4.58 / 5.00",
    year: "Completed: 2020",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    org: "Shibpur Union High School",
    meta: "GPA : 4.67 / 5.00",
    year: "Completed: 2018",
  },
  {
    degree: "Junior School Certificate (JSC)",
    org: "Wisdom School & College",
    meta: "GPA : 4.25 / 5.00",
    year: "Completed: 2015",
  },
];

type QuickReply = {
  label: string;
  Icon: LucideIcon;
  rich?: RichType;
  answer?: string;
  keywords: string[];
};

const quickReplies: QuickReply[] = [
  {
    label: "Top Skills",
    Icon: Code2,
    rich: "skills",
    keywords: ["skill", "stack", "tech", "technology", "language"],
  },
  {
    label: "Best Projects",
    Icon: FolderKanban,
    rich: "projects",
    keywords: ["project", "work", "portfolio", "build", "app"],
  },
  {
    label: "Education",
    Icon: GraduationCap,
    rich: "education",
    keywords: [
      "education",
      "study",
      "degree",
      "university",
      "school",
      "cgpa",
      "gpa",
    ],
  },
  {
    label: "Why Hire Me?",
    Icon: Star,
    answer:
      "Tanvir combines clean, scalable code with genuine curiosity — quick to learn new tools and focused on building things that actually solve problems.",
    keywords: ["hire", "why you", "strength", "value"],
  },
  {
    label: "Goals",
    Icon: Target,
    answer:
      "Short-term: deepen expertise in full-stack and AI-driven applications. Long-term: build products that bridge good engineering with good design.",
    keywords: ["goal", "future", "plan", "vision"],
  },
  {
    label: "Hobbies",
    Icon: Heart,
    answer:
      "Outside of code — gaming (strategy sharpens problem-solving) and watching English films, sci-fi and documentaries especially.",
    keywords: ["hobby", "hobbies", "free time", "interest"],
  },
];

const FALLBACK_ANSWER =
  "I can only help with questions about Tanvir's portfolio — try asking about his skills, projects, education, goals, or hobbies, or tap one of the topics above.";

// --- Rich answer renderers ---

function SkillsAnswer() {
  return (
    <div>
      <p className="text-xs text-paperdim mb-2.5">Tanvir&apos;s core stack:</p>
      <div className="flex flex-wrap gap-2">
        {skillsList.map((s) => (
          <span
            key={s.label}
            className="inline-flex items-center gap-1.5 bg-black/25 border border-line rounded-full pl-2 pr-3 py-1.5 text-[11px] text-paper"
          >
            <s.Icon size={13} color={s.color} />
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectsAnswer() {
  return (
    <div>
      <p className="text-xs text-paperdim mb-2">A few highlights:</p>
      <ol className="space-y-1.5">
        {projectsList.map((title, i) => (
          <li key={title} className="flex gap-2 text-xs text-paper">
            <span className="font-mono text-[#64FFDA] shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-semibold leading-snug">{title}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function EducationAnswer() {
  return (
    <div className="space-y-3">
      {educationList.map((e) => (
        <div key={e.degree} className="border-l-2 border-[#64FFDA]/40 pl-2.5">
          <div className="text-xs font-semibold text-paper leading-snug">
            {e.degree}
          </div>
          <div className="text-[11px] text-paperdim mt-0.5">{e.org}</div>
          <div className="text-[10px] font-mono text-[#64FFDA] mt-0.5">
            {e.meta} · {e.year}
          </div>
        </div>
      ))}
    </div>
  );
}

function RichContent({ rich }: { rich: RichType }) {
  if (rich === "skills") return <SkillsAnswer />;
  if (rich === "projects") return <ProjectsAnswer />;
  return <EducationAnswer />;
}

// Typing indicator shown while the "bot" is preparing its answer.
function TypingBubble() {
  return (
    <div className="flex items-end gap-2 w-fit">
      <span className="shrink-0 w-6 h-6 rounded-full bg-[#64FFDA]/15 border border-[#64FFDA]/40 flex items-center justify-center text-[#64FFDA]">
        <Bot size={12} strokeWidth={2} />
      </span>
      <div
        className="rounded-2xl rounded-bl-sm border-l-2 border-[#64FFDA]/50 px-3.5 py-2.5 flex items-center gap-1"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, #06121e 92%, white 8%) 0%, #06121e 100%)",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-paperdim/70 animate-bounce [animation-delay:-0.3s]" />
        <span className="w-1.5 h-1.5 rounded-full bg-paperdim/70 animate-bounce [animation-delay:-0.15s]" />
        <span className="w-1.5 h-1.5 rounded-full bg-paperdim/70 animate-bounce" />
      </div>
    </div>
  );
}

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const logEndRef = useRef<HTMLDivElement>(null);

  // Close the popup on any click outside it — the X button still works too,
  // this just adds the "click anywhere else on the page" behavior.
  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Auto-scroll to the latest message (or the typing indicator) any time
  // the conversation changes — so the person never has to scroll manually
  // after hitting Enter.
  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isTyping]);

  // Pushes the user's message immediately, shows a brief typing indicator,
  // then delivers the bot's answer — mirrors how a real assistant "thinks"
  // instead of dumping the answer instantly.
  function respond(userLabel: string, bot: { text?: string; rich?: RichType }) {
    setMessages((m) => [...m, { from: "user", text: userLabel }]);
    setIsTyping(true);
    const delay = 700 + Math.random() * 500;
    setTimeout(() => {
      setIsTyping(false);
      setMessages((m) => [...m, { from: "bot", ...bot }]);
    }, delay);
  }

  function ask(q: QuickReply) {
    respond(q.label, q.rich ? { rich: q.rich } : { text: q.answer });
  }

  // Very light "understanding" layer for free-typed questions: first find
  // which topic the question is about (via keywords), then check whether
  // the phrasing is actually asking the opposite — e.g. "which skills
  // DON'T you know" shouldn't just dump the full skills list, since that
  // answers the wrong question. Negation is detected in both English
  // ("don't", "doesn't", "not") and common Banglish patterns ("na",
  // "jane na", "pare na").
  const NEGATION =
    /\b(don'?t|doesn'?t|isn'?t|aren'?t|can'?t|no idea)\b|\bna\b|jan[ei]?\s*na\b|pare\s*na\b|chini\s*na\b/i;

  function analyze(raw: string): { text?: string; rich?: RichType } {
    const lower = raw.toLowerCase();
    const negated = NEGATION.test(lower);
    const match = quickReplies.find((q) =>
      q.keywords.some((k) => lower.includes(k)),
    );

    if (!match) return { text: FALLBACK_ANSWER };

    if (negated) {
      if (match.rich === "skills") {
        return {
          text: "Tanvir's core stack is React, Next.js, Node.js, Python, TypeScript, MongoDB, and PostgreSQL — beyond that, he's not claiming expertise in everything, but he picks up new tools fast when a project calls for it.",
        };
      }
      if (match.rich === "projects") {
        return {
          text: "He hasn't built literally everything yet — his work so far has focused on web apps, IoT/embedded systems, and a bit of computer graphics. Tap 'Best Projects' above to see exactly what's done.",
        };
      }
      if (match.rich === "education") {
        return {
          text: "He's currently pursuing his B.Sc. — no Master's or PhD yet. Tap 'Education' above for his full academic history so far.",
        };
      }
      // Negation doesn't meaningfully change the other categories
      return match.rich ? { rich: match.rich } : { text: match.answer };
    }

    return match.rich ? { rich: match.rich } : { text: match.answer };
  }

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;
    setInput("");
    respond(value, analyze(value));
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-[200] flex items-center gap-2.5 bg-panelsolid border border-line rounded-full pl-2.5 pr-5 py-2.5 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-[#64FFDA]/50 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_rgba(100,255,218,0.35)]"
      >
        <style>{`
          @keyframes chatRingSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
        <span className="relative w-9 h-9 shrink-0 flex items-center justify-center">
          {/* Slow-spinning gradient ring — a quiet, uncommon touch instead
              of a static circle or a generic ping animation. */}
          <span
            className="absolute inset-0 rounded-full text-[#64FFDA]"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0%, currentColor 35%, transparent 60%)",
              animation: "chatRingSpin 3.5s linear infinite",
            }}
          />
          <span className="absolute inset-[3px] rounded-full bg-panelsolid border border-[#64FFDA]/30 flex items-center justify-center text-[#64FFDA]">
            <Bot size={16} strokeWidth={2} />
          </span>
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-panelsolid" />
        </span>
        <span className="font-mono text-xs text-paper">
          Ask Tanvir&apos;s AI
        </span>
      </button>
    );
  }

  return (
    <div
      ref={panelRef}
      className="fixed bottom-6 left-6 z-[200] w-[400px] max-w-[92vw] rounded-2xl border border-line bg-panelsolid shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7)] overflow-hidden"
    >
      {/* header */}
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-line">
        <div className="flex items-center gap-2.5">
          <span className="relative w-9 h-9 rounded-full bg-[#64FFDA]/15 border border-[#64FFDA]/40 flex items-center justify-center text-[#64FFDA]">
            <Bot size={17} strokeWidth={2} />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-panelsolid" />
          </span>
          <div>
            <div className="font-display text-sm text-paper leading-tight">
              Tanvir&apos;s AI
            </div>
            <div className="font-mono text-[10px] text-[#64FFDA]">
              Ask me 
            </div>
          </div>
        </div>
        <button
          onClick={() => setOpen(false)}
          aria-label="Close chat"
          className="text-paperdim hover:text-paper text-sm w-7 h-7 flex items-center justify-center rounded-full hover:bg-bgsoft transition-colors"
        >
          <X size={14} />
        </button>
      </div>

      {/* quick replies */}
      <div className="grid grid-cols-2 gap-2.5 px-4 py-4 border-b border-line">
        {quickReplies.map((q) => (
          <button
            key={q.label}
            onClick={() => ask(q)}
            disabled={isTyping}
            className="group flex items-center gap-2.5 text-left bg-black/20 border border-line rounded-xl px-3 py-2.5 transition-all duration-300 hover:border-[#64FFDA]/60 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgba(0,0,0,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="shrink-0 w-8 h-8 rounded-lg bg-[#64FFDA]/10 border border-[#64FFDA]/30 flex items-center justify-center text-[#64FFDA] transition-colors duration-300 group-hover:bg-[#64FFDA]/20 group-hover:border-[#64FFDA]/60">
              <q.Icon size={15} strokeWidth={2} />
            </span>
            <span className="font-mono text-[11px] leading-tight text-paperdim group-hover:text-paper transition-colors">
              {q.label}
            </span>
          </button>
        ))}
      </div>

      {/* message log */}
      {(messages.length > 0 || isTyping) && (
        <div className="max-h-80 overflow-y-auto px-4 py-3.5 space-y-3">
          <style>{`
            @keyframes bubbleIn {
              from { opacity: 0; transform: translateY(6px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          {messages.map((m, i) =>
            m.from === "user" ? (
              <div
                key={i}
                className="ml-auto bg-[#64FFDA] text-[#0A0A0C] font-medium text-xs leading-relaxed rounded-2xl rounded-br-sm px-3.5 py-2.5 max-w-[85%] w-fit shadow-[0_6px_16px_-6px_rgba(0,0,0,0.4)]"
                style={{ animation: "bubbleIn 0.25s ease-out" }}
              >
                {m.text}
              </div>
            ) : (
              <div
                key={i}
                className="flex items-end gap-2 max-w-[92%] w-fit"
                style={{ animation: "bubbleIn 0.25s ease-out" }}
              >
                <span className="shrink-0 w-6 h-6 rounded-full bg-[#64FFDA]/15 border border-[#64FFDA]/40 flex items-center justify-center text-[#64FFDA]">
                  <Bot size={12} strokeWidth={2} />
                </span>
                <div
                  className="text-paperdim text-xs leading-relaxed rounded-2xl rounded-bl-sm border-l-2 border-[#64FFDA]/50 px-3.5 py-2.5 shadow-[0_6px_16px_-6px_rgba(0,0,0,0.4)]"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in srgb, #06121e 92%, white 8%) 0%, #06121e 100%)",
                  }}
                >
                  {m.rich ? <RichContent rich={m.rich} /> : m.text}
                </div>
              </div>
            ),
          )}
          {isTyping && <TypingBubble />}
          <div ref={logEndRef} />
        </div>
      )}

      {/* input */}
      <form
        onSubmit={handleSend}
        className="flex items-center gap-2 px-3 py-3 border-t border-line"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about Tanvir..."
          className="flex-1 bg-bgsoft border border-line rounded-full px-3.5 py-2 text-xs text-paper placeholder:text-paperdim/50 focus:outline-none focus:border-[#64FFDA] transition-colors"
        />
        <button
          type="submit"
          aria-label="Send"
          disabled={isTyping}
          className="w-8 h-8 shrink-0 rounded-full bg-[#64FFDA] text-[#0A0A0C] flex items-center justify-center transition-all duration-300 hover:brightness-110 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <Send size={14} />
        </button>
      </form>
    
    </div>
  );
}
