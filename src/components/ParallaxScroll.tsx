import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
}

/**
 * Parallax scrolling component
 * Creates depth effect by moving elements at different speeds during scroll
 */
export function Parallax({
  children,
  offset = 50,
  className = '',
  speed = 'normal',
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const speedMultiplier = {
    slow: 0.2,
    normal: 0.5,
    fast: 0.8,
  };

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, offset * speedMultiplier[speed]]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Fade-in on scroll component
 * Elements fade in as they come into view with optional parallax
 */
export function FadeInOnScroll({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
