import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        apple: {
          50: "#f5f5f7",
          100: "#ececf1",
          200: "#e5e5ea",
          300: "#d5d5dd",
          400: "#a1a1a6",
          500: "#86868b",
          600: "#5a5a5f",
          700: "#424245",
          800: "#1d1d1f",
          900: "#000000",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.97)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      boxShadow: {
        "apple-sm": "0 1px 3px rgba(0, 0, 0, 0.05)",
        "apple-md": "0 4px 6px rgba(0, 0, 0, 0.07)",
        "apple-lg": "0 12px 24px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
