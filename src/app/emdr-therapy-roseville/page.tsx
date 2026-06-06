import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "EMDR Therapy in Roseville, CA",
  description:
    "EMDR therapy for trauma, attachment wounds, and experiences your nervous system is still responding to. In-person in Roseville, CA and online across California.",
  path: "/emdr-therapy-roseville",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "EMDR Therapy in Roseville", item: `${siteConfig.url}/emdr-therapy-roseville` },
  ],
};

const sessionWalkthrough: { heading: string; placeholder: React.ReactNode }[] = [
  {
    heading: "Your first session",
    placeholder:
      "We don't jump into processing on day one. The first session is about understanding what's going on for you right now, what brought you here, and what you want to be different. I'll explain how EMDR works in plain language, answer your questions honestly, and we'll start mapping the targets — the experiences or patterns that are most likely driving what you're dealing with. You'll leave with a clear picture of how we'll work together.",
  },
  {
    heading: "A few sessions in",
    placeholder: (
      <>
        Once we&apos;ve identified a target, the processing sessions begin. You&apos;ll hold the
        memory or experience lightly in mind while following bilateral stimulation — a lightbar
        with handheld tappers in-person, or a BLS app I built (
        <a
          href="https://brighteyedtherapist.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2"
        >
          Bright Eyed Therapist
        </a>
        ) that runs in your browser for online sessions. Between each set, I&apos;ll check in
        briefly: what came up, what shifted, what you noticed. The processing often moves
        quickly. Between sessions, many clients notice things changing in daily life — a reaction
        that doesn&apos;t fire the way it used to, a situation that feels less charged, a thought
        that used to spiral but now just passes through.
      </>
    ),
  },
  {
    heading: "What processing feels like",
    placeholder:
      "It's not what most people expect. You're not reliving the experience on a loop — you're moving through it. Clients often describe it as watching something from a slight distance, or feeling the emotional charge drain out of a memory in real time. Sometimes unexpected connections surface: a childhood moment linked to a present-day trigger you hadn't connected before. The strangest part, people say, is how quickly something that felt overwhelming can shift to feeling neutral. Not forgotten — just no longer running the show.",
  },
];

export default function EmdrPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Page header */}
      <section className="bg-bg pt-32 md:pt-40 pb-16">
        <div className="max-w-reading mx-auto px-6">
          <h1 className="font-serif font-semibold text-h1 md:text-[2.5rem] text-text-primary">
            EMDR Therapy in Roseville, CA
          </h1>
          <p className="text-body-lg text-text-secondary mt-6">
            You&apos;ve probably read that EMDR &quot;works for trauma.&quot; Here&apos;s what that actually means — and what it looks like when we do it together.
          </p>
        </div>
      </section>

      {/* Felt experience of trauma */}
      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-reading mx-auto px-6">
          <SectionHeading as="h2" className="mb-6">
            What trauma actually does
          </SectionHeading>
          <div className="space-y-5 text-body md:text-body-lg text-text-secondary">
            <p>
              Trauma isn&apos;t always what people think it is. You don&apos;t have to have survived something catastrophic for your nervous system to be stuck in a response pattern. Sometimes it&apos;s a reaction that fires before you can think — a tightness in your chest in a conversation that should feel normal, a wave of dread when nothing is actually wrong, a flinch at something you logically know is safe. Your body is responding to something that your mind moved past a long time ago.
            </p>
            <p>
              Talk therapy can help you understand these patterns, and that understanding has real value. But understanding alone doesn&apos;t resolve what&apos;s driving the reaction. The material that keeps these responses active isn&apos;t stored in the part of your brain that processes language and logic — it&apos;s encoded in your nervous system, in the body. That&apos;s why you can know exactly why you react a certain way and still not be able to stop it. Insight is necessary. It&apos;s just not sufficient.
            </p>
            <p>
              When that encoded material actually gets processed — when your nervous system completes what it was trying to do at the time of the original experience — the reaction changes at its source. Clients describe it differently, but the common thread is that things that used to carry a charge simply don&apos;t anymore. Not suppressed, not managed — resolved.
            </p>
          </div>
        </div>
      </section>

      {/* EMDR explanation — ONE surface section */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-reading mx-auto px-6">
          <SectionHeading as="h2" className="mb-6">
            What EMDR actually is
          </SectionHeading>
          <div className="space-y-5 text-body md:text-body-lg text-text-secondary">
            <p>
              EMDR stands for Eye Movement Desensitization and Reprocessing, which is a terrible name for something that actually works elegantly. Here&apos;s the short version: your brain has a natural system for processing difficult experiences, but sometimes that system gets overwhelmed and the experience gets stored &quot;raw&quot; — unprocessed, still carrying its original emotional and physical charge. EMDR uses bilateral stimulation — a lightbar with handheld tappers in-person, or a browser-based BLS app for online sessions — to reactivate that stalled processing system so your brain can finally file the experience the way it was supposed to.
            </p>
            <p>
              Most people imagine EMDR is hypnosis, or that they&apos;ll have to relive their worst moments in vivid detail. Neither is true. You stay fully conscious and in control the entire time. You do connect with the target memory or experience, but briefly — the bilateral stimulation moves you through it rather than keeping you in it. It can feel strange at first, especially because the processing that happens between sets often surprises people. Connections surface that you didn&apos;t expect. The emotional charge shifts mid-session in ways that talking about it for months might not produce.
            </p>
            <p>
              In my experience, EMDR is particularly effective for attachment wounds, single-incident trauma, childhood emotional neglect, and the kind of anxiety or reactivity that has a clear origin point even if the person has &quot;dealt with it.&quot; It&apos;s also effective for people who are highly intellectual and have analyzed their history thoroughly — because the gap between what they know and what they feel is exactly where EMDR works.
            </p>
          </div>
        </div>
      </section>

      {/* Session walkthrough */}
      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-reading mx-auto px-6">
          <SectionHeading as="h2" className="mb-10">
            What to expect
          </SectionHeading>
          <div className="space-y-0">
            {sessionWalkthrough.map((item, index) => (
              <div
                key={item.heading}
                className={`${index > 0 ? "border-t border-border pt-8 mt-8" : ""}`}
              >
                <h3 className="font-serif text-h3 md:text-[1.5rem] text-text-primary mb-3">
                  {item.heading}
                </h3>
                <p className="text-body text-text-secondary">
                  {item.placeholder}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal client + CTA */}
      <section className="bg-bg py-20 md:py-28 border-t border-border">
        <div className="max-w-reading mx-auto px-6">
          <SectionHeading as="h2" className="mb-6">
            This might be for you if…
          </SectionHeading>
          <div className="space-y-5 text-body text-text-secondary">
            <p>
              You&apos;re someone who&apos;s done the thinking. You can explain your patterns, name your triggers, trace things back to their likely origin. But the knowing hasn&apos;t stopped the feeling. You&apos;re tired of managing something that should have resolved by now, and you&apos;re ready for a different kind of work — one that goes where talk therapy couldn&apos;t. You don&apos;t need someone to validate your experience. You need someone to help you actually process it. If any of that resonates, I&apos;d like to hear from you.
            </p>
          </div>
          <div className="mt-10">
            <CTAButton href="/contact" label="Book a Free Consultation" />
          </div>
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-small text-text-tertiary">
              I also work with{" "}
              <Link href="/ocd-anxiety-therapy-roseville" className="text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2">OCD &amp; anxiety</Link>
              {" "}and{" "}
              <Link href="/athletes-performance-therapy-roseville" className="text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2">athletes &amp; performance</Link>.
              {" "}All sessions available{" "}
              <Link href="/online-therapy-california" className="text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2">online across California</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
