import type { Metadata } from "next";
import Nav from "@/components/Nav";
import OrbitSkills from "@/components/OrbitSkills";
import ContactForm from "@/components/ContactForm";
import Typewriter from "@/components/Typewriter";
import PhotoSlideshow from "@/components/PhotoSlideshow";
import ProjectsSection from "@/components/ProjectsSection";
import HobbiesOrbit from "@/components/HobbiesOrbit";
import ContactSection from "@/components/ContactSection";
import AcademicSection from "@/components/AcademicSection";
import HomeSection from "@/components/HomeSection";
import VideoCVSection from "@/components/VideoCVSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import CertificatesSection from "@/components/CertificatesSection";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
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

export const metadata: Metadata = {
  title: "Md Tanvir Hossain — Portfolio",
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

const hobbies = [
  {
    icon: "🎮",
    title: "Gaming",
    sub: "How games sharpen my problem-solving skills",
    desc: "Gaming isn't just entertainment — it actively sharpens my problem-solving skills. Every game teaches something different that I bring into my engineering mindset.",
    tags: ["Strategy", "Quick Decisions", "Pattern Recognition"],
  },
  {
    icon: "🎬",
    title: "Watching Movies",
    sub: "English films · documentaries · sci-fi",
    desc: "Watching English movies has been one of my most effective ways to improve my spoken English and spark creative thinking for new project ideas.",
    tags: ["English Speaking", "Creative Thinking", "Sci-Fi"],
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* HOME */}
        <HomeSection />

        {/* VIDEO CV */}
        <VideoCVSection />

        {/* ABOUT */}
        <AboutSection />

        {/* ACADEMIC */}
        <AcademicSection />

        {/* PROJECTS */}
        <ProjectsSection />

        {/* SKILLS */}
        <SkillsSection />

        {/* CERTIFICATES */}
        <CertificatesSection />

        {/* HOBBIES */}
        <HobbiesOrbit />

        {/* CONTACT */}
        <ContactSection />
      </main>

      <footer
        className="relative z-[2] text-center px-[5vw] py-9 font-mono text-xs text-paperdim/50 border-t border-line"
        style={{
          background:
            "linear-gradient(135deg, #050b14 0%, #0a1f30 55%, #0e2c42 100%)",
          backgroundAttachment: "fixed",
        }}
      >
        Designed &amp; Built by{" "}
        <span className="text-paperdim">Md Tanvir Hossain</span> · 2026
        <br />
        Thanks for visiting my portfolio
      </footer>
    </>
  );
}
