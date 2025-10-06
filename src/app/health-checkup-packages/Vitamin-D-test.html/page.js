import VitaminD from '@/app/Components/VitaminD/VitaminD';

export const metadata = {
  title: 'Vitamin D Test in Delhi & Gurgaon | Vitamin D3 Level (25-OH) Test in Delhi NCR',
  description: 'Dr Dangs Lab provides Vitamin D Test in Delhi & Gurgaon. Vitamin D Test measures the level of Vitamin D3 (Total 25-OH) in your blood',
  keywords: 'vitamin D test, vitamin D3 test, 25-OH vitamin D test, vitamin D level test, vitamin D test delhi, vitamin D3 test gurgaon',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://www.drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/Vitamin-D-test.html',
  },
  openGraph: {
    title: 'Vitamin D Test in Delhi & Gurgaon | Vitamin D3 Level (25-OH) Test in Delhi NCR',
    description: 'Dr Dangs Lab provides Vitamin D Test in Delhi & Gurgaon. Vitamin D Test measures the level of Vitamin D3 (Total 25-OH) in your blood',
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
    title: 'Vitamin D Test in Delhi & Gurgaon | Vitamin D3 Level (25-OH) Test in Delhi NCR',
    description: 'Dr Dangs Lab provides Vitamin D Test in Delhi & Gurgaon. Measures Vitamin D3 (Total 25-OH) blood levels.',
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

export default function VitaminDTestPage() {
  return <VitaminD />;
}