"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import styles from './Footer.module.css';

const locations = [
  {
    title: 'SDA',
    address: 'C2/1, SDA Aurobindo Marg, Next to Aurobindo Market, New Delhi-110016',
    phone: ['011-45004200', '+91-9999992020'],
    timing: 'Timing: 7:30am to 7:00pm <br /> (Monday-Saturday)',
    link: "/ "
    
  },
  {
    title: 'Punjabi Bagh',
    address: '1/51, Ground Floor, Opposite Central Market, West Punjabi Bagh, New Delhi– 110026',
    phone: ['+91-9810678165'],
    timing: 'Timing: 8:00am to 6:00pm <br />(Monday-Saturday)',
    link: "/pathology-labs-in-punjabi-bagh"
  },
  {
    title: 'Vasant Kunj',
    address: '12/13 G.F., Vasant Arcade, Nelson Mandela Marg, Vasant Kunj, New Delhi-110070',
    phone: ['+91-9910589234'],
    timing: 'Timing: 8:00am to 6:00pm <br />(Monday-Saturday)',
    link: ""
  },
  {
    title: 'Greater Kailash',
    address: 'GF N36 GK1 <br /> New Delhi–110048',
    phone: ['+91-9910313567'],
    timing: 'Timing-8:00am to 4:00pm <br />(Monday-Saturday)',
    link: ""
  },
  {
    title: 'Gurugram',
    address: 'Palm Springs Plaza, Golf Course Road Sector-53, Gurugram-122001',
    phone: ['+91-9818881065'],
    timing: 'Timing: 8:00am to 6:00pm <br />(Monday-Saturday)',
    link: "/health-checkup-packages/diagnostic-centre-and-pathology-lab-gurgaon.html"
  },
  {
    title: 'Gurugram Sector 66',
    address: 'G-42, Block B, Spaze Business Park, Badshahpur, Sector 66, Gurugram, Haryana 122102',
    phone: ['+91-9220503540'],
    timing: 'Timing: 8:00am to 6:00pm <br />(Monday-Saturday)',
    link: "/health-checkup-packages/diagnostic-centre-and-pathology-lab-gurgaon.html"
  },
  {
    title: 'New Friends Colony',
    address: 'D-851, Ground Floor, New Friends Colony, New Delhi-110025',
    phone: ['+91-9311225665'],
    timing: 'Timing: 8:00am to 6:00pm<br />(Monday-Saturday)',
    link: ""
  },
  {
    title: 'Kamla Nagar',
    address: 'UA No-25, Ground Floor, Jawahar Nagar, Malka Ganj, New Delhi-110007',
    phone: ['+91-9289157434'],
    timing: 'Timing: 8:00am to 6:00pm <br />(Monday-Saturday)',
    link: ""
  },
  {
    title: 'Noida',
    address: 'Max Square (Lower Ground Floor), Jaypee Wishtown, Sector 129, Noida – 201304',
    phone: ['+91-9220503545'],
    timing: 'Timing: 8:00am to 6:00pm <br />(Monday-Saturday)',
    link: ""
  },

];

const socialLinks = [ 
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/DrDangsLab/',
    image: '/PhotosAndLogos/fb-footer-smo.png'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/drdangs/',
    image: '/PhotosAndLogos/insta-footer-smo.png'
  },
  {
    name: 'Twitter',
    url: 'https://x.com/drdangslab',
    image: '/PhotosAndLogos/twitter-footer-smo.png'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCt-iw59KbbSVMRNdzQsorTg',
    image: '/PhotosAndLogos/youtube-footer-smo.png'
  },
  {
    name: 'LinkedIn',
    url: 'https://in.linkedin.com/company/drdangslab/',
    image: '/PhotosAndLogos/linkedin-footer-smo.png'
  }
];

const LocationItem = ({ title, address, phone, timing, link }) => (
  <Link href={link} className={styles.locationItem}>
    <div className={styles.FooterNAmeMainDIv}>
      <div className={styles.FooterNameDIv}>
        <i className={styles.mapIcon}>
          <svg 
            viewBox="0 0 24 24" 
            width="24" 
            height="24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{ color: '#d9242a', width: '2.2em', height: '2.2em' }}
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </i>
      </div>
      <div>
        <h3 className={styles.locationTitle}>
          {title}
        </h3>
        <p dangerouslySetInnerHTML={{ __html: address }} />
        <p>
          {phone.map((num, index) => (
            <React.Fragment key={num}>
              <a
                href={`tel:${num}`}
                onClick={(e) => e.stopPropagation()} // Prevents bubbling
              >
                {num}
              </a>
              {index < phone.length - 1 && ', '}
            </React.Fragment>
          ))}
        </p>
        <p dangerouslySetInnerHTML={{ __html: timing }} />
      </div>
    </div>
  </Link>
);


const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    comment: ''
  });
  const [userIp, setUserIp] = useState('');
  const [captcha, setCaptcha] = useState({ question: '', answer: '' });
  const [userCaptcha, setUserCaptcha] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ------------------- NEW: Holiday Modal State & Data -----------------------
  const [showHolidaysModal, setShowHolidaysModal] = useState(false);
  const [holidaysData, setHolidaysData] = useState([]);

  // 1) Filter by is_show flag and past dates, 2) sort by date, 3) format remaining holidays to dd, Month, yyyy
  const upcomingHolidays = holidaysData
    .filter(holiday => holiday.is_show && new Date(holiday.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(holiday => {
      const dateObj = new Date(holiday.date);
      const day = dateObj.getDate().toString().padStart(2, "0");
      const month = dateObj.toLocaleString("default", { month: "long" });
      const year = dateObj.getFullYear();
      return {
        ...holiday,
        date: `${day}, ${month}, ${year}`,
      };
    });
  // --------------------------------------------------------------------------

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        setUserIp(data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    const fetchHolidays = async () => {
      try {
        const response = await axios.get('https://backend.dangsccg.co.in/api/holidays/');
        setHolidaysData(response.data);
      } catch (error) {
        console.error('Error fetching holidays:', error);
      }
    };

    fetchIp();
    fetchHolidays();
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Only allow digits for the phone field
    if (name === 'phone' && !/^\d*$/.test(value)) return;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
  };

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCaptcha({
      question: `${num1} + ${num2} = ?`,
      answer: (num1 + num2).toString()
    });
    setUserCaptcha('');
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required.';
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Mobile number must be exactly 10 digits.';
      valid = false;
    }

    if (userCaptcha !== captcha.answer) {
      newErrors.captcha = 'Incorrect CAPTCHA. Please try again.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const sendEmailToInfo = async (formData) => {
    try {
      const emailData = {
        date: new Date().toLocaleString('en-GB', { timeZone: 'Asia/Kolkata' }),
        client_ip: userIp,
        name: formData.name,
        email: formData.email || '',
        mobile_number: formData.phone,
        subject: formData.subject || '',
        message: formData.comment || '',
      };

      const response = await fetch('https://backend.dangsccg.co.in/api/footer-send-email-to-info/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) throw new Error('Failed to send email');
    } catch (error) {
      console.error('Error sending email to info@drdangslab.com:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://backend.dangsccg.co.in/api/api/enquiries/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, ip: userIp }),
      });

      if (response.ok) {
        await sendEmailToInfo(formData);
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          comment: '',
        });
        setUserCaptcha('');
        generateCaptcha();
        setErrors({});
      } else if (response.status === 429) {
        alert('Too many requests. Please try again later.');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className={styles.footerMainDiv}>
        <div className={styles.footerLocations}>
          <Link href="/our-locations" className={styles.locationsHeader}>
            <h2>
              Our Locations 
              <Image
                src="/PhotosAndLogos/location-icon.png"
                alt="Location Icon"
                width={24}
                height={24}
              />
            </h2>
          </Link>
          <p className={styles.closedText}>(Sundays closed)</p>
          <div className={styles.LocationsFooterMainDiv}>
            <div className={styles.FirstRowInFooterLocations}>
              {locations.slice(0, 4).map((location, index) => (
                <LocationItem key={index} {...location} />
              ))}
            </div>
            <div className={styles.SecondRowInFooterLocations}>
              {locations.slice(4).map((location, index) => (
                <LocationItem key={index + 4} {...location} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.Main}>
          <div className={styles.footerContactForm}>
            <h2>We would love to hear from you!</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ position: 'relative', zIndex: 10 }}
              />
              {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
              
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
              />
              
              <input
                type="text"
                name="phone"
                placeholder="Mobile Number*"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <p className={styles.errorMessage}>{errors.phone}</p>}
              
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              
              <textarea
                name="comment"
                placeholder="Your Message"
                value={formData.comment}
                onChange={handleChange}
              />
              
              <div className={styles.footerRow1}>
                <div className={styles.footerInputFeild}>
                  <label>CAPTCHA</label>
                  <div className={styles.footerCaptchaContainer}>
                    <span className={styles.footerCaptchaText}>{captcha.question}</span>
                    <button 
                      type="button" 
                      onClick={generateCaptcha} 
                      className={styles.refreshButton}
                    >
                      Refresh
                    </button>
                  </div>
                  <input
                    type="text"
                    value={userCaptcha}
                    onChange={(e) => setUserCaptcha(e.target.value)}
                    placeholder="Enter the answer"
                    className={styles.footerCaptchaInput}
                    required
                  />
                  {errors.captcha && (
                    <p className={styles.errorMessage}>{errors.captcha}</p>
                  )}
                </div>
              </div>
              
              <div className={styles.FooterSubmitButton}>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          <div className={styles.ThirdcolumnFOoter}>
            {/* CHANGE HERE: onClick to open modal */}
            <button 
              className={styles.linkButton}
              onClick={() => setShowHolidaysModal(true)}
            >
              <h3>List of Holidays</h3>
            </button>
            <p>Find us on</p>
          </div>

          <div className={styles.FooterSocialIcon}>
            {socialLinks.map((social, index) => (
              <span key={index}>
                <a 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Image
                    src={social.image}
                    alt={social.name}
                    width={50}
                    height={50}
                  />
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className={styles.DisclaimerBelowFooter}>
        <strong>IMPORTANT : </strong> Dr. Dangs Lab does not resell through other websites. 
        Please be aware of misleading advertisements.
      </div>
      
      <div className={styles.LastInFooterDIvv}>
        © 2025 Dr. Dangs Lab | All Rights Reserved |
      </div>

      {/* NEW: Holiday Modal */}
      {showHolidaysModal && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent}>
            <h2>List of Holidays</h2>
            <table className={styles.holidayTable}>
              <thead>
                <tr>
                  <th>Holiday Name</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {upcomingHolidays.map((holiday, idx) => (
                  <tr key={idx}>
                    <td>{holiday.name}</td>
                    <td>{holiday.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className={styles.closeButton}
              onClick={() => setShowHolidaysModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
