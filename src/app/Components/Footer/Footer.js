"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sanitizeHTML } from '../../../utils/sanitize';
import axios from 'axios';
import styles from './Footer.module.css';
import { getLocations, FALLBACK_LOCATIONS } from '@/lib/locations';

// Transform API locations for Footer display
const transformForFooter = (locations) => {
  return locations.map(loc => ({
    title: loc.title,
    address: loc.address,
    phone: loc.phones,
    timing: loc.timing,
    link: loc.page_link || ''
  }));
};

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
        <p dangerouslySetInnerHTML={{ __html: sanitizeHTML(address) }} />
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
        <p dangerouslySetInnerHTML={{ __html: sanitizeHTML(timing) }} />
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

  // Locations state - fetched from API with fallback
  const [locations, setLocations] = useState(transformForFooter(FALLBACK_LOCATIONS));

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

    const fetchLocationsData = async () => {
      try {
        const data = await getLocations();
        setLocations(transformForFooter(data));
      } catch (error) {
        console.error('Error fetching locations:', error);
        // Fallback is already set as initial state
      }
    };

    fetchIp();
    fetchHolidays();
    fetchLocationsData();
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
              {locations.slice(0, 5).map((location, index) => (
                <LocationItem key={index} {...location} />
              ))}
            </div>
            <div className={styles.SecondRowInFooterLocations}>
              {locations.slice(5).map((location, index) => (
                <LocationItem key={index + 5} {...location} />
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
