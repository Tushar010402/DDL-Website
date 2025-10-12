import React from 'react';
import CMVDNAViralLoadTest from '../Components/CytomegalovirusTest/CytomegalovirusTest'; // Adjust path as needed

// ✅ Metadata for SEO (App Router)
export const metadata = {
  title: "CMV DNA Viral Load Test Delhi & Gurgaon – RT-PCR Quantitative",
  description: "Get an accurate CMV DNA Quantitative/Viral Load RT-PCR Test at Dr. Dangs Lab, Delhi/Gurgaon. Early detection & monitoring for transplant & immunocompromised patients.",
  keywords: "CMV DNA Viral Load Test, Cytomegalovirus RT-PCR Test Delhi, CMV PCR Test Gurgaon, CMV Quantitative Test Delhi NCR, CMV Infection Monitoring, CMV Viral Load Blood Test, CMV PCR Blood Test, Post-Transplant CMV Test, Congenital CMV Detection, Dr. Dangs Lab CMV Test",
  
  // Open Graph
  openGraph: {
    title: "CMV DNA Viral Load Test Delhi & Gurgaon – RT-PCR Quantitative",
    description: "Get an accurate CMV DNA Quantitative/Viral Load RT-PCR Test at Dr. Dangs Lab, Delhi/Gurgaon. Early detection & monitoring for transplant & immunocompromised patients.",
    url: "https://www.drdangslab.com/cmv-dna-viral-load-test-delhi-gurgaon",
    siteName: "Dr. Dangs Lab",
    locale: "en_IN",
    type: "website",
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "CMV DNA Viral Load Test Delhi & Gurgaon – RT-PCR Quantitative",
    description: "Get accurate CMV DNA Quantitative Test at Dr. Dangs Lab. Early detection & monitoring. Cost: ₹9,900.",
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
    canonical: "https://www.drdangslab.com/cmv-dna-viral-load-test-delhi-gurgaon",
  },
  
  // Author
  authors: [{ name: "Dr. Dangs Lab" }],
  
  // Other metadata
  category: "Healthcare",
  classification: "Medical Diagnostic Services",
};

// ✅ Main Page Component
export default function CMVDNAViralLoadTestPage() {
  const pageTitle = "CMV DNA Viral Load Test Delhi & Gurgaon – RT-PCR Quantitative | Dr. Dangs Lab";
  
  return <CMVDNAViralLoadTest pageTitle={pageTitle} />;
}