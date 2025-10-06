import VitaminB9 from '@/app/Components/VitaminB9/VitaminB9';

export const metadata = {
  title: 'Folic Acid (Vitamin B9) Test in Delhi NCR, Vitamin B9 Test in Gurgaon',
  description: 'Book Folic Acid (Vitamin B9) Test in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility. Book your test today at Dr. Dangs Lab.',
  keywords: 'vitamin b9 test, folic acid test, vitamin b9 test delhi, folic acid test gurgaon, dr dangs lab',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://www.drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/Folic-Acid-Vitamin-B-9-Test.html'
  },
  openGraph: {
    title: 'Folic Acid (Vitamin B9) Test in Delhi NCR, Vitamin B9 Test in Gurgaon',
    description: 'Book Folic Acid (Vitamin B9) Test in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility. Book your test today at Dr. Dangs Lab.',
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
    title: 'Folic Acid (Vitamin B9) Test in Delhi NCR, Vitamin B9 Test in Gurgaon',
    description: 'Dr Dangs Lab provides wide range of Health Checkup Packages for men and women in Delhi & Gurugram. Book your test today at Dr. Dangs Lab.',
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

export default function VitaminB9Page() {
  return <VitaminB9 />;
}