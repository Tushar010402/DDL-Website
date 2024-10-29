







import React from 'react';
import './FlowCytometry.css';

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

const FlowCytometry = () => {
  return (
    <>
      <div className='FlowCytometry-Main-Pages-main-banner'>
        <img src={ServiceMain7} alt='FlowCytometry' className='FlowCytometry-Main-Pages-background-image' />
        <div className='FlowCytometry-Main-Pages-content-container'>
          <div className='FlowCytometry-Main-Pages-left-content'>
            <h2>Flow Cytometry</h2>
            <p>Is a technique used to detect and measure physical and chemical characteristics of a population of cells or particles</p>
          </div>
        </div>
      </div>
      {/* FlowCytometry Test Details Section */}
      <div className='HaemotologymainTableDIv'>
      <div className='FlowCytometry-Main-Pages-table-container'>

      <h3>Flow Cytometry</h3>

  <table className='FlowCytometry-Main-Pages-table'>
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