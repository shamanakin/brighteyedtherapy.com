import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "Fees & FAQ",
  description:
    "Therapy fees, insurance information, and answers to common questions about EMDR therapy in Roseville, CA.",
  path: "/fees",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Fees & FAQ", item: `${siteConfig.url}/fees` },
  ],
};

const faqItems = [
  {
    question: "How do I know if EMDR is right for me?",
    answer:
      "If you've done insight-oriented therapy and understand your patterns but still feel stuck in the same reactions, EMDR is likely a good fit. It's designed for the gap between knowing and feeling — when you can explain why you react a certain way but can't stop the reaction. The best way to find out is a free consultation where we can talk about what you're dealing with and I'll give you an honest recommendation.",
  },
  {
    question: "I've tried therapy before and it didn't work.",
    answer:
      "Most people who reach out to me have been in therapy before. That's not a failure — it usually means the approach didn't match the problem. Talk therapy is good at insight and support. It's limited when the issue is encoded in the nervous system rather than the narrative. EMDR and ERP work differently — they target the mechanism directly rather than talking around it.",
  },
  {
    question: "How long does this take?",
    answer:
      "Honest answer: it depends on the complexity and how many targets we're working with. For a single-incident trauma, many clients see significant shifts within 6-12 sessions. For complex trauma or long-standing OCD patterns, it's typically longer — 6 months to a year of weekly work. I won't keep you in therapy longer than necessary, and I'll be transparent about where we are in the process.",
  },
  {
    question: "What if I'm not ready for trauma processing?",
    answer:
      "Then we don't start there. Readiness isn't a prerequisite you show up with — it's something we build together. The first phase of EMDR is stabilization: developing the internal resources and coping capacity that make processing safe. If you're nervous about the idea of going into difficult material, that's normal and it's something we'll address directly before we begin.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "I'm an out-of-network provider, which means I don't bill insurance directly. After each session, I provide a superbill — a detailed receipt you submit to your insurer for reimbursement. Some PPO plans reimburse a portion of the session fee for out-of-network mental health services. Call the number on the back of your insurance card and ask about your out-of-network outpatient mental health benefits to find out your specific coverage.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const feeRows = [
  { label: "Individual Session", duration: "50 min", price: "$150–175" },
  { label: "Extended Session", duration: "80 min", price: "$240–280" },
  { label: "EFT Couples Therapy", duration: "50 min", price: "$200" },
  { label: "Free Consultation", duration: "15 min", price: "Free" },
];

export default function FeesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Page header */}
      <section className="bg-bg pt-32 md:pt-40 pb-16">
        <div className="max-w-reading mx-auto px-6">
          <h1 className="font-serif font-semibold text-h1 md:text-[2.5rem] text-text-primary">
            Fees &amp; FAQ
          </h1>
          <p className="text-body-lg text-text-secondary mt-6">
            Transparent pricing and honest answers to the questions most people have before reaching out.
          </p>
        </div>
      </section>

      {/* Fee table */}
      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-reading mx-auto px-6">
          <SectionHeading as="h2" className="mb-8">
            Session Fees
          </SectionHeading>
          <div>
            {feeRows.map((row) => (
              <div
                key={row.label}
                className="flex justify-between items-baseline py-4 border-b border-border"
              >
                <div>
                  <span className="text-body text-text-primary">{row.label}</span>
                  <span className="text-small text-text-tertiary ml-2">({row.duration})</span>
                </div>
                <span className="text-body font-medium text-text-primary">{row.price}</span>
              </div>
            ))}
          </div>
          <p className="text-small text-text-tertiary mt-4">
            A limited number of sliding-scale spots are available starting at $125. If cost is a barrier, mention it in your consultation — no explanation needed.
          </p>
        </div>
      </section>

      {/* Insurance — ONE surface section */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-reading mx-auto px-6">
          <SectionHeading as="h2" className="mb-6">
            Insurance &amp; Reimbursement
          </SectionHeading>
          <div className="space-y-5 text-body md:text-body-lg text-text-secondary">
            <p>
              I&apos;m an out-of-network provider. I don&apos;t bill insurance companies directly, and there&apos;s a reason for that: it allows me to provide the type and length of treatment that actually fits your needs without an insurer dictating session limits or approved diagnoses.
            </p>
            <p>
              That said, some clients with PPO insurance get reimbursed for a significant portion of each session. Here&apos;s how it works: after each session, I provide a superbill — a detailed receipt with all the codes your insurer needs. You submit it to your insurance company (many now accept upload through an app), and they reimburse you directly. Typical reimbursement is 50-80% of the session fee, depending on your plan. Before your first session, I&apos;d recommend calling your insurer and asking: &quot;What are my out-of-network benefits for outpatient mental health?&quot; and &quot;What is my reimbursement rate for CPT code 90837?&quot;
            </p>
            <p>
              Payment is due by end of day on the day of your appointment. I accept credit card, debit card, and HSA/FSA cards.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-reading mx-auto px-6">
          <SectionHeading as="h2" className="mb-10">
            Frequently Asked Questions
          </SectionHeading>
          <div className="space-y-0">
            {faqItems.map((item, index) => (
              <div
                key={item.question}
                className={`${index > 0 ? "border-t border-border pt-8 mt-8" : ""}`}
              >
                <h3 className="font-serif text-h3 md:text-[1.5rem] text-text-primary">
                  {item.question}
                </h3>
                <p className="text-body text-text-secondary mt-3">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-reading mx-auto px-6 text-center">
          <p className="text-body-lg text-text-secondary mb-8">
            Still have questions? Reach out — consultations are free and there&apos;s no pressure.
          </p>
          <CTAButton href="/contact" label="Book a Free Consultation" />
        </div>
      </section>
    </>
  );
}
