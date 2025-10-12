import React from 'react';
import UrineIodineTestPage from '../Components/Urine-Iodine-(Spot)-Test/Urine-Iodine-Test';// Adjust path as needed

// ✅ Metadata for SEO (App Router)
export const metadata = {
  title: 'Urine Iodine Test Delhi and Gurgaon – Accurate Thyroid Check',
    description: 'Accurate Urine Iodine (Spot) Test at Dr. Dangs Lab. Detect iodine deficiency, monitor thyroid health, with fast home collection in Delhi & Gurgaon. ',
    keywords: ' Urine Iodine Test, Spot Urine Test, Thyroid Iodine Test, Iodine Deficiency Test, Iodine Level Test, Thyroid Health, Iodine Nutritional Status, Thyroid Function Test, Home Sample Collection.',
  
  // Open Graph
  openGraph: {
    title: "Urine Iodine Test Delhi and Gurgaon – Accurate Thyroid Check",
    description: "Accurate Urine Iodine (Spot) Test at Dr. Dangs Lab. Detect iodine deficiency, monitor thyroid health, with fast home collection in Delhi & Gurgaon.",
    url: "https://www.drdangslab.com/urine-iodine-test-delhi-gurgaon",
    siteName: "Dr. Dangs Lab",
    locale: "en_IN",
    type: "website",
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Urine Iodine (Spot) Test Delhi & Gurgaon",
    description: "Book Urine Iodine Spot Test at Dr. Dangs Lab. Accurate iodine deficiency testing for thyroid health. ₹3,500 | 7 Days TAT.",
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
    canonical: "https://www.drdangslab.com/urine-iodine-test-delhi-gurgaon",
  },
  
  // Author
  authors: [{ name: "Dr. Dangs Lab" }],
  
  // Other metadata
  category: "Healthcare",
  classification: "Medical Diagnostic Services",
};

// ✅ Main Page Component
export default function UrineIodineTestPageWrapper() {
  const pageTitle = "Urine Iodine Test Delhi and Gurgaon – Accurate Thyroid Check";
  
  return <UrineIodineTestPage pageTitle={pageTitle} />;
}