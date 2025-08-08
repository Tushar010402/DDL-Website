export const metadata = {
    title: 'Quality Assurance | NABL Certified Pathology Lab | Dangs Lab',
    description: 'Dr. Dangs Lab is dedicated to providing the highest degrees of service and quality results. ISO certified and NABL Accredited Lab.',
    keywords: 'quality assurance of Dangs Lab, NABL certified labs in Delhi, NABL Accredited Labs in Delhi, NABL accredited Labs Near me',
    metadataBase: new URL('https://www.drdangslab.com'),
    alternates: {
      canonical: 'https://www.drdangslab.com/QualityAssurance',
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
        "hasCredential": [
          {
            "@type": "Certification",
            "certificationNumber": "MC-2571",
            "issuingOrganization": "NABL",
            "validIn": "India"
          },
          {
            "@type": "Certification",
            "certificationNumber": "ISO 15189:2012",
            "issuingOrganization": "ISO",
            "validIn": "International"
          }
        ],
        "qualityAssurance": {
          "@type": "Text",
          "description": "Dedicated to providing the highest degrees of service and quality results through NABL accreditation and ISO certification"
        },
        "medicalSpecialty": [
          "Laboratory Medicine",
          "Quality Control",
          "Diagnostic Testing"
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
  
  import QualityAssurance from '@/app/Components/QualityAssurance/QualityAssurance';
  
  export default function QualityAssurancePage() {
    return <QualityAssurance />;
  }