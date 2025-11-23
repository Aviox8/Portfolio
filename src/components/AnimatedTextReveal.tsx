import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  stagger?: number;
}

/**
 * Component for animated text reveals with staggered character or word animations
 * Enhances text with smooth entrance animations and visual appeal
 */
export function AnimatedTextReveal({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
  stagger = 0.05,
}: AnimatedTextRevealProps) {
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-wrap"
    >
      {words.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={wordVariants} className={className}>
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
}

/**
 * Character-level animated reveal for more granular control
 */
export function AnimatedCharacterReveal({
  children,
  delay = 0,
  duration = 0.05,
  className = '',
  stagger = 0.02,
}: Omit<AnimatedTextRevealProps, 'as'>) {
  const text = typeof children === 'string' ? children : '';
  const characters = text.split('');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const charVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="inline-block"
    >
      {characters.map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={charVariants} className={className}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
