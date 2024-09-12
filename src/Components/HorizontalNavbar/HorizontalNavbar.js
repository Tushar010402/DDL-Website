import React, { useState } from 'react';
import './HorizontalNavbar.css';
import LogoOnNavbar from '../../PhotosAndLogos/LogoOnNavbar.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const HorizontalNavbar = () => {
    const [isOptionsVisible, setOptionsVisible] = useState(false);

    const options = [
        { name: "Book Routine Tests At Home", href: "/HomeCollectionServices" },
        { name: "Test Results/Payment", href: "#" },
        { name: "Health Packages", href: "/health-checkup-packages" },
        { name: "Bacteriophage Sensitivity Test", href: "/ServiceBacteriophageSenstivityTesting" },
        { name: "Allergy & Intolerance", href: "#" },
        { name: "Legacy", href: "/Legacy" },
        { name: "Services", href: "#" },
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
        { name: "Terms & Conditions", href: "/terms-and-conditions" },
    ];

    return (
        <div className='HorizontalNavbarMainDiv'>
            <div className='HorizontalNavbarLogo'>
                <a href='/'>                <img src={LogoOnNavbar} alt='Dr Dangs Lab' /></a>

            </div>
            <div className='HorizontalNavbarLinks'>
                <a href='#'>CONTACT US</a>
                <a href='https://reports.drdangslab.com/drdangs/design/PatientPortal/PatientLogin.aspx'>
                    Test Results/Payment
                </a>
            </div>
            <div
                className='HorizontalNavbarMenuIcon'
                onClick={() => setOptionsVisible(!isOptionsVisible)}
            >
                <span>&#9776;</span> {/* Hamburger menu icon */}
            </div>
            <div className={`horizontal-options ${isOptionsVisible ? 'visible' : ''}`}>
                <ul>
                    {options.map((option, index) => (
                        <li key={index}>
                            <Link to={option.href}>{option.name}</Link>
                        </li>
                    ))}
                </ul>
                <div className="horizontal-social-icons">
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                    <FontAwesomeIcon icon={faFacebook} className="icon" />
                </div>
            </div>
        </div>
    );
}

export default HorizontalNavbar;
