import H3N2Tests from '@/app/Components/H3N2Tests/H3N2Tests';

export const metadata = {
  title: 'H3N2 Test in Delhi, H3N2 Virus infection Test in Gurgaon, Delhi NCR',
  description: 'Dr.Dangs Lab offers H3N2 Virus infection Test in Delhi & Gurgaon. H3 N2 is a variant of Influenza A virus that is responsible for causing flu',
  keywords: 'H3N2 test, H3N2 virus test, influenza test, flu test delhi, H3N2 test gurgaon, virus infection test',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/H3N2-Test.html'
  },
  openGraph: {
    title: 'H3N2 Test in Delhi, H3N2 Virus infection Test in Delhi & Gurgaon',
    description: 'Dr.Dangs Lab offers H3N2 Virus infection Test in Delhi & Gurgaon. H3 N2 is a variant of Influenza A virus that is responsible for causing flu',
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
    title: 'H3N2 Test in Delhi, H3N2 Virus infection Test in Delhi & Gurgaon',
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

export default function H3N2TestPage() {
  return <H3N2Tests />;
}