import Script from "next/script";

/**
 * Analytics component supporting both Plausible (recommended) and GA4.
 *
 * To enable Plausible (privacy-respecting, no cookies, GDPR-compliant):
 *   1. Sign up at https://plausible.io (or self-host)
 *   2. Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN=brighteyedtherapy.com in .env.local
 *
 * To enable GA4 instead:
 *   1. Create a GA4 property at https://analytics.google.com
 *   2. Set NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX in .env.local
 *
 * Phone click tracking is automatic via the data-analytics attributes
 * on phone links throughout the site (add data-analytics="phone-click"
 * to phone number <a> tags).
 */
export default function Analytics() {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;

  if (plausibleDomain) {
    return (
      <Script
        defer
        data-domain={plausibleDomain}
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
    );
  }

  if (ga4Id) {
    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga4Id}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
      </>
    );
  }

  return null;
}
