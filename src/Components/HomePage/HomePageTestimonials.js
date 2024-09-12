import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './HomePageTestimonials.css';
import MaryKom from '../../PhotosAndLogos/mary-kom.jpg';
import SiddharthaBasu from '../../PhotosAndLogos/Siddhartha-Basu.jpg';
import DrNaresh from '../../PhotosAndLogos/Dr-Naresh.jpg';
import DrAmrita from '../../PhotosAndLogos/Amita-Mahajan.jpg';
import DrCol from '../../PhotosAndLogos/DrColCSPant.jpg';
import MrSethi from '../../PhotosAndLogos/DrSethi.jpg';
import DrSubhas from '../../PhotosAndLogos/DrSubhas.jpg';
import PrannoyRoy from '../../PhotosAndLogos/Prannoy_Roy.jpg';

const testimonials = [
    {
        quote: `“Splendid team of doctors headed by Dr. Navin Dang, Dr. Dangs Lab is an epitome of quality diagnostics in the country.”`,
        name: 'Dr. Naresh Trehan',
        description: `The Chairman and Managing Director of Medanta – The Medicity, Dr. Naresh Trehan is a world-renowned cardiovascular and cardiothoracic surgeon`,
        image: DrNaresh,
      },

      {
        quote: `“Dr. Dang’s smile and his presence makes one feel so good and positive. Love the way he takes care of each and every patient who walks in, be it a little baby in the arms or an old man. God bless you Dr. Dang.” `,
        name: 'Dr. Amita Mahajan',
        description: `Senior Consultant- Paediatric Oncology- Indraprastha Apollo Hospitals, Dr. Amita Mahajan is a luminary in the medical field having contributed magnanimously in curing children with leukemia`,
        image: DrAmrita,
      },

      {
        quote: `“With an extremely professional team and Dr. Dangs expertise, Dr. Dangs Lab is a perfect exemplar of Quality Diagnostics.” `,
        name: 'Dr. Col CS Pant',
        description: `Dr. Col. CS Pant VSM is a renowned Breast Radiologist in the country and is considered the last word in the field of Breast Imaging. Besides being an authority in the field of breast imaging, he is also the founder and Current National President of Breast Imaging Society of India and Past National President of Indian Radiological and Imaging Association.`,
        image: DrCol,
      },

      // {
      //   quote: `“Dr. Dangs Lab stands for Premium Quality Lab Services. Superb team of doctors providing outstanding patient care.” `,
      //   name: 'Mr Sunil Sethi',
      //   description: `President - Fashion Design Council Of India, Mr. Sunil Sethi. He has represented the best international stores and designers for their buying and sourcing out of India in Handicrafts, Textiles and Fashion`,
      //   image: MrSethi,
      // },

      {
        quote: `“Dr. Dangs Lab has surely come a long way from where they started. Very proud of their journey and the work they are doing for our community.” `,
        name: 'Dr. Subhash C Arya',
        description: `Presently working as an Emeritus Consultant in Department of Neonatal, Pediatric and Adolescent Medicine at BLK Super Speciality Hospital, New Delhi. Professional qualification of the doctor is MBBS(AIIMS), Diplomate of American Board of Paediatrics and specializes in Paediatrics. He is a Member of Fellow Indian Academy of Pediatrics and Delhi Medical Council.`,
        image: DrSubhas,
      },
      {
        quote: `“Having been users of Dr. Dangs Lab services since 37 years, me and my family find them continuously surpassing the benchmarks of quality diagnostics & personalized care.” `,
        name: 'Mr.Prannoy Roy ',
        description: `He is an Indian journalist and media personality. He is the co-founder and executive co-chairperson of New Delhi Television (NDTV).`,
        image: PrannoyRoy,
      },
      {
        quote: `“I’d like to commend the role of the lab for the critical and support it has recently provided me with a series of accurate reports turned around within urgent deadlines, related to complications following a surgery and complex treatments following it. Dr Navin Dang personally ensured a super prompt response preceding a corrective surgery. I’d also like to specially mention Dr Devjani De, microbiologist, who supervised all successive tests over months, and thank her for professional insights, informed diagnosis as well as prognosis, good counsel and encouragement, which have helped me in successful treatment and getting back on my feet. My thanks to all those at the lab for the high standard of their inputs.” `,
        name: 'Siddhartha Basu',
        description: `The Director of 'Tree of Knowledge' – The Producer-Director of 'Kaun Banega Crorepati', 'Dus Ka Dum', 'Jhalak Dikhhla Jaa' and 'India’s Got Talent'.`,
        image: SiddharthaBasu,
      },

      {
        quote: `“Excellent team of doctors and good services”`,
        name: 'Mary Kom',
        description: `Mangte Chungneijang Mary Kom, Nicknamed Magnificent Mary (born 1 March 1983) is an Indian Olympic boxer and incumbent Member of Parliament, Rajya Sabha.`,
        image: MaryKom,
      },
  // Add more testimonials here if needed
];

const HomePageTestimonials = () => {
  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  return (
    <div className="testimonials-container">
      <h2>Notable Client Experiences</h2>
      <p>Dr. Dangs Lab feels privileged to have served the honourable President & Prime Minister of India along with many eminent celebrities. The lab feels extremely privileged and unanimously agrees that each and every patient is a ‘V.I.P’ for it and deserves the best attention and care.</p>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }} // Add this line for autoplay
        loop={true} // Add this line for looping
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-slide">
              <blockquote>
                {testimonial.quote.length > 200 ? (
                  <>
                    {testimonial.quote.substring(0, 200)}...
                    <button className="read-more-button" onClick={() => handleReadMore(testimonial.quote)}>Read More</button>
                  </>
                ) : (
                  testimonial.quote
                )}
              </blockquote>
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <h3>{testimonial.name}</h3>
              <div className='TestimonialDescriptioDIv'>
                <p className="testimonial-description">{testimonial.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>X</button>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePageTestimonials;
