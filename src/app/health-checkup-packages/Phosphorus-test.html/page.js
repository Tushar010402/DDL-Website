import PhosphorusTest from '@/app/Components/PhosphorusTest/PhosphorusTest';

export const metadata = {
  title: 'Phosphorus Test in Delhi NCR & Gurgaon | Serum phosphorus / phosphate test',
  description: 'Book Phosphorus Test (serum phosphorus / phosphate test) in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility. Book your test today at Dr. Dangs Lab.',
  keywords: 'phosphorus test, serum phosphate test, phosphate blood test, phosphorus test delhi, phosphate test gurgaon, serum phosphorus test',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://www.drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/Phosphorus-test.html',
  },
  openGraph: {
    title: 'Phosphorus Test in Delhi NCR & Gurgaon | Serum phosphorus / phosphate test',
    description: 'Book Phosphorus Test (serum phosphorus / phosphate test) in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility. Book your test today at Dr. Dangs Lab.',
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
    title: 'Phosphorus Test in Delhi NCR & Gurgaon | Serum phosphorus / phosphate test',
    description: 'Book Phosphorus Test (serum phosphorus / phosphate test) in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility.',
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

export default function PhosphorusTestPage() {
  return <PhosphorusTest />;
}