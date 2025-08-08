export const metadata = {
  title: 'Home Collection | Sample Collection at Home | Dangs Lab',
  description: 'Looking for the best blood testing lab near you in Delhi/NCR, Dr. Dangs Pathology Lab is at your service. Sample Collection facility at the comfort of your Home',
  keywords: 'Home Collection, sample collection at home, book lab tests at home, blood test at home',
  metadataBase: new URL('https://www.drdangslab.com'),
  alternates: {
    canonical: 'https://www.drdangslab.com/HomeCollection',
  },
  openGraph: {
    title: "Dr.Dangs Lab | Best Path Lab | Diagnostic Centre in New Delhi",
    siteName: "Dr. Dangs Lab",
    url: 'https://drdangslab.com/',
    description: "Dr.Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    type: 'website',
    images: [{
      url: '/DrdangsRedIcon.png',
    }],
  },
  twitter: {
    card: 'summary',
    site: '@drdangslab.com',
    title: 'Dr. Dangs Lab | Best Path Lab | Diagnostic Centre in New Delhi',
    description: "Dr. Dangs lab's expert team consists of highly qualified and experienced Pathologists, Microbiologists, and Biochemists in the field of diagnostics.",
    images: ['/DrdangsRedIcon.png'],
  },
 
  other: {
    "application-ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Dr. Dangs Lab",
      "image": "https://www.drdangslab.com/DrdangsRedIcon.png",
      "@id": "https://www.drdangslab.com/DrdangsRedIcon.png",
      "url": "https://www.drdangslab.com/",
      "telephone": "+91-9999992020",
      "priceRange": "$$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C2/1, S.D.A. Aurobindo Marg Next to Aurobindo Market",
        "addressLocality": "New Delhi",
        "postalCode": "110016",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.5501371,
        "longitude": 77.2012616
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "07:30",
        "closes": "19:00"
      },
      "sameAs": [
        "https://www.facebook.com/DrDangsLab/",
        "https://twitter.com/drdangslab",
        "https://www.youtube.com/channel/UCt-iw59KbbSVMRNdzQsorTg",
        "https://www.slideshare.net/drdangslab",
        "https://in.pinterest.com/drdangslab/?autologin=true",
        "https://www.drdangslab.com/"
      ]
    })
  }
};

import HomeCollection from '@/app/Components/HomeCollection/HomeCollection';

export default function HomeCollectionPage() {
  return <HomeCollection />;
}