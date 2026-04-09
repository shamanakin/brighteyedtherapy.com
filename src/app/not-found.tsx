import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export default function NotFound() {
  return (
    <section className="bg-bg pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="max-w-reading mx-auto px-6 text-center">
        <h1 className="font-serif font-semibold text-hero md:text-[3rem] text-text-primary">
          Page not found
        </h1>
        <p className="text-body-lg text-text-secondary mt-6">
          This page doesn&apos;t exist or may have moved. Here are some places to start:
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton href="/" label="Go Home" />
          <CTAButton href="/contact" label="Get in Touch" variant="outline" />
        </div>
        <nav className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link href="/about" className="text-small text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2">About</Link>
          <Link href="/emdr-therapy-roseville" className="text-small text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2">EMDR</Link>
          <Link href="/ocd-anxiety-therapy-roseville" className="text-small text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2">OCD & Anxiety</Link>
          <Link href="/athletes-performance-therapy-roseville" className="text-small text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2">Athletes</Link>
          <Link href="/fees" className="text-small text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent/80 underline-offset-2">Fees</Link>
        </nav>
      </div>
    </section>
  );
}
