import React from 'react';

/**
 * Desktop review summary component - Google Maps style
 * Rating bars on left, large rating number on right
 */
const DesktopReviewSummary = ({ reviewSummary }) => {
  if (!reviewSummary) return null;

  const { average, total, distribution } = reviewSummary;
  const maxCount = Math.max(...Object.values(distribution));

  const renderStars = (rating) => (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="px-4 py-4 border-t border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-sm font-medium text-gray-900">Review summary</h3>
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      <div className="flex gap-6">
        {/* Distribution bars */}
        <div className="flex-1 space-y-1">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-2">
              <span className="text-xs text-gray-500 w-2">{rating}</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                  style={{ width: `${maxCount > 0 ? (distribution[rating] / maxCount) * 100 : 0}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Large rating display */}
        <div className="text-center">
          <div className="text-4xl font-normal text-gray-900">{average}</div>
          {renderStars(average)}
          <button className="text-sm text-blue-600 hover:underline mt-1">
            {total} reviews
          </button>
        </div>
      </div>

      {/* Write a review button */}
      <button className="flex items-center justify-center gap-2 w-full mt-4 py-2.5 border border-blue-600 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
        Write a review
      </button>
    </div>
  );
};

export default DesktopReviewSummary;

