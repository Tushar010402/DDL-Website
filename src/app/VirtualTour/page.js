export const metadata = {
    title: 'Dangs Lab Gallery | Virtual Tour of Dangs Lab | Gallery',
    description: 'Experts Team, Rich Ambience, Automated Machines, Globally approved Equipment & Methodology at Dr Dangs Lab. Also equipped with the comprehensive 1-in-all Filmarray',
    keywords: 'Dangs Lab Gallery, Virtual Tour of Dangs Lab, dangs lab photos, Dangs Lab interiors',
    metadataBase: new URL('https://www.drdangslab.com'),
    alternates: {
      canonical: 'https://www.drdangslab.com/VirtualTour',
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
        "description": "State-of-the-art diagnostic laboratory with advanced equipment and expert team",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Laboratory Facilities",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalDevice",
                "name": "Automated Testing Machines",
                "description": "Latest automated diagnostic equipment"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalDevice",
                "name": "Filmarray System",
                "description": "Comprehensive 1-in-all Filmarray testing system"
              }
            }
          ]
        },
        "photo": [
          {
            "@type": "Photograph",
            "name": "Laboratory Interior",
            "description": "Modern laboratory facilities and equipment"
          },
          {
            "@type": "Photograph",
            "name": "Testing Equipment",
            "description": "Advanced diagnostic machinery"
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
  
  import VirtualTour from '@/app/Components/VirtualTour/VirtualTour';
  
  export default function VirtualTourPage() {
    return <VirtualTour />;
  }