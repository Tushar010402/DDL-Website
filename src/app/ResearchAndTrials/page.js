import ResearchAndTrials from '@/app/Components/ResearchAndTrials/ResearchAndTrials';

export const metadata = {
  title: 'Research and Trials | Clinical Trials | Dr. Dangs Lab',
  description: 'Dr. Dangs Lab - Research is creating new knowledge. Dr Dangs Lab offers customized, high-quality central laboratory services.',
  keywords: 'Research and Trials, Clinical Trials, clinical research studies',
  openGraph: {
    title: 'Research and Trials | Clinical Trials | Dr. Dangs Lab',
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
    title: 'Research and Trials | Clinical Trials | Dr. Dangs Lab',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: [{
      url: '/DrdangsRedIcon.png',
      alt: 'Dr. Dangs Lab Logo',
    }],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/ResearchAndTrials'
  }
};

export default function ResearchAndTrialsPage() {
  return <ResearchAndTrials />;
}