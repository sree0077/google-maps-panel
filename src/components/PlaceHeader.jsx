import React from 'react';

/**
 * Place header component - Google Maps style
 * Displays place name, local name, rating inline, category, and status
 */
const PlaceHeader = ({
  name,
  localName,
  rating,
  totalRatings,
  category,
  isOpen,
  is24Hours,
  statusNote,
  variant = 'mobile'
}) => {
  const renderStars = () => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-3 h-3 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  if (variant === 'mobile') {
    return (
      <div className="px-4 pt-2 pb-1">
        {/* Place name */}
        <h1 className="text-xl font-normal text-gray-900 leading-tight">
          {name}
        </h1>

        {/* Local name */}
        {localName && (
          <p className="text-sm text-gray-600 mt-0.5">{localName}</p>
        )}

        {/* Rating inline with stars */}
        <div className="flex items-center gap-1 mt-1">
          <span className="text-sm text-gray-700">{rating}</span>
          {renderStars()}
          <span className="text-sm text-gray-500">({totalRatings})</span>
        </div>

        {/* Status line */}
        <div className="flex items-center gap-1 mt-1">
          <span className={`text-sm ${isOpen ? 'text-green-600' : 'text-red-600'}`}>
            {isOpen ? 'Open' : 'Closed'}
          </span>
          {statusNote && (
            <span className="text-sm text-gray-500">· {statusNote}</span>
          )}
        </div>
      </div>
    );
  }

  // Desktop variant
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-normal text-gray-900 leading-tight">
        {name}
      </h1>
      {localName && (
        <p className="text-sm text-gray-600">{localName}</p>
      )}
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-medium text-gray-700">{rating}</span>
        {renderStars()}
        <span className="text-sm text-gray-500">({totalRatings})</span>
        {category && (
          <>
            <span className="text-gray-400 mx-1">·</span>
            <span className="text-sm text-gray-600">{category}</span>
          </>
        )}
      </div>
      <div className="flex items-center gap-1.5">
        <span className={`text-sm font-medium ${isOpen ? 'text-green-600' : 'text-red-600'}`}>
          {isOpen ? (is24Hours ? 'Open 24 hours' : 'Open') : 'Closed'}
        </span>
        {statusNote && (
          <span className="text-sm text-gray-500">· {statusNote}</span>
        )}
      </div>
    </div>
  );
};

export default PlaceHeader;

