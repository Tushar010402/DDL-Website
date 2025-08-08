import Feedback from '@/app/Components/Feedback/Feedback';

export const metadata = {
  title: 'Feedback form for Dangs Lab | Reviews of Dangs Lab',
  description: 'Giving Feedback for Dr. Dangs Lab, the renowned Diagnostic Centre in Delhi/NCR and their Home Collection Services has been made easy and efficient.',
  keywords: 'feedback for dangs lab, reviews of dangs lab, feedback form for dangs lab, suggestions and feedback, suggestions and complaints',
  openGraph: {
    title: 'Feedback form for Dangs Lab | Reviews of Dangs Lab',
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
    title: 'Feedback form for Dangs Lab | Reviews of Dangs Lab',
    description: "Dr.Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: [{
      url: '/DrdangsRedIcon.png',
      alt: 'Dr. Dangs Lab Logo',
    }],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/Feedback'
  }
};

export default function FeedbackPage() {
  return <Feedback />;
}