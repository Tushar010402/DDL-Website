// HomeCollection.js
import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import styles from './HomeCollection.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { useNavigate, useLocation } from 'react-router-dom';
import { format } from 'date-fns'; // Using date-fns for date formatting

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
  // Initial Form Data State
  const [formData, setFormData] = useState({
    mobile_number: '',
    address: '',
    date_for_collection: null, // Initialize as null instead of empty string
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

  // Other State Variables
  const [holidays, setHolidays] = useState([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedStateOption, setSelectedStateOption] = useState(null);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [errors, setErrors] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [captcha, setCaptcha] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [scanSuccess, setScanSuccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Refs for input fields
  const mobileNumberRef = useRef(null);
  const patientNameRef = useRef(null);
  const ageRef = useRef(null);
  const genderRef = useRef(null);
  const addressRef = useRef(null);
  const testPackageNameRef = useRef(null);
  const dateForCollectionRef = useRef(null);
  const preferredTimeRef = useRef(null);

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

  // Fetch User IP Address
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

  // Handle Package Selection from Location State
  useEffect(() => {
    if (location.state?.selectedPackage) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        test_package_name: location.state.selectedPackage,
      }));
    }
  }, [location.state]);

  // Generate Unique ID for Booking
  const generateUniqueID = useCallback(async () => {
    try {
      const response = await axios.get('https://backend.dangsccg.co.in/api/api/generateUniqueID/');
      return response.status === 200 ? response.data.Unique_id : null;
    } catch (error) {
      console.error('Error generating unique ID:', error);
      return null;
    }
  }, []);

  // Get Unique ID from URL for Update Mode
  const getUniqueIDFromURL = useCallback(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('Unique_id');
  }, []);

  // Validate Prescription File
  const validatePrescription = useCallback((file) => {
    const validTypes = ['image/jpeg', 'image/png', 'application/pdf', 'image/jpg', 'image/gif'];
    if (file && !validTypes.includes(file.type)) {
      return 'Unsupported file type. Only JPG, PNG, GIF, and PDF are allowed.';
    }
    return '';
  }, []);

  // Handle Prescription File Change
  const handleFileChange = useCallback(
    async (e) => {
      const file = e.target.files[0];

      if (!file) {
        // If no file is selected, reset the state related to prescription
        setFormData((prevFormData) => ({ ...prevFormData, prescription: '' }));
        setErrors((prevErrors) => ({ ...prevErrors, prescription: '' }));
        setUploadProgress(0);
        setIsScanning(false);
        setScanSuccess(false);
        return;
      }

      const fileError = validatePrescription(file);

      if (fileError) {
        setErrors((prevErrors) => ({ ...prevErrors, prescription: fileError }));
        return;
      }

      // Check file size
      if (file.size > 5 * 1024 * 1024) {
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
        setErrors((prevErrors) => ({
          ...prevErrors,
          prescription: `Your file size is ${fileSizeMB} MB. It should be less than 5 MB.`,
        }));
        return;
      }

      try {
        setIsScanning(true);
        setUploadProgress(0);
        setScanSuccess(false);

        const formDataToSend = new FormData();
        formDataToSend.append('file', file);

        const response = await axios.post('https://backend.dangsccg.co.in/api/api/file-scan/', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percentCompleted);
          },
        });

        if (response.data.status === 'safe') {
          setFormData((prevFormData) => ({ ...prevFormData, prescription: file }));
          setErrors((prevErrors) => ({ ...prevErrors, prescription: '' }));
          setScanSuccess(true);
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            prescription: 'The file is potentially harmful and cannot be uploaded. Please remove the file.',
          }));
          setScanSuccess(false);
        }
      } catch (error) {
        console.error('Error scanning the file:', error);
        // Show exact error message from the API
        const errorMessage = error.response?.data?.error || 'Error scanning the file. Please try again later.';
        setErrors((prevErrors) => ({
          ...prevErrors,
          prescription: errorMessage,
        }));
        setScanSuccess(false);
      } finally {
        setIsScanning(false);
        setUploadProgress(100); // Assuming scanning is complete
      }
    },
    [validatePrescription]
  );

  // Gender Options for Select
  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' },
  ];

  // Fetch Holidays from Backend
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

  // Check if the date is Sunday or Holiday
  const isSundayOrHoliday = useCallback(
    (date) => {
      const day = date.getDay();
      return day === 0 || holidays.some((holiday) => format(holiday, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'));
    },
    [holidays]
  );

  // Fetch Available Time Slots from Backend
  const fetchTimeSlots = useCallback(async (selectedDate) => {
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
  }, []);

  // Handle Date Change and Fetch Time Slots
  const handleDateChange = useCallback(
    (date) => {
      const selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

      if (isSundayOrHoliday(selectedDate)) {
        alert('This date is a holiday or Sunday and cannot be selected.');
        setFormData((prevFormData) => ({
          ...prevFormData,
          date_for_collection: null,
          preferred_time: '',
        }));
        setErrors((prevErrors) => ({
          ...prevErrors,
          date_for_collection: 'Selected date is a holiday or Sunday.',
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          date_for_collection: selectedDate,
          preferred_time: '',
        }));
        setErrors((prevErrors) => ({
          ...prevErrors,
          date_for_collection: '',
        }));

        fetchTimeSlots(selectedDate);
      }
    },
    [isSundayOrHoliday, fetchTimeSlots]
  );

  // Handle Gender Change
  const handleGenderChange = useCallback(
    (selectedGender) => {
      setFormData((prevFormData) => ({ ...prevFormData, gender: selectedGender }));

      const error = validateGender(selectedGender);
      setErrors((prevErrors) => ({
        ...prevErrors,
        gender: error,
      }));
    },
    [validateGender]
  );

  // Handle Input Changes and Validation
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
        updatedErrors[name] = validateAge(value);
      } else if (name === 'patient_name') {
        updatedErrors[name] = validatePatientName(value);
      } else if (name === 'address') {
        updatedErrors[name] = validateAddress(value);
      } else if (name === 'preferred_time') {
        updatedErrors[name] = validatePreferredTime(value);
      } else if (name === 'test_package_name') {
        updatedErrors[name] = validateTestPackageName(value);
      }

      setErrors(updatedErrors);
    },
    [
      errors,
      validateAge,
      validatePatientName,
      validateAddress,
      validatePreferredTime,
      validateTestPackageName,
    ]
  );

  // Format Date for Backend (yyyy-MM-dd)
  const formatDateForBackend = useCallback((date) => {
    return format(date, 'yyyy-MM-dd');
  }, []);

  // Format Date for Email (dd/MM/yyyy)
  const formatDateForEmail = useCallback((date) => {
    return format(date, 'dd/MM/yyyy');
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

  // Send Confirmation Email to the Patient
  const sendConfirmationEmail = useCallback((patientName, patient_email, Unique_id) => {
    axios
      .post('https://backend.dangsccg.co.in/api/orange-send-confirmation-email/', {
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
  }, []);

  // Send Email to info@drdangslab.com with Booking Details
  const sendEmailToInfo = useCallback(
    (formData, Unique_id) => {
      // Prepare the data to match the desired format
      const emailData = {
        date: formatDateForEmail(new Date()),
        client_ip: formData.user_ip,
        name: formData.patient_name,
        age: formData.age || '',
        gender: formData.gender?.value || '',
        address: formData.address,
        city: formData.city || '',
        state: formData.state || '',
        pincode: formData.pincode || '',
        country: 'India',
        mobile_number: formData.mobile_number,
        whatsapp_number: formData.whatsapp_number || '',
        email_id: formData.patient_email || '',
        preferred_date: formatDateForEmail(formData.date_for_collection),
        preferred_time_slot: formData.preferred_time,
        test_type: formData.test_package_name,
        prescription: formData.prescription ? 'Yes' : 'No',
        comment: '', // If you have a comment field, include it here
        remarks: formData.remark || '',
      };

      axios
        .post('https://backend.dangsccg.co.in/api/Home-collection-send-email-to-info/', {
          ...emailData,
          Unique_id: Unique_id,
        })
        .then((response) => {
          console.log('Email sent to info@drdangslab.com:', response.data);
        })
        .catch((error) => {
          console.error('Error sending email to info@drdangslab.com:', error);
        });
    },
    [formatDateForEmail]
  );

  // Handle Form Submission
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (isSubmitting) {
        return; // Prevent multiple submissions
      }

      const {
        mobile_number,
        patient_name,
        patient_email,
        address,
        date_for_collection,
        preferred_time,
        gender,
        age,
        test_package_name,
      } = formData;

      const newErrors = {
        mobile_number: validateMobileNumber(mobile_number),
        patient_name: validatePatientName(patient_name),
        address: validateAddress(address),
        date_for_collection: validateDateForCollection(date_for_collection),
        preferred_time: validatePreferredTime(preferred_time),
        gender: validateGender(gender),
        age: validateAge(age),
        test_package_name: validateTestPackageName(test_package_name),
      };

      setErrors(newErrors);

      if (Object.values(newErrors).some((error) => error)) {
        // Find the first field with error
        const errorFields = Object.keys(newErrors).filter((key) => newErrors[key]);
        if (errorFields.length > 0) {
          const firstErrorField = errorFields[0];
          // Focus on the corresponding input field
          switch (firstErrorField) {
            case 'mobile_number':
              mobileNumberRef.current.focus();
              break;
            case 'patient_name':
              patientNameRef.current.focus();
              break;
            case 'age':
              ageRef.current.focus();
              break;
            case 'gender':
              // For Select component
              if (genderRef.current) {
                genderRef.current.focus();
              }
              break;
            case 'address':
              addressRef.current.focus();
              break;
            case 'test_package_name':
              testPackageNameRef.current.focus();
              break;
            case 'date_for_collection':
              if (dateForCollectionRef.current && dateForCollectionRef.current.setFocus) {
                dateForCollectionRef.current.setFocus();
              }
              break;
            case 'preferred_time':
              preferredTimeRef.current.focus();
              break;
            default:
              break;
          }
        }
        return;
      }

      if (userCaptcha !== captcha.answer) {
        alert('CAPTCHA is incorrect. Please try again.');
        generateCaptcha();
        setUserCaptcha('');
        return;
      }

      // Prevent form submission if scanning is in progress or failed
      if (isScanning) {
        alert('Please wait until the file scanning is completed.');
        return;
      }

      if (formData.prescription && !scanSuccess) {
        alert('There was an issue with your prescription file. Please remove the file before submitting.');
        return;
      }

      setIsSubmitting(true);

      try {
        const uniqueID = await generateUniqueID();

        const formDataToSend = new FormData();

        for (const key in formData) {
          if (key === 'date_for_collection') {
            formDataToSend.append(key, formatDateForBackend(formData[key]));
          } else if (key === 'gender') {
            formDataToSend.append(key, formData[key]?.value || '');
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
            `https://backend.dangsccg.co.in/api/api/bookings/update/${bookingUniqueId}/`,
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
          response = await axios.post('https://backend.dangsccg.co.in/api/api/bookings/', formDataToSend, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log('Booking created:', response.data);
        }

        // Scroll to top first
        window.scrollTo({
          top: 0,
          behavior: 'instant',
        });

        // Send confirmation email in the background
        sendConfirmationEmail(patient_name, patient_email, bookingUniqueId);
        console.log('Email details:', { patient_name, patient_email, Unique_id: bookingUniqueId });

        // Send email to info@drdangslab.com
        sendEmailToInfo(formData, bookingUniqueId);

        setShowThankYou(true);
        const timer = setInterval(() => {
          setCountdown((prevCount) => {
            if (prevCount === 1) {
              clearInterval(timer);
              window.scrollTo({
                top: 0,
                behavior: 'instant',
              });
              navigate('/');
            }
            return prevCount - 1;
          });
        }, 1000);

        // Reset form
        setFormData({
          mobile_number: '',
          address: '',
          date_for_collection: null,
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
        setUploadProgress(0);
        setIsScanning(false);
        setScanSuccess(false);
      } catch (error) {
        console.error(isUpdateMode ? 'Error updating booking:' : 'Error creating booking:', error);
        alert('An error occurred while submitting the form. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    },
    [
      formData,
      validateMobileNumber,
      validatePreferredTime,
      validateGender,
      validatePatientName,
      validateAddress,
      validateAge,
      validateTestPackageName,
      validateDateForCollection,
      formatDateForBackend,
      generateUniqueID,
      isUpdateMode,
      getUniqueIDFromURL,
      captcha,
      userCaptcha,
      generateCaptcha,
      navigate,
      isSubmitting,
      sendConfirmationEmail,
      sendEmailToInfo,
      isScanning,
      scanSuccess,
    ]
  );

  // State Options for Select
  const stateOptions = [
    { value: 'Haryana', label: 'Haryana' },
    { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
    { value: 'Delhi [National Capital Territory (NCT)]', label: 'Delhi [National Capital Territory (NCT)]' },
  ];

  // Calculate Minimum Date Based on IST Time and Cutoff
  const getMinDate = useCallback(() => {
    const now = new Date();
    const istNow = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    const cutoffHour = 17; // 5 PM IST

    // If it's after cutoff time, set minDate to tomorrow
    if (istNow.getHours() >= cutoffHour) {
      const tomorrow = new Date(istNow);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      return tomorrow;
    }

    // Otherwise, today is still valid
    istNow.setHours(0, 0, 0, 0);
    return istNow;
  }, []);

  // Validate Selected Date Periodically
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
          setErrors((prevErrors) => ({
            ...prevErrors,
            date_for_collection: 'Selected date is no longer available. Please select a new date.',
          }));
          alert('Selected date is no longer available. Please select a new date.');
        }
      } else if (selectedDate < new Date(istNow.getFullYear(), istNow.getMonth(), istNow.getDate())) {
        // If selected date is in the past
        setFormData((prev) => ({
          ...prev,
          date_for_collection: null,
          preferred_time: '',
        }));
        setErrors((prevErrors) => ({
          ...prevErrors,
          date_for_collection: 'Selected date is no longer available. Please select a new date.',
        }));
        alert('Selected date is no longer available. Please select a new date.');
      }
    };

    // Initial check
    checkDateValidity();

    // Set up an interval to check every minute
    const interval = setInterval(checkDateValidity, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [getMinDate, formData.date_for_collection]);

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
                  onChange={handleGenderChange}
                  isSearchable
                  isClearable
                  placeholder="Select gender"
                  ref={genderRef}
                />
                {errors.gender && <p className={styles.errorMessage}>{errors.gender}</p>}
              </div>
            </div>

            {/* Test / Package Name */}
            <div className={styles.testPackageContainer}>
              <div className={styles.testPackageLabel}>
                <label>
                  Test / Package Name<span className={styles.required}>*</span>
                </label>
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
                ref={testPackageNameRef}
              />
              {errors.test_package_name && <p className={styles.errorMessage}>{errors.test_package_name}</p>}
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

            {/* Date for Collection and Preferred Time */}
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
                  withPortal={window.innerWidth <= 768}
                  customInput={<CustomInput />}
                  calendarClassName={styles.datepickerCalendar}
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
                {errors.preferred_time && <p className={styles.errorMessage}>{errors.preferred_time}</p>}
              </div>
            </div>

            {/* Prescription and Remark */}
            <div className={styles.row1}>
              <div className={styles.inputFeild}>
                <label>
                  Upload Prescription: (supported file types are .jpg, .jpeg, .png, .pdf, .gif):
                </label>
                <input
                  type="file"
                  name="prescription"
                  accept=".jpg, .jpeg, .png, .pdf, .gif"
                  onChange={handleFileChange}
                />
                {isScanning && (
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: `${uploadProgress}%` }}>
                      {`${uploadProgress}%`}
                    </div>
                  </div>
                )}
                {scanSuccess && !errors.prescription && (
                  <p className={styles.successMessage}>File scanned successfully!</p>
                )}
                {errors.prescription && <p className={styles.errorMessage}>{errors.prescription}</p>}
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

            {/* CAPTCHA */}
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

            {/* Submit Button */}
            <div className={styles.AddButtonInAddBooking}>
              <button
                type="submit"
                disabled={isSubmitting || isScanning || (formData.prescription && !scanSuccess)}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
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
