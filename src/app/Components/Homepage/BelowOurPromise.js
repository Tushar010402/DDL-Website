'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import styles from './BelowOurPromise.module.css';

const BelowOurPromise = () => {
  const slides = [
    {
      image: '/PhotosAndLogos/Lab-BG-for-State-of-Art-Modern-Section.jpg',
      title: 'THE PERFECT BLEND OF TOP TECHNOLOGY & EXCELLENT EXPERTISE',
      description: 'Built on 4 pillars: Highly Qualified Medical Team, State-of-the Art Equipment, Personalized patient care, Quality Par Excellence. First Indian Lab to be ISO-9002 Certified. Accredited by NABL since 2001.',
      id: 'BelowPromise1stBackground1ID'
    },
    {
      image: '/PhotosAndLogos/1slider2C.jpg',
      title: 'PIONEERING PERFECTION',
      description: 'Trained & highly experienced Two-person phlebotomy. Barcoding on site and fully automated pneumatic chute sample transport system ensures a seamless pre-analytical processing of samples',
      id: ''
    }
  ];

  return (
    <div className={styles.BelowPromiseMainDiv}>
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        modules={[Autoplay, Pagination]}
        className={styles.mySwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={index === 0 ? styles.BelowPromiseImageDIv2 : styles.BelowPromiseImageDIv}>
              <div className={styles.imageWrapper}>
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  fill
                  priority
                  className={styles.slideImage}
                />
              </div>
              <div
                className={`${styles.BelowPromise1stBackground1} ${
                  slide.id ? styles[slide.id] : ''
                }`}
              >
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <Link href="/VirtualTour">Virtual Lab Visit</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BelowOurPromise;
