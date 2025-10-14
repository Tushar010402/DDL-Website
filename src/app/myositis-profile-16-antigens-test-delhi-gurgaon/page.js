import React from 'react';
import MyositisProfilePage from '../Components/MyositisProfile/MyositisProfile'; // Adjust path as needed

// ✅ Metadata for SEO (App Router)
export const metadata = {
  title: "Myositis Profile Test in Delhi and Gurgaon – Autoimmune Muscle Diagnosis",
  description: "Get an accurate Myositis Profile (16 Antigens) test at Dr. Dangs Lab Delhi/Gurgaon. Detect Dermatomyositis & Polymyositis early with trusted autoimmune testing.",
  keywords: "Myositis Profile Test, Myositis Autoantibody Test, Dermatomyositis Blood Test, Polymyositis Diagnosis Test, Autoimmune Muscle Disease Test Delhi, Myositis Test Gurgaon, Myositis Profile Lab Test Delhi NCR, Myositis Antibodies Test, Skeletal Muscle Autoimmune Test, Dr Dangs Lab, Myositis Test Cost, Myositis 16 Antigens Test, Muscle Disease Diagnosis, Inflammatory Muscle Disease Test, Myositis Screening Test Delhi, Myositis Test Price, Autoimmune Myositis Test, Muscle Weakness Test, Polymyositis Blood Test, Dermatomyositis Diagnosis, Myositis Panel Test",
  
  // Open Graph
  openGraph: {
    title: "Myositis Profile Test in Delhi and Gurgaon – Autoimmune Muscle Diagnosis",
    description: "Get an accurate Myositis Profile (16 Antigens) test at Dr. Dangs Lab Delhi/Gurgaon. Detect Dermatomyositis & Polymyositis early with trusted autoimmune testing.",
    url: "https://www.drdangslab.com/myositis-profile-16-antigens-test-delhi-gurgaon",
    siteName: "Dr. Dangs Lab",
    locale: "en_IN",
    type: "website",
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Myositis Profile Test in Delhi and Gurgaon – Autoimmune Muscle Diagnosis",
    description: "Get an accurate Myositis Profile (16 Antigens) test at Dr. Dangs Lab Delhi/Gurgaon. Detect Dermatomyositis & Polymyositis early with trusted autoimmune testing.",
    site: "@drdangslab",
  },
  
  // Additional Meta
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://www.drdangslab.com/myositis-profile-16-antigens-test-delhi-gurgaon",
  },
  
  // Author
  authors: [{ name: "Dr. Dangs Lab" }],
  
  // Other metadata
  category: "Healthcare",
  classification: "Medical Diagnostic Services",
};

// ✅ Main Page Component
export default function MyositisProfileTestPage() {
  const pageTitle = "Myositis Profile Test in Delhi and Gurgaon – Autoimmune Muscle Diagnosis";
  
  return <MyositisProfilePage pageTitle={pageTitle} />;
}