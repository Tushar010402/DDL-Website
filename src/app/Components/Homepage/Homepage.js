'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Homepage.module.css';
import OurService from './OurService';
import BelowOurPromise from './BelowOurPromise';
import LabImagesSection from './LabImagesSection';
import HomeCollection from './HomeCollection';
import HomePageTestimonials from './HomePageTestimonials';
import VideoSection from './VideoSection';
import ServicesSection from './ServicesSection';
import Counter from './Counter';

const HomePage = () => {
  const [showCounter, setShowCounter] = useState(false);
  const qualityRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCounter(true);
        }
      },
      {
        threshold: 0.8,
      }
    );

    if (qualityRef.current) {
      observer.observe(qualityRef.current);
    }

    return () => {
      if (qualityRef.current) {
        observer.unobserve(qualityRef.current);
      }
    };
  }, []);

  return (
    <>
      <main className="min-h-screen" id={styles.HomePageMainDivforbackground}>
        <div className="relative">
          {/* Banner Section */}
          <div className="relative w-full h-[90vh]">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="/PhotosAndLogos/bannerFormobile.webp"
              />
              <source
                media="(min-width: 769px)"
                srcSet="/PhotosAndLogos/DDL-FRONT.jpg"
              />
              <Image
                src="/PhotosAndLogos/MainBanner.JPG"
                alt="Dr. Dangs Pathology Lab in Delhi"
                priority
                fill
                className={`object-cover ${styles.bannerImage}`}
                sizes="100vw"
              />
            </picture>
          </div>

          {/* Quality Diagnostics Section */}
          <section className="py-10" ref={qualityRef}>
            <div className="container mx-auto px-4" id={styles.QualityDiagnosticsDiv}>
              <h1 className="text-[4rem] font-bold text-center mb-8 leading-[5rem]">
                Quintessential Quality Diagnostics
              </h1>

              {/* Stats Section */}
              <div className="flex flex-row items-center justify-center gap-x-0.5 mb-12">
                <div className="text-center p-6">
                  <h2 className="text-3xl font-bold" id={styles.NableforDark}>NABL</h2>
                  <p id={styles.NableforDark1}>Accredited since 2001</p>
                </div>

                <hr className={styles.customhr} />

                <div className="text-center p-6">
                  <h2 className="text-3xl font-bold" id={styles.NableforDark}>
                    {showCounter ? <Counter target={41} /> : 0}
                  </h2>
                  <p id={styles.NableforDark1}>Years of Service</p>
                </div>

                <hr className={styles.customhr} />

                <div className="text-center p-6">
                  <h2 className="text-3xl font-bold" id={styles.NableforDark}>FICCI</h2>
                  <p id={styles.NableforDark1}>Recognized in Patient Care</p>
                </div>
              </div>
            </div>
          </section>

          {/* Doctors Section */}
          <section>
            <div className={styles.NABLLogoAndDrsImageMainDivHomepage}>
              <div className={styles.NablLogoNDrsImagesHomePage}>
                <div className={styles.DrsOnlyImageHomePageNABL1}>
                  <Image
                    src="/PhotosAndLogos/MAINPAGESQUADIMAGE.JPG"
                    alt="Doctors"
                    fill
                    className={styles.discoverimageIcon}
                  />
                </div>
                <div className={styles.NABLlogoOnHomePage}>
                  <Image
                    src="/PhotosAndLogos/DiscoverImageHomePage.webp"
                    alt="Discover"
                    fill
                    className={styles.discoverimageIcon}
                  />
                </div>
              </div>

              <div className={styles.ContentsOFNABLHomePage}>
                <div className={styles.NABLESECONDARYCONTENT}>
                  <h2>Best Pathology Lab & Diagnostic Centre in Delhi NCR</h2>
                  <h4>Discover A New Era Of Personalized Testing</h4>
                  <p>
                    Customized health profiles tailored to your goals, lifestyle & history, backed by science.
                  </p>
                  <div className={styles.HomePageNABLBotton}>
                    <a href="https://discoverbydrdangs.com/">FREE HEALTH ASSESSMENT</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <ServicesSection />

          {/* Video Section */}
          <VideoSection />
        </div>
      </main>

      <OurService />
      <BelowOurPromise />
      <LabImagesSection />
      <HomeCollection />
      <HomePageTestimonials />
    </>
  );
};

export default HomePage;
