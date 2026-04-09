# brighteyedtherapy.com

Production website for my private therapy practice. Built it myself because I wanted full control over how I present my work — and because Wix wasn't cutting it.

**Live:** [brighteyedtherapy.com](https://brighteyedtherapy.com)

## What this is

A fast, accessible, SEO-optimized static site for a solo therapy practice. Next.js 14, Tailwind CSS, statically exported to Apache shared hosting (DreamHost). No CMS, no WordPress, no Wix. One codebase, one build command, one upload.

Designed around what actually converts for private practice: clear specialties, direct language, easy contact paths, trust signals in the right places. Not a template — built from research into what's working for therapy sites in 2025–2026.

## What's in it

- **11 pages** — Home, About, 3 specialty pages (EMDR, OCD/Anxiety, Athletes & Performance), Online Therapy, Fees & FAQ, Contact, Resources, Privacy, custom 404
- **Self-hosted intro video** — H.264 MP4, no YouTube/Vimeo, no third-party cookies. HIPAA-friendly by default
- **Formspree contact form** — static form service, no backend needed, no PHI exposure
- **Full SEO** — JSON-LD structured data (LocalBusiness, Person, FAQPage, BreadcrumbList, Article), Open Graph, XML sitemap, semantic HTML, canonical URLs
- **WCAG 2.1 AA** — keyboard nav, skip-to-content, focus indicators, screen reader tested, contrast compliant
- **Performance** — Lighthouse 95+, static export, optimized images (WebP), lazy loading, preload metadata on video

## Stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 14 (App Router, static export) |
| Styling | Tailwind CSS (custom design tokens) |
| Language | TypeScript |
| Forms | Formspree |
| Hosting | DreamHost (Apache, `.htaccess` for routing/caching/security) |
| Analytics | Plausible or GA4 (optional, env-configured) |

## Quick start

```bash
npm install
npm run dev     # localhost:3000
npm run build   # static export → out/
```

## Deploy

```bash
npm run build
# upload out/* to your web host via SFTP/SSH
```

The `.htaccess` in `public/` handles clean URL routing, gzip compression, browser caching, security headers, and custom 404. Built for Apache shared hosting — no Vercel, no serverless, no vendor lock-in.

## Project structure

```
src/
├── app/                  # Pages (Next.js App Router)
├── components/           # Reusable UI components
└── lib/
    ├── siteConfig.ts     # Central config (name, phone, address, credentials, nav)
    └── metadata.ts       # SEO metadata builder
public/
├── images/               # Optimized assets (WebP, H.264 MP4)
├── .htaccess             # Apache config
├── sitemap.xml
└── robots.txt
docs/                     # Build, deploy, and content guides
```

## Why I built this

I'm a therapist running a private practice. I'm also a developer. Most therapists pay $50–200/month for Wix, Squarespace, or a TherapySites template that loads slow, ranks poorly, and looks like every other therapist's site.

I built mine for the cost of a domain and $4/month shared hosting. It scores higher on Lighthouse, ranks better on Google, loads faster, and says exactly what I want it to say. The trade-off is you need to know how to code — or know someone who does.

This isn't a template repo. It's my actual production site. But if you're a therapist who codes (or a dev building for one), take what's useful.

## Related

- [BrightEyedTherapist](https://github.com/shamanakin/BrightEyedTherapist) — SaaS therapy tools platform (separate project)
- [DecodeDev](https://github.com/shamanakin/DecodeDev) — Cognitive injection for AI-augmented development

## License

MIT
