import React from 'react';
import './Haematology.css';

import { Link } from 'react-router-dom'; 

import ServiceMain1 from '../../../PhotosAndLogos/ServiceMain1.webp';
import ServiceMain2 from '../../../PhotosAndLogos/ServiceMain2.webp';
import ServiceMain3 from '../../../PhotosAndLogos/ServiceMain3.webp';
import ServiceMain5 from '../../../PhotosAndLogos/ServiceMain5.webp';
import ServiceMain6 from '../../../PhotosAndLogos/ServiceMain6.webp';
import ServiceMain7 from '../../../PhotosAndLogos/ServiceMain7.webp';
import ServiceMain8 from '../../../PhotosAndLogos/ServiceMain8.webp';
import ServiceMain9 from '../../../PhotosAndLogos/ServiceMain9.webp';

const Haematology = () => {
  return (
    <>
      <div className='Haematology-Main-Pages-main-banner'>
        <img src={ServiceMain1} alt='Haematology' className='Haematology-Main-Pages-background-image' />
        <div className='Haematology-Main-Pages-content-container'>
          <div className='Haematology-Main-Pages-left-content'>
            <h2>Haematology</h2>
            <p>Haematology is the study of diseases and disorders affecting blood cells, their production, and any organs and tissues involved in hematopoiesis</p>
          </div>
        </div>
      </div>
      {/* Haematology Test Details Section */}
      <div className='HaemotologymainTableDIv'>
      <div className='Haematology-Main-Pages-table-container'>

      <h3>Haematology</h3>

  <table className='Haematology-Main-Pages-table'>
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
        <td>Blood (EDTA) <br/> Same Day</td>
      </tr>
      <tr>
        <td>Activated Partial Thromboplastin Time (APTT)</td>
        <td>ACL 7000</td>
        <td>Citrated Blood <br/> Same Day</td>
      </tr>
      <tr>
        <td>Blood Group</td>
        <td>ID card-LISS Method- Column agglutination</td>
        <td>EDTA Blood <br/> Same Day</td>
      </tr>
      <tr>
        <td>Blood For Sickling</td>
        <td>HPLC +Sodium metabisulphite/Variant 2</td>
        <td>EDTA Blood <br/> Same Day</td>
      </tr>
      <tr>
        <td>Bone Marrow ASP</td>
        <td>Microscopic Examination</td>
        <td>Bone Marrow <br/> 2 Days</td>
      </tr>
      <tr>
        <td>Coomb's Test - Direct / Indirect</td>
        <td>ID card-LISS Method- Column agglutination</td>
        <td>EDTA Blood / serum <br/> Same Day</td>
      </tr>
      <tr>
        <td>CBC (Hb, MCV, MCH, MCHC, TLC, PCV, Platelet count, RBC Count)</td>
        <td>Optical, Fluorescence, flow cytometry and SLS-Hb/Sysmex XT4000i</td>
        <td>EDTA Blood <br/> Same Day</td>
      </tr>
      <tr>
        <td>ESR</td>
        <td>(Automated) Westergren/Vesmatic 80/30</td>
        <td>EDTA Blood <br/> Same Day</td>
      </tr>
      <tr>
        <td>G6PDH</td>
        <td>Methylene Blue Reduction</td>
        <td>EDTA Blood <br/> Same Day</td>
      </tr>
      <tr>
        <td>HbA2</td>
        <td>HPLC using Beta thal short program/Variant 2,Bio-Rad</td>
        <td>EDTA Blood <br/> 3 Days</td>
      </tr>
      <tr>
        <td>LE Cell</td>
        <td>Antigen Antibody reaction & Microscopy</td>
        <td>Defibrinated Blood <br/> Same Day</td>
      </tr>
      <tr>
        <td>Lupus Anticoagulant (LA1, LA2)</td>
        <td>Screen LA1 /Confirmation LA2 (Diluted Russel Venom Test, DRVTT)/ACL 7000</td>
        <td>Citrated Blood <br/> Same Day</td>
      </tr>
      <tr>
        <td>Peripheral Smear</td>
        <td>Microscopic</td>
        <td>Blood <br/> Same Day</td>
      </tr>
      <tr>
        <td>Prothrombin Time (PT)</td>
        <td>ACL 7000</td>
        <td>Citrated Blood <br/> Same Day</td>
      </tr>
      <tr>
        <td>Rapid Malaria Test</td>
        <td>Detection of Plasmodium lactate dehydrogenase using monoclonal antibodies (Dipstick)</td>
        <td>EDTA Blood <br/> Same Day</td>
      </tr>
      <tr>
        <td>Reticulocyte Count</td>
        <td>Supravital Staining (New Methylene Blue)</td>
        <td>EDTA Blood <br/> Same Day</td>
      </tr>
      <tr>
        <td>Coagulation Profile</td>
        <td>Fully automated</td>
        <td>EDTA, Citrate Blood <br/> 2 Days</td>
      </tr>
      <tr>
        <td>Thrombophilia Profile</td>
        <td>Fully automated</td>
        <td>EDTA, Citrate & Clotted Blood <br/> 7 Days</td>
      </tr>
    </tbody>
  </table>
</div>
</div>

    </>
  );
};

export default Haematology;