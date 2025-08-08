import CBCTest from '@/app/Components/CBCTest/CBCTest';

export const metadata = {
  title: 'CBC Test in Delhi & Gurgaon, Complete Blood Count Test Lab in Delhi NCR',
  description: 'Dr.Dangs Lab offers Complete Blood Count Test in Delhi & Gurgaon. CBC Test is used to diagnose anaemia, infections, leukemias, clotting disorders and more',
  keywords: 'CBC test, complete blood count, blood test in delhi, CBC test in gurgaon, dr dangs lab, blood count test',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/complete-blood-count-test.html'
  },
  openGraph: {
    title: 'CBC Test in Delhi & Gurgaon, Complete Blood Count Test Lab in Delhi NCR',
    description: 'Dr.Dangs Lab offers Complete Blood Count Test in Delhi & Gurgaon. CBC Test is used to diagnose anaemia, infections, leukemias, clotting disorders and more',
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
    title: 'CBC Test in Delhi & Gurgaon, Complete Blood Count Test Lab in Delhi NCR',
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

export default function CBCTestPage() {
  return <CBCTest />;
}