import Urineroutine from '@/app/Components/Urineroutine/Urineroutine';

export const metadata = {
  title: 'Urine Routine and Microscopy Test in Delhi & Gurgaon | Full Body Checkup Prices',
  description: 'Book Urine routine and microscopy Test in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility. Book your test today at Dr. Dangs Lab.',
  keywords: 'urine test, urine routine test, urine microscopy test, urinalysis, urine test delhi, urine analysis gurgaon',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/Urine-routine-and-microscopy-Test.html',
  },
  openGraph: {
    title: 'Urine Routine and Microscopy Test in Delhi & Gurgaon | Full Body Checkup Prices',
    description: 'Book Urine routine and microscopy Test in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility.',
    url: 'https://drdangslab.com',
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
    title: 'Urine Routine and Microscopy Test in Delhi & Gurgaon',
    description: 'Book Urine routine and microscopy Test in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility.',
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

export default function UrineRoutineTestPage() {
  return <Urineroutine />;
}