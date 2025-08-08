// src/app/Components/FlowCytometry/FlowCytometry.js

"use client"; // Include this directive if you're using Next.js App Router

import React from 'react';
import styles from './FlowCytometry.module.css';
import Image from 'next/image';

const FlowCytometry = () => {
  return (
    <>
      <div className={styles.FlowCytometryMainPagesMainBanner}>
        <Image
          src="/PhotosAndLogos/ServiceMain7.webp"
          alt="FlowCytometry"
          className={styles.FlowCytometryMainPagesBackgroundImage}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.FlowCytometryMainPagesContentContainer}>
          <div className={styles.FlowCytometryMainPagesLeftContent}>
            <h2>Flow Cytometry</h2>
            <p>
              Is a technique used to detect and measure physical and chemical characteristics of a
              population of cells or particles
            </p>
          </div>
        </div>
      </div>
      {/* Flow Cytometry Test Details Section */}
      <div className={styles.HaemotologymainTableDiv}>
        <div className={styles.FlowCytometryMainPagesTableContainer}>
          <h3>Flow Cytometry</h3>
          <table className={styles.FlowCytometryMainPagesTable}>
            <thead>
      <tr>
        <th>TEST NAME</th>
        <th>METHODOLOGY</th>
        <th>SPECIMEN REQUIREMENT & TAT/REPORT</th>
      </tr>
    </thead>
    <tbody>
    <tr>
  <td>Acute Leukemia- diagnostic panel</td>
  <td>Flow Cytometry / BD FACS Canto II</td>
  <td>Bone marrow / Peripheral Blood in Heparin / EDTA <br></br> 24-48 hrs</td>
</tr>
<tr>
  <td>CLPD / CLL / Lymphoma</td>
  <td>Flow Cytometry / BD FACS Canto II</td>
  <td>Bone marrow / Peripheral Blood in Heparin / EDTA <br></br> 24-48 hrs</td>
</tr>
<tr>
  <td>PNH – WBC Assay</td>
  <td>Flow Cytometry / BD FACS Canto II</td>
  <td>Bone marrow / Peripheral Blood in Heparin / EDTA <br></br> 24-48 hrs</td>
</tr>
<tr>
  <td>B-ALL Minimal Residual Disease (MRD)</td>
  <td>Flow Cytometry / BD FACS Canto II</td>
  <td>Bone marrow in Heparin <br></br> 48-72 hrs</td>
</tr>











    </tbody>
  </table>
</div>
</div>

    </>
  );
};

export default FlowCytometry;