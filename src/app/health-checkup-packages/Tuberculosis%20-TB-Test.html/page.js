import TuberculosisTest from '@/app/Components/TuberculosisTest/TuberculosisTest';

export const metadata = {
  title: 'TB Test in Delhi & Gurgaon | TB Gold, PCR, Tuberculosis Test Lab in Delhi NCR',
  description: 'Book TB (Tuberculosis) TB Gold, TB PCR Test in Delhi & Gurgaon online at Dr Dangs Lab. It is a blood test that helps detect Mycobacterium tuberculosis',
  keywords: 'TB test, tuberculosis test, TB Gold test, TB PCR test, TB test delhi, tuberculosis test gurgaon, Mycobacterium tuberculosis test',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/Tuberculosis%20-TB-Test.html',
  },
  openGraph: {
    title: 'TB Test in Delhi & Gurgaon | TB Gold, PCR, Tuberculosis Test Lab in Delhi NCR',
    description: 'Book TB (Tuberculosis) TB Gold, TB PCR Test in Delhi & Gurgaon online at Dr Dangs Lab. It is a blood test that helps detect Mycobacterium tuberculosis',
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
    title: 'TB Test in Delhi & Gurgaon | TB Gold, PCR, Tuberculosis Test Lab in Delhi NCR',
    description: 'Book TB (Tuberculosis) TB Gold, TB PCR Test in Delhi & Gurgaon online at Dr Dangs Lab. Detect Mycobacterium tuberculosis.',
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

export default function TuberculosisTestPage() {
  return <TuberculosisTest />;
}