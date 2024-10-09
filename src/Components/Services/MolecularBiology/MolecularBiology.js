


import React from 'react';
import './MolecularBiology.css';

import { Link } from 'react-router-dom'; 
import MicrobilogyImageService from '../../../PhotosAndLogos/VirtualTOur42.webp';
import ServiceMain1 from '../../../PhotosAndLogos/ServiceMain1.webp';
import ServiceMain2 from '../../../PhotosAndLogos/ServiceMain2.webp';
import ServiceMain3 from '../../../PhotosAndLogos/ServiceMain3.webp';
import ServiceMain5 from '../../../PhotosAndLogos/ServiceMain5.webp';
import ServiceMain6 from '../../../PhotosAndLogos/ServiceMain6.webp';
import ServiceMain7 from '../../../PhotosAndLogos/ServiceMain7.webp';
import ServiceMain8 from '../../../PhotosAndLogos/ServiceMain8.webp';
import ServiceMain9 from '../../../PhotosAndLogos/ServiceMain9.webp';

const MolecularBiology = () => {
  return (
    <>
      <div className='MolecularBiology-Main-Pages-main-banner'>
        <img src={ServiceMain8} alt='MolecularBiology' className='MolecularBiology-Main-Pages-background-image' />
        <div className='MolecularBiology-Main-Pages-content-container'>
          <div className='MolecularBiology-Main-Pages-left-content'>
            <h2>Molecular Biology</h2>
            <p>Molecular biology is the study of the molecular basis of biological activity between biomolecules in the various systems of a cell, including the interactions between DNA, RNA and proteins</p>
          </div>
        </div>
      </div>
      {/* MolecularBiology Test Details Section */}
      <div className='HaemotologymainTableDIv'>
      <div className='MolecularBiology-Main-Pages-table-container'>

      <h3>Molecular Biology</h3>

  <table className='MolecularBiology-Main-Pages-table'>
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
  <td>Plasma / Blood sample (clotted) <br></br> 7 Days</td>
</tr>
<tr>
  <td>Hepatitis C virus (HCV) Qualitative / Quantitative</td>
  <td>Real Time Polymerase chain reaction / GeneXpert</td>
  <td>Plasma / Blood sample (clotted) <br></br> 1 Days</td>
</tr>
<tr>
  <td>Human Deficiency Virus (HIV) Quantitative</td>
  <td>Real Time Polymerase chain reaction / GeneXpert</td>
  <td>Plasma / Blood sample (clotted) <br></br> 1 Days</td>
</tr>
<tr>
  <td>Human Papilloma Virus (HPV) 21 Genotype</td>
  <td>Polymerase Chain Reaction/ Flow through hybridization / HybriBio</td>
  <td>Cervical Swab <br></br> 10 Days</td>
</tr>
<tr>
  <td>Chikungunya (Qualitative)</td>
  <td>Real Time PCR/ Light Cycer II 480 (Roche)</td>
  <td>Plasma / Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>HLA B27 (Qualitative)</td>
  <td>Real Time PCR/ Light Cycer II 480 (Roche)</td>
  <td>Whole blood (EDTA) <br></br> 3 Days</td>
</tr>
<tr>
  <td>H1 N1 (Qualitative)</td>
  <td>Real Time PCR/ Light Cycer II 480 (Roche)</td>
  <td>Throat Swab and Nasal Swab <br></br> Same day</td>
</tr>
<tr>
  <td>Chlamydia trachomatis / Neisseria gonorrhoeae</td>
  <td>Real Time Polymerase chain reaction / GeneXpert</td>
  <td>Urine/Swab <br></br> 2 Days</td>
</tr>
<tr>
  <td>Clostridium difficile</td>
  <td>Real Time Polymerase chain reaction / GeneXpert</td>
  <td>Stool <br></br> 2 Days</td>
</tr>
<tr>
  <td>MTB/RIF</td>
  <td>Real Time Polymerase chain reaction / GeneXpert</td>
  <td>Sputum,Pus,BAL,Gastric Lavage,CSF,Peritoneal Fluid,Plural Fluid,Synovial Fluid,Endometrial aspirate,Aspirate from Pouch of Douglas,Biopsies,FNAC <br></br> Same Day</td>
</tr>
<tr>
  <td>Scrub Typhus</td>
  <td>Real Time PCR/ Light Cycer II 480 (Roche)</td>
  <td>Whole blood (EDTA) <br></br> 1 Days</td>
</tr>










    </tbody>
  </table>
</div>
</div>

    </>
  );
};

export default MolecularBiology;