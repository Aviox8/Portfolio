import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Initialize from localStorage or default to 'system'
    const stored = localStorage.getItem('theme') as Theme | null;
    return stored || 'system';
  });

  useEffect(() => {
    const applyTheme = () => {
      let applied = theme;
      if (theme === 'system') {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        applied = mq.matches ? 'dark' : 'light';
      }
      
      // Apply theme to HTML element
      document.documentElement.setAttribute('data-theme', applied);
      console.log('🎨 Theme applied:', applied, 'from mode:', theme);
      console.log('📍 data-theme attribute:', document.documentElement.getAttribute('data-theme'));
    };

    // Apply immediately on mount
    applyTheme();
    localStorage.setItem('theme', theme);

    // Listen for system theme changes when in system mode
    if (theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme();
      mq.addEventListener('change', handleChange);
      return () => mq.removeEventListener('change', handleChange);
    }
  }, [theme]);

  const setTheme = (t: Theme) => {
    console.log('🔄 Setting theme to:', t);
    setThemeState(t);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
