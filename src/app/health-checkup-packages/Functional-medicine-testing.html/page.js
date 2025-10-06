import FunctionalMedicine from '@/app/Components/FunctionalMedicine/FunctionalMedicine';

export const metadata = {
  title: 'Functional Medicine Testing in Gurgaon, Delhi, Gurugram',
  description: 'At Dr. Dangs Lab, we offer a wide range of functional medicine tests in house & also with various lab partners in Delhi and Gurgaon.',
  keywords: 'functional medicine test, functional medicine delhi, functional medicine gurgaon, dr dangs lab, medical testing gurugram',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://www.drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/Functional-medicine-testing.html'
  },
  openGraph: {
    title: 'Functional Medicine Testing in Gurgaon, Delhi, Gurugram',
    description: 'At Dr. Dangs Lab, we offer a wide range of functional medicine tests in house & also with various lab partners in Delhi and Gurgaon.',
    url: 'https://www.drdangslab.com',
    siteName: 'Dr. Dangs Lab',
    images: [
      {
        url: '/DrdangsRedIcon.png',
        width: 200,
        height: 200,
        alt: 'Dr. Dangs Lab Logo',
      },
      {
        url: '/DrdangsRedIcon.png',
        width: 200,
        height: 200,
        alt: 'Dr. Dangs Lab Icon',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Functional Medicine Testing in Gurgaon, Delhi, Gurugram',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    site: '@drdangslab.com',
    creator: '@drdangslab',
    images: ['/DrdangsRedIcon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
 
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/DrdangsRedIcon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
    maximumScale: 1,
  },
};

export default function FunctionalMedicinePage() {
  return <FunctionalMedicine />;
}