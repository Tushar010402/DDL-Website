import BeyondAgeBookingForm from '@/app/Components/beyond-age/BeyondAgeBookingForm';

// Private partner page — not indexed by search engines
export const metadata = {
  title: 'Beyond Age × Dr. Dangs Lab | Dedicated Diagnostic Booking',
  description:
    'Book your home collection diagnostic tests through the Beyond Age partnership with Dr. Dangs Lab. Fast, reliable, pan-India.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function BeyondAgePage() {
  return <BeyondAgeBookingForm />;
}
