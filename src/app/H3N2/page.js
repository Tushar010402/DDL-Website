import H3N2 from '@/app/Components/H3N2/H3N2';

export const metadata = {
  title: 'H3N2 Test in Delhi, H3N2 Virus infection Test in Gurgaon, Delhi NCR',
  description: 'Dr.Dangs Lab offers H3N2 Virus infection Test in Delhi & Gurgaon. H3 N2 is a variant of Influenza A virus that is responsible for causing flu',
  openGraph: {
    title: 'H3N2 Test in Delhi, H3N2 Virus infection Test in Delhi & Gurgaon',
    description: 'Dr.Dangs Lab offers H3N2 Virus infection Test in Delhi & Gurgaon. • H3 N2 is a variant of Influenza A virus that is responsible for causing flu',
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
    title: 'H3N2 Test in Delhi, H3N2 Virus infection Test in Delhi & Gurgaon',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: [{
      url: '/DrdangsRedIcon.png',
      alt: 'Dr. Dangs Lab Logo',
    }],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/H3N2'
  }
};

export default function H3N2Page() {
  return <H3N2 />;
}