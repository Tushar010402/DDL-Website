import Microbiology from '@/app/Components/Services/Microbiology/Microbiology';

export const metadata = {
  title: 'Microbiology Testing Laboratories Delhi & Gurgaon | Clinical Microbiology Lab',
  description: 'Dr. Dangs Lab is NABL approved best Microbiology Testing Lab  in Delhi & Gurugram with over 38 years of experience. We test for bacteria, virus, parasite, fungi. Clinical, food, water, pharmaceutical',
  keywords: 'microbiology laboratories Delhi, Microbiology Testing Labs In Delhi, Clinical Microbiology Testing, Serology Lab Tests',
  openGraph: {
    title: 'Microbiology Testing Laboratories Delhi & Gurgaon | Clinical Microbiology Lab',
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
    title: 'Microbiology Testing Laboratories Delhi & Gurgaon | Clinical Microbiology Lab',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: [{
      url: '/DrdangsRedIcon.png',
      alt: 'Dr. Dangs Lab Logo',
    }],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/Microbiology'
  }
};

export default function MicrobiologyPage() {
  return <Microbiology />;
}