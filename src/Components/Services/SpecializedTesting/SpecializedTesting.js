


import React from 'react';
import './SpecializedTesting.css';

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
import YourImagePath from '../../../PhotosAndLogos/Servicesspecialized.webp';

const SpecializedTesting = () => {
  return (
    <>
      <div className='SpecializedTesting-Main-Pages-main-banner'>
        <img src={ServiceMain9} alt='SpecializedTesting' className='SpecializedTesting-Main-Pages-background-image' />
        <div className='SpecializedTesting-Main-Pages-content-container'>
          <div className='SpecializedTesting-Main-Pages-left-content'>
            <h2>Specialized Testing For Hospitals</h2>
            <p>Fully automated allergy & food intolerance testing by state of the art equipment with allergens most suited to our population base.</p>
          </div>
        </div>
      </div>
      {/* SpecializedTesting Test Details Section */}
      <div className="HaemotologymainTableDIv">
  <div className="SpecializedTesting-Main-Pages-content-container">
    <div className="SpecializedTesting-Main-Pages-left-content">
      <ul className="specialized-list">
        <li>Robust capabilities of handling routine as well as specialized testing services for hospitals and medical centres.</li>
        <li>Specialized Infection Control Services for ICUs, OTs, and Wards</li>
        <li>In-House logistics team for setting up and handling outsourced samples</li>
        <li>Fast Turnaround Time and specialists in every field</li>
        <li>Strong academic background for providing training and increasing the efficiency of hospital staff</li>
        <li>Abundant experience in handling hospital samples over the past 25 years</li>
      </ul>
    </div>
    <div className="SpecializedTesting-Main-Pages-right-content">
      <img src={YourImagePath} alt="Hospitals and Medical Centers" className="specialized-image" />
    </div>
  </div>
</div>


    </>
  );
};

export default SpecializedTesting;