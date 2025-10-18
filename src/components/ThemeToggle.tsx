import { useTheme, Theme } from '../theme';
import { Sun, Moon, Monitor } from 'lucide-react';

const themeConfig = [
  { value: 'light' as Theme, icon: Sun, label: 'Light' },
  { value: 'dark' as Theme, icon: Moon, label: 'Dark' },
  { value: 'system' as Theme, icon: Monitor, label: 'System' }
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme: Theme) => {
    console.log('🎨 Theme changing to:', newTheme);
    setTheme(newTheme);
  };

  return (
    <div 
      className="flex items-center gap-0.5 p-1.5 rounded-lg border transition-all duration-200"
      style={{ 
        backgroundColor: 'var(--muted)',
        borderColor: 'var(--border)'
      }}
      role="group" 
      aria-label="Theme switcher"
    >
      {themeConfig.map(({ value, icon: Icon, label }) => {
        const isActive = theme === value;
        return (
          <button
            key={value}
            aria-label={`Switch to ${label} theme`}
            aria-pressed={isActive}
            title={`${label} Mode`}
            onClick={() => handleThemeChange(value)}
            type="button"
            className="p-2 rounded transition-all duration-200 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2"
            style={{
              backgroundColor: isActive ? 'var(--primary)' : 'var(--background)',
              color: isActive ? 'var(--primary-foreground)' : 'var(--foreground)',
              opacity: isActive ? 1 : 0.65,
              boxShadow: isActive ? '0 2px 8px var(--primary)' : 'none'
            }}
          >
            <Icon className="w-4 h-4" strokeWidth={2.5} />
          </button>
        );
      })}
    </div>
  );
}
