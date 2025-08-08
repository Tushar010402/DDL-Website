import CBNAATCOVID from '@/app/Components/CBNAATCOVID/CBNAATCOVID';

export const metadata = {
  title: 'CBNAAT Test in Delhi, CBNAAT COVID19 Test in Delhi NCR & Gurgaon',
  description: 'Dr.Dangs Lab offers CBNAAT COVID19 Test in Delhi & Gurgaon. CBNAAT is a diagnostic tool used to test for the presence of COVID-19.',
  keywords: 'CBNAAT test, COVID19 test, CBNAAT test in delhi, CBNAAT test in gurgaon, dr dangs lab',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://drdangslab.com'),
  alternates: {
    canonical: 'https://drdangslab.com/health-checkup-packages/CBNAAT-COVID19-Test.html'
  },
  openGraph: {
    title: 'CBNAAT Test in Delhi, CBNAAT COVID19 Test in Delhi NCR & Gurgaon',
    description: 'Dr.Dangs Lab offers CBNAAT COVID19 Test in Delhi & Gurgaon. CBNAAT is a diagnostic tool used to test for the presence of COVID-19.',
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
    title: 'CBNAAT Test in Delhi, CBNAAT COVID19 Test in Delhi NCR & Gurgaon',
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

export default function CBNAATCOVIDPage() {
  return <CBNAATCOVID />;
}