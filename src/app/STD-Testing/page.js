import STDTesting from '@/app/Components/STD-Testing/STD-Testing';

export const metadata = {
  title: 'STD Testing - Comprehensive & Confidential Care | Dr Dangs Lab',
  description: 'Take control of your sexual health with our Comprehensive STD Testing. Accurate, confidential, and trusted by Dr. Dangs Lab in Delhi NCR.',
  keywords: 'STD testing, sexual health, confidential STD test, STD test in Delhi NCR',
  openGraph: {
    title: 'STD Testing - Comprehensive & Confidential Care | Dr Dangs Lab',
    description: 'Take control of your sexual health with our Comprehensive STD Testing. Accurate, confidential, and trusted by Dr. Dangs Lab in Delhi NCR.',
    url: 'https://www.drdangslab.com/STD-Testing',
    siteName: 'Dr. Dangs Lab',
    images: [
      {
        url: '/DrdangsRedIcon.png',
        width: 200,
        height: 200,
        alt: 'Dr. Dangs Lab Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'STD Testing - Comprehensive & Confidential Care | Dr Dangs Lab',
    description: 'Take control of your sexual health with our Comprehensive STD Testing. Accurate, confidential, and trusted by Dr. Dangs Lab in Delhi NCR.',
    images: [
      {
        url: '/DrdangsRedIcon.png',
        alt: 'Dr. Dangs Lab Logo',
      },
    ],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/STD-Testing',
  },
};

export default function STDTestingPage() {
  return <STDTesting />;
}
