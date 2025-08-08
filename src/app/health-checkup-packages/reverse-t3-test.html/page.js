import RT3Test from '@/app/Components/RT3Test/RT3Test';

export const metadata = {
  title: 'Reverse T3 Test in Delhi &amp; Gurgaon | rT3 Test @ ₹7,700',
  description: 'Book REVERSE T3 Test @ ₹7,700 online with home sample collection in Delhi &amp; Gurgaon at Dr Dangs Lab. Reverse T3 (rT3) is the Inactive Form of T3 hormone produced by thyroid gland.',
  keywords: 'reverse T3 test, rT3 test, thyroid test, T3 hormone test, reverse T3 test delhi, rT3 test gurgaon',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/reverse-t3-test.html',
  },
  openGraph: {
    title: 'Reverse T3 Test in Delhi &amp; Gurgaon | rT3 Test @ ₹7,700',
    description: 'Book REVERSE T3 Test @ ₹7,700 online with home sample collection in Delhi &amp; Gurgaon at Dr Dangs Lab. Reverse T3 (rT3) is the Inactive Form of T3 hormone produced by thyroid gland.',
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
    title: 'Reverse T3 Test in Delhi &amp; Gurgaon | rT3 Test @ ₹7,700',
    description: 'Book REVERSE T3 Test @ ₹7,700 online with home sample collection in Delhi &amp; Gurgaon at Dr Dangs Lab. Reverse T3 (rT3) is the Inactive Form of T3 hormone produced by thyroid gland.',
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

export default function ReverseT3TestPage() {
  return <RT3Test />;
}