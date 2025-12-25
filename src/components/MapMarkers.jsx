import React from 'react';
import { useLocation } from '../context/LocationContext';

/**
 * Map Markers Component
 * Renders clickable markers for each location on the map background
 */
const MapMarkers = () => {
  const { getAllLocations, selectLocation, selectedLocationId } = useLocation();
  const locations = getAllLocations();

  return (
    <div className="absolute inset-0 pointer-events-none">
      {locations.map((location) => {
        const isSelected = selectedLocationId === location.id;
        
        return (
          <button
            key={location.id}
            onClick={() => selectLocation(location.id)}
            className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-full 
                       transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 
                       focus:ring-blue-500 focus:ring-offset-2 rounded-full z-10"
            style={{
              top: location.mapPosition.top,
              left: location.mapPosition.left
            }}
            aria-label={`View ${location.name}`}
          >
            {/* Marker Pin */}
            <div className={`relative ${isSelected ? 'scale-125' : ''} transition-transform duration-200`}>
              {/* Pin shadow */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/20 rounded-full blur-sm" />
              
              {/* Pin body */}
              <div className={`relative flex flex-col items-center ${isSelected ? 'animate-bounce' : ''}`}>
                {/* Pin head */}
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white
                    ${isSelected 
                      ? 'bg-blue-600' 
                      : 'bg-red-500 hover:bg-red-600'
                    }`}
                >
                  {/* Icon based on category */}
                  {location.category === 'Hindu temple' ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 3.5L18 11v7H6v-7l6-5.5z"/>
                    </svg>
                  ) : location.category === 'Amusement park' ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  ) : location.category === 'Scenic spot' ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22l-9-12z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  )}
                </div>
                
                {/* Pin tail */}
                <div 
                  className={`w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent
                    ${isSelected ? 'border-t-blue-600' : 'border-t-red-500'}`} 
                />
              </div>
            </div>

            {/* Tooltip on hover */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 hover:opacity-100 
                          pointer-events-none transition-opacity duration-200 z-20 group-hover:opacity-100">
              <div className="bg-white px-2 py-1 rounded shadow-lg text-sm whitespace-nowrap">
                <div className="font-medium text-gray-900">{location.name}</div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <span className="text-yellow-500">★</span>
                  <span>{location.rating}</span>
                  <span>·</span>
                  <span>{location.category}</span>
                </div>
              </div>
              {/* Tooltip arrow */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 
                            border-l-4 border-r-4 border-t-4 
                            border-l-transparent border-r-transparent border-t-white" />
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default MapMarkers;

