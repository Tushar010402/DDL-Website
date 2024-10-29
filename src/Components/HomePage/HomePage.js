import React, { useState, useEffect } from 'react';
import { useSpring, config } from 'react-spring';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css';
import MainBanner from '../../PhotosAndLogos/MainBanner.JPG';
import Navbar from '../Navbar/Navbar.js';
import DoctorsImage from '../../PhotosAndLogos/MAINPAGESQUADIMAGE.JPG';
import DiscoverImage from '../../PhotosAndLogos/DiscoverImageHomePage.webp';
import HorizontalNavbar from '../HorizontalNavbar/HorizontalNavbar.js';
import FirstImageInOurServices from '../../PhotosAndLogos/HomeHistocytopathology.JPG';
import ShouldKNowImage from '../../PhotosAndLogos/SHouldKnowBackground.JPG';
import ShouldKNowImagePlayButton from '../../PhotosAndLogos/icon-play.png';
import FeaturesHomePage from '../../PhotosAndLogos/doctor-icon-vector.png';
import PatientCareOurPromise from '../../PhotosAndLogos/Patient-care.jpg';
import PediatricOurPromise from '../../PhotosAndLogos/pediatric-prowess.jpg';
import SuperiorOurPromise from '../../PhotosAndLogos/Superior-Technology.jpg';
import OurService from './OurServices.js';
import BelowOurPromise from './BelowOurPromise.js';
import LabImagesSection from './LabImagesSection.js';
import HomeCollection from './HomeCollection.js';
import HomePageTestimonials from './HomePageTestimonials.js';
import RightSideButton from '../RightSideButton/RightSideButton.js';
import HomeHemotogy from '../../PhotosAndLogos/Home-Haematology.webp';
import BioChemistry from '../../PhotosAndLogos/Home-Biochemistry.webp';
import Bacteriophage from '../../PhotosAndLogos/Home-Bacteriophage-Senstivity-Testing.webp';
import Microbiology from '../../PhotosAndLogos/Home-Microbiology.webp';
import AllergyHome from '../../PhotosAndLogos/Home-Allergy-Intolerance.webp';
import Molecular from '../../PhotosAndLogos/Home-Molecular-Biology.webp';
import FlowCytromatary from '../../PhotosAndLogos/Home-Flow-Cytometry.webp';
import MobileBanner from '../../PhotosAndLogos/bannerFormobile.webp';
import checkimgae from '../../PhotosAndLogos/check.png';

const YourComponent = () => {
  const [videoVisible, setVideoVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update the state when window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
      setIsFlipped(true);
  };

  const handleClose = () => {
      setIsFlipped(false);
  };

  const handleVideoToggle = () => {
      setVideoVisible(!videoVisible); // Toggle video visibility
  };

  const [hovered, setHovered] = useState(null);

  const features = [
      {
          id: 1,
          icon: "/images/doctor-icon-vector.png",
          title: "Quintessential Quality",
          description: "Robust Quality Assurance Systems",
          details: [
              "Triple Quality Check Policy, unique to the lab, is handled exclusively by our expert team of doctors."
          ]
      },
      {
          id: 2,
          icon: "/images/Patient-care.webp",
          title: "Personalized Patient Care",
          description: "Our Top Priority",
          details: [
              "Low/No-Queue Reception.",
              "Monitored Air-Quality.",
              "Senior Citizen Friendly.",
              "Wheel-Chair Accessible.",
              "Critical Callouts for emergency lab values."
          ]
      },
      {
          id: 3,
          icon: "/images/Superior-Technology.webp",
          title: "Superior Technology",
          description: "Results Par Excellence",
          details: [
              "Automation most suited for our population base.",
              "Specialists in every field."
          ]
      },
      {
          id: 4,
          icon: "/images/pediatric-prowess.webp",
          title: "Paediatric Prowess",
          description: "Caring for the Little Ones",
          details: [
              "Specialised paediatric phlebotomists, including Dr. Dang (on request).",
              "Special Pain-Less Needles for Babies.",
              "Wide array of Baby-Tests."
          ]
      }
  ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024, // Tablet devices
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768, // Mobile devices
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480, // Smaller mobile devices
            settings: {
              slidesToShow: 1,
            },
          },
        ],
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set autoplay speed to 500ms
      };
  const [count, setCount] = useState(0);

  useEffect(() => {
    const targetCount = 41;
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + 1;
        return nextCount > targetCount ? targetCount : nextCount;
      });
    }, 100);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.molasses, // Adjust the config for animation speed
  });


    return (
        <>
        <HorizontalNavbar/>
        <div className='HomePageMainDiv'>

        
            <div className='NavBarAtHomePage1'>
            <Navbar />
            </div>

<RightSideButton/>


            <div className='ExceptthenNavBarWHoleMainPage'>

           
            <div className='MainHomePageBanners'>
      <img src={isMobile ? MobileBanner : MainBanner} alt="My Image" />
    </div>
        {/* <br></br> */}
          

            </div>
            
            </div>
            <div className='FrontMainPageMainContents'>
            <div className='QualityDiagnosticsDiv'>
                <h1>Quintessential Quality Diagnostics</h1>
            </div>

            <div className='nablLEGACYficciMAINDIV'>
                <div className='NABLMainDIv'>
                    <div className='NABLMainHeading'>
                        <h2>NABL</h2>
                    </div>
                    <div className='NABLSecondaryDiv'>
                   <p> Accredited since 2001</p>
                    </div>
                    <div className='NABLVerticalLine'>
                        
                    </div>
                </div>
                <div className='L38MainDIv'>
                    <div className='L38MainHeading'>
                    <h2>{count}</h2>
                    </div>
                    <div className='L38SecondaryDiv'>
                    <p>Years of Service</p>
                    </div> 
                    
                    <div className='L38VerticalLine'>
                        
                    </div>
                    </div>
                
                <div className='FICCIMainDIv'>
                    <div className='FICCIMainHeading'>
                        <h2>FICCI</h2>
                    </div>
                    <div className='FICCISecondaryDiv'>
                   <p> Recognized in Patient Care</p>
                    </div>
                    <div className='FICCIVerticalLine'>
                        
                    </div>
                </div>
                
            </div>
            </div>
            <div className='NABLLogoAndDrsImageMainDivHomepage'>
            <div className='NablLogoNDrsImagesHomePage'>
                <div className='DrsOnlyImageHomePageNABL1'>
                <img src={DoctorsImage} alt="My Image" />
                </div>
                <div className='NABLlogoOnHomePage'>
                <a href='#'><img src={DiscoverImage} alt="My Image" /></a>
                </div>

            </div>
            <div className='ContentsOFNABLHomePage'>
                <div className='NABLESECONDARYCONTENT'>

               
            <h2>
            Best Pathology Lab & Diagnostic Centre in Delhi NCR
            </h2>
            <h4>Discover A New Era Of Personalized Testing

            </h4>
            <p>
            Customized health profiles tailored to your goals, lifestyle & history, backed by science.

            </p>

            <div className='HomePageNABLBotton'>
               <a href='https://discoverbydrdangs.com/'>FREE HEALTH ASSESSMENT</a>
         
                </div>
            </div>
            </div>
            </div>

            <div className='HomePageOurServicesMainDiv'>
                    <div className='HomePageOurServiceMainHeading'>
        <h3>OUR SERVICES</h3>
        <hr></hr>
                    </div>
                    <div className='HomePageOurServicesMainDivSliders'>
                    <Slider {...settings}>
        {/* First Image */}
        <div className='HomePageOurServicesMainDivFirstMainImage'>
          <img src={HomeHemotogy} alt='My Image' />
          <div className='serVicesText'>Haematology</div>
        </div>

        {/* Second Image */}
        <div className='HomePageOurServicesMainDivFirstMainImage'>
          <img src={BioChemistry} alt='My Image' />
          <div className='serVicesText'>Biochemistry</div>
        </div>

        {/* Third Image */}
        <div className='HomePageOurServicesMainDivFirstMainImage'>
          <img src={Bacteriophage} alt='My Image' />
          <div className='serVicesText'>Bacteriophage Senstivity Testing</div>
        </div>

        {/* Fourth Image */}
        <div className='HomePageOurServicesMainDivFirstMainImage'>
          <img src={Microbiology} alt='My Image' />
          <div className='serVicesText'>Microbiology</div>
        </div>
        <div className='HomePageOurServicesMainDivFirstMainImage'>
          <img src={AllergyHome} alt='My Image' />
          <div className='serVicesText'>Allergy & Intolerance</div>
        </div>
        <div className='HomePageOurServicesMainDivFirstMainImage'>
          <img src={FirstImageInOurServices} alt='My Image' />
          <div className='serVicesText'>Histocytopathology</div>
        </div>
        <div className='HomePageOurServicesMainDivFirstMainImage'>
          <img src={Molecular} alt='My Image' />
          <div className='serVicesText'>Molecular Biology</div>
        </div>
        <div className='HomePageOurServicesMainDivFirstMainImage'>
          <img src={FlowCytromatary} alt='My Image' />
          <div className='serVicesText'>Flow Cytometry</div>
        </div>
        
      </Slider>
                    </div>
            </div>

            <div className='ShouldKnowDivHOmePage'>
              <div className='SHouldKnowHomePageDIVText'>
                <p>What you should know, before you choose a diagnostics lab.
                </p>
                <hr></hr>
              </div>
                <div className='SHouldKNowVideOPLusIMage'>
                <div className='SHouldKNowVideOPLusIMagess' style={{ backgroundImage: `url(${ShouldKNowImage})` }}>
                <div>
            <button className="playButton" onClick={handleVideoToggle}>
                <img src={ShouldKNowImagePlayButton} alt="Play Video" style={{ width: '74%', height: 'auto' }} />
            </button>
            {videoVisible && (
                <div className="overlay">
                    <iframe
                        width="100%"
                        height="550px"
                        src="https://www.youtube.com/embed/89t5u2E2l88?autoplay=1&mute=1"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        title="YouTube video player"
                    ></iframe>
                    <button className="closeButton" onClick={handleVideoToggle}>Close</button>
                </div>
            )}
        <div className={`content ${videoVisible ? 'blur' : ''}`}>
    {/* All other page content goes here */}
</div>

        </div>
            </div>
                </div>
            </div>



<OurService />

<BelowOurPromise/>
            
<LabImagesSection/>
<HomeCollection/>

<HomePageTestimonials/>
        </>
    );
};

export default YourComponent;
