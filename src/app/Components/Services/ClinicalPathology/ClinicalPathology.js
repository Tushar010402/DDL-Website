// src/app/Components/ClinicalPathology/ClinicalPathology.js

"use client"; // Include this directive if you're using Next.js App Router

import React from 'react';
import styles from './ClinicalPathology.module.css';
import Image from 'next/image';

const ClinicalPathology = () => {
  return (
    <>
      <div className={styles.ClinicalPathologyMainPagesMainBanner}>
        <Image
          src="/PhotosAndLogos/ServiceMain3.webp"
          alt="Clinical Pathology"
          className={styles.ClinicalPathologyMainPagesBackgroundImage}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.ClinicalPathologyMainPagesContentContainer}>
          <div className={styles.ClinicalPathologyMainPagesLeftContent}>
            <h2>Clinical Pathology</h2>
            <p>
              The diagnosis of disease using laboratory testing of blood and other bodily fluids,
              tissues, and microscopic evaluation of individual cells
            </p>
          </div>
        </div>
      </div>
      {/* Haematology Test Details Section */}
      <div className={styles.ClinicalPathologyMainPagesTableContainer}>
        <h3>Clinical Pathology</h3>
        <table className={styles.ClinicalPathologyMainPagesTable}>
          <thead>
            <tr>
              <th>TEST NAME</th>
              <th>METHODOLOGY</th>
              <th>SPECIMEN REQUIREMENT & TAT/REPORT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A.E.C./ Absolute Eosinophil Count</td>
              <td>Flow cytometry/Sysmex 2000/4000</td>
              <td>
                Blood (EDTA) <br /> Same Day
              </td>
            </tr>
            <tr>
              <td>Activated Partial Thromboplastin Time (APTT)</td>
              <td>ACL 7000</td>
              <td>
                Citrated Blood <br /> Same Day
              </td>
            </tr>
            <tr>
              <td>Blood Group</td>
              <td>ID card-LISS Method- Column agglutination</td>
              <td>
                EDTA Blood <br /> Same Day
              </td>
            </tr>
            <tr>
              <td>Blood For Sickling</td>
              <td>HPLC +Sodium metabisulphite/Variant 2</td>
              <td>
                EDTA Blood <br /> Same Day
              </td>
            </tr>
            <tr>
              <td>Bone Marrow ASP</td>
              <td>Microscopic Examination</td>
              <td>
                Bone Marrow <br /> 2 Days
              </td>
            </tr>
            <tr>
              <td>Coomb's Test - Direct / Indirect</td>
              <td>ID card-LISS Method- Column agglutination</td>
              <td>
                EDTA Blood / serum <br /> Same Day
              </td>
            </tr>
            <tr>
              <td>
                CBC (Hb, MCV, MCH, MCHC, TLC, PCV, Platelet count, RBC Count)
              </td>
              <td>
                Optical, Fluorescence, flow cytometry and SLS-Hb/Sysmex XT4000i
              </td>
              <td>
                EDTA Blood <br /> Same Day
              </td>
            </tr>
            <tr>
              <td>ESR</td>
              <td>(Automated) Westergren/Vesmatic 80/30</td>
              <td>
                EDTA Blood <br /> Same Day
              </td>
            </tr>
            <tr>
              <td>G6PDH</td>
              <td>Methylene Blue Reduction</td>
              <td>
                EDTA Blood <br /> Same Day
              </td>
            </tr>
            <tr>
              <td>HbA2</td>
              <td>HPLC using Beta thal short program/Variant 2,Bio-Rad</td>
              <td>
                EDTA Blood <br /> 3 Days
              </td>
            </tr>
            <tr>
              <td>LE Cell</td>
              <td>Antigen Antibody reaction & Microscopy</td>
              <td>
                Defibrinated Blood <br /> Same Day
              </td>
            </tr>
            <tr>
              <td>Lupus Anticoagulant (LA1, LA2)</td>
              <td>
                Screen LA1 /Confirmation LA2 (Diluted Russel Venom Test, DRVTT)/ACL 7000
              </td>
              <td>
                Citrated Blood <br /> Same Day
              </td>
            </tr>
            <tr>
              <td>Peripheral Smear</td>
              <td>Microscopic</td>
              <td>
                Blood <br /> Same Day
              </td>
            </tr>
            <tr>
              <td>Prothrombin Time (PT)</td>
              <td>ACL 7000</td>
              <td>
                Citrated Blood <br /> Same Day
              </td>
            </tr>
            <tr>
              <td>Rapid Malaria Test</td>
              <td>
                Detection of Plasmodium lactate dehydrogenase using monoclonal antibodies
                (Dipstick)
              </td>
              <td>
                EDTA Blood <br /> Same Day
              </td>
            </tr>
            <tr>
              <td>Reticulocyte Count</td>
              <td>Supravital Staining (New Methylene Blue)</td>
              <td>
                EDTA Blood <br /> Same Day
              </td>
            </tr>
            <tr>
              <td>Coagulation Profile</td>
              <td>Fully automated</td>
              <td>
                EDTA, Citrate Blood <br /> 2 Days
              </td>
            </tr>
            <tr>
              <td>Thrombophilia Profile</td>
              <td>Fully automated</td>
              <td>
                EDTA, Citrate & Clotted Blood <br /> 7 Days
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ClinicalPathology;
