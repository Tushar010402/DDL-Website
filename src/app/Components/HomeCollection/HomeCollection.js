// src/app/Components/HomeCollection/HomeCollection.jsx
'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import DatePicker from 'react-datepicker';

const Select = dynamic(() => import('react-select'), { ssr: false });

import { format } from 'date-fns';
import styles from './HomeCollection.module.css';
import 'react-datepicker/dist/react-datepicker.css';

// Constants for select options
const genderOptions = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Other', label: 'Other' },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: 'black', // Set text color to blue
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'black', // Set selected value text color to blue
  }),
};


const stateOptions = [
  { value: 'Haryana', label: 'Haryana' },
  { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
  { value: 'Delhi', label: 'Delhi' },
];

// Custom Input Component for DatePicker
const CustomInput = React.forwardRef(({ value, onClick, placeholder }, ref) => (
  <input
    type="text"
    onClick={onClick}
    value={value}
    readOnly
    ref={ref}
    className={styles.datepickerInput}
    placeholder={placeholder}
  />
));

const HomeCollection = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Hook to access query params
  const packageParam = searchParams.get('package') || '';

  // Decode the package name from URL
  const decodedPackageName = decodeURIComponent(packageParam);

  // Initialize form state with the selected test package
  const initialFormState = {
    mobile_number: '',
    address: '',
    date_for_collection: null,
    preferred_time: '',
    test_package_name: decodedPackageName,
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
  };

  // State Management
  const [formData, setFormData] = useState(initialFormState);
  const [holidays, setHolidays] = useState([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedStateOption, setSelectedStateOption] = useState(null);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [errors, setErrors] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [captcha, setCaptcha] = useState({ question: '', answer: '' });
  const [userCaptcha, setUserCaptcha] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [scanSuccess, setScanSuccess] = useState(false);

  // Refs
  const mobileNumberRef = useRef(null);
  const patientNameRef = useRef(null);
  const ageRef = useRef(null);
  const genderRef = useRef(null);
  const addressRef = useRef(null);
  const testPackageNameRef = useRef(null);
  const dateForCollectionRef = useRef(null);
  const preferredTimeRef = useRef(null);

  // Helper function to check if date is Sunday or holiday
  const isSundayOrHoliday = useCallback(
    (date) => {
      return (
        date.getDay() === 0 || // Sunday
        holidays.some(
          (holiday) => format(holiday, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
        )
      );
    },
    [holidays]
  );

  // Fetch User IP Address
  const fetchUserIp = useCallback(async () => {
    try {
      const response = await axios.get('https://api64.ipify.org?format=json');
      setFormData((prev) => ({ ...prev, user_ip: response.data.ip }));
    } catch (error) {
      console.error('Error fetching user IP:', error);
    }
  }, []);

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
    }

    setCaptcha({
      question: `${num1} ${operation} ${num2} = ?`,
      answer: answer.toString(),
    });
  }, []);

  // Validation Functions
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

  const validatePatientName = useCallback((value) => {
    return !value ? 'Patient name is required.' : '';
  }, []);

  const validateAddress = useCallback((value) => {
    return !value ? 'Address is required.' : '';
  }, []);

  const validateAge = useCallback((value) => {
    if (!value) return 'Age is required.';
    if (isNaN(value) || parseInt(value) < 0 || parseInt(value) > 110)
      return 'Age should be a number between 0 and 110.';
    return '';
  }, []);

  const validateTestPackageName = useCallback((value) => {
    return !value ? 'Test / Package Name is required.' : '';
  }, []);

  const validateDateForCollection = useCallback((value) => {
    return !value ? 'Date for collection is required.' : '';
  }, []);

  // Fetch Available Time Slots
  const fetchTimeSlots = useCallback(
    async (selectedDate) => {
      try {
        const now = new Date();
        const istNow = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
        const currentISTTime = format(istNow, 'HH:mm:ss');
        const formattedDate = format(selectedDate, 'yyyy-MM-dd');

        const response = await axios.get('https://backend.dangsccg.co.in/api/api/time-slots/', {
          params: {
            date: formattedDate,
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
    },
    []
  );

  // Handle Date Change
  const handleDateChange = useCallback(
    (date) => {
      const selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

      if (isSundayOrHoliday(selectedDate)) {
        alert('This date is a holiday or Sunday and cannot be selected.');
        setFormData((prev) => ({
          ...prev,
          date_for_collection: null,
          preferred_time: '',
        }));
        setErrors((prev) => ({
          ...prev,
          date_for_collection: 'Selected date is a holiday or Sunday.',
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          date_for_collection: selectedDate,
          preferred_time: '',
        }));
        setErrors((prev) => ({
          ...prev,
          date_for_collection: '',
        }));
        fetchTimeSlots(selectedDate);
      }
    },
    [isSundayOrHoliday, fetchTimeSlots]
  );

  // Handle File Change and Upload
  const handleFileChange = useCallback(async (e) => {
    const file = e.target.files[0];

    if (!file) {
      setFormData((prev) => ({ ...prev, prescription: '' }));
      setErrors((prev) => ({ ...prev, prescription: '' }));
      setUploadProgress(0);
      setIsScanning(false);
      setScanSuccess(false);
      return;
    }

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'application/pdf', 'image/jpg', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        prescription: 'Unsupported file type. Only JPG, PNG, GIF, and PDF are allowed.',
      }));
      return;
    }

    // Check file size
    if (file.size > 5 * 1024 * 1024) {
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
      setErrors((prev) => ({
        ...prev,
        prescription: `File size is ${fileSizeMB} MB. It should be less than 5 MB.`,
      }));
      return;
    }

    try {
      setIsScanning(true);
      setUploadProgress(0);
      setScanSuccess(false);

      const formDataToSend = new FormData();
      formDataToSend.append('file', file);

      const response = await axios.post(
        'https://backend.dangsccg.co.in/api/api/file-scan/',
        formDataToSend,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          },
        }
      );

      if (response.data.status === 'safe') {
        setFormData((prev) => ({ ...prev, prescription: file }));
        setErrors((prev) => ({ ...prev, prescription: '' }));
        setScanSuccess(true);
      } else {
        setErrors((prev) => ({
          ...prev,
          prescription: 'The file is potentially harmful and cannot be uploaded.',
        }));
        setScanSuccess(false);
      }
    } catch (error) {
      console.error('Error scanning file:', error);
      setErrors((prev) => ({
        ...prev,
        prescription:
          error.response?.data?.error || 'Error scanning the file. Please try again.',
      }));
      setScanSuccess(false);
    } finally {
      setIsScanning(false);
      setUploadProgress(100);
    }
  }, []);

  // Handle Form Input Changes
  const handleChange = useCallback(
    (e) => {
      const { name, value, type } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: type === 'file' ? e.target.files[0] : value,
      }));

      // Validate field
      let error = '';
      switch (name) {
        case 'mobile_number':
          error = validateMobileNumber(value);
          break;
        case 'whatsapp_number':
          error = value && !/^\d{10}$/.test(value) ? 'WhatsApp number must be exactly 10 digits.' : '';
          break;
        case 'age':
          error = validateAge(value);
          break;
        case 'patient_name':
          error = validatePatientName(value);
          break;
        case 'address':
          error = validateAddress(value);
          break;
        case 'preferred_time':
          error = validatePreferredTime(value);
          break;
        case 'test_package_name':
          error = validateTestPackageName(value);
          break;
        default:
          break;
      }

      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    },
    [
      validateMobileNumber,
      validateAge,
      validatePatientName,
      validateAddress,
      validatePreferredTime,
      validateTestPackageName,
    ]
  );

  // Send confirmation emails
  const sendConfirmationEmail = useCallback(async (patientName, patientEmail, uniqueId) => {
    try {
      await axios.post('https://backend.dangsccg.co.in/api/orange-send-confirmation-email/', {
        patientName,
        patient_email: patientEmail,
        Unique_id: uniqueId,
      });
    } catch (error) {
      console.error('Error sending confirmation email:', error);
    }
  }, []);

  // Send email to info
  const sendEmailToInfo = useCallback(async (formData, uniqueId) => {
    const emailData = {
      date: format(new Date(), 'dd/MM/yyyy'),
      client_ip: formData.user_ip,
      name: formData.patient_name,
      age: formData.age,
      gender: formData.gender?.value || '',
      address: formData.address,
      city: formData.city,
      state: formData.state,
      pincode: formData.pincode,
      country: 'India',
      mobile_number: formData.mobile_number,
      whatsapp_number: formData.whatsapp_number,
      email_id: formData.patient_email,
      preferred_date: format(formData.date_for_collection, 'dd/MM/yyyy'),
      preferred_time_slot: formData.preferred_time,
      test_type: formData.test_package_name,
      prescription: formData.prescription ? 'Yes' : 'No',
      remarks: formData.remark,
      Unique_id: uniqueId,
    };

    try {
      await axios.post(
        'https://backend.dangsccg.co.in/api/Home-collection-send-email-to-info/',
        emailData
      );
    } catch (error) {
      console.error('Error sending email to info:', error);
    }
  }, []);

  // Generate Unique ID
  const generateUniqueID = useCallback(async () => {
    try {
      const response = await axios.get(
        'https://backend.dangsccg.co.in/api/api/generateUniqueID/'
      );
      return response.status === 200 ? response.data.Unique_id : null;
    } catch (error) {
      console.error('Error generating unique ID:', error);
      return null;
    }
  }, []);

  // Handle form submission
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (isSubmitting) return;

      // Validate all required fields
      const newErrors = {
        mobile_number: validateMobileNumber(formData.mobile_number),
        patient_name: validatePatientName(formData.patient_name),
        address: validateAddress(formData.address),
        date_for_collection: validateDateForCollection(formData.date_for_collection),
        preferred_time: validatePreferredTime(formData.preferred_time),
        gender: validateGender(formData.gender),
        age: validateAge(formData.age),
        test_package_name: validateTestPackageName(formData.test_package_name),
      };

      setErrors(newErrors);

      // Check for validation errors
      if (Object.values(newErrors).some((error) => error)) {
        // Focus first error field
        const firstErrorField = Object.keys(newErrors).find((key) => newErrors[key]);
        const refMap = {
          mobile_number: mobileNumberRef,
          patient_name: patientNameRef,
          age: ageRef,
          gender: genderRef,
          address: addressRef,
          test_package_name: testPackageNameRef,
          date_for_collection: dateForCollectionRef,
          preferred_time: preferredTimeRef,
        };

        if (refMap[firstErrorField]?.current) {
          refMap[firstErrorField].current.focus();
        }
        return;
      }

      // Validate CAPTCHA
      if (userCaptcha !== captcha.answer) {
        alert('CAPTCHA is incorrect. Please try again.');
        generateCaptcha();
        setUserCaptcha('');
        return;
      }

      // Check file scanning status
      if (isScanning) {
        alert('Please wait until file scanning is completed.');
        return;
      }

      if (formData.prescription && !scanSuccess) {
        alert(
          'There was an issue with your prescription file. Please remove it before submitting.'
        );
        return;
      }

      setIsSubmitting(true);

      try {
        const uniqueID = await generateUniqueID();
        if (!uniqueID) {
          throw new Error('Failed to generate Unique ID.');
        }

        const formDataToSend = new FormData();

        // Append form data
        Object.keys(formData).forEach((key) => {
          if (key === 'date_for_collection') {
            formDataToSend.append(key, format(formData[key], 'yyyy-MM-dd'));
          } else if (key === 'gender') {
            formDataToSend.append(key, formData[key]?.value || '');
          } else if (key === 'prescription' && formData[key]) {
            formDataToSend.append(key, formData[key]);
          } else {
            formDataToSend.append(key, formData[key]);
          }
        });

        formDataToSend.append('Unique_id', uniqueID);

        // Submit form
        await axios.post('https://backend.dangsccg.co.in/api/api/bookings/', formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

       

        // Show thank you message
        setShowThankYou(true);

         // Scroll to top
         window.scrollTo({ top: 0, behavior: 'smooth' });


        // Send emails
        await Promise.all([
          sendConfirmationEmail(formData.patient_name, formData.patient_email, uniqueID),
          sendEmailToInfo(formData, uniqueID),
        ]);

        // Start countdown for redirect
        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev === 1) {
              clearInterval(timer);
              window.scrollTo({ top: 0, behavior: 'instant' });
              router.push('/');
            }
            return prev - 1;
          });
        }, 1000);

        // Reset form
        setFormData(initialFormState);
        setErrors({});
        setUploadProgress(0);
        setIsScanning(false);
        setScanSuccess(false);
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting the form. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    },
    [
      formData,
      isSubmitting,
      captcha,
      userCaptcha,
      isScanning,
      scanSuccess,
      validateMobileNumber,
      validatePatientName,
      validateAddress,
      validateDateForCollection,
      validatePreferredTime,
      validateGender,
      validateAge,
      validateTestPackageName,
      generateCaptcha,
      generateUniqueID,
      sendConfirmationEmail,
      sendEmailToInfo,
      router,
      initialFormState,
    ]
  );

  // Effects
  useEffect(() => {
    fetchUserIp();
    generateCaptcha();
  }, [fetchUserIp, generateCaptcha]);

  // Fetch holidays
  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await axios.get('https://backend.dangsccg.co.in/api/holidays/');
        const holidayDates = response.data.map((holiday) => new Date(holiday.date));
        setHolidays(holidayDates);
      } catch (error) {
        console.error('Error fetching holidays:', error);
      }
    };
    fetchHolidays();
  }, []);

  // Check for date validity periodically
  useEffect(() => {
    const checkDateValidity = () => {
      const now = new Date();
      const istNow = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      const selectedDate = formData.date_for_collection;

      if (!selectedDate) return;

      const isToday =
        selectedDate.getFullYear() === istNow.getFullYear() &&
        selectedDate.getMonth() === istNow.getMonth() &&
        selectedDate.getDate() === istNow.getDate();

      if (isToday) {
        const cutoffHour = 17; // 5 PM IST
        if (istNow.getHours() >= cutoffHour) {
          setFormData((prev) => ({
            ...prev,
            date_for_collection: null,
            preferred_time: '',
          }));
          setErrors((prev) => ({
            ...prev,
            date_for_collection: 'Selected date is no longer available. Please select a new date.',
          }));
          alert('Selected date is no longer available. Please select a new date.');
        }
      }
    };

    const interval = setInterval(checkDateValidity, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [formData.date_for_collection]);

  // Get minimum date for date picker
  const getMinDate = useCallback(() => {
    const now = new Date();
    const istNow = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    const cutoffHour = 17; // 5 PM IST

    if (istNow.getHours() >= cutoffHour) {
      const tomorrow = new Date(istNow);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      return tomorrow;
    }

    istNow.setHours(0, 0, 0, 0);
    return istNow;
  }, []);

  // Render the component
  return (
    <div className={styles.addbooking}>
      {!showThankYou ? (
        <>
          <h2>Home Collection Service</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Mobile Number and WhatsApp Number */}
            <div className={styles.row1}>
              <div className={styles.inputFeild}>
                <label>
                  Mobile Number<span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="mobile_number"
                  value={formData.mobile_number}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  ref={mobileNumberRef}
                />
                {errors.mobile_number && (
                  <p className={styles.errorMessage}>{errors.mobile_number}</p>
                )}
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
                {errors.whatsapp_number && (
                  <p className={styles.errorMessage}>{errors.whatsapp_number}</p>
                )}
              </div>
            </div>

            {/* Patient Name and Email */}
            <div className={styles.row1}>
              <div className={styles.inputFeild}>
                <label>
                  Patient Name<span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="patient_name"
                  value={formData.patient_name}
                  onChange={handleChange}
                  placeholder="Enter patient name"
                  ref={patientNameRef}
                />
                {errors.patient_name && (
                  <p className={styles.errorMessage}>{errors.patient_name}</p>
                )}
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

            {/* Age and Gender */}
            <div className={styles.row1}>
              <div className={styles.inputFeild}>
                <label>
                  Age<span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter age"
                  ref={ageRef}
                />
                {errors.age && <p className={styles.errorMessage}>{errors.age}</p>}
              </div>

              <div className={styles.inputFeild}>
                <label>
                  Gender<span className={styles.required}>*</span>
                </label>
                <Select
      name="gender"
      options={genderOptions}
      value={formData.gender}
      onChange={(option) => {
        setFormData((prev) => ({ ...prev, gender: option }));
        setErrors((prev) => ({
          ...prev,
          gender: validateGender(option),
        }));
      }}
      isSearchable
      isClearable
      placeholder="Select gender"
      className={styles.select}
      styles={customStyles} // Apply custom styles
    />
                {errors.gender && <p className={styles.errorMessage}>{errors.gender}</p>}
              </div>
            </div>

            {/* Test Package Section */}
            <div className={styles.testPackageContainer}>
              <div className={styles.testPackageLabel}>
                <label>
                  Test / Package Name<span className={styles.required}>*</span>
                </label>
              </div>
              <a
                href="/health-checkup-packages"
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
                ref={testPackageNameRef}
              />
              {errors.test_package_name && (
                <p className={styles.errorMessage}>{errors.test_package_name}</p>
              )}
              <a
                href="https://discoverbydrdangs.com/"
                className={styles.testPackageLinksBelow}
                target="_blank"
                rel="noopener noreferrer"
              >
                CUSTOMISE YOUR PACKAGE
              </a>
            </div>

            {/* Address and City */}
            <div className={styles.row1}>
              <div className={styles.inputFeild}>
                <label>
                  Address<span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter address"
                  ref={addressRef}
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

            {/* State and Pincode */}
            <div className={styles.row1}>
              <div className={styles.inputFeild}>
                <label>State</label>
                <Select
                  name="state"
                  options={stateOptions}
                  value={selectedStateOption}
                  onChange={(option) => {
                    setSelectedStateOption(option);
                    setFormData((prev) => ({
                      ...prev,
                      state: option ? option.value : '',
                    }));
                  }}
                  isSearchable
                  isClearable
                  placeholder="Select state"
                  className={styles.select}
                  styles={customStyles} // Apply custom styles

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

            {/* Date and Time Selection */}
            <div className={styles.row1}>
              <div className={styles.inputFeild}>
                <label>
                  Date for Collection<span className={styles.required}>*</span>
                </label>
                <DatePicker
                  selected={formData.date_for_collection}
                  onChange={handleDateChange}
                  minDate={getMinDate()}
                  maxDate={new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)}
                  filterDate={(date) => !isSundayOrHoliday(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="DD/MM/YYYY"
                  showPopperArrow={false}
                  calendarStartDay={1}
                  withPortal={typeof window !== 'undefined' && window.innerWidth <= 768}
                  customInput={<CustomInput />}
                  ref={dateForCollectionRef}
                />
                {errors.date_for_collection && (
                  <p className={styles.errorMessage}>{errors.date_for_collection}</p>
                )}
              </div>

              <div className={styles.inputFeild}>
                <label>
                  Preferred Time<span className={styles.required}>*</span>
                </label>
                <select
                  name="preferred_time"
                  value={formData.preferred_time}
                  onChange={handleChange}
                  ref={preferredTimeRef}
                  className={styles.select}
                >
                  <option value="" disabled hidden>
                    Select a time
                  </option>
                  {availableTimeSlots.map((timeSlot, index) => (
                    <option key={index} value={timeSlot}>
                      {timeSlot}
                    </option>
                  ))}
                </select>
                {errors.preferred_time && (
                  <p className={styles.errorMessage}>{errors.preferred_time}</p>
                )}
              </div>
            </div>

            {/* Prescription Upload and Remarks */}
            <div className={styles.row1}>
              <div className={styles.inputFeild}>
                <label>
                  Upload Prescription: (supported file types are .jpg, .jpeg, .png, .pdf, .gif)
                </label>
                <input
                  type="file"
                  name="prescription"
                  accept=".jpg,.jpeg,.png,.pdf,.gif"
                  onChange={handleFileChange}
                  className={styles.fileInput}
                />
                {isScanning && (
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progress}
                      style={{ width: `${uploadProgress}%` }}
                    >
                      {`${uploadProgress}%`}
                    </div>
                  </div>
                )}
                {scanSuccess && !errors.prescription && (
                  <p className={styles.successMessage}>File scanned successfully!</p>
                )}
                {errors.prescription && (
                  <p className={styles.errorMessage}>{errors.prescription}</p>
                )}
              </div>

              <div className={styles.inputFeild}>
                <label>Remark</label>
                <textarea
                  name="remark"
                  value={formData.remark}
                  onChange={handleChange}
                  placeholder="Enter remark"
                  className={styles.textarea}
                ></textarea>
              </div>
            </div>

            {/* CAPTCHA */}
            <div className={styles.row1}>
              <div className={styles.inputFeild}>
                <label>CAPTCHA</label>
                <div className={styles.captchaContainer}>
                  <span className={styles.captchaText}>{captcha.question}</span>
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
                  className={styles.captchaInput}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className={styles.AddButtonInAddBooking}>
              <button
                type="submit"
                disabled={
                  isSubmitting || isScanning || (formData.prescription && !scanSuccess)
                }
                className={styles.submitButton}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </>
      ) : (
        // Thank You Message
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
