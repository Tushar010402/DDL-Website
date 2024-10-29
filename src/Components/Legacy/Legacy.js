import React from 'react';
import OurLegacyHeaderImage from '../../PhotosAndLogos/OurLagacy.png';
import Legacy1 from '../../PhotosAndLogos/Legacy.png';
import Legacy2 from '../../PhotosAndLogos/DRNavinLegacy2.png';
import GroupPhoto1 from '../../PhotosAndLogos/Legacy3.png';
import GroupPhoto2 from '../../PhotosAndLogos/Legacy4.png';
import Legacy5 from '../../PhotosAndLogos/Legacy5.png';
import Legacy6 from '../../PhotosAndLogos/Legacy6.png';
import DRManju from '../../PhotosAndLogos/DRManju.png';
import DrManvi from '../../PhotosAndLogos/drmanvi.png';
import DrArjun from '../../PhotosAndLogos/Drarjunff.png';
import DrVisvjeet from '../../PhotosAndLogos/dr-biswajit.png';
import DrLeena from '../../PhotosAndLogos/DrLeena.png';
import DrBineesh from '../../PhotosAndLogos/jawed.png';

import LegacySupport0 from '../../PhotosAndLogos/LegacySupportSlider0.png';
import LegacySupport1 from '../../PhotosAndLogos/LegacySupportSlider1.png';
import LegacySupport2 from '../../PhotosAndLogos/LegacySupportSlider2.png';
import LegacySupport3 from '../../PhotosAndLogos/LegacySupportSlider3.png';

import LegacySupport5 from '../../PhotosAndLogos/LegacySupportSlider5.png';
import LegacySupport6 from '../../PhotosAndLogos/LegacySupportSlider6.png';
 

import SwiperCore, { Navigation, Pagination,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './Legacy.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Legacy = () => {
    return (
      <>
        <div className='LegacyMainDiv'>
        <div className='Legacy-main-banner'>
    <div className='Legacy-content-container'>
      <div className='Legacy-text-content'>
        <h2>OUR LEGACY</h2>
        <p>Our Family, Caring for Yours</p>
      </div>
    </div>
  </div>

  
          <div className='LegacyAfterHeader'>
            <div className='LegacyContentSection'>
              <img src={Legacy1} alt='Award Ceremony' className='LegacyImage'/>
              <div className='LegacyText'>
                <h3>Dr. Dang's Lab is known to be one of the best Quality Based Diagnostic Labs in the country.</h3>
                <p>
                  Dr. Dangs Lab was started in 1983 with Dr. Manju Dang, MD and Prof (Dr.) Navin Dang, MD as the 2 partners.
                  It has received numerous national and international awards including Dr. B.C Roy national award, FICCI healthcare excellence award etc.
                  It was the first lab in the country to receive ISO-9002 certification and has been accredited by NABL since 2001 in Medical Laboratories.
                  It offers a wide menu of tests in Biochemistry, Haematology including Flowcytometry, Microbiology, Molecular biology, Immunology, Histopathology and Cytology.
                </p>
              </div>
            </div>
  
            <p className='LegacyQuote'>
              “Today, Dr. Dangs Lab is the only lab in India that has a mix of unparalleled report quality, personalised attention to patients, ethical work ideals and the highest repute in the doctor community,”
            </p>
          </div>
  
          <div className='DrDangLegacySection'>
            <div className='DrDangLegacyContent'>
              <div className='DrDangLegacyText'>
                <h3>DR. DANG'S LEGACY</h3>
                <p>
                  Prof. (Dr.) Navin Dang is the Founder & Chairman of Dr. Dangs Lab. His ethos, compassion and dedication to his patients are the key reasons Dr. Dangs Lab has reached the pinnacle of quality standalone labs in India. Having begun its journey with a small financial investment and a 400 sq. ft. area he along with his wife, Dr. Manju Dang, have developed the facility to a 30,000 sq. ft. specialised laboratory that doyens in the healthcare field swear by.
                </p>
                <p>
                  Dr. Dangs Lab is the only pathology lab in India with an extremely high doctor to patient ratio. The Dr. Dangs plays an integral role in all lab processes including phlebotomy and other pre & post-analytical processes. It is a pediatric sensitized lab with special pediatric phlebotomists and pathologists trained in pediatric sample reporting along with the best doctors with specialist pathologists for MRD and hemato-onco pathology. The lab’s critical callouts for emergency lab values along with the triple quality check policy that are unique to the lab are the foundation for its stellar services and unmatched quality.
                </p>
              </div>
              <img src={Legacy2} alt='Dr. Navin Dang' className='DrDangImage'/>
            </div>
          </div>
  
          <div className='LegacyOurFamilyText'>
            <h2>Our Family, Caring for Yours.</h2>
          </div>
  
          <div className='GroupPhotoSection'>
            <div className='GroupPhotoContainer'>
              <div className='Legact-Group1'>
                <img src={GroupPhoto1} alt='Group Photo 1' className='GroupPhoto'/>
              </div>
              <div className='Legact-Group2'>
                <img src={GroupPhoto2} alt='Group Photo 2' className='GroupPhoto'/>
              </div>
            </div>
          </div>
  
          {/* Our Promise Section */}
          <div className='OurPromiseSection'>
            <h2>Our Promise</h2>
            <div className='PromiseContent'>
              <ul>
                <li>Established in 1983 with the core focus on patient care.</li>
                <li>Specialised Pediatric Phlebotomists & Dr. Dangs available, on request.</li>
                <li>Triple quality check policy, handled exclusively by doctors is among the finest in the world.</li>
                <li>Globally approved equipment & methodology.</li>
                <li>Awarded FICCI healthcare excellence award in patient experience.</li>
              </ul>
              <ul>
                <li>Call outs for Critical Test Results.</li>
                <li>Following a robust quality assurance system.</li>
                <li>All samples (including stool, urine) reported exclusively by specialist pathologists & microbiologists.</li>
                <li>Specialists for MRD (minimal residual disease), flowcytometry based testing, autoimmunity workup and infectious molecular biology testing.</li>
              </ul>
            </div>
          </div>
  
          {/* What's New in Dr. Dangs Lab Section */}
          <div className='WhatsNewSection'>
            <div className='WhatsNewContent'>
              <h2>What's New in Dr. Dangs Lab</h2>
              <ul>
                <li><span className='checkmark'>✔</span> Quality Diagnostics In Delhi, Now in Gurugram!</li>
                <li><span className='checkmark'>✔</span> Dr. Dangs Lab Introduces Lifestyle Packages</li>
                <li><span className='checkmark'>✔</span> Wide Array of Comprehensive Allergy & Food Intolerance testing</li>
                <li><span className='checkmark'>✔</span> BIOFIRE: Among the first laboratories in India, equipped with the comprehensive 1-in-all Filmarray for providing wholesome syndromic diagnostic solutions for infectious diseases in the shortest possible time.</li>
                <li><span className='checkmark'>✔</span> List Of Holiday</li>
              </ul>
            </div>
            <div className='WhatsNewImages'>
              <img src={Legacy5} alt='Dr. Dangs Lab' className='WhatsNewImage'/>
              <img src={Legacy6} alt='Lab Equipment' className='WhatsNewImage'/>
            </div>
          </div>

          {/* New Swiper Section */}
          <div className='SwiperSection'>
      <h2>Meet Our Team of Specialists</h2>
      <Swiper
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className='TeamSwiper'
        breakpoints={{
          320: {
            slidesPerView: 1,   // Show 1 slide on very small screens
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,   // Show 2 slides on small devices
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,   // Show 3 slides on tablets
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,   // Show 4 slides on large desktops
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <div className='Specialist'>
            <img src={Legacy2} alt='Prof (Dr.) Navin Dang' />
            <h3>Prof (Dr.) Navin Dang</h3>
            <p>Director & Founder</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='Specialist'>
            <img src={DRManju} alt='Dr. Manju Dang' />
            <h3>Dr. Manju Dang</h3>
            <p>Director & Founder</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='Specialist'>
            <img src={DrManvi} alt='Dr. Manavi Dang' />
            <h3>Dr. Manavi Dang</h3>
            <p>CEO & Partner</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='Specialist'>
            <img src={DrArjun} alt='Dr. Arjun Dang' />
            <h3>Dr. Arjun Dang</h3>
            <p>CEO & Partner</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='Specialist'>
            <img src={DrVisvjeet} alt='Dr. Biswajit Sen' />
            <h3>Dr. Biswajit Sen</h3>
            <p>Sr. Director – Histocytopathology & Autoimmune</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='Specialist'>
            <img src={DrLeena} alt='Dr. Leena Chatterjee' />
            <h3>Dr. Leena Chatterjee</h3>
            <p>President – Strategy & Operations</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='Specialist'>
            <img src={DrBineesh} alt='Dr. Binish Jawed' />
            <h3>Dr. Binish Jawed</h3>
            <p>Head – Molecular Biology & Sr. Manager - Quality Assurance</p>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>


          <div className='LegacyOurFamilyText'>
          <h2>Supported Foundations</h2>
          <hr></hr>
          </div>
            {/* Supported Foundations Section */}
            <div className='SupportedFoundationsSection'>
      <Swiper
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className='FoundationSwiper'
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,   // Show 1 slide on very small screens
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,   // Show 2 slides on mobile devices
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,   // Show 3 slides on tablets and above
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,   // Show 4 slides on large desktops
            spaceBetween: 40,
          }
        }}
      >
        <SwiperSlide>
          <img src={LegacySupport0} alt='Foundation 1' className='FoundationImage' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LegacySupport1} alt='Foundation 2' className='FoundationImage' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LegacySupport2} alt='Foundation 3' className='FoundationImage' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LegacySupport3} alt='Foundation 4' className='FoundationImage' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LegacySupport5} alt='Foundation 5' className='FoundationImage' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LegacySupport6} alt='Foundation 6' className='FoundationImage' />
        </SwiperSlide>
      </Swiper>
    </div>





        </div>
      </>
    );
}

export default Legacy;
