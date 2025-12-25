import React from 'react';

/**
 * Action buttons row - Google Maps mobile style
 * Pill-shaped buttons with Directions as primary
 */
const ActionButtons = ({ variant = 'mobile' }) => {
  const actions = [
    {
      id: 'directions',
      label: 'Directions',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.43 10.59l-9.01-9.01c-.75-.75-2.07-.76-2.83 0l-9 9c-.78.78-.78 2.04 0 2.82l9 9c.39.39.9.58 1.41.58.51 0 1.02-.19 1.41-.58l9.01-9.01c.78-.78.78-2.04 0-2.82zM12.01 20L4 12l8.01-8L20 12l-7.99 8zM8 11v2h4v3l4-4-4-4v3H8z"/>
        </svg>
      ),
      primary: true
    },
    {
      id: 'start',
      label: 'Start',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      )
    },
    {
      id: 'save',
      label: 'Save',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      )
    },
    {
      id: 'share',
      label: 'Share',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
        </svg>
      )
    }
  ];

  // Mobile variant - pill shaped buttons
  if (variant === 'mobile') {
    return (
      <div className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide">
        {actions.map((action) => (
          <button
            key={action.id}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap
              transition-all duration-200 active:scale-95 flex-shrink-0
              ${action.primary
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            aria-label={action.label}
          >
            {action.icon}
            <span className="text-sm font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    );
  }

  // Desktop variant - vertical icons
  return (
    <div className="flex justify-around py-3 border-y border-gray-200">
      {actions.map((action) => (
        <button
          key={action.id}
          className={`flex flex-col items-center gap-1.5 px-4 py-2 rounded-lg
            transition-all duration-200 hover:bg-gray-100 active:scale-95
            ${action.primary ? 'text-blue-600' : 'text-gray-700'}`}
          aria-label={action.label}
        >
          <div className={`p-2.5 rounded-full ${action.primary ? 'bg-blue-600 text-white' : 'border border-gray-300'}`}>
            {action.icon}
          </div>
          <span className="text-xs font-medium">{action.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;

