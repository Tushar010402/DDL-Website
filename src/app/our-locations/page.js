import OurLocations from './OurLocations';

export const metadata = {
  title: 'Our Locations | Dr Dangs Lab - Pathology Labs & Diagnostic Centers',
  description: 'Visit Dr Dangs Lab at multiple locations across Delhi NCR including SDA, Punjabi Bagh, Vasant Kunj, Greater Kailash, Gurugram, and more. Find the nearest pathology lab to you.',
  keywords: 'Dr Dangs Lab locations, pathology lab Delhi, diagnostic center Gurgaon, lab near me, blood test center Delhi NCR',
  metadataBase: new URL('https://www.drdangslab.com'),
  alternates: {
    canonical: '/our-locations',
  },
  openGraph: {
    title: "Our Locations | Dr Dangs Lab - Multiple Centers Across Delhi NCR",
    siteName: "Dr. Dangs Lab",
    url: 'https://www.drdangslab.com/our-locations',
    description: "Find Dr Dangs Lab locations near you. We have multiple pathology labs and diagnostic centers across Delhi NCR with state-of-the-art facilities.",
    type: 'website',
    images: [{
      url: '/DrdangsRedIcon.png',
    }],
  },
};

export default function OurLocationsPage() {
  return <OurLocations />;
}