import DiscoverAllergynius from '@/app/Components/Discover-Your-Allergies-Early-with-Allergynius-Dx/Discover-Your-Allergies-Early-with-Allergynius-Dx';

export const metadata = {
  title: 'Allergynius Dx – Discover Your Allergies Early | Dr. Dangs Lab',
  description:
    'Unmask the mystery behind your allergies with Allergynius Dx, the revolutionary allergy testing service by Dr. Dangs Lab, designed to help you take charge of your health!',
  keywords:
    'allergynius dx, allergy testing, allergies, dr dangs lab, personalized allergy testing, advanced allergy diagnostics',
  openGraph: {
    title: 'Allergynius Dx – Discover Your Allergies Early | Dr. Dangs Lab',
    description:
      'Unmask the mystery behind your allergies with Allergynius Dx, the revolutionary allergy testing service by Dr. Dangs Lab, designed to help you take charge of your health!',
    url: 'https://www.drdangslab.com/Discover-Your-Allergies-Early-with-Allergynius-Dx',
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
    title: 'Allergynius Dx – Discover Your Allergies Early | Dr. Dangs Lab',
    description:
      'Unmask the mystery behind your allergies with Allergynius Dx, the revolutionary allergy testing service by Dr. Dangs Lab, designed to help you take charge of your health!',
    images: [
      {
        url: '/DrdangsRedIcon.png',
        alt: 'Dr. Dangs Lab Logo',
      },
    ],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/Discover-Your-Allergies-Early-with-Allergynius-Dx',
  },
};

export default function AllergyniusDxPage() {
  return <DiscoverAllergynius />;
}
