'use client';

import { useEffect, useRef, useCallback } from 'react';

interface FloatingElementConfig {
  repulsionRadius: number;
  maxRepulsion: number;
  damping: number;
  easing: (t: number) => number;
}

const defaultConfig: FloatingElementConfig = {
  repulsionRadius: 250,
  maxRepulsion: 100,
  damping: 0.1,
  easing: (t: number) => {
    // Smooth easing curve similar to antigravity.google
    return 1 - Math.pow(1 - t, 3);
  },
};

export const useAntigravityPhysics = (config: Partial<FloatingElementConfig> = {}) => {
  const finalConfig = { ...defaultConfig, ...config };
  const elementsRef = useRef<HTMLElement[]>([]);
  const velocityRef = useRef<Map<HTMLElement, { x: number; y: number }>>(new Map());
  const basePositionRef = useRef<Map<HTMLElement, { x: number; y: number }>>(new Map());

  const registerElement = useCallback((element: HTMLElement) => {
    if (element && !elementsRef.current.includes(element)) {
      elementsRef.current.push(element);
      const rect = element.getBoundingClientRect();
      basePositionRef.current.set(element, {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
      velocityRef.current.set(element, { x: 0, y: 0 });
    }
  }, []);

  const unregisterElement = useCallback((element: HTMLElement) => {
    elementsRef.current = elementsRef.current.filter((e: HTMLElement) => e !== element);
    velocityRef.current.delete(element);
    basePositionRef.current.delete(element);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let touchX = window.innerWidth / 2;
    let touchY = window.innerHeight / 2;
    let isTouch = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isTouch) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      }
    };

    const handleTouchStart = () => {
      isTouch = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchX = e.touches[0].clientX;
        touchY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      isTouch = false;
    };

    const cursorX = isTouch ? touchX : mouseX;
    const cursorY = isTouch ? touchY : mouseY;

    const animate = () => {
      elementsRef.current.forEach((element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;

        // Calculate distance to cursor
        const dx = elementCenterX - cursorX;
        const dy = elementCenterY - cursorY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Calculate repulsion force
        let repulsionX = 0;
        let repulsionY = 0;

        if (distance < finalConfig.repulsionRadius && distance > 0) {
          const angle = Math.atan2(dy, dx);
          const strength = (1 - distance / finalConfig.repulsionRadius) ** 2;
          const magnitude = strength * finalConfig.maxRepulsion;

          repulsionX = Math.cos(angle) * magnitude;
          repulsionY = Math.sin(angle) * magnitude;
        }

        // Update velocity with damping
        const velocity = velocityRef.current.get(element) || { x: 0, y: 0 };
        velocity.x = (velocity.x + repulsionX) * (1 - finalConfig.damping);
        velocity.y = (velocity.y + repulsionY) * (1 - finalConfig.damping);

        // Apply upward drift
        velocity.y -= 0.5; // Continuous upward drift

        // Update position
        const currentTransform = element.style.transform;
        const translateMatch = currentTransform.match(/translate\(([^,]+),\s*([^)]+)\)/);
        let currentX = 0;
        let currentY = 0;

        if (translateMatch) {
          currentX = parseFloat(translateMatch[1]);
          currentY = parseFloat(translateMatch[2]);
        }

        const newX = currentX + velocity.x;
        const newY = currentY + velocity.y;

        element.style.transform = `translate(${newX}px, ${newY}px)`;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [finalConfig]);

  return { registerElement, unregisterElement };
};
