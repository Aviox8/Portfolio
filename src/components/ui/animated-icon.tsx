import { motion, type HTMLMotionProps } from 'framer-motion';

type AnimatedIconProps = HTMLMotionProps<'span'>;

export function AnimatedIcon({ children, style, ...props }: AnimatedIconProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.18, rotate: -8 }}
      whileTap={{ scale: 0.92, rotate: 8 }}
      transition={{ type: 'spring', stiffness: 350, damping: 18 }}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...(style || {}) }}
      {...props}
    >
      {children}
    </motion.span>
  );
}
