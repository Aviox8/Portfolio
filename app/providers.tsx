'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Theme = 'light' | 'dark' | 'cosmic' | 'system';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  contrastMode: 'normal' | 'high';
  setContrastMode: (mode: 'normal' | 'high') => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('cosmic');
  const [contrastMode, setContrastModeState] = useState<'normal' | 'high'>('normal');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Initialize from localStorage after hydration
    setIsMounted(true);
    const stored = localStorage.getItem('theme') as Theme | null;
    const storedContrast = localStorage.getItem('contrastMode') as 'normal' | 'high' | null;
    
    if (stored) setThemeState(stored);
    if (storedContrast) setContrastModeState(storedContrast);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const applyTheme = () => {
      let applied = theme;
      if (theme === 'system') {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        applied = mq.matches ? 'cosmic' : 'light';
      }

      // Apply theme to HTML element
      document.documentElement.setAttribute('data-theme', applied);
      document.documentElement.setAttribute('data-contrast', contrastMode);
    };

    applyTheme();
    localStorage.setItem('theme', theme);
    localStorage.setItem('contrastMode', contrastMode);

    // Listen for system theme changes when in system mode
    if (theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme();
      mq.addEventListener('change', handleChange);
      return () => mq.removeEventListener('change', handleChange);
    }
  }, [theme, contrastMode, isMounted]);

  const setTheme = (t: Theme) => {
    setThemeState(t);
  };

  const setContrastMode = (mode: 'normal' | 'high') => {
    setContrastModeState(mode);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, contrastMode, setContrastMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
