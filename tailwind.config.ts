import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0F1B2D", 2: "#16233A", 3: "#1F3050" },
        paper: { DEFAULT: "#FAF8F3", dim: "#F1EDE3" },
        gold: { DEFAULT: "#C89A4A", bright: "#E0B75E", dim: "#8C6F35" },
        stamp: { red: "#A23B33" },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        latin: ["var(--font-latin)", "sans-serif"],
      },
      boxShadow: {
        stamp: "0 1px 0 rgba(200,154,74,0.4), 0 12px 30px -12px rgba(15,27,45,0.45)",
      },
      borderRadius: { card: "1.25rem" },
      keyframes: {
        "stamp-in": {
          "0%": { transform: "scale(2.2) rotate(-14deg)", opacity: "0" },
          "60%": { transform: "scale(0.94) rotate(-14deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(-14deg)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "stamp-in": "stamp-in 0.5s cubic-bezier(.2,.8,.2,1) forwards",
        marquee: "marquee 40s linear infinite",
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
