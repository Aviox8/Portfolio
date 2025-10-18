/**
 * Device detection and performance utilities
 */

export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export const isTablet = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /iPad|Android(?!.*Mobile)/i.test(navigator.userAgent);
};

export const isTouchDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    (navigator as any).msMaxTouchPoints > 0
  );
};

export const getDevicePerformance = (): 'low' | 'medium' | 'high' => {
  if (typeof window === 'undefined') return 'medium';
  
  // Check for low-end devices
  const isLowEndDevice = isMobile() && (
    navigator.hardwareConcurrency <= 4 ||
    (navigator as any).deviceMemory <= 2
  );
  
  if (isLowEndDevice) return 'low';
  
  // Check for high-end devices
  const isHighEndDevice = 
    !isMobile() && 
    navigator.hardwareConcurrency >= 8 &&
    (navigator as any).deviceMemory >= 8;
  
  if (isHighEndDevice) return 'high';
  
  return 'medium';
};

export const shouldReduceMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const getViewportSize = () => {
  if (typeof window === 'undefined') return { width: 1920, height: 1080 };
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export const isLowBandwidth = (): boolean => {
  if (typeof navigator === 'undefined' || !(navigator as any).connection) {
    return false;
  }
  
  const connection = (navigator as any).connection;
  return (
    connection.saveData ||
    connection.effectiveType === 'slow-2g' ||
    connection.effectiveType === '2g'
  );
};
