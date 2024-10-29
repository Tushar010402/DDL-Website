import React from 'react';
import './Services.css';
import ServicesWebImage from '../../PhotosAndLogos/servicessC.webp';
import { Link } from 'react-router-dom'; 
import MicrobilogyImageService from '../../PhotosAndLogos/VirtualTOur42.webp';
import ServiceMain1 from '../../PhotosAndLogos/ServiceMain1.webp';
import ServiceMain2 from '../../PhotosAndLogos/ServiceMain2.webp';
import ServiceMain3 from '../../PhotosAndLogos/ServiceMain3.webp';
import ServiceMain5 from '../../PhotosAndLogos/ServiceMain5.webp';
import ServiceMain6 from '../../PhotosAndLogos/ServiceMain6.webp';
import ServiceMain7 from '../../PhotosAndLogos/ServiceMain7.webp';
import ServiceMain8 from '../../PhotosAndLogos/ServiceMain8.webp';
import ServiceMain9 from '../../PhotosAndLogos/ServiceMain9.webp';

const Services = () => {
  return (
    <>
      <div className='Services-Main-Pages-main-banner'>
        <img src={ServicesWebImage} alt='Services' className='Services-Main-Pages-background-image' />
        <div className='Services-Main-Pages-content-container'>
          <div className='Services-Main-Pages-left-content'>
            <h2>Our Services</h2>
            <p>Experience world-class diagnostic care</p>
          </div>
        </div>
      </div>

      {/* Services Navigation Section with Images */}
      <div className="Services-Main-Pages-navigation">
        <Link to="/ServiceHaematology" className="Services-Main-Pages-link">
          <div className="Services-Main-Pages-link-content">
            <img src={ServiceMain1} alt="Haematology" className="Services-Main-Pages-image" />
            <h3>Haematology</h3>
            <p>Advanced blood tests and analysis</p>
          </div>
        </Link>
        <Link to="/ServiceBiochemistry" className="Services-Main-Pages-link">
          <div className="Services-Main-Pages-link-content">
            <img src={ServiceMain2} alt="Biochemistry" className="Services-Main-Pages-image" />
            <h3>Biochemistry</h3>
            <p>Comprehensive biochemical testing</p>
          </div>
        </Link>
        <Link to="/ServiceClinicalpathology" className="Services-Main-Pages-link">
          <div className="Services-Main-Pages-link-content">
            <img src={ServiceMain3} alt="Clinical Pathology" className="Services-Main-Pages-image" />
            <h3>Clinical Pathology</h3>
            <p>Accurate pathology results</p>
          </div>
        </Link>
        <Link to="/ServiceMicrobiology" className="Services-Main-Pages-link">
          <div className="Services-Main-Pages-link-content">
            <img src={MicrobilogyImageService} alt="Microbiology" className="Services-Main-Pages-image" />
            <h3>Microbiology</h3>
            <p>Specialized microbial tests</p>
          </div>
        </Link>
        <Link to="/ServiceAllergytesting" className="Services-Main-Pages-link">
          <div className="Services-Main-Pages-link-content">
            <img src={ServiceMain5} alt="Allergy & Intolerance" className="Services-Main-Pages-image" />
            <h3>Allergy & Intolerance</h3>
            <p>Identify allergens and intolerances</p>
          </div>
        </Link>
        <Link to="/ServiceHistocytopathology" className="Services-Main-Pages-link">
          <div className="Services-Main-Pages-link-content">
            <img src={ServiceMain6} alt="Histocytopathology" className="Services-Main-Pages-image" />
            <h3>Histocytopathology</h3>
            <p>Microscopic examination of tissues</p>
          </div>
        </Link>
        <Link to="/ServiceFlowcytometry" className="Services-Main-Pages-link">
          <div className="Services-Main-Pages-link-content">
            <img src={ServiceMain7} alt="Molecular Biology" className="Services-Main-Pages-image" />
            <h3>Flow Cytometry</h3>
            <p>Cellular analysis and sorting</p>
          </div>
        </Link>
        <Link to="/ServiceMolecularbiology" className="Services-Main-Pages-link">
          <div className="Services-Main-Pages-link-content">
            <img src={ServiceMain8} alt="Flow Cytometry" className="Services-Main-Pages-image" />
            <h3>Molecular Biology</h3>
            <p>Genetic testing and analysis</p>
           
          </div>
        </Link>
        <Link to="/ServiceSpecializedTestingForHospitals" className="Services-Main-Pages-link">
          <div className="Services-Main-Pages-link-content">
            <img src={ServiceMain9} alt="Specialized Testing for Hospitals" className="Services-Main-Pages-image" />
            <h3>Specialized Testing for Hospitals</h3>
            <p>Advanced testing for healthcare providers</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Services;
