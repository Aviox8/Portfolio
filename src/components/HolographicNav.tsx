import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, FileText, Briefcase, Code2, Mail, Menu, X } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

interface HolographicNavProps {
  items?: NavItem[];
  onNavigate?: (id: string) => void;
}

const HolographicNavInner = memo(({
  items = [
    { id: 'home', label: 'Home', icon: <Home size={20} />, href: '#hero' },
    { id: 'about', label: 'About', icon: <FileText size={20} />, href: '#about' },
    { id: 'projects', label: 'Projects', icon: <Briefcase size={20} />, href: '#projects' },
    { id: 'skills', label: 'Skills', icon: <Code2 size={20} />, href: '#skills' },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} />, href: '#contact' },
  ],
  onNavigate,
}: HolographicNavProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNavigate = (item: NavItem) => {
    setActiveItem(item.id);
    onNavigate?.(item.id);
    const element = document.querySelector(item.href);
    element?.scrollIntoView({ behavior: 'smooth' });
    if (isMobile) setIsExpanded(false);
  };

  const radius = isMobile ? 60 : 100;
  const itemCount = items.length;

  return (
    <>
      {/* Mobile toggle button */}
      {isMobile && (
        <motion.button
          className="fixed top-6 right-6 z-50 p-3 rounded-full glass-panel"
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            border: '2px solid rgba(0, 255, 255, 0.3)',
          }}
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? (
            <X size={24} style={{ color: '#00ffff' }} />
          ) : (
            <Menu size={24} style={{ color: '#00ffff' }} />
          )}
        </motion.button>
      )}

      {/* Holographic ring container (desktop) or menu (mobile) */}
      <motion.nav
        className={isMobile ? 'fixed top-24 right-6 z-40' : 'fixed top-1/2 right-12 z-40 -translate-y-1/2'}
        animate={{
          scale: isMobile && !isExpanded ? 0 : 1,
          opacity: isMobile && !isExpanded ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <motion.div
          className={isMobile ? 'flex flex-col gap-4' : 'relative w-48 h-48'}
          animate={{
            rotate: isExpanded ? 360 : 0,
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            },
          }}
        >
          {/* Ring background glow (desktop) */}
          {!isMobile && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full border-2"
                style={{
                  borderColor: 'rgba(0, 255, 255, 0.2)',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  boxShadow: isExpanded
                    ? '0 0 40px rgba(0, 255, 255, 0.6), inset 0 0 30px rgba(0, 255, 255, 0.1)'
                    : '0 0 20px rgba(0, 255, 255, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              />
            </>
          )}

          {/* Navigation items */}
          {items.map((item, index) => {
            const angle = (index / itemCount) * Math.PI * 2 - Math.PI / 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.button
                key={item.id}
                className="group relative pulse-beacon"
                onClick={() => handleNavigate(item)}
                animate={
                  isMobile
                    ? { x: 0, y: 0 }
                    : {
                      x: isExpanded ? x : 0,
                      y: isExpanded ? y : 0,
                    }
                }
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  delay: isExpanded ? index * 0.05 : 0,
                }}
              >
                <motion.div
                  className="p-3 rounded-full glass-panel flex items-center justify-center"
                  style={{
                    background: activeItem === item.id
                      ? 'rgba(0, 255, 255, 0.2)'
                      : 'rgba(0, 0, 0, 0.8)',
                    border: activeItem === item.id
                      ? '2px solid rgba(0, 255, 255, 0.8)'
                      : '2px solid rgba(0, 255, 255, 0.3)',
                    color: activeItem === item.id ? '#00ffff' : '#b0b0b0',
                  }}
                  whileHover={{
                    scale: 1.2,
                    boxShadow: `0 0 30px rgba(0, 255, 255, 0.6)`,
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  {item.icon}
                </motion.div>

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{
                    opacity: isExpanded || isMobile ? 1 : 0,
                    x: isExpanded || isMobile ? 8 : 0,
                  }}
                  transition={{ delay: isExpanded ? 0.1 : 0 }}
                  className="absolute left-full ml-4 whitespace-nowrap pointer-events-none"
                  style={{
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: activeItem === item.id ? '#00ffff' : '#b0b0b0',
                    fontSize: '14px',
                    fontFamily: "'Exo 2', sans-serif",
                    textShadow: activeItem === item.id ? '0 0 10px #00ffff' : 'none',
                    fontWeight: '600',
                  }}
                >
                  {item.label}
                </motion.div>
              </motion.button>
            );
          })}
        </motion.div>
      </motion.nav>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {isMobile && isExpanded && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
});

HolographicNavInner.displayName = 'HolographicNav';

export const HolographicNav = memo(HolographicNavInner);
