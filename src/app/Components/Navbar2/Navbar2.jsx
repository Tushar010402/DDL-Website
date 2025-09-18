"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { Search, ChevronDown, X, Menu } from 'lucide-react';
import styles from './Navbar2.module.css';
import { FaInstagram } from 'react-icons/fa';

const Navbar2 = () => {
    const [isOptionsVisible, setOptionsVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isTestsDropdownOpen, setTestsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [dynamicTests, setDynamicTests] = useState([]);
    const navbarRef = useRef(null);
    const searchInputRef = useRef(null);
    const testsDropdownRef = useRef(null);

    useEffect(() => {
        fetchTests();
    }, []);

    const fetchTests = async () => {
        try {
            const response = await axios.get('https://backend.dangsccg.co.in/api/api/get_tests/');
            if (response.status === 200) {
                console.log('Fetched tests:', response.data);
                setDynamicTests(response.data);
            }
        } catch (error) {
            console.error('Error fetching tests:', error);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const isOutsideNavbar = navbarRef.current && !navbarRef.current.contains(event.target);
            const isOutsideTests = testsDropdownRef.current && !testsDropdownRef.current.contains(event.target);

            if (isOutsideNavbar && isOutsideTests) {
                setOptionsVisible(false);
                setTestsDropdownOpen(false);
            }
        };

        const handleWindowMouseLeave = (event) => {
            const isOverTopViewport = event.clientY <= 0;
            const isOverBrowserUI = event.target.tagName === 'HTML';

            if (!isOverTopViewport && !isOverBrowserUI) {
                setOptionsVisible(false);
                setTestsDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        window.addEventListener('mouseleave', handleWindowMouseLeave);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            window.removeEventListener('mouseleave', handleWindowMouseLeave);
        };
    }, []);

    const handleTestsClick = (e) => {
        e.stopPropagation();
        if (e.detail === 1) {
            setTestsDropdownOpen(!isTestsDropdownOpen);
        } else if (e.detail === 2) {
            setTestsDropdownOpen(false);
        }
    };

    const handleExternalLinkClick = (e, href) => {
        e.preventDefault();
        setOptionsVisible(false);
        setTestsDropdownOpen(false);
        setTimeout(() => {
            window.open(href, '_blank', 'noopener,noreferrer');
        }, 50);
    };

    const handleMenuToggle = () => {
        setOptionsVisible(!isOptionsVisible);
        setTestsDropdownOpen(false);
    };

    const mainOptions = [
        { name: "Book Routine Tests At Home", href: "/HomeCollection" },
        {
            name: "Test Results/Payment",
            href: "https://reports.drdangslab.com/drdangs/design/PatientPortal/PatientLogin.aspx",
            isExternal: true
        },
        { name: "Health Packages", href: "/health-checkup-packages" },
        { name: "Tests", isDropdown: true },
        { name: "Health Guide", href: "/Healthguide" },
        { name: "News", href: "/News" },
        { name: "Career", href: "/Career" },
    ];

    const testsOptions = [
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
        { name: "Swine Flu(H1N1) Test", href: "/Swine-Flu-H1n1-Test.aspx" }
    ];

    // Combine static and dynamic tests
    const allTests = [
        ...testsOptions,
        ...dynamicTests.map(test => ({
            name: test.test_heading,
            href: `/test/${test.url_name}`,
            price: test.price,
            isDynamic: true
        }))
    ];

    const filteredMainOptions = mainOptions.filter(option =>
        option.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredTestsOptions = allTests.filter(test =>
        test.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <nav
                className={`${styles.navbar2} ${isScrolled ? styles.scrolled : ''}`}
                ref={navbarRef}
                aria-label="Main navigation"
            >
                <div className={styles.NavbarMainDiv}>
                    <div className={styles.navBarLogoRed}>
                        <Link href='/' className={styles.logoLink}>
                            <Image
                                src="/PhotosAndLogos/LogoOnNavbar.JPG"
                                alt="Dr. Dangs Lab Logo"
                                width={90}
                                height={90}
                                priority
                                className={styles.logoImage}
                            />
                        </Link>
                    </div>

                    <div className={styles.nameOnTheNavBar}>
                        <Image
                            src="/PhotosAndLogos/Drdangsname.JPG"
                            alt="Dr. Dangs Lab"
                            width={200}
                            height={60}
                            priority
                            className={styles.nameImage}
                        />
                    </div>

                    <div
                        className={styles.OptionsOnNavbar}
                        onMouseEnter={() => setOptionsVisible(true)}
                        onMouseLeave={() => setOptionsVisible(false)}
                    >
                        <button
                            className={styles.logo}
                            onClick={handleMenuToggle}
                            aria-label={isOptionsVisible ? 'Close menu' : 'Open menu'}
                        >
                            {isOptionsVisible ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        <div className={`${styles.options} ${isOptionsVisible ? styles.show : ''}`}>
                            <div className={styles.mainSearchContainer}>
                                <Search className={styles.searchIcon} size={16} />
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder="Search Tests..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className={styles.searchInput}
                                />
                            </div>

                            <div className={styles.optionsMainDiv}>
                                <ul className={styles.list}>
                                    {filteredMainOptions.map((option, index) => (
                                        <li key={index} className={styles.listItem}>
                                            {option.name === "Tests" ? (
                                                <div className={styles.dropdownItem} ref={testsDropdownRef}>
                                                    <button
                                                        className={styles.link}
                                                        onClick={handleTestsClick}
                                                        aria-expanded={isTestsDropdownOpen}
                                                    >
                                                        Tests
                                                        <ChevronDown
                                                            className={`${styles.chevron} ${isTestsDropdownOpen ? styles.rotate : ''}`}
                                                            size={16}
                                                        />
                                                    </button>
                                                    <ul
                                                        className={`${styles.subMenu} ${isTestsDropdownOpen ? styles.open : ''}`}
                                                        aria-expanded={isTestsDropdownOpen}
                                                    >
                                                        {filteredTestsOptions.map((test, testIndex) => (
                                                            <li key={testIndex} className={styles.subMenuItem}>
                                                                <Link
                                                                    href={test.href}
                                                                    className={styles.subMenuLink}
                                                                    onClick={() => {
                                                                        setOptionsVisible(false);
                                                                        setTestsDropdownOpen(false);
                                                                    }}
                                                                >
                                                                    <div className={styles.testInfo}>
                                                                        <span className={styles.testName}>{test.name}</span>
                                                                        {test.isDynamic && (
                                                                            <span className={styles.testPrice}>
                                                                               
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                        {filteredTestsOptions.length === 0 && (
                                                            <li className={styles.noResults}>
                                                                No tests found matching "{searchQuery}"
                                                            </li>
                                                        )}
                                                    </ul>
                                                </div>
                                            ) : option.isExternal ? (
                                                <a
                                                    href={option.href}
                                                    onClick={(e) => handleExternalLinkClick(e, option.href)}
                                                    className={styles.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {option.name}
                                                </a>
                                            ) : (
                                                <Link
                                                    href={option.href}
                                                    onClick={() => setOptionsVisible(false)}
                                                    className={styles.link}
                                                >
                                                    {option.name}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.socialIcons}>
                                <a href="https://www.instagram.com/drdangs/" className={styles.socialLink} aria-label="Instagram">
                                    <FaInstagram className={styles.icon} />
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
                    </div>
                </div>
            </nav>

            {/* SEO-friendly content */}
            <div className={styles.seoContent} aria-hidden="true">
                <nav aria-label="Available Medical Tests">
                    <h2>Available Medical Tests at Dr Dangs Lab</h2>
                    <ul>
                        {[...testsOptions, ...dynamicTests.map(test => ({
                            name: test.test_heading,
                            href: `/test/${test.url_name}`
                        }))].map((test, index) => (
                            <li key={index}>
                                <Link href={test.href}>
                                    <span itemProp="name">{test.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar2;
