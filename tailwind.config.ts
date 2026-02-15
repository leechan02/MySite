import { color } from "framer-motion";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 54px 60px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#353535",
        secondary: "#F7F9FA",
        red: "#FF6057",
        green: "#28C841",
        yellow: "#FEBC2E",
        color1: "#FDCA6B",
        color2: "#98BFBF",
        color3: "#EEEBDE",
        color4: "#3A82AF",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      keyframes: {
        'bounce-arrow': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(2px, -2px)' },
        },
      },
      animation: {
        'bounce-arrow': 'bounce-arrow 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
export default config;
