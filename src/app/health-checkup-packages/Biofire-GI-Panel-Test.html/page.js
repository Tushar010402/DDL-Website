import BioFire from '@/app/Components/BioFire/BioFire';

export const metadata = {
  title: 'Biofire GI Panel Test in Delhi & Gurgaon | Gastrointestinal | Intestinal Infection',
  description: 'We at Dr Dangs Lab offers BioFire Gastrointestinal Panel test in Delhi and Gurgaon. BioFire Gastrointestinal Panel is a diagnostic tool designed to quickly and accurately identify the cause of gastrointestinal infections.',
  openGraph: {
    title: 'Biofire GI Panel Test in Delhi & Gurgaon | Gastrointestinal | Intestinal Infection',
    description: 'We at Dr Dangs Lab offers BioFire Gastrointestinal Panel test in Delhi and Gurgaon. BioFire Gastrointestinal Panel is a diagnostic tool designed to quickly and accurately identify the cause of gastrointestinal infections.',
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
    title: 'Biofire GI Panel Test in Delhi & Gurgaon | Gastrointestinal | Intestinal Infection',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: [{
      url: '/DrdangsRedIcon.png',
      alt: 'Dr. Dangs Lab Logo',
    }],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/Biofire-GI-Panel-Test.html'
  }
};

export default function BioFirePage() {
  return <BioFire />;
}