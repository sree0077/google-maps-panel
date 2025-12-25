import React, { useState } from 'react';

/**
 * Popular times chart component - Google Maps style
 * Shows hourly busyness with day selector
 */
const PopularTimes = ({ popularTimes }) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date().getDay();
  const [selectedDay, setSelectedDay] = useState(days[today]);

  if (!popularTimes) return null;

  const dayData = popularTimes[selectedDay] || popularTimes[Object.keys(popularTimes)[0]] || [];
  const maxValue = Math.max(...dayData, 1);
  const currentHour = new Date().getHours();

  // Show hours from 6am to 9pm (indices 6-21)
  const displayHours = [6, 9, 12, 15, 18, 21];

  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="text-sm font-medium text-gray-900">Popular times</span>
        </div>
        
        {/* Day selector dropdown */}
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
          className="text-sm text-blue-600 bg-transparent border-none cursor-pointer focus:outline-none"
        >
          {days.map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
      </div>

      {/* Bar chart */}
      <div className="h-24 flex items-end gap-0.5 mb-2">
        {dayData.slice(6, 22).map((value, index) => {
          const hour = index + 6;
          const isCurrentHour = hour === currentHour && selectedDay === days[today];
          const heightPercent = (value / maxValue) * 100;
          
          return (
            <div
              key={hour}
              className="flex-1 flex flex-col items-center justify-end"
            >
              <div
                className={`w-full rounded-t transition-all duration-300 ${
                  isCurrentHour ? 'bg-pink-500' : 'bg-gray-300'
                }`}
                style={{ height: `${Math.max(heightPercent, 4)}%` }}
              />
            </div>
          );
        })}
      </div>

      {/* Time labels */}
      <div className="flex justify-between text-xs text-gray-500 px-1">
        {displayHours.map((hour) => (
          <span key={hour}>
            {hour === 12 ? '12p' : hour > 12 ? `${hour - 12}p` : `${hour}a`}
          </span>
        ))}
      </div>

      {/* Current time indicator */}
      {selectedDay === days[today] && (
        <div className="mt-3 text-center">
          <span className="text-sm text-gray-600">
            {currentHour >= 12 ? `${currentHour - 12 || 12} pm` : `${currentHour} am`}
          </span>
          <p className="text-sm text-gray-500">Usually not too busy</p>
        </div>
      )}
    </div>
  );
};

export default PopularTimes;

