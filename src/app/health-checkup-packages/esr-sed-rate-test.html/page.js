import ESRSEDRate from '@/app/Components/ESRSEDRate/ESRSEDRate';

export const metadata = {
  title: 'ESR / SED RATE Test in Delhi & Gurgaon, Erythrocyte Sedimentation Rate in Delhi NCR',
  description: 'Erythrocyte Sedimentation Rate (ESR), is a blood test that can reveal inflammatory activity in your body. Dr.Dangs Lab offers ESR / SED RATE Test in Delhi & Gurgaon.',
  keywords: 'ESR test, SED rate test, erythrocyte sedimentation rate, blood test delhi, ESR test gurgaon, inflammation test',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/esr-sed-rate-test.html'
  },
  openGraph: {
    title: 'ESR / SED RATE Test in Delhi & Gurgaon, Erythrocyte Sedimentation Rate in Delhi NCR',
    description: 'Erythrocyte Sedimentation Rate (ESR), is a blood test that can reveal inflammatory activity in your body. Dr.Dangs Lab offers ESR / SED RATE Test in Delhi & Gurgaon.',
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
    title: 'ESR / SED RATE Test in Delhi & Gurgaon, Erythrocyte Sedimentation Rate in Delhi NCR',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
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

export default function ESRSEDRatePage() {
  return <ESRSEDRate />;
}