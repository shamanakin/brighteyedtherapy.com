import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";
import { articles } from "@/lib/articles";

export const metadata: Metadata = buildMetadata({
  title: "Resources",
  description:
    "Articles on EMDR, trauma, OCD, anxiety, and performance therapy from Matthew Heake, Registered AMFT in Roseville, CA.",
  path: "/resources",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Resources", item: `${siteConfig.url}/resources` },
  ],
};

export default function ResourcesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <section className="bg-bg pt-32 md:pt-40 pb-16">
        <div className="max-w-reading mx-auto px-6">
          <h1 className="font-serif font-semibold text-h1 md:text-[2.5rem] text-text-primary">
            Resources
          </h1>
          <p className="text-body-lg text-text-secondary mt-6">
            Honest explanations of how therapy works, what to expect, and what the
            research actually says — written for the person considering it, not the
            clinician studying it.
          </p>
        </div>
      </section>

      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-reading mx-auto px-6">
          <div className="space-y-0">
            {articles.map((article, index) => (
              <article
                key={article.slug}
                className={index > 0 ? "border-t border-border pt-8 mt-8" : ""}
              >
                <Link
                  href={`/resources/${article.slug}`}
                  className="group block"
                >
                  <h2 className="font-serif text-h3 md:text-h2 text-text-primary group-hover:text-accent transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-body text-text-secondary mt-2">
                    {article.description}
                  </p>
                  <p className="text-small text-text-tertiary mt-3">
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    · {article.readingTime}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
