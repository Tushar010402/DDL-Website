import React from 'react';
import MyositisProfilePage from '../Components/MyositisProfile/MyositisProfile'; // Adjust path as needed

// ✅ Metadata for SEO (App Router)
export const metadata = {
  title: "Myositis Profile Test Delhi and Gurgaon – Autoimmune Muscle Diagnosis",
  description: "Get comprehensive Myositis Profile (16 Antigens) test at Dr. Dangs Lab Delhi NCR. Advanced diagnostic test for Dermatomyositis, Polymyositis & autoimmune muscle diseases. Home collection available. Cost: ₹15,900. Book now at 9999992020.",
  keywords: "Myositis Profile Test, Myositis Autoantibody Test, Dermatomyositis Blood Test, Polymyositis Diagnosis Test, Autoimmune Muscle Disease Test Delhi, Myositis Test Gurgaon, Myositis Profile Lab Test Delhi NCR, Myositis Antibodies Test, Skeletal Muscle Autoimmune Test, Dr Dangs Lab, Myositis Test Cost, Myositis 16 Antigens Test, Muscle Disease Diagnosis, Inflammatory Muscle Disease Test, Myositis Screening Test Delhi, Myositis Test Price, Autoimmune Myositis Test, Muscle Weakness Test, Polymyositis Blood Test, Dermatomyositis Diagnosis, Myositis Panel Test",
  
  // Open Graph
  openGraph: {
    title: "Myositis Profile (16 Antigens) Test in Delhi NCR | Dr. Dangs Lab",
    description: "Get comprehensive Myositis Profile test for autoimmune muscle diseases. Home collection available. Cost: ₹15,900. Book now!",
    url: "https://www.drdangslab.com/myositis-profile-16-antigens-test-delhi-gurgaon",
    siteName: "Dr. Dangs Lab",
    locale: "en_IN",
    type: "website",
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Myositis Profile (16 Antigens) Test - Dr. Dangs Lab",
    description: "Advanced diagnostic test for Dermatomyositis & Polymyositis. Book now at ₹15,900.",
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
  const pageTitle = "Myositis Profile (16 Antigens) Test in Delhi NCR | Autoimmune Muscle Disease Test - Dr. Dangs Lab";
  
  return <MyositisProfilePage pageTitle={pageTitle} />;
}