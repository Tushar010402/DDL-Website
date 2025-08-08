'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Homepage.module.css';

const VideoSection = () => {
  const [videoVisible, setVideoVisible] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  const cards = [
    {
      title: 'Towards Better Health',
      description: 'Dr. Dangs Lab provides an extensive range of health packages that are specifically curated by the Dr. Dangs to include effective diagnostic tests according to varied diagnostic requirements.',
      image: '/PhotosAndLogos/towards-better-health.jpeg',
      imageLink: '/health-checkup-packages',
      buttonLink: '/health-checkup-packages',
    },
    
    {
      title: 'Thyroid Profile Test',
      description: 'Thyroid Profile with FT3, FT4, TSH in Delhi & Gurgaon',
      image: '/PhotosAndLogos/thyroidlabpic.jpg',
      imageLink: '/health-checkup-packages/thyroid-profile-with-FT3,-FT4-test.html',
      buttonLink: '/health-checkup-packages/thyroid-profile-with-FT3,-FT4-test.html',
    },
    
    {
      title: 'STD Testing',
      description: 'The basic sexually transmitted disease profile is a combination of the most frequently contracted and screened for infections linked to unprotected sex.',
      image: '/PhotosAndLogos/std.png',
      imageLink: '/STD-TEST.pdf',
      buttonLink: '/STD-TEST.pdf',
    },
    
    {
      title: 'Antenatal Panel',
      description: 'This profile provides actionable insights to your physician for the optimal antenatal care required',
      image: '/PhotosAndLogos/antenatal-health.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/antenatal%20panel%2031-5-2023.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/antenatal%20panel%2031-5-2023.pdf',
    },
    {
      title: 'Cancer Markers Profile',
      description: 'Cancer Markers or tumor markers are proteins found in blood, urine or tissues of persons with cancer or other inflammatory conditions. ',
      image: '/PhotosAndLogos/cancer marker panel.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/cancer%20profile%20brochure%20December%202024.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/cancer%20profile%20brochure%20December%202024.pdf',
    },
    {
      title: 'Cardiac Panel',
      description: 'CARDIAC PRO  consists of a group of advanced tests that provide immediate, actionable clinical information for the risk stratification and aid in predicting future cardiac events.  ',
      image: '/PhotosAndLogos/cardiac health.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/Cardiac%20Panel%2010-5-2022.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/Cardiac%20Panel%2010-5-2022.pdf',
    },
    {
      title: 'Flu Panel',
      description: 'Oropharyngeal and Nasopharyngeal Swabs in special viral transport medium (VTM)  ',
      image: '/PhotosAndLogos/flue panel.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/Updated-Flu-Panels-1.4.23.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/Updated-Flu-Panels-1.4.23.pdf',
    },
    {
      title: 'Meta Check Panel',
      description: 'On the genetic level, there are small variants in the DNA, so-called polymorphisms, which differ between humans and which can affect the metabolism in its efficiency in the processing...',
      image: '/PhotosAndLogos/meta check.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/Meta%20check-2_Final.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/Meta%20check-2_Final.pdf',
    },
    {
      title: 'Inflammation Packages',
      description: 'Inflammation is the complex biological response of body to infection, injury, irritants and damaged cells. It plays a major role in the healing process.',
      image: '/PhotosAndLogos/inflammation panel.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/INFLAMMATION.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/INFLAMMATION.pdf',
    },
    {
      title: 'V-care Profile',
      description: 'This profile consists of a group of advanced tests that provide immediate, actionable clinicalinformation for the management of gynecological issues including infections. ',
      image: '/PhotosAndLogos/v-care.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/V-care-07-02-2022.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/V-care-07-02-2022.pdf',
    },
    {
      title: 'Male Hormonal Profile',
      description: 'Basic male hormonal profile measures the levels of hormones that play an active role in men’s health and may be an important part of sexual health as well as general wellbeing in men.',
      image: '/PhotosAndLogos/Male-hormonal-profiles.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/Male%20Hormonal%20Profiles.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/Male%20Hormonal%20Profiles.pdf',
    },
    {
      title: 'Fatigue Profile',
      description: 'This profile helps in determining the causative factors of long-term fatigueand weakness. The profile includes an assessment of key vitamins, minerals and essential parameters, deficiency of which may cause fatigue. ',
      image: '/PhotosAndLogos/fatigue-profile.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/FATIGUE%20PROFILE.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/FATIGUE%20PROFILE.pdf',
    },
    {
      title: 'Coagulation Profile',
      description: 'This profile helps in determining the causative factors of long-term fatigue and weaknessThis profile is recommended when the physician/ individual is looking for tests to rule out any clotting abnormalities. ',
      image: '/PhotosAndLogos/coagulation-profile.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/COAGULATION%20PROFILE.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/COAGULATION%20PROFILE.pdf',
    },
    {
      title: 'Autoimmune Profiles',
      description: 'Autoimmune disease is a disease where the body’s immune system mistakes its own cells as foreign substances and startsacting against the body`s own tissues. ',
      image: '/PhotosAndLogos/Autoimmune-profiles.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/AUTOIMMUNE%20PROFILES%2031-6-23.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/AUTOIMMUNE%20PROFILES%2031-6-23.pdf',
    },
    {
      title: 'Pre Operative Panel',
      description: 'PRE OPERATIVE PANEL /PRE ANAESTHETIC CHECK (PAC)',
      image: '/PhotosAndLogos/Pre-operative-panel.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/PRE%20OPERATIVE%20PANEL.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/PRE%20OPERATIVE%20PANEL.pdf',
    },
    {
      title: 'Acne Profile',
      description: 'Acne is a common skin condition that occurs when hair follicles become clogged with oil and dead skin cells. ',
      image: '/PhotosAndLogos/Acne-Profile.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/Acn-Brochure%206-5-23.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/Acn-Brochure%206-5-23.pdf',
    },
    {
      title: 'Hepatitis Profile',
      description: 'This is a basic profile for assessment of your liver health. This profile tests the liver functions and infections that include hepatitis A, B, C and E.',
      image: '/PhotosAndLogos/hepatitis-profiles.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/HEPATITIS%20PROFILES.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/HEPATITIS%20PROFILES.pdf',
    },
    {
      title: 'Myeloma Profile',
      description: 'Myeloma, also known as Multiple Myeloma is the most common Plasma Cell Dyscrasia, and is characterized by abnormal proliferation of the plasma cells in the bone marrow.',
      image: '/PhotosAndLogos/Myeloma-Profiles.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/MYELOMA%20%20PANEL%2014-01-2023.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/MYELOMA%20%20PANEL%2014-01-2023.pdf',
    },
    {
      title: 'Pneumonia Biofire',
      description: 'The low pathogen-detection yield among adults who were hospitalized for pneumonia highlights the need for more sensitive diagnostic methods and innovative discovery of pathogens.',
      image: '/PhotosAndLogos/Biofire1.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/Pneumonia%20Biofire.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/Pneumonia%20Biofire.pdf',
    },
 
    {
      title: 'GUT (GI) Biofire',
      description: 'Is it a gut infection? Viral ? Bacterial? Parasitic?',
      image: '/PhotosAndLogos/GUT.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/GUT%20(GI)%20BIOFIRE.jpeg',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/GUT%20(GI)%20BIOFIRE.jpeg',
    },
    
    {
      title: 'Sputum Profile',
      description: 'Sputum is the mucus that is coughed up from the respiratory tract. It is commonly used in the diagnosis of respiratory infections such as tuberculosis, pneumonia, and bronchitis. ',
      image: '/PhotosAndLogos/SPUTUM-PROFILES.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/SPUTUM%20PROFILES%2025-5-2023.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/SPUTUM%20PROFILES%2025-5-2023.pdf',
    },
    {
      title: 'Female Infertility Profile',
      description: 'Dr. Dangs Lab offers a range of specialized Female Infertility Profiles meticulously designed to investigate and diagnose potential causes of infertility in women',
      image: '/PhotosAndLogos/female-infertility-profiles.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/FEMALE%20INFERTILITY%20PROFILES%20(3).pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/FEMALE%20INFERTILITY%20PROFILES%20(3).pdf',
    },
    {
      title: 'Bone Health Profile',
      description: 'Dr. Dangs Lab offers a range of specialized Bone Health Profiles designed to assess and monitor bone health in individuals',
      image: '/PhotosAndLogos/bone-health.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/BONE%20HEALTH%20PROFILE.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/BONE%20HEALTH%20PROFILE.pdf',
    },
 
    
 
    {
      title: 'Thrombophilia ',
      description: 'Thrombophilia is a medical condition characterized by an increased tendency to develop blood clots.',
      image: '/PhotosAndLogos/Thrombophilia.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/THROMBOPHILIA%20PROFILE.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/THROMBOPHILIA%20PROFILE.pdf',
    },
    {
      title: 'Respiratory Panel',
      description: 'The Respiratory Panel is a comprehensive diagnostic test that detects a wide range of respiratory pathogens, including viruses and bacteria, to help identify the cause of respiratory infections.',
      image: '/PhotosAndLogos/Respiratory-panel.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/Respiratory%20Biofire.jpeg',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/Respiratory%20Biofire.jpeg',
    },
    {
      title: 'CTD Profile',
      description: 'This profile is helpful for diagnosis of connective tissue disorders',
      image: '/PhotosAndLogos/CTD-Profile.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/CTD%20(%20CONNECTIVE%20TISSUE%20DISORDERS%20PROFILE%20).pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/CTD%20(%20CONNECTIVE%20TISSUE%20DISORDERS%20PROFILE%20).pdf',
    },
    {
      title: 'Allergynius DX',
      description: 'INCLUDES ALL ALLERGENS OF RESPIRATORY, FOOD & MISCELLANEOUS PROFILES.',
      image: '/PhotosAndLogos/Allerginius-Dx.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/ALLERGYNIUS%20DX%20-%20ALLERGY%20(%20IGE%20BASED%20).pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/ALLERGYNIUS%20DX%20-%20ALLERGY%20(%20IGE%20BASED%20).pdf',
    },
  
    {
      title: 'Imupro - Food Allergy & Intolerance',
      description: 'When you are suffering from a chronic complaint that just will not go away, the cause may be a delayed IgG food allergy (type III).',
      image: '/PhotosAndLogos/Imupro.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/Imupro%20brochure%20(April%202025).pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/Imupro%20brochure%20(April%202025).pdf',
    },
    {
      title: 'University Admission Test Profile',
      description: 'This profile is designed to provide a comprehensive assessment of an individual\'s health status, including various tests and screenings that are commonly required for university admissions.',
      image: '/PhotosAndLogos/university-admission-test-profile.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/UNIVERSITY%20ADMISSION%20TEST%20PROFILE.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/UNIVERSITY%20ADMISSION%20TEST%20PROFILE.pdf',
    },
    {
      title: 'Comprehensive Thyroid Profile',
      description: 'This profile is designed to provide a comprehensive assessment of an individual\'s health status, including various tests and screenings that are commonly required for university admissions.',
      image: '/PhotosAndLogos/Comprehensive-profile.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/Comprehensive%20Thyroid%20Profile.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/Comprehensive%20Thyroid%20Profile.pdf',
    },
    {
      title: 'Hairfall Panel',
      description: 'The Basic Hairfall Panel is designed to help identify common underlying causes of hair loss by assessing key health markers',
      image: '/PhotosAndLogos/Hairfall-profile.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/HAIRFALL%20PROFILE.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/HAIRFALL%20PROFILE.pdf',
    },
    {
      title: 'Wheat/Gluten Related Allergies/Intolerance & Celiac Profiles',
      description: 'IgE-based gluten allergy, also known as wheat allergy, is an immune-mediated hypersensitivity reaction to gluten, a protein found in wheat and related grains.',
      image: '/PhotosAndLogos/wheat-gluten.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/WHEAT-%20GLUTEN%20%20RELATED%20ALLERGIES-INTOLERANCE%20%26%20CELIAC%20PROFILES.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/WHEAT-%20GLUTEN%20%20RELATED%20ALLERGIES-INTOLERANCE%20%26%20CELIAC%20PROFILES.pdf',
    },
    {
      title: 'Typhoid Panel',
      description: 'Typhoid fever is a bacterial infection caused by the bacterium Salmonella Typhi. It`s primarily transmitted through the ingestion of contaminated food or water. ',
      image: '/PhotosAndLogos/typhoid-panel.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/TYPHOID%20PANEL.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/TYPHOID%20PANEL.pdf',
    },
    {
      title: 'H. Pylori Profile',
      description: 'Dr. Dangs Lab’s H. pylori test profiles have been curated to provide accurate and timely detection of Helicobacter pylori infections.',
      image: '/PhotosAndLogos/H.PYLORI PROFILES.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/H.%20PYLORI%20PROFILES.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/H.%20PYLORI%20PROFILES.pdf',
    },
    {
      title: 'Functional Medicine',
      description: 'Functional medicine testing transcends traditional symptom-based approaches, employing a comprehensive analysis of biochemical and metabolic markers',
      image: '/PhotosAndLogos/Functional-medicine.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/Functional%20Medicine.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/Functional%20Medicine.pdf',
    },
    {
      title: 'Interstitial Lung Disease',
      description: 'The Interstitial Lung Disease (ILD) Basic Profile is designed to identify and assess the early stages of ILD, comprising common tests such as Angiotensin Converting Enzyme (ACE), Rheumatoid factor (RA factor), Anti Cyclic Citrullinated Peptide (Anti CCP), Anti -Nuclear Antibody and Reactive C Protein',
      image: '/PhotosAndLogos/interstitial.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/Interstitial%20Lung%20Disease%20(ILD)%20-%20Profile.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/Interstitial%20Lung%20Disease%20(ILD)%20-%20Profile.pdf',
    },
    {
      title: 'Vasculitis',
      description: 'For Vasculitis, the Basic Profile offers a preliminary look into this inflammatory condition, featuring key tests like Anti Neutrophilic Cytoplasmic Antibody (ANCA) with c-ANCA and p-ANCA. ',
      image: '/PhotosAndLogos/vasculitis.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/Vasculitis%20-%20Profile.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/Vasculitis%20-%20Profile.pdf',
    },
    {
      title: 'Female Hormone Profile',
      description: 'An imbalance in female hormones can lead to irregular periods, bloating, fatigue, irritability, hair loss, palpitations, mood swings, diabetes,',
      image: '/PhotosAndLogos/female-profile.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/Female%20Hormonal%20Profiles.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/Female%20Hormonal%20Profiles.pdf',
    },
    
    
    {
      title: 'Nasopharyngeal & Oropharyngeal Swab ',
      description: 'Nasopharyngeal and oropharyngeal swabs are commonly used to collect samples for the diagnosis of respiratory infections, including COVID-19, influenza, and other viral and bacterial infections.',
      image: '/PhotosAndLogos/sample report.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/HMPV-HI-%26-MYCO-P-FLU-PANELS.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/HMPV-HI-%26-MYCO-P-FLU-PANELS.pdf',
    },
    {
      title: 'Bacteriophage',
      description: 'Phage therapy is a targeted approach to treat bacterial infections using bacteriophages—viruses that infect and destroy specific bacterial strains.',
      image: '/PhotosAndLogos/bacteriophage.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/Bacteriophage%20Infographic.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/Bacteriophage%20Infographic.pdf',
    },
    {
      title: 'TruAge',
      description: 'Because adding years to your life starts with understanding the years within.',
      image: '/PhotosAndLogos/trueage.png',
      imageLink: 'https://testprofiles.drdangslab.com/static/files/Biological%20age%20(%20TruAge%20)%20-%20including%20Telomere%20length.pdf',
      buttonLink: 'https://testprofiles.drdangslab.com/static/files/Biological%20age%20(%20TruAge%20)%20-%20including%20Telomere%20length.pdf',
    },
    
  
  ];

  // Update cards per page on screen resize
  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerPage(1);
      else if (width < 1024) setCardsPerPage(2);
      else setCardsPerPage(3);
    };

    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  const handleVideoToggle = () => {
    setVideoVisible(!videoVisible);
    document.body.style.overflow = videoVisible ? 'unset' : 'hidden';
  };

  const maxPages = Math.ceil(cards.length / cardsPerPage);
  const paginatedCards = cards.slice(
    pageIndex * cardsPerPage,
    pageIndex * cardsPerPage + cardsPerPage
  );

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4" id={styles.VideoHomePage}>
        {/* Video Heading */}
        <div className="text-center mb-8">
          <p className="text-lg mb-2" id={styles.VideoPageText}>
            What you should know, before you choose a diagnostics lab.
          </p>
          <hr className="w-24 mx-auto border-t-2 border-red-500" />
        </div>

        {/* Video Background with Play Button */}
        <div
          className="relative h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: `url(/PhotosAndLogos/SHouldKnowBackground.JPG)`,
          }}
        >
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            onClick={handleVideoToggle}
            aria-label="Play video"
          >
            <Image
              src="/PhotosAndLogos/icon-play.png"
              alt="Play Video"
              width={50}
              height={50}
            />
          </button>

          {videoVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
              <div className="relative w-full max-w-4xl mx-4">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/89t5u2E2l88?autoplay=1&mute=1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <button
                  className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={handleVideoToggle}
                  aria-label="Close video"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Cards Grid */}
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedCards.map((card, index) => (
              <div
                key={index}
                className="bg-white shadow-md overflow-hidden flex flex-col justify-between "
              >
                <Link
                  href={card.imageLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Learn more about ${card.title}`}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={380}
                    height={180}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg mb-2 text-black">{card.title}</h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {card.description}
                  </p>
                  <Link
                    href={card.buttonLink}
                    className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-center transition-colors block"
                    aria-label={`Book home collection for ${card.title}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Chevron Buttons Below Cards */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={() => setPageIndex((prev) => Math.max(prev - 1, 0))}
              disabled={pageIndex === 0}
              className="p-2 rounded-full bg-white shadow-md disabled:opacity-50"
              aria-label="Previous cards"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setPageIndex((prev) => Math.min(prev + 1, maxPages - 1))}
              disabled={pageIndex >= maxPages - 1}
              className="p-2 rounded-full bg-white shadow-md disabled:opacity-50"
              aria-label="Next cards"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
