import ZincTest from '@/app/Components/ZincTest/ZincTest';

export const metadata = {
  title: 'Zinc Test in Delhi NCR & Gurgaon | ZINC SERUM test in Delhi Dr. Dangs Lab',
  description: 'Book Zinc Test in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility. Book your test today at Dr. Dangs Lab.',
  keywords: 'zinc test, serum zinc test, zinc level test, zinc deficiency test, zinc test delhi, zinc test gurgaon',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://www.drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/Zinc-Test.html',
  },
  openGraph: {
    title: 'Zinc Test in Delhi NCR & Gurgaon | ZINC SERUM test in Delhi Dr. Dangs Lab',
    description: 'Book Zinc Test in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility. Book your test today at Dr. Dangs Lab.',
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
    title: 'Zinc Test in Delhi NCR & Gurgaon | ZINC SERUM test in Delhi Dr. Dangs Lab',
    description: 'Book Zinc Test in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility.',
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

export default function ZincTestPage() {
  return <ZincTest />;
}