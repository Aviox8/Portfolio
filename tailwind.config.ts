import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: '#00eeff',
        magenta: '#ff00ff',
      },
      backdropBlur: {
        glass: '24px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'drift-up': 'drift-up 8s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'drift-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100vh)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 238, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 238, 255, 0.6)' },
        },
      },
    },
  },
  darkMode: 'class',
};

export default config;
