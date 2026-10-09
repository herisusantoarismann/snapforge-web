import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#00f2fe",
          "cyan-light": "#38bdf8",
          amber: "#ff8c00",
          "amber-light": "#fb923c",
          dark: "#080c14",
          card: "#0d1322",
          "card-border": "rgba(255, 255, 255, 0.08)",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        "glow-cyan": "0 0 35px -5px rgba(0, 242, 254, 0.3)",
        "glow-amber": "0 0 35px -5px rgba(255, 140, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;

