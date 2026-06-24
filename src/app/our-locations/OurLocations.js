"use client";

import React, { useState, useEffect } from 'react';
import styles from './OurLocations.module.css';
import Link from 'next/link';
import { sanitizeHTML } from '../../utils/sanitize';
import { getLocations, FALLBACK_LOCATIONS } from '@/lib/locations';

const LocationCard = ({ title, address, phones, timing, map_url }) => (
  <div className={styles.locationCard}>
    <div className={styles.cardHeader}>
      <div className={styles.iconContainer}>
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.locationIcon}
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      </div>
      <h3 className={styles.locationTitle}>{title}</h3>
    </div>

    <div className={styles.cardContent}>
      <p className={styles.address} dangerouslySetInnerHTML={{ __html: sanitizeHTML(address) }} />

      <div className={styles.phoneNumbers}>
        {phones?.map((num, index) => (
          <React.Fragment key={num}>
            <a href={`tel:${num}`} className={styles.phoneLink}>
              {num}
            </a>
            {index < phones.length - 1 && ', '}
          </React.Fragment>
        ))}
      </div>

      <p className={styles.timing} dangerouslySetInnerHTML={{ __html: sanitizeHTML(timing) }} />

      <div className={styles.cardActions}>
        <a
          href={map_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapButton}
        >
          View on Map
        </a>
      </div>
    </div>
  </div>
);

const OurLocations = () => {
  const [locations, setLocations] = useState(FALLBACK_LOCATIONS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLocations() {
      try {
        const data = await getLocations();
        setLocations(data);
      } catch (error) {
        console.error('Error fetching locations:', error);
        // Fallback is already set as initial state
      } finally {
        setLoading(false);
      }
    }
    fetchLocations();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <h1 className={styles.title}>Our Locations</h1>
        <p className={styles.subtitle}>
          Find Dr Dangs Lab nearest to you. We have multiple locations across Delhi NCR to serve you better.
        </p>
        <p className={styles.closedNotice}>(All Centers Closed on Sundays)</p>
      </div>

      <div className={styles.locationsGrid}>
        {locations.map((location) => (
          <LocationCard key={location.id || location.title} {...location} />
        ))}
      </div>

      <div className={styles.ctaSection}>
        <h2>Can't Visit Our Centers?</h2>
        <p>We offer home collection services across Delhi NCR</p>
        <Link href="/HomeCollection" className={styles.ctaButton}>
          Book Home Collection
        </Link>
      </div>
    </div>
  );
};

export default OurLocations;
