import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "EMDR & Trauma Therapy in Roseville, CA",
  description:
    "Therapy for adults who are ready to get underneath it. EMDR, trauma, OCD, and anxiety therapy in Roseville, CA — and online across California.",
  path: "",
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "38.7521",
    longitude: "-121.2880",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Roseville" },
    { "@type": "State", name: "California" },
  ],
  hasMap: "https://maps.google.com/?q=1380+Lead+Hill+Blvd+%23145,+Roseville,+CA+95661",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.credentials.name,
  jobTitle: siteConfig.credentials.title,
  worksFor: { "@type": "LocalBusiness", name: siteConfig.name },
  url: siteConfig.url,
  knowsAbout: [
    "EMDR Therapy",
    "Trauma Therapy",
    "OCD Treatment",
    "Anxiety Therapy",
    "ERP",
    "Athletic Performance Therapy",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "California State University, Sacramento",
  },
  // Populate sameAs with profile URLs (Psychology Today, LinkedIn, EMDRIA) once created
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
  ],
};

const approachBlocks = [
  {
    title: "EMDR & Trauma",
    description:
      "For trauma, attachment wounds, and experiences your nervous system is still responding to as if they\u2019re happening now.",
    href: "/emdr-therapy-roseville",
    linkLabel: "Learn about EMDR",
  },
  {
    title: "OCD & Anxiety",
    description:
      "For intrusive thoughts, compulsive patterns, and anxiety that shows up as control, overthinking, or internal pressure.",
    href: "/ocd-anxiety-therapy-roseville",
    linkLabel: "Learn about OCD therapy",
  },
  {
    title: "Athletes & Performance",
    description:
      "For performance blocks, injury-related anxiety, and competition stress that won\u2019t respond to the usual mental game work. EMDR goes where sport psychology can\u2019t.",
    href: "/athletes-performance-therapy-roseville",
    linkLabel: "Learn about performance therapy",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={personSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="bg-bg pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr_300px] md:gap-12 md:items-center">
            <div>
              <h1 className="font-serif font-semibold text-hero md:text-[3rem] text-text-primary mt-10 md:mt-0">
                You already know something deeper is driving it. Let&apos;s go there.
              </h1>
              <p className="font-sans text-body-lg text-text-secondary mt-6">
                EMDR and trauma therapy in Roseville, CA — and online across California.
              </p>
              <div className="mt-10">
                <CTAButton href="/contact" label="Book a Free Consultation" />
              </div>
            </div>
            <div className="rounded-lg overflow-hidden aspect-[4/5] w-full max-w-[260px] mx-auto md:max-w-none relative bg-surface border border-border">
              <Image
                src="/images/headshot-hero.webp"
                alt="Matthew Heake, therapist in Roseville, CA"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 260px, 300px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem statement */}
      <section className="bg-bg py-16 md:py-24">
        <div className="max-w-reading mx-auto px-6">
          <div className="space-y-5 text-body md:text-body-lg text-text-secondary">
            <p>
              You&apos;re the person people lean on. Capable, reflective, probably seen as the one who has it together. But underneath that, something keeps running — a thought loop that won&apos;t power down, a reaction you can&apos;t explain, a pattern you keep ending up in no matter how much you understand it.
            </p>
            <p>
              You&apos;ve probably tried therapy before. Maybe it helped you make sense of things, gave you some language for what you&apos;re dealing with. But making sense of it didn&apos;t make it stop. The anxiety still shows up at 2am. The same relational pattern still plays out. You still flinch at the thing you know shouldn&apos;t bother you anymore.
            </p>
            <p>
              That&apos;s because what&apos;s driving most of this isn&apos;t cognitive. It&apos;s encoded — stored in your nervous system from experiences that never got fully processed. Your brain understood. Your body didn&apos;t. And until the body catches up, the insight stays intellectual and the pattern stays intact.
            </p>
            <p className="text-text-primary font-medium">
              If that sounds like you, you&apos;re in the right place.
            </p>
          </div>
        </div>
      </section>

      {/* Approach — ONE surface section */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading as="h2" className="mb-12">
            How I work
          </SectionHeading>
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-12 lg:space-y-0">
            {approachBlocks.map((block) => (
              <div key={block.href}>
                <h3 className="font-serif text-h3 md:text-[1.5rem] text-text-primary">
                  {block.title}
                </h3>
                <p className="text-body text-text-secondary mt-3">
                  {block.description}
                </p>
                <Link
                  href={block.href}
                  className="inline-block mt-4 text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2 transition-colors text-small font-medium"
                >
                  {block.linkLabel} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-bg py-10 md:py-14 border-t border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:justify-center md:gap-x-8 gap-y-2 items-center text-small text-text-tertiary text-center">
            <span>EMDR Trained (EMDRIA-Approved)</span>
            <span className="hidden md:inline" aria-hidden="true">·</span>
            <span>MS Counseling Psychology, Summa Cum Laude</span>
            <span className="hidden md:inline" aria-hidden="true">·</span>
            <span>Guest Lecturer, Sacramento State</span>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-reading mx-auto px-6">
          <div className="border-l-2 border-accent pl-6 md:pl-8">
            <p className="text-body-lg text-text-secondary italic font-serif">
              I didn&apos;t become a therapist because I studied pain in a textbook. I became one because I know what it&apos;s like to rebuild a life from the ground up — and because the tools that helped me do it are the same ones I now use in session.
            </p>
            <Link
              href="/about"
              className="inline-block mt-6 text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2 transition-colors text-small font-medium"
            >
              More about my path →
            </Link>
          </div>
        </div>
      </section>

      {/* Logistics + CTA */}
      <section className="bg-bg py-16 md:py-24 border-t border-border">
        <div className="max-w-reading mx-auto px-6 text-center">
          <p className="text-body text-text-secondary">
            Roseville, CA (in-person) &nbsp;|&nbsp;{" "}
            <Link
              href="/online-therapy-california"
              className="text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2"
            >
              Online across California
            </Link>
          </p>
          <a
            href={siteConfig.phoneHref}
            className="block mt-3 text-body-lg text-text-primary font-medium hover:text-text-secondary"
          >
            {siteConfig.phone}
          </a>
          <p className="mt-2 text-small text-text-secondary">
            <Link
              href="/fees"
              className="text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2"
            >
              View fees
            </Link>
          </p>
          <div className="mt-8">
            <CTAButton href="/contact" label="Book a Free Consultation" />
          </div>
        </div>
      </section>
    </>
  );
}
