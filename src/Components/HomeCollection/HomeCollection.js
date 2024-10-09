import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import styles from './HomeCollection.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { useNavigate, useLocation } from 'react-router-dom';
import CryptoJS from 'crypto-js';

const HomeCollection = () => {
  
  const [formData, setFormData] = useState({
    mobile_number: '',
    address: '',
    date_for_collection: '',
    preferred_time: '',
    test_package_name: '',
    patient_name: '',
    patient_email: '',
    whatsapp_number: '',
    age: '',
    gender: null,
    city: '',
    pincode: '',
    state: '',
    prescription: '',
    remark: '',
    user_ip: '',
  });

  const [holidays, setHolidays] = useState([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedStateOption, setSelectedStateOption] = useState(null);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [errors, setErrors] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [captcha, setCaptcha] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  

  const generateUniqueID = useCallback(async () => {
    try {
      const response = await axios.get('https://api.dangsccg.co.in/api/api/generateUniqueID/');
      return response.status === 200 ? response.data.Unique_id : null;
    } catch (error) {
      console.error('Error generating unique ID:', error);
      return null;
    }
  }, []);

  const getUniqueIDFromURL = useCallback(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('Unique_id');
  }, []);

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

  useEffect(() => {
    if (location.state?.selectedPackage) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        test_package_name: location.state.selectedPackage,
      }));
    }
  }, [location.state]);

  const validatePrescription = useCallback((file) => {
    const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (file && !validTypes.includes(file.type)) {
      return 'Unsupported file type. Only JPG, PNG, and PDF are allowed.';
    }
    return '';
  }, []);

  const handleFileChange = useCallback(async (e) => {
    const file = e.target.files[0];
    const fileError = validatePrescription(file);

    if (fileError) {
      setErrors((prevErrors) => ({ ...prevErrors, prescription: fileError }));
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('file', file);

      const response = await axios.post('https://api.dangsccg.co.in/api/api/file-scan/', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.status === 'safe') {
        setFormData((prevFormData) => ({ ...prevFormData, prescription: file }));
        setErrors((prevErrors) => ({ ...prevErrors, prescription: '' }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, prescription: 'The file is potentially harmful and cannot be uploaded.' }));
      }
    } catch (error) {
      console.error('Error scanning the file:', error);
      setErrors((prevErrors) => ({ ...prevErrors, prescription: 'Error scanning the file. Please try again later.' }));
    }
  }, [validatePrescription]);

  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' },
  ];

  useEffect(() => {
    axios
      .get('https://api.dangsccg.co.in/api/holidays/')
      .then((response) => {
        const holidayDates = response.data.map((holiday) => new Date(holiday.date));
        setHolidays(holidayDates);
      })
      .catch((error) => {
        console.error('Error fetching holidays:', error);
      });
  }, []);

  const isSundayOrHoliday = useCallback(
    (date) => {
      const day = date.getDay();
      return day === 0 || holidays.some((holiday) => date.toDateString() === holiday.toDateString());
    },
    [holidays]
  );

  const handleGenderChange = useCallback((selectedGender) => {
    setFormData((prevFormData) => ({ ...prevFormData, gender: selectedGender }));
  }, []);

  const validateMobileNumber = useCallback((value) => {
    if (!value) return 'Mobile number is required.';
    if (!/^\d{10}$/.test(value)) return 'Mobile number should be a 10-digit number.';
    return '';
  }, []);

  const validatePreferredTime = useCallback((value) => {
    return !value ? 'Preferred time is required.' : '';
  }, []);

  const validateGender = useCallback((value) => {
    if (!value) return 'Gender is required.';
    if (value.value.length > 10) return 'Ensure this field has no more than 10 characters.';
    return '';
  }, []);

  const calculateMinimumTime = useCallback((selectedDate) => {
    const now = new Date();
    if (selectedDate.setHours(0, 0, 0, 0) === now.setHours(0, 0, 0, 0)) {
      now.setHours(now.getHours() + 1);
      return now;
    } else {
      now.setHours(0, 0, 0, 0);
      return now;
    }
  }, []);

  const generateTimeSlots = useCallback((minimumTime) => {
    const timeSlots = [];
    const startTime = new Date(minimumTime);

    startTime.setHours(10, 0, 0, 0);

    while (startTime.getHours() < 23 || (startTime.getHours() === 22 && startTime.getMinutes() === 0)) {
      const hours = startTime.getHours();
      const minutes = startTime.getMinutes();
      const nextTime = new Date(startTime);
      nextTime.setMinutes(startTime.getMinutes() + 30);

      const formattedStartTime = `${hours === 0 ? 12 : hours}:${minutes < 10 ? '0' : ''}${minutes} ${
        hours < 12 ? 'AM' : 'PM'
      }`;
      const formattedEndTime = `${nextTime.getHours() === 0 ? 12 : nextTime.getHours()}:${
        nextTime.getMinutes() < 10 ? '0' : ''
      }${nextTime.getMinutes()} ${nextTime.getHours() < 12 ? 'AM' : 'PM'}`;

      if (startTime >= new Date()) {
        timeSlots.push(`${formattedStartTime} to ${formattedEndTime}`);
      }

      startTime.setMinutes(startTime.getMinutes() + 30);
    }

    return timeSlots;
  }, []);

  const isDateSelected = !!formData.date_for_collection;

  useEffect(() => {
    if (isDateSelected) {
      const selectedDate = new Date(formData.date_for_collection);
      const minimumTime = calculateMinimumTime(selectedDate);
      const timeSlots = generateTimeSlots(minimumTime);
      setAvailableTimeSlots(timeSlots);
    }
  }, [formData.date_for_collection, calculateMinimumTime, generateTimeSlots, isDateSelected]);

  const handleChange = useCallback(
    (e) => {
      const { name, value, type } = e.target;

      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: type === 'file' ? e.target.files[0] : value,
      }));

      let updatedErrors = { ...errors };

      if (name === 'whatsapp_number' || name === 'mobile_number') {
        const isNumeric = /^\d+$/.test(value);

        if (name === 'whatsapp_number') {
          updatedErrors[name] =
            value.length !== 10
              ? 'WhatsApp number must be exactly 10 digits long.'
              : !isNumeric
              ? 'WhatsApp number must contain only numbers.'
              : '';
        }

        if (name === 'mobile_number') {
          updatedErrors[name] =
            value.length !== 10
              ? 'Mobile number must be exactly 10 digits long.'
              : !isNumeric
              ? 'Mobile number must contain only numbers.'
              : '';
        }
      } else if (name === 'age') {
        updatedErrors[name] =
          isNaN(value) || parseInt(value) < 0 || parseInt(value) > 110
            ? 'Age should be a number between 0 and 110.'
            : '';
      }

      setErrors(updatedErrors);
    },
    [errors]
  );

  const fetchTimeSlots = useCallback(async (selectedDate) => {
    try {
      const currentISTTime = new Date().toLocaleTimeString('en-GB', { hour12: false, timeZone: 'Asia/Kolkata' });
      const response = await axios.get('https://api.dangsccg.co.in/api/api/time-slots/', {
        params: { 
          date: selectedDate.toISOString().split('T')[0],
          current_time: currentISTTime
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

  const handleDateChange = useCallback((date) => {
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
  }, [isSundayOrHoliday, fetchTimeSlots]);

  const formatDateForBackend = useCallback((date) => {
    const d = new Date(date);
    const month = '' + (d.getMonth() + 1);
    const day = '' + d.getDate();
    const year = d.getFullYear();

    return [year, month.length < 2 ? '0' + month : month, day.length < 2 ? '0' + day : day].join('-');
  }, []);



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
    }

    setCaptcha({
      question: `${num1} ${operation} ${num2} = ?`,
      answer: answer.toString()
    });
  }, []);

  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);



  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
  
      const { mobile_number, patient_name, patient_email, address, date_for_collection, preferred_time, gender } = formData;
  
      const newErrors = {
        mobile_number: validateMobileNumber(mobile_number),
        patient_name: patient_name ? '' : 'Patient name is required.',
        address: address ? '' : 'Address is required.',
        date_for_collection: date_for_collection ? '' : 'Date for collection is required.',
        preferred_time: validatePreferredTime(preferred_time),
        gender: validateGender(gender),
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
  
      try {
        const uniqueID = await generateUniqueID();
  
        const formDataToSend = new FormData();
  
        for (const key in formData) {
          if (key === 'date_for_collection') {
            formDataToSend.append(key, formatDateForBackend(formData[key]));
          } else if (key === 'gender') {
            formDataToSend.append(key, formData[key].value);
          } else {
            formDataToSend.append(key, formData[key]);
          }
        }
  
        let response;
        let bookingUniqueId;
  
        if (isUpdateMode) {
          bookingUniqueId = getUniqueIDFromURL();
          formDataToSend.append('Unique_id', bookingUniqueId);
          response = await axios.put(
            `https://api.dangsccg.co.in/api/api/bookings/update/${bookingUniqueId}/`,
            formDataToSend,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          );
          console.log('Booking updated:', response.data);
        } else {
          bookingUniqueId = uniqueID;
          formDataToSend.append('Unique_id', bookingUniqueId);
          response = await axios.post('https://api.dangsccg.co.in/api/api/bookings/', formDataToSend, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log('Booking created:', response.data);
        }
  
        // Send confirmation email in the background
        sendConfirmationEmail(patient_name, patient_email, bookingUniqueId);
        console.log('Email details:', { patient_name, patient_email, Unique_id: bookingUniqueId });
  
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
  
        setFormData({
          mobile_number: '',
          address: '',
          date_for_collection: '',
          preferred_time: '',
          test_package_name: '',
          patient_name: '',
          patient_email: '',
          whatsapp_number: '',
          age: '',
          gender: null,
          city: '',
          pincode: '',
          state: '',
          prescription: '',
          remark: '',
          user_ip: '',
        });
  
        setErrors({});
      } catch (error) {
        console.error(isUpdateMode ? 'Error updating booking:' : 'Error creating booking:', error);
      }
    },
    [
      formData,
      validateMobileNumber,
      validatePreferredTime,
      validateGender,
      formatDateForBackend,
      generateUniqueID,
      isUpdateMode,
      getUniqueIDFromURL,
      captcha,
      userCaptcha,
      generateCaptcha,
      navigate,
    ]
  );
  
  const sendConfirmationEmail = (patientName, patient_email, Unique_id) => {
    axios.post('https://api.dangsccg.co.in/api/orange-send-confirmation-email/', {
      patientName: patientName,
      patient_email: patient_email,
      Unique_id: Unique_id,
    })
    .then(response => {
      console.log('Confirmation email sent:', response.data);
    })
    .catch(error => {
      console.error('Error sending confirmation email:', error);
    });
  };
  


  const handleEnterPress = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    },
    []
  );

  const stateOptions = [
    { value: 'Haryana', label: 'Haryana' },
    { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
    { value: 'Delhi [National Capital Territory (NCT)]', label: 'Delhi [National Capital Territory (NCT)]' },
  ];

  return (
    <div className={styles.addbooking}>
      {!showThankYou ? (
        <>
          <h2>Home Collection Service</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className={styles.row1}>
              <div className={styles.inputFeild}>
                <label>Mobile Number*</label>
                <input
                  type="text"
                  name="mobile_number"
                  value={formData.mobile_number}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                />
                {errors.mobile_number && <p className={styles.errorMessage}>{errors.mobile_number}</p>}
              </div>

              <div className={styles.inputFeild}>
                <label>WhatsApp Number</label>
                <input
                  type="text"
                  name="whatsapp_number"
                  value={formData.whatsapp_number}
                  onChange={handleChange}
                  placeholder="Enter WhatsApp number"
                />
                {errors.whatsapp_number && <p className={styles.errorMessage}>{errors.whatsapp_number}</p>}
              </div>
            </div>

            <div className={styles.row1}>
              <div className={styles.inputFeild}>
                <label>Patient Name*</label>
                <input
                  type="text"
                  name="patient_name"
                  value={formData.patient_name}
                  onChange={handleChange}
                  placeholder="Enter patient name"
                />
                {errors.patient_name && <p className={styles.errorMessage}>{errors.patient_name}</p>}
              </div>

              <div className={styles.inputFeild}>
                <label>Patient Email</label>
                <input
                  type="email"
                  name="patient_email"
                  value={formData.patient_email}
                  onChange={handleChange}
                  placeholder="Enter patient email"
                />
              </div>
            </div>

            <div className={styles.row1}>
              <div className={styles.inputFeild}>
                <label>Age</label>
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter age"
                />
                {errors.age && <p className={styles.errorMessage}>{errors.age}</p>}
              </div>

              <div className={styles.inputFeild}>
                <label>Gender</label>
                <Select
                  name="gender"
                  options={genderOptions}
                  value={formData.gender}
                  onChange={handleGenderChange}
                  isSearchable
                  isClearable
                  placeholder="Select gender"
                />
                {errors.gender && <p className={styles.errorMessage}>{errors.gender}</p>}
              </div>
            </div>

            <div className={styles.testPackageContainer}>
              <div className={styles.testPackageLabel}>
                <label>Test / Package Name*</label>
              </div>
              <a
                href="../../../TEST-PACKAGES-BROCHURE-INCLUDING-FM-TESTS-APRIL24.pdf"
                className={styles.testPackageLinksAbove}
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW STANDARD PACKAGES
              </a>

              <input
                type="text"
                name="test_package_name"
                value={formData.test_package_name}
                onChange={handleChange}
                placeholder="Enter test package names"
                className={styles.testPackageInput}
              />

              <a
                href="https://discoverbydrdangs.com/"
                className={styles.testPackageLinksBelow}
                target="_blank"
                rel="noopener noreferrer"
              >
                CUSTOMISE YOUR PACKAGE
              </a>
            </div>

            <div className={styles.row1}>
              <div className={styles.inputFeild}>
                <label>Address*</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter address"
                />
                {errors.address && <p className={styles.errorMessage}>{errors.address}</p>}
              </div>

              <div className={styles.inputFeild}>
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                />
              </div>
            </div>

            <div className={styles.row1}>
              <div className={styles.inputFeild}>
                <label>State*</label>
                <Select
                  name="state"
                  options={stateOptions}
                  value={selectedStateOption}
                  onChange={(option) => {
                    setSelectedStateOption(option);
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      state: option ? option.value : '',
                    }));
                  }}
                  isSearchable
                  isClearable
                  placeholder="Select state"
                />
              </div>

              <div className={styles.inputFeild}>
                <label>Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Enter pincode"
                />
              </div>
            </div>

            <div className={styles.row1}>
              <div className={styles.inputFeild}>
                <label>Date for Collection*</label>
                <DatePicker
              selected={formData.date_for_collection}
              onChange={handleDateChange}
              minDate={new Date()}
              maxDate={new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)}
              filterDate={(date) => !isSundayOrHoliday(date)}
              dateFormat="yyyy/MM/dd"
              placeholderText="Select a date"
              disabledKeyboardNavigation
            />
            {errors.date_for_collection && <p className="error-message">{errors.date_for_collection}</p>}
              </div>

              <div className={styles.inputFeild}>
                <label>Preferred Time*</label>
                <select
                  name="preferred_time"
                  value={formData.preferred_time}
                  onChange={handleChange}
                >
                  <option value="" disabled hidden>Select a time</option>
                  {availableTimeSlots.map((timeSlot, index) => (
                    <option key={index} value={timeSlot}>{timeSlot}</option>
                  ))}
                </select>
                {errors.preferred_time && <p className={styles.errorMessage}>{errors.preferred_time}</p>}
              </div>
            </div>

            <div className={styles.row1}>
              <div className={styles.inputFeild}>
              <label>Upload Prescription: (supported file types are .jpg, .jpeg, .png, .pdf, .gif):</label>
          <input
            type="file"
            name="prescription"
            accept=".jpg, .jpeg, .png, .pdf, .gif"
            onChange={handleFileChange}
          />
          {errors.prescription && <p className="error-message">{errors.prescription}</p>}
              </div>

              <div className={styles.inputFeild}>
                <label>Remark</label>
                <textarea
                  name="remark"
                  value={formData.remark}
                  onChange={handleChange}
                  placeholder="Enter remark"
                ></textarea>
              </div>
            </div>

            <div className={styles.row1}>
              <div className={styles.inputFeild}>
                <label>CAPTCHA</label>
                <div className={styles.captchaContainer}>
                  <span className={styles.captchaText}>{captcha.question}</span>
                  <button type="button" onClick={generateCaptcha} className={styles.refreshButton}>
                    Refresh
                  </button>
                </div>
                <input
                  type="text"
                  value={userCaptcha}
                  onChange={(e) => setUserCaptcha(e.target.value)}
                  placeholder="Enter the answer"
                  className={styles.captchaInput}
                />
              </div>
            </div>

            <div className={styles.AddButtonInAddBooking}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </>
      ) : (
        <div className={styles.thankYouCard}>
        <h2>Thank You!</h2>
        <p>Your form has been successfully submitted.</p>
        <p>Redirecting in {countdown} seconds...</p>
      </div>
      )}
    </div>
  );
};

export default HomeCollection;