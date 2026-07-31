"use client";

import SectionWatermark from "@/components/SectionWatermark";
import {
  GraduationCap,
  FolderKanban,
  Trophy,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const tagIconMap: Record<string, LucideIcon> = {
  University: GraduationCap,
  Project: FolderKanban,
  Achievement: Trophy,
  Workshop: Wrench,
};

const academicMoments = [
  {
    year: "2022",
    title: "Enrolled at EWU",
    tag: "University",
    desc: "Began my B.Sc. in Computer Science & Engineering. Kicked off my journey into software development, algorithms, and beyond.",
    image: "/images/academic/enrolled-ewu.jpg",
  },
  {
    year: "2023",
    title: "Project Showcase",
    tag: "Project",
    desc: "Presented multiple academic projects to faculty and peers, gaining hands-on experience in public speaking and technical demonstration.",
    image: "/images/academic/enrolled-ewu.jpg",
  },
  {
    year: "2024",
    title: "Dean's Recognition",
    tag: "Achievement",
    desc: "Achieved consistent academic recognition, balancing coursework with hands-on development projects throughout the semester.",
    image: "/images/academic/enrolled-ewu.jpg",
  },
  {
    year: "2025",
    title: "Tech Workshop",
    tag: "Workshop",
    desc: "Participated in on-campus tech workshops covering AI, web development, and modern engineering practices.",
    image: "/images/academic/enrolled-ewu.jpg",
  },
];

export default function AcademicSection() {
  return (
    <section
      id="academic"
      className="relative z-[2] w-full py-[110px] overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f182b 0%, #0d3450 55%, #0c4a6e 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10 px-[5vw] max-w-[1620px] mx-auto">
        <SectionWatermark text="Academic" />

        <div className="text-center mb-16">
          <div className="font-mono text-[#64FFDA] text-xs tracking-[3px] uppercase mb-2">
            Academic Experience
          </div>
          <h2 className="font-serif font-normal text-[clamp(32px,5vw,52px)] text-paper">
            Campus <em className="text-[#64FFDA] italic font-light">Moments</em>
          </h2>
          <p className="text-paperdim mt-3">
            Highlights from my academic journey — projects, events &amp;
            milestones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicMoments.map((m) => (
            <div
              key={m.title}
              className="group relative rounded-lg border border-[#ede8dc]/25 overflow-hidden transition-colors duration-500 hover:border-[#64FFDA]/50"
              style={{
                background:
                  "linear-gradient(145deg, rgba(20,42,68,0.5) 0%, rgba(14,30,52,0.5) 45%, rgba(10,22,38,0.5) 100%)",
              }}
            >
              {/* Image */}
              <div className="h-44 relative overflow-hidden">
                <img
                  src={m.image}
                  alt={m.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1626] via-[#0a1626]/10 to-transparent opacity-80" />

                {/* Year badge */}
                <span className="absolute top-4 right-4 font-mono text-[11px] font-semibold bg-[#64FFDA]/20 text-[#64FFDA] px-3 py-1.5 rounded-full border border-[#64FFDA]/40 backdrop-blur-sm transition-all duration-300 group-hover:bg-[#64FFDA]/30 group-hover:border-[#64FFDA]/70">
                  {m.year}
                </span>

                {/* subtle glow line under image on hover */}
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#64FFDA]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl text-paper transition-colors duration-300 group-hover:text-[#64FFDA]">
                  {m.title}
                </h3>
                <p className="text-paperdim text-sm mt-3 leading-relaxed">
                  {m.desc}
                </p>
                {(() => {
                  const TagIcon = tagIconMap[m.tag];
                  return (
                    <span className="inline-flex items-center gap-1.5 mt-5 font-mono text-[10px] font-semibold tracking-[1.5px] uppercase px-4 py-2 rounded-md text-paper bg-[#0a1520]/80 shadow-sm transition-colors duration-300 group-hover:bg-[#0a1520]">
                      {TagIcon && <TagIcon size={12} strokeWidth={2.25} />}
                      {m.tag}
                    </span>
                  );
                })()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
