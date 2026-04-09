import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "What Does EMDR Actually Feel Like?",
  description:
    "A therapist's honest explanation of what EMDR processing feels like from the client's perspective — the real experience, not the clinical description.",
  path: "/resources/what-does-emdr-feel-like",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Resources", item: `${siteConfig.url}/resources` },
    {
      "@type": "ListItem",
      position: 3,
      name: "What Does EMDR Actually Feel Like?",
      item: `${siteConfig.url}/resources/what-does-emdr-feel-like`,
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Does EMDR Actually Feel Like?",
  description:
    "A therapist's honest explanation of what EMDR processing feels like from the client's perspective.",
  author: {
    "@type": "Person",
    name: siteConfig.credentials.name,
    jobTitle: siteConfig.credentials.title,
    url: siteConfig.url,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  datePublished: "2026-03-09",
  dateModified: "2026-03-09",
  mainEntityOfPage: `${siteConfig.url}/resources/what-does-emdr-feel-like`,
};

export default function EmdrFeelLikeArticle() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />

      <article>
        <header className="bg-bg pt-32 md:pt-40 pb-16">
          <div className="max-w-reading mx-auto px-6">
            <Link
              href="/resources"
              className="text-small text-text-tertiary hover:text-accent transition-colors"
            >
              ← Resources
            </Link>
            <h1 className="font-serif font-semibold text-h1 md:text-[2.5rem] text-text-primary mt-6">
              What Does EMDR Actually Feel Like?
            </h1>
            <p className="text-small text-text-tertiary mt-4">
              March 9, 2026 · 5 min read · By {siteConfig.credentials.name},{" "}
              {siteConfig.credentials.license}
            </p>
          </div>
        </header>

        <section className="bg-bg py-20 md:py-28">
          <div className="max-w-reading mx-auto px-6 space-y-8 text-body md:text-body-lg text-text-secondary">
            <p>
              The most common question I get about EMDR isn&apos;t &quot;does it work?&quot;
              — it&apos;s &quot;what does it actually feel like?&quot; Most explanations
              focus on the clinical mechanics: bilateral stimulation, adaptive information
              processing, reprocessing of traumatic memories. That&apos;s all accurate. But
              it doesn&apos;t answer the question people are actually asking, which is:
              what will I experience?
            </p>

            <SectionHeading as="h2" className="!mt-12 mb-4">
              Before processing begins
            </SectionHeading>
            <p>
              EMDR doesn&apos;t start with the eye movements. The first phase is preparation
              — building internal resources, practicing stabilization techniques, and identifying
              the specific targets we&apos;re going to work on. This phase is important because
              it means that by the time we start processing, you have tools for managing intensity
              and you know exactly what we&apos;re doing and why.
            </p>
            <p>
              The target is usually a specific memory, image, or experience — not a general
              topic like &quot;my childhood.&quot; We identify the image, the negative belief
              attached to it, the emotions, and where you feel it in your body. This specificity
              is part of what makes EMDR different from talk therapy. We&apos;re not discussing
              the narrative. We&apos;re targeting the stored material.
            </p>

            <SectionHeading as="h2" className="!mt-12 mb-4">
              During processing
            </SectionHeading>
            <p>
              You hold the target lightly in mind while following bilateral stimulation — typically
              my fingers moving back and forth, or tapping on your hands. A set lasts about 30
              seconds. Between sets, I ask a simple question: &quot;What do you notice?&quot;
            </p>
            <p>
              What happens next is the part that surprises people. Your brain starts making
              connections you didn&apos;t expect. A childhood memory links to a present-day
              reaction. An emotion shifts mid-set — anger turns to sadness, then sadness
              dissolves into something quieter. Images change: a scene that started vivid
              and charged becomes muted, distant, like looking at a photograph instead of
              being inside the moment.
            </p>
            <p>
              Clients often describe it as watching something from a slight distance rather
              than reliving it. The emotional charge drains out in real time. Not all at once
              — it moves in waves. Sometimes it intensifies briefly before it releases.
              That&apos;s normal and part of the process.
            </p>

            <SectionHeading as="h2" className="!mt-12 mb-4">
              What it doesn&apos;t feel like
            </SectionHeading>
            <p>
              It&apos;s not hypnosis. You&apos;re fully conscious and in control the entire
              time. You can stop at any point. You don&apos;t have to narrate or describe
              what&apos;s happening in detail — a nod or a few words between sets is enough.
            </p>
            <p>
              It also doesn&apos;t erase memories. The memory stays. What changes is the charge
              it carries. Something that used to trigger a full-body response — the tightness,
              the racing heart, the flood of emotion — becomes something you can think about
              without the reaction. Not because you&apos;re suppressing it. Because your nervous
              system actually processed it.
            </p>

            <SectionHeading as="h2" className="!mt-12 mb-4">
              After a session
            </SectionHeading>
            <p>
              Most people feel a mix of tired and lighter. Processing continues between sessions
              — you might notice things shifting in daily life without effort. A situation that
              used to trigger you doesn&apos;t. A thought that used to spiral just passes through.
              Dreams sometimes become more vivid temporarily as your brain continues the work.
            </p>
            <p>
              The timeline varies. For a single-incident trauma, significant shifts often happen
              within a few sessions. For complex trauma or deeply encoded patterns, it takes
              longer — but the process is the same, and the shifts are real.
            </p>

            <div className="border-t border-border pt-10 mt-12">
              <p className="text-text-primary font-medium">
                If you&apos;re considering EMDR and want to know whether it&apos;s a fit for
                what you&apos;re dealing with, I offer free 15-minute consultations.
              </p>
              <div className="mt-6">
                <CTAButton href="/contact" label="Book a Free Consultation" />
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
