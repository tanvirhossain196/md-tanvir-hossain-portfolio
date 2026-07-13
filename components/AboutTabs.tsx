"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import {
  GraduationCap,
  Landmark,
  Building2,
  Code2,
  Brain,
  Users,
  MessagesSquare,
  Lightbulb,
  Clock,
  RefreshCcw,
  Handshake,
  FileText,
  X,
  Download,
  ExternalLink,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type EducationItem = {
  icon: LucideIcon;
  title: string;
  org: string;
  meta: string;
  year: string;
  docLabel: string;
  fileUrl?: string; // path to document image, e.g. /documents/bsc-transcript.jpg
};

type CardItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const education: EducationItem[] = [
  {
    icon: GraduationCap,
    title: "B.Sc. in Computer Science & Engineering",
    org: "East West University (EWU)",
    meta: "Current CGPA : 3.73 / 4.00",
    year: "2022 — 2026",
    docLabel: "View Document",
    fileUrl: "/images/documents/bsc-transcript.jpg",
  },
  {
    icon: Landmark,
    title: "Higher Secondary Certificate (HSC)",
    org: "Milestone College",
    meta: "GPA : 4.58 / 5.00",
    year: "Completed: 2020",
    docLabel: "View Certificate",
    fileUrl: "/images/documents/hsc-certificate.jpg",
  },
  {
    icon: Building2,
    title: "Secondary School Certificate (SSC)",
    org: "Shibpur Union High School",
    meta: "GPA : 4.67 / 5.00",
    year: "Completed: 2018",
    docLabel: "View Certificate",
    fileUrl: "/images/documents/ssc-certificate.jpg",
  },
];

const basicSkills: CardItem[] = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Responsive, user-friendly websites & web apps",
  },
  {
    icon: Brain,
    title: "Problem Solving",
    description: "Analytical thinking with data structures & algorithms",
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Leading teams and projects effectively",
  },
];

const softSkills: CardItem[] = [
  {
    icon: MessagesSquare,
    title: "Communication",
    description: "Clear verbal and written communication skills",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Collaborating effectively with team members",
  },
  {
    icon: Lightbulb,
    title: "Critical Thinking",
    description: "Analyzing problems and making smart decisions",
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "Managing tasks efficiently and meeting deadlines",
  },
  {
    icon: RefreshCcw,
    title: "Adaptability",
    description: "Quickly learning and adjusting to new technologies",
  },
  {
    icon: Handshake,
    title: "Work Ethics",
    description: "Professional attitude and responsibility at work",
  },
];

const tabs = ["Education", "Basic Skills", "Soft Skills"] as const;

// Self-contained font import so this component can carry its own
// "uncommon" typographic voice (distinct from the site's default
// font-display / font-mono / font-serif) without touching global
// layout/font config. Space Grotesk gives the titles a slightly
// unusual, technical-but-editorial character.
function AboutTabsFont() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap');
      .at-heading {
        font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
        letter-spacing: 0.01em;
      }
    `}</style>
  );
}

// Card background: a soft, mostly-transparent navy wash so the section's
// own background gradient shows through clearly behind the card, with just
// a touch of extra darkness for contrast.
const CARD_GRADIENT =
  "linear-gradient(145deg, rgba(20,42,68,0.5) 0%, rgba(14,30,52,0.5) 45%, rgba(10,22,38,0.5) 100%)";

function Card({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative p-4 flex gap-4 rounded-xl border border-[#ede8dc]/25 overflow-hidden shadow-[0_10px_28px_-8px_rgba(0,0,0,0.35)]"
      style={{
        background: CARD_GRADIENT,
      }}
    >
      <div className="relative z-10 flex gap-4 w-full min-w-0">{children}</div>
    </div>
  );
}
function IconBox({ Icon }: { Icon: LucideIcon }) {
  return (
    <div className="w-11 h-11 shrink-0 rounded-md bg-[#64FFDA]/10 border border-[#64FFDA]/30 flex items-center justify-center text-[#64FFDA]">
      <Icon size={20} strokeWidth={1.75} />
    </div>
  );
}

function DocumentModal({
  item,
  onClose,
}: {
  item: EducationItem;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[85vh] bg-panelsolid border border-line rounded-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 p-5 border-b border-line bg-black/20">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 shrink-0 rounded-full bg-[#64FFDA]/10 border border-[#64FFDA]/30 flex items-center justify-center text-[#64FFDA]">
              <item.icon size={18} strokeWidth={1.75} />
            </div>
            <div className="min-w-0">
              <h3 className="at-heading font-semibold text-paper text-base truncate">
                {item.title}
              </h3>
              <div className="font-mono text-[11px] tracking-wide uppercase text-paperdim truncate">
                {item.org}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            title="Close"
            className="w-8 h-8 shrink-0 rounded-full border border-line flex items-center justify-center text-paperdim hover:text-paper hover:border-[#64FFDA] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body - Image Preview */}
        <div className="flex-1 overflow-y-auto p-5 bg-black/10 flex items-center justify-center">
          {item.fileUrl ? (
            <img
              src={item.fileUrl}
              alt={item.title}
              className="max-w-full max-h-[55vh] w-auto h-auto rounded-lg border border-line/60 object-contain"
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-paperdim">
              <FileText size={32} className="mb-3 opacity-40" />
              <p className="text-sm">No document preview available.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 p-4 border-t border-line bg-black/20">
          <div className="flex items-center gap-3">
            <a
              href={item.fileUrl}
              download
              className="flex items-center gap-2 bg-[#64FFDA] text-black font-mono text-[11px] uppercase tracking-wide px-4 py-2.5 rounded-lg hover:brightness-110 transition-all"
            >
              <Download size={14} />
              Download
            </a>
            <a
              href={item.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#64FFDA]/50 text-[#64FFDA] font-mono text-[11px] uppercase tracking-wide px-4 py-2.5 rounded-lg hover:bg-[#64FFDA]/10 transition-all"
            >
              <ExternalLink size={14} />
              Open in New Tab
            </a>
          </div>
          <div className="font-serif italic text-sm text-paperdim/70 hidden sm:block">
            {item.year}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]>("Education");
  const [openDoc, setOpenDoc] = useState<EducationItem | null>(null);

  return (
    <div>
      <AboutTabsFont />

      <div className="flex gap-8 border-b border-line">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`at-heading text-[clamp(13px,1.3vw,15px)] tracking-wide uppercase pb-3 -mb-px border-b-2 transition-colors ${
              active === tab
                ? "text-[#64FFDA] border-[#64FFDA]"
                : "text-paperdim border-transparent hover:text-paper"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-5 space-y-3.5">
        {active === "Education" &&
          education.map((item) => (
            <Card key={item.title}>
              <IconBox Icon={item.icon} />
              <div className="min-w-0 flex-1 break-words">
                <h3 className="at-heading font-semibold text-paper text-[clamp(13px,1.3vw,16px)] leading-snug">
                  {item.title}
                </h3>
                <div className="text-[clamp(11px,1vw,13px)] text-paperdim mt-1">
                  {item.org}
                </div>
                <div className="text-[clamp(10px,0.9vw,12px)] font-mono text-[#64FFDA] mt-1.5">
                  {item.meta}
                </div>
                <div className="text-[clamp(10px,0.9vw,12px)] font-mono text-[#64FFDA]">
                  {item.year}
                </div>
                <button
                  onClick={() => setOpenDoc(item)}
                  className="flex items-center gap-1.5 text-[clamp(10px,0.9vw,12px)] font-mono text-paperdim hover:text-[#64FFDA] transition-colors mt-1.5"
                >
                  <FileText size={12} />
                  {item.docLabel}
                </button>
              </div>
            </Card>
          ))}

        {active === "Basic Skills" &&
          basicSkills.map((item) => (
            <Card key={item.title}>
              <IconBox Icon={item.icon} />
              <div className="min-w-0 flex-1 break-words">
                <h3 className="at-heading font-semibold text-paper text-[clamp(13px,1.3vw,16px)]">
                  {item.title}
                </h3>
                <div className="text-[clamp(11px,1vw,13px)] text-paperdim mt-1">
                  {item.description}
                </div>
              </div>
            </Card>
          ))}

        {active === "Soft Skills" &&
          softSkills.map((item) => (
            <Card key={item.title}>
              <IconBox Icon={item.icon} />
              <div className="min-w-0 flex-1 break-words">
                <h3 className="at-heading font-semibold text-paper text-[clamp(13px,1.3vw,16px)]">
                  {item.title}
                </h3>
                <div className="text-[clamp(11px,1vw,13px)] text-paperdim mt-1">
                  {item.description}
                </div>
              </div>
            </Card>
          ))}
      </div>

      <a
        href="/cv-pdf/MD_TANVIR_HOSSAIN_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="at-heading group relative mt-5 inline-flex items-center gap-2 overflow-hidden rounded-md border border-[#ede8dc]/50 bg-transparent text-[#ede8dc] text-sm uppercase tracking-wide px-5 py-2.5 transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:-translate-y-0.5 hover:border-[#64FFDA] hover:text-[#64FFDA]"
      >
        <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-full" />
        <FileText size={13} className="relative z-10" />
        <span className="relative z-10">My Resume</span>
      </a>

      {openDoc && (
        <DocumentModal item={openDoc} onClose={() => setOpenDoc(null)} />
      )}
    </div>
  );
}
