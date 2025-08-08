export const metadata = {
    title: 'Pathology Services | Pathology Tests in Delhi | Dr Dangs Lab',
    description: 'Dangs Lab is an Automated Diagnostic Center with latest and most modern types of equipment providing all types of Pathology Services with Online Test Results.',
    keywords: 'Pathology Services, Pathology Tests in Delhi, Diagnostic Centres & Pathology Labs for Blood Test in Delhi, blood test near me',
    metadataBase: new URL('https://www.drdangslab.com'),
    alternates: {
      canonical: 'https://www.drdangslab.com/Services',
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
        "medicalSpecialty": [
          "Pathology Testing",
          "Diagnostic Services",
          "Laboratory Medicine"
        ],
        "availableService": [
          {
            "@type": "MedicalTest",
            "name": "Blood Tests",
            "description": "Comprehensive blood testing services"
          },
          {
            "@type": "MedicalTest",
            "name": "Pathology Services",
            "description": "Full range of pathology testing"
          },
          {
            "@type": "MedicalTest",
            "name": "Diagnostic Testing",
            "description": "Advanced diagnostic services"
          }
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
  
  import Services from '@/app/Components/Services/Services';
  
  export default function ServicesPage() {
    return <Services />;
  }