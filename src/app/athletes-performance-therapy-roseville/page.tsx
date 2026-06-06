import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "Therapy for Athletes & Performance in Roseville, CA",
  description:
    "EMDR therapy for athletes dealing with performance blocks, injury-related anxiety, competition stress, and the mental side of recovery. Roseville, CA and online across California.",
  path: "/athletes-performance-therapy-roseville",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Athletes & Performance Therapy in Roseville",
      item: `${siteConfig.url}/athletes-performance-therapy-roseville`,
    },
  ],
};

const sessionWalkthrough = [
  {
    heading: "Your first session",
    placeholder:
      "We start by mapping what's happening — not just the performance issue, but the full picture. When did the block start? What was happening around that time? What does it feel like in your body when it fires? I'm looking for the encoded material underneath the symptom — the injury, the moment of failure, the coach's voice, the pressure that got internalized. You'll leave the first session with a clear understanding of what we're targeting and why.",
  },
  {
    heading: "A few sessions in",
    placeholder:
      "Processing sessions use EMDR to access the stored material directly. For an athlete recovering from injury, that might mean targeting the moment of the injury itself — the flash of pain, the sound, the fear that something was permanently wrong. For a performance block, we go to the origin: the missed shot that became a narrative, the game where everything fell apart publicly, the pressure that turned play into survival. The bilateral stimulation moves you through it rather than keeping you stuck in it. Between sessions, athletes often notice shifts before they can explain them — a drill that suddenly feels easy again, a competition where the anxiety simply isn't there.",
  },
  {
    heading: "What the shift looks like",
    placeholder:
      "This isn't about getting pumped up or thinking positively. It's about removing the encoded interference that's been degrading your performance. When the injury trauma is processed, your body stops bracing for the re-injury that isn't coming. When the failure memory is resolved, the anticipatory anxiety that was hijacking your focus goes quiet. What athletes describe is a return to something they thought they'd lost — the ability to be fully in the moment, reacting from skill and instinct rather than from fear. Not a new mental trick. The absence of the thing that was in the way.",
  },
];

export default function AthletesPerformancePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Page header */}
      <section className="bg-bg pt-32 md:pt-40 pb-16">
        <div className="max-w-reading mx-auto px-6">
          <h1 className="font-serif font-semibold text-h1 md:text-[2.5rem] text-text-primary">
            Therapy for Athletes &amp; Performance
          </h1>
          <p className="text-body-lg text-text-secondary mt-6">
            Your body knows what to do. Something encoded is getting in the way. This is how we clear it.
          </p>
        </div>
      </section>

      {/* The performance problem */}
      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-reading mx-auto px-6">
          <SectionHeading as="h2" className="mb-6">
            When the block isn&apos;t mental
          </SectionHeading>
          <div className="space-y-5 text-body md:text-body-lg text-text-secondary">
            <p>
              You&apos;ve done the sport psychology. The visualization, the self-talk, the breathing techniques. Maybe they helped some. But the block is still there — the flinch before contact, the hesitation that didn&apos;t exist before the injury, the tightness that shows up in competition but never in practice. You&apos;ve tried to think your way past it and you can&apos;t, because it isn&apos;t a thinking problem.
            </p>
            <p>
              Performance blocks, injury-related anxiety, and competition stress live in the nervous system, not the mind. Your body experienced something — an injury, a failure, a moment where the stakes became survival-level — and it encoded that experience as a threat. Now it fires a protective response every time the conditions resemble the original event. It doesn&apos;t matter that you&apos;re healed, that the stakes are different, that you know better. The encoded material doesn&apos;t respond to logic. It responds to processing.
            </p>
            <p>
              This is the gap that traditional sports psychology often can&apos;t close. Cognitive techniques manage the surface — they give you tools to work around the interference. But they don&apos;t resolve it at its source. The block stays underneath, waiting for the pressure to increase enough to override your workarounds.
            </p>
          </div>
        </div>
      </section>

      {/* How EMDR works for athletes — surface section */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-reading mx-auto px-6">
          <SectionHeading as="h2" className="mb-6">
            How EMDR works for athletes
          </SectionHeading>
          <div className="space-y-5 text-body md:text-body-lg text-text-secondary">
            <p>
              EMDR (Eye Movement Desensitization and Reprocessing) uses bilateral stimulation to reactivate your brain&apos;s stalled processing system. When an experience gets stored &quot;raw&quot; — still carrying its original emotional and physical charge — EMDR helps your brain reprocess it so the charge resolves. For athletes, this means targeting the specific moments that installed the block: the injury, the public failure, the pressure that crossed a threshold, the moment the game stopped being play.
            </p>
            <p>
              Athletic performance is fundamentally subcortical — you don&apos;t think your way through a swing or a sprint. Your body runs the program. When that program has encoded interference from an unprocessed experience, no amount of cognitive technique can override it at the speed performance demands. EMDR works at the level where the interference actually lives. It doesn&apos;t teach you to think differently about the block. It resolves the stored material that&apos;s creating it.
            </p>
            <p>
              Pilot research on injured NCAA Division I athletes who received EMDR found decreased anxiety and mood disturbance, and the athletes hit personal records in 11 of 17 measured performance areas (
              <a
                href="https://thesportjournal.org/article/pilot-study-of-the-efficacy-of-eye-movement-desensitization-and-reprocessing-emdr-intervention-for-injured-division-i-student-athletes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2"
              >
                pilot study, The Sport Journal
              </a>
              ). The sample was small, but the direction of effect is consistent with what I see in practice: when the encoded interference resolves, performance returns.
            </p>
          </div>
        </div>
      </section>

      {/* Personal credibility */}
      <section className="bg-bg py-16 md:py-20 border-t border-b border-border">
        <div className="max-w-reading mx-auto px-6">
          <div className="border-l-2 border-accent pl-6 md:pl-8">
            <p className="text-body-lg text-text-secondary italic font-serif">
              I was a sponsored skateboarder as a teenager. In my twenties, a fibula break took me out completely — not just physically, but mentally. I spent a decade away from the sport. Around 36, I rebuilt from scratch: rehabbed my body, processed the fear and the encoded material from the injury, and got back on a board. At 39, I skate twice a week and I&apos;m skating better than I ever have.
            </p>
            <p className="text-body text-text-secondary mt-4">
              I know what it feels like when your body won&apos;t trust a movement it used to do without thinking. I know the fear blocks, the confidence drops, the pressure of trying to perform when part of your nervous system is still bracing for re-injury. I didn&apos;t just study this — I&apos;ve lived through it and come out the other side. That experience shapes how I work with every athlete who sits across from me.
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

      {/* Who this is for */}
      <section className="bg-bg py-20 md:py-28 border-t border-border">
        <div className="max-w-reading mx-auto px-6">
          <SectionHeading as="h2" className="mb-6">
            This might be for you if…
          </SectionHeading>
          <div className="space-y-5 text-body text-text-secondary">
            <p>
              You&apos;re an athlete — high school, college, adult competitive, or serious recreational — and something shifted. Maybe it was an injury and you&apos;re physically cleared but your body won&apos;t trust the movement anymore. Maybe it&apos;s a mental block that appeared out of nowhere and won&apos;t respond to the usual mental game work. Maybe competition anxiety has gotten worse over time and the coping strategies that used to work are failing.
            </p>
            <p>
              You don&apos;t need a pep talk or another visualization exercise. You need someone who can identify what your nervous system encoded and help you process it so your body can do what it already knows how to do. If that&apos;s where you are, reach out.
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
              <Link href="/ocd-anxiety-therapy-roseville" className="text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2">OCD &amp; anxiety</Link>.
              {" "}All sessions available{" "}
              <Link href="/online-therapy-california" className="text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2">online across California</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
