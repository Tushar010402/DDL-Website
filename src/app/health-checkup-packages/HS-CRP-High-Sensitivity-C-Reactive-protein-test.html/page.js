import HSCRP from '@/app/Components/HSCRP/HSCRP';

export const metadata = {
  title: 'HS-CRP Test in Delhi: High Sensitivity C Reactive Protein Test in Gurgaon',
  description: 'Book HS-CRP: High Sensitivity C Reactive protein Test in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility. Book your test today at Dr. Dangs Lab.',
  keywords: 'HS-CRP test, C reactive protein test, high sensitivity CRP, inflammation test, HS-CRP test delhi, CRP test gurgaon',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://www.drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/HS-CRP-High-Sensitivity-C-Reactive-protein-test.html'
  },
  openGraph: {
    title: 'HS-CRP Test in Delhi: High Sensitivity C Reactive Protein Test in Gurgaon',
    description: 'Book HS-CRP: High Sensitivity C Reactive protein Test in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility. Book your test today at Dr. Dangs Lab.',
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
    title: 'HS-CRP Test in Delhi: High Sensitivity C Reactive Protein Test in Gurgaon',
    description: 'Book HS-CRP: High Sensitivity C Reactive protein Test in Delhi & Gurgaon online at Dr Dangs Lab with home sample collection facility.',
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

export default function HSCRPTestPage() {
  return <HSCRP />;
}