import LipidProfile from '@/app/Components/LipidProfile/LipidProfile';

export const metadata = {
  title: 'Lipid Profile Test in Delhi & Gurgaon, Cholesterol Test in Delhi NCR',
  description: 'Book Lipid Profile Test, Cholesterol Test at Dr. Dangs Lab in Delhi & Gurgaon. Get Free Sample Collection at Home',
  keywords: 'lipid profile test, cholesterol test, lipid test delhi, cholesterol test gurgaon, lipid panel test, triglycerides test',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/Lipid-Profile-Test.html',
  },
  openGraph: {
    title: 'Lipid Profile Test in Delhi & Gurgaon, Cholesterol Test in Delhi NCR',
    description: 'Book Lipid Profile Test, Cholesterol Test at Dr. Dangs Lab in Delhi & Gurgaon. Get Free Sample Collection at Home',
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
    title: 'Lipid Profile Test in Delhi & Gurgaon, Cholesterol Test in Delhi NCR',
    description: 'Book Lipid Profile Test, Cholesterol Test at Dr. Dangs Lab in Delhi & Gurgaon. Get Free Sample Collection at Home',
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

export default function LipidProfilePage() {
  return <LipidProfile />;
}