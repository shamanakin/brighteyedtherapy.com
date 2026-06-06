import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";

import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "About Matthew Heake",
  description:
    "Registered AMFT in Roseville, CA. EMDR trained, EFT trained. A direct, honest therapist who has rebuilt from the ground up — and who brings that into session.",
  path: "/about",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "About", item: `${siteConfig.url}/about` },
  ],
};

const credentials = [
  "MS in Counseling Psychology, summa cum laude",
  "EMDR trained (EMDRIA-approved)",
  "Emotionally Focused Therapy (EFT) trained",
  "Guest lecturer, California State University Sacramento",
  "Registered AMFT#127638 | Supervised by Sharon Skelton, LMFT",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Page header */}
      <section className="bg-bg pt-32 md:pt-40 pb-16">
        <div className="max-w-reading mx-auto px-6">
          <h1 className="font-serif font-semibold text-h1 md:text-[2.5rem] text-text-primary">
            About Matthew
          </h1>
          <p className="text-body-lg text-text-secondary mt-6">
            I do this work because I understand what it costs to carry things that were never yours to carry — and what becomes possible when you finally put them down.
          </p>
        </div>
      </section>

      {/* Intro video */}
      <section className="bg-bg pb-12 md:pb-16">
        <div className="max-w-reading mx-auto px-6">
          <video
            controls
            preload="metadata"
            playsInline
            poster="/images/intro-video-poster.jpg"
            className="w-full max-w-sm mx-auto rounded-lg border border-border"
          >
            <source src="/images/intro-video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Personal narrative */}
      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-reading mx-auto px-6">
          <div className="space-y-5 text-body md:text-body-lg text-text-secondary">
            <p>
              I grew up without parents. I was told I wasn&apos;t college material. I went anyway, finished my master&apos;s summa cum laude, and built a life that nobody handed me a blueprint for. That&apos;s not a story I tell to impress anyone — it&apos;s the reason I sit in this chair. When someone tells me they feel stuck or broken or like they&apos;re running a program they didn&apos;t write, I don&apos;t just understand it conceptually. I&apos;ve lived inside it.
            </p>
            <p>
              I didn&apos;t choose this work because I always wanted to help people. I chose it because I got obsessed with understanding why humans get stuck — and what actually moves them. Not the stories we tell ourselves, but the encoded material underneath: the nervous system responses, the attachment patterns, the things that keep firing long after the original event is over. I realized that what helped me rebuild wasn&apos;t insight alone. It was processing what my body was still holding. That&apos;s what led me to EMDR, and it&apos;s what shapes every session I run.
            </p>
            <p>
              I notice patterns most people miss — the connection between what you&apos;re saying and what your body&apos;s doing, the theme you haven&apos;t named yet, the gap between what you know and what you feel. I&apos;m also direct. I won&apos;t nod silently for 45 minutes. If I see something, I&apos;ll name it. That style isn&apos;t for everyone. For the people who want honesty over comfort, it changes the pace of the work.
            </p>
            <p>
              This approach lands especially well with neurodivergent clients, systems thinkers, and engineers — the pattern-recognition focus tends to match how their minds already work — but you don&apos;t need to identify with any of those to benefit from it.
            </p>
            <p>
              Outside of session, I build software. I designed and coded a full therapy toolkit from scratch — not because I had to, but because I think differently about systems, about what clinicians actually need, about how things should work versus how they&apos;re usually built. That same mind is the one sitting across from you in session.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy + photo — ONE surface section */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-8 md:grid md:grid-cols-[1fr_320px] md:gap-12 md:space-y-0 md:items-start">
            {/* Left: philosophy */}
            <div>
              <SectionHeading as="h2" className="mb-6">
                How I work
              </SectionHeading>
              <div className="space-y-5 text-body md:text-body-lg text-text-secondary">
                <p>
                  Most people think trauma therapy means talking about hard things until they hurt less. It doesn&apos;t work that way. The material that drives anxiety, reactivity, and relational patterns isn&apos;t stored in the part of your brain that processes language — it&apos;s encoded in your nervous system.{" "}
                  <Link
                    href="/emdr-therapy-roseville"
                    className="text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2"
                  >
                    EMDR
                  </Link>{" "}
                  works because it accesses that material directly, through bilateral stimulation, and allows your brain to reprocess it the way it was supposed to in the first place. That&apos;s why people often get further in a few months of EMDR than in years of talk therapy.
                </p>
                <p>
                  I think of most symptoms — the{" "}
                  <Link
                    href="/ocd-anxiety-therapy-roseville"
                    className="text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2"
                  >
                    anxiety
                  </Link>
                  , the avoidance, the overthinking, the emotional flooding — as signals, not problems. They&apos;re pointing to something encoded underneath that hasn&apos;t been processed. Managing the signals is useful short-term. But if you want durable change, you have to go to the source. That&apos;s the difference between coping and actually resolving something.
                </p>
                <p>
                  Sessions with me are focused and direct. I don&apos;t do a lot of open-ended &quot;how does that make you feel.&quot; We identify what&apos;s driving the pattern, we target it, we process it. I pay close attention to what&apos;s happening in your body — not just what you&apos;re saying — because that&apos;s usually where the real information is. Between sessions, most clients notice shifts they didn&apos;t expect: a reaction that doesn&apos;t fire the way it used to, a situation that suddenly feels manageable, a thought that loses its charge.
                </p>
              </div>
            </div>
            {/* Right: photos */}
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden aspect-[4/5] relative bg-surface border border-border">
                <Image
                  src="/images/headshot.webp"
                  alt="Matthew Heake, Registered AMFT"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 400px, 320px"
                />
              </div>
              <div className="rounded-lg overflow-hidden aspect-[4/3] relative bg-surface border border-border">
                <Image
                  src="/images/office.webp"
                  alt="Therapy office in Roseville, CA — Bright Eyed Therapy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-reading mx-auto px-6">
          <SectionHeading as="h2" className="mb-6">
            Training &amp; Credentials
          </SectionHeading>
          <ul className="list-none space-y-2">
            {credentials.map((item) => (
              <li key={item} className="text-body text-text-secondary">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-body text-text-secondary mt-6">
            A Registered Associate Marriage and Family Therapist (AMFT) has completed a master&apos;s degree in counseling psychology and is gaining the supervised clinical hours required for full licensure as a Licensed Marriage and Family Therapist (LMFT) in California. All my work is supervised by Sharon Skelton, LMFT.
          </p>
          <div className="mt-12">
            <CTAButton href="/contact" label="Book a Free Consultation" />
          </div>
        </div>
      </section>
    </>
  );
}
