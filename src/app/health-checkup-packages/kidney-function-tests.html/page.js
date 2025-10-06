import KidneyFunctionTest from '@/app/Components/KidneyFunctionTest/KidneyFunctionTest';

export const metadata = {
  title: 'Kidney Function Test in Delhi & Gurgaon | KFT Test in Delhi NCR',
  description: 'The kidney function test (KFT) is also known Renal function test (RFT). Dr Dangs Lab provides Kidney Function Test in Delhi & Gurgaon. Book your test today at Dr. Dangs Lab.',
  keywords: 'kidney function test, KFT test, renal function test, RFT test, kidney test delhi, KFT test gurgaon',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://www.drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/kidney-function-tests.html'
  },
  openGraph: {
    title: 'Kidney Function Test in Delhi & Gurgaon | KFT Test in Delhi NCR',
    description: 'The kidney function test (KFT) is also known Renal function test (RFT). Dr Dangs Lab provides Kidney Function Test in Delhi & Gurgaon. Book your test today at Dr. Dangs Lab.',
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
    title: 'Kidney Function Test in Delhi & Gurgaon | KFT Test in Delhi NCR',
    description: 'The kidney function test (KFT) is also known Renal function test (RFT). Dr Dangs Lab provides Kidney Function Test in Delhi & Gurgaon.',
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

export default function KidneyFunctionTestPage() {
  return <KidneyFunctionTest />;
}