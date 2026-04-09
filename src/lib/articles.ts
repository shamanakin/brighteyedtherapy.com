export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
}

export const articles: Article[] = [
  {
    slug: "what-does-emdr-feel-like",
    title: "What Does EMDR Actually Feel Like?",
    description:
      "A therapist's honest explanation of what EMDR processing feels like from the client's perspective — not the clinical version, the real one.",
    date: "2026-03-09",
    readingTime: "5 min read",
  },
];
