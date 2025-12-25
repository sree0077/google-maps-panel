import { useState, useCallback, useRef } from 'react';

/**
 * Custom hook for bottom sheet behavior
 * Handles peek, half, and full states with touch/drag support
 */
export const useBottomSheet = (initialState = 'peek') => {
  const [sheetState, setSheetState] = useState(initialState); // 'peek' | 'half' | 'full'
  const [isDragging, setIsDragging] = useState(false);
  const startY = useRef(0);
  const currentY = useRef(0);

  const snapPoints = {
    peek: 30,   // 30% of viewport
    half: 50,   // 50% of viewport
    full: 92    // 92% of viewport (leave some space at top)
  };

  const getHeightClass = () => {
    switch (sheetState) {
      case 'peek': return 'h-[30vh]';
      case 'half': return 'h-[50vh]';
      case 'full': return 'h-[92vh]';
      default: return 'h-[30vh]';
    }
  };

  const expand = useCallback(() => {
    setSheetState(prev => {
      if (prev === 'peek') return 'half';
      if (prev === 'half') return 'full';
      return prev;
    });
  }, []);

  const collapse = useCallback(() => {
    setSheetState(prev => {
      if (prev === 'full') return 'half';
      if (prev === 'half') return 'peek';
      return prev;
    });
  }, []);

  const toggle = useCallback(() => {
    setSheetState(prev => prev === 'peek' ? 'full' : 'peek');
  }, []);

  const handleTouchStart = useCallback((e) => {
    setIsDragging(true);
    startY.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    currentY.current = e.touches[0].clientY;
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const diff = startY.current - currentY.current;
    const threshold = 50; // minimum drag distance
    
    if (diff > threshold) {
      expand();
    } else if (diff < -threshold) {
      collapse();
    }
  }, [isDragging, expand, collapse]);

  return {
    sheetState,
    setSheetState,
    isDragging,
    snapPoints,
    getHeightClass,
    expand,
    collapse,
    toggle,
    handlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd
    }
  };
};

export default useBottomSheet;

