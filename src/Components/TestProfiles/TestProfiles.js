import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TestProfiles.css';
import TestProfileBackgroundImage from '../../PhotosAndLogos/OurLabC1.jpeg';
import TestProfile40Years from '../../PhotosAndLogos/TestProgile40years.png';
import TestProfileDiscover from '../../PhotosAndLogos/TestProgileDiscover.png';
import TestProfileNABL from '../../PhotosAndLogos/TestProgileNABL.png';
import TestProfileGoogle from '../../PhotosAndLogos/TestProgilegoogleRating.png';


const TestProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('https://backend.dangsccg.co.in/api/api/packages/');
        const data = await response.json();
        setProfiles(data.results);  // Assuming the API returns an object with a 'results' field
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  const handlePackageSelect = (packageName) => {
    navigate('/HomeCollectionServices', { state: { selectedPackage: packageName } });
  };

  return (
    <>
    <div className='TestProfileHeaderImagae'>
            <img src={TestProfileBackgroundImage}></img>

        </div>

        <div className='health-checkup-section'>
      <h2>Health Checkup Packages in Delhi / NCR</h2>
      <p className='subtitle'>
        We provide home collection services in Delhi-NCR region including Gurgaon, Faridabad, Noida, and Ghaziabad.
      </p>

      <a href='../../../TEST-PACKAGES-BROCHURE-INCLUDING-FM-TESTS-APRIL24.pdf' className='download-button'>
        Download Health Test Package Brochure
      </a>

      <p className='description'>
        Dr. Dangs Lab provides an extensive range of health packages that are specifically curated by the Dr. Dangs to include effective diagnostic tests according to varied diagnostic requirements. Preventive checks are an important part of disease prevention and are the most important tools in the hands of doctors to identify diseases and risk factors early. We offer a range of preventive health packages including our flagship Smart Check Profiles. Our Smart Check Profiles provide successively deeper insights into the body's functions. Various other packages provide diagnostic solutions for commonly occurring diseases as well as health concerns.
      </p>

      <div className='features'>
        <div className='feature-item'>
          <img src={TestProfile40Years} alt='40 Years of Service' className='feature-image' />
          <p id='TestProfileInP'>40 Years of Service</p>
        </div>
        <div className='feature-item'>
          <img src={TestProfileGoogle} alt='Rated 4.9/5' className='feature-image' />
          <p id='TestProfileInP'>Rated 4.9/5<br />Customers love us!</p>
        </div>
        <div className='feature-item'>
          <img src={TestProfileNABL} alt='NABL Accredited' className='feature-image' />
          <p id='TestProfileInP'>NABL Accredited</p>
        </div>
        <div className='feature-item'>
          <img src={TestProfileDiscover} alt='Get Personalized Test Package' className='feature-image' />
          <p id='TestProfileInP'>Get Personalized Test Package</p>
        </div>
      </div>
    </div>
    <div className="test-profiles">
        
      <div className="profiles-row">
        {profiles.map((profile, index) => (
          <div className="profile-card" key={index}>
            <h2>{profile.package_name}</h2>
            <p>{profile.package_detail}</p>
            <h3>Tests:</h3>
            <ul>
              {profile.tests_details.map((test, idx) => (
                <li key={idx}>{test}</li>
              ))}
            </ul>
            {profile.notes_contents && profile.notes_contents.length > 0 && (
              <div className="note-section">
                <h3>Notes:</h3>
                <ul>
                  {profile.notes_contents.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </div>
            )}
            <p className="price"><div className='PriceInTestProfiles'><h3>Price:</h3></div> <div className='ProfilesPriceValue'><h3>₹{profile.package_rate}</h3></div></p>
            <button className="book-button" onClick={() => handlePackageSelect(profile.package_name)}>Book this package</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default TestProfiles;
