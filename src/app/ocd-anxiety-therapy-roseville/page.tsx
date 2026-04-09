import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "OCD & Anxiety Therapy in Roseville, CA",
  description:
    "OCD and anxiety therapy using ERP and EMDR in Roseville, CA. For intrusive thoughts, compulsive patterns, and anxiety that shows up as overthinking or internal pressure.",
  path: "/ocd-anxiety-therapy-roseville",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "OCD & Anxiety Therapy in Roseville",
      item: `${siteConfig.url}/ocd-anxiety-therapy-roseville`,
    },
  ],
};

const sessionWalkthrough = [
  {
    heading: "Your first session",
    placeholder:
      "We start by understanding the specific patterns — what the intrusive thoughts are, what the compulsions look like, and how long this cycle has been running. I'm not just cataloging symptoms. I'm mapping the architecture of the pattern so we can target it precisely. We'll build an exposure hierarchy together, starting with things that feel manageable and working toward the core fears. You'll leave the first session understanding exactly what we're doing and why.",
  },
  {
    heading: "A few sessions in",
    placeholder:
      "ERP begins with lower-level exposures and builds. You'll practice sitting with discomfort intentionally, choosing not to neutralize it. I'll be with you through each one — this isn't homework you do alone and report back on. As we work through the hierarchy, I'm also tracking whether there's underlying encoded material driving the cycle. If there is, we'll introduce EMDR to process it directly, which often accelerates the ERP work significantly.",
  },
  {
    heading: "What progress looks like",
    placeholder:
      "Progress with OCD and anxiety doesn't mean the intrusive thoughts disappear entirely. It means they lose their authority. A thought that used to hijack your whole day now shows up and passes through without demanding a response. You notice it without believing it. The compulsions become optional, then unnecessary. Clients often describe it as a profound quiet — not the absence of thoughts, but the absence of urgency. Daily life starts feeling like something you're living in, not something you're managing.",
  },
];

export default function OcdAnxietyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Page header */}
      <section className="bg-bg pt-32 md:pt-40 pb-16">
        <div className="max-w-reading mx-auto px-6">
          <h1 className="font-serif font-semibold text-h1 md:text-[2.5rem] text-text-primary">
            OCD &amp; Anxiety Therapy in Roseville, CA
          </h1>
          <p className="text-body-lg text-text-secondary mt-6">
            Your mind runs hot. You&apos;ve tried to think your way out of it, and by now you know that doesn&apos;t work. Here&apos;s what does.
          </p>
        </div>
      </section>

      {/* Felt experience */}
      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-reading mx-auto px-6">
          <SectionHeading as="h2" className="mb-6">
            What OCD and anxiety actually feel like
          </SectionHeading>
          <div className="space-y-5 text-body md:text-body-lg text-text-secondary">
            <p>
              OCD doesn&apos;t look the way most people think it does. It&apos;s not about being neat or checking the stove. It&apos;s an intrusive thought that latches on and won&apos;t let go — something your brain flags as dangerous even when you know it&apos;s irrational. The compulsion isn&apos;t the problem. It&apos;s the solution your nervous system invented, the only thing that temporarily quiets the alarm. And the more you comply with it, the louder the alarm gets next time. You already know this. Knowing doesn&apos;t stop it.
            </p>
            <p>
              Anxiety in high-functioning people often doesn&apos;t get recognized for what it is. You appear capable, organized, on top of things. Inside, there&apos;s a loop running — a constant low-grade pressure to anticipate, control, and perform. The overthinking feels productive because sometimes it catches something. But it never stops. The baseline is vigilance. Rest feels like irresponsibility. Other people see someone who has it together. You know the cost of maintaining that appearance.
            </p>
            <p>
              You&apos;ve probably tried things that helped to a point — CBT techniques, maybe medication, breathing exercises, journaling. They gave you tools to manage the surface. But the engine underneath is still running. That&apos;s the gap between coping with anxiety and actually resolving what&apos;s driving it.
            </p>
          </div>
        </div>
      </section>

      {/* ERP + EMDR approach — ONE surface section */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-reading mx-auto px-6">
          <SectionHeading as="h2" className="mb-6">
            How ERP and EMDR work together
          </SectionHeading>
          <div className="space-y-5 text-body md:text-body-lg text-text-secondary">
            <p>
              ERP — Exposure and Response Prevention — is the most evidence-backed treatment for OCD, and it works exactly the way it sounds. You deliberately face the thing that triggers the anxiety while choosing not to perform the compulsion. This is uncomfortable by design. What&apos;s happening neurologically is that you&apos;re teaching your brain that the alarm is false — that you can sit with the discomfort and nothing catastrophic happens. Over repeated exposures, the alarm weakens. The thought loses its grip. Not because you argued with it, but because your nervous system learned it doesn&apos;t need to respond.
            </p>
            <p>
              For many clients, ERP alone is enough. But for clients whose OCD or anxiety is built on top of encoded trauma — a childhood where control was the only available safety strategy, or where a specific experience installed the original alarm — ERP addresses the symptom without reaching the root. EMDR can access and reprocess that underlying material directly. When the foundation shifts, the OCD patterns that were built on it often resolve more quickly and more durably than with behavioral work alone.
            </p>
            <p>
              In practice, I usually start with ERP to establish stabilization and give you tools that work immediately. Once we have a clearer map of what&apos;s driving the cycle, we integrate EMDR to process the deeper material. The decision of when to shift is collaborative — I&apos;ll be transparent about what I&apos;m seeing and why I think one approach fits the moment better than the other.
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
              You&apos;re someone who&apos;s smart enough to have figured out workarounds for your anxiety — and exhausted by maintaining them. You might have been told &quot;everyone worries&quot; or &quot;you just need to relax,&quot; and you know that&apos;s not what this is. Maybe you&apos;ve tried therapy before and it helped with insight but didn&apos;t change the pattern. You&apos;re ready for something that actually targets the mechanism, not just the symptoms. If any of this sounds familiar, reach out.
            </p>
          </div>
          <div className="mt-10">
            <CTAButton href="/contact" label="Book a Free Consultation" />
          </div>
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-small text-text-tertiary">
              I also work with{" "}
              <Link href="/emdr-therapy-roseville" className="text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2">trauma &amp; EMDR</Link>
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
