export const metadata = {
    title: 'Allergy Test | Best lab for food Allergy Testing | Dangs Lab',
    description: 'Allergy & Intolerance is the estimation of the concentration of specific antibodies in the blood that are elevated due to exposure to allergens.',
    keywords: 'allergy test, food allergy test in Delhi, testing for food allergies, food allergy test at home, blood test for alllergy, complete allergy test',
    metadataBase: new URL('https://www.drdangslab.com'),
    alternates: {
      canonical: '/',
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
        "@type": "MedicalTest",
        "name": "Allergy Testing Services - Dr. Dangs Lab",
        "image": "https://www.drdangslab.com/DrdangsRedIcon.png",
        "@id": "https://www.drdangslab.com/DrdangsRedIcon.png",
        "url": "https://www.drdangslab.com/",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Dr. Dangs Lab",
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
        }
      })
    }
  };
  
  import AllergyWeb from '@/app/Components/AllergyWeb/AllergyWeb';
  
  export default function AllergyPage() {
    return <AllergyWeb />;
  }