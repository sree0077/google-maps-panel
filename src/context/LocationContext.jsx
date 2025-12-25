import React, { createContext, useContext, useState, useCallback } from 'react';
import { locationsData, defaultLocationId, locationIds } from '../data/locationsData';

/**
 * Location Context
 * Manages the currently selected location and provides methods to switch between locations
 */
const LocationContext = createContext(null);

export const LocationProvider = ({ children }) => {
  const [selectedLocationId, setSelectedLocationId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Get the current location data
  const selectedLocation = selectedLocationId ? locationsData[selectedLocationId] : null;

  // Select a location by ID with loading transition
  const selectLocation = useCallback((locationId) => {
    if (locationId && locationsData[locationId]) {
      setIsLoading(true);
      setSelectedLocationId(locationId);
      setIsPanelOpen(true);
      
      // Simulate loading delay for smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }
  }, []);

  // Close the panel
  const closePanel = useCallback(() => {
    setIsPanelOpen(false);
    // Delay clearing selection to allow close animation
    setTimeout(() => {
      setSelectedLocationId(null);
    }, 300);
  }, []);

  // Get all locations for map markers
  const getAllLocations = useCallback(() => {
    return locationIds.map(id => ({
      id,
      name: locationsData[id].name,
      category: locationsData[id].category,
      rating: locationsData[id].rating,
      mapPosition: locationsData[id].mapPosition,
      coordinates: locationsData[id].coordinates
    }));
  }, []);

  const value = {
    // State
    selectedLocationId,
    selectedLocation,
    isLoading,
    isPanelOpen,
    // Actions
    selectLocation,
    closePanel,
    getAllLocations,
    // Data
    allLocationIds: locationIds,
    locationsData
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

// Custom hook for using location context
export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};

export default LocationContext;

