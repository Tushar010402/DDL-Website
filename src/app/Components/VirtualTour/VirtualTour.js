"use client"; // Ensure this component is rendered on the client side if using Next.js App Router

import React from 'react';
import styles from './VirtualTour.module.css';
import Image from 'next/image';

const VirtualTour = () => {
    return (
        <>
            <div className={styles.virtualTourMainDiv}>
                <div className={styles.virtualTourMainBanner}>
                    <Image
                        src="/PhotosAndLogos/VirtualTourHeaderImage.webp"
                        alt='Virtual Tour'
                        className={styles.virtualTourBackgroundImage}
                        layout='fill' // Use 'fill' to make the image cover the parent container
                        objectFit='cover'
                        priority // Optional: prioritize loading for above-the-fold images
                    />
                    <div className={styles.virtualTourOverlay}></div> {/* Black overlay */}
                    <div className={styles.virtualTourContentContainer}>
                        <div className={styles.virtualTourTextContent}>
                            <h2>Virtual Tour</h2>
                            <p>State of the art automation of the highest international standards, for unparalleled quality</p>
                        </div>
                    </div>
                </div>

                <div className={styles.virtualTourImageMainDiv}>
                    {/* First Row */}
                    <div className={styles.virtualTourRowMainDiv}>
                        <div className={styles.virtualTourFirstImage}>
                            <Image
                                src="/PhotosAndLogos/487x650.webp"
                                alt='Virtual Tour 1'
                                width={487} // Original image width
                                height={650} // Original image height
                                objectFit='cover'
                                className={styles.virtualTourFirstImageImg}
                            />
                        </div>
                        <div className={`${styles.virtualTourFirstImage} ${styles.virtualTourFirstImageID}`}>
                            <Image
                                src="/PhotosAndLogos/VirtualTOur2.webp"
                                alt='Virtual Tour 2'
                                width={300} // Adjust based on design
                                height={450} // Adjust based on design
                                objectFit='cover'
                                className={styles.virtualTourFirstImageImg}
                            />
                        </div>
                        <div className={`${styles.virtualTourFirstImage} ${styles.virtualTourFirstImageID12}`}>
                            <Image
                                src="/PhotosAndLogos/VirtualTour3.webp"
                                alt='Virtual Tour 3'
                                width={300} // Adjust based on design
                                height={450} // Adjust based on design
                                objectFit='cover'
                                className={styles.virtualTourFirstImageImg}
                            />
                        </div>
                        <div className={`${styles.virtualTourFirstImage} ${styles.virtualTourFirstImageID13}`}>
                            <Image
                                src="/PhotosAndLogos/VirtualTOur4.webp"
                                alt='Virtual Tour 4'
                                width={300} // Adjust based on design
                                height={450} // Adjust based on design
                                objectFit='cover'
                                className={styles.virtualTourFirstImageImg}
                            />
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className={styles.virtualTourRowMainDiv}>
                        <div className={`${styles.virtualTourFirstImage} ${styles.virtualTourFirstImageID21}`}>
                            <Image
                                src="/PhotosAndLogos/VirtualTOur21.webp"
                                alt='Virtual Tour 5'
                                width={600} // Adjust based on design
                                height={900} // Adjust based on design
                                objectFit='cover'
                                className={styles.virtualTourFirstImageImg}
                            />
                        </div>
                        <div className={`${styles.virtualTourFirstImage} ${styles.virtualTourFirstImageID22}`}>
                            <Image
                                src="/PhotosAndLogos/VirtualTOur22.webp"
                                alt='Virtual Tour 6'
                                width={400} // Adjust based on design
                                height={600} // Adjust based on design
                                objectFit='cover'
                                className={styles.virtualTourFirstImageImg}
                            />
                        </div>
                    </div>

                    {/* Third Row */}
                    <div className={styles.virtualTourRowMainDiv}>
                        <div className={`${styles.virtualTourFirstImage} ${styles.virtualTourFirstImageID31}`}>
                            <Image
                                src="/PhotosAndLogos/VirtualTOur31.webp"
                                alt='Virtual Tour 7'
                                width={300} // Adjust based on design
                                height={450} // Adjust based on design
                                objectFit='cover'
                                className={styles.virtualTourFirstImageImg}
                            />
                        </div>
                        <div className={`${styles.virtualTourFirstImage} ${styles.virtualTourFirstImageID32}`}>
                            <Image
                                src="/PhotosAndLogos/VirtualTOur32.webp"
                                alt='Virtual Tour 8'
                                width={300} // Adjust based on design
                                height={450} // Adjust based on design
                                objectFit='cover'
                                className={styles.virtualTourFirstImageImg}
                            />
                        </div>
                        <div className={`${styles.virtualTourFirstImage} ${styles.virtualTourFirstImageID33}`}>
                            <Image
                                src="/PhotosAndLogos/VirtualTOur33.webp"
                                alt='Virtual Tour 9'
                                width={400} // Adjust based on design
                                height={600} // Adjust based on design
                                objectFit='cover'
                                className={styles.virtualTourFirstImageImg}
                            />
                        </div>
                    </div>

                    {/* Fourth Row */}
                    <div className={styles.virtualTourRowMainDiv}>
                        <div className={`${styles.virtualTourFirstImage} ${styles.virtualTourFirstImageID41}`}>
                            <Image
                                src="/PhotosAndLogos/VirtualTOur41.webp"
                                alt='Virtual Tour 10'
                                width={300} // Adjust based on design
                                height={450} // Adjust based on design
                                objectFit='cover'
                                className={styles.virtualTourFirstImageImg}
                            />
                        </div>
                        <div className={`${styles.virtualTourFirstImage} ${styles.virtualTourFirstImageID42}`}>
                            <Image
                                src="/PhotosAndLogos/VirtualTOur42.webp"
                                alt='Virtual Tour 11'
                                width={300} // Adjust based on design
                                height={450} // Adjust based on design
                                objectFit='cover'
                                className={styles.virtualTourFirstImageImg}
                            />
                        </div>
                        <div className={`${styles.virtualTourFirstImage} ${styles.virtualTourFirstImageID43}`}>
                            {/* Empty div for layout consistency */}
                        </div>
                        <div className={`${styles.virtualTourFirstImage} ${styles.virtualTourFirstImageID44}`}>
                            {/* Empty div for layout consistency */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VirtualTour;
