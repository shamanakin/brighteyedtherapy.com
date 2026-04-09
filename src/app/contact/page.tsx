import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "Get in Touch",
  description:
    "Get in touch with Matthew Heake, Registered AMFT. EMDR and trauma therapy in Roseville, CA — online across California.",
  path: "/contact",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${siteConfig.url}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Page header */}
      <section className="bg-bg pt-32 md:pt-40 pb-16">
        <div className="max-w-reading mx-auto px-6">
          <h1 className="font-serif font-semibold text-h1 md:text-[2.5rem] text-text-primary">
            Get in Touch
          </h1>
          <p className="text-body-lg text-text-secondary mt-6">
            Not sure if this is the right fit? Reach out for a free 15-minute consultation. No pressure, no commitment.
          </p>
        </div>
      </section>

      {/* Contact info + scheduling */}
      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-12 lg:space-y-0">
            {/* Left: reach out + form */}
            <div className="space-y-12">
              <div>
                <SectionHeading as="h2" className="mb-6">
                  Reach Out Directly
                </SectionHeading>
                <p className="text-body text-text-secondary mb-6">
                  Text or email me anytime — I check messages regularly during office hours and periodically outside of them. No need to schedule through a portal. Just reach out and I&apos;ll get back to you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface border border-border rounded-lg text-body text-text-primary hover:border-accent hover:text-accent transition-colors"
                  >
                    <span className="font-medium">Text or call</span>
                    <span className="text-text-secondary">{siteConfig.phone}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface border border-border rounded-lg text-body text-text-primary hover:border-accent hover:text-accent transition-colors"
                  >
                    <span className="font-medium">Email</span>
                    <span className="text-text-secondary text-small break-all">{siteConfig.email}</span>
                  </a>
                </div>
              </div>

              <div>
                <SectionHeading as="h2" className="mb-6">
                  Or Send a Message Here
                </SectionHeading>
                <ContactForm />
              </div>
            </div>

            {/* Right: contact details */}
            <div>
              <SectionHeading as="h2" className="mb-6">
                Contact
              </SectionHeading>
              <div className="space-y-6">
                {/* Phone */}
                <div>
                  <p className="text-caption text-text-tertiary uppercase tracking-wide mb-1">Phone</p>
                  <a
                    href={siteConfig.phoneHref}
                    className="font-serif text-h2 md:text-[2rem] text-text-primary hover:text-text-secondary"
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p className="text-caption text-text-tertiary uppercase tracking-wide mb-1">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-body text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                {/* Address */}
                <div>
                  <p className="text-caption text-text-tertiary uppercase tracking-wide mb-1">Office</p>
                  <address className="not-italic text-body text-text-secondary">
                    {siteConfig.address.full}
                  </address>
                </div>

                {/* Map embed */}
                <div className="mt-4">
                  <iframe
                    title="Office location map"
                    src="https://maps.google.com/maps?q=1380+Lead+Hill+Blvd+%23145,+Roseville,+CA+95661&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full rounded-lg border border-border aspect-[4/3]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
