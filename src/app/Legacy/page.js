export const metadata = {
    title: 'Trusted Path Lab in Delhi | Best lab Delhi | Dr. Dangs Lab',
    description: 'Dr.Dangs Lab is known to be one of the most trusted Quality-Based Diagnostic Lab in the country with an extremely high doctor to patient ratio.',
    keywords: 'trusted path lab in Delhi, best lab in south delhi, Best & Trusted Path Lab of South Delhi',
    metadataBase: new URL('https://www.drdangslab.com'),
    alternates: {
      canonical: 'https://www.drdangslab.com/Legacy',
    },
    openGraph: {
      title: "Dr.Dangs Lab | Best Path Lab | Diagnostic Centre in New Delhi",
      siteName: "Dr. Dangs Lab",
      url: 'https://www.drdangslab.com/',
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
    verification: {
      google: '-zaXZTD2xZIQtVF8l05uDtVDLV7UoBKGqzlIhXvX2ZM',
    },
    other: {
      "application-ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "Dr. Dangs Lab",
        "image": "https://www.drdangslab.com/DrdangsRedIcon.png",
        "@id": "https://www.drdangslab.com/DrdangsRedIcon.png",
        "url": "https://www.drdangslab.com/",
        "founder": {
          "@type": "Person",
          "name": "Dr. Dangs"
        },
        "foundingDate": "1983",
        "description": "One of the most trusted Quality-Based Diagnostic Lab in India with high doctor to patient ratio",
        "medicalSpecialty": [
          "Pathology",
          "Laboratory Medicine",
          "Diagnostic Medicine"
        ],
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
  
  import Legacy from '@/app/Components/Legacy/Legacy';
  
  export default function LegacyPage() {
    return <Legacy />;
  }