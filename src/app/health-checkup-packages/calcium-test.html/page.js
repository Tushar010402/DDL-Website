import CalciumTest from '@/app/Components/CalciumTest/CalciumTest';

export const metadata = {
  title: 'Calcium Test in Delhi NCR, Total Calcium Test Lab in Gurgaon | Dr. Dangs Lab',
  description: 'Dr.Dangs Lab offers Calcium Test in Delhi & Gurgaon. We offer home sample collection for calcium score tests with accurate and reliable results.',
  keywords: 'calcium test, calcium score test, calcium test in delhi, calcium test in gurgaon, dr dangs lab',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://www.drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/calcium-test.html'
  },
  openGraph: {
    title: 'Calcium Test in Delhi NCR, Total Calcium Test Lab in Gurgaon',
    description: 'Dr.Dangs Lab offers Calcium Test in Delhi & Gurgaon. We offer home sample collection for calcium score tests with accurate and reliable results.',
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
        alt: 'Dr. Dangs Lab Secondary Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Calcium Test in Delhi NCR, Total Calcium Test Lab in Gurgaon',
    description: 'Dr.Dangs Lab offers Calcium Test in Delhi & Gurgaon. Expert pathologists, reliable results, home collection available.',
    site: '@drdangslab',
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
};

export default function CalciumTestPage() {
  return <CalciumTest />;
}