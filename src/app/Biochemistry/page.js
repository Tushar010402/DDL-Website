import Biochemistry from '@/app/Components/Services/Biochemistry/Biochemistry';

export const metadata = {
  title: 'Biochemistry - Dr. Dangs Lab',
  description: 'Biochemistry testing Biochemistry at Dr. Dangs Lab. Comprehensive testing for food allergies, respiratory allergies, and more.',
  keywords: 'Clinical Biochemistry, best lab for biochemistry in Delhi, biochemistry tests, biochemistry testing lab in Delhi',
  openGraph: {
    title: 'Biochemistry Testing Lab in Delhi | Clinical Biochemistry Gurgaon',
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
    title: 'Biochemistry Testing Lab in Delhi | Clinical Biochemistry Gurgaon',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: [{
      url: '/DrdangsRedIcon.png',
      alt: 'Dr. Dangs Lab Logo',
    }],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/Biochemistry'
  }
};

export default function HomeCollectionPage() {
  return <Biochemistry />;
}