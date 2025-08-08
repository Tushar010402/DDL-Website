import TermAndConditions from '@/app/Components/TermAndConditions/TermAndConditions';

export const metadata = {
  title: 'Terms and Conditions | Privacy Policy | FAQs | Dr Dangs Lab',
  description: 'DrDangs Labs boasts about its Privacy Policy.Know more about us by going through our FAQs,Terms & Conditions,Payments and Refund Policy,Security and Liabilities',
  keywords: 'Privacy Policy, terms and conditions, FAQs',
  openGraph: {
    title: 'Terms and Conditions | Privacy Policy | FAQs | Dr Dangs Lab',
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
    title: 'Terms and Conditions | Privacy Policy | FAQs | Dr Dangs Lab',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: [{
      url: '/DrdangsRedIcon.png',
      alt: 'Dr. Dangs Lab Logo',
    }],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/TermAndConditions'
  }
};

export default function TermsAndConditionsPage() {
  return <TermAndConditions />;
}