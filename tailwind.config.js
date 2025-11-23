/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
        exo: ['Exo 2', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'float-fast': 'levitate-fast 2.5s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-accent': 'glowPulseSoft 2s ease-in-out infinite',
        'neon-glow': 'neonGlow 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'tumble': 'tumble 8s linear infinite',
        'beacon': 'beacon-pulse 2s ease-in-out infinite',
        'vortex': 'cosmic-vortex 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'levitate-fast': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { 'box-shadow': '0 0 20px var(--accent), 0 0 40px var(--accent)', opacity: '1' },
          '50%': { 'box-shadow': '0 0 40px var(--accent), 0 0 60px var(--accent)', opacity: '0.9' },
        },
        glowPulseSoft: {
          '0%, 100%': { 'box-shadow': '0 0 10px var(--accent)', opacity: '0.6' },
          '50%': { 'box-shadow': '0 0 20px var(--accent)', opacity: '0.8' },
        },
        neonGlow: {
          '0%, 100%': { 'text-shadow': '0 0 10px var(--accent), 0 0 20px var(--accent)' },
          '50%': { 'text-shadow': '0 0 20px var(--accent), 0 0 40px var(--accent)' },
        },
        shimmer: {
          '0%': { 'background-position': '-1000px 0' },
          '100%': { 'background-position': '1000px 0' },
        },
        tumble: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(180deg) rotateZ(90deg)' },
        },
        'beacon-pulse': {
          '0%, 100%': { 'box-shadow': '0 0 10px rgba(0, 255, 255, 0.4), 0 0 20px rgba(0, 255, 255, 0.2)', opacity: '1' },
          '50%': { 'box-shadow': '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.4), 0 0 60px rgba(170, 0, 255, 0.2)', opacity: '0.8' },
        },
        'cosmic-vortex': {
          '0%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
          '50%': { transform: 'rotate(180deg) scale(1.05)' },
          '100%': { transform: 'rotate(360deg) scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 255, 255, 0.5)',
        'glow-lg': '0 0 40px rgba(0, 255, 255, 0.8)',
      },
    },
  },
  plugins: [],
};

export default module.exports;
