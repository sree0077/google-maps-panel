import React from 'react';
import useBottomSheet from '../hooks/useBottomSheet';
import BottomActionBar from './BottomActionBar';

/**
 * Mobile bottom sheet component
 * Handles peek, half, and full states with touch gestures
 */
const MobileBottomSheet = ({ children, onClose }) => {
  const {
    sheetState,
    toggle,
    handlers,
    expand,
    collapse
  } = useBottomSheet('half');

  const heightClasses = {
    peek: 'h-[40vh]',
    half: 'h-[60vh]',
    full: 'h-[95vh]'
  };

  return (
    <>
      {/* Backdrop - only visible when fully expanded */}
      {sheetState === 'full' && (
        <div
          className="fixed inset-0 bg-black/20 z-40 transition-opacity duration-300"
          onClick={collapse}
        />
      )}

      {/* Bottom sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50
          flex flex-col transition-all duration-300 ease-out
          ${heightClasses[sheetState]}`}
        {...handlers}
      >
        {/* Drag handle area */}
        <div
          className="flex justify-center py-3 cursor-grab active:cursor-grabbing shrink-0"
          onClick={toggle}
        >
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Scrollable content */}
        <div
          className={`flex-1 overflow-y-auto overscroll-contain
            ${sheetState === 'peek' ? 'overflow-hidden' : ''}`}
        >
          {React.isValidElement(children)
            ? React.cloneElement(children, { onClose })
            : children
          }
        </div>
      </div>

      {/* Fixed bottom action bar */}
      <BottomActionBar />
    </>
  );
};

export default MobileBottomSheet;

