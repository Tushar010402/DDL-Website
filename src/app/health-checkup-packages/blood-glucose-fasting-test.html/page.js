import BloodGlucoseTest from '@/app/Components/BloodGlucoseTest/BloodGlucoseTest';

export const metadata = {
  title: 'Blood Sugar Test in Delhi NCR, Fasting Blood Glucose Test in Gurgaon, Delhi NCR',
  description: 'Blood Glucose test measures the amount of glucose in your blood. We at Dr Dangs Lab provides Blood Sugar Test in Delhi and Gurgaon centre.',
  openGraph: {
    title: 'Blood Sugar Test in Delhi NCR, Fasting Blood Glucose Test in Gurgaon, Delhi NCR',
    description: 'Blood Glucose test measures the amount of glucose in your blood. We at Dr Dangs Lab provides Blood Sugar Test in Delhi and Gurgaon centre.',
    url: 'https://drdangslab.com/health-checkup-packages/blood-glucose-fasting-test.html',
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
    title: 'Blood Sugar Test in Delhi NCR, Fasting Blood Glucose Test in Gurgaon, Delhi NCR',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: [{
      url: '/DrdangsRedIcon.png',
      alt: 'Dr. Dangs Lab Logo',
    }],
    site: '@drdangslab',
  },
  alternates: {
    canonical: 'https://www.drdangslab.com/health-checkup-packages/blood-glucose-fasting-test.html'
  }
};

export default function BloodGlucoseTestPage() {
  return <BloodGlucoseTest />;
}