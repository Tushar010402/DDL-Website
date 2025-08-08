import MolecularBiology from '@/app/Components/Services/MolecularBiology/MolecularBiology';

export const metadata = {
  title: 'Molecular Biology Laboratory in Delhi | Dr. Dangs Lab',
  description: 'Dr Dangs Lab provides a variety of molecular diagnostics tests that utilize molecular biology techniques for genetic, microbiological and oncological analysis',
  keywords: 'molecular biology laboratory, molecular biology laboratory tasts, molecular biology lab tests in Delhi',
  openGraph: {
    title: 'Molecular Biology Laboratory in Delhi | Dr. Dangs Lab',
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
    title: 'Molecular Biology Laboratory in Delhi | Dr. Dangs Lab',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: [{
      url: '/DrdangsRedIcon.png',
      alt: 'Dr. Dangs Lab Logo',
    }],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/MolecularBiology'
  }
};

export default function MolecularBiologyPage() {
  return <MolecularBiology />;
}