import MagnesiumTest from '@/app/Components/MagnesiumTest/MagnesiumTest';

export const metadata = {
  title: 'Magnesium Test in Delhi NCR & Gurgaon | Serum Magnesium Test in Delhi',
  description: 'Serum magnesium test measures the level of magnesium in the blood. Dr Dangs Lab provides Magnesium Test in Delhi & Gurugram. Book your test today at Dr. Dangs Lab.',
  keywords: 'magnesium test, serum magnesium test, blood magnesium test, magnesium test delhi, magnesium test gurgaon, serum Mg test',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/magnesium-test.html',
  },
  openGraph: {
    title: 'Magnesium Test in Delhi NCR & Gurgaon | Serum Magnesium Test in Delhi',
    description: 'Serum magnesium test measures the level of magnesium in the blood. Dr Dangs Lab provides Magnesium Test in Delhi & Gurugram. Book your test today at Dr. Dangs Lab.',
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
    title: 'Magnesium Test in Delhi NCR & Gurgaon | Serum Magnesium Test in Delhi',
    description: 'Serum magnesium test measures the level of magnesium in the blood. Dr Dangs Lab provides Magnesium Test in Delhi & Gurugram.',
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

export default function MagnesiumTestPage() {
  return <MagnesiumTest />;
}