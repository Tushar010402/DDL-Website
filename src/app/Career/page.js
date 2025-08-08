import Career from '@/app/Components/Career/Career';

export const metadata = {
  title: 'Career with Dangs lab | Job opportunities | Dr Dangs Lab',
  description: 'Dr. Dangs Lab welcomes and encourages application from every individual trained in various fields of lab medicine.',
  keywords: 'Career with Dangs lab, Job opportunities at Dr Dangs Lab, work at dangs lab, apply at dangs lab',
  openGraph: {
    title: 'Career with Dangs lab | Job opportunities | Dr Dangs Lab',
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
    title: 'Career with Dangs lab | Job opportunities | Dr Dangs Lab',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: [{
      url: '/DrdangsRedIcon.png',
      alt: 'Dr. Dangs Lab Logo',
    }],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/Career'
  }
};

export default function HomeCollectionPage() {
  return <Career />;
}