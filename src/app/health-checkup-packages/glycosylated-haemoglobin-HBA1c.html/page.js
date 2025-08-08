import HBA1cTest from '@/app/Components/HBA1cTest/HBA1cTest';

export const metadata = {
  title: 'HbA1c Test in Delhi NCR & Gurgaon | Glycosylated Haemoglobin in Delhi NCR',
  description: 'HbA1c Glycated Haemoglobin Test is often used as a diagnostic test for diabetes. Dr Dangs Lab provides HbA1c Test in Delhi & Gurgaon. Book your test today at Dr. Dangs Lab.',
  keywords: 'HbA1c test, glycated hemoglobin, diabetes test, HbA1c test delhi, HbA1c test gurgaon, glycosylated hemoglobin test',
  authors: [{ name: 'Dr. Dangs Lab' }],
  metadataBase: new URL('https://drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/glycosylated-haemoglobin-HBA1c.html'
  },
  openGraph: {
    title: 'HbA1c Test in Delhi NCR & Gurgaon | Glycosylated Haemoglobin in Delhi NCR',
    description: 'HbA1c Glycated Haemoglobin Test is often used as a diagnostic test for diabetes. Dr Dangs Lab provides HbA1c Test in Delhi & Gurgaon. Book your test today at Dr. Dangs Lab.',
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
    title: 'HbA1c Test in Delhi NCR & Gurgaon | Glycosylated Haemoglobin in Delhi NCR',
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

export default function HBA1cTestPage() {
  return <HBA1cTest />;
}