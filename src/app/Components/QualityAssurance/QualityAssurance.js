// src/app/Components/QualityAssurance/QualityAssurance.js

"use client"; // Ensure this component is rendered on the client side if using Next.js App Router

import React from 'react';
import styles from './QualityAssurance.module.css';
import Image from 'next/image';

const QualityAssurance = () => {
    return (
        <>
            <div className={styles.qualityAssuranceMainDiv}>
                <div className={styles.qualityAssuranceMainBanner}>
                    <Image
                        src="/PhotosAndLogos/Quality-Assurence-BannerC.webp"
                        alt="Quality Assurance"
                        className={styles.qualityAssuranceBackgroundImage}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                    <div className={styles.qualityAssuranceOverlay}></div> {/* Black overlay */}
                    <div className={styles.qualityAssuranceContentContainer}>
                        <div className={styles.qualityAssuranceTextContent}>
                            <h2>Quality Assurance</h2>
                            <p>Quintessential Quality Diagnostics</p>
                        </div>
                    </div>
                </div>

                {/* Section for Certificate and Quality Assurance text */}
                <div className={styles.certificateProficiencySection}>
                    <div className={styles.certificateImageContainer}>
                        <Image
                            src="/PhotosAndLogos/QualityAssuranceNABLimg.webp"
                            alt="Certificate"
                            className={styles.certificateImage}
                            width={400} // Adjust width and height as needed
                            height={300}
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                    <div className={styles.certificateTextContainer}>
                        <h3>Quality Assurance</h3>
                        <p>
                            Dr. Dangs Lab is dedicated to providing the highest degrees of service and quality results. The laboratory is known for consistent QUALITY DRIVEN operations through the systematic implementation of effective QUALITY MANAGEMENT SYSTEMS (QMS) that assures our clients of accurate, reliable, and timely reporting of test results. It is our endeavor to continuously strive for the best in patient care through efficient, effective, and robust quality systems.
                        </p>
                        <p>
                            The laboratory subjects itself to continuous and rigorous voluntary ACCREDITATION compliant to GLOBAL ISO 15189 STANDARDS applicable to clinical laboratories through demonstrated competence to achieve quality goals. A dedicated QAU (Quality Assurance Unit) is set up to help design, implement, and continually improve on the laboratory’s performance and services.
                        </p>
                        <p>
                            We understand that discrepant laboratory results may pose considerable risk to patients and hence, make all possible structured efforts including multiple internal and external laboratory QUALITY CONTROL AND QUALITY ASSURANCE (QC/QA) measures, participation in PROFICIENCY TESTING (PT).
                        </p>
                    </div>
                </div>

                {/* Section for Quality Policy and Proficiency Testing */}
                <div className={styles.qualityProficiencySection}>
                    <div className={styles.qualityProficiencyContent}>
                        <p>We follow excellent Quality Control and Standardisation procedures in all aspects of Laboratory Medicine and this is of fundamental importance for us for the provision of clinical diagnosis and optimal patient-care.</p>
                        <h3>Proficiency Testing</h3>
                        <p>
                            Proficiency testing determines the performance of individual laboratories for specific tests or measurements and is used to monitor laboratories continuing performance. Proficiency testing involves a group of laboratories or analysts performing the same analysis on the same samples and comparing results. The key requirements of such comparisons are that the samples are homogeneous and stable and also that the set of samples analyzed are appropriate to test and display similarities and differences in results. We are committed to performing proficiency testing on a regular basis to ensure the best quality of our services.
                        </p>
                    </div>
                    <div className={styles.qualityProficiencyImageContainer}>
                        <Image
                            src="/PhotosAndLogos/QualityAssurance3.webp"
                            alt="Quality Policy"
                            className={styles.proficiencyImage}
                            width={400} // Adjust width and height as needed
                            height={300}
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                </div>

                {/* Section for Annual Reports */}
                
            </div>
        </>
    );
}

export default QualityAssurance;
