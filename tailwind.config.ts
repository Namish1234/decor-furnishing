import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111111",
        foreground: "#f5f5f5",
        accent: {
          gold: "#c5a059",
          dark: "#1a1a1a",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      letterSpacing: {
        widest: '.2em',
        widest2: '.3em',
      }
    },
  },
  plugins: [],
};
export default config;
