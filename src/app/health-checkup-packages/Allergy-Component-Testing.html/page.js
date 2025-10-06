// src/app/allergy-testing/page.js
import AllergyProfiles from '@/app/Components/TestProfiles/AllergyProfiles';

export const metadata = {
  title: 'Respiratory Allergy Test in Delhi & Gurgaon | CRD, Food & Blood Allergy Test',
  description: "Allergy & Intolerance Test at Dr. Dangs Lab in Delhi and Gurgaon. Book blood test for gluten allergy, CRD, food allergy, food intolerance and respiratory allergy test",
  keywords: "allergy test, food allergy, respiratory allergy, blood allergy test, gluten allergy test, allergy testing delhi, CRD test",
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/Allergy-Component-Testing.html',
  },
  openGraph: {
    title: 'Health Checkup Packages in Delhi & Gugraon | Full Body Checkup Prices',
    description: "Dr Dangs Lab provides wide range of Health Checkup Packages for men and women in Delhi & Gurugram. Book your test today at Dr. Dangs Lab.",
    url: 'https://www.drdangslab.com/',
    siteName: "Dr. Dangs Lab",
    images: [
      {
        url: '/DrdangsRedIcon.png',
        width: 200,
        height: 200,
        alt: 'Dr Dangs Lab Logo',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary',
    site: '@drdangslab.com',
    title: 'Health Checkup Packages in Delhi & Gugraon | Full Body Checkup Prices',
    description: 'Dr Dangs Lab provides wide range of Health Checkup Packages for men and women in Delhi & Gurugram. Book your test today at Dr. Dangs Lab.',
    images: ['/DrdangsRedIcon.png'],
  },
 
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: 'images/favicon.ico',
  }
};

export default function AllergyTestingPage() {
  return <AllergyProfiles />;
}