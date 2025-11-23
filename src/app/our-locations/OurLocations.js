"use client";

import React from 'react';
import styles from './OurLocations.module.css';
import Link from 'next/link';

const locations = [
  {
    title: 'SDA',
    address: 'C2/1, SDA Aurobindo Marg, Next to Aurobindo Market, New Delhi-110016',
    phone: ['011-45004200', '+91-9999992020'],
    timing: 'Timing: 7:30am to 7:00pm <br /> (Monday-Saturday)',
    mapUrl: "https://www.google.com/maps/place/Dr.+Dangs+Lab/@28.5498115,77.2008449,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce212c5e11f3b:0x87bfcad1d8f9e92c!8m2!3d28.5498115!4d77.2034198!16s%2Fg%2F11bbyfm62m?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    title: 'Punjabi Bagh',
    address: '1/51, Ground Floor, Opposite Central Market, West Punjabi Bagh, New Delhi– 110026',
    phone: ['+91-9810678165'],
    timing: 'Timing: 8:00am to 6:00pm <br />(Monday-Saturday)',
    mapUrl: "https://share.google/7ekU3yZQ9nyaGzn8P"
  },
  {
    title: 'Vasant Kunj',
    address: '12/13 G.F., Vasant Arcade, Nelson Mandela Marg, Vasant Kunj, New Delhi-110070',
    phone: ['+91-9910589234'],
    timing: 'Timing: 8:00am to 6:00pm <br />(Monday-Saturday)',
    mapUrl: "https://www.google.com/maps/place/Dr+Dangs+Lab+-+Vasant+Kunj/@28.5334491,77.1493118,17z/data=!3m2!4b1!5s0x390d0724de20219f:0xe9705dc138a3e4ca!4m6!3m5!1s0x390d1d9fe494a3b3:0xa54da70f5f7138ed!8m2!3d28.5334491!4d77.1518867!16s%2Fg%2F11s32vx81v?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    title: 'Greater Kailash',
    address: 'GF N36 GK1 <br /> New Delhi–110048',
    phone: ['+91-9910313567'],
    timing: 'Timing-8:00am to 4:00pm <br />(Monday-Saturday)',
    mapUrl: "https://www.google.com/maps/place/Dr.+Dangs+Lab+-+G.K./@28.5579437,77.2331998,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce3ebdcede7ab:0x9e55af013fbe2fe6!8m2!3d28.5579437!4d77.2357747!16s%2Fg%2F11s5hm03h_?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    title: 'Gurugram',
    address: 'Palm Springs Plaza, Golf Course Road Sector-53, Gurugram-122001',
    phone: ['+91-9818881065'],
    timing: 'Timing: 8:00am to 6:00pm <br />(Monday-Saturday)',
    mapUrl: "https://www.google.com/maps/place/Dr.+Dangs+Lab+-+Gurugram/@28.4453313,77.0988813,17z/data=!3m2!4b1!5s0x390d18b4a1218b73:0x62bf352b9553dc6f!4m6!3m5!1s0x390d19f50f5cba21:0xeb8e0355fc65b936!8m2!3d28.4453313!4d77.1014562!16s%2Fg%2F11fgjr1twk?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    title: 'Gurugram Sector 66',
    address: 'G-42, Block B, Spaze Business Park, Badshahpur, Sector 66, Gurugram, Haryana 122102',
    phone: ['+91-9220503540'],
    timing: 'Timing: 8:00am to 6:00pm <br />(Monday-Saturday)',
    mapUrl: "https://www.google.com/maps/place/Dr+Dangs+Lab+-+Gurugram+Sector+66/@28.4041699,77.056086,17z/data=!3m1!4b1!4m6!3m5!1s0x390d2392ce4daaab:0x92b376848a0a5e40!8m2!3d28.4041699!4d77.0586609!16s%2Fg%2F11xp1dsctg?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    title: 'New Friends Colony',
    address: 'D-851, Ground Floor, New Friends Colony, New Delhi-110025',
    phone: ['+91-9311225665'],
    timing: 'Timing: 8:00am to 6:00pm<br />(Monday-Saturday)',
    mapUrl: "https://www.google.com/maps/place/Dr.+Dangs+Lab+-+New+Friends+Colony/@28.5630285,77.266374,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce3d3eac15b25:0x10c686888c18f7e3!8m2!3d28.5630285!4d77.2689489!16s%2Fg%2F11pzx2q9p6?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    title: 'Kamla Nagar',
    address: 'UA No-25, Ground Floor, Jawahar Nagar, Malka Ganj, New Delhi-110007',
    phone: ['+91-9289157434'],
    timing: 'Timing: 8:00am to 6:00pm <br />(Monday-Saturday)',
    mapUrl: "https://www.google.com/maps/place/Dr.+Dangs+Lab/@28.6790643,77.2055007,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfd24aab41819:0xaf7820d0a7d74af9!8m2!3d28.6790643!4d77.2080756!16s%2Fg%2F11q3z91s4n?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    title: 'Noida',
    address: 'Max Square (Lower Ground Floor), Jaypee Wishtown, Sector 129, Noida – 201304',
    phone: ['+91-9220503545'],
    timing: 'Timing: 8:00am to 6:00pm <br />(Monday-Saturday)',
    mapUrl: "https://www.google.com/maps/place/Dr.+Dangs+Lab+-+Noida/@28.5094832,77.3859705,586m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390ce9330765720f:0xe429b6fca95c8ede!8m2!3d28.5094832!4d77.3859705!16s%2Fg%2F11mm85bd4v!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
  },
];

const LocationCard = ({ title, address, phone, timing, mapUrl }) => (
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
      <p className={styles.address} dangerouslySetInnerHTML={{ __html: address }} />
      
      <div className={styles.phoneNumbers}>
        {phone.map((num, index) => (
          <React.Fragment key={num}>
            <a href={`tel:${num}`} className={styles.phoneLink}>
              {num}
            </a>
            {index < phone.length - 1 && ', '}
          </React.Fragment>
        ))}
      </div>
      
      <p className={styles.timing} dangerouslySetInnerHTML={{ __html: timing }} />
      
      <div className={styles.cardActions}>
        <a 
          href={mapUrl} 
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
        {locations.map((location, index) => (
          <LocationCard key={index} {...location} />
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