import VitaminB12 from '@/app/Components/VitaminB12/VitaminB12';

export const metadata = {
  title: 'Vitamin B12 Test in Delhi & Gurgaon | Vitamin B-12 Test Lab in Delhi NCR',
  description: 'Book Vitamin B12 (Vit- B12) (Cyanocobalamin) Test in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility. Book your test today at Dr. Dangs Lab.',
  keywords: 'vitamin b12 test, cyanocobalamin test, B12 deficiency test, vitamin B12 test delhi, B12 test gurgaon, cobalamin test',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://www.drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/Vitamin-B12-Test.html',
  },
  openGraph: {
    title: 'Vitamin B12 Test in Delhi & Gurgaon | Vitamin B-12 Test Lab in Delhi NCR',
    description: 'Book Vitamin B12 (Vit- B12) (Cyanocobalamin) Test in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility.',
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
    title: 'Vitamin B12 Test in Delhi & Gurgaon | Vitamin B-12 Test Lab in Delhi NCR',
    description: 'Book Vitamin B12 (Cyanocobalamin) Test in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility.',
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

export default function VitaminB12TestPage() {
  return <VitaminB12 />;
}