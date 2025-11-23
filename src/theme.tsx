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
  const [theme, setThemeState] = useState<Theme>(() => {
    // Initialize from localStorage or default to 'cosmic'
    const stored = localStorage.getItem('theme') as Theme | null;
    return stored || 'cosmic';
  });

  const [contrastMode, setContrastModeState] = useState<'normal' | 'high'>(() => {
    const stored = localStorage.getItem('contrastMode') as 'normal' | 'high' | null;
    return stored || 'normal';
  });

  useEffect(() => {
    const applyTheme = () => {
      let applied = theme;
      if (theme === 'system') {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        applied = mq.matches ? 'cosmic' : 'light';
      }
      
      // Apply theme to HTML element
      document.documentElement.setAttribute('data-theme', applied);
      document.documentElement.setAttribute('data-contrast', contrastMode);
      console.log('🎨 Theme applied:', applied, 'from mode:', theme);
      console.log('📍 data-theme attribute:', document.documentElement.getAttribute('data-theme'));
    };

    // Apply immediately on mount
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
  }, [theme, contrastMode]);

  const setTheme = (t: Theme) => {
    console.log('🔄 Setting theme to:', t);
    setThemeState(t);
  };

  const setContrastMode = (mode: 'normal' | 'high') => {
    console.log('🔆 Setting contrast mode to:', mode);
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
