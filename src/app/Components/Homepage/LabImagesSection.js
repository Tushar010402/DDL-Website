"use client";

import React from 'react';
import Image from 'next/image';
import styles from './LabImagesSection.module.css';

const LabImagesSection = () => {
    return (
        <>
            <div className={styles.LabimagesHomePageSectionMainDIv}>
                <div className={styles.LabImageheadingdiv}>
                    <h2>A PATHOLOGY LAB CREATING BEAUTIFUL EXPERIENCES</h2>
                    <hr />
                </div>

                <div className={styles.LabImageGridMainDiv}>
                    <div className={styles.LabImage1stRow}>
                        <div className={styles.LabImage1stimage}>
                            <Image 
                                src="/PhotosAndLogos/PERSONALISED-PATIENT-CENTRIC-CARE.jpg" 
                                alt="PERSONALISED PATIENT-CENTRIC CARE"
                                width={340}
                                height={245}
                                priority
                            />
                            <div className={styles.ImageOverlay}>
                                <div className={styles.InnerOverlay}>
                                    <hr />
                                    <p>PERSONALISED PATIENT-CENTRIC CARE</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.LabImage1stimage}>
                            <Image 
                                src="/PhotosAndLogos/infrastructure.JPG" 
                                alt="AMBIENCE PAR EXCELLENCE"
                                width={340}
                                height={245}
                                priority
                            />
                            <div className={styles.ImageOverlay}>
                                <div className={styles.InnerOverlay}>
                                    <hr />
                                    <p>AMBIENCE PAR EXCELLENCE</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.LabImage1stimage}>
                            <Image 
                                src="/PhotosAndLogos/SERVICINGWITHASMILE.jpg" 
                                alt="Our services"
                                width={340}
                                height={245}
                                priority
                            />
                            <div className={styles.ImageOverlay}>
                                <div className={styles.InnerOverlay}>
                                    <hr />
                                    <p>SERVICING WITH A SMILE</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.LabImage1stRow}>
                        <div className={`${styles.LabImage1stimage} ${styles.LabImage1stimageID}`}>
                            <Image 
                                src="/PhotosAndLogos/CRAFTINGEXPERIENCESCREATINGQUALITY.jpg" 
                                alt="Dr. Dangs Pathology Lab in Delhi"
                                width={340}
                                height={500}
                                priority
                            />
                            <div className={`${styles.ImageOverlay} ${styles.ImageOverLayID}`}>
                                <div className={`${styles.InnerOverlay} ${styles.InnerOverlayID}`}>
                                    <hr />
                                    <p>CRAFTING EXPERIENCES, CREATING QUALITY</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.LabImage1stimage}>
                            <Image 
                                src="/PhotosAndLogos/Meet-our-experts.jpg" 
                                alt="Meet with our Experts"
                                width={340}
                                height={245}
                                priority
                            />
                            <div className={styles.ImageOverlay}>
                                <div className={styles.InnerOverlay}>
                                    <hr />
                                    <p>MEET OUR EXPERTS</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.LabImage1stRow}>
                        <div className={styles.LabImage1stimage}>
                            <Image 
                                src="/PhotosAndLogos/QUINTESSENTIALQUALITYDIAGNOSTICS.jpg" 
                                alt="Quality Diagnostics"
                                width={340}
                                height={245}
                                priority
                            />
                            <div className={styles.ImageOverlay}>
                                <div className={styles.InnerOverlay}>
                                    <hr />
                                    <p>QUINTESSENTIAL QUALITY DIAGNOSTICS</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.LabImage1stimage} ${styles.LabImage1stimageID}`}>
                            <Image 
                                src="/PhotosAndLogos/CARE-and-COMMITMENT.jpg" 
                                alt="Care and Commitment"
                                width={340}
                                height={500}
                                priority
                            />
                            <div className={`${styles.ImageOverlay} ${styles.ImageOverLayID}`}>
                                <div className={`${styles.InnerOverlay} ${styles.InnerOverlayID}`}>
                                    <hr />
                                    <p>CARE & COMMITMENT</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.LabImage1stRow}>
                        <div className={styles.LabImage1stimage}>
                            <Image 
                                src="/PhotosAndLogos/AUTOMATION-and-EXPERTISE.jpg" 
                                alt="Automation Exert"
                                width={340}
                                height={245}
                                priority
                            />
                            <div className={styles.ImageOverlay}>
                                <div className={styles.InnerOverlay}>
                                    <hr />
                                    <p>AUTOMATION & EXPERTISE</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.LabImage1stimage}>
                            <Image 
                                src="/PhotosAndLogos/THE-DR-DANGS0LEGACY.jpg" 
                                alt="DR DANGS LEGACY"
                                width={340}
                                height={245}
                                priority
                            />
                            <div className={styles.ImageOverlay}>
                                <div className={styles.InnerOverlay}>
                                    <hr />
                                    <p>THE DR. DANGS LEGACY</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.LabImage1stimage}>
                            <Image 
                                src="/PhotosAndLogos/AWARDS-and-ACCOLADES.jpg" 
                                alt="Dr Dangs Lab Awards"
                                width={340}
                                height={245}
                                priority
                            />
                            <div className={styles.ImageOverlay}>
                                <div className={styles.InnerOverlay}>
                                    <hr />
                                    <p>AWARDS & ACCOLADES</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LabImagesSection;