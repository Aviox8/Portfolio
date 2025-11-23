import { useEffect, useRef } from 'react';
import { animate, useInView, useMotionValue } from 'framer-motion';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedNumber({ value, duration = 0.8, prefix = '', suffix = '', className }: AnimatedNumberProps) {
  const nodeRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const inView = useInView(nodeRef, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (!nodeRef.current) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      nodeRef.current.textContent = `${prefix}${Math.round(value)}${suffix}`;
      return;
    }

    if (inView && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      const controls = animate(0, value, {
        duration,
        ease: 'easeOut',
        onUpdate(latest) {
          if (nodeRef.current) {
            nodeRef.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, prefix, suffix, value, duration, motionValue]);

  return <span ref={nodeRef} className={className} aria-label={`${prefix}${value}${suffix}`} />;
}
