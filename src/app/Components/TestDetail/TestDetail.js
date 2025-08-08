'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Head from 'next/head';
import axios from 'axios';
import styles from './TestDetail.module.css';

const TestDetail = ({ initialTest = null }) => {
    const params = useParams();
    const searchParams = useSearchParams();
    const [test, setTest] = useState(initialTest);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(!initialTest);

    const getUrlName = () => {
        if (params?.slug) return params.slug;
        const query = searchParams.toString();
        if (!query) return null;
        return query.split('=')[1] || query;
    };

    const processContent = (testData) => {
        const imageComponents = {
            Image1: testData.test_image1 ? 
                `<div class="${styles.imageWrapper}">
                    <img 
                        src="https://backend.dangsccg.co.in${testData.test_image1}" 
                        alt="${testData.thumbnail_alt_text || 'Test image 1'}" 
                        class="${styles.testDetailImage}"
                        loading="lazy"
                    />
                </div>` : '',
            Image2: testData.test_image2 ? 
                `<div class="${styles.imageWrapper}">
                    <img 
                        src="https://backend.dangsccg.co.in${testData.test_image2}" 
                        alt="${testData.thumbnail_alt_text || 'Test image 2'}" 
                        class="${styles.testDetailImage}"
                        loading="lazy"
                    />
                </div>` : '',
            Image3: testData.test_image3 ? 
                `<div class="${styles.imageWrapper}">
                    <img 
                        src="https://backend.dangsccg.co.in${testData.test_image3}" 
                        alt="${testData.thumbnail_alt_text || 'Test image 3'}" 
                        class="${styles.testDetailImage}"
                        loading="lazy"
                    />
                </div>` : '',
            Image4: testData.test_image4 ? 
                `<div class="${styles.imageWrapper}">
                    <img 
                        src="https://backend.dangsccg.co.in${testData.test_image4}" 
                        alt="${testData.thumbnail_alt_text || 'Test image 4'}" 
                        class="${styles.testDetailImage}"
                        loading="lazy"
                    />
                </div>` : '',
        };

        let content = testData.test_description;
        content = content
            .replace('{{{Image1}}}', imageComponents.Image1)
            .replace('{{{Image2}}}', imageComponents.Image2)
            .replace('{{{Image3}}}', imageComponents.Image3)
            .replace('{{{Image4}}}', imageComponents.Image4);

        content = content
            .replace(/<h4/g, `<h4 class="${styles.testHeading4}"`)
            .replace(/<h5/g, `<h5 class="${styles.testHeading5}"`)
            .replace(/<p/g, `<p class="${styles.testParagraph}"`)
            .replace(/<ul/g, `<ul class="${styles.testList}"`)
            .replace(/<li/g, `<li class="${styles.testListItem}"`);

        return content;
    };

    useEffect(() => {
        const fetchTestDetail = async () => {
            try {
                setIsLoading(true);
                const url_name = getUrlName();
                if (!url_name) {
                    setError('Test URL not found');
                    return;
                }

                const encodedUrlName = encodeURIComponent(url_name);
                const response = await axios.get(`https://backend.dangsccg.co.in/api/api/test/${encodedUrlName}/`);

                if (response.status === 200) {
                    const testData = response.data;
                    const processedContent = processContent(testData);
                    setTest({ ...testData, test_description: processedContent });
                } else {
                    setError('Failed to fetch test detail.');
                }
            } catch (error) {
                setError('Error fetching test detail.');
                console.error('Error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (!initialTest) {
            fetchTestDetail();
        } else {
            const processedContent = processContent(initialTest);
            setTest({ ...initialTest, test_description: processedContent });
        }
    }, [params?.slug, searchParams, initialTest]);

    if (error) {
        return (
            <div className={styles.errorContainer}>
                <p className={styles.errorMessage}>Error: {error}</p>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.loadingSpinner}></div>
                <p className={styles.loadingMessage}>Loading...</p>
            </div>
        );
    }

    if (!test) {
        return (
            <div className={styles.errorContainer}>
                <p className={styles.errorMessage}>Test not found</p>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{test.meta_title || `${test.test_heading} | Dr Dangs Lab`}</title>
                <meta name="description" content={test.meta_description || test.test_description.replace(/<[^>]*>/g, '').slice(0, 160)} />
                
                <meta property="og:type" content={test.og_type || 'website'} />
                <meta property="og:title" content={test.og_title || test.meta_title || `${test.test_heading} | Dr Dangs Lab`} />
                <meta property="og:description" content={test.og_description || test.meta_description || test.test_description.replace(/<[^>]*>/g, '').slice(0, 160)} />
                <meta property="og:url" content={test.og_url || `https://drdangs.com/test/${test.url_name}`} />
                <meta property="og:site_name" content={test.og_site_name || 'Dr Dangs Lab'} />
                
                {(test.og_image || test.test_thumbnail_image) && (
                    <meta property="og:image" content={`https://backend.dangsccg.co.in${test.og_image || test.test_thumbnail_image}`} />
                )}
                
                <link rel="canonical" href={test.og_url || `https://drdangs.com/test/${test.url_name}`} />
                
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalTest",
                        "name": test.test_heading,
                        "description": test.meta_description || test.test_description.replace(/<[^>]*>/g, '').slice(0, 160),
                        "price": test.price,
                        "provider": {
                            "@type": "MedicalOrganization",
                            "name": test.og_site_name || "Dr Dangs Lab",
                            "url": test.og_url || `https://drdangs.com/test/${test.url_name}`
                        }
                    })}
                </script>
            </Head>

            <main>
                <article className={styles.testDetailContainer} itemScope itemType="https://schema.org/MedicalTest">
                    {test.test_thumbnail_image && (
                        <div className={styles.thumbnailContainer}>
                            <img
                                src={`https://backend.dangsccg.co.in${test.test_thumbnail_image}`}
                                alt={test.thumbnail_alt_text || test.test_heading}
                                className={styles.thumbnailImage}
                                itemProp="image"
                            />
                            <h1 className={styles.overlayHeading} itemProp="name">
                                {test.test_heading}
                            </h1>
                        </div>
                    )}
                    
                    <div 
                        className={styles.testContent}
                        itemProp="description"
                        dangerouslySetInnerHTML={{ __html: test.test_description }}
                    />

                    <div className={styles.testMetadata}>
                        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                         
                        </div>
                        {test.thumbnail_alt_text && (
                            <meta itemProp="alternateName" content={test.thumbnail_alt_text} />
                        )}
                    </div>
                </article>
            </main>
        </>
    );
};

export default TestDetail;
