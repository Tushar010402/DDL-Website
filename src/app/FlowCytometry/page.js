import FlowCytometry from '@/app/Components/Services/FlowCytometry/FlowCytometry';

export const metadata = {
  title: 'HLA B-27, Flow Cytometry Diagnostic Test in Delhi & Gurgaon| Dr Dangs Lab',
  description: 'Dr Dangs Lab provides Flow Cytometry Diagnostic Test in Delhi & Gurgaon. Flow Cytometry test used to detect and measure physical and chemical characteristics of a population of cells or particles.',
  keywords: 'flow cytometry labs, flow cytometry lab in Delhi, Flow Cytometry Diagnostic Test, Flow Cytometry Diagnostic Test in Delhi',
  openGraph: {
    title: 'HLA B-27, Flow Cytometry Diagnostic Test in Delhi & Gurgaon| Dr Dangs Lab',
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
    title: 'HLA B-27, Flow Cytometry Diagnostic Test in Delhi & Gurgaon| Dr Dangs Lab',
    description: "Dr.Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: [{
      url: '/DrdangsRedIcon.png',
      alt: 'Dr. Dangs Lab Logo',
    }],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/FlowCytometry'
  }
};

export default function FlowCytometryPage() {
  return <FlowCytometry />;
}