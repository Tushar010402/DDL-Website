// src/app/Components/HorizontalNavbar2/HorizontalNavbar2.jsx

"use client";

import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ChevronDown, X } from 'lucide-react';
import ContactModal from '../HorizontalNavbar/ContactModal';
import styles from './MobileSecondaryNavbar.module.css';

const HorizontalNavbar2 = () => {
    const [isOptionsVisible, setOptionsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isTestsDropdownOpen, setTestsDropdownOpen] = useState(false);

    // Store dynamic tests fetched from API
    const [dynamicTests, setDynamicTests] = useState([]);

    // Refs
    const optionsRef = useRef(null);
    const searchInputRef = useRef(null);

    // Fetch dynamic tests on component mount
    useEffect(() => {
        fetchTests();
    }, []);

    const fetchTests = async () => {
        try {
            const response = await axios.get('https://backend.dangsccg.co.in/api/api/get_tests/');
            if (response.status === 200) {
                setDynamicTests(response.data);
            }
        } catch (error) {
            console.error('Error fetching tests:', error);
        }
    };

    const handleContactClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const handleOutsideClick = (e) => {
        if (optionsRef.current && !optionsRef.current.contains(e.target)) {
            setOptionsVisible(false);
            setTestsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const handleExternalLinkClick = (e, href) => {
        e.preventDefault();
        setOptionsVisible(false);
        setTestsDropdownOpen(false);
        setTimeout(() => {
            window.open(href, '_blank', 'noopener,noreferrer');
        }, 50);
    };

    // Static options array
    const options = [
        { name: "Book Routine Tests At Home", href: "/HomeCollection" },
        { 
            name: "Test Results/Payment", 
            href: "https://reports.drdangslab.com/drdangs/design/PatientPortal/PatientLogin.aspx",
            isExternal: true 
        },
        { name: "Health Packages", href: "/health-checkup-packages" },
        { 
            name: "Tests", 
            isDropdown: true,
            options: [
                { name: "Myositis Profile Test", href: "/myositis-profile-16-antigens-test-delhi-gurgaon" },
                { name: "Type 1 Diabetes Autoantibody Test", href: "/type-1-diabetes-autoantibody-test-delhi-gurgaon" },
                { name: "CMV DNA Viral Load RT PCR Test", href: "/cmv-dna-viral-load-rt-pcr-test-delhi-gurgaon" },
                { name: "Urine Iodine (Spot) Test", href: "/urine-iodine-test-delhi-gurgaon" },
                { name: "Bacteriophage Sensitivity Test", href: "/Bacteriophage-Sensitivity-Testing" },
                { name: "Allergy & Intolerance Test", href: "/food-allergy-test" },
                { name: "H3N2 Test", href: "/H3N2" },
                { name: "HbA1c Test", href: "/health-checkup-packages/glycosylated-haemoglobin-HBA1c.html" },
                { name: "Vitamin D Test", href: "/health-checkup-packages/Vitamin-D-test.html" },
                { name: "Lipid Profile", href: "/health-checkup-packages/Lipid-Profile-Test.html" },
                { name: "Zinc Test", href: "/health-checkup-packages/Zinc-Test.html" },
                { name: "Reverse T3 Test", href: "/health-checkup-packages/reverse-t3-test.html" },
                { name: "CBC Test", href: "/health-checkup-packages/complete-blood-count-test.html" },
                { name: "Iron Test", href: "/health-checkup-packages/Iron-Test.html" },
                { name: "Functional Medicine Test", href: "/health-checkup-packages/Functional-medicine-testing.html" },
                { name: "Magnesium Test", href: "/health-checkup-packages/magnesium-test.html" },
                { name: "Urine Routine Test", href: "/health-checkup-packages/Urine-routine-and-microscopy-Test.html" },
                { name: "Total PSA Test", href: "/health-checkup-packages/Prostate-Specific-Antigen-Free-and-Total.html" },
                { name: "Microalbuminuria Test", href: "/health-checkup-packages/Microalbuminuria.html" },
                { name: "ESR / SED Rate Test", href: "/health-checkup-packages/esr-sed-rate-test.html" },
                { name: "Helicobacter Pylori Test", href: "/health-checkup-packages/helicobacter-pylorit-test.html" },
                { name: "Vitamin B9 Test", href: "/health-checkup-packages/Folic-Acid-Vitamin-B-9-Test.html" },
                { name: "Phosphorus Test", href: "/health-checkup-packages/Phosphorus-test.html" },
                { name: "Dengue Test", href: "/health-checkup-packages/dengue-fever-test.html" },
                { name: "HS-CRP Test", href: "/health-checkup-packages/HS-CRP-High-Sensitivity-C-Reactive-protein-test.html" },
                { name: "Total Calcium Test", href: "/health-checkup-packages/calcium-test.html" },
                { name: "Blood Glucose Test", href: "/health-checkup-packages/blood-glucose-fasting-test.html" },
                { name: "Respiratory Allergy Test", href: "/health-checkup-packages/Allergy-Component-Testing.html" },
                { name: "Pimples Profiles Checkup", href: "/health-checkup-packages/acne-pimples-test.html" },
                { name: "Tuberculosis Test", href: "/health-checkup-packages/Tuberculosis%20-TB-Test.html" },
                { name: "BioFire GI Panel", href: "/health-checkup-packages/Biofire-GI-Panel-Test.html" },
                { name: "BioFire Respiratory 2.1 Panel", href: "/health-checkup-packages/Biofire-Respiratory-2-Panel.html" },
                { name: "Vitamin B12 Test", href: "/health-checkup-packages/Vitamin-B12-Test.html" },
                { name: "Liver Function Test", href: "/health-checkup-packages/liver-function-tests.html" },
                { name: "Kidney Function Test", href: "/health-checkup-packages/kidney-function-tests.html" },
                { name: "CBNAAT Test", href: "/health-checkup-packages/CBNAAT.html" },
                { name: "CBNAAT COVID-19 Test", href: "/health-checkup-packages/CBNAAT-COVID19-Test.html" },
                { name: "Total IgE Test", href: "/health-checkup-packages/ige-test.html" },
                { name: "Thyroid Profile Test", href: "/health-checkup-packages/thyroid-profile-with-FT3,-FT4-test.html" },
                { name: "Covid-19 Test", href: "/CoronaVirus" },
                { name: "Swine Flu(H1N1) Test", href: "/Swine-Flu-H1n1-Test.aspx" },
                
            ]
        },
        { name: "Health Guide", href: "/Healthguide" },
        { name: "News", href: "/News" },
        { name: "Career", href: "/Career" },
    ];

    /**
     * Merge static "Tests" options with the dynamic tests fetched from API.
     * This way we do not disturb your existing code structure.
     */
    const allOptions = options.map(option => {
        if (option.isDropdown && option.name === 'Tests') {
            return {
                ...option,
                options: [
                    ...option.options,
                    ...dynamicTests.map(test => ({
                        name: test.test_heading,
                        href: `/test/${test.url_name}`,
                    })),
                ],
            };
        }
        return option;
    });

    /**
     * Now filter from this merged array.
     * This preserves your existing filter logic exactly as is,
     * only the data source changed from `options` to `allOptions`.
     */
    const filteredOptions = allOptions
        .map(option => {
            if (option.isDropdown) {
                return {
                    ...option,
                    options: option.options.filter(test =>
                        test.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                };
            }
            return option;
        })
        .filter(option => 
            option.isDropdown
                ? option.options.length > 0
                : option.name.toLowerCase().includes(searchQuery.toLowerCase())
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
                <span>☰</span>
            </div>
            
            {isOptionsVisible && (
                <div 
                    className={`${styles.horizontalOptions} ${isOptionsVisible ? styles.visible : ''}`} 
                    ref={optionsRef}
                >
                    <div className={styles.searchContainer}>
                        <Search className={styles.searchIcon} size={16} />
                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={styles.searchInput}
                        />
                    </div>
                    
                    <ul>
                        {filteredOptions.map((option, index) => (
                            <li key={index} className={styles.menuItem}>
                                {option.isDropdown ? (
                                    <div className={styles.dropdownItem}>
                                        <button
                                            className={styles.dropdownToggle}
                                            onClick={() => setTestsDropdownOpen(!isTestsDropdownOpen)}
                                        >
                                            {option.name}
                                            <ChevronDown 
                                                className={`${styles.chevron} ${isTestsDropdownOpen ? styles.rotate : ''}`} 
                                                size={16} 
                                            />
                                        </button>
                                        <ul className={`${styles.subMenu} ${isTestsDropdownOpen ? styles.open : ''}`}>
                                            {option.options.map((test, testIndex) => (
                                                <li key={testIndex} className={styles.subMenuItem}>
                                                    <Link 
                                                        href={test.href}
                                                        onClick={() => {
                                                            setOptionsVisible(false);
                                                            setTestsDropdownOpen(false);
                                                        }}
                                                        className={styles.subMenuLink}
                                                    >
                                                        {test.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : option.isExternal ? (
                                    <a
                                        href={option.href}
                                        onClick={(e) => handleExternalLinkClick(e, option.href)}
                                        className={styles.menuLink}
                                    >
                                        {option.name}
                                    </a>
                                ) : (
                                    <Link 
                                        href={option.href}
                                        onClick={() => setOptionsVisible(false)}
                                        className={styles.menuLink}
                                    >
                                        {option.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                    
                    <div className={styles.horizontalSocialIcons}>
                        <svg className={styles.icon} viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                        </svg>
                        <svg className={styles.icon} viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        <svg className={styles.icon} viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </div>
                </div>
            )}
            
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default HorizontalNavbar2;
