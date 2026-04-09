import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FAF8F5",
        "text-primary": "#2C2C2C",
        "text-secondary": "#6B6560",
        "text-tertiary": "#9B9590",
        accent: { DEFAULT: "#B8704D", hover: "#A3613F" },
        border: "#E8E4DF",
        surface: "#F0ECE7",
        "footer-bg": "#2C2C2C",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
      },
      fontSize: {
        hero: ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        h1: ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h2: ["1.5rem", { lineHeight: "1.25" }],
        h3: ["1.25rem", { lineHeight: "1.3" }],
        body: ["1rem", { lineHeight: "1.65" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        caption: ["0.8125rem", { lineHeight: "1.4" }],
      },
      maxWidth: {
        reading: "42rem",
      },
    },
  },
  plugins: [],
};
export default config;
