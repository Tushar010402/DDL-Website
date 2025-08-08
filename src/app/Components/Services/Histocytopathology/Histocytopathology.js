// src/app/Components/Histocytopathology/Histocytopathology.js

"use client"; // Include this directive if you're using Next.js App Router

import React from 'react';
import styles from './Histocytopathology.module.css';
import Image from 'next/image';

const Histocytopathology = () => {
  return (
    <>
      <div className={styles.HistocytopathologyMainPagesMainBanner}>
        <Image
          src="/PhotosAndLogos/ServiceMain6.webp"
          alt="Histocytopathology"
          className={styles.HistocytopathologyMainPagesBackgroundImage}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.HistocytopathologyMainPagesContentContainer}>
          <div className={styles.HistocytopathologyMainPagesLeftContent}>
            <h2>Histocytopathology</h2>
            <p>
              Histopathology is the examination of tissues from the body microscopically to spot the signs
              and characteristics of disease
            </p>
          </div>
        </div>
      </div>
      {/* Histocytopathology Test Details Section */}
      <div className={styles.HaemotologymainTableDiv}>
        <div className={styles.HistocytopathologyMainPagesTableContainer}>

          <h3>Histopathology</h3>

          <table className={styles.HistocytopathologyMainPagesTable}>
            <thead>
              <tr>
                <th>TEST NAME</th>
                <th>METHODOLOGY</th>
                <th>SPECIMEN REQUIREMENT & TAT/REPORT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Histopathology (Small Specimen)</td>
                <td>Staining / Microscopy</td>
                <td>
                  All types specimen in 10% formalin <br /> 7 days
                </td>
              </tr>
              <tr>
                <td>Histopathology (Large Specimen)</td>
                <td>Staining / Microscopy</td>
                <td>
                  All types specimen in 10% formalin <br /> 7 days
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.HistocytopathologyMainPagesTableContainer}>

          <h3>Cytology</h3>

          <table className={styles.HistocytopathologyMainPagesTable}>
            <thead>
              <tr>
                <th>TEST NAME</th>
                <th>METHODOLOGY</th>
                <th>SPECIMEN REQUIREMENT & TAT/REPORT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cytology</td>
                <td>Microscopy</td>
                <td>
                  Synovial fluid/Pleural fluid/CSF/Sputum/Urine/BAL fluid <br /> Next Day
                </td>
              </tr>
              <tr>
                <td>FNAC</td>
                <td>Microscopy</td>
                <td>
                  Aspirate material <br /> Next Day
                </td>
              </tr>
              <tr>
                <td>(Fine needle aspirate)</td>
                <td>Microscopy</td>
                <td>
                  Aspirate material <br /> Next Day
                </td>
              </tr>
              <tr>
                <td>PAP Smear (Liquid based)</td>
                <td>Microscopy</td>
                <td>
                  Endocervical smear in Liquid <br /> 2 Days
                </td>
              </tr>
              <tr>
                <td>PAP Smear (Conventional)</td>
                <td>Microscopy</td>
                <td>
                  Endocervical smear on slide <br /> Same Day
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Histocytopathology;
