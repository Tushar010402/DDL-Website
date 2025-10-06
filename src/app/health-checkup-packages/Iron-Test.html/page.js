import IronTest from '@/app/Components/IronTest/IronTest';

export const metadata = {
  title: 'Iron Test in Delhi & Gurgaon | Iron Test cost in Delhi NCR',
  description: 'Book Iron Studies Test in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility.',
  keywords: 'iron test, iron studies test, iron deficiency test, serum iron test, iron test delhi, iron test gurgaon',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://www.drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/Iron-Test.html'
  },
  openGraph: {
    title: 'Iron Test in Delhi & Gurgaon | Iron Test cost in Delhi NCR',
    description: 'Book Iron Studies Test in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility.',
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
    title: 'Iron Test in Delhi & Gurgaon | Iron Test cost in Delhi NCR',
    description: 'Book Iron Studies Test in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility.',
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

export default function IronTestPage() {
  return <IronTest />;
}