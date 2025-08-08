// src/app/acne-pimples-test/page.js
import AcneProfile from '@/app/Components/TestProfiles/AcneProfile';

export const metadata = {
  title: 'Acne Test Lab in Delhi & Gugraon | Pimples Test in Delhi NCR',
  description: "Dr. Dang's Lab offers a variety of acne tests for men and women in Delhi & Gurugram Lab. Book your Pimples test today at Dr. Dangs Lab.",
  openGraph: {
    title: 'Health Checkup Packages in Delhi & Gugraon | Full Body Checkup Prices',
    description: "Dr. Dang's Lab offers a variety of acne tests for men and women in Delhi & Gurugram Lab. Book your Pimples test today at Dr. Dangs Lab",
    url: 'https://drdangslab.com/',
    siteName: "Dr. Dangs Lab",
    images: [
      {
        url: '/DrdangsRedIcon.png',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    site: '@drdangslab.com',
    title: 'Health Checkup Packages in Delhi & Gugraon | Full Body Checkup Prices',
    description: 'Dr Dangs Lab provides wide range of Health Checkup Packages for men and women inDelhi & Gurugram. Book your test today at Dr. Dangs Lab.',
    images: ['/DrdangsRedIcon.png'],
  },
};

export default function AcnePage() {
  return <AcneProfile />;
}