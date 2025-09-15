import HelicobacterPylori from '@/app/Components/HelicobacterPylori/HelicobacterPylori';

export const metadata = {
  title: 'Helicobacter Pylori Test in Delhi, H Pylori IgG Test in Gurgaon, Gurugram',
  description: 'Book Helicobacter Pylori IgG Antibodies Test in Delhi and Gurgaon with NABL-accredited Dr Dangs Lab. One-stop destination for various medical tests',
  keywords: 'H pylori test, Helicobacter pylori test, H pylori IgG test, stomach infection test, H pylori test delhi, H pylori test gurgaon',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/helicobacter-pylorit-test.html'
  },
  openGraph: {
    title: 'Helicobacter Pylori Test in Delhi, H Pylori IgG Test in Gurgaon, Gurugram',
    description: 'Book Helicobacter Pylori IgG Antibodies Test in Delhi and Gurgaon with NABL-accredited Dr Dangs Lab. One-stop destination for various medical tests',
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
    title: 'Helicobacter Pylori Test in Delhi, H Pylori IgG Test in Gurgaon, Gurugram',
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

export default function HelicobacterPyloriPage() {
  return <HelicobacterPylori />;
}