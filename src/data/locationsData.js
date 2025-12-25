// Multiple locations data for Google Maps panel
export const locationsData = {
  // Kaayakkunn Dam - existing location
  'place_kaayakkunn_dam': {
    id: 'place_kaayakkunn_dam',
    name: 'Kaayakkunn Dam',
    localName: 'കായക്കുന്ന് ഡാം',
    rating: 4.4,
    totalRatings: 21,
    category: 'Tourist attraction',
    isOpen: true,
    is24Hours: true,
    statusNote: 'Holiday hours may vary',
    address: 'C3VP+MPV, South Rd, Bangadi, Panayil, Kerala 671318',
    plusCode: 'C3VP+MPV',
    coordinates: { lat: 12.4567, lng: 75.1234 },
    mapPosition: { top: '45%', left: '35%' }, // Position on map background
    phone: null,
    website: null,
    photos: [
      { id: 1, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', alt: 'Dam view 1' },
      { id: 2, url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop', alt: 'Nature view' },
      { id: 3, url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop', alt: 'Forest view' },
      { id: 4, url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=300&fit=crop', alt: 'Water view' },
      { id: 5, url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop', alt: 'Scenic view' }
    ],
    hours: [
      { day: 'Sunday', hours: 'Open 24 hours', isToday: false },
      { day: 'Monday', hours: 'Open 24 hours', isToday: false },
      { day: 'Tuesday', hours: 'Open 24 hours', isToday: false },
      { day: 'Wednesday', hours: 'Open 24 hours', isToday: true },
      { day: 'Thursday', hours: 'Open 24 hours', isToday: false },
      { day: 'Friday', hours: 'Open 24 hours', isToday: false },
      { day: 'Saturday', hours: 'Open 24 hours', isToday: false }
    ],
    popularTimes: { Thursday: [0, 0, 0, 0, 0, 0, 10, 20, 35, 45, 55, 60, 50, 40, 35, 45, 55, 50, 35, 20, 10, 5, 0, 0] },
    reviewSummary: { average: 4.4, total: 21, distribution: { 5: 14, 4: 4, 3: 2, 2: 1, 1: 0 } },
    reviews: [
      { id: 1, author: 'MOOSA MUHAMMAD SHEHZAD A S', authorPhoto: 'https://i.pravatar.cc/100?img=1', isLocalGuide: true, reviewCount: 51, rating: 5, timeAgo: '2 months ago', text: 'Karicheri View Point is truly one of Kasaragod\'s most breathtaking natural treasures, offering an escape into the serene beauty of the Western Ghats.' },
      { id: 2, author: 'Jithin Alex', authorPhoto: 'https://i.pravatar.cc/100?img=2', isLocalGuide: true, reviewCount: 94, rating: 5, timeAgo: '7 years ago', text: 'Nice dam with beautiful surroundings. Perfect spot for photography and relaxation.' },
      { id: 3, author: 'Muhammed Arafath', authorPhoto: 'https://i.pravatar.cc/100?img=3', isLocalGuide: true, reviewCount: 45, rating: 3, timeAgo: '7 years ago', text: 'Just a dam, thats all. But the drive to reach here is scenic and enjoyable.' }
    ],
    missingInfo: [
      { type: 'phone', label: "Add place's phone number" },
      { type: 'hours', label: 'Add hours' },
      { type: 'website', label: 'Add website' }
    ]
  },

  // Karichery View Point
  'place_karichery_viewpoint': {
    id: 'place_karichery_viewpoint',
    name: 'Karichery View Point',
    localName: 'കരിച്ചേരി വ്യൂ പോയിന്റ്',
    rating: 4.7,
    totalRatings: 156,
    category: 'Scenic spot',
    isOpen: true,
    is24Hours: false,
    statusNote: 'Best visited during sunrise',
    address: 'Karichery Hills, Kasaragod District, Kerala 671318',
    plusCode: 'C3WP+QRV',
    coordinates: { lat: 12.4789, lng: 75.1456 },
    mapPosition: { top: '25%', left: '55%' },
    phone: null,
    website: null,
    photos: [
      { id: 1, url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop', alt: 'Mountain sunrise' },
      { id: 2, url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&h=300&fit=crop', alt: 'Valley view' },
      { id: 3, url: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&h=300&fit=crop', alt: 'Foggy mountains' },
      { id: 4, url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop', alt: 'Panoramic view' }
    ],
    hours: [
      { day: 'Sunday', hours: '5:00 AM – 7:00 PM', isToday: false },
      { day: 'Monday', hours: '5:00 AM – 7:00 PM', isToday: false },
      { day: 'Tuesday', hours: '5:00 AM – 7:00 PM', isToday: false },
      { day: 'Wednesday', hours: '5:00 AM – 7:00 PM', isToday: true },
      { day: 'Thursday', hours: '5:00 AM – 7:00 PM', isToday: false },
      { day: 'Friday', hours: '5:00 AM – 7:00 PM', isToday: false },
      { day: 'Saturday', hours: '5:00 AM – 7:00 PM', isToday: false }
    ],
    popularTimes: { Thursday: [30, 25, 20, 15, 40, 70, 85, 75, 55, 40, 35, 30, 35, 40, 50, 60, 70, 65, 45, 25, 15, 10, 5, 0] },
    reviewSummary: { average: 4.7, total: 156, distribution: { 5: 112, 4: 28, 3: 10, 2: 4, 1: 2 } },
    reviews: [
      { id: 1, author: 'Priya Sharma', authorPhoto: 'https://i.pravatar.cc/100?img=5', isLocalGuide: true, reviewCount: 234, rating: 5, timeAgo: '1 week ago', text: 'Absolutely stunning sunrise views! The mist over the Western Ghats creates a magical atmosphere. Must visit early morning for the best experience.' },
      { id: 2, author: 'Rahul Menon', authorPhoto: 'https://i.pravatar.cc/100?img=8', isLocalGuide: false, reviewCount: 12, rating: 5, timeAgo: '3 weeks ago', text: 'One of the best viewpoints in Kasaragod. The drive up is beautiful and the panoramic views are worth every minute.' },
      { id: 3, author: 'Anitha K', authorPhoto: 'https://i.pravatar.cc/100?img=9', isLocalGuide: true, reviewCount: 67, rating: 4, timeAgo: '1 month ago', text: 'Beautiful place but can get crowded on weekends. Recommend visiting on weekdays for a peaceful experience.' }
    ],
    missingInfo: [
      { type: 'phone', label: "Add place's phone number" },
      { type: 'website', label: 'Add website' }
    ]
  },

  // Bendical Kids Park
  'place_bendical_park': {
    id: 'place_bendical_park',
    name: 'Bendical Kids Park',
    localName: 'ബെൻഡിക്കൽ കിഡ്സ് പാർക്ക്',
    rating: 4.2,
    totalRatings: 89,
    category: 'Amusement park',
    isOpen: true,
    is24Hours: false,
    statusNote: 'Closes at 6 PM',
    address: 'Bendical Junction, Near Bus Stand, Kasaragod, Kerala 671121',
    plusCode: 'C3XQ+234',
    coordinates: { lat: 12.4923, lng: 75.0987 },
    mapPosition: { top: '60%', left: '65%' },
    phone: '+91 4994 256789',
    website: 'https://bendicalkidspark.example.com',
    photos: [
      { id: 1, url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop', alt: 'Park entrance' },
      { id: 2, url: 'https://images.unsplash.com/photo-1560184611-02314d4ce715?w=400&h=300&fit=crop', alt: 'Playground area' },
      { id: 3, url: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&h=300&fit=crop', alt: 'Kids playing' },
      { id: 4, url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop', alt: 'Park facilities' }
    ],
    hours: [
      { day: 'Sunday', hours: '9:00 AM – 6:00 PM', isToday: false },
      { day: 'Monday', hours: 'Closed', isToday: false },
      { day: 'Tuesday', hours: '10:00 AM – 6:00 PM', isToday: false },
      { day: 'Wednesday', hours: '10:00 AM – 6:00 PM', isToday: true },
      { day: 'Thursday', hours: '10:00 AM – 6:00 PM', isToday: false },
      { day: 'Friday', hours: '10:00 AM – 6:00 PM', isToday: false },
      { day: 'Saturday', hours: '9:00 AM – 7:00 PM', isToday: false }
    ],
    popularTimes: { Thursday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 35, 50, 65, 55, 45, 60, 75, 70, 40, 0, 0, 0, 0, 0] },
    reviewSummary: { average: 4.2, total: 89, distribution: { 5: 45, 4: 25, 3: 12, 2: 5, 1: 2 } },
    reviews: [
      { id: 1, author: 'Aisha Fathima', authorPhoto: 'https://i.pravatar.cc/100?img=10', isLocalGuide: false, reviewCount: 23, rating: 5, timeAgo: '2 weeks ago', text: 'Great place for kids! My children had so much fun on the swings and slides. Clean facilities and friendly staff.' },
      { id: 2, author: 'Suresh Kumar', authorPhoto: 'https://i.pravatar.cc/100?img=11', isLocalGuide: true, reviewCount: 156, rating: 4, timeAgo: '1 month ago', text: 'Nice park for families. Entry fee is reasonable. Could use more shade areas for parents waiting.' },
      { id: 3, author: 'Lakshmi Nair', authorPhoto: 'https://i.pravatar.cc/100?img=12', isLocalGuide: false, reviewCount: 8, rating: 4, timeAgo: '2 months ago', text: 'Well maintained park. Kids enjoyed the toy train ride. Snacks available at the counter.' }
    ],
    missingInfo: []
  },

  // Karichery Bridge
  'place_karichery_bridge': {
    id: 'place_karichery_bridge',
    name: 'Karichery Bridge',
    localName: 'കരിച്ചേരി പാലം',
    rating: 4.0,
    totalRatings: 34,
    category: 'Bridge',
    isOpen: true,
    is24Hours: true,
    statusNote: null,
    address: 'Karichery Road, NH 66, Kasaragod District, Kerala 671318',
    plusCode: 'C3VP+XYZ',
    coordinates: { lat: 12.4634, lng: 75.1123 },
    mapPosition: { top: '38%', left: '48%' },
    phone: null,
    website: null,
    photos: [
      { id: 1, url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop', alt: 'Bridge view' },
      { id: 2, url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=300&fit=crop', alt: 'River crossing' },
      { id: 3, url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop', alt: 'Sunset view from bridge' }
    ],
    hours: [
      { day: 'Sunday', hours: 'Open 24 hours', isToday: false },
      { day: 'Monday', hours: 'Open 24 hours', isToday: false },
      { day: 'Tuesday', hours: 'Open 24 hours', isToday: false },
      { day: 'Wednesday', hours: 'Open 24 hours', isToday: true },
      { day: 'Thursday', hours: 'Open 24 hours', isToday: false },
      { day: 'Friday', hours: 'Open 24 hours', isToday: false },
      { day: 'Saturday', hours: 'Open 24 hours', isToday: false }
    ],
    popularTimes: { Thursday: [5, 5, 5, 5, 10, 25, 45, 60, 55, 40, 35, 40, 45, 40, 35, 45, 55, 60, 50, 35, 20, 15, 10, 5] },
    reviewSummary: { average: 4.0, total: 34, distribution: { 5: 15, 4: 10, 3: 6, 2: 2, 1: 1 } },
    reviews: [
      { id: 1, author: 'Vijay Krishnan', authorPhoto: 'https://i.pravatar.cc/100?img=13', isLocalGuide: true, reviewCount: 89, rating: 4, timeAgo: '3 weeks ago', text: 'Nice bridge connecting two villages. Beautiful views of the river below. Good for photography during golden hour.' },
      { id: 2, author: 'Deepa M', authorPhoto: 'https://i.pravatar.cc/100?img=14', isLocalGuide: false, reviewCount: 5, rating: 5, timeAgo: '2 months ago', text: 'Peaceful spot to watch sunset. Not a tourist destination but worth a stop if you are passing by.' }
    ],
    missingInfo: [
      { type: 'phone', label: "Add place's phone number" },
      { type: 'website', label: 'Add website' }
    ]
  },

  // Payyannur Temple
  'place_payyannur_temple': {
    id: 'place_payyannur_temple',
    name: 'Payyannur Subramanya Temple',
    localName: 'പയ്യന്നൂർ സുബ്രഹ്മണ്യ ക്ഷേത്രം',
    rating: 4.8,
    totalRatings: 2341,
    category: 'Hindu temple',
    isOpen: true,
    is24Hours: false,
    statusNote: 'Open for darshan',
    address: 'Temple Road, Payyannur, Kannur District, Kerala 670307',
    plusCode: 'C4WM+789',
    coordinates: { lat: 12.1045, lng: 75.2056 },
    mapPosition: { top: '70%', left: '25%' },
    phone: '+91 4985 202345',
    website: 'https://payyannurtemple.org',
    photos: [
      { id: 1, url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop', alt: 'Temple entrance' },
      { id: 2, url: 'https://images.unsplash.com/photo-1609766418204-94aae0ecdd6f?w=400&h=300&fit=crop', alt: 'Temple gopuram' },
      { id: 3, url: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=400&h=300&fit=crop', alt: 'Temple interior' },
      { id: 4, url: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=400&h=300&fit=crop', alt: 'Temple festival' }
    ],
    hours: [
      { day: 'Sunday', hours: '5:00 AM – 12:00 PM, 5:00 PM – 8:30 PM', isToday: false },
      { day: 'Monday', hours: '5:00 AM – 12:00 PM, 5:00 PM – 8:30 PM', isToday: false },
      { day: 'Tuesday', hours: '5:00 AM – 12:00 PM, 5:00 PM – 8:30 PM', isToday: false },
      { day: 'Wednesday', hours: '5:00 AM – 12:00 PM, 5:00 PM – 8:30 PM', isToday: true },
      { day: 'Thursday', hours: '5:00 AM – 12:00 PM, 5:00 PM – 8:30 PM', isToday: false },
      { day: 'Friday', hours: '5:00 AM – 12:00 PM, 5:00 PM – 8:30 PM', isToday: false },
      { day: 'Saturday', hours: '5:00 AM – 12:00 PM, 5:00 PM – 8:30 PM', isToday: false }
    ],
    popularTimes: { Thursday: [15, 10, 5, 5, 40, 75, 85, 70, 50, 35, 45, 55, 30, 20, 15, 25, 50, 80, 90, 75, 50, 25, 15, 10] },
    reviewSummary: { average: 4.8, total: 2341, distribution: { 5: 1890, 4: 320, 3: 85, 2: 30, 1: 16 } },
    reviews: [
      { id: 1, author: 'Gopalan Nambiar', authorPhoto: 'https://i.pravatar.cc/100?img=15', isLocalGuide: true, reviewCount: 412, rating: 5, timeAgo: '1 week ago', text: 'One of the most sacred temples in North Kerala. The architecture is stunning and the spiritual atmosphere is unmatched. Annual festival in March is a must-see.' },
      { id: 2, author: 'Saraswathi Amma', authorPhoto: 'https://i.pravatar.cc/100?img=16', isLocalGuide: false, reviewCount: 34, rating: 5, timeAgo: '2 weeks ago', text: 'Blessed to visit this ancient temple. The peacock sanctuary near the temple is beautiful. Prasadam is very good.' },
      { id: 3, author: 'Ramesh Warrier', authorPhoto: 'https://i.pravatar.cc/100?img=17', isLocalGuide: true, reviewCount: 178, rating: 5, timeAgo: '1 month ago', text: 'Historical significance and beautiful temple pond. Early morning is the best time to visit for a peaceful darshan.' }
    ],
    missingInfo: []
  }
};

// Export location IDs for easy reference
export const locationIds = Object.keys(locationsData);

// Default location
export const defaultLocationId = 'place_kaayakkunn_dam';

export default locationsData;

