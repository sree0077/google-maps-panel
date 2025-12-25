import React from 'react';

/**
 * Desktop photo gallery component - Google Maps style
 * Horizontal thumbnails with category labels (All, Latest, Videos)
 */
const DesktopPhotoGallery = ({ photos }) => {
  if (!photos || photos.length === 0) return null;

  const categories = [
    { id: 'all', label: 'All', photo: photos[0] },
    { id: 'latest', label: 'Latest', subLabel: '17 days ago', photo: photos[1] || photos[0] },
    { id: 'videos', label: 'Videos', photo: photos[2] || photos[0] }
  ];

  return (
    <div className="px-4 py-4">
      <h3 className="text-sm font-medium text-gray-900 mb-3">Photos & videos</h3>
      
      {/* Photo thumbnails with category labels */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category.id}
            className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 group"
          >
            <img
              src={category.photo?.url}
              alt={category.label}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            {/* Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <span className="text-xs font-medium">{category.label}</span>
              {category.subLabel && (
                <span className="text-[10px] opacity-80">{category.subLabel}</span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Add photos & videos button */}
      <button className="flex items-center gap-2 mt-3 text-sm text-blue-600 font-medium hover:bg-blue-50 px-2 py-1.5 -ml-2 rounded-lg transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add photos & videos
      </button>
    </div>
  );
};

export default DesktopPhotoGallery;

