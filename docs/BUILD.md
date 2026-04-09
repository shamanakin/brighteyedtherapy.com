# Bright Eyed Therapy — Build Guide

## Prerequisites

- Node.js 18+ (`node --version`)
- npm 9+ (included with Node)
- Git

## Setup

```bash
cd WEBSITES/brighteyedtherapy.com
npm install
```

## Development

```bash
npm run dev
```

Opens at `http://localhost:3000`. Hot reload is active — changes reflect instantly.

## Build

```bash
npm run build
```

Outputs static files to `out/`. This is what gets deployed to DreamHost. After building, verify the `out/` directory exists and contains `index.html`.

## Lint

```bash
npm run lint
```

Runs ESLint. Fix any errors before deploying.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                    ← Root layout: Nav, Footer, global metadata
│   ├── globals.css                   ← Tailwind base + Google Fonts import
│   ├── page.tsx                      ← Home (/)
│   ├── about/page.tsx                ← About (/about)
│   ├── emdr-therapy-roseville/page.tsx
│   ├── ocd-anxiety-therapy-roseville/page.tsx
│   ├── fees/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Nav.tsx                       ← Sticky nav, mobile hamburger overlay
│   ├── Footer.tsx                    ← Dark footer with credentials
│   ├── CTAButton.tsx                 ← Terracotta CTA button (primary/outline variants)
│   ├── SectionHeading.tsx            ← h1/h2/h3 with design system typography
│   ├── PhotoSlot.tsx                 ← Placeholder for future photos; swaps to <Image> when src provided
│   └── JsonLd.tsx                    ← Structured data <script> renderer
└── lib/
    ├── siteConfig.ts                 ← Central config: name, phone, email, address, nav links
    └── metadata.ts                   ← Per-page metadata generator (OG, Twitter, canonical)
public/
├── images/
│   └── headshot.webp                 ← Headshot photo (800×1200, WebP)
├── sitemap.xml
└── robots.txt
docs/                                 ← This folder: build and deployment guides
```

---

## Design System Quick Reference

All values are defined in `tailwind.config.ts`. Never use raw Tailwind gray values (`gray-50` etc.) — use the custom palette:

| Color token | Usage |
|-------------|-------|
| `bg-bg` | Page background (`#FAF8F5`) |
| `text-text-primary` | Headlines, emphasis (`#2C2C2C`) |
| `text-text-secondary` | Body copy (`#6B6560`) |
| `text-text-tertiary` | Captions, placeholders (`#9B9590`) |
| `bg-accent` | CTA buttons, links (`#B8704D`) |
| `bg-surface` | 1 section per page background (`#F0ECE7`) |
| `bg-footer-bg` | Footer only (`#2C2C2C`) |
| `border-border` | Dividers, card borders (`#E8E4DF`) |

Fonts: `font-sans` = Inter, `font-serif` = Newsreader.

---

## How to Add a New Page

1. Create `src/app/[slug]/page.tsx`
2. Export a `metadata` object using `buildMetadata()` from `@/lib/metadata`
3. Add the page link to `siteConfig.nav` in `src/lib/siteConfig.ts` if it belongs in nav
4. Add the URL to `public/sitemap.xml`

```tsx
// Example: src/app/new-page/page.tsx
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Page Title",
  description: "Page description for SEO.",
  path: "/new-page",
});
export default function NewPage() {
  return <section className="bg-bg pt-32 md:pt-40 pb-16">...</section>;
}
```

---

## How to Modify the Design System

**Colors:** Edit `theme.extend.colors` in `tailwind.config.ts`

**Fonts:** Change `fontFamily.sans` or `fontFamily.serif` in `tailwind.config.ts`. If changing Google Fonts, also update the `@import` URL in `src/app/globals.css`

**Spacing scale:** Use Tailwind's default scale — the design system uses `py-20 md:py-28` for section padding, `px-6` for horizontal gutters. Adjust in individual page components as needed.
