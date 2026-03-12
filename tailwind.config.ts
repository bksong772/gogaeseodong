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
        cream: {
          DEFAULT: "#FAF5ED",
          dark: "#F0E8D5",
          darker: "#E5D9C3",
        },
        brown: {
          DEFAULT: "#2C1810",
          mid: "#6B4C3B",
          light: "#9B7B6A",
          border: "#C4A882",
        },
        amber: {
          DEFAULT: "#B5632A",
          light: "#D4884E",
          pale: "#F0D5B8",
        },
      },
      fontFamily: {
        serif: ["var(--font-nanum-myeongjo)", "var(--font-playfair)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-noto-sans-kr)", "sans-serif"],
      },
      boxShadow: {
        "warm-sm": "0 2px 8px rgba(44, 24, 16, 0.07)",
        "warm":    "0 4px 16px rgba(44, 24, 16, 0.10)",
        "warm-lg": "0 8px 32px rgba(44, 24, 16, 0.14)",
        "warm-xl": "0 16px 48px rgba(44, 24, 16, 0.18)",
      },
      animation: {
        "fade-up":    "fadeUp 0.35s ease forwards",
        "slide-down": "slideDown 0.28s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%":   { opacity: "0", transform: "translateY(-6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
