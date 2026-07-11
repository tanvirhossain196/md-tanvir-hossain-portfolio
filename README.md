# Md Tanvir Hossain — Portfolio (Next.js)

A fast, SEO-ready, mobile-friendly developer portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Structure mirrors a full one-page portfolio: Home (rotating skills orbit), About (with tabs), Academic timeline, Projects, Skills, Certificates, Hobbies, and Contact — with a blue accent color scheme.

## Structure

```
app/
  layout.tsx      SEO metadata, JSON-LD, fonts
  page.tsx        All page sections + content data
  globals.css     Global styles + custom keyframes
  sitemap.ts       Auto sitemap.xml
  robots.ts        Auto robots.txt
components/
  Nav.tsx            Top navigation + Resume/CV buttons + settings icon
  OrbitSkills.tsx     Two interleaved rings, same radius, same speed, opposite directions (pure CSS, zero client JS)
  AboutTabs.tsx       Education / Basic Skills / Soft Skills tabs (client)
  ContactForm.tsx     Contact form UI (client, not yet wired to a backend)
  Typewriter.tsx      Rotating typewriter role text under the name (client)
  SectionWatermark.tsx  Giant faint background word behind each section heading
  DecorRing.tsx       Small fixed decorative ring (top-left, matches reference site)
  AIChatWidget.tsx    Floating "Let's Talk" widget with quick-reply chips and canned local answers (client)
```

## Why this is fast

- Fully static/server-rendered — no client data fetching.
- The orbit animation is 100% CSS — positions are computed on the server at build time and the rotation itself is done with `@keyframes`, so it adds **zero JavaScript** to the bundle.
- Only 2 tiny client components (`AboutTabs`, `ContactForm`) ship any interactive JS — everything else is a Server Component.
- Self-hosted fonts via `next/font/google` (no external font requests at runtime).
- Tailwind ships only the utility classes actually used.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build & deploy

```bash
npm run build
npm start
```

Recommended: push to GitHub → import at [vercel.com/new](https://vercel.com/new) → deploy (zero config).

## Before going live — checklist

- [ ] Replace all lorem ipsum bios, project descriptions, academic milestones, hobbies text in `app/page.tsx` with your real content.
- [ ] Replace placeholder emojis/gradient thumbnails with real photos using `next/image` (including the hero photo box and Video CV thumbnail).
- [ ] Update email/phone/social links (Home hero + Contact section).
- [ ] Wire up `components/ContactForm.tsx` to a real email service (Formspree, Resend, EmailJS) — right now it only shows a "sent" state locally.
- [ ] Link the Resume/CV buttons in `components/Nav.tsx` to your actual PDF files.
- [ ] Update the canned answers in `components/AIChatWidget.tsx` to reflect your real skills/projects/goals.
- [ ] Embed your real Video CV in the placeholder player in `app/page.tsx`.
- [ ] Replace `https://tanvirhossain.dev` in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` with your real domain.
- [ ] Add `/public/og-image.png` (1200×630) and `/public/favicon.ico`.
- [ ] Run Lighthouse/PageSpeed after deploying to confirm real-world scores.

## Notes

- `next/font` needs internet access at **build time** to fetch Fraunces, Inter, and JetBrains Mono — this is normal and works automatically on Vercel or any machine with internet access.
