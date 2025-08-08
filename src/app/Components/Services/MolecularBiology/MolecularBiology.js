// src/app/Components/MolecularBiology/MolecularBiology.js

"use client"; // Include this directive if you're using Next.js App Router

import React from 'react';
import styles from './MolecularBiology.module.css';
import Image from 'next/image';

const MolecularBiology = () => {
  return (
    <>
      <div className={styles.MolecularBiologyMainPagesMainBanner}>
        <Image
          src="/PhotosAndLogos/ServiceMain8.webp"
          alt="MolecularBiology"
          className={styles.MolecularBiologyMainPagesBackgroundImage}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.MolecularBiologyMainPagesContentContainer}>
          <div className={styles.MolecularBiologyMainPagesLeftContent}>
            <h2>Molecular Biology</h2>
            <p>
              Molecular biology is the study of the molecular basis of biological activity between
              biomolecules in the various systems of a cell, including the interactions between DNA,
              RNA and proteins
            </p>
          </div>
        </div>
      </div>
      {/* MolecularBiology Test Details Section */}
      <div className={styles.HaemotologymainTableDiv}>
        <div className={styles.MolecularBiologyMainPagesTableContainer}>

          <h3>Molecular Biology</h3>

          <table className={styles.MolecularBiologyMainPagesTable}>
            <thead>
              <tr>
                <th>TEST NAME</th>
                <th>METHODOLOGY</th>
                <th>SPECIMEN REQUIREMENT & TAT/REPORT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hepatitis B virus (HBV) Qualitative / Quantitative</td>
                <td>Real Time PCR/ Cobas TaqMan 48 (Roche)</td>
                <td>
                  Plasma / Blood sample (clotted) <br /> 7 Days
                </td>
              </tr>
              <tr>
                <td>Hepatitis C virus (HCV) Qualitative / Quantitative</td>
                <td>Real Time Polymerase chain reaction / GeneXpert</td>
                <td>
                  Plasma / Blood sample (clotted) <br /> 1 Days
                </td>
              </tr>
              <tr>
                <td>Human Deficiency Virus (HIV) Quantitative</td>
                <td>Real Time Polymerase chain reaction / GeneXpert</td>
                <td>
                  Plasma / Blood sample (clotted) <br /> 1 Days
                </td>
              </tr>
              <tr>
                <td>Human Papilloma Virus (HPV) 21 Genotype</td>
                <td>Polymerase Chain Reaction/ Flow through hybridization / HybriBio</td>
                <td>
                  Cervical Swab <br /> 10 Days
                </td>
              </tr>
              <tr>
                <td>Chikungunya (Qualitative)</td>
                <td>Real Time PCR/ Light Cycer II 480 (Roche)</td>
                <td>
                  Plasma / Blood sample (clotted) <br /> Same Day
                </td>
              </tr>
              <tr>
                <td>HLA B27 (Qualitative)</td>
                <td>Real Time PCR/ Light Cycer II 480 (Roche)</td>
                <td>
                  Whole blood (EDTA) <br /> 3 Days
                </td>
              </tr>
              <tr>
                <td>H1 N1 (Qualitative)</td>
                <td>Real Time PCR/ Light Cycer II 480 (Roche)</td>
                <td>
                  Throat Swab and Nasal Swab <br /> Same day
                </td>
              </tr>
              <tr>
                <td>Chlamydia trachomatis / Neisseria gonorrhoeae</td>
                <td>Real Time Polymerase chain reaction / GeneXpert</td>
                <td>
                  Urine/Swab <br /> 2 Days
                </td>
              </tr>
              <tr>
                <td>Clostridium difficile</td>
                <td>Real Time Polymerase chain reaction / GeneXpert</td>
                <td>
                  Stool <br /> 2 Days
                </td>
              </tr>
              <tr>
                <td>MTB/RIF</td>
                <td>Real Time Polymerase chain reaction / GeneXpert</td>
                <td>
                  Sputum, Pus, BAL, Gastric Lavage, CSF, Peritoneal Fluid, Plural Fluid, Synovial Fluid, Endometrial aspirate, Aspirate from Pouch of Douglas, Biopsies, FNAC <br /> Same Day
                </td>
              </tr>
              <tr>
                <td>Scrub Typhus</td>
                <td>Real Time PCR/ Light Cycer II 480 (Roche)</td>
                <td>
                  Whole blood (EDTA) <br /> 1 Days
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MolecularBiology;
