import CBNAAT from '@/app/Components/CBNAAT/CBNAAT';

export const metadata = {
  title: 'CBNAAT Testing for Tuberculosis in Delhi & Gurgaon, NCR',
  description: 'Dr.Dangs Lab offers CBNAAT Test for Tuberculosis Test in Delhi & Gurgaon. Fast, Accurate and Reliable CBNAAT Testing for Tuberculosis: GeneXpert Test',
  keywords: 'CBNAAT test, tuberculosis test, TB test, GeneXpert test, CBNAAT test in delhi, CBNAAT test in gurgaon',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/CBNAAT.html',
  },
  openGraph: {
    title: 'CBNAAT Testing for Tuberculosis in Delhi & Gurgaon, NCR',
    description: 'Dr.Dangs Lab offers CBNAAT Test for Tuberculosis Test in Delhi & Gurgaon. Fast, Accurate and Reliable CBNAAT Testing for Tuberculosis: GeneXpert Test',
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
    title: 'CBNAAT Testing for Tuberculosis in Delhi & Gurgaon, NCR',
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

export default function CBNAATPage() {
  return <CBNAAT />;
}