import React, { useState, useRef, useEffect } from 'react';
import './HorizontalNavbar.css';
import LogoOnNavbar from '../../PhotosAndLogos/LogoOnNavbar.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal'; // Import the Contact Modal

const HorizontalNavbar = () => {
    const [isOptionsVisible, setOptionsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
    const [searchTerm, setSearchTerm] = useState(""); // State for search term
    const optionsRef = useRef(null); // Ref for closing options when clicking outside

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
        { name: "Terms & Conditions", href: "/terms-and-conditions" },
    ];

    const handleContactClick = () => {
        setIsModalOpen(true); // Open the modal when "CONTACT US" is clicked
    };

    const handleOutsideClick = (e) => {
        if (optionsRef.current && !optionsRef.current.contains(e.target)) {
            setOptionsVisible(false); // Close options when clicking outside
        }
    };

    const handleOptionClick = () => {
        setOptionsVisible(false); // Close options when an option is selected
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const filteredOptions = options.filter(option =>
        option.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='HorizontalNavbarMainDiv'>
            <div className='HorizontalNavbarLogo'>
                <a href='/'>
                    <img src={LogoOnNavbar} alt='Dr Dangs Lab' />
                </a>
            </div>
            <div className='HorizontalNavbarLinks'>
                <a href='#' onClick={handleContactClick}>CONTACT US</a>
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
            {isOptionsVisible && (
                <div className={`horizontal-options ${isOptionsVisible ? 'visible' : ''}`} ref={optionsRef}>
                    <input
                        type="text"
                        placeholder="Search options..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="horizontal-search-bar"
                    />
                    <ul>
                        {filteredOptions.map((option, index) => (
                            <li key={index} onClick={handleOptionClick}>
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
            )}
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default HorizontalNavbar;
