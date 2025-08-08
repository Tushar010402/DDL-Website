import News from '@/app/Components/News/News';

export const metadata = {
  title: 'Dangs lab News | Dr. Navin Dang | Dr. Arjun Dang | Dangs Lab',
  description: 'Dr. Dangs Lab recent News. Latest Press Release covering Dangs Lab. Media Coverage. Dr Navin Dang interview - NDTV, e-Hindustan times.',
  keywords: 'Dangs lab News, Dr. Navin Dang news, Dr. Arjun Dang news',
  openGraph: {
    title: 'Dangs lab News | Dr. Navin Dang | Dr. Arjun Dang | Dangs Lab',
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
    title: 'Dangs lab News | Dr. Navin Dang | Dr. Arjun Dang | Dangs Lab',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: [{
      url: '/DrdangsRedIcon.png',
      alt: 'Dr. Dangs Lab Logo',
    }],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/News'
  }
};

export default function NewsPage() {
  return <News />;
}