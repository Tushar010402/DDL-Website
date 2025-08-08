import TotalIgETest from '@/app/Components/TotalIgETest/TotalIgETest';

export const metadata = {
  title: 'Total IgE Test in Delhi NCR & Gurgaon | Total IgE Test Price on Delhi NCR',
  description: 'Book IGE (TOTAL) Test in Delhi & Gurgaon with Home Sample Collection from Dr. Dangs Lab at the best price.',
  keywords: 'total IgE test, immunoglobulin E test, allergy test, IgE test delhi, IgE test gurgaon, allergy blood test',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/ige-test.html'
  },
  openGraph: {
    title: 'Total IgE Test in Delhi NCR & Gurgaon | Total IgE Test Price on Delhi NCR',
    description: 'Book IGE (TOTAL) Test in Delhi & Gurgaon with Home Sample Collection from Dr. Dangs Lab at the best price.',
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
    title: 'Total IgE Test in Delhi NCR & Gurgaon | Total IgE Test Price on Delhi NCR',
    description: 'Book IGE (TOTAL) Test in Delhi & Gurgaon with Home Sample Collection from Dr. Dangs Lab at the best price.',
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

export default function TotalIgETestPage() {
  return <TotalIgETest />;
}