"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactModal from './ContactModal';
import styles from './HorizontalNavbar.module.css';

const HorizontalNavbar = () => {
    const [isOptionsVisible, setOptionsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const optionsRef = useRef(null);

    const options = [
        { name: "Book Routine Tests At Home", href: "/HomeCollection" },
        { name: "Test Results/Payment", href: "https://reports.drdangslab.com/drdangs/design/PatientPortal/PatientLogin.aspx" },
        { name: "Health Packages", href: "/health-checkup-packages" },
        { name: "Bacteriophage Sensitivity Test", href: "/Bacteriophage-Sensitivity-Testing" },
        { name: "Allergy & Intolerance", href: "/food-allergy-test" },
        { name: "Legacy", href: "/Legacy" },
        { name: "Services", href: "/Services" },
        { name: "Quality Assurance", href: "/QualityAssurance" },
        { name: "Virtual Tour", href: "/VirtualTour" },
        { name: "Research & Trials", href: "/ResearchAndTrials" },
        { name: "Recognition", href: "/Recognition" },
        { name: "Careers", href: "/Career" },
        { name: "News", href: "/News" },
        { name: "Health Guide", href: "/Healthguide" },
        { name: "Feedback", href: "/Feedback" },
        { name: "Corona Virus", href: "/CoronaVirus" },
        { name: "Swine Flu(H1N1) Test", href: "/Swine-Flu-H1n1-Test.aspx" },
      
        // -- New Test Pages --
        { name: "STD Testing", href: "/STD-Testing" },
        { name: "Blood Tests for Cardiac Health", href: "/4-Key-Blood-Tests-for-Cardiac-Health" },
        { name:"Vitamin C Blood Test", href: "/vitamin-c-blood-test-in-delhi-ncr" },
        { name: "H3N2 Virus Infection Test", href: "/H3N2" },
        { name: "Terms & Conditions", href: "/TermAndConditions" },
      ];

    const handleContactClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const handleOutsideClick = (e) => {
        if (optionsRef.current && !optionsRef.current.contains(e.target)) {
            setOptionsVisible(false);
        }
    };

    const handleOptionClick = () => {
        setOptionsVisible(false);
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
        <div className={styles.HorizontalNavbarMainDiv}>
            <div className={styles.HorizontalNavbarLogo}>
                <Link href='/'>
                    <Image 
                        src="/PhotosAndLogos/LogoOnNavbar.JPG" 
                        alt='Dr Dangs Lab'
                        width={56}
                        height={56}
                        priority
                    />
                </Link>
            </div>
            <div className={styles.HorizontalNavbarLinks}>
                <a href='#' onClick={handleContactClick}>CONTACT US</a>
                <a 
                    href='https://reports.drdangslab.com/drdangs/design/PatientPortal/PatientLogin.aspx'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Test Results/Payment
                </a>
            </div>
            <div
                className={styles.HorizontalNavbarMenuIcon}
                onClick={() => setOptionsVisible(!isOptionsVisible)}
            >
                <span>&#9776;</span>
            </div>
            {isOptionsVisible && (
                <div 
                    className={`${styles.horizontalOptions} ${isOptionsVisible ? styles.visible : ''}`} 
                    ref={optionsRef}
                >
                    <input
                        type="text"
                        placeholder="Search options..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.horizontalSearchBar}
                    />
                    <ul>
                        {filteredOptions.map((option, index) => (
                            <li key={index} onClick={handleOptionClick}>
                                {option.href.startsWith('http') ? (
                                    <a 
                                        href={option.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {option.name}
                                    </a>
                                ) : (
                                    <Link href={option.href}>{option.name}</Link>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className={styles.horizontalSocialIcons}>
                        <a href="https://www.instagram.com/drdangs/" className={styles.socialLink} aria-label="Instagram">
                                    <svg className={styles.icon} viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                                    </svg>
                                </a>
                                <a href="https://x.com/drdangslab" className={styles.socialLink} aria-label="Twitter">
                                    <svg className={styles.icon} viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </a>
                                <a href="https://www.facebook.com/DrDangsLab/" className={styles.socialLink} aria-label="Facebook">
                                   <svg className={styles.icon} viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                    </div>
                </div>
            )}
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default HorizontalNavbar;
