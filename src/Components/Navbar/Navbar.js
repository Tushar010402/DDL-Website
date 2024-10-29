import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import LogoOnNavbar from '../../PhotosAndLogos/LogoOnNavbar.JPG';
import NameOnNavBar from '../../PhotosAndLogos/Drdangsname.JPG';

const Navbar = () => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleWindowMouseLeave = (event) => {
      const isOutsideNavbar = navbarRef.current && !navbarRef.current.contains(event.target);
      const isInsideCurrentWebsite = event.target.origin === window.location.origin;

      // Check if the mouse is near the top of the viewport and not over browser UI elements
      const isOverTopViewport = event.clientY <= 0;
      const isOverBrowserUI = event.target.tagName === 'HTML';

      if (isOutsideNavbar && !isInsideCurrentWebsite && !isOverTopViewport && !isOverBrowserUI) {
        setOptionsVisible(false);
      }
    };

    window.addEventListener('mouseleave', handleWindowMouseLeave);

    return () => {
      window.removeEventListener('mouseleave', handleWindowMouseLeave);
    };
  }, []);

  const options = [
    { name: "Book Routine Tests At Home", href: "/HomeCollectionServices" },
    { name: "Test Results/Payment", href: "https://reports.drdangslab.com/drdangs/design/PatientPortal/PatientLogin.aspx" },
    { name: "Health Packages", href: "/health-checkup-packages" },
    { name: "Bacteriophage Sensitivity Test", href: "/ServiceBacteriophageSenstivityTesting" },
    { name: "Allergy & Intolerance", href: "/ServiceAllergytesting" },
    { name: "Legacy", href: "/Legacy" },
    { name: "Services", href: "/Services" },
    { name: "Quality Assurance", href: "/QualityAssurance" },
    { name: "Virtual Tour", href: "/VirtalTour" },
    { name: "Research & Trials", href: "/ResearchAndTrials" },
    { name: "Recognition", href: "/Recognition" },
    { name: "Careers", href: "/Careers" },
    { name: "News", href: "/News" },
    { name: "Health Guide", href: "/Healthguide" },
    { name: "Feedback", href: "/Feedback" },
    { name: "Corona Virus", href: "/CoronaVirus" },
    { name: "Swine Flu(H1N1) Test", href: "/SwineFlue" },
    { name: "H3N2 Virus Infection Test", href: "/h3N2" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" }, // Link to the route defined in App.js
  ];

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div
        className="navbar"
        onMouseLeave={() => setOptionsVisible(false)}
        ref={navbarRef}
      >
        <div className='NavbarMainDiv'>
          <div className='NavBarLogoRed'>
            <a href='/'>
            <img src={LogoOnNavbar} alt="Logo" /></a>
          </div>
          <div className='NameOnTheNavBar'>
            <img src={NameOnNavBar} alt="Name" />
          </div>
          <div
            className='OptionsOnNavbar'
            onMouseEnter={() => setOptionsVisible(true)}
          >
            <div
              className="logo"
              onClick={() => setOptionsVisible(!isOptionsVisible)}
            >
              {isOptionsVisible ? '✕' : '☰'}
            </div>
            {isOptionsVisible && (
              <div className="options">
                <div className='OptionsOnTheNavbarMainDiv'>
                  <ul>
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {filteredOptions.map((option, index) => (
                      <li key={index}>
                        <Link to={option.href}>{option.name}</Link> {/* Use Link component */}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="social-icons">
                  <FontAwesomeIcon icon={faInstagram} className="icon" />
                  <FontAwesomeIcon icon={faTwitter} className="icon" />
                  <FontAwesomeIcon icon={faFacebook} className="icon" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
