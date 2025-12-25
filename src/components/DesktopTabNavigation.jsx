import React from 'react';

/**
 * Desktop tab navigation component - Google Maps style
 * Overview, Reviews, About tabs with underline indicator
 */
const DesktopTabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'about', label: 'About' }
  ];

  return (
    <div className="border-b border-gray-200 px-4">
      <div className="flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative py-3 text-sm font-medium transition-colors
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

export default DesktopTabNavigation;

