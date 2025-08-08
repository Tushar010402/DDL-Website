import SwineFlue from '@/app/Components/SwineFlue/SwineFlue';

export const metadata = {
  title: 'Swine Flu Test in Delhi & Gurgaon | H1N1 Testing Delhi | Dr Dangs Lab',
  description: 'Swine Flu Or Pig Flu is also known as H1N1 virus is a relatively new strain of an influenza virus. Book H1N1 Test in Gurugram, Noida & Delhi NCR',
  keywords: 'swine flu, swine flu testing in Delhi, H1N1 Flu test, swine flu influenza',
  openGraph: {
    title: 'Swine Flu Test in Delhi & Gurgaon | H1N1 Testing Delhi | Dr Dangs Lab',
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
    title: 'Swine Flu Test in Delhi & Gurgaon | H1N1 Testing Delhi | Dr Dangs Lab',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: [{
      url: '/DrdangsRedIcon.png',
      alt: 'Dr. Dangs Lab Logo',
    }],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/Swine-Flu-H1n1-Test.aspx'
  }
};

export default function SwineFluPage() {
  return <SwineFlue />;
}