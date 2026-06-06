"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-surface border border-border rounded-lg px-6 py-12 text-center">
        <p className="text-body-lg text-text-primary font-medium">
          Message received.
        </p>
        <p className="text-body text-text-secondary mt-2">
          I&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      action="https://formspree.io/f/xeepwqzr"
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <p className="text-caption text-text-tertiary">
        No clinical information needed — this form is for scheduling and general questions only.
      </p>

      <div>
        <label htmlFor="contact-name" className="block text-caption text-text-tertiary uppercase tracking-wide mb-1.5">
          Name
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          autoComplete="name"
          className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-body text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-caption text-text-tertiary uppercase tracking-wide mb-1.5">
          Email or Phone
        </label>
        <input
          type="text"
          id="contact-email"
          name="contact"
          required
          className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-body text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
          placeholder="How to reach you"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-caption text-text-tertiary uppercase tracking-wide mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-body text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-y"
          placeholder="What's on your mind? (optional)"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-block font-sans font-medium text-small tracking-wide uppercase px-8 py-3.5 rounded-full bg-accent text-white hover:bg-accent-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-small text-red-600">
          Something went wrong. You can also reach me directly at{" "}
          <a href="mailto:matthew@brighteyedtherapy.com" className="underline">
            matthew@brighteyedtherapy.com
          </a>
        </p>
      )}
    </form>
  );
}
