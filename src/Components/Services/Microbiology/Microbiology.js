import React from 'react';
import './Microbiology.css';

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

const Microbiology = () => {
  return (
    <>
      <div className='Microbiology-Main-Pages-main-banner'>
        <img src={MicrobilogyImageService} alt='Microbiology' className='Microbiology-Main-Pages-background-image' />
        <div className='Microbiology-Main-Pages-content-container'>
          <div className='Microbiology-Main-Pages-left-content'>
            <h2>Microbiology</h2>
            <p>The study of microscopic organisms causing infection, such as bacteria, viruses, parasites & fungi</p>
          </div>
        </div>
      </div>
      {/* Microbiology Test Details Section */}
      <div className='HaemotologymainTableDIv'>
      <div className='Microbiology-Main-Pages-table-container'>

      <h3>Microbiology</h3>

  <table className='Microbiology-Main-Pages-table'>
    <thead>
      <tr>
        <th>TEST NAME</th>
        <th>METHODOLOGY</th>
        <th>SPECIMEN REQUIREMENT & TAT/REPORT</th>
      </tr>
    </thead>
    <tbody>
    <tr>
  <td>AFB Smear</td>
  <td>Ziehl Neelsen Method / Microscopy</td>
  <td>Urine / Fluid / Aspirates / Sputum etc. <br></br> Same Day</td>
</tr>
<tr>
  <td>Amoebic Serology IgG</td>
  <td>Enzyme linked immunosorbent assay (ELISA) / Microwell plate ELISA Reader</td>
  <td>Serum <br></br> 7 Days</td>
</tr>
<tr>
  <td>Anti-Mullerian Hormone (AMH)</td>
  <td>Enzyme linked immunosorbent assay (ELISA) / Microwell plate ELISA Reader</td>
  <td>Serum <br></br> 7 Days</td>
</tr>
<tr>
  <td>Blood Culture</td>
  <td>Culture / BactAlert 3D</td>
  <td>Whole Blood <br></br> 2 Days</td>
</tr>
<tr>
  <td>Clostridium difficile</td>
  <td>Real Time Polymerase chain reaction / GeneXpert</td>
  <td>Stool <br></br> 2 Days</td>
</tr>
<tr>
  <td>Chikungunya IgM</td>
  <td>Chromatographic Immunoassay / ICT (Rapid)</td>
  <td>Serum <br></br> Same Day</td>
</tr>
<tr>
  <td>Cryptosporidium antigen</td>
  <td>Chromatographic Immunoassay / ICT (Rapid)</td>
  <td>Stool <br></br> Same Day</td>
</tr>
<tr>
  <td>Culture (AFB)</td>
  <td>Liquid culture / BactAlert 3D</td>
  <td>Sputum / Tissue / Fluid / Pus / Aspirates etc. <br></br> 4 Weeks</td>
</tr>
<tr>
  <td>Culture (Bacterial)</td>
  <td>Aerobic method / Manual/API / Vitek 2</td>
  <td>Pus / Fluids / CSF / Throat-swab / Sputum etc. <br></br> 2 Days</td>
</tr>
<tr>
  <td>Culture (Fungal)</td>
  <td>Sabouraud's Dextrose agar with and without chloromycetin + cycloheximide / Vitek 2</td>
  <td>Pus / Fluids / CSF / Throat-swab / Sputum etc. <br></br> 3 Weeks</td>
</tr>
<tr>
  <td>Cysticercosis</td>
  <td>Enzyme linked immunosorbent assay (ELISA) / Microwell plate ELISA Reader</td>
  <td>Serum <br></br> 1 Week</td>
</tr>
<tr>
  <td>CMV IgG</td>
  <td>Enzyme Linked Florescent Assay (ELFA) / VIDAS</td>
  <td>Serum <br></br> Same Day</td>
</tr>
<tr>
  <td>CMV IgM</td>
  <td>Enzyme Linked Florescent Assay (ELFA) / VIDAS</td>
  <td>Serum <br></br> Same Day</td>
</tr>
<tr>
  <td>Cryptosporidium</td>
  <td>Modified ZN Stain / Microscopy</td>
  <td>Stool <br></br> Same Day</td>
</tr>
<tr>
  <td>CSF for Cryptococcus</td>
  <td>India Ink Method / Microscopy</td>
  <td>CSF <br></br> Same Day</td>
</tr>




<tr>
  <td>Chlamydia trachomatis / Neisseria gonorrhoeae</td>
  <td>Real Time Polymerase chain reaction / GeneXpert</td>
  <td>Urine/Swab <br></br> 2 Days</td>
</tr>
<tr>
  <td>Dengue NS1 Antigen</td>
  <td>Enzyme linked immunosorbent assay (ELISA) / Microwell plate ELISA Reader</td>
  <td>Serum <br></br> Same Day</td>
</tr>
<tr>
  <td>Dengue Serology (IgG/IgM)</td>
  <td>Solid phase enzyme immunoassay / Microwell plate ELISA Reader</td>
  <td>Serum <br></br> Same Day</td>
</tr>
<tr>
  <td>Dihydrotestosterone (DHT)</td>
  <td>Enzyme linked immunosorbent assay (ELISA) / Microwell plate ELISA Reader</td>
  <td>Serum <br></br> 7 Days</td>
</tr>
<tr>
  <td>Drug sensitivity testing M.tuberculosis (1st & 2nd line)</td>
  <td>Liquid culture / BactAlert 3D</td>
  <td>Pus / Fluid / CSF / Culture / Sputum etc. <br></br> 14 days</td>
</tr>
<tr>
  <td>Fungus KOH Prep</td>
  <td>KOH Preparation method / Manual</td>
  <td>Scrapings/Skin/Cornea <br></br> Next Day</td>
</tr>
<tr>
  <td>Gram Stain</td>
  <td>Gram’s method / Microscopy</td>
  <td>Pus / Fluid / CSF / Culture / Sputum etc. <br></br> Same Day</td>
</tr>
<tr>
  <td>H – Drop for Cholera</td>
  <td>Hanging drop method / Microscopy</td>
  <td>Stool <br></br> Same Day</td>
</tr>
<tr>
  <td>Stool for reducing substances</td>
  <td>Benedicts Method / Manual</td>
  <td>Stool <br></br> Same Day</td>
</tr>
<tr>
  <td>H. Pylori – IgG</td>
  <td>Enzyme Immunoassay sandwich (ELFA) / VIDAS</td>
  <td>Serum <br></br> Same Day</td>
</tr>
<tr>
  <td>HAV – IgM</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / COBAS 6000 modular</td>
  <td>Serum <br></br> Same Day</td>
</tr>
<tr>
  <td>HAV – Ab</td>
  <td>Microparticle Enzyme Immunoassay (MEIA) / Architect</td>
  <td>Serum <br></br> Same Day</td>
</tr>
<tr>
  <td>HB Core – IgM</td>
  <td>Enzyme Linked Florescent Assay (ELFA) / VIDAS</td>
  <td>Serum <br></br> Same Day</td>
</tr>




<tr>
  <td>HBe Antibodies</td>
  <td>Microparticle Enzyme Immunoassay (MEIA) / Architect</td>
  <td>Serum <br></br> Same Day</td>
</tr>
<tr>
  <td>HBeAntigen</td>
  <td>Enzyme Linked Florescent Assay (ELFA) / VIDAS</td>
  <td>Serum <br></br> Same Day</td>
</tr>
<tr>
  <td>HBsAg</td>
  <td>Chemiluminescence Microparticle Immunoassay (CMIA) / Architect</td>
  <td>Serum / Plasma <br></br> Same Day</td>
</tr>
<tr>
  <td>HBs Antibodies</td>
  <td>Chemiluminescence Microparticle Immunoassay (CMIA) / Architect</td>
  <td>Serum <br></br> Same Day</td>
</tr>
<tr>
  <td>HCV Antibodies</td>
  <td>Chemiluminescence Microparticle Immunoassay (CMIA) / Architect</td>
  <td>Serum / Plasma <br></br> Same Day</td>
</tr>
<tr>
  <td>HEV – IgM</td>
  <td>Enzyme Linked Florescent Assay (ELFA) / VIDAS</td>
  <td>Serum <br></br> 1 Day</td>
</tr>
<tr>
  <td>HSV2 – IgG</td>
  <td>Chemiluminescence Microparticle Immunoassay (CMIA) / Liason</td>
  <td>Serum <br></br> Same Day</td>
</tr>
<tr>
  <td>HSV2 – IgM</td>
  <td>Enzyme linked immunosorbent assay (ELISA) / Microwell plate ELISA Reader</td>
  <td>Serum <br></br> 3 Days</td>
</tr>
<tr>
  <td>HSV 1/2 IgG</td>
  <td>Chemiluminescence Microparticle Immunoassay (CMIA) / Liason</td>
  <td>Serum <br></br> Same Day</td>
</tr>
<tr>
  <td>HSV 1/2 IgM</td>
  <td>Chemiluminescence Microparticle Immunoassay (CMIA) / Liason</td>
  <td>Serum <br></br> Same Day</td>
</tr>
<tr>
  <td>HPV</td>
  <td>PCR (Polymerase chain reaction) and Flow through hybridization / HybriBio Biotech</td>
  <td>Cervical Swab <br></br> 10 Days</td>
</tr>
<tr>
  <td>MeaslesIgG</td>
  <td>Chemiluminescence Immunoassay (CLIA) / Liason</td>
  <td>Serum / Plasma <br></br> Next Day</td>
</tr>
<tr>
  <td>Mumps IgG</td>
  <td>Chemiluminescence Immunoassay (CLIA) / Liason</td>
  <td>Serum / Plasma <br></br> Next Day</td>
</tr>



<tr>
  <td>Rubella IgG</td>
  <td>Chemiluminescence Microparticle Immunoassay (CMIA) / Architect</td>
  <td>Serum / Plasma <br></br> Same Day</td>
</tr>
<tr>
  <td>Rubella IgM</td>
  <td>Chemiluminescence Microparticle Immunoassay (CMIA) / Architect</td>
  <td>Serum / Plasma <br></br> Same Day</td>
</tr>
<tr>
  <td>Stool Routine</td>
  <td>Formal Ether Concentration Method / Microscopy</td>
  <td>Stool <br></br> Same Day</td>
</tr>
<tr>
  <td>Smear for diphtheria</td>
  <td>Albert stain for C.diphtheria / Microscopy</td>
  <td>Throat swab <br></br> Same Day</td>
</tr>
<tr>
  <td>Toxo-IgG</td>
  <td>Chemiluminescence Immunoassay (CLIA) / Architect</td>
  <td>Serum / Plasma <br></br> Same Day</td>
</tr>
<tr>
  <td>Toxo-IgM</td>
  <td>Chemiluminescence Immunoassay (CLIA) / Architect</td>
  <td>Serum / Plasma <br></br> Same Day</td>
</tr>
<tr>
  <td>HIV 1 & 2</td>
  <td>Chemiluminescence Immunoassay (CLIA) / Architect</td>
  <td>Serum / Plasma <br></br> Same Day</td>
</tr>
<tr>
  <td>HIV combi</td>
  <td>Electrochemiluminescence Immunoassay (ECLIA) / Cobas 6000 Moduler</td>
  <td>Serum / Plasma <br></br> Same Day</td>
</tr>
<tr>
  <td>HIV Tridot</td>
  <td>Lateral flow chromatography / Manual</td>
  <td>Serum / Plasma <br></br> Same Day</td>
</tr>
<tr>
  <td>MTB/RIF</td>
  <td>Real Time Polymerase chain reaction / Genexpert</td>
  <td>Sputum, Pus, BAL, Gastric Lavage, CSF, Peritoneal Fluid, Plural Fluid, Synovial Fluid, Endometrial aspirate, Aspirate from Pouch of Douglas, Biopsies, FNAC <br></br> Same Day</td>
</tr>
<tr>
  <td>Urethral Smear-Gonococci</td>
  <td>Gram’s stain / Microscopy</td>
  <td>Urethral Discharge <br></br> Same Day</td>
</tr>
<tr>
  <td>Typhidot IgM</td>
  <td>Immunochromatographic Test / Manual</td>
  <td>Serum <br></br> Same Day</td>
</tr>


<tr>
  <td>Varicella Zoster Virus (VZV)</td>
  <td>Chemiluminescence Immunoassay (CLIA) / Liason</td>
  <td>Serum <br></br> Same Day</td>
</tr>
<tr>
  <td>Vaginal pathogens for Trichomonas, Gardnerella & Candida</td>
  <td>DNA Hybridization / Micro Probe Processor</td>
  <td>Vaginal Swab <br></br> Same Day</td>
</tr>
<tr>
  <td>Wet Smear / Gram Stain</td>
  <td>Gram’s Method / Microscopy</td>
  <td>Vaginal Swab <br></br> Same Day</td>
</tr>
<tr>
  <td>Water for bacteriological testing</td>
  <td>Multiple tube method / Manual</td>
  <td>Water <br></br> 1 Week</td>
</tr>
<tr>
  <td>Widal</td>
  <td>Tube Method / manual</td>
  <td>Blood <br></br> Next Day</td>
</tr>
<tr>
  <td>Rapid Plasma Reagin</td>
  <td>RPR Card Test / Manual</td>
  <td>Serum <br></br> Same Day</td>
</tr>
<tr>
  <td>Infectious Mononucleosis</td>
  <td>Latex Agglutination Test / Manual</td>
  <td>Serum <br></br> Same Day</td>
</tr>
<tr>
  <td>Anti sperm Antibodies</td>
  <td>Enzyme linked immunosorbent assay (ELISA) / Microwell plate ELISA Reader</td>
  <td>Serum <br></br> 2 Days</td>
</tr>
<tr>
  <td>A S O Titre</td>
  <td>Immuno Turbidimetric Assay / Cobas 6000 Moduler</td>
  <td>Serum <br></br> Same Day</td>
</tr>
<tr>
  <td>CRP Quantitative</td>
  <td>Immuno Turbidimetric Assay / Cobas 6000 Moduler</td>
  <td>Serum <br></br> Same Day</td>
</tr>
<tr>
  <td>RA Factor Quantitative</td>
  <td>Immuno Turbidimetric Assay / Cobas 6000 Moduler</td>
  <td>Serum <br></br> Same Day</td>
</tr>
<tr>
  <td>Quantiferon -TB Gold</td>
  <td>Enzyme linked immunosorbent assay (ELISA) / Microwell plate ELISA Reader</td>
  <td>Serum <br></br> 7 Days</td>
</tr>
<tr>
  <td>Carba NP</td>
  <td>Carbapenem Hydrolysis / Manual</td>
  <td>Rectal Swab/Stool/Pus <br></br> 1 Day</td>
</tr>



<tr>
  <td>H. Pylori</td>
  <td>	Immunochromatographic / Manual</td>
  <td>Stool<br></br> 1 Day</td>
</tr>

    </tbody>
  </table>
</div>
</div>

    </>
  );
};

export default Microbiology;