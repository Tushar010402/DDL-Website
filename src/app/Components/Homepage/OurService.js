import React from 'react';
import Image from 'next/image';
import styles from './OurService.module.css';

const OurService = () => {
  const services = [
    {
      icon: '/PhotosAndLogos/doctor-icon-vector.png',
      title: 'Quintessential Quality',
      subtitle: 'Robust Quality Assurance Systems',
      backContent: [
        'Triple Quality Check Policy, unique to the lab, is handled exclusively by our expert team of doctors.'
      ]
    },
    {
      icon: '/PhotosAndLogos/Patient-care.jpg',
      title: 'Personalized Patient Care',
      subtitle: '"You"\nOur Top Priority',
      backContent: [
        'Low/No-Queue Reception.',
        'Monitored Air-Quality.',
        'Senior Citizen Friendly.',
        'Wheel-Chair Accessible.',
        'Critical Callouts for emergency lab values.'
      ]
    },
    {
      icon: '/PhotosAndLogos/Superior-Technology.jpg',
      title: 'Superior Technology',
      subtitle: 'Results Par\nExcellence',
      backContent: [
        'Automation most suited for our population base.',
        'Specialists in every field.'
      ]
    },
    {
      icon: '/PhotosAndLogos/pediatric-prowess.jpg',
      title: 'Paediatric Prowess',
      subtitle: 'Caring for the\nLittle Ones',
      backContent: [
        'Specialised paediatric phlebotomists, including Dr. Dang (on request).',
        'Special Pain-Less Needles for Babies.',
        'Wide array of Baby-Tests.'
      ]
    }
  ];

  const ServiceCard = ({ service }) => (
    <div className={styles.OurFirstPromiseDIvMain}>
      <div className={styles.flipContainer}>
        <div className={styles.flipFront}>
          <div className={styles.OurFirstPromiseDivIConSIde}>
            <Image
              src={service.icon}
              alt={`${service.title} Icon`}
              width={80}
              height={80}
              priority
            />
          </div>
          <div className={styles.OurFirstPromiseTextDIv}>
            <h2>{service.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: service.subtitle.replace('\n', '<br /><strong>') + '</strong>' }} />
          </div>
        </div>
        <div className={styles.flipBack}>
          <h2>{service.title}</h2>
          <ul>
            {service.backContent.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.OurPromisesHomePage}>
      <div className={styles.OurPromiseHomePageMainHeading}>
        <h1>OUR PROMISE</h1>
        <hr />
      </div>

      <div className={styles.OurPromisesFLex}>
        <div className={styles.SSSSSSSSSSSSSAAAAAAAAAAAAA}>
          <ServiceCard service={services[0]} />
          <ServiceCard service={services[1]} />
        </div>
        <div className={styles.SSSSSSSSSSSSSAAAAAAAAAAAAA}>
          <ServiceCard service={services[2]} />
          <ServiceCard service={services[3]} />
        </div>
      </div>
    </div>
  );
};

export default OurService;
