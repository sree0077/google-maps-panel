import React, { useState } from 'react';

/**
 * Photo gallery component
 * Mobile: Horizontal scrollable grid
 * Desktop: Hero image with thumbnail strip
 */
const PhotoGallery = ({ photos, variant = 'mobile' }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});

  if (!photos || photos.length === 0) return null;

  // Mobile variant - horizontal scrollable grid
  if (variant === 'mobile') {
    return (
      <div className="px-4">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide -mx-4 px-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="relative w-28 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100"
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
          {/* See all photos button */}
          <button className="relative w-28 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-800/80 flex items-center justify-center">
            <span className="text-white text-sm font-medium">See all</span>
          </button>
        </div>
      </div>
    );
  }

  // Desktop variant - hero image with thumbnails
  const mainPhoto = photos[selectedIndex];

  return (
    <div className="space-y-2">
      {/* Hero Image */}
      <div className="relative w-full h-48 md:h-56 rounded-lg overflow-hidden bg-gray-100">
        <img
          src={mainPhoto.url}
          alt={mainPhoto.alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded[selectedIndex] ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(prev => ({ ...prev, [selectedIndex]: true }))}
        />
        {!imageLoaded[selectedIndex] && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}

        {/* Photo count badge */}
        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {photos.length}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => setSelectedIndex(index)}
            className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden flex-shrink-0
              transition-all duration-200
              ${selectedIndex === index
                ? 'ring-2 ring-blue-500 ring-offset-1'
                : 'hover:opacity-80'
              }`}
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;

