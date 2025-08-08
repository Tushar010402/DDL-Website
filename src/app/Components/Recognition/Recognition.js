// src/app/Components/Recognition/Recognition.js

"use client"; // Ensure this component is rendered on the client side if using Next.js App Router

import React, { useState, useEffect } from 'react';
import styles from './Recognition.module.css'; // Import CSS Module
import Image from 'next/image'; // Import Next.js Image component

const Recognition = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Update the state when window is resized
    useEffect(() => {
        // Handler to call on window resize
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Set initial state
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.RecognitionMainDiv}>
            <div className={styles['Recognition-main-banner']}>
                <Image
                    src={isMobile ? "/PhotosAndLogos/ourlegacy-mob.webp" : "/PhotosAndLogos/OurLagacy.png"}
                    alt='Recognition'
                    className={styles['Recognition-background-image']}
                    layout='fill' // Use 'fill' to make the image cover the parent container
                    objectFit='cover'
                    priority // Optional: prioritize loading for above-the-fold images
                />
                <div className={styles['Recognition-overlay']}></div>
                <div className={styles['Recognition-content-container']}>
                    <div className={styles['Recognition-text-content']}>
                        <h2>Recognition</h2>
                        <p>Enhancing Patient Care with State of the Art Technology & Excellent Expertise</p>
                    </div>
                </div>
            </div>

            <div className={styles.RecognitionContent}>
                <div className={styles['RecognitionContent-content']}>
                    <h3>Dr Dangs Lab is the best pathology lab in New Delhi</h3>
                    <h4>Dr. Dangs Lab: Enhancing Patient Care with State of the Art Technology & Excellent Expertise</h4>
                </div>
                <p>
                    According to a recent heart health survey, India has a Cardio Vascular Disease (CVD) death rate of over 272 per one lakh population...
                </p>
                <h4>About the Compassionate Leader</h4>
                <p>
                    Prof. (Dr.) Navin Dang is the Founder & Chairman of Dr. Dangs Lab...
                </p>
                <h4>Unique Services</h4>
                <p>
                    Known for its advanced and high-quality diagnostic services...
                </p>
            </div>

            <div className={styles.RecognitionNewSection}>
                <div className={styles['RecognitionNewSection-1st']}>
                    <h3>DR. NAVIN DANG</h3>
                    <ul className={styles['Recognition-list']}>
                        <li>The Global Association of Physicians of Indian Origin, also known as GAPIO has announced winners of the annual GAPIO awards 2020 to individuals who have made a noteworthy contribution to improving healthcare. Navin Dang for GAPIO Excellence in Diagnostics Award. Dr. Navin Dang has been recognized for his dedicated work in the field of Diagnostics.</li>
                        <li>He has been nominated for this prestigious and much-coveted award by the Global Association of Physicians of Indian Origin (GAPIO) - Excellence in the Diagnostic category for the year 2020-2021.</li>
                        <li>Honoured with the prestigious Dr. B.C. Roy National Award by the President of India in the year 2009.</li>
                        <li>Government of India’s nominated member to the Medical Council of India and Member – Ethics committee Medical Council of India.</li>
                        <li>Governing Council Member of Initiative for Providing Affordable & Quality Tests for Tuberculosis (IPAQT).</li>
                        <li>Member ‘Expert Group of Global Coalition against Tuberculosis.</li>
                        <li>One of the first Diagnostic Labs in India to get ISO 9000 Certification in 1995.</li>
                        <li>One of the first labs in the country to be awarded NABL 1S0 15189 Certificate for quality systems and competence</li>
                        <li>Dr. Dangs Lab featured in Limca Book of Records for being the first lab in the country to post patient’s reports using web-based technology.</li>
                        <li>Dr. Dangs Lab was awarded FICCI Health Care Excellence Award 2010 (Excellence in Patient Experience).</li>
                        <li>Dr. Dangs Lab selected by “Business Initiative Directions” to receive the World Quality Commitment award in France (October 2014).</li>
                        <li>One of the four labs recognized by the Government of India to do H1N1 testing during the Swine Flu epidemic of 2009-2011.</li>
                        <li>Dr. Dangs Lab featured in Prevention Doctors Guide (India Today Group) 2013, and 2014 as the most trusted lab.</li>
                        <li>Diagnostic center of the region based on professional competence, integrity, quality, and bedside manners.</li>
                    </ul>
                </div>
                <div className={`${styles['RecognitionNewSection-1st']} ${styles.IdRecognitionNewSection1st}`}>
                    <Image
                        src="/PhotosAndLogos/Recognization1.webp"
                        alt="Recognition Image 1"
                        width={500} // Adjust based on design
                        height={300} // Adjust based on design
                        className={styles['RecognitionNewSection-Image']}
                    />
                    <Image
                        src="/PhotosAndLogos/Recognization2.webp"
                        alt="Recognition Image 2"
                        width={500}
                        height={300}
                        className={styles['RecognitionNewSection-Image']}
                    />
                </div>
            </div>

            <div className={styles.RecognitionVideoSection}>
                <div className={styles.RecognitionVideoMain}>
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/K-UHp_N7XpY?si=1lPTz648n-wzQMCN"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                    <div className={styles.RecognitionAImage3}>
                        <Image
                            src="/PhotosAndLogos/Recognization3.webp"
                            alt="Video Image 1"
                            width={400}
                            height={300}
                            className={styles.RecognitionAImage}
                        />
                        <Image
                            src="/PhotosAndLogos/Recognization4.webp"
                            alt="Video Image 2"
                            width={400}
                            height={300}
                            className={styles.RecognitionAImage}
                        />
                    </div>
                </div>
                <div className={styles.RecognitionVideoText}>
                    <p>
                        Dr Dangs Lab is an expanded clinic that performs all types of testing all over Delhi. The Pathologists, Microbiologists, and Biochemists are highly qualified and experienced in this field. They are friendly and helpful with personalized care. The lab uses the best and the state of the art technology and provides online reports as fast as possible for the individuals. Dr Dangs Lab offers home collection services and complete health checkups for the patients.
                    </p>
                    <p>
                        Beta, Anti Nuclear Antibody, Biochemistry, Immunology, Dengue NS1 Antigen, Pregnancy Test, Molecular Biology, Anti Thyroglobulin, ACE, Calcium, Blood Culture, Haematology including Flowcytometry, Ceruloplasmin, Malaria Parasite/Microfilaria, Microbiology, Albumin, Cytology, Histopathology, Adenosine Deaminase, Adrenocorticotropic Hormone & APO A1
                    </p>
                </div>
            </div>

            <div className={styles.RecognitionsCertificateImage}>
                <Image
                    src="/PhotosAndLogos/Recognization5.webp"
                    alt="Image 1"
                    width={500}
                    height={300}
                    className={styles.ResearchAndTrialsImage}
                />
                <Image
                    src="/PhotosAndLogos/Recognization6.webp"
                    alt="Image 2"
                    width={500}
                    height={300}
                    className={styles.ResearchAndTrialsImage}
                />
            </div>

            <div className={styles.RecognitionProfileOverview}>
                <p className={styles.RecognitionProfileOverviewIDPPPPPPP}>
                    Dr Navin Dang<br />
                    C2/1, SDA<br />
                    New Delhi-110016<br />
                    Mob: +91 09811061957<br />
                    Email: drnavindang@gmail.com<br />
                    Website: www.drdangslab.com<br />
                </p>
                <h3 className={styles.RecognitionProfileHeading}>ACADEMIC</h3>
                <div className={styles.RecognitionProfileSection}>
                    <table className={styles.RecognitionProfileTable}>
                        <thead>
                            <tr>
                                <th>Particulars</th>
                                <th>Name of the Institution</th>
                                <th>Year of Completion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>MD (Medical Microbiology)</td>
                                <td>PGIMER, Chandigarh</td>
                                <td>Dec 1982</td>
                            </tr>
                            <tr>
                                <td>MBBS</td>
                                <td>University College of Medical Sciences, Delhi</td>
                                <td>Dec 1978</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className={styles.RecognitionProfileHeading}>PROFESSIONAL EXPERIENCE</h3>
                <div className={styles.RecognitionProfileSection}>
                    <ul className={styles.RecognitionExperienceList}>
                        <li><strong>1988 till Date:</strong> Director, Dr Dangs Lab, New Delhi</li>
                        <li><strong>1986 to 1988:</strong> Manager, Medical Services, Ranbaxy Labs Ltd.</li>
                        <li><strong>1982 to 1986:</strong> Senior Resident, All India Institute of Medical Sciences</li>
                    </ul>
                </div>

                <h3 className={styles.RecognitionProfileHeading}>Additional Responsibilities and Honours</h3>
                <div className={styles.RecognitionProfileSection}>
                    <ol className={styles.RecognitionExperienceListIDSAAS}>
                        <li>Honoured with the prestigious Dr. B.C. Roy National Award by the President of India in the year 2009.</li>
                        <li>Honoured with “Vishisht Chikitsa Ratan Award” on the occasion of Doctor’s Day 1st July 2014 for outstanding contribution in the field of Medicine and Service of mankind.</li>
                        <li>Government of India’s nominated member to the Medical Council of India and Member – Ethics committee Medical Council of India.</li>
                        <li>Delhi Government’s nominated member to the Delhi Medical Council and Member, Executive Committee, Delhi Medical Council.</li>
                        <li>Governing Council Member of Initiative for Providing Affordable & Quality Tests for Tuberculosis (IPAQT).</li>
                        <li>Member ‘Expert Group of Global Coalition against Tuberculosis.</li>
                        <li>Governing Council Member – Celiac Society for Delhi/ India.</li>
                        <li>Member Advisory Board – Prevention Magazine.</li>
                        <li>Member Advisory Board – Association of Practicing Pathologists.</li>
                        <li>Member of the ‘Expert Group on Tuberculosis Prevention and Control’ (National Forum on Tuberculosis).</li>
                        <li>Member of Anti-Doping appeal panel of National Anti-Doping Agency, Government of India.</li>
                        <li>Project advisor, Sustaining Access to Vaccine in India.</li>
                    </ol>
                </div>

                <h3 className={styles.RecognitionProfileHeading}>Dr Dang’s lab Achievements</h3>
                <div className={styles.RecognitionProfileSection}>
                    <ol className={styles.RecognitionExperienceList}>
                        <li>First Diagnostic Lab in India to get ISO 9000 Certification in 1995.</li>
                        <li>One of the first labs in India to get NABL (National Accreditation Board for testing and Calibration Laboratories) Certification in all departments of the lab.</li>
                        <li>One of the first labs in the country to be awarded NABL 15189 Certificate for quality systems and competence.</li>
                        <li>Dr Dangs Lab featured in Limca Book of Records for being the first lab in the country to post patient’s reports using web-based technology.</li>
                        <li>Dr Dangs Lab was awarded FICCI Health Care Excellence Award 2010 (Excellence in Patient Experience).</li>
                        <li>Dr Dangs Lab selected by “Business Initiative Directions” to receive the World Quality Commitment award in France (October 2014).</li>
                        <li>One of the four labs recognized by the Government of India to do H1N1 testing during the Swine Flu epidemic of 2009-2011.</li>
                        <li>Dr Dangs Lab featured in Prevention Doctors Guide (India Today Group) 2013, and 2014 as the most trusted Diagnostic centre of the region based on professional competence, integrity, quality, and bedside manners.</li>
                    </ol>
                </div>

                <h3 className={styles.RecognitionProfileHeading}>RESEARCH ACTIVITIES</h3>
                <p>Over the last few years, Dr Dang’s lab has been involved in:</p>
                <div className={styles.RecognitionProfileSection}>
                    <ol className={styles.RecognitionExperienceList}>
                        <li>Validating diagnostic assays in collaboration with companies like BioRad (for NS1 antigen of Dengue), with Biomerieux (for Malaria Rapid card test and Hepatitis markers) & Roche (for bone density markers).</li>
                        <li>Collaborated with Centre for Research and Development society for applied studies, New Delhi for various projects including Phase I and Phase II trials of 116E Oral Rotavirus vaccine.</li>
                        <li>Collaborated with All India Institute of Medical Sciences to evaluate flow cytometer as a diagnostic tool for malaria diagnosis in 2013.</li>
                        <li>N. Dang, B. Sen J. Taneja, Pulmonary nacardiosis mimicking malignancy, Indian journal of Medical Microbilogy, Volume 34, No.1, Jan 2016, Page no. 117-118.</li>
                        <li>Navin Dang, Mohammad Shafi Kuchay, Journal of Pediatric Endocrinology and Metabolism, Efficacy and safety of a single monthly dose of cholecalciferol in healthy school children.</li>
                    </ol>
                </div>

                <h3 className={styles.RecognitionProfileHeading}>SUPPORTED ACTIVITIES</h3>
                <div className={styles.RecognitionProfileSection}>
                    <ol className={styles.RecognitionExperienceListIDSAAS}>
                        <li>Ph.D. Guide</li>
                        <p>Impact: -<br />Two Ph.D. Scholar completed successfully their Ph.D thesis work under supervision.</p>
                        <ol type='i'>
                            <li>Mukta Sehgal, “Application and relative efficacy of different biomarkers for detection of celiac disease”</li>
                            <li>Binish Jawed, “Application of LAMP (loop-mediated isothermal amplification)-based technology as a tool for the sensitive and rapid detection of Dengue Infection”</li>
                        </ol>
                        <li>Udayan Care</li>
                        <p>Impact: -<br />Thousands of unprivileged children have been tested for different kinds of diseases at no cost over the last twenty years.</p>
                        <li>Cancer Care/CanKid/CanHelp</li>
                        <p>Impact: -<br />Volunteers of the above organizations refer cancer patients to Dr Dangs Lab for investigations. Compassionate care is extended to these unfortunate patients with best wishes and at no cost.</p>
                        <li>IPAQT (Initiative for providing Affordable & Quality Test for Tuberculosis)</li>
                        <p>Impact: -<br />To fulfill Dr Navin Dang’s dream of providing affordable and quality tests for tuberculosis. Dr Dangs lab is working with Clinton Foundation on this. The population of our country is now being provided tuberculosis testing at no-profit by this initiative.</p>
                        <li>CELIAC SOCIETY OF DELHI AND CELIAC SOCIETY OF INDIA</li>
                        <p>Impact: -<br />Prevalence of Celiac disease is of epidemic proportions in India. This is mainly because of lack of awareness. Dr Navin Dang has contributed immensely to the above cause in the field of correct method of diagnosis and creating awareness about this disease.</p>
                        <li>QUALITY MANAGEMENT SYSTEM</li>
                        <p>Impact: -<br />Dr Dangs lab being one of the first labs in the country to have been awarded ISO and NABL accreditations, Dr Dangs lab has been a part of various forums to create awareness about the importance of Quality System and Management in lab medicine. Various case studies have been based on the quality management system and patient satisfaction achieved at Dr Dangs Lab, at institutions like Stanford University and Harvard University.</p>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Recognition;
