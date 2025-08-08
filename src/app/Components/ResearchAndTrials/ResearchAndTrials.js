// src/app/Components/ResearchAndTrials/ResearchAndTrials.js

"use client"; // Ensure this component is rendered on the client side if using Next.js App Router

import React from 'react';
import styles from './ResearchAndTrials.module.css'; // Import CSS Module
import Image from 'next/image'; // Import Next.js Image component

const ResearchAndTrials = () => {
    return (
        <>
            <div className={styles.ResearchAndTrialsMainDiv}>
                <div className={styles['ResearchAndTrials-main-banner']}>
                    <Image
                        src="/PhotosAndLogos/Research-&-Trial-2.webp"
                        alt='Research and Trials'
                        className={styles['ResearchAndTrials-background-image']}
                        fill // Use 'fill' to make the image cover the parent container
                        style={{ objectFit: 'fill' }}
                        priority // Optional: prioritize loading for above-the-fold images
                    />
                    <div className={styles['ResearchAndTrials-overlay']}></div>
                    <div className={styles['ResearchAndTrials-content-container']}>
                        <div className={styles['ResearchAndTrials-text-content']}>
                            <h2>Research and Trials</h2>
                            <p>Enhancing Patient Care with State of the Art Technology & Excellent Expertise</p>
                        </div>
                    </div>
                </div>

                <div className={styles.ResearchAndTrialsContent}>
                    <h3>Dr. Dangs Lab: Enhancing Patient Care with State of the Art Technology & Excellent Expertise</h3>
                    <p>
                        Dr Dangs Lab offers customized, high-quality central laboratory services to pharmaceutical and biotech clinical development through Scientific guidance, 
                        efficient project management, state of the art technologies, competent leadership and regulatory know-how. 
                        We possess extensive experience in efficiently managing from small and simple clinical trials to those that are large and complex.
                    </p>
                    <p>
                        The studies range from academic to the advanced regulatory submission vaccine trials in the domains of public health diseases 
                        (both for safety and immunogenicity). Some eminent amongst many are:
                    </p>
                    <ul className={styles['ResearchAndTrials-list']}>
                        <li>Large Multicentric Phase 3 vaccine Trial on Tuberculosis</li>
                        <li>Immunogenicity studies for Rotavirus candidate (vaccine)</li>
                        <li>Phase 1, 2 and 3 Vaccine studies for the leading Covid 19 vaccine candidates for authorisation purpose (recombinant)</li>
                        <li>Phase 1 trial on Chikungunya</li>
                        <li>Several PMS studies</li>
                        <li>National sero-survey with prominent DSS sites (ongoing)</li>
                        <li>Reproductive health studies</li>
                        <li>Nutraceuticals</li>
                    </ul>

                    <h4>THE SERVICES INCLUDE:</h4>
                    <ul className={styles['ResearchAndTrials-list']}>
                        <li>Guidance on Test and methodology selection for study protocol development</li>
                        <li>Offer comprehensive menu of accredited tests</li>
                        <li>Fully-harmonized, high throughput instrumentation delivering high quality data</li>
                        <li>Well integrated scientific, technical, and operational teams to execute project seamlessly</li>
                        <li>Method validations and verification of biomarkers/assays</li>
                        <li>Pan India logistics capability for on-time and in-stability shipments</li>
                        <li>Accurate and reliable data management solutions</li>
                    </ul>

                    <h5>QA at Dr Dangs Lab is independent of operations. We deliver a structured risk-based approach to planning and conducting compliance assessments by applying the principles of quality risk management (QRM). We oversee the management of quality issues, fostering a culture of continuous process improvement.</h5>
                </div>

                {/* Image Sections */}
                <div className={styles.ResearchAndTrialsImageSection}>
                    <Image
                        src="/PhotosAndLogos/Research1.webp"
                        alt="Image 1"
                        width={300} // Adjust based on design
                        height={200} // Adjust based on design
                        className={styles.ResearchAndTrialsImage}
                    />
                    <Image
                        src="/PhotosAndLogos/Research2.webp"
                        alt="Image 2"
                        width={300}
                        height={200}
                        className={styles.ResearchAndTrialsImage}
                    />
                    <Image
                        src="/PhotosAndLogos/Research3.webp"
                        alt="Image 3"
                        width={300}
                        height={200}
                        className={styles.ResearchAndTrialsImage}
                    />
                </div>
                <div className={styles.ResearchAndTrialsImageSection}>
                    <Image
                        src="/PhotosAndLogos/Research4.webp"
                        alt="Image 4"
                        width={300}
                        height={200}
                        className={styles.ResearchAndTrialsImage}
                    />
                    <Image
                        src="/PhotosAndLogos/Research5.webp"
                        alt="Image 5"
                        width={300}
                        height={200}
                        className={styles.ResearchAndTrialsImage}
                    />
                    <Image
                        src="/PhotosAndLogos/Research6.webp"
                        alt="Image 6"
                        width={300}
                        height={200}
                        className={styles.ResearchAndTrialsImage}
                    />
                </div>
                <div className={styles.ResearchAndTrialsImageSection}>
                    <Image
                        src="/PhotosAndLogos/Research7.webp"
                        alt="Image 7"
                        width={300}
                        height={200}
                        className={styles.ResearchAndTrialsImage}
                    />
                    <Image
                        src="/PhotosAndLogos/Research8.webp"
                        alt="Image 8"
                        width={300}
                        height={200}
                        className={styles.ResearchAndTrialsImage}
                    />
                    <Image
                        src="/PhotosAndLogos/Research9.webp"
                        alt="Image 9"
                        width={300}
                        height={200}
                        className={styles.ResearchAndTrialsImage}
                    />
                </div>
                <div className={styles.ResearchAndTrialsImageSection}>
                    <Image
                        src="/PhotosAndLogos/Research10.webp"
                        alt="Image 10"
                        width={300}
                        height={200}
                        className={styles.ResearchAndTrialsImage}
                    />
                    <Image
                        src="/PhotosAndLogos/Research11.webp"
                        alt="Image 11"
                        width={300}
                        height={200}
                        className={styles.ResearchAndTrialsImage}
                    />
                    <Image
                        src="/PhotosAndLogos/Research12.webp"
                        alt="Image 12"
                        width={300}
                        height={200}
                        className={styles.ResearchAndTrialsImage}
                    />
                </div>
                <div className={styles.ResearchAndTrialsImageSection}>
                    <Image
                        src="/PhotosAndLogos/Research13.webp"
                        alt="Image 13"
                        width={300}
                        height={200}
                        className={styles.ResearchAndTrialsImage}
                    />
                </div>
            </div>
        </>
    );

};

export default ResearchAndTrials;
