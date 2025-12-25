import React from 'react';

/**
 * Reviews list component - Google Maps style
 * Shows individual review cards
 */
const ReviewsList = ({ reviews }) => {
  if (!reviews || reviews.length === 0) return null;

  const renderStars = (rating) => {
    return (
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
  };

  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-medium text-gray-900">Reviews</h3>
        <button className="text-sm text-blue-600 font-medium hover:underline">
          Add review
        </button>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="pb-4 border-b border-gray-100 last:border-0">
            {/* Author info */}
            <div className="flex items-start gap-3 mb-2">
              <img
                src={review.authorPhoto}
                alt={review.author}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900 text-sm">{review.author}</span>
                  {review.isLocalGuide && (
                    <span className="text-xs text-gray-500">Local Guide · {review.reviewCount} reviews</span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  {renderStars(review.rating)}
                  <span className="text-xs text-gray-500">{review.timeAgo}</span>
                </div>
              </div>
              {/* More options */}
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>

            {/* Review text */}
            <p className="text-sm text-gray-700 mb-3">{review.text}</p>

            {/* React button */}
            <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Press and hold to react
            </button>
          </div>
        ))}
      </div>

      {/* See all reviews button */}
      <button className="w-full mt-4 py-3 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center gap-1">
        See all reviews
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ReviewsList;

