import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import DesktopSidePanel from './DesktopSidePanel';
import MobileBottomSheet from './MobileBottomSheet';
import LoadingSkeleton from './LoadingSkeleton';
import MobilePlaceContent from './MobilePlaceContent';
import DesktopPlaceContent from './DesktopPlaceContent';
import { useLocation } from '../context/LocationContext';

/**
 * Main Place Details Panel Component
 * Orchestrates desktop/mobile rendering with responsive behavior
 * Uses LocationContext for dynamic location data
 */
const PlaceDetailsPanel = ({ onClose }) => {
  const { isMobile } = useMediaQuery();
  const { selectedLocation, isLoading } = useLocation();

  // Render loading state
  if (isLoading || !selectedLocation) {
    if (isMobile) {
      return (
        <MobileBottomSheet onClose={onClose}>
          <LoadingSkeleton />
        </MobileBottomSheet>
      );
    }
    return (
      <DesktopSidePanel onClose={onClose}>
        <LoadingSkeleton />
      </DesktopSidePanel>
    );
  }

  // Render based on screen size with selected location data
  if (isMobile) {
    return (
      <MobileBottomSheet onClose={onClose}>
        <MobilePlaceContent data={selectedLocation} onClose={onClose} />
      </MobileBottomSheet>
    );
  }

  return (
    <DesktopSidePanel onClose={onClose}>
      <DesktopPlaceContent data={selectedLocation} onClose={onClose} />
    </DesktopSidePanel>
  );
};

export default PlaceDetailsPanel;

