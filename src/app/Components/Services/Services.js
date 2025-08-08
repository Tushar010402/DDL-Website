// src/app/Components/Services/Services.js

"use client"; // Ensure this is a client component if using Next.js App Router

import React from 'react';
import styles from './Services.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Services = () => {
  return (
    <>
      <div className={styles.ServicesMainPagesMainBanner}>
        <div className={styles.ServicesMainPagesContentContainer}>
          <div className={styles.ServicesMainPagesLeftContent}>
            <h2>Our Services</h2>
            <p>Experience world-class diagnostic care</p>
          </div>
        </div>
      </div>

      {/* Services Navigation Section with Images */}
      <div className={styles.ServicesMainPagesNavigation}>
        <Link href="/Haematology" passHref legacyBehavior>
          <a className={styles.ServicesMainPagesLink}>
            <div className={styles.ServicesMainPagesLinkContent}>
              <Image
                src="/PhotosAndLogos/ServiceMain1.webp"
                alt="Haematology"
                width={300}
                height={200}
                className={styles.ServicesMainPagesImage}
              />
              <h3>Haematology</h3>
              <p>Advanced blood tests and analysis</p>
            </div>
          </a>
        </Link>
        <Link href="/Biochemistry" passHref legacyBehavior>
          <a className={styles.ServicesMainPagesLink}>
            <div className={styles.ServicesMainPagesLinkContent}>
              <Image
                src="/PhotosAndLogos/ServiceMain2.webp"
                alt="Biochemistry"
                width={300}
                height={200}
                className={styles.ServicesMainPagesImage}
              />
              <h3>Biochemistry</h3>
              <p>Comprehensive biochemical testing</p>
            </div>
          </a>
        </Link>
        <Link href="/ClinicalPathology" passHref legacyBehavior>
          <a className={styles.ServicesMainPagesLink}>
            <div className={styles.ServicesMainPagesLinkContent}>
              <Image
                src="/PhotosAndLogos/ServiceMain3.webp"
                alt="Clinical Pathology"
                width={300}
                height={200}
                className={styles.ServicesMainPagesImage}
              />
              <h3>Clinical Pathology</h3>
              <p>Accurate pathology results</p>
            </div>
          </a>
        </Link>
        <Link href="/Microbiology" passHref legacyBehavior>
          <a className={styles.ServicesMainPagesLink}>
            <div className={styles.ServicesMainPagesLinkContent}>
              <Image
                src="/PhotosAndLogos/VirtualTOur42.webp"
                alt="Microbiology"
                width={300}
                height={200}
                className={styles.ServicesMainPagesImage}
              />
              <h3>Microbiology</h3>
              <p>Specialized microbial tests</p>
            </div>
          </a>
        </Link>
        <Link href="/AllergyWeb" passHref legacyBehavior>
          <a className={styles.ServicesMainPagesLink}>
            <div className={styles.ServicesMainPagesLinkContent}>
              <Image
                src="/PhotosAndLogos/ServiceMain5.webp"
                alt="Allergy & Intolerance"
                width={300}
                height={200}
                className={styles.ServicesMainPagesImage}
              />
              <h3>Allergy & Intolerance</h3>
              <p>Identify allergens and intolerances</p>
            </div>
          </a>
        </Link>
        <Link href="/Histocytopathology" passHref legacyBehavior>
          <a className={styles.ServicesMainPagesLink}>
            <div className={styles.ServicesMainPagesLinkContent}>
              <Image
                src="/PhotosAndLogos/ServiceMain6.webp"
                alt="Histocytopathology"
                width={300}
                height={200}
                className={styles.ServicesMainPagesImage}
              />
              <h3>Histocytopathology</h3>
              <p>Microscopic examination of tissues</p>
            </div>
          </a>
        </Link>
        <Link href="/FlowCytometry" passHref legacyBehavior>
          <a className={styles.ServicesMainPagesLink}>
            <div className={styles.ServicesMainPagesLinkContent}>
              <Image
                src="/PhotosAndLogos/ServiceMain7.webp"
                alt="Flow Cytometry"
                width={300}
                height={200}
                className={styles.ServicesMainPagesImage}
              />
              <h3>Flow Cytometry</h3>
              <p>Cellular analysis and sorting</p>
            </div>
          </a>
        </Link>
        <Link href="/MolecularBiology" passHref legacyBehavior>
          <a className={styles.ServicesMainPagesLink}>
            <div className={styles.ServicesMainPagesLinkContent}>
              <Image
                src="/PhotosAndLogos/ServiceMain8.webp"
                alt="Molecular Biology"
                width={300}
                height={200}
                className={styles.ServicesMainPagesImage}
              />
              <h3>Molecular Biology</h3>
              <p>Genetic testing and analysis</p>
            </div>
          </a>
        </Link>
        <Link href="/SpecializedTesting" passHref legacyBehavior>
          <a className={styles.ServicesMainPagesLink}>
            <div className={styles.ServicesMainPagesLinkContent}>
              <Image
                src="/PhotosAndLogos/ServiceMain9.webp"
                alt="Specialized Testing for Hospitals"
                width={300}
                height={200}
                className={styles.ServicesMainPagesImage}
              />
              <h3>Specialized Testing for Hospitals</h3>
              <p>Advanced testing for healthcare providers</p>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Services;
