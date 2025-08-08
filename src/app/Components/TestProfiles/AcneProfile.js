// src/app/Components/TestProfiles/TestProfiles.jsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './TestProfiles.module.css';

const TestProfiles = () => {
  const router = useRouter();
  
  // Static data instead of API fetch
  const profiles = [
// Basic Acne Profile
{
    id: 1,
    package_name: "Basic Acne Profile",
    package_detail: "Includes tests for:",
    package_rate: "6500.00",
    meta_title: "Basic Acne Profile",
    meta_keywords: "acne testing, basic hormone panel, acne diagnosis",
    meta_description: "Basic profile for acne diagnosis and treatment",
    tests_details: [
      "Glycosylated hemoglobin (HbA1c)",
      "Follicle-stimulating hormone (FSH)",
      "Luteinizing hormone (LH)",
      "Liver function test",
      "Thyroid profile",
      "Lipid profile",
      "Testosterone total",
      "Prolactin",
      "Hemogram"
    ],
    notes_contents: []
  },
  
  // Advanced Acne Profile
  {
    id: 2,
    package_name: "Advanced Acne Profile",
    package_detail: "Includes all the tests in the Basic Acne Profile, plus:",
    package_rate: "14500.00",
    meta_title: "Advanced Acne Profile",
    meta_keywords: "advanced acne testing, hormone panel, comprehensive acne diagnosis",
    meta_description: "Advanced profile for detailed acne diagnosis and treatment",
    tests_details: [
      "Free androgen index",
      "Serum cortisol (morning)",
      "DHEA-sulfate",
      "Estradiol",
      "Serum vitamin B-12",
      "HOMA IR (insulin resistance index)",
      "17-alpha-hydroxyprogesterone"
    ],
    notes_contents: []
  },
  
  // Comprehensive Acne Profile
  {
    id: 3,
    package_name: "Comprehensive Acne Profile",
    package_detail: "Includes all the tests in the Advanced Acne Profile, plus:",
    package_rate: "24500.00",
    meta_title: "Comprehensive Acne Profile",
    meta_keywords: "comprehensive acne testing, complete hormone panel",
    meta_description: "Complete acne profile with comprehensive testing",
    tests_details: [
      "Imupath screen 22"
    ],
    notes_contents: []
  },

    
   
  ];

  const handlePackageSelect = (packageName) => {
    const encodedPackageName = encodeURIComponent(packageName);
    router.push(`/HomeCollection?package=${encodedPackageName}`);
  };

  return (
    <>
      <div className={styles.TestProfileHeaderImagae}>
        <Image
          src="/PhotosAndLogos/OurLabC.jpg"
          alt="Test Profile Background"
          width={1000}
          height={400}
          priority
        />
      </div>

      <div className={styles.healthCheckupSection}>
        <h1>Acne (Pimples) Profiles Checkup in Delhi / NCR</h1>
        <p className={styles.subtitle}>
          We provide home collection services in Delhi-NCR region including Gurgaon, Faridabad, Noida, and Ghaziabad.
        </p>



        <p className={styles.description}>
        Dr. Dang's Lab offers a variety of acne profiles to help you understand the underlying causes of your acne and develop a personalized treatment plan. Our profiles are designed to be comprehensive and precise, so you can get the answers you need about your skin issue.
        <br></br>
        What is an Acne Profile?
        <br>
        </br>
        An acne profile is a series of blood tests that can help identify the hormonal, metabolic, and inflammatory factors that contribute to your acne. This information is essential for developing an effective treatment plan.
        </p>
  

        <div className={styles.features}>
          <div className={styles.featureItem}>
            <Image
              src="/PhotosAndLogos/TestProgile40years.png"
              alt="40 Years of Service"
              width={60}
              height={60}
              className={styles.featureImage}
            />
            <p id={styles.TestProfileInP}>40 Years of Service</p>
          </div>
          <div className={styles.featureItem}>
            <Image
              src="/PhotosAndLogos/TestProgilegoogleRating.png"
              alt="Rated 4.9/5"
              width={60}
              height={60}
              className={styles.featureImage}
            />
            <p id={styles.TestProfileInP}>
              Rated 4.9/5<br />Customers love us!
            </p>
          </div>
          <div className={styles.featureItem}>
            <Image
              src="/PhotosAndLogos/TestProgileNABL.png"
              alt="NABL Accredited"
              width={60}
              height={60}
              className={styles.featureImage}
            />
            <p id={styles.TestProfileInP}>NABL Accredited</p>
          </div>
          <div className={styles.featureItem}>
            <Image
              src="/PhotosAndLogos/TestProgileDiscover.png"
              alt="Get Personalized Test Package"
              width={60}
              height={60}
              className={styles.featureImage}
            />
            <p id={styles.TestProfileInP}>Get Personalized Test Package</p>
          </div>
        </div>
      </div>

      <div className={styles.testProfiles}>
      <h6>We offer three different acne profile options:</h6>
        <div className={styles.profilesRow}>
            
          {profiles.map((profile, index) => (
            <div className={styles.profileCard} key={index}>
              <h2>{profile.package_name}</h2>
              <p>{profile.package_detail}</p>
              <h3>Tests:</h3>
              <ul>
                {profile.tests_details.map((test, idx) => (
                  <li key={idx}>{test}</li>
                ))}
              </ul>
              {profile.notes_contents && profile.notes_contents.length > 0 && (
                <div className={styles.noteSection}>
                  <h3>Notes:</h3>
                  <ul>
                    {profile.notes_contents.map((note, idx) => (
                      <li key={idx}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className={styles.price}>
                <div className={styles.PriceInTestProfiles}>
                  <h3>Price:</h3>
                </div>
                <div className={styles.ProfilesPriceValue}>
                  <h3>₹{profile.package_rate}</h3>
                </div>
              </div>
              <button 
                className={styles.bookButton}
                onClick={() => handlePackageSelect(profile.package_name)}
              >
                Book this package
              </button>
            </div>
          ))}
        </div>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
  <h5 style={{ 
    color: '#486284', 
    fontSize: '24px', 
    marginBottom: '20px', 
    fontWeight: '600',
    borderBottom: '2px solid #eaeaea',
    paddingBottom: '10px'
  }}>
    Why Choose Dr. Dang's Lab for Your Acne Profile?
  </h5>

  <div style={{ marginBottom: '20px', color: '#666' }}>
    <p style={{ 
      fontSize: '16px', 
      marginBottom: '15px',
      color: '#777'
    }}>
      Includes tests for:
    </p>

    <div style={{ marginBottom: '25px' }}>
      <h6 style={{ 
        fontSize: '16px', 
        marginBottom: '10px',
        color: '#486284',
        fontWeight: '600'
      }}>
        Tests:
      </h6>
      <ul style={{ 
        listStyle: 'none', 
        padding: '0', 
        margin: '0' 
      }}>
        <li style={{ 
          marginBottom: '12px', 
          paddingLeft: '20px', 
          position: 'relative',
          fontSize: '15px',
          lineHeight: '1.5'
        }}>
          • Experienced and qualified team: Our team of experienced doctors and lab technicians is dedicated to providing you with accurate and reliable results.
        </li>
        <li style={{ 
          marginBottom: '12px', 
          paddingLeft: '20px', 
          position: 'relative',
          fontSize: '15px',
          lineHeight: '1.5'
        }}>
          • Convenient location: Our lab is conveniently located in New Delhi, India.
        </li>
        <li style={{ 
          marginBottom: '12px', 
          paddingLeft: '20px', 
          position: 'relative',
          fontSize: '15px',
          lineHeight: '1.5'
        }}>
          • Fast and accurate results.
        </li>
      </ul>
    </div>

    <div style={{ marginTop: '30px' }}>
      <h6 style={{ 
        fontSize: '20px', 
        color: '#486284',
        marginBottom: '15px',
        fontWeight: '600'
      }}>
        Ready to get started?
      </h6>
      <p style={{ 
        fontSize: '15px',
        lineHeight: '1.6',
        marginBottom: '20px',
        color: '#666'
      }}>
        Contact Dr. Dang's Lab today to schedule an appointment for your acne profile. We are here to help you achieve the clear and healthy skin you deserve.
      </p>
    </div>

    <div style={{ marginTop: '20px' }}>
      <h6 style={{ 
        fontSize: '16px', 
        marginBottom: '10px',
        color: '#486284',
        fontWeight: '600'
      }}>
        Tests:
      </h6>
      <p style={{ 
        fontSize: '15px',
        lineHeight: '1.5',
        color: '#666'
      }}>
        To talk to our experts, call at 011-45004200 or 9999992020.
      </p>
    </div>
  </div>
</div>
      </div>
      </>
  );
};

export default TestProfiles;