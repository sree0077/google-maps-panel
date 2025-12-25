import React, { useState } from 'react';

/**
 * Desktop reviews list component - Google Maps style
 * Filter tabs, search, sort, and review cards
 */
const DesktopReviewsList = ({ reviews }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedReviews, setExpandedReviews] = useState({});

  if (!reviews || reviews.length === 0) return null;

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'snacks', label: 'snacks', count: 2 },
    { id: 'driving', label: 'driving', count: 2 }
  ];

  const toggleExpand = (reviewId) => {
    setExpandedReviews(prev => ({ ...prev, [reviewId]: !prev[reviewId] }));
  };

  const renderStars = (rating) => (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3 h-3 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
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
      <h3 className="text-sm font-medium text-gray-900 mb-3">Reviews</h3>

      {/* Filter tabs */}
      <div className="flex items-center gap-2 mb-3 overflow-x-auto scrollbar-hide">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors
              ${activeFilter === filter.id 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            {filter.id === 'all' && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
            {filter.label}
            {filter.count && <span className="text-xs">{filter.count}</span>}
          </button>
        ))}
      </div>

      {/* Search and Sort */}
      <div className="flex items-center gap-4 mb-4">
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
          </svg>
          Sort
        </button>
      </div>

      {/* Review cards */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="pb-4 border-b border-gray-100 last:border-0">
            {/* Author info */}
            <div className="flex items-start gap-3 mb-2">
              <img
                src={review.authorPhoto}
                alt={review.author}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900 text-sm">{review.author}</div>
                {review.isLocalGuide && (
                  <div className="text-xs text-gray-500">
                    Local Guide · {review.reviewCount} reviews · 210 photos
                  </div>
                )}
              </div>
            </div>

            {/* Rating and time */}
            <div className="flex items-center gap-2 mb-2">
              {renderStars(review.rating)}
              <span className="text-xs text-gray-500">{review.timeAgo}</span>
            </div>

            {/* Review text */}
            <p className={`text-sm text-gray-700 ${!expandedReviews[review.id] ? 'line-clamp-3' : ''}`}>
              {review.text}
            </p>
            {review.text.length > 150 && (
              <button 
                onClick={() => toggleExpand(review.id)}
                className="text-sm text-blue-600 hover:underline mt-1"
              >
                {expandedReviews[review.id] ? 'Less' : 'More'}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopReviewsList;

