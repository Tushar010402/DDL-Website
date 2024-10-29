import React from 'react';
import './BelowOurPromise.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

// Ensure you are importing images at the top as well
import backgroundImage1 from '../../PhotosAndLogos/1slider2C.jpg';
import backgroundImage2 from '../../PhotosAndLogos/Lab-BG-for-State-of-Art-Modern-Section.jpg';

// Initialize Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const BelowOurPromise = () => {
    return (
        <div className='BelowPromiseMainDiv'>
            <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                autoplay={{ delay: 500000, disableOnInteraction: false }}
                className="mySwiper"
            >
                   <SwiperSlide>
                    <div className='BelowPromiseImageDIv2'>
                        <img src={backgroundImage2} alt="Slide 2" />
                        <div className='BelowPromise1stBackground1' id='BelowPromise1stBackground1ID'>
                            <h2>THE PERFECT BLEND OF TOP TECHNOLOGY & EXCELLENT EXPERTISE</h2>
                            <p>Built on 4 pillars: Highly Qualified Medical Team, State-of-the Art Equipment, Personalized patient care, Quality Par Excellence. First Indian Lab to be ISO-9002 Certified. Accredited by NABL since 2001.</p>
                            <a href="/VirtalTour">Virtual Lab Visit</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='BelowPromiseImageDIv'>
                        <img src={backgroundImage1} alt="Slide 1" />
                        <div className='BelowPromise1stBackground1'>
                            <h2>PIONEERING PERFECTION</h2>
                            <p>Trained & highly experienced Two-person phlebotomy. Barcoding on site and fully automated pneumatic chute sample transport system ensures a seamless pre-analytical processing of samples</p>
                            <a href="/VirtalTour">Virtual Lab Visit</a>
                        </div>
                    </div>
                </SwiperSlide>
             
            </Swiper>
        </div>
    );
};

export default BelowOurPromise;
