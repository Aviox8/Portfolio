import { motion } from 'framer-motion';

export function AnimatedSkillSVG() {
  return (
    <motion.svg
      width="64" height="64" viewBox="0 0 64 64" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 180, damping: 14 }}
      className="mx-auto mb-4"
    >
      <motion.circle
        cx="32" cy="32" r="28"
        stroke="#00D9FF"
        strokeWidth="4"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />
      <motion.path
        d="M20 34 L30 44 L44 20"
        stroke="#00FF88"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.7 }}
      />
    </motion.svg>
  );
}
