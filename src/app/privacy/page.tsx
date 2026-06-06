import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Bright Eyed Therapy. How we handle your information when you visit our website or contact us.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="bg-bg pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="max-w-reading mx-auto px-6">
        <h1 className="font-serif font-semibold text-h1 md:text-[2.5rem] text-text-primary">
          Privacy Policy
        </h1>
        <p className="text-small text-text-tertiary mt-4">
          Last updated: March 2026
        </p>

        <div className="mt-12 space-y-10 text-body text-text-secondary">
          <div>
            <SectionHeading as="h2" className="mb-4">
              Overview
            </SectionHeading>
            <p>
              Bright Eyed Therapy (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects
              your privacy. This policy explains what information we collect through this website and
              how we use it. This website is an informational site for a therapy private practice — it
              is not a patient portal and is not used for clinical communication.
            </p>
          </div>

          <div>
            <SectionHeading as="h2" className="mb-4">
              Information We Collect
            </SectionHeading>
            <div className="space-y-4">
              <p>
                <strong className="text-text-primary">Contact form submissions:</strong> If you use
                the contact form on this site, we collect your name, email address or phone number,
                and the contents of your message. This information is used solely to respond to your
                inquiry. Do not include protected health information (PHI) in the contact form.
              </p>
              <p>
                <strong className="text-text-primary">Analytics:</strong> We may use privacy-respecting
                analytics to understand how visitors use this site (e.g., which pages are visited,
                general geographic region). We do not use this data to identify individual visitors.
                No personal information is sold or shared with third parties for advertising purposes.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading as="h2" className="mb-4">
              What We Do Not Collect
            </SectionHeading>
            <p>
              This website does not collect, store, or transmit protected health information (PHI).
              Clinical records, session notes, and patient data are managed through separate,
              HIPAA-compliant systems and are never processed through this website.
            </p>
          </div>

          <div>
            <SectionHeading as="h2" className="mb-4">
              Cookies
            </SectionHeading>
            <p>
              This site uses minimal or no cookies. If analytics are enabled, they may use
              privacy-respecting, cookieless tracking. No advertising cookies or third-party
              tracking pixels are used.
            </p>
          </div>

          <div>
            <SectionHeading as="h2" className="mb-4">
              Third-Party Services
            </SectionHeading>
            <p>
              The contact form on this site is processed by Formspree, a third-party form
              service. When you submit the form, your name, contact information, and message
              are sent to Formspree and forwarded to us by email. Formspree operates under
              its own privacy policy. Do not include clinical or health information in the
              form — it is intended for scheduling and general questions only.
            </p>
            <p className="mt-4">
              This site embeds a Google Maps widget to display the office location. Google
              Maps operates under Google&apos;s own privacy policy. We recommend reviewing that
              policy if you interact with the embedded map.
            </p>
          </div>

          <div>
            <SectionHeading as="h2" className="mb-4">
              Your Rights
            </SectionHeading>
            <p>
              You may request that we delete any personal information you&apos;ve submitted
              through the contact form. To make a request, email us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2"
              >
                {siteConfig.email}
              </a>.
            </p>
          </div>

          <div>
            <SectionHeading as="h2" className="mb-4">
              Contact
            </SectionHeading>
            <p>
              If you have questions about this privacy policy, contact us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2"
              >
                {siteConfig.email}
              </a>{" "}
              or call{" "}
              <a
                href={siteConfig.phoneHref}
                className="text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2"
              >
                {siteConfig.phone}
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
