import React from 'react';

/**
 * Desktop action buttons - Google Maps style
 * Circular icon buttons with labels underneath
 */
const DesktopActionButtons = () => {
  const actions = [
    {
      id: 'directions',
      label: 'Directions',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.71 11.29l-9-9a.996.996 0 00-1.41 0l-9 9a.996.996 0 000 1.41l9 9c.39.39 1.02.39 1.41 0l9-9a.996.996 0 000-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"/>
        </svg>
      ),
      primary: true
    },
    {
      id: 'save',
      label: 'Save',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      )
    },
    {
      id: 'nearby',
      label: 'Nearby',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 'send',
      label: 'Send to phone',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'share',
      label: 'Share',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="flex justify-start gap-4 px-4 py-4">
      {actions.map((action) => (
        <button
          key={action.id}
          className="flex flex-col items-center gap-1.5 group"
          aria-label={action.label}
        >
          <div 
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200
              ${action.primary 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'border border-gray-300 text-gray-600 hover:bg-gray-50 group-hover:border-gray-400'
              }`}
          >
            {action.icon}
          </div>
          <span className={`text-xs ${action.primary ? 'text-blue-600' : 'text-gray-600'}`}>
            {action.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default DesktopActionButtons;

