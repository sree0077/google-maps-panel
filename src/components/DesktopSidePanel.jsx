import React, { useState, useRef, useEffect } from 'react';

/**
 * Desktop side panel component
 * Fixed right-side panel with scrollable content and sticky header
 */
const DesktopSidePanel = ({ children, onClose }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setIsScrolled(scrollRef.current.scrollTop > 10);
      }
    };

    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener('scroll', handleScroll);
      return () => scrollEl.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="fixed right-0 top-0 h-screen w-[400px] lg:w-[420px] bg-white shadow-xl z-50 flex flex-col transition-all duration-300">
      {/* Header with close button - becomes sticky with shadow on scroll */}
      <div 
        className={`flex items-center justify-between px-4 py-3 border-b transition-shadow duration-200 ${
          isScrolled ? 'shadow-md' : 'border-transparent'
        }`}
      >
        <button
          onClick={onClose}
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close panel"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex items-center gap-1">
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="More options"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto overscroll-contain"
      >
        {children}
      </div>
    </div>
  );
};

export default DesktopSidePanel;

