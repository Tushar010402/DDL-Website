import SpecializedTesting from '@/app/Components/Services/SpecializedTesting/SpecializedTesting';

export const metadata = {
  title: 'Specialized Testing for Hospitals & Healthcare | Dangs Lab',
  description: 'Fully automated allergy & food intolerance testing by state of the art equipment with allergens most suited to our population base',
  openGraph: {
    title: 'Specialized Testing for Hospitals & Healthcare | Dangs Lab',
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
    title: 'Specialized Testing for Hospitals & Healthcare | Dangs Lab',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: [{
      url: '/DrdangsRedIcon.png',
      alt: 'Dr. Dangs Lab Logo',
    }],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/SpecializedTesting'
  }
};

export default function SpecializedTestingPage() {
  return <SpecializedTesting />;
}