import { PlaceDetailsPanel } from './components';
import { LocationProvider, useLocation } from './context/LocationContext';
import MapMarkers from './components/MapMarkers';

function MapContent() {
  const { isPanelOpen, closePanel } = useLocation();

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Map Placeholder - simulates the Google Maps background */}
      <div className="fixed inset-0 bg-gradient-to-br from-green-100 via-green-50 to-blue-100">
        {/* Fake map tiles pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(156, 163, 175, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(156, 163, 175, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Map area with markers - simulated terrain */}
        <div className="absolute inset-0">
          {/* Simulated terrain features */}
          <div className="absolute top-[20%] left-[40%] w-32 h-32 bg-green-200/50 rounded-full blur-xl" />
          <div className="absolute top-[50%] left-[60%] w-48 h-24 bg-blue-200/40 rounded-full blur-lg" />
          <div className="absolute top-[65%] left-[30%] w-40 h-40 bg-green-300/30 rounded-full blur-xl" />

          {/* Road lines */}
          <div className="absolute top-0 left-[45%] w-1 h-full bg-gray-300/50" />
          <div className="absolute top-[40%] left-0 w-full h-0.5 bg-gray-300/50" />

          {/* Interactive Map Markers */}
          <MapMarkers />
        </div>

        {/* Instruction overlay - shows when no location is selected */}
        {!isPanelOpen && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white/90 backdrop-blur-sm px-8 py-6 rounded-xl shadow-lg text-center max-w-sm mx-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Explore the Map</h3>
              <p className="text-gray-600 text-sm">
                Click on any marker to view location details
              </p>
            </div>
          </div>
        )}

        {/* Zoom controls - desktop only */}
        <div className="hidden md:flex absolute right-[440px] lg:right-[460px] bottom-24 flex-col gap-1 z-20">
          <button className="w-10 h-10 bg-white rounded-sm shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          <button className="w-10 h-10 bg-white rounded-sm shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
        </div>

        {/* Google branding simulation */}
        <div className="absolute bottom-4 left-4 text-xs text-gray-500 z-10">
          Map data ©2024
        </div>
      </div>

      {/* Place Details Panel */}
      {isPanelOpen && (
        <PlaceDetailsPanel onClose={closePanel} />
      )}
    </div>
  );
}

function App() {
  return (
    <LocationProvider>
      <MapContent />
    </LocationProvider>
  );
}

export default App;
