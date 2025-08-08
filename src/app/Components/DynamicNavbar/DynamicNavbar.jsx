"use client";

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Navbar2 from '../Navbar2/Navbar2';
import HorizontalNavbar from '../HorizontalNavbar/HorizontalNavbar';
// import HorizontalNavbar2 from '../HorizontalNavbar2/HorizontalNavbar2'; // Removed unused import
import MobileSecondaryNavbar from '../MobileSecondaryNavbar/MobileSecondaryNavbar';

const DynamicNavbar = () => {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);

    // Routes that need the secondary navbar
    const secondaryNavbarRoutes = [
        '/',
        '/Services',
        '/health-checkup-packages',
        '/Legacy',
        '/QualityAssurance',
        '/VirtualTour',
        '/ResearchAndTrials',
        '/Recognition',
        '/Feedback',
        '/TermAndConditions',
        '/Microbiology',
        '/Haematology',
        '/Biochemistry',
        '/ClinicalPathology',
        '/Histocytopathology',
        '/FlowCytometry',
        '/MolecularBiology',
        '/SpecializedTesting'
    ];

    // Check if current route needs secondary navbar
    const needsSecondaryNavbar = secondaryNavbarRoutes.some(
        route => pathname === route || pathname.startsWith(`${route}/`)
    );

    // Handle window resize for mobile detection
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 821);
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle main content padding based on viewport and route (REMOVED)
    useEffect(() => {
      const mainContent = document.querySelector('#MainDivForMobileViews');
      if (mainContent) {
          if (isMobile) {
            mainContent.style.paddingLeft = '0px';
            mainContent.style.paddingTop = '0px'; // Set top padding to 0 for mobile
          } else {
            mainContent.style.paddingLeft = '90px';
            mainContent.style.paddingTop = '0px'; // Set top padding to 0 for desktop
          }
        }
    }, [isMobile]);


    return (
        <>
            {!isMobile ? (
                <>
                    <HorizontalNavbar />
                    <Navbar2 />
                    {needsSecondaryNavbar && <Navbar />}
                   
                </>
            ) : (
                <>
                    <MobileSecondaryNavbar />
                    {needsSecondaryNavbar && < HorizontalNavbar/>}
                   
                </>
            )}
        </>
    );
};

export default DynamicNavbar;