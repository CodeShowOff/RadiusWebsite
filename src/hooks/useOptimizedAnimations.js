import { useState, useEffect, useMemo } from 'react';

// Shared hook for mobile detection and reduced animations
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;
    
    let rafId;
    let lastWidth = window.innerWidth;
    
    const check = () => {
      const newWidth = window.innerWidth;
      // Only update if threshold is crossed to reduce re-renders
      if ((lastWidth <= 768) !== (newWidth <= 768)) {
        setIsMobile(newWidth <= 768);
      }
      lastWidth = newWidth;
      rafId = null;
    };
    
    const handleResize = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(check);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
  
  return isMobile;
};

// Check if user prefers reduced motion
export const usePrefersReducedMotion = () => {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handler = (e) => setPrefersReduced(e.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);
  
  return prefersReduced;
};

// Combined hook for animation decisions
export const useShouldReduceAnimations = () => {
  const isMobile = useIsMobile();
  const prefersReduced = usePrefersReducedMotion();
  return isMobile || prefersReduced;
};

// Optimized animation variants for mobile
export const useOptimizedVariants = (desktopVariants, mobileVariants = null) => {
  const shouldReduce = useShouldReduceAnimations();
  
  return useMemo(() => {
    if (shouldReduce) {
      // Return simplified mobile variants or fade-only
      return mobileVariants || {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } }
      };
    }
    return desktopVariants;
  }, [shouldReduce, desktopVariants, mobileVariants]);
};

// Simplified transition presets
export const transitions = {
  fast: { duration: 0.2 },
  normal: { duration: 0.3 },
  slow: { duration: 0.5 },
  spring: { type: 'spring', stiffness: 300, damping: 30 },
  springLight: { type: 'spring', stiffness: 200, damping: 25 },
};

// Empty animation for disabled states
export const noAnimation = {
  initial: {},
  animate: {},
  exit: {},
  whileHover: {},
  whileTap: {},
};
