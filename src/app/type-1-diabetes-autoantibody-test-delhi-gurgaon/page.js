import React from 'react';
import Type1DiabetesAntibodyPage from '../Components/Type-1-Diabetes-Autoantibody-Panel/Type-1-Diabetes-Autoantibody-Panel'; // Adjust path as needed
// ✅ Metadata for SEO (App Router)
export const metadata = {
  title: "Type 1 Diabetes Autoantibody Test Delhi & Gurgaon – Dr. Dangs Lab",
  description: "Book Type 1 Diabetes Autoantibody Panel at Dr. Dangs Lab, Delhi/Gurgaon. Detect IAA, ICA & GAD 65 early for accurate diagnosis and better diabetes care.",
  keywords: "Type 1 Diabetes Autoantibody Test, T1DM Autoantibody Panel Delhi, Insulin Antibodies Test, Islet Cell Antibodies Test, GAD 65 Antibodies Test, LADA Diagnosis Test, Autoimmune Diabetes Test Delhi NCR, Early Diabetes Detection Test Gurgaon, Dr. Dangs Lab Diabetes Test, Autoimmune Diabetes Screening",
  
  // Open Graph
  openGraph: {
    title: "Type 1 Diabetes Autoantibody Test Delhi & Gurgaon – Dr. Dangs Lab",
    description: "Book Type 1 Diabetes Autoantibody Panel at Dr. Dangs Lab, Delhi/Gurgaon. Detect IAA, ICA & GAD 65 early for accurate diagnosis and better diabetes care.",
    url: "https://www.drdangslab.com/type-1-diabetes-autoantibody-test-delhi-gurgaon",
    siteName: "Dr. Dangs Lab",
    locale: "en_IN",
    type: "website",
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Type 1 Diabetes Autoantibody Test Delhi & Gurgaon – Dr. Dangs Lab",
    description: "Book Type 1 Diabetes Autoantibody Panel at Dr. Dangs Lab, Delhi/Gurgaon. Detect IAA, ICA & GAD 65 early for accurate diagnosis and better diabetes care.",
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
    canonical: "https://www.drdangslab.com/type-1-diabetes-autoantibody-test-delhi-gurgaon",
  },
  
  // Author
  authors: [{ name: "Dr. Dangs Lab" }],
  
  // Other metadata
  category: "Healthcare",
  classification: "Medical Diagnostic Services",
};

// ✅ Main Page Component
export default function Type1DiabetesAntibodyTestPage() {
  const pageTitle = "Type 1 Diabetes Autoantibody Test Delhi & Gurgaon – Dr. Dangs Lab";
  
  return <Type1DiabetesAntibodyPage pageTitle={pageTitle} />;
}