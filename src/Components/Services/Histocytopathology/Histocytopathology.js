

import React from 'react';
import './Histocytopathology.css';

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

const Histocytopathology = () => {
  return (
    <>
      <div className='Histocytopathology-Main-Pages-main-banner'>
        <img src={ServiceMain6} alt='Histocytopathology' className='Histocytopathology-Main-Pages-background-image' />
        <div className='Histocytopathology-Main-Pages-content-container'>
          <div className='Histocytopathology-Main-Pages-left-content'>
            <h2>Histocytopathology</h2>
            <p>Histopathology is the examination of tissues from the body microscopically to spot the signs and characteristics of disease</p>
          </div>
        </div>
      </div>
      {/* Histocytopathology Test Details Section */}
      <div className='HaemotologymainTableDIv'>
      <div className='Histocytopathology-Main-Pages-table-container'>

      <h3>Histopathology</h3>

  <table className='Histocytopathology-Main-Pages-table'>
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
  <td>All types specimen in 10% formalin <br></br> 7 days</td>
</tr>
<tr>
  <td>Histopathology (Large Specimen)</td>
  <td>Staining / Microscopy</td>
  <td>All types specimen in 10% formalin <br></br> 7 days</td>
</tr>






    </tbody>
  </table>
</div>
<div className='Histocytopathology-Main-Pages-table-container'>

<h3>Cytology</h3>

<table className='Histocytopathology-Main-Pages-table'>
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
  <td>Synovial fluid/Pleural fluid/CSF/Sputum/Urine/BAL fluid <br></br> Next Day</td>
</tr>
<tr>
  <td>FNAC</td>
  <td>Microscopy</td>
  <td>Aspirate material <br></br> Next Day</td>
</tr>
<tr>
  <td>(Fine needle aspirate)</td>
  <td>Microscopy</td>
  <td>Aspirate material <br></br> Next Day</td>
</tr>
<tr>
  <td>PAP Smear (Liquid based)</td>
  <td>Microscopy</td>
  <td>Endocervical smear in Liquid <br></br> 2 Days</td>
</tr>
<tr>
  <td>PAP Smear (Conventional)</td>
  <td>Microscopy</td>
  <td>Endocervical smear on slide <br></br> Same Day</td>
</tr>



</tbody>
</table>
</div>
</div>

    </>
  );
};

export default Histocytopathology;