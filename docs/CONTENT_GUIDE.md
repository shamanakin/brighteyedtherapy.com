# Bright Eyed Therapy — Content Guide

How to fill in placeholders, add photos, swap in the scheduling widget, and update credentials over time.

---

## Placeholder Map

Every `[PLACEHOLDER: ...]` in the code is rendered as visible italic gray text on the page. Here's where each one lives and what to write:

### Home (`src/app/page.tsx`)

| Location | What to write |
|----------|---------------|
| Hero headline (~line 78) | The single most important sentence on the site. Your voice. Direct, specific, earned. See plan for tone guidance. Write it last. |
| Problem statement paragraphs (3×, ~lines 88-101) | The felt experience of your ideal client — midnight anxiety, the therapy that stayed surface-level, the encoded pattern they sense but can't name. Write to them, not about them. End with "If that sounds like you, you're in the right place." |
| About preview text (~line 130) | 2-3 sentences. The "I became a therapist because I know what it's like to have to rebuild from the ground up" moment — without being explicit yet. |
| Approach section heading (~line 115) | Short heading for the specialties grid. E.g., "What we work on" or "How I work" |
| Third specialty block (~lines 53-60 of the approachBlocks array) | Name and describe the third specialty area (Couples, Life Transitions, General Adults, etc.) |

### About (`src/app/about/page.tsx`)

| Location | What to write |
|----------|---------------|
| Intro line (~line 52) | 1-2 sentence bridge into the narrative. Could be a single grounding statement about why you do this work. |
| Personal narrative (4 paragraphs, ~lines 62-80) | Your story. Orphan. Told not to go to college. 4.0'd your master's. Built from nothing. Make it specific (a real detail or moment), brief, and powerful. 3-4 paragraphs total. This is the single most important copy on the site — write it yourself. |
| Clinical philosophy (3 paragraphs, ~lines 100-112) | Why EMDR. How you think about symptoms vs. sources. What sessions with you actually feel like. In your voice. |

### EMDR page (`src/app/emdr-therapy-roseville/page.tsx`)

| Location | What to write |
|----------|---------------|
| Subheading (~line 52) | 1-2 sentence direct address to someone considering EMDR. Not a definition. |
| "What trauma actually does" (3 paragraphs, ~lines 62-72) | Felt experience of trauma. Why talk therapy often isn't enough. What changes when it's actually processed. |
| "What EMDR actually is" (3 paragraphs, ~lines 81-91) | Explain EMDR to a smart friend. Address the main misconception. What you see it work best for. |
| Session walkthrough (3 sections, ~lines 45-57 of sessionWalkthrough array) | First session, a few sessions in, what processing feels like. |
| Ideal client paragraph (~line 163) | Who this is for — 3-5 sentences describing the person, not the symptoms. |

### OCD/Anxiety page (`src/app/ocd-anxiety-therapy-roseville/page.tsx`)

| Location | What to write |
|----------|---------------|
| Subheading (~line 52) | Direct address to the OCD/anxiety client. Name what they already know. |
| "What OCD and anxiety actually feel like" (3 paragraphs, ~lines 63-73) | Felt experience, high-functioning anxiety, what they've already tried. |
| "How ERP and EMDR work together" (3 paragraphs, ~lines 82-92) | What ERP is. Why ERP alone isn't always enough. How you integrate them. |
| Session walkthrough (3 sections, sessionWalkthrough array) | First session, ERP begins, what progress looks like. |
| Ideal client paragraph (~line 163) | Who this is for. |

### Fees (`src/app/fees/page.tsx`)

| Location | What to write |
|----------|---------------|
| Fee table prices (~lines 47-51 of feeRows array) | Replace `$XXX` with actual session rates. |
| Sliding scale note (~line 130) | Whether you offer sliding scale, how to ask. |
| Insurance paragraphs (3×, ~lines 140-152) | Direct statement on in/out-of-network, how superbills work, payment logistics. |
| FAQ answers (5×, ~lines 18-39 of faqItems array) | Your honest voice. 2-3 sentences each. |

### Contact (`src/app/contact/page.tsx`)

| Location | What to write |
|----------|---------------|
| Scheduling widget placeholder (~line 55) | Replace with actual widget embed code (see below) |
| Google Maps embed (~line 79) | Replace `src` with correct embed URL for your office address |
| `siteConfig.email` (in `src/lib/siteConfig.ts`, line 5) | Update with actual email address |
| `siteConfig.address` (in `src/lib/siteConfig.ts`, lines 7-13) | Update with actual Roseville office address |

---

## Updating Central Config

All site-wide data (phone, email, address, credentials) lives in one file:

**`src/lib/siteConfig.ts`**

Update these fields as your practice information changes:
- `email` — your current contact email
- `address.street`, `address.zip`, `address.full` — your office address in Roseville
- `credentials.license` — update from `AMFT#127638` to `LMFT#XXXXXX` when licensed
- `credentials.title` — update from "Associate Marriage and Family Therapist" to "Licensed Marriage and Family Therapist"
- `credentials.supervisor` — remove or update when no longer required

After updating `siteConfig.ts`, run `npm run build` and redeploy.

---

## Adding Photos

1. Convert to WebP format for best performance. Use Python: `python3 -c "from PIL import Image; Image.open('photo.jpg').save('photo.webp', 'WEBP', quality=85)"`
2. Place the file in `public/images/`
3. To use in a `PhotoSlot`, add the `src` prop:
   ```tsx
   <PhotoSlot
     src="/images/your-photo.webp"
     alt="Descriptive alt text"
     recommendation="..." // Only shown when src is absent
   />
   ```
4. For new standalone images, use Next.js `<Image>` component with `fill` for aspect-ratio containers.

**Recommended photo specs:**
- Portrait (headshot slots): 800×1200px, WebP, ~100-150KB
- Landscape (office, environment): 1200×900px, WebP, ~100-200KB
- OG image for social sharing: 1200×630px, saved as `/public/images/og-image.jpg`

---

## Embedding the Scheduling Widget

The contact page has a placeholder div at `src/app/contact/page.tsx` around line 55. Replace the placeholder `<p>` element with your widget's embed code:

**For SimplePractice:**
```html
<iframe
  src="https://widget.simplepractice.com/clients/welcome/..."
  width="100%"
  height="500"
  frameBorder="0"
  title="Schedule an appointment"
/>
```

**For Calendly:**
```html
<!-- Add to page <head> via layout.tsx if needed -->
<div
  className="calendly-inline-widget"
  data-url="https://calendly.com/your-link"
  style={{ minWidth: "320px", height: "500px" }}
/>
```

**For Jane App:**
```html
<iframe
  src="https://your-clinic.janeapp.com/..."
  width="100%"
  height="500"
  frameBorder="0"
  title="Book an appointment"
/>
```

Replace the existing `<div id="scheduling-widget">` and its contents with the iframe or script provided by your scheduling platform.

---

## Updating Credentials (When LMFT License is Granted)

1. Open `src/lib/siteConfig.ts`
2. Update:
   ```ts
   credentials: {
     name: "Matthew Heake",
     license: "LMFT#XXXXXX",       // ← Update
     supervisor: "",                 // ← Remove or leave blank
     title: "Licensed Marriage and Family Therapist",  // ← Update
   },
   ```
3. Update the Footer's bottom bar text (it reads directly from `siteConfig`)
4. Check the About page credentials list (`src/app/about/page.tsx`, `credentials` array around line 36) and update the license entry
5. Run `npm run build` and redeploy
