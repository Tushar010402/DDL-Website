import Histocytopathology from '@/app/Components/Services/Histocytopathology/Histocytopathology';

export const metadata = {
  title: 'Histocytopathology | Histopathology & Cytology Test Lab in Delhi & Gurgaon',
  description: 'Histopathology is the examination of tissues from the body microscopically to spot the signs and characteristics of disease done at Dangs Lab',
  keywords: 'histocytopathology, Histopathology and Cytology Laboratory',
  openGraph: {
    title: 'Histocytopathology | Histopathology & Cytology Test Lab in Delhi & Gurgaon',
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
    title: 'Histocytopathology | Histopathology & Cytology Test Lab in Delhi & Gurgaon',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: [{
      url: '/DrdangsRedIcon.png',
      alt: 'Dr. Dangs Lab Logo',
    }],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/Histocytopathology'
  }
};

export default function HistocytopathologyPage() {
  return <Histocytopathology />;
}