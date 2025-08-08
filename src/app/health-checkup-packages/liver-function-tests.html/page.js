import LiverFunctionTest from '@/app/Components/LiverFunctionTest/LiverFunctionTest';

export const metadata = {
  title: 'Liver Function Test in Delhi & Gurgaon | LFT Test in Delhi NCR',
  description: 'Dr Dangs Lab provides Liver Function Test (LFT) in Delhi & Gurgaon. Book Liver Function Blood Test online at Dr. Dangs Lab with home sample collection facility.',
  keywords: 'liver function test, LFT test, liver blood test, liver panel test, LFT test delhi, liver test gurgaon',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/liver-function-tests.html',
  },
  openGraph: {
    title: 'Liver Function Test in Delhi & Gurgaon | LFT Test in Delhi NCR',
    description: 'Dr Dangs Lab provides Liver Function Test (LFT) in Delhi & Gurgaon. Book Liver Function Blood Test online at Dr. Dangs Lab with home sample collection facility.',
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
    title: 'Liver Function Test in Delhi & Gurgaon | LFT Test in Delhi NCR',
    description: 'Dr Dangs Lab provides Liver Function Test (LFT) in Delhi & Gurgaon. Book Liver Function Blood Test online at Dr. Dangs Lab with home sample collection facility.',
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

export default function LiverFunctionTestPage() {
  return <LiverFunctionTest />;
}