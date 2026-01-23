'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 active:scale-95 hover:scale-110"
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Current theme: ${resolvedTheme}`}
    >
      {resolvedTheme === 'dark' ? (
        <Sun size={20} className="text-amber-400 transition-transform duration-300 hover:rotate-180" />
      ) : (
        <Moon size={20} className="text-amber-600 transition-transform duration-300 hover:rotate-180" />
      )}
    </button>
  );
}
