import React from 'react';
import './AllergyWeb.css';
import AllergyWebImage from '../../PhotosAndLogos/AllergyMainHeaderImage.webp';
import AllergyFood from '../../PhotosAndLogos/FOODALLEGRY.webp';
import AllergyImupro from '../../PhotosAndLogos/IMUPRO.webp';


const AllergyWeb = () => {
  return (
    <>
      <div className='AllergyWeb-main-banner'>
        <img src={AllergyWebImage} alt='AllergyWeb' className='AllergyWeb-background-image' />
        <div className='AllergyWeb-content-container'>
          <div className='AllergyWeb-left-content'>
            <h2>Allergy & Intolerance</h2>
            <p>
              Allergy & Intolerance is the estimation of the concentration of specific antibodies 
              in the blood that are elevated due to exposure to allergens.
            </p>
          </div>
        </div>
      </div>
      
      <div className="AllergyWeb-table-container">
        <table className="AllergyWeb-table">
          <thead>
            <tr>
              <th>TEST NAME</th>
              <th>SPECIMEN REQUIREMENT & TAT/REPORT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Comprehensive Allergy profile- IgE Based <br/>(163 Allergens & 294 Components)</td>
              <td>Upto 1 Week</td>
            </tr>
            <tr>
              <td>Food profile- IgE Based <br/>(93 Allergens & 154 Components)</td>
              <td>Upto 1 Week</td>
            </tr>
            <tr>
              <td>Respiratory profile- IgE Based <br/>(62 Allergens & 122 Components)</td>
              <td>Upto 1 Week</td>
            </tr>
            <tr>
              <td>Skin Allergy (Rashes/Hives/Urticaria) Profile- IgE Based <br/>(99 Allergens & 179 Components)</td>
              <td>Upto 1 Week</td>
            </tr>
            <tr>
              <td>Vegetarian - Food Allergy Profile - IgE Based <br/>(64 Allergens & 111 Components)</td>
              <td>Upto 1 Week</td>
            </tr>
            <tr>
              <td>Moulds & Yeast Allergy Profile - IgE Based <br/>(6 Allergens & 13 Components)</td>
              <td>Upto 1 Week</td>
            </tr>
            <tr>
              <td>Nuts Allergy Profile - IgE Based <br/>(9 Allergens & 29 Components)</td>
              <td>Upto 1 Week</td>
            </tr>
            <tr>
              <td>Allergy (IgE based)- Comprehensive Allergy Panel <br/>(67 allergens)</td>
              <td>Upto 1 Week</td>
            </tr>
            <tr>
                <td>Food intolerance profiles - IgG Based - 22/44/90/180/270 & 90 vegetarian items</td>
                <td>4 weeks</td>
            </tr>
          </tbody>
        </table>

        
      </div>

     {/* Section for brochures and reports */}
     <div className="AllergyWeb-info-section">
        <div className="AllergyWeb-card">
          <img src={AllergyFood} alt="Allergy Testing" className="info-image" />
          <div className="card-content">
            <h3>Food & Respiratory Allergy Testing</h3>
            <p>163 allergens | 294 components</p>
            <div className="button-group">
  <a 
    href="../../../FOODALLEGRY.PDf" 
    className="Allergy-info-button" 
    download="TEST-PACKAGES-BROCHURE.pdf">
      Download Brochure
  </a>
  <a 
    href="../../../Food&Respiratory_SAMPLE_REPORT.PDf" 
    className="Allergy-info-button" 
    download="Sample-Report.pdf">
      Sample Report
  </a>
</div>

          </div>
        </div>
        <div className="AllergyWeb-card">
          <img src={AllergyImupro} alt="Better Health" className="info-image" />
          <div className="card-content">
            <h3>Diagnosis & Treatment</h3>
            <p>Diagnosis & Treatment of IgG Food Allergies</p>
            <div className="button-group">
  <a 
    href="../../../IMUPRO.PDF" 
    className="Allergy-info-button" 
    download="TEST-PACKAGES-BROCHURE.pdf">
      Download Brochure
  </a>
  <a 
    href="../../../SAMPLEREPORT-IMUPRO.pdf" 
    className="Allergy-info-button" 
    download="Sample-Report.pdf">
      Sample Report
  </a>
</div>
          </div>
        </div>
      </div>

      {/* Section for video */}
      <div className="AllergyWeb-video-section">
        <h2 className="video-title">Food Allergy and Intolerance</h2>
        <p className="video-subtitle">All you need to know - in 3 minutes</p>
        <p className="video-author">Dr. Arjun Dang</p>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/wVAQOYfidOw?si=hYSD3YZ6oxKg-acD"
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </>
  )
}

export default AllergyWeb;
