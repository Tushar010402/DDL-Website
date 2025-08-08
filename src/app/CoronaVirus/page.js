import CoronaVirus from '@/app/Components/CoronaVirus/CoronaVirus';

export const metadata = {
  title: 'Coronavirus Disease | Coronavirus statistics | Dr Dangs Lab',
  description: 'Dangs Lab Health Advisory on CoronaVirus,COVID-19.Latest news. Remedies,Precautions,Care&Symptoms. Coronavirus in India. Transmission of Coronavirus',
  keywords: 'coronavirus, coronavirus disease, covid 19, coronavirus in India, coronavirus statistics',
  openGraph: {
    title: 'Coronavirus Disease | Coronavirus statistics | Dr Dangs Lab',
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
    title: 'Coronavirus Disease | Coronavirus statistics | Dr Dangs Lab',
    description: "Dr.Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: [{
      url: '/DrdangsRedIcon.png',
      alt: 'Dr. Dangs Lab Logo',
    }],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/CoronaVirus'
  }
};

export default function CoronaVirusPage() {
  return <CoronaVirus />;
}