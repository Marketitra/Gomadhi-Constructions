import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        concrete: {
          DEFAULT: "#E9E7E2",
          card: "#DCD9D2",
          line: "#C7C3BA",
          grid: "#D3D0C8",
        },
        gold: {
          DEFAULT: "#A67C00",
          dark: "#7A5C00",
        },
        rust: {
          DEFAULT: "#9C4A22",
          dark: "#7A3719",
        },
        paper: "#1E1C19",
        stone: {
          DEFAULT: "#57544D",
          muted: "#8A8579",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
