// src/app/Components/SpecializedTesting/SpecializedTesting.js

"use client"; // Include this directive if you're using Next.js App Router

import React from 'react';
import styles from './SpecializedTesting.module.css';
import Image from 'next/image';

const SpecializedTesting = () => {
  return (
    <>
      <div className={styles.SpecializedTestingMainPagesMainBanner}>
        <Image
          src="/PhotosAndLogos/ServiceMain9.webp"
          alt="SpecializedTesting"
          className={styles.SpecializedTestingMainPagesBackgroundImage}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.SpecializedTestingMainPagesContentContainer}>
          <div className={styles.SpecializedTestingMainPagesLeftContent}>
            <h2>Specialized Testing For Hospitals</h2>
            <p>
              Fully automated allergy & food intolerance testing by state of the art equipment with allergens most suited to our population base.
            </p>
          </div>
        </div>
      </div>
      {/* SpecializedTesting Test Details Section */}
      <div className={styles.HaemotologymainTableDiv}>
        <div className={styles.SpecializedTestingMainPagesContentContainer}>
          <div className={styles.SpecializedTestingMainPagesLeftContent}>
            <ul className={styles.specializedList}>
              <li>Robust capabilities of handling routine as well as specialized testing services for hospitals and medical centres.</li>
              <li>Specialized Infection Control Services for ICUs, OTs, and Wards</li>
              <li>In-House logistics team for setting up and handling outsourced samples</li>
              <li>Fast Turnaround Time and specialists in every field</li>
              <li>Strong academic background for providing training and increasing the efficiency of hospital staff</li>
              <li>Abundant experience in handling hospital samples over the past 25 years</li>
            </ul>
          </div>
          <div className={styles.SpecializedTestingMainPagesRightContent}>
            <Image
              src="/PhotosAndLogos/Servicesspecialized.webp"
              alt="Hospitals and Medical Centers"
              className={styles.specializedImage}
              width={500} // Adjust width and height as needed
              height={300}
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecializedTesting;
