import React, { useState } from 'react';
import DesktopTabNavigation from './DesktopTabNavigation';
import DesktopActionButtons from './DesktopActionButtons';
import DesktopPhotoGallery from './DesktopPhotoGallery';
import DesktopReviewSummary from './DesktopReviewSummary';
import DesktopReviewsList from './DesktopReviewsList';

/**
 * Desktop place content component
 * Organizes all content sections for desktop side panel
 */
const DesktopPlaceContent = ({ data, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [hoursExpanded, setHoursExpanded] = useState(false);

  // Render stars
  const renderStars = (rating) => (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  const renderOverviewTab = () => (
    <>
      {/* Action Buttons */}
      <DesktopActionButtons />

      {/* Address */}
      <div className="px-4 py-3 flex items-start gap-3">
        <svg className="w-5 h-5 text-gray-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="text-sm text-gray-700">{data.address}</span>
      </div>

      {/* Hours/Timings Section - Expandable */}
      <div className="px-4 py-2">
        <button
          className="w-full flex items-start gap-3 text-left hover:bg-gray-50 rounded-lg px-1 py-1 -mx-1 transition-colors"
          onClick={() => setHoursExpanded(!hoursExpanded)}
        >
          <svg className="w-5 h-5 text-gray-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="flex-1">
            <span className={`text-sm font-medium ${data.isOpen ? 'text-green-600' : 'text-red-600'}`}>
              {data.is24Hours ? 'Open 24 hours' : data.isOpen ? 'Open now' : 'Closed'}
            </span>
            {data.statusNote && (
              <span className="text-sm text-gray-500 ml-1">· {data.statusNote}</span>
            )}
          </div>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${hoursExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Expanded hours list */}
        {hoursExpanded && data.hours && (
          <div className="mt-2 ml-8 space-y-1.5 pb-2">
            {data.hours.map((day, index) => (
              <div
                key={index}
                className={`flex justify-between text-sm ${day.isToday ? 'font-medium text-gray-900' : 'text-gray-600'}`}
              >
                <span>{day.day}</span>
                <span>{day.hours}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Claim this business */}
      <div className="px-4 py-2 flex items-center gap-3 hover:bg-gray-50 cursor-pointer transition-colors">
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <span className="text-sm text-gray-700">Claim this business</span>
      </div>

      {/* Your Maps activity */}
      <div className="px-4 py-2 flex items-center gap-3 hover:bg-gray-50 cursor-pointer transition-colors">
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
        </svg>
        <span className="text-sm text-gray-700">Your Maps activity</span>
      </div>

      {/* Add a label */}
      <div className="px-4 py-2 flex items-center gap-3 hover:bg-gray-50 cursor-pointer transition-colors">
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
        <span className="text-sm text-gray-700">Add a label</span>
      </div>

      {/* Suggest an edit button */}
      <div className="px-4 py-3">
        <button className="flex items-center gap-2 text-sm text-blue-600 font-medium hover:bg-blue-50 px-3 py-2 rounded-full transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          Suggest an edit
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-2" />

      {/* Add missing information */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-medium text-gray-900">Add missing information</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        {data.missingInfo?.map((item, index) => (
          <button key={index} className="w-full flex items-center gap-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="text-sm text-gray-600">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-2" />

      {/* Review Summary in Overview */}
      <DesktopReviewSummary reviewSummary={data.reviewSummary} />

      {/* Reviews Preview in Overview */}
      <div className="px-4 py-4 border-t border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-900">Reviews</h3>
          <button
            onClick={() => setActiveTab('reviews')}
            className="text-sm text-blue-600 font-medium hover:underline"
          >
            See all reviews
          </button>
        </div>

        {/* Preview of first 2 reviews */}
        <div className="space-y-4">
          {data.reviews?.slice(0, 2).map((review) => (
            <div key={review.id} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
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
                      Local Guide · {review.reviewCount} reviews
                    </div>
                  )}
                </div>
              </div>

              {/* Rating and time */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-3 h-3 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500">{review.timeAgo}</span>
              </div>

              {/* Review text - truncated */}
              <p className="text-sm text-gray-700 line-clamp-2">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderReviewsTab = () => (
    <>
      <DesktopPhotoGallery photos={data.photos} />
      <DesktopReviewSummary reviewSummary={data.reviewSummary} />
      <DesktopReviewsList reviews={data.reviews} />
    </>
  );

  const renderAboutTab = () => (
    <div className="p-4">
      <h3 className="font-medium text-gray-900 mb-4">About this place</h3>
      <div className="space-y-3 text-sm text-gray-600">
        <p><strong>Category:</strong> {data.category}</p>
        <p><strong>Address:</strong> {data.address}</p>
        {data.plusCode && <p><strong>Plus Code:</strong> {data.plusCode}</p>}
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Hero Image */}
      <div className="relative w-full h-32 bg-gray-200">
        {data.photos?.[0] && (
          <img src={data.photos[0].url} alt={data.photos[0].alt} className="w-full h-full object-cover" />
        )}
      </div>

      {/* Place Header */}
      <div className="px-4 py-3">
        <h1 className="text-xl font-normal text-gray-900">{data.name}</h1>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-sm text-gray-700">{data.rating}</span>
          {renderStars(data.rating)}
          <span className="text-sm text-gray-500">({data.totalRatings})</span>
        </div>
        <p className="text-sm text-gray-600 mt-0.5">{data.category}</p>
      </div>

      {/* Tab Navigation */}
      <DesktopTabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab Content */}
      {activeTab === 'overview' && renderOverviewTab()}
      {activeTab === 'reviews' && renderReviewsTab()}
      {activeTab === 'about' && renderAboutTab()}
    </div>
  );
};

export default DesktopPlaceContent;

