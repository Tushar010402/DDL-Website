/**
 * Centralized location data fetcher with fallback support.
 * Fetches locations from backend API with hard-coded fallback if API fails.
 */

const API_BASE = 'https://backend.dangsccg.co.in';

// Fallback locations data - used when API is unavailable
const FALLBACK_LOCATIONS = [
  {
    id: 1,
    title: 'SDA',
    address: 'C2/1, SDA Aurobindo Marg, Next to Aurobindo Market, New Delhi-110016',
    phones: ['011-45004200', '+91-9999992020'],
    timing: 'Timing: 7:30am to 7:00pm (Monday-Saturday)',
    map_url: 'https://www.google.com/maps/place/Dr.+Dangs+Lab/@28.5498115,77.2008449,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce212c5e11f3b:0x87bfcad1d8f9e92c!8m2!3d28.5498115!4d77.2034198',
    page_link: '/',
    display_order: 1,
    is_active: true,
    show_in_feedback: true,
  },
  {
    id: 2,
    title: 'Punjabi Bagh',
    address: '1/51, Ground Floor, Opposite Central Market, West Punjabi Bagh, New Delhi– 110026',
    phones: ['+91-9810678165'],
    timing: 'Timing: 8:00am to 6:00pm (Monday-Saturday)',
    map_url: 'https://share.google/7ekU3yZQ9nyaGzn8P',
    page_link: '/pathology-labs-in-punjabi-bagh',
    display_order: 2,
    is_active: true,
    show_in_feedback: true,
  },
  {
    id: 3,
    title: 'Vasant Kunj',
    address: '12/13 G.F., Vasant Arcade, Nelson Mandela Marg, Vasant Kunj, New Delhi-110070',
    phones: ['+91-9910589234'],
    timing: 'Timing: 8:00am to 6:00pm (Monday-Saturday)',
    map_url: 'https://www.google.com/maps/place/Dr+Dangs+Lab+-+Vasant+Kunj/@28.5334491,77.1493118,17z',
    page_link: '',
    display_order: 3,
    is_active: true,
    show_in_feedback: true,
  },
  {
    id: 4,
    title: 'Greater Kailash',
    address: 'GF N36 GK1, New Delhi–110048',
    phones: ['+91-9910313567'],
    timing: 'Timing: 8:00am to 4:00pm (Monday-Saturday)',
    map_url: 'https://www.google.com/maps/place/Dr.+Dangs+Lab+-+G.K./@28.5579437,77.2331998,17z',
    page_link: '',
    display_order: 4,
    is_active: true,
    show_in_feedback: true,
  },
  {
    id: 5,
    title: 'Noida',
    address: 'Max Square (Lower Ground Floor), Jaypee Wishtown, Sector 129, Noida – 201304',
    phones: ['+91-9220503545'],
    timing: 'Timing: 8:00am to 6:00pm (Monday-Saturday)',
    map_url: 'https://www.google.com/maps/place/Dr.+Dangs+Lab+-+Noida/@28.5094832,77.3859705',
    page_link: '',
    display_order: 5,
    is_active: true,
    show_in_feedback: true,
  },
  {
    id: 6,
    title: 'Gurugram',
    address: 'Palm Springs Plaza, Golf Course Road Sector-53, Gurugram-122001',
    phones: ['+91-9818881065'],
    timing: 'Timing: 8:00am to 6:00pm (Monday-Saturday)',
    map_url: 'https://www.google.com/maps/place/Dr.+Dangs+Lab+-+Gurugram/@28.4453313,77.0988813,17z',
    page_link: '/health-checkup-packages/diagnostic-centre-and-pathology-lab-gurgaon.html',
    display_order: 6,
    is_active: true,
    show_in_feedback: true,
  },
  {
    id: 7,
    title: 'Gurugram Sector 66',
    address: 'G-42, Block B, Spaze Business Park, Badshahpur, Sector 66, Gurugram, Haryana 122102',
    phones: ['+91-9220503540'],
    timing: 'Timing: 8:00am to 6:00pm (Monday-Saturday)',
    map_url: 'https://www.google.com/maps/place/Dr+Dangs+Lab+-+Gurugram+Sector+66/@28.4041699,77.056086,17z',
    page_link: '/health-checkup-packages/diagnostic-centre-and-pathology-lab-gurgaon.html',
    display_order: 7,
    is_active: true,
    show_in_feedback: true,
  },
  {
    id: 8,
    title: 'New Friends Colony',
    address: 'D-851, Ground Floor, New Friends Colony, New Delhi-110025',
    phones: ['+91-9311225665'],
    timing: 'Timing: 8:00am to 6:00pm (Monday-Saturday)',
    map_url: 'https://www.google.com/maps/place/Dr.+Dangs+Lab+-+New+Friends+Colony/@28.5630285,77.266374,17z',
    page_link: '',
    display_order: 8,
    is_active: true,
    show_in_feedback: true,
  },
  {
    id: 9,
    title: 'Kamla Nagar',
    address: 'UA No-25, Ground Floor, Jawahar Nagar, Malka Ganj, New Delhi-110007',
    phones: ['+91-9289157434'],
    timing: 'Timing: 8:00am to 6:00pm (Monday-Saturday)',
    map_url: 'https://www.google.com/maps/place/Dr.+Dangs+Lab/@28.6790643,77.2055007,17z',
    page_link: '',
    display_order: 9,
    is_active: true,
    show_in_feedback: true,
  },
];

/**
 * Fetch all active locations from API with fallback support.
 * @returns {Promise<Array>} Array of location objects
 */
export async function getLocations() {
  try {
    const res = await fetch(`${API_BASE}/api/locations/`, {
      next: { revalidate: 300 }, // Cache for 5 minutes (Next.js 13+)
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch locations from API, using fallback:', error);
    return FALLBACK_LOCATIONS;
  }
}

/**
 * Fetch locations that should appear in feedback form.
 * @returns {Promise<Array>} Array of location objects for feedback
 */
export async function getFeedbackLocations() {
  const locations = await getLocations();
  return locations.filter(loc => loc.show_in_feedback);
}

/**
 * Get a single location by ID.
 * @param {number} id - Location ID
 * @returns {Promise<Object|null>} Location object or null
 */
export async function getLocationById(id) {
  const locations = await getLocations();
  return locations.find(loc => loc.id === id) || null;
}

/**
 * Transform API location data to match existing frontend format.
 * Used for backward compatibility with existing components.
 * @param {Object} location - API location object
 * @returns {Object} Transformed location object
 */
export function transformLocationForDisplay(location) {
  return {
    title: location.title,
    address: location.address,
    phone: location.phones,
    timing: location.timing,
    mapUrl: location.map_url,
    link: location.page_link || '',
  };
}

/**
 * Transform all locations for display.
 * @param {Array} locations - Array of API location objects
 * @returns {Array} Transformed locations
 */
export function transformLocationsForDisplay(locations) {
  return locations.map(transformLocationForDisplay);
}

// Export fallback for direct use if needed
export { FALLBACK_LOCATIONS };
