import CardiacHealtha from '@/app/Components/4-Key-Blood-Tests-for-Cardiac-Health/4-Key-Blood-Tests-for-Cardiac-Health';

export const metadata = {
  title: '4 Key Blood Tests for Cardiac Health | Dr. Dangs Lab',
  description:
    'Gain deeper insights into your heart health with these 4 key blood tests. Dr. Dangs Lab offers advanced cardiac diagnostics to help you stay ahead of heart issues.',
  keywords:
    'cardiac health, blood tests, heart tests, lipid profile, hs-crp, homocysteine, ApoA, ApoB, leptin, Dr. Dangs Lab',
  openGraph: {
    title: '4 Key Blood Tests for Cardiac Health | Dr. Dangs Lab',
    description:
      'Gain deeper insights into your heart health with these 4 key blood tests. Dr. Dangs Lab offers advanced cardiac diagnostics to help you stay ahead of heart issues.',
    url: 'https://www.drdangslab.com/4-key-blood-tests-for-cardiac-health',
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
    title: '4 Key Blood Tests for Cardiac Health | Dr. Dangs Lab',
    description:
      'Gain deeper insights into your heart health with these 4 key blood tests. Dr. Dangs Lab offers advanced cardiac diagnostics to help you stay ahead of heart issues.',
    images: [
      {
        url: '/DrdangsRedIcon.png',
        alt: 'Dr. Dangs Lab Logo',
      },
    ],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/4-key-blood-tests-for-cardiac-health',
  },
};

export default function CardiacHealthPage() {
  return <CardiacHealtha />;
}
