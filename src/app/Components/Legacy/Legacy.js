'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Legacy.module.css';

const Legacy = () => {
  return (
    <>
      <div className={styles.legacyMainDiv}>
        <div className={styles.legacyMainBanner}>
          <div className={styles.legacyContentContainer}>
            <div className={styles.legacyTextContent}>
              <h2>OUR LEGACY</h2>
              <p>Our Family, Caring for Yours</p>
            </div>
          </div>
        </div>

        <div className={styles.legacyAfterHeader}>
          <div className={styles.legacyContentSection}>
            <Image
              src="/PhotosAndLogos/Legacy.png"
              alt="Award Ceremony"
              width={500}
              height={400}
              className={styles.legacyImage}
            />
            <div className={styles.legacyText}>
              <h3>Dr. Dang's Lab is known to be one of the best Quality Based Diagnostic Labs in the country.</h3>
              <p>
                Dr. Dangs Lab was started in 1983 with Dr. Manju Dang, MD and Prof (Dr.) Navin Dang, MD as the 2 partners.
                It has received numerous national and international awards including Dr. B.C Roy national award, FICCI healthcare excellence award etc.
                It was the first lab in the country to receive ISO-9002 certification and has been accredited by NABL since 2001 in Medical Laboratories.
                It offers a wide menu of tests in Biochemistry, Haematology including Flowcytometry, Microbiology, Molecular biology, Immunology, Histopathology and Cytology.
              </p>
            </div>
          </div>

          <p className={styles.legacyQuote}>
            "Today, Dr. Dangs Lab is the only lab in India that has a mix of unparalleled report quality, personalised attention to patients, ethical work ideals and the highest repute in the doctor community,"
          </p>
        </div>

        <div className={styles.drDangLegacySection}>
          <div className={styles.drDangLegacyContent}>
            <div className={styles.drDangLegacyText}>
              <h3>DR. DANG'S LEGACY</h3>
              <p>
                Prof. (Dr.) Navin Dang is the Founder & Chairman of Dr. Dangs Lab. His ethos, compassion and dedication to his patients are the key reasons Dr. Dangs Lab has reached the pinnacle of quality standalone labs in India. Having begun its journey with a small financial investment and a 400 sq. ft. area he along with his wife, Dr. Manju Dang, have developed the facility to a 30,000 sq. ft. specialised laboratory that doyens in the healthcare field swear by.
              </p>
              <p>
                Dr. Dangs Lab is the only pathology lab in India with an extremely high doctor to patient ratio. The Dr. Dangs plays an integral role in all lab processes including phlebotomy and other pre & post-analytical processes. It is a pediatric sensitized lab with special pediatric phlebotomists and pathologists trained in pediatric sample reporting along with the best doctors with specialist pathologists for MRD and hemato-onco pathology. The lab's critical callouts for emergency lab values along with the triple quality check policy that are unique to the lab are the foundation for its stellar services and unmatched quality.
              </p>
            </div>
            <Image
              src="/PhotosAndLogos/DRNavinLegacy2.png"
              alt="Dr. Navin Dang"
              width={500}
              height={400}
              className={styles.drDangImage}
            />
          </div>
        </div>

        <div className={styles.legacyOurFamilyText}>
          <h2>Our Family, Caring for Yours.</h2>
        </div>

        <div className={styles.groupPhotoSection}>
          <div className={styles.groupPhotoContainer}>
            <div className={styles.legactGroup1}>
              <Image
                src="/PhotosAndLogos/Legacy3.png"
                alt="Group Photo 1"
                width={800}
                height={500}
                className={styles.groupPhoto}
              />
            </div>
            <div className={styles.legactGroup2}>
              <Image
                src="/PhotosAndLogos/Legacy4.png"
                alt="Group Photo 2"
                width={800}
                height={500}
                className={styles.groupPhoto}
              />
            </div>
          </div>
        </div>

        <div className={styles.ourPromiseSection}>
          <h2>Our Promise</h2>
          <div className={styles.promiseContent}>
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

        <div className={styles.whatsNewSection}>
          <div className={styles.whatsNewContent}>
            <h2>What's New in Dr. Dangs Lab</h2>
            <ul>
              <li><span className={styles.checkmark}>✔</span> Quality Diagnostics In Delhi, Now in Gurugram!</li>
              <li><span className={styles.checkmark}>✔</span> Dr. Dangs Lab Introduces Lifestyle Packages</li>
              <li><span className={styles.checkmark}>✔</span> Wide Array of Comprehensive Allergy & Food Intolerance testing</li>
              <li><span className={styles.checkmark}>✔</span> BIOFIRE: Among the first laboratories in India, equipped with the comprehensive 1-in-all Filmarray for providing wholesome syndromic diagnostic solutions for infectious diseases in the shortest possible time.</li>
              <li><span className={styles.checkmark}>✔</span> List Of Holiday</li>
            </ul>
          </div>
          <div className={styles.whatsNewImages}>
            <Image
              src="/PhotosAndLogos/Legacy5.png"
              alt="Dr. Dangs Lab"
              width={400}
              height={300}
              className={styles.whatsNewImage}
            />
            <Image
              src="/PhotosAndLogos/Legacy6.png"
              alt="Lab Equipment"
              width={400}
              height={300}
              className={styles.whatsNewImage}
            />
          </div>
        </div>

        <div className={styles.swiperSection}>
          <h2>Meet Our Team of Specialists</h2>
          <Swiper
            spaceBetween={30}
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className={styles.teamSwiper}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              <div className={styles.specialist}>
                <Image 
                  src="/PhotosAndLogos/DRNavinLegacy2.png" 
                  alt="Prof (Dr.) Navin Dang" 
                  width={300}
                  height={400}
                />
                <h3>Prof (Dr.) Navin Dang</h3>
                <p>Director & Founder</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.specialist}>
                <Image 
                  src="/PhotosAndLogos/DRManju.png" 
                  alt="Dr. Manju Dang" 
                  width={300}
                  height={400}
                />
                <h3>Dr. Manju Dang</h3>
                <p>Director & Founder</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.specialist}>
                <Image 
                  src="/PhotosAndLogos/drmanvi.png" 
                  alt="Dr. Manavi Dang" 
                  width={300}
                  height={400}
                />
                <h3>Dr. Manavi Dang</h3>
                <p>CEO & Partner</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.specialist}>
                <Image 
                  src="/PhotosAndLogos/Drarjunff.png" 
                  alt="Dr. Arjun Dang" 
                  width={300}
                  height={400}
                />
                <h3>Dr. Arjun Dang</h3>
                <p>CEO & Partner</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.specialist}>
                <Image 
                  src="/PhotosAndLogos/dr-biswajit.png" 
                  alt="Dr. Biswajit Sen" 
                  width={300}
                  height={400}
                />
                <h3>Dr. Biswajit Sen</h3>
                <p>Sr. Director – Histocytopathology & Autoimmune</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.specialist}>
                <Image 
                  src="/PhotosAndLogos/DrLeena.png" 
                  alt="Dr. Leena Chatterjee" 
                  width={300}
                  height={400}
                />
                <h3>Dr. Leena Chatterjee</h3>
                <p>President – Strategy & Operations</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.specialist}>
                <Image 
                  src="/PhotosAndLogos/jawed.png" 
                  alt="Dr. Binish Jawed" 
                  width={300}
                  height={400}
                />
                <h3>Dr. Binish Jawed</h3>
                <p>Head – Molecular Biology & Sr. Manager - Quality Assurance</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.legacyOurFamilyText}>
          <h2>Supported Foundations</h2>
          <hr />
        </div>

        <div className={styles.supportedFoundationsSection}>
          <Swiper
            spaceBetween={30}
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className={styles.foundationSwiper}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              }
            }}
          >
            {[0, 1, 2, 3, 5, 6].map((num) => (
              <SwiperSlide key={num}>
                <Image
                  src={`/PhotosAndLogos/LegacySupportSlider${num}.png`}
                  alt={`Foundation ${num + 1}`}
                  width={200}
                  height={150}
                  className={styles.foundationImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Legacy;