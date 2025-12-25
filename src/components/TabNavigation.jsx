import React from 'react';

/**
 * Tab navigation component - Google Maps style
 * Horizontal scrollable tabs with underline indicator
 */
const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'photos', label: 'Photos' },
    { id: 'updates', label: 'Updates' },
    { id: 'about', label: 'About' }
  ];

  return (
    <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="flex overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors
              ${activeTab === tab.id 
                ? 'text-blue-600' 
                : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            {tab.label}
            {/* Active indicator */}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;

