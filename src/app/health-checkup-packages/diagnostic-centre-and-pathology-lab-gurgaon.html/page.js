import DiagnosticsInGurgaon from '@/app/Components/DiagnosticsInGurgaon/DiagnosticsInGurgaon';

export const metadata = {
  title: 'Best Diagnostic Centres In Gurgaon | Pathology Labs Gurugram',
  description: 'Dr. Dangs Lab - Best Diagnostic Centres & Pathology Labs near you in Gurgaon. Get facility of Home Sample Collection, Download Test Reports Online',
  keywords: 'diagnostic centre gurgaon, pathology lab gurugram, diagnostic lab near me, best diagnostic centre, dr dangs lab',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/diagnostic-centre-and-pathology-lab-gurgaon.html'
  },
  openGraph: {
    title: 'Best Diagnostic Centres In Gurgaon | Pathology Labs Gurugram',
    description: 'Dr. Dangs Lab - Best Diagnostic Centres & Pathology Labs near you in Gurgaon. Get facility of Home Sample Collection, Download Test Reports Online',
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
    title: 'Best Diagnostic Centres In Gurgaon | Pathology Labs Gurugram',
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

export default function DiagnosticsInGurgaonPage() {
  return <DiagnosticsInGurgaon />;
}