import React from 'react';
import CMVDNAViralLoadTest from '../Components/CytomegalovirusTest/CytomegalovirusTest'; // Adjust path as needed

// ✅ Metadata for SEO (App Router)
export const metadata = {
  title: "Accurate CMV DNA Viral Load RT-PCR Test – Delhi & Gurgaon",
  description: "Get an accurate CMV DNA Quantitative/Viral Load RT-PCR Test at Dr. Dangs Lab, Delhi/Gurgaon. Early detection & monitoring for transplant & immunocompromised patients.",
  keywords: "CMV DNA Viral Load Test, Cytomegalovirus RT-PCR Test Delhi, CMV PCR Test Gurgaon, CMV Quantitative Test Delhi NCR, CMV Infection Monitoring, CMV Viral Load Blood Test, CMV PCR Blood Test, Post-Transplant CMV Test, Congenital CMV Detection, Dr. Dangs Lab CMV Test",
  
  // Open Graph
  openGraph: {
    title: "Accurate CMV DNA Viral Load RT-PCR Test – Delhi & Gurgaon",
    description: "Get an accurate CMV DNA Quantitative/Viral Load RT-PCR Test at Dr. Dangs Lab, Delhi/Gurgaon. Early detection & monitoring for transplant & immunocompromised patients.",
    url: "https://www.drdangslab.com/cmv-dna-viral-load-rt-pcr-test-delhi-gurgaon",
    siteName: "Dr. Dangs Lab",
    locale: "en_IN",
    type: "website",
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Accurate CMV DNA Viral Load RT-PCR Test – Delhi & Gurgaon",
    description: "Get an accurate CMV DNA Quantitative/Viral Load RT-PCR Test at Dr. Dangs Lab, Delhi/Gurgaon. Early detection & monitoring for transplant & immunocompromised patients.",
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
    canonical: "https://www.drdangslab.com/cmv-dna-viral-load-rt-pcr-test-delhi-gurgaon",
  },
  
  // Author
  authors: [{ name: "Dr. Dangs Lab" }],
  
  // Other metadata
  category: "Healthcare",
  classification: "Medical Diagnostic Services",
};

// ✅ Main Page Component
export default function CMVDNAViralLoadTestPage() {
  const pageTitle = "Accurate CMV DNA Viral Load RT-PCR Test – Delhi & Gurgaon";
  
  return <CMVDNAViralLoadTest pageTitle={pageTitle} />;
}