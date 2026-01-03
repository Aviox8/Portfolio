import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
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
          950: "#0a0a0a",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "bounce-in": "bounceIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
        "glow": "glow 2s ease-in-out infinite",
        "slide-in": "slideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.9) translateY(20px)" },
          "70%": { transform: "scale(1.05)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(59, 130, 246, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      boxShadow: {
        "apple-xs": "0 1px 2px rgba(0, 0, 0, 0.05)",
        "apple-sm": "0 2px 4px rgba(0, 0, 0, 0.08)",
        "apple-md": "0 4px 8px rgba(0, 0, 0, 0.1)",
        "apple-lg": "0 12px 24px rgba(0, 0, 0, 0.12)",
        "apple-xl": "0 20px 40px rgba(0, 0, 0, 0.15)",
        "elevation-1": "0 1px 3px rgba(0, 0, 0, 0.06)",
        "elevation-2": "0 4px 12px rgba(0, 0, 0, 0.08)",
        "elevation-3": "0 8px 24px rgba(0, 0, 0, 0.1)",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
      },
    },
  },
  plugins: [],
};
export default config;
