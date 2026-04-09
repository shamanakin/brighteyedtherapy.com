import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "Online Therapy in California",
  description:
    "EMDR and trauma therapy online across California. Secure video sessions from wherever you are — the same depth of work, without the commute.",
  path: "/online-therapy-california",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Online Therapy in California",
      item: `${siteConfig.url}/online-therapy-california`,
    },
  ],
};

export default function OnlineTherapyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <section className="bg-bg pt-32 md:pt-40 pb-16">
        <div className="max-w-reading mx-auto px-6">
          <h1 className="font-serif font-semibold text-h1 md:text-[2.5rem] text-text-primary">
            Online Therapy Across California
          </h1>
          <p className="text-body-lg text-text-secondary mt-6">
            The same depth of work. Secure video. From wherever you are in California.
          </p>
        </div>
      </section>

      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-reading mx-auto px-6">
          <SectionHeading as="h2" className="mb-6">
            How online sessions work
          </SectionHeading>
          <div className="space-y-5 text-body md:text-body-lg text-text-secondary">
            <p>
              Online therapy isn&apos;t a lesser version of in-person work. For most
              clients, the depth and effectiveness are identical — what matters is the
              therapeutic relationship and the modality, not whether we&apos;re in the same
              room. I use a HIPAA-compliant video platform that&apos;s encrypted end-to-end,
              and sessions run exactly the same as they would in person.
            </p>
            <p>
              EMDR works effectively over video. Instead of following my fingers, you&apos;ll
              follow a light bar on your screen or use bilateral tapping (hands on knees,
              alternating). Most clients find the adaptation seamless after the first session.
              The processing is the same — the bilateral stimulation accesses the same neural
              pathways regardless of delivery method.
            </p>
            <p>
              ERP for OCD and anxiety also translates directly to online sessions. In many
              cases, doing exposures in your actual environment (rather than an office) can
              be more effective because the work happens where the anxiety lives.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-reading mx-auto px-6">
          <SectionHeading as="h2" className="mb-6">
            This might be a good fit if…
          </SectionHeading>
          <div className="space-y-5 text-body md:text-body-lg text-text-secondary">
            <p>
              You live outside Roseville or the Sacramento area but want to work
              with a specialist rather than settling for whoever is geographically
              closest. You have a demanding schedule and the commute to an office
              is a barrier to consistency. You travel for work and need a therapist
              you can see from anywhere in California. Or you simply prefer the
              comfort and privacy of your own space.
            </p>
            <p>
              I&apos;m licensed to practice across all of California. Whether you&apos;re in
              the Bay Area, Los Angeles, San Diego, or a rural area without many local
              options — if you&apos;re in California, we can work together.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-reading mx-auto px-6">
          <SectionHeading as="h2" className="mb-6">
            What you need
          </SectionHeading>
          <div className="space-y-5 text-body text-text-secondary">
            <p>
              A private space where you won&apos;t be interrupted. A stable internet
              connection. A computer, tablet, or phone with a camera. That&apos;s it.
              I&apos;ll send you a secure link before each session — no apps to download,
              no accounts to create.
            </p>
          </div>
          <div className="mt-10">
            <CTAButton href="/contact" label="Book a Free Consultation" />
          </div>
        </div>
      </section>
    </>
  );
}
