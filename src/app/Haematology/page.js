import Haematology from '@/app/Components/Services/Haematology/Haematology';

export const metadata = {
  title: 'Haematology Lab Delhi | CBC Blood Test | Dr. Dangs Lab',
  description: 'Hematology - study of diseases and disorders affecting blood cells, production,and any organs/tissues involved in hematopoiesis. CBC blood test at Dangs Lab.',
  keywords: 'Haematology Lab in Delhi, CBC, Blood Test, Haemotology test reports, best lab for blood tests in Delhi',
  openGraph: {
    title: 'Haematology Lab Delhi | CBC Blood Test | Dr. Dangs Lab',
    description: "Dr.Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    url: 'https://www.drdangslab.com/',
    siteName: 'Dr. Dangs Lab',
    images: [{
      url: '/DrdangsRedIcon.png',
      width: 200,
      height: 200,
      alt: 'Dr. Dangs Lab Logo',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Haematology Lab Delhi | CBC Blood Test | Dr. Dangs Lab',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: [{
      url: '/DrdangsRedIcon.png',
      alt: 'Dr. Dangs Lab Logo',
    }],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/Haematology'
  }
};

export default function HaematologyPage() {
  return <Haematology />;
}