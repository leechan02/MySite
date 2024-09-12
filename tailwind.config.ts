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
        primary: "#171717",
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
    },
  },
  plugins: [],
};
export default config;
