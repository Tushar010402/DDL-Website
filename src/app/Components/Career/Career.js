// src/app/Components/Career/Career.jsx

'use client'; // Ensure this component is rendered on the client side

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Correct import
import Image from 'next/image'; // Import Next.js Image component
import styles from './Career.module.css'; // Import CSS Module

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile_no: '',
    email: '',
    position: '',
    experience: '',
    ctc: '',
    resume: null,
  });
  const [showModal, setShowModal] = useState(false);
  const [captcha, setCaptcha] = useState({ question: '', answer: '' });
  const [userCaptcha, setUserCaptcha] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userIp, setUserIp] = useState('');
  const router = useRouter(); // Correctly imported from 'next/navigation'

  useEffect(() => {
    generateCaptcha();
    fetchUserIp();
  }, []);

  // Fetch user IP address
  const fetchUserIp = async () => {
    try {
      const response = await axios.get('https://api64.ipify.org?format=json');
      setUserIp(response.data.ip);
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }
  };

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const question = `${num1} + ${num2} = ?`;
    const answer = (num1 + num2).toString();
    setCaptcha({ question, answer });
    setUserCaptcha('');
  };

  const validateResume = (file) => {
    const validTypes = ['application/pdf'];
    if (file && !validTypes.includes(file.type)) {
      return 'Unsupported file type. Only PDF files are allowed.';
    }
    return '';
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const fileError = validateResume(file);

    if (fileError) {
      setErrors((prevErrors) => ({ ...prevErrors, resume: fileError }));
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('file', file);

      const response = await axios.post('https://backend.dangsccg.co.in/api/api/file-scan/', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.status === 'safe') {
        setFormData((prevFormData) => ({ ...prevFormData, resume: file }));
        setErrors((prevErrors) => ({ ...prevErrors, resume: '' }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          resume: 'The file is potentially harmful and cannot be uploaded.',
        }));
      }
    } catch (error) {
      console.error('Error scanning the file:', error);
      setErrors((prevErrors) => ({
        ...prevErrors,
        resume: 'Error scanning the file. Please try again later.',
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate mobile number
    if (name === 'mobile_no') {
      const isNumeric = /^\d+$/.test(value);
      if (value.length !== 10) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          mobile_no: 'Mobile number must be exactly 10 digits long.',
        }));
      } else if (!isNumeric) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          mobile_no: 'Mobile number must contain only numbers.',
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, mobile_no: '' }));
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.mobile_no) newErrors.mobile_no = 'Mobile number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.position) newErrors.position = 'Position is required';
    if (!formData.experience) newErrors.experience = 'Experience is required';
    if (!formData.ctc) newErrors.ctc = 'Expected CTC is required';
    if (!formData.resume) newErrors.resume = 'Resume is required';
    if (userCaptcha !== captcha.answer) newErrors.captcha = 'Incorrect CAPTCHA. Please try again.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Send email to info@drdangslab.com with application details
  const sendEmailToInfo = async (formData) => {
    try {
      // Prepare the data for the email
      const emailData = {
        date: new Date().toLocaleString('en-GB', { timeZone: 'Asia/Kolkata' }),
        client_ip: userIp,
        name: formData.name,
        mobile_no: formData.mobile_no,
        email: formData.email,
        position: formData.position,
        experience: formData.experience,
        ctc: formData.ctc,
      };

      // Send the email via the backend API endpoint
      await axios.post('https://backend.dangsccg.co.in/api/career-send-email-to-info/', emailData);

      console.log('Email sent to info@drdangslab.com');
    } catch (error) {
      console.error('Error sending email to info@drdangslab.com:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return; // Prevent multiple submissions
    }

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const form = new FormData();
      for (const key in formData) {
        form.append(key, formData[key]);
      }

      const response = await axios.post('https://backend.dangsccg.co.in/api/api/careers/', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);

      // Send email to info@drdangslab.com
      await sendEmailToInfo(formData);

      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        router.push('/'); // Navigate to home page
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response && error.response.status === 429) {
        setErrors({ ...errors, general: 'Too many requests. Please try again later.' });
      } else if (error.response && error.response.data) {
        setErrors(error.response.data);
      } else {
        setErrors({ ...errors, general: 'An unexpected error occurred. Please try again later.' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.careerForm}>
      <h2>Careers</h2>
      <p>
        Dr. Dangs Lab welcomes and encourages applications from every individual trained in various fields of lab
        medicine. We believe that hiring the right talent would go a long way in creating an impact for our organization as
        well as the individual. As a Company, we lay strong emphasis on quality standards, stellar services &amp; personalized care.
        We are committed to hiring individuals who demonstrate integrity, excellence, initiative, problem-solving qualities, and leadership.
      </p>
      <p>Join our team and grow with us!</p>
      <p>Fill up the form below and our HR Team will contact you in case of a vacancy:</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.careerFormMaindIv}>
          <div className={styles.careerFormInnerDiv}>
            <label htmlFor="name">Name*:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className='text-black' // Ensure text is visible on dark mode
            />
            {errors.name && <div className={styles.error}>{errors.name}</div>}
          </div>
          <div className={styles.careerFormInnerDiv}>
            <label htmlFor="mobile_no">Mobile No.*:</label>
            <input
              type="text"
              id="mobile_no"
              name="mobile_no"
              value={formData.mobile_no}
              onChange={handleChange}
              required
              className='text-black'
            />
            {errors.mobile_no && <div className={styles.error}>{errors.mobile_no}</div>}
          </div>
          <div className={styles.careerFormInnerDiv}>
            <label htmlFor="email">Email Address*:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className='text-black'
            />
            {errors.email && <div className={styles.error}>{errors.email}</div>}
          </div>
        </div>
        <label htmlFor="position">Position Applied For*:</label>
        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
          className='text-black'
        />
        {errors.position && <div className={styles.error}>{errors.position}</div>}

        <label htmlFor="experience">Total Work Experience*:</label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
          className='text-black'
        />
        {errors.experience && <div className={styles.error}>{errors.experience}</div>}

        <label htmlFor="ctc">Expected CTC*:</label>
        <input
          type="text"
          id="ctc"
          name="ctc"
          value={formData.ctc}
          onChange={handleChange}
          required
          className='text-black'
        />
        {errors.ctc && <div className={styles.error}>{errors.ctc}</div>}

        <label htmlFor="resume">Upload Resume (supported file types are .pdf):</label>
        <input
          type="file"
          id="resume"
          name="resume"
          accept=".pdf"
          onChange={handleFileChange}
          required
          className='text-black'
        />
        {errors.resume && <div className={styles.error}>{errors.resume}</div>}

        <div className={styles.captchaContainer}>
          <label>CAPTCHA:</label>
          <span className={styles.captchaText}>{captcha.question}</span>
          <button type="button" onClick={generateCaptcha} className={styles.refreshButton}>
            Refresh
          </button>
          <input
            type="text"
            value={userCaptcha}
            onChange={(e) => setUserCaptcha(e.target.value)}
            placeholder="Enter the answer"
            className={styles.captchaInput}
          />
          {errors.captcha && <div className={styles.error}>{errors.captcha}</div>}
        </div>

        {errors.general && <div className={styles.error}>{errors.general}</div>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Thank You!</h3>
            <p>Your application has been submitted successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
