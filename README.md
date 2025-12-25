# Google Maps Place Details Panel

A pixel-perfect recreation of Google Maps' place details panel, built with modern React. Features a fully responsive design with a mobile-optimized bottom sheet and a desktop side panel, complete with interactive map markers, smooth animations, and comprehensive location information.



## 🌐 Live Demo

**[View Live Demo →](https://google-maps-panel.vercel.app)**

## ✨ Key Features

###  Pixel-Perfect Google Maps UI
- Authentic Google Maps styling with Google Sans and Roboto fonts
- Accurate color schemes, spacing, and visual hierarchy
- Matching iconography and interactive elements

###  Fully Responsive Design
- **Mobile**: Draggable bottom sheet with touch gesture support
- **Desktop**: Fixed side panel with optimized layout
- Seamless transition between breakpoints

###  Interactive Map Markers
- Click markers to switch between locations
- Visual feedback with pulsing active marker
- Multiple pre-configured locations (Bali, Paris, Tokyo)

###  Smooth Animations
- Loading skeleton states
- Fade transitions between locations
- Bottom sheet drag interactions
- Hover and click feedback


## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.0 | UI library with latest features |
| **Vite** | 7.3.0 | Next-generation build tool |
| **Tailwind CSS** | 4.1.11 | Utility-first CSS framework |
| **React Context** | - | State management for locations |



##  Project Architecture

```
google-maps-panel/
├── src/
│   ├── components/           # React components
│   │   ├── index.js          # Barrel exports
│   │   │
│   │   ├── # Main Layout Components
│   │   ├── PlaceDetailsPanel.jsx    # Responsive container (mobile/desktop)
│   │   ├── MobileBottomSheet.jsx    # Draggable bottom sheet
│   │   ├── DesktopSidePanel.jsx     # Fixed side panel
│   │   │
│   │   ├── # Mobile Components
│   │   ├── MobilePlaceContent.jsx   # Mobile content layout
│   │   ├── PlaceHeader.jsx          # Location title & rating
│   │   ├── PhotoGallery.jsx         # Photo carousel
│   │   ├── ActionButtons.jsx        # Quick actions (Directions, Save, etc.)
│   │   ├── TabNavigation.jsx        # Overview/Reviews tabs
│   │   ├── ReviewSummary.jsx        # Rating breakdown
│   │   ├── ReviewsList.jsx          # User reviews list
│   │   ├── PopularTimes.jsx         # Busy hours chart
│   │   ├── BottomActionBar.jsx      # Fixed bottom actions
│   │   │
│   │   ├── # Desktop Components
│   │   ├── DesktopPlaceContent.jsx  # Desktop content layout
│   │   ├── DesktopTabNavigation.jsx # Desktop tab styling
│   │   ├── DesktopActionButtons.jsx # Desktop action layout
│   │   ├── DesktopPhotoGallery.jsx  # Grid photo layout
│   │   ├── DesktopReviewSummary.jsx # Side-by-side rating
│   │   ├── DesktopReviewsList.jsx   # Expanded reviews
│   │   │
│   │   ├── # Shared Components
│   │   ├── MapMarkers.jsx           # Interactive map markers
│   │   └── LoadingSkeleton.jsx      # Loading states
│   │
│   ├── context/
│   │   └── LocationContext.jsx      # Global location state
│   │
│   ├── data/
│   │   └── locationsData.js         # Multi-location data
│   │
│   ├── hooks/
│   │   ├── useBottomSheet.js        # Drag gesture handling
│   │   └── useMediaQuery.js         # Responsive breakpoints
│   │
│   ├── App.jsx                      # Root component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles + Tailwind
│
├── index.html                       # HTML template
├── vite.config.js                   # Vite configuration
├── eslint.config.js                 # ESLint rules
└── package.json                     # Dependencies
```

##  Data Flow & State Management

```
┌─────────────────────────────────────────────────────────┐
│                    LocationContext                       │
│  ┌─────────────────────────────────────────────────┐    │
│  │  • locations (array of all locations)            │    │
│  │  • selectedLocation (current location object)    │    │
│  │  • isLoading (loading state boolean)             │    │
│  │  • selectLocation(id) (switch locations)         │    │
│  └─────────────────────────────────────────────────┘    │
└────────────────────┬────────────────────────────────────┘
                     │
        ┌────────────┼────────────────┐
        ▼            ▼                ▼
   ┌─────────┐  ┌─────────────┐  ┌──────────────┐
   │   App   │  │ MapMarkers  │  │ PlaceDetails │
   │         │  │             │  │    Panel     │
   └─────────┘  └─────────────┘  └──────────────┘
```

### Context Usage

```jsx
// Consuming location data in any component
const { selectedLocation, selectLocation, isLoading } = useLocation();

// Switching locations triggers loading state
const handleMarkerClick = (locationId) => {
  selectLocation(locationId);  // Sets isLoading, updates after 300ms
};
```


##  Responsive Design Strategy

### Mobile-First Approach

The application follows a mobile-first design pattern, with the base styles optimized for mobile devices and progressive enhancements for larger screens.

```jsx
// PlaceDetailsPanel.jsx - Responsive rendering
const isDesktop = useMediaQuery('(min-width: 768px)');

return isDesktop ? (
  <DesktopSidePanel location={selectedLocation} />
) : (
  <MobileBottomSheet location={selectedLocation} />
);
```

### Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 768px | Bottom sheet with drag gestures |
| Desktop | ≥ 768px | Fixed side panel (420px width) |
| Large Desktop | ≥ 1024px | Wider panel (450px width) |

### Component Variants

Each major component has mobile and desktop variants:

- `PhotoGallery` → `DesktopPhotoGallery` (horizontal scroll → grid)
- `ActionButtons` → `DesktopActionButtons` (full-width → compact)
- `ReviewSummary` → `DesktopReviewSummary` (stacked → side-by-side)
- `TabNavigation` → `DesktopTabNavigation` (full-width → inline)

##  Getting Started

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** 9.0 or higher (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/sree0077/google-maps-panel.git

# Navigate to project directory
cd google-maps-panel

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:5173` |
| `npm run build` | Build for production to `dist/` folder |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

##  Location Data Structure

Each location object contains comprehensive data matching Google Maps:

```javascript
{
  id: "unique-id",
  name: "Location Name",
  type: "Business Type",
  rating: 4.8,
  reviewCount: 15234,
  priceLevel: "$$",

  // Status
  isOpen: true,
  closingTime: "10:00 PM",

  // Contact
  address: "Full Address",
  phone: "+1 234 567 8900",
  website: "https://example.com",

  // Media
  photos: ["url1", "url2", ...],

  // Reviews
  reviews: [{
    author: "Name",
    rating: 5,
    timeAgo: "2 weeks ago",
    text: "Review content...",
    authorImage: "url",
    photos: ["url1", ...]
  }],

  // Analytics
  popularTimes: {
    Sunday: [0, 10, 20, ...],  // 24 hourly values
    Monday: [...],
    // ...
  },

  // Hours
  hours: [
    { day: "Sunday", hours: "9:00 AM – 10:00 PM" },
    // ...
  ],

  // Map position
  position: { top: "30%", left: "40%" }
}
```


## 🔧 Development Process

### Phase 1: Project Setup
- Initialized Vite with React 19 template
- Configured Tailwind CSS 4 with CSS-first approach
- Set up ESLint for code quality
- Added Google Fonts (Google Sans, Roboto)

### Phase 2: Core Components
- Built mobile-first components matching Google Maps UI
- Implemented bottom sheet with drag gestures
- Created photo gallery with horizontal scroll
- Added tab navigation and content sections

### Phase 3: Desktop Adaptation
- Created desktop-specific component variants
- Implemented fixed side panel layout
- Optimized layouts for larger screens
- Added responsive breakpoint detection

### Phase 4: Multi-Location Support
- Designed location data structure
- Implemented React Context for state management
- Added interactive map markers
- Created loading states and transitions

### Phase 5: Polish & Optimization
- Added loading skeletons for perceived performance
- Implemented smooth fade transitions
- Cleaned up unused code and files
- Optimized for production build

##  Design Decisions

### Why React Context over Redux/Zustand?

For this application's scope, React Context provides:
- **Simplicity**: No additional dependencies
- **Sufficient Scale**: Only 3-5 locations, minimal state
- **Quick Updates**: Simple location switching logic
- **Easy Testing**: Context is straightforward to mock

### Why Separate Mobile/Desktop Components?

Rather than conditional classes, separate components offer:
- **Cleaner Code**: No complex conditional logic
- **Better Performance**: Only loads needed components
- **Easier Maintenance**: Clear separation of concerns
- **Optimal UX**: Each platform gets tailored experience

### Why CSS-First Tailwind 4?

Tailwind CSS 4's new approach:
- **Faster Builds**: Native CSS cascade layers
- **Smaller Bundle**: Automatic unused class removal
- **Modern Features**: Uses CSS variables natively
- **Future-Proof**: Aligned with CSS evolution

##  Code Quality

### ESLint Configuration

The project uses a modern ESLint flat config:

```javascript
// eslint.config.js
export default [
  js.configs.recommended,
  ...react.configs.flat.recommended,
  ...react.configs.flat['jsx-runtime'],
  ...reactHooks.configs['recommended-latest'],
  ...reactRefresh.configs.vite,
];
```

### Component Best Practices

- ✅ Single responsibility principle
- ✅ Props destructuring at function signature
- ✅ Consistent naming conventions
- ✅ Barrel exports for clean imports
- ✅ Custom hooks for reusable logic

##  Performance Optimizations

1. **Lazy Loading**: Components render only when needed
2. **Skeleton States**: Perceived performance during loads
3. **Image Optimization**: External CDN images
4. **Minimal Re-renders**: Context updates are scoped
5. **CSS-in-JS Free**: Tailwind compiles to static CSS



---

<p align="center">
  Made with ❤️ using React, Vite, and Tailwind CSS
</p>
