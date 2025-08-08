import ProstateSpecificAntigenFreeandTotal from '@/app/Components/ProstateSpecificAntigenFreeandTotal/ProstateSpecificAntigenFreeandTotal';

export const metadata = {
  title: 'PSA Free Test in Delhi, Total PSA Test in Delhi NCR & Gurgaon',
  description: 'Book Prostate Specific Antigen (PSA) Total in Delhi & Gurgaon at Dr Dangs Lab get Free Sample Collection at Home',
  keywords: 'PSA test, prostate specific antigen test, free PSA test, total PSA test, PSA test delhi, prostate test gurgaon',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/Prostate-Specific-Antigen-Free-and-Total.html',
  },
  openGraph: {
    title: 'PSA Free Test in Delhi, Total PSA Test in Delhi NCR & Gurgaon',
    description: 'Book Prostate Specific Antigen (PSA) Total in Delhi & Gurgaon at Dr Dangs Lab get Free Sample Collection at Home',
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
    title: 'PSA Free Test in Delhi, Total PSA Test in Delhi NCR & Gurgaon',
    description: 'Book Prostate Specific Antigen (PSA) Total in Delhi & Gurgaon at Dr Dangs Lab get Free Sample Collection at Home',
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

export default function PSATestPage() {
  return <ProstateSpecificAntigenFreeandTotal />;
}