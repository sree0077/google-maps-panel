import React, { useState } from 'react';
import TabNavigation from './TabNavigation';
import PlaceHeader from './PlaceHeader';
import ActionButtons from './ActionButtons';
import PhotoGallery from './PhotoGallery';
import PopularTimes from './PopularTimes';
import ReviewSummary from './ReviewSummary';
import ReviewsList from './ReviewsList';

/**
 * Mobile place content component
 * Organizes all content sections for mobile view
 */
const MobilePlaceContent = ({ data, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [hoursExpanded, setHoursExpanded] = useState(false);

  // Render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'reviews':
        return (
          <>
            <ReviewSummary reviewSummary={data.reviewSummary} />
            <ReviewsList reviews={data.reviews} />
            <div className="h-20" />
          </>
        );
      case 'photos':
        return (
          <div className="p-4">
            <div className="grid grid-cols-2 gap-2">
              {data.photos.map((photo) => (
                <div key={photo.id} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img src={photo.url} alt={photo.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="h-20" />
          </div>
        );
      case 'updates':
        return (
          <div className="p-4 text-center text-gray-500">
            <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <p className="text-sm">No updates yet</p>
            <div className="h-20" />
          </div>
        );
      case 'about':
        return (
          <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-3">About this place</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p><strong>Category:</strong> {data.category}</p>
              <p><strong>Address:</strong> {data.address}</p>
              {data.plusCode && <p><strong>Plus Code:</strong> {data.plusCode}</p>}
            </div>
            <div className="h-20" />
          </div>
        );
      case 'overview':
      default:
        return renderOverviewContent();
    }
  };

  const renderOverviewContent = () => (
    <>
      {/* Hours info card - expandable */}
      <div className="px-4 py-3 border-b border-gray-100">
        <button
          className="w-full flex items-start gap-3 text-left"
          onClick={() => setHoursExpanded(!hoursExpanded)}
        >
          <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="flex-1">
            <p className="text-sm text-green-600 font-medium">
              {data.is24Hours ? 'Open 24 hours' : data.isOpen ? 'Open now' : 'Closed'}
            </p>
            {data.statusNote && (
              <p className="text-sm text-red-600">{data.statusNote}</p>
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
          <div className="mt-3 ml-8 space-y-2">
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

      {/* Address info card */}
      <div className="px-4 py-3 border-b border-gray-100">
        <button className="w-full flex items-start gap-3 text-left">
          <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div className="flex-1">
            <p className="text-sm text-gray-700">{data.address}</p>
          </div>
          <div className="p-1 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
        </button>
      </div>

      {/* Suggest an edit */}
      <div className="px-4 py-3 border-b border-gray-100">
        <button className="flex items-center gap-2 text-sm text-blue-600 font-medium">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          Suggest an edit
        </button>
      </div>

      {/* Popular Times */}
      <div className="border-b border-gray-100">
        <PopularTimes popularTimes={data.popularTimes} />
      </div>

      {/* Review Summary */}
      <div className="border-b border-gray-100">
        <ReviewSummary reviewSummary={data.reviewSummary} />
      </div>

      {/* Reviews List */}
      <ReviewsList reviews={data.reviews} />

      {/* Your visits and Maps activity */}
      <div className="px-4 py-3 border-t border-gray-100">
        <button className="w-full flex items-center gap-3 text-left py-2">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="flex-1 text-sm text-gray-700">Your visits and Maps activity</span>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* About data sources */}
      <div className="px-4 py-3 border-t border-gray-100">
        <button className="w-full flex items-center gap-3 text-left py-2">
          <span className="text-sm text-gray-500">About data sources</span>
          <svg className="w-4 h-4 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Bottom padding for action bar */}
      <div className="h-20" />
    </>
  );

  return (
    <div className="bg-white">
      {/* Header with action buttons */}
      <div className="relative">
        {/* Header action buttons */}
        <div className="absolute top-2 right-2 flex items-center gap-1 z-10">
          <button
            className="p-2 rounded-full bg-white/90 shadow-sm hover:bg-gray-100 transition-colors"
            aria-label="Save"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
          <button
            className="p-2 rounded-full bg-white/90 shadow-sm hover:bg-gray-100 transition-colors"
            aria-label="Share"
          >
            <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
            </svg>
          </button>
          <button
            className="p-2 rounded-full bg-white/90 shadow-sm hover:bg-gray-100 transition-colors"
            aria-label="Close"
            onClick={onClose}
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Place Header */}
        <PlaceHeader
          name={data.name}
          localName={data.localName}
          rating={data.rating}
          totalRatings={data.totalRatings}
          category={data.category}
          isOpen={data.isOpen}
          is24Hours={data.is24Hours}
          statusNote={data.statusNote}
          variant="mobile"
        />
      </div>

      {/* Action Buttons - pill style */}
      <ActionButtons variant="mobile" />

      {/* Photo Gallery - horizontal scroll */}
      <PhotoGallery photos={data.photos} variant="mobile" />

      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default MobilePlaceContent;

