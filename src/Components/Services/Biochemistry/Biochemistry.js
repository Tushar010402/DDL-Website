


import React from 'react';
import './Biochemistry.css';

import { Link } from 'react-router-dom'; 

import ServiceMain1 from '../../../PhotosAndLogos/ServiceMain1.webp';
import ServiceMain2 from '../../../PhotosAndLogos/ServiceMain2.webp';
import ServiceMain3 from '../../../PhotosAndLogos/ServiceMain3.webp';
import ServiceMain5 from '../../../PhotosAndLogos/ServiceMain5.webp';
import ServiceMain6 from '../../../PhotosAndLogos/ServiceMain6.webp';
import ServiceMain7 from '../../../PhotosAndLogos/ServiceMain7.webp';
import ServiceMain8 from '../../../PhotosAndLogos/ServiceMain8.webp';
import ServiceMain9 from '../../../PhotosAndLogos/ServiceMain9.webp';

const Biochemistry = () => {
  return (
    <>
      <div className='Biochemistry-Main-Pages-main-banner'>
        <img src={ServiceMain2} alt='Biochemistry' className='Biochemistry-Main-Pages-background-image' />
        <div className='Biochemistry-Main-Pages-content-container'>
          <div className='Biochemistry-Main-Pages-left-content'>
            <h2>Biochemistry</h2>
            <p>Biochemistry is the study of the chemical substances and vital processes occurring in living organisms</p>
          </div>
        </div>
      </div>
      {/* Haematology Test Details Section */}
      <div className='Biochemistry-Main-Pages-table-container'>
      <h3>Biochemistry</h3>
      <table className='Biochemistry-Main-Pages-table'>
  <thead>
    <tr>
      <th>TEST NAME</th>
      <th>METHODOLOGY</th>
      <th>SPECIMEN REQUIREMENT & TAT/REPORT</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ACE</td>
      <td>BUHLMANN ACE Kinetic Method / COBAS 6000 Modular</td>
      <td>Blood sample (clotted), Heparinised Plasma <br></br> Next Day</td>
    </tr>
    <tr>
      <td>Albumin</td>
      <td>Colorimetric Assay with end point (Bromocresol Green method) / COBAS 6000 Modular</td>
      <td>Blood sample (clotted) <br></br> Same Day</td>
    </tr>
    <tr>
      <td>Acetylcholine Receptor Antibody</td>
      <td>ELISA</td>
      <td>Blood sample (clotted) <br></br> 7 Days</td>
    </tr>
    <tr>
      <td>Active B12 (Holotranscobalamin)</td>
      <td>Chemiluminescence Microparticle Immunoassay (CMIA) / Architect i1000</td>
      <td>Blood sample (clotted) <br></br> 7 Days</td>
    </tr>
    <tr>
      <td>Adenosine Deaminase</td>
      <td>Enzymatic- PNP deamination / COBAS 6000 Modular</td>
      <td>Blood sample (clotted) <br></br> After 2 Days</td>
    </tr>
    <tr>
      <td>Adenosine Deaminase</td>
      <td>Enzymatic- PNP deamination / COBAS 6000 Modular</td>
      <td>Fluid <br></br> Same Day</td>
    </tr>
    <tr>
      <td>Adenosine Deaminase</td>
      <td>Enzymatic- PNP deamination / COBAS 6000 Modular</td>
      <td>CSF <br></br> Same Day</td>
    </tr>
    <tr>
      <td>Alkaline Phosphatase</td>
      <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
      <td>Blood sample (clotted) <br></br> Same Day</td>
    </tr>
    <tr>
      <td>Amylase</td>
      <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
      <td>Blood sample (clotted) <br></br> Same Day</td>
    </tr>
    <tr>
      <td>APO A1</td>
      <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
      <td>Blood sample (clotted) <br></br> Same Day</td>
    </tr>
    <tr>
      <td>APO B</td>
      <td>Enzymatic Colorimetric Assay (Kientic) / COBAS 6000 Modular</td>
      <td>Blood sample (clotted) <br></br> Same Day</td>
    </tr>
    <tr>
      <td>Alfa – Fetoprotein</td>
      <td>Immunoturbidimetric / COBAS 6000 Modular</td>
      <td>Blood sample (clotted), Amniotic Fluid <br></br> Same Day</td>
    </tr>
    <tr>
      <td>Anti – CCP</td>
      <td>Immunoturbidimetric Assay / COBAS 6000 Modular</td>
      <td>Blood sample (clotted) <br></br> Next Day</td>
    </tr>
    <tr>
      <td>Anti – Cardiolipin Antibodies IgG</td>
      <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
      <td>Blood sample (clotted) <br></br> Same Day</td>
    </tr>
    <tr>
      <td>Anti – Cardiolipin Antibodies IgM</td>
      <td>Chemiluminescence Microparticle Immunoassay (CMIA) / Architect</td>
      <td>Blood sample (clotted) <br></br> Same Day</td>
    </tr>

    <tr>
  <td>Adrenocorticotropic Hormone (ACTH)</td>
  <td>Indirect Chemiluminescence Immunoassay / LIAISON</td>
  <td>Plasma (EDTA) <br></br> Next Day</td>
</tr>
<tr>
  <td>Androstenedione</td>
  <td>Indirect Chemiluminescence ImmunoAssay / LIAISON</td>
  <td>Blood sample (clotted) <br></br> 7 Days</td>
</tr>
<tr>
  <td>Anti – Tissue Transglutaminase Antibodies IgA</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> 2 Days</td>
</tr>
<tr>
  <td>Anti – Thyroid peroxidase (Anti-TPO)</td>
  <td>Enzyme-Linked Immunosorbent Assay (ELISA) / Microwell plate ELISA reader</td>
  <td>Blood sample (clotted) <br></br> Next Day</td>
</tr>
<tr>
  <td>Anti Thyroglobulin (Anti-TG)</td>
  <td>Enzyme-Linked Immunosorbent Assay (ELISA) / Microwell plate ELISA reader</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Bilirubin (Direct)</td>
  <td>Chemiluminescence Microparticle Immunoassay (CMIA) / Architect</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Bilirubin (Total)</td>
  <td>Chemiluminescence Microparticle Immunoassay (CMIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Beta – HCG</td>
  <td>Colorimetric Assay (Diazo Method) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Calcium</td>
  <td>Colorimetric Assay (Diazo Method) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Calcium</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Urine <br></br> Same Day</td>
</tr>
<tr>
  <td>Ceruloplasmin</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Chloride</td>
  <td>Colorimetric Assay end point / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Cholestrol Total</td>
  <td>Colorimetric Assay end point / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>CK (Creatine Kinase)</td>
  <td>Immunoturbidimetric Assay / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>CK – MB</td>
  <td>Ion Selective Electrode / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Creatinine Clearance 24 Hrs</td>
  <td>CHOD-Pap Method (enzametic) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) + 24 Hrs Urine <br></br> Same Day</td>
</tr>
<tr>
  <td>Creatinine (standardized against IDMS)</td>
  <td>IFCC N – Acetylcysteine/ COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Creatinine</td>
  <td>Kinetic (Hexokinase Method) / COBAS 6000 Modular</td>
  <td>Urine <br></br> Same Day</td>
</tr>
<tr>
  <td>CA 125</td>
  <td>Calculated</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>CA 15.3</td>
  <td>Kinetic (Jaffes) Method / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>CA 19.9</td>
  <td>Enzymatic End Point Colorimetric Method / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Carbamazepine</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>CEA</td>
  <td>Chemiluminescence Microparticle Immunoassay (CMIA) / Architect i1000</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Complement C3</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Complement C4</td>
  <td>Fluorescence Polarization Immunoassay (FPIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Cortisol</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>C-Peptide</td>
  <td>Immunoturbidimetric Assay / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Dilantin</td>
  <td>Immunoturbidimetric Assay / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Next Day</td>
</tr>
<tr>
  <td>Double marker test (FTST)</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Next Day</td>
</tr>
<tr>
  <td>DHEA-S</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Next Day</td>
</tr>




<tr>
  <td>Erythropoietin</td>
  <td>Chemiluminescence Microparticle Immunoassay (CMIA) / Architect i1000</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Estradiol</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / Immulite</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Free Estriol</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Next Day</td>
</tr>
<tr>
  <td>Ferritin</td>
  <td>Chemiluminescent Immunometric Assay / Immulite</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Free T3</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Free T4</td>
  <td>Chemiluminescent Immunometric Assay / Immulite</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Free Beta HCG</td>
  <td>Enzyme-linked immunosorbent assay (ELISA) / Microwell plate ELISA Reader</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Free Testosterone</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>FSH</td>
  <td>Chemiluminescence Microparticle Immunoassay (CMIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Folate</td>
  <td>Hexokinase / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Glucose</td>
  <td>Enzymatic colorimetric assay / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Gamma GT</td>
  <td>Chemiluminescent Immunometric Assay / Immulite</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Growth hormone</td>
  <td>Ion exchange high performance liquid chromatography / Bio-Rad D10</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Glyco haemoglobin</td>
  <td>Chemiluminescence Microparticle Immunoassay (CMIA) / Architect</td>
  <td>EDTA Blood <br></br> Same Day</td>
</tr>
<tr>
  <td>Homocysteine</td>
  <td>PEG Modified Enzymes Method / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>



<tr>
  <td>HDL – Cholesterol</td>
  <td>Immunoturbidimetric Assay / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>IgA</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>IgE</td>
  <td>Immunoturbidimetric Assay / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>IgG</td>
  <td>Immunoturbidimetric Assay / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>IgM</td>
  <td>Chemiluminescence Immunoassay (CLIA) / Liaison</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>IGF-1</td>
  <td>Enzyme-labeled Chemiluminescent Immunometric Assay / Immulite i1000</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>IGF BP3</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Insulin Level</td>
  <td>Direct Colorimetric Method without deproteinisation / COBAS 6000 Modular</td>
  <td>Plasma/Blood sample (clotted) <br></br> Next Day</td>
</tr>
<tr>
  <td>Iron</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> After 2 Days</td>
</tr>
<tr>
  <td>LH</td>
  <td>Lactate Dehydrogenate U.V. Assay / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>LDH</td>
  <td>Ion Capture / AVL</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Lithium</td>
  <td>Enzymatic Colorimetric Assay / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Lipase</td>
  <td>Particle Enhanced Immunoturbidimetric Assay / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Lipo (a)</td>
  <td>Homogeneous Enzymatic Colorimetric Assay / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Cholesterol LDL</td>
  <td>Colorimetric Method (Chlorophosphonazo III) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>



<tr>
  <td>Magnesium</td>
  <td>Immunoturbidimetric Assay / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Microalbumin (24 hrs)</td>
  <td>Immunoturbidimetric Assay / COBAS 6000 Modular</td>
  <td>Urine <br></br> Same Day</td>
</tr>
<tr>
  <td>Microalbumin (Spot)</td>
  <td>Calculation</td>
  <td>Urine <br></br> Same Day</td>
</tr>
<tr>
  <td>Osmolality, Blood sample (clotted)</td>
  <td>Molybdate Method / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Phosphorus</td>
  <td>Molybdate Method / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Phosphorus</td>
  <td>Molybdate Method / COBAS 6000 Modular</td>
  <td>Urine <br></br> Same Day</td>
</tr>
<tr>
  <td>Potassium</td>
  <td>Ion Selective Electrode / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Procalcitonin</td>
  <td>"ECLIA" Method / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Next Day</td>
</tr>
<tr>
  <td>Protein</td>
  <td>Biuret Reagent Colorimetric Assay Method / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Protein</td>
  <td>Benzethonium Chloride / COBAS 6000 Modular</td>
  <td>CSF <br></br> Same Day</td>
</tr>
<tr>
  <td>Protein / Creatinine Ratio</td>
  <td>As indicated in individual tests / COBAS 6000 Modular</td>
  <td>Urine <br></br> Same Day</td>
</tr>
<tr>
  <td>Proteins 24 HRS</td>
  <td>Benzethonium Chloride (Immunoturbidimetric Assay) / COBAS 6000 Modular</td>
  <td>Urine <br></br> Same Day</td>
</tr>
<tr>
  <td>PSA Free</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>PSA Total</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Phenobarbital</td>
  <td>Chemiluminescence Microparticle Immunoassay (CMIA) / Architect i1000</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>



<tr>
  <td>Pregnancy Associated Plasma Protein A (PAPP A)</td>
  <td>Enzyme-labeled Chemiluminescent Immunometric Assay / Immulite</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Progesterone</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Next Day</td>
</tr>
<tr>
  <td>Prolactin</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Parathyroid hormone (PTH)</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>N-terminal pro B-type natriuretic peptide</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA)</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>RBC fragility</td>
  <td>Manual / colorimeter / COBAS 6000 Modular</td>
  <td>Blood sample (Plasma) <br></br> Next Day</td>
</tr>
<tr>
  <td>Serum free light chain</td>
  <td>Automated / CLIA / COBAS 4000 Integra</td>
  <td>Blood sample (clotted) <br></br> After 3 Days</td>
</tr>
<tr>
  <td>SGOT (AST)</td>
  <td>IFCC without Pyridoxal Phosphate / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> After 3 Days</td>
</tr>
<tr>
  <td>SGPT (ALT)</td>
  <td>IFCC without Pyridoxal Phosphate / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> After 3 Days</td>
</tr>
<tr>
  <td>Sodium</td>
  <td>Ion Selective Electrode / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Sex Hormone Binding Globulin</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Syphilis</td>
  <td>Chemiluminescence Microparticle Immunoassay (CMIA) / Architect</td>
  <td>Blood sample (clotted) <br></br> Next Day</td>
</tr>
<tr>
  <td>Tacrolimus</td>
  <td>Chemiluminescence Microparticle Immunoassay (CMIA) / Architect</td>
  <td>Blood sample (EDTA) <br></br> Same Day</td>
</tr>
<tr>
  <td>Triglycerides</td>
  <td>GPO-PAP Method / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Testosterone (Total)</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>



<tr>
  <td>Thyroglobulin</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>TSH</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Next Day</td>
</tr>
<tr>
  <td>Troponin I</td>
  <td>Chemiluminescence Microparticle Immunoassay (CMIA) / Immulite</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Urea</td>
  <td>Kinetic with urease and GLDH / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Uric Acid</td>
  <td>4AAP Method / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Uric Acid (24 hrs)</td>
  <td>4AAP Method / COBAS 6000 Modular</td>
  <td>Urine <br></br> Same Day</td>
</tr>
<tr>
  <td>Valproic Acid</td>
  <td>Chemiluminescence Microparticle Immunoassay (CMIA) / Architect</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>VLDL Cholesterol</td>
  <td>Calculated</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Zinc</td>
  <td>Colorimetric Method / COBAS 6000 Modular</td>
  <td>Blood sample (clotted) <br></br> Next Day</td>
</tr>
<tr>
  <td>25 OH Vitamin D</td>
  <td>Chemiluminescent Immunoassay (CLIA) / Liaison</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>17-OH-Progesterone</td>
  <td>Enzyme-linked immunosorbent assay (ELISA) / Microwell plate ELISA Reader</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Adoption Profile</td>
  <td>Fully automated/Microscopy</td>
  <td>Blood sample (clotted/EDTA), Urine <br></br> 3 Days</td>
</tr>
<tr>
  <td>PCOD Profile</td>
  <td>Fully automated</td>
  <td>Blood sample (clotted) <br></br> 3 Days</td>
</tr>
<tr>
  <td>Lipid Profile</td>
  <td>Fully automated</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>
<tr>
  <td>Liver Profile</td>
  <td>Fully automated</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>


<tr>
  <td>Kidney/Renal Profile</td>
  <td>Fully automated</td>
  <td>Blood sample (clotted) <br></br> Same Day</td>
</tr>

  </tbody>
</table>

</div>

    </>
  );
};

export default Biochemistry;