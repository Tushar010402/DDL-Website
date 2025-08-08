import ClinicalPathology from '@/app/Components/Services/ClinicalPathology/ClinicalPathology';

export const metadata = {
  title: 'Clinical Pathology in Delhi & Gurgaon | Medical Testing Lab | Dr. Dangs Lab',
  description: 'Dr. Dangs Lab is a Delhi & Gurugram based leading Medical Testing Lab. At Dangs Lab we test Malaria, Rotavirus, Semen, Urine, Protein, Antibodies EBV and more',
  keywords: 'clinical pathology, clinical pathology tests, Medical Testing Lab, lab for clinical pathology in Delhi',
  openGraph: {
    title: 'Clinical Pathology in Delhi & Gurgaon | Medical Testing Lab | Dr. Dangs Lab',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
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
    title: 'Clinical Pathology in Delhi & Gurgaon | Medical Testing Lab | Dr. Dangs Lab',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: [{
      url: '/DrdangsRedIcon.png',
      alt: 'Dr. Dangs Lab Logo',
    }],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/ClinicalPathology'
  }
};

export default function HomeCollectionPage() {
  return <ClinicalPathology />;
}