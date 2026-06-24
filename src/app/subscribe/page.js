import SubscribePage from '@/app/Components/Subscribe/Subscribe';

export const metadata = {
  title: 'Subscribe to Health Updates | Dr. Dangs Lab',
  description: 'Stay informed with the latest health tips, lab updates, and wellness news from Dr. Dangs Lab. Subscribe to our newsletter — free for patients and physicians.',
  keywords: 'Dr Dangs Lab newsletter, health updates, lab results, wellness tips, subscribe Dr Dangs',
  openGraph: {
    title: 'Subscribe to Health Updates | Dr. Dangs Lab',
    description: 'Get expert health tips and lab updates delivered to your inbox. Free for patients and physicians.',
    url: 'https://www.drdangslab.com/subscribe',
    siteName: 'Dr. Dangs Lab',
    images: [{ url: '/DrdangsRedIcon.png', width: 200, height: 200, alt: 'Dr. Dangs Lab' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Subscribe to Health Updates | Dr. Dangs Lab',
    description: 'Get expert health tips and lab updates delivered to your inbox.',
    images: [{ url: '/DrdangsRedIcon.png', alt: 'Dr. Dangs Lab' }],
  },
  alternates: { canonical: 'https://www.drdangslab.com/subscribe' },
};

export default function Page() {
  return <SubscribePage />;
}
