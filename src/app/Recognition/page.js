import Recognition from '@/app/Components/Recognition/Recognition';

export const metadata = {
  title: 'Recognized Labs | ICMR approved lab in Delhi | Dr Dangs Lab',
  description: 'Dr.Dangs Lab is the first lab in India to be awarded NABL 1S0 15189 Certificate for Quality Systems and Competence and FICCI Health Care Excellence Award 2010.',
  keywords: 'Recognized Labs in Delhi, ICMR approved lab in Delhi, approved labs.',
  openGraph: {
    title: 'Recognized Labs | ICMR approved lab in Delhi | Dr Dangs Lab',
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
    title: 'Recognized Labs | ICMR approved lab in Delhi | Dr Dangs Lab',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: [{
      url: '/DrdangsRedIcon.png',
      alt: 'Dr. Dangs Lab Logo',
    }],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/Recognition'
  }
};

export default function RecognitionPage() {
  return <Recognition />;
}