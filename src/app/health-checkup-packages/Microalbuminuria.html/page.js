import MicroalbuminuriaTest from '@/app/Components/MicroalbuminuriaTest/MicroalbuminuriaTest';

export const metadata = {
  title: 'Microalbuminuria Test in Delhi NCR & Gurgaon',
  description: 'Book Microalbuminuria Test in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility. Microalbuminuria measures excretion of small amounts of albumin (a type of protein) in your urine.',
  keywords: 'microalbuminuria test, urine albumin test, kidney protein test, microalbuminuria test delhi, albumin test gurgaon, urine protein test',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/Microalbuminuria.html',
  },
  openGraph: {
    title: 'Microalbuminuria Test in Delhi NCR & Gurgaon',
    description: 'Book Microalbuminuria Test in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility. Microalbuminuria measures excretion of small amounts of albumin (a type of protein) in your urine.',
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
    title: 'Microalbuminuria Test in Delhi NCR & Gurgaon',
    description: 'Book Microalbuminuria Test in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility. Measures albumin protein in urine.',
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

export default function MicroalbuminuriaTestPage() {
  return <MicroalbuminuriaTest />;
}