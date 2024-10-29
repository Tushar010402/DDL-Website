// SwineFlu.js
import React, { useState, useEffect, useCallback } from 'react';
import './SwineFlu.css';
import playIcon from '../../PhotosAndLogos/icons8-play-30.png';
import swineFluImage from '../../PhotosAndLogos/swineflu.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Swineflu = () => {
  const [formData, setFormData] = useState({
    mobile_number: '',
    patient_name: '',
    patient_email: '',
    address: '',
    date_for_collection: '',
    preferred_time: '',
    test_package_name: 'Swine Flu H1N1',
    age: '',
    user_ip: '',
    remark: '',
  });

  const [activeIndex, setActiveIndex] = useState(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [errors, setErrors] = useState({});
  const [captcha, setCaptcha] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Fetch user IP address
  const fetchUserIp = useCallback(async () => {
    try {
      const response = await axios.get('https://api64.ipify.org?format=json');
      const ipAddress = response.data.ip;
      setFormData((prevFormData) => ({
        ...prevFormData,
        user_ip: ipAddress,
      }));
    } catch (error) {
      console.error('Error fetching user IP address:', error);
    }
  }, []);

  useEffect(() => {
    fetchUserIp();
  }, [fetchUserIp]);

  // Fetch holidays from the backend
  useEffect(() => {
    axios
      .get('https://backend.dangsccg.co.in/api/holidays/')
      .then((response) => {
        const holidayDates = response.data.map((holiday) => new Date(holiday.date));
        setHolidays(holidayDates);
      })
      .catch((error) => {
        console.error('Error fetching holidays:', error);
      });
  }, []);

  // Check if the selected date is a Sunday or a holiday
  const isSundayOrHoliday = useCallback(
    (date) => {
      const day = date.getDay();
      return day === 0 || holidays.some((holiday) => date.toDateString() === holiday.toDateString());
    },
    [holidays]
  );

  // Validation functions
  const validateMobileNumber = useCallback((value) => {
    if (!value) return 'Mobile number is required.';
    if (!/^\d{10}$/.test(value)) return 'Mobile number should be a 10-digit number.';
    return '';
  }, []);

  const validatePreferredTime = useCallback((value) => {
    return !value ? 'Preferred time is required.' : '';
  }, []);

  const validatePatientName = useCallback((value) => {
    return !value ? 'Patient name is required.' : '';
  }, []);

  const validateAddress = useCallback((value) => {
    return !value ? 'Address is required.' : '';
  }, []);

  // Format date for backend
  const formatDateForBackend = useCallback((date) => {
    const d = new Date(date);
    const month = '' + (d.getMonth() + 1);
    const day = '' + d.getDate();
    const year = d.getFullYear();

    return [year, month.padStart(2, '0'), day.padStart(2, '0')].join('-');
  }, []);

  // Format date for email
  const formatDateForEmail = useCallback((date) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-GB', options);
  }, []);

  // Generate a unique ID for the booking
  const generateUniqueID = useCallback(async () => {
    try {
      const response = await axios.get('https://backend.dangsccg.co.in/api/api/generateUniqueID/');
      return response.status === 200 ? response.data.Unique_id : null;
    } catch (error) {
      console.error('Error generating unique ID:', error);
      return null;
    }
  }, []);

  // Fetch available time slots from the backend
  const fetchTimeSlots = useCallback(async (selectedDate) => {
    try {
      const currentISTTime = new Date().toLocaleTimeString('en-GB', { hour12: false, timeZone: 'Asia/Kolkata' });
      const response = await axios.get('https://backend.dangsccg.co.in/api/api/time-slots/', {
        params: {
          date: selectedDate.toISOString().split('T')[0],
          current_time: currentISTTime,
        },
      });

      if (response.data.time_slots) {
        setAvailableTimeSlots(response.data.time_slots);
      } else {
        setAvailableTimeSlots([]);
        alert(response.data.message || 'No time slots available.');
      }
    } catch (error) {
      console.error('Error fetching time slots:', error);
      setAvailableTimeSlots([]);
    }
  }, []);

  // Handle date change and fetch available time slots
  const handleDateChange = useCallback(
    (date) => {
      const selectedDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

      if (isSundayOrHoliday(selectedDate)) {
        alert('This date is a holiday or Sunday and cannot be selected.');
        setFormData((prevFormData) => ({
          ...prevFormData,
          date_for_collection: '',
          preferred_time: '',
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          date_for_collection: selectedDate,
          preferred_time: '',
        }));

        fetchTimeSlots(selectedDate);
      }
    },
    [isSundayOrHoliday, fetchTimeSlots]
  );

  // Handle input changes and validation
  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));

      let updatedErrors = { ...errors };

      if (name === 'mobile_number') {
        updatedErrors[name] = validateMobileNumber(value);
      } else if (name === 'patient_name') {
        updatedErrors[name] = validatePatientName(value);
      } else if (name === 'address') {
        updatedErrors[name] = validateAddress(value);
      } else if (name === 'preferred_time') {
        updatedErrors[name] = validatePreferredTime(value);
      } else if (name === 'age') {
        const numericValue = value.replace(/\D/g, '');
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: numericValue,
        }));

        updatedErrors[name] =
          numericValue === ''
            ? ''
            : isNaN(numericValue) || parseInt(numericValue) < 0 || parseInt(numericValue) > 110
            ? 'Age should be a number between 0 and 110.'
            : '';
      }

      setErrors(updatedErrors);
    },
    [errors, validateMobileNumber, validatePatientName, validateAddress, validatePreferredTime]
  );

  // Generate CAPTCHA
  const generateCaptcha = useCallback(() => {
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let num1, num2, answer;

    switch (operation) {
      case '+':
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        answer = num1 + num2;
        break;
      case '-':
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * num1) + 1;
        answer = num1 - num2;
        break;
      case '*':
        num1 = Math.floor(Math.random() * 5) + 1;
        num2 = Math.floor(Math.random() * 5) + 1;
        answer = num1 * num2;
        break;
      default:
        num1 = 0;
        num2 = 0;
        answer = 0;
        break;
    }

    setCaptcha({
      question: `${num1} ${operation} ${num2} = ?`,
      answer: answer.toString(),
    });
  }, []);

  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  // Handle form submission
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (isSubmitting) {
        return; // Prevent multiple submissions
      }

      const { mobile_number, patient_name, address, date_for_collection, preferred_time } = formData;

      const newErrors = {
        mobile_number: validateMobileNumber(mobile_number),
        patient_name: validatePatientName(patient_name),
        address: validateAddress(address),
        date_for_collection: date_for_collection ? '' : 'Date for collection is required.',
        preferred_time: validatePreferredTime(preferred_time),
      };

      setErrors(newErrors);

      if (Object.values(newErrors).some((error) => error)) {
        return;
      }

      if (userCaptcha !== captcha.answer) {
        alert('CAPTCHA is incorrect. Please try again.');
        generateCaptcha();
        setUserCaptcha('');
        return;
      }

      setIsSubmitting(true);

      try {
        const uniqueID = await generateUniqueID();

        const formDataToSend = new FormData();

        const mandatoryFields = [
          'mobile_number',
          'address',
          'date_for_collection',
          'preferred_time',
          'test_package_name',
          'patient_name',
          'user_ip',
        ];

        // Append form data
        for (const key of mandatoryFields) {
          if (key === 'date_for_collection') {
            formDataToSend.append(key, formatDateForBackend(formData[key]));
          } else if (formData[key]) {
            formDataToSend.append(key, formData[key]);
          } else {
            formDataToSend.append(key, 'None');
          }
        }

        // Append optional fields with 'None' if not provided
        const optionalFields = [
          'patient_email',
          'whatsapp_number',
          'age', // Handle 'age' separately
          'gender',
          'city',
          'pincode',
          'state',
          'prescription',
          'remark',
        ];

        for (const key of optionalFields) {
          if (formData[key]) {
            if (key === 'age') {
              formDataToSend.append('age', parseInt(formData.age, 10));
            } else {
              formDataToSend.append(key, formData[key]);
            }
          } else {
            if (key !== 'age') {
              formDataToSend.append(key, 'None');
            }
            // Do not append 'age' if it's not provided
          }
        }

        formDataToSend.append('Unique_id', uniqueID);

        const response = await axios.post('https://backend.dangsccg.co.in/api/api/bookings/', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Booking created:', response.data);

        // Send confirmation email to patient
        sendConfirmationEmail(formData.patient_name, formData.patient_email, uniqueID);
        console.log('Email details:', {
          patient_name: formData.patient_name,
          patient_email: formData.patient_email,
          Unique_id: uniqueID,
        });

        // Send email to info@drdangslab.com
        sendEmailToInfo(formData, uniqueID);

        setShowThankYou(true);
        const timer = setInterval(() => {
          setCountdown((prevCount) => {
            if (prevCount === 1) {
              clearInterval(timer);
              navigate('/');
            }
            return prevCount - 1;
          });
        }, 1000);

        // Reset form
        setFormData({
          mobile_number: '',
          patient_name: '',
          patient_email: '',
          address: '',
          date_for_collection: '',
          preferred_time: '',
          test_package_name: 'Swine Flu H1N1',
          age: '',
          user_ip: formData.user_ip, // Retain user IP
          remark: '',
        });

        setErrors({});
      } catch (error) {
        console.error('Error creating booking:', error);
        alert('An error occurred while submitting the form. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    },
    [
      formData,
      validateMobileNumber,
      validatePatientName,
      validateAddress,
      validatePreferredTime,
      formatDateForBackend,
      generateUniqueID,
      captcha,
      userCaptcha,
      generateCaptcha,
      navigate,
      isSubmitting,
      setIsSubmitting,
    ]
  );

  // Send confirmation email to the patient
  const sendConfirmationEmail = (patientName, patient_email, Unique_id) => {
    axios
      .post('https://backend.dangsccg.co.in/api/Swine-flu-orange-send-confirmation-email/', {
        patientName: patientName,
        patient_email: patient_email,
        Unique_id: Unique_id,
      })
      .then((response) => {
        console.log('Confirmation email sent:', response.data);
      })
      .catch((error) => {
        console.error('Error sending confirmation email:', error);
      });
  };

  // Send email to info@drdangslab.com with booking details
  const sendEmailToInfo = (formData, Unique_id) => {
    axios
      .post('https://backend.dangsccg.co.in/api/Swine-flu-send-email-to-info/', {
        patient_name: formData.patient_name,
        patient_email: formData.patient_email,
        mobile_number: formData.mobile_number,
        address: formData.address,
        date_for_collection: formatDateForEmail(formData.date_for_collection),
        preferred_time: formData.preferred_time,
        user_ip: formData.user_ip,
        remark: formData.remark || '',
        Unique_id: Unique_id,
      })
      .then((response) => {
        console.log('Email sent to info@drdangslab.com:', response.data);
      })
      .catch((error) => {
        console.error('Error sending email to info@drdangslab.com:', error);
      });
  };

  return (
    <>
      <div className='SwineFlueMainDiv'>
        {!showThankYou ? (
          <>
            <div className='SwineFLueImageDIv'>
              <img src={swineFluImage} alt='Swine Flu' className='backgroundImage' />
              <div className='SwineInnerMAinDivForFlex'>
                <div className='InnerMain1stLeftDiv'>
                  <h2>FLU PANEL [Influenza A (H1N1, H3N2) & influenza B]</h2>
                  <a href='/H1N1.pdf' target='_blank' rel='noopener noreferrer'>
                    <span>
                      <img src={playIcon} alt='Play Icon' />
                    </span>
                    <span className='H3N2Download'>DOWNLOAD BROCHURE</span>
                  </a>
                </div>
                <div className='InnerSecondDiv'>
                  <div className='InnerDivForm'>
                    <h3>Dr. Dangs Lab - Home Collection</h3>
                    <form onSubmit={handleSubmit}>
                      <input
                        type='text'
                        name='patient_name'
                        placeholder='Name*'
                        value={formData.patient_name}
                        onChange={handleChange}
                        required
                      />
                      {errors.patient_name && <p className='error-message'>{errors.patient_name}</p>}
                      <input
                        type='text'
                        name='mobile_number'
                        placeholder='Mobile Number*'
                        value={formData.mobile_number}
                        onChange={handleChange}
                        required
                      />
                      {errors.mobile_number && <p className='error-message'>{errors.mobile_number}</p>}
                      <input
                        type='email'
                        name='patient_email'
                        placeholder='E-mail'
                        value={formData.patient_email}
                        onChange={handleChange}
                      />
                      <input
                        type='text'
                        name='address'
                        placeholder='Address*'
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                      {errors.address && <p className='error-message'>{errors.address}</p>}
                      <DatePicker
                        selected={formData.date_for_collection}
                        onChange={handleDateChange}
                        minDate={new Date()}
                        maxDate={new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)}
                        filterDate={(date) => !isSundayOrHoliday(date)}
                        dateFormat='yyyy/MM/dd'
                        placeholderText='Select a date*'
                        className='datePicker'
                        disabledKeyboardNavigation
                        required
                      />
                      {errors.date_for_collection && (
                        <p className='error-message'>{errors.date_for_collection}</p>
                      )}
                      <select
                        name='preferred_time'
                        value={formData.preferred_time}
                        onChange={handleChange}
                        required
                        className='SwinefluTimeSLots'
                      >
                        <option value='' disabled>
                          Select a time slot*
                        </option>
                        {availableTimeSlots.map((timeSlot, index) => (
                          <option key={index} value={timeSlot}>
                            {timeSlot}
                          </option>
                        ))}
                      </select>
                      {errors.preferred_time && <p className='error-message'>{errors.preferred_time}</p>}

                      <input
                        type='text'
                        name='age'
                        placeholder='Age'
                        value={formData.age}
                        onChange={handleChange}
                      />
                      {errors.age && <p className='error-message'>{errors.age}</p>}

                      <div className='captcha-container'>
                        <span className='captcha-text'>{captcha.question}</span>
                        <button type='button' onClick={generateCaptcha} className='refresh-button'>
                          Refresh
                        </button>
                      </div>
                      <input
                        type='text'
                        value={userCaptcha}
                        onChange={(e) => setUserCaptcha(e.target.value)}
                        placeholder='Enter the answer'
                        className='captcha-input'
                        required
                      />

                      <button type='submit' disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'BOOK'}
                      </button>
                    </form>
                    <a href='tel:999-999-2020' className='callButton'>
                      CLICK HERE TO CALL 999-999-2020
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='OverviewSection'>
              <h2>OVERVIEW</h2>
              <hr />
              <p>
                Swine flu, also known as the H1N1 virus, is a relatively new strain of an influenza virus that causes
                symptoms similar to the regular flu.
              </p>
              <p>Swine Flu originated in pigs but is spread primarily from person to person.</p>
              <p>Swine flu made headlines in 2009 when it was first discovered in humans and became a pandemic.</p>

              <h3>Swine Flu is also known by the names –</h3>
              <ul>
                <li>H1N1 Flu</li>
                <li>Pig Flu</li>
              </ul>

              <h3>Swine Flu - summary</h3>
              <ul>
                <li>Preventable by vaccine</li>
                <li>Treatable by a medical professional</li>
                <li>Spreads easily</li>
                <li>Requires a medical diagnosis</li>
                <li>Lab tests or imaging often required</li>
                <li>Short-term: resolves within days to weeks</li>
              </ul>

              <h3>Where to book?</h3>
              <p>
                Swine Flu test in Delhi can be booked here –{' '}
                <a href='https://drdangslab.com/Swine-Flu-H1n1-Test.aspx' target='_blank' rel='noopener noreferrer'>
                  https://drdangslab.com/Swine-Flu-H1n1-Test.aspx
                </a>
              </p>

              <h3>HOW IT SPREADS</h3>
              <ul>
                <li>By airborne respiratory droplets (coughs or sneezes).</li>
                <li>By touching a contaminated surface (blanket or doorknob).</li>
                <li>By saliva (kissing or shared drinks).</li>
                <li>By skin-to-skin contact (handshakes or hugs).</li>
              </ul>
            </div>
            <div className='FAQSection'>
              <h2>Frequently Asked Questions</h2>
              <div className='accordion'>
                <div className='accordion-item'>
                  <div className='accordion-header' onClick={() => toggleAccordion(0)}>
                    <span>What does H1N1 stand for?</span>
                    {activeIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  <div className={`accordion-body ${activeIndex === 0 ? 'show' : ''}`}>
                    <strong>
                      The designation “H1N1” indicates unique traits, which exhibit characteristics that identify the
                      virus to the immune system and allows for attachment and replication of the virus. The “H”
                      (hemagglutinin) and the “N” (neuraminidases) are both proteins that are found on the outer shell
                      or envelope of the virus.
                    </strong>
                  </div>
                </div>
                <div className='accordion-item'>
                  <div className='accordion-header' onClick={() => toggleAccordion(1)}>
                    <span>Where did swine flu come from?</span>
                    {activeIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  <div className={`accordion-body ${activeIndex === 1 ? 'show' : ''}`}>
                    <strong>
                      For example, one virus that causes swine flu is believed to be a mix of pig, bird (avian), and
                      human flu viruses. These types of viruses caused huge outbreaks in 1957, 1968, and 2009. H1N1
                      virus: The most common subtype of influenza A, including the swine flu virus.
                    </strong>
                  </div>
                </div>
                <div className='accordion-item'>
                  <div className='accordion-header' onClick={() => toggleAccordion(2)}>
                    <span>Where was the first case of swine flu reported?</span>
                    {activeIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  <div className={`accordion-body ${activeIndex === 2 ? 'show' : ''}`}>
                    <strong>
                      In India, the first case of influenza A H1N1 was reported on May 16, 2009 from Hyderabad. The
                      World Health Organization declared the post pandemic phase on August 10, 2010.
                    </strong>
                  </div>
                </div>
                <div className='accordion-item'>
                  <div className='accordion-header' onClick={() => toggleAccordion(3)}>
                    <span>Why Dr. Dangs Lab For Testing Swine Flu/H1N1?</span>
                    {activeIndex === 3 ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  <div className={`accordion-body ${activeIndex === 3 ? 'show' : ''}`}>
                    <ul>
                      <li>
                        Dr. Dangs Lab is one of the first 3 labs to have been approved by the government for testing of
                        H1N1 by Real Time-PCR in 2010.
                      </li>
                      <li>
                        We have highly trained in-house & Home Collection Experts for sample collection for children &
                        patients of all ages.
                      </li>
                      <li>
                        H1N1 testing is done by Real Time PCR & has been Accredited by NABL (National Accreditation
                        Board of Laboratories) for Dr. Dangs Lab.
                      </li>
                      <li>
                        We provide a quick turnaround time which ensures timely reporting of all samples (Same day
                        reporting of all samples received before 1:30 PM).
                      </li>
                      <li>
                        The test is performed for Influenza A, H1N1, H3N2 & Influenza B with the sample SWAB Sample at
                        no extra cost.
                      </li>
                      <li>The Testing Cost is Rs. 4500 as recommended by the DELHI GOVT.</li>
                    </ul>
                  </div>
                </div>
                <div className='accordion-item'>
                  <div className='accordion-header' onClick={() => toggleAccordion(4)}>
                    <span>What is Swine Flu?</span>
                    {activeIndex === 4 ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  <div className={`accordion-body ${activeIndex === 4 ? 'show' : ''}`}>
                    <ul>
                      <li>
                        Swine influenza is a contagious respiratory disease of pigs caused by influenza viruses and is
                        found in almost all the countries around the world.
                      </li>
                      <li>
                        There are many different types of influenza viruses. They affect humans and are spread amongst
                        people by coughing and sneezing.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='accordion-item'>
                  <div className='accordion-header' onClick={() => toggleAccordion(5)}>
                    <span>Symptoms Of Swine Flu</span>
                    {activeIndex === 5 ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  <div className={`accordion-body ${activeIndex === 5 ? 'show' : ''}`}>
                    <strong>
                      Swine Flu or H1N1 flu usually results in breathing difficulty and depends on the virus involved for
                      the severity of infection.
                    </strong>
                    <ul>
                      <li>Sneezing and coughing</li>
                      <li>Difficulty in breathing</li>
                      <li>Increased discharge from eyes or nose</li>
                      <li>High fever</li>
                      <li>Lack of appetite</li>
                      <li>Feeling of weakness and tiredness</li>
                      <li>Swollen and red eyes</li>
                      <li>Runny or stuffy nose</li>
                      <li>Sore throat</li>
                      <li>
                        In some cases, nausea, vomiting, and diarrhea have also been reported.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='accordion-item'>
                  <div className='accordion-header' onClick={() => toggleAccordion(6)}>
                    <span>Preventing and Controlling Swine Flu</span>
                    {activeIndex === 6 ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  <div className={`accordion-body ${activeIndex === 6 ? 'show' : ''}`}>
                    <h4>Mild Cases:</h4>
                    <ul>
                      <li>Infected patients should rest at home.</li>
                      <li>Drink plenty of liquids.</li>
                      <li>Keep body hydrated.</li>
                      <li>Wash your hands several times a day.</li>
                      <li>Use alcohol-based hand wash or sanitizers.</li>
                      <li>Avoid touching face, eyes, mouth, or nose.</li>
                      <li>Take prescribed medicines on time.</li>
                      <li>
                        Maintain distance from the patient as it is a communicable disease.
                      </li>
                    </ul>
                    <h4>When to seek emergency care:</h4>
                    <p>Please visit a hospital if the patient is:</p>
                    <ul>
                      <li>Having trouble breathing</li>
                      <li>Breathing fast</li>
                      <li>Skin color changing to blue</li>
                      <li>Not having enough fluids</li>
                      <li>Continuous vomiting</li>
                      <li>Not able to walk</li>
                      <li>Being irritable</li>
                      <li>Flu improves but fever returns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className='thankYouCard'>
            <h2>Thank You!</h2>
            <p>Your form has been successfully submitted.</p>
            <p>Redirecting in {countdown} seconds...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Swineflu;
