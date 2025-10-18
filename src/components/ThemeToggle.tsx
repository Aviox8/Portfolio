import { useTheme, Theme } from '../theme';
import { Sun, Moon, Monitor } from 'lucide-react';

const icons = {
  light: <Sun className="w-5 h-5" />, 
  dark: <Moon className="w-5 h-5" />, 
  system: <Monitor className="w-5 h-5" />
};

const labels = {
  light: 'Light',
  dark: 'Dark',
  system: 'System'
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1">
      {(['light', 'dark', 'system'] as Theme[]).map((t) => (
        <button
          key={t}
          aria-label={`Switch to ${labels[t]} theme`}
          className={`p-2 rounded-full border border-white/10 bg-white/5 hover:bg-primary/10 transition-all focus-visible:ring-2 focus-visible:ring-primary ${theme === t ? 'ring-2 ring-primary' : ''}`}
          onClick={() => setTheme(t)}
        >
          {icons[t]}
        </button>
      ))}
    </div>
  );
}
