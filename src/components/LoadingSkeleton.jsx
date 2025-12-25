import React from 'react';

/**
 * Loading skeleton component with shimmer effect
 * Mimics the Google Maps loading state
 */
const LoadingSkeleton = () => {
  return (
    <div className="p-4 space-y-4 animate-pulse">
      {/* Header skeleton */}
      <div className="space-y-3">
        <div className="h-7 bg-gray-200 rounded-md w-3/4 animate-shimmer"></div>
        <div className="flex items-center gap-2">
          <div className="h-4 bg-gray-200 rounded w-24 animate-shimmer"></div>
          <div className="h-4 bg-gray-200 rounded w-16 animate-shimmer"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-5/6 animate-shimmer"></div>
      </div>

      {/* Photo gallery skeleton */}
      <div className="flex gap-2 overflow-hidden">
        <div className="w-full h-48 bg-gray-200 rounded-lg animate-shimmer flex-shrink-0"></div>
      </div>
      <div className="flex gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-20 h-20 bg-gray-200 rounded-lg animate-shimmer flex-shrink-0"></div>
        ))}
      </div>

      {/* Action buttons skeleton */}
      <div className="flex gap-3 py-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 bg-gray-200 rounded-full animate-shimmer"></div>
            <div className="w-12 h-3 bg-gray-200 rounded animate-shimmer"></div>
          </div>
        ))}
      </div>

      {/* Info sections skeleton */}
      <div className="space-y-4 pt-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-200 rounded animate-shimmer"></div>
            <div className="h-4 bg-gray-200 rounded flex-1 animate-shimmer"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;

