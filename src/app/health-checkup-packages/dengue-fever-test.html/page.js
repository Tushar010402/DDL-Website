import DengueTest from '@/app/Components/DengueTest/DengueTest';

export const metadata = {
  title: 'Dengue Test in Delhi NCR & Gurgaon | Dengue Fever Test, NS 1 Antigen Test',
  description: 'Book Dengue Fever NS1 Antigen test online at Dr. Dangs Lab from the most trusted pathology lab in Delhi NCR. A Dengue Fever NS1 Antigen test measures the NS-1 protein of the dengue virus',
  keywords: 'Dengue test Delhi NCR, NS1 antigen test, dengue fever test, Dr Dangs Lab, dengue virus test',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/dengue-fever-test.html'
  },
  openGraph: {
    title: 'Dengue Test in Delhi NCR & Gurgaon | Dengue Fever Test, NS 1 Antigen Test',
    description: 'Book Dengue Fever NS1 Antigen test online at Dr. Dangs Lab from the most trusted pathology lab in Delhi NCR. A Dengue Fever NS1 Antigen test measures the NS-1 protein of the dengue virus',
    url: 'https://drdangslab.com',
    siteName: 'Dr. Dangs Lab',
    images: [
      {
        url: '/DrdangsRedIcon.png',
        width: 200,
        height: 200,
        alt: 'Dr. Dangs Lab Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Health Checkup Packages in Delhi & Gurgaon | Full Body Checkup Prices',
    description: 'Dr Dangs Lab provides wide range of Health Checkup Packages for men and women in Delhi & Gurugram. Book your test today at Dr. Dangs Lab.',
    site: '@drdangslab.com',
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
  return <DengueTest />;
}
