'use client';

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Homepage.module.css';

const ServicesSection = () => {
  const services = [
    {
      image: '/PhotosAndLogos/Home-Haematology.webp',
      title: 'Haematology',
      alt: 'Haematology Diagnostic centre in Gurgaon',
      link: '/Haematology'
    },
    {
      image: '/PhotosAndLogos/Home-Biochemistry.webp',
      title: 'Biochemistry',
      alt: 'Biochemistry Testing Lab in Delhi NCR',
      link: '/Biochemistry'
    },
    {
      image: '/PhotosAndLogos/Home-Bacteriophage-Senstivity-Testing.webp',
      title: 'Bacteriophage Sensitivity Testing',
      alt: 'Bacteriophage Sensitivity Test in New Delhi & Gurgaon',
      link: '/ClinicalPathology'
    },
    {
      image: '/PhotosAndLogos/Home-Microbiology.webp',
      title: 'Microbiology',
      alt: 'Microbiology labs in South Delhi & Gurgaon',
      link: '/Microbiology'
    },
    {
      image: '/PhotosAndLogos/Home-Allergy-Intolerance.webp',
      title: 'Allergy & Intolerance',
      alt: 'Allergy Intolerance test in Delhi & Gurgaon',
      link: '/AllergyWeb'
    },
    {
      image: '/PhotosAndLogos/HomeHistocytopathology.JPG',
      title: 'Histocytopathology',
      alt: 'Histopathology Test Lab in Delhi & Gurgaon',
      link: '/Histocytopathology'
    },
    {
      image: '/PhotosAndLogos/Home-Molecular-Biology.webp',
      title: 'Molecular Biology',
      alt: 'Molecular Biology Laboratory in New Delhi and Gurugram',
      link: '/MolecularBiology'
    },
    {
      image: '/PhotosAndLogos/Home-Flow-Cytometry.webp',
      title: 'Flow Cytometry',
      alt: 'Best Flow Cytometry Testing Centres in Gurgaon and south Delhi',
      link: '/FlowCytometry'
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: 'start',
    dragFree: false,
    containScroll: 'trimSnaps'
  });

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <section className="py-10" id={styles.OurServiceAs}>
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8">OUR SERVICES</h3>
        <div className="overflow-hidden" ref={emblaRef} id={styles.OurServiceMobile}>
          <div className="flex -ml-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full pl-4 sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <Link href={service.link} passHref legacyBehavior>
                  <a className={styles.serviceLink}>
                    <div className="relative h-[450px]" id={styles.OurServiceImages}>
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        className="object-cover rounded-lg"
                      />
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center"
                        id={styles.BelowTextsOurServices}
                      >
                        {service.title}
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;