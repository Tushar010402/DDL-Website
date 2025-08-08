import BiofireRespiratory from '@/app/Components/BiofireRespiratory/BiofireRespiratory';

export const metadata = {
  title: 'Biofire Respiratory Panel 2.1 Test in Delhi & Gurgaon',
  description: 'Dr.Dangs Lab offers Biofire Respiratory Panel 2.1 Test in Delhi & Gurgaon. The BioFire Respiratory Panel is a diagnostic tool designed to quickly and accurately identify respiratory infections in patients.',
  openGraph: {
    title: 'Biofire Respiratory Panel 2.1 Test in Delhi & Gurgaon',
    description: 'The BioFire Respiratory Panel is a diagnostic tool designed to quickly and accurately identify respiratory infections in patients.',
    url: 'https://drdangslab.com/',
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
    title: 'Biofire Respiratory Panel 2.1 Test in Delhi & Gurgaon',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: [{
      url: '/DrdangsRedIcon.png',
      alt: 'Dr. Dangs Lab Logo',
    }],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/Biofire-Respiratory-2-Panel.html'
  }
};

export default function BiofireRespiratoryPage() {
  return <BiofireRespiratory />;
}