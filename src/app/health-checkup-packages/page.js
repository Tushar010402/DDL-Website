// src/app/TestProfiles/page.js
import TestProfiles from '../Components/TestProfiles/TestProfiles';
import { TestPackageProvider } from '../Components/TestProfiles/TestPackageContext';

export const metadata = {
  title: 'Health Checkup Packages in Delhi & Gurgaon | Full Body Checkup Prices',
  description: 'Dr Dangs Lab provides wide range of Health Checkup Packages for men and women in Delhi & Gurugram. Book your test today at Dr. Dangs Lab.',
  keywords: 'health checkup packages, full body checkup, medical packages delhi, health packages gurgaon, diagnostic packages, preventive health checkup',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://www.drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages',
  },
  openGraph: {
    title: 'Health Checkup Packages in Delhi & Gurgaon | Full Body Checkup Prices',
    description: 'Dr Dangs Lab provides wide range of Health Checkup Packages for men and women in Delhi & Gurugram. Book your test today at Dr. Dangs Lab.',
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
    title: 'Health Checkup Packages in Delhi & Gurgaon | Full Body Checkup Prices',
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

export default function TestProfilesPage() {
  return (
    <TestPackageProvider>
      <TestProfiles />
    </TestPackageProvider>
  );
}