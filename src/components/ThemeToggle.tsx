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

  if (!mounted) return <div className="w-7 h-7" />;

  return (
    <button
      onClick={handleToggle}
      className="p-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200"
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Current: ${resolvedTheme}`}
    >
      {resolvedTheme === 'dark' ? (
        <Sun size={16} className="text-amber-400" />
      ) : (
        <Moon size={16} className="text-amber-600" />
      )}
    </button>
  );
}
