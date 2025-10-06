import ThyroidProfile from '@/app/Components/ThyroidProfile/ThyroidProfile';

export const metadata = {
  title: 'Thyroid Profile Test (FT3, FT4, TSH) in Delhi & Gurgaon | Dr. Dangs Lab',
  description: 'Get comprehensive Thyroid Profile testing with FT3, FT4, and Ultra-sensitive TSH at Dr. Dangs Lab in Delhi & Gurgaon. Accurate results, NABL accredited lab, home sample collection available.',
  openGraph: {
    title: 'Thyroid Profile Test (FT3, FT4, TSH) in Delhi & Gurgaon | Dr. Dangs Lab',
    description: 'Get comprehensive Thyroid Profile testing with FT3, FT4, and Ultra-sensitive TSH at Dr. Dangs Lab in Delhi & Gurgaon. Accurate results, NABL accredited lab, home sample collection available.',
    url: 'https://www.drdangslab.com/',
    siteName: 'Dr. Dangs Lab',
    type: 'website',
    images: [
      {
        url: '/DrdangsRedIcon.png',
        width: 200,
        height: 200,
        alt: 'Dr. Dangs Lab Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@drdangslab',
    title: 'Thyroid Profile Test (FT3, FT4, TSH) in Delhi & Gurgaon | Dr. Dangs Lab',
    description: 'Get comprehensive Thyroid Profile testing with FT3, FT4, and Ultra-sensitive TSH at Dr. Dangs Lab in Delhi & Gurgaon. Accurate results, NABL accredited lab, home sample collection available.',
    images: ['/DrdangsRedIcon.png'],
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/thyroid-profile-with-FT3,-FT4-test.html',
  },
};

export default function ThyroidProfilePage() {
  return <ThyroidProfile />;
}


