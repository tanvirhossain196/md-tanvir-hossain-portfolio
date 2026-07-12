import type { Metadata, Viewport } from "next";
import {
  Fraunces,
  Inter,
  JetBrains_Mono,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";
import AIChatWidget from "@/components/AIChatWidget";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jbmono",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const siteUrl = "https://tanvirhossain.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Md Tanvir Hossain — Software Engineer",
    template: "%s | Md Tanvir Hossain",
  },
  description:
    "Portfolio of Md Tanvir Hossain, a software engineer specializing in React, Next.js, and Node.js. Explore projects, skills, and experience.",
  keywords: [
    "Md Tanvir Hossain",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "Full Stack Developer Bangladesh",
  ],
  authors: [{ name: "Md Tanvir Hossain", url: siteUrl }],
  creator: "Md Tanvir Hossain",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Md Tanvir Hossain — Software Engineer",
    description:
      "Portfolio of Md Tanvir Hossain, a software engineer specializing in React, Next.js, and Node.js.",
    siteName: "Md Tanvir Hossain Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Md Tanvir Hossain — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Tanvir Hossain — Software Engineer",
    description:
      "Portfolio of Md Tanvir Hossain, a software engineer specializing in React, Next.js, and Node.js.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F1419",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md Tanvir Hossain",
  jobTitle: "Software Engineer",
  url: siteUrl,
  sameAs: ["https://github.com/", "https://linkedin.com/"],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jbmono.variable} ${cormorant.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <div className="noise" aria-hidden="true" />
        {children}
        <AIChatWidget />
      </body>
    </html>
  );
}
