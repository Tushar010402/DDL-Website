"use client";

import Link from 'next/link';
import styles from './HomeCollection.module.css';

const HomeCollection = () => {
  return (
    <div className={styles.HomeCollectionMainDivHomePage}>
      <div className={styles.HomeCollectionInnerdiv}>
        <div className={styles.HomeCollectionText}>
          <p>Elite Home Collection Services</p>
        </div>
        <div className={styles.HomeCollectionLists}>
          <ul>
            <li>Trained & experienced professionals</li>
            <li>A/C vehicle for sample integrity preservation</li>
            <li>Temperature controlled sample transport devices</li>
            <li>Safe, sterile, single use blood collection kit</li>
          </ul>
        </div>
        <div className={styles.HomeCollectionButton}>
          <Link href="/HomeCollection">Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCollection;