import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios'; 
import styles from './HomeCollection.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { useNavigate, useLocation } from 'react-router-dom';

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
    prescription: null,
    remark: '',
  });

  const [holidays, setHolidays] = useState([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedStateOption, setSelectedStateOption] = useState(null);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [errors, setErrors] = useState({});

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

  useEffect(() => {
    if (location.state?.selectedPackage) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        test_package_name: location.state.selectedPackage,
      }));
    }
  }, [location.state]);

  const validatePrescription = useCallback((file) => {
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
      if (!validTypes.includes(file.type)) {
        return 'Unsupported file type. Only JPG, PNG, and PDF are allowed.';
      }
    }
    return '';
  }, []);

  const handleFileChange = useCallback((e) => {
    const file = e.target.files[0];
    const fileError = validatePrescription(file);

    if (fileError) {
      setErrors((prevErrors) => ({ ...prevErrors, prescription: fileError }));
      return;
    }

    setFormData((prevFormData) => ({ ...prevFormData, prescription: file }));
    setErrors((prevErrors) => ({ ...prevErrors, prescription: '' }));
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

  const handleDateChange = useCallback(
    (date) => {
      if (isSundayOrHoliday(date)) {
        alert('This date is a holiday or Sunday and cannot be selected.');
        setFormData((prevFormData) => ({
          ...prevFormData,
          date_for_collection: '',
          preferred_time: '',
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          date_for_collection: date,
          preferred_time: '',
        }));
      }
    },
    [isSundayOrHoliday]
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

  const formatDateForBackend = useCallback((date) => {
    const d = new Date(date);
    const month = '' + (d.getMonth() + 1);
    const day = '' + d.getDate();
    const year = d.getFullYear();

    return [year, month.length < 2 ? '0' + month : month, day.length < 2 ? '0' + day : day].join('-');
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const { mobile_number, patient_name, address, date_for_collection, preferred_time, gender } = formData;

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

        if (isUpdateMode) {
          formData.Unique_id = getUniqueIDFromURL();

          const response = await axios.put(
            `https://api.dangsccg.co.in/api/api/bookings/update/${formData.Unique_id}/`,
            formDataToSend,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          );
          console.log('Booking updated:', response.data);
        } else {
          formData.Unique_id = uniqueID;

          const response = await axios.post('https://api.dangsccg.co.in/api/api/bookings/', formDataToSend, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log('Booking created:', response.data);
        }

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
          gender: '',
          city: '',
          pincode: '',
          state: '',
          prescription: null,
          remark: '',
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
    ]
  );

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
      <h2> Home Collection Service</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className={styles.row1}>
          <div className={styles.FirstrowOnBookingForm}>
            <div className={styles.inputFeild} id={styles['inputFeild12']}>
              <div className={styles.DateFOrCollectIonInBookingPage}>
                <label>Date for Collection*</label>
              </div>
              <DatePicker
                selected={formData.date_for_collection}
                onChange={handleDateChange}
                minDate={new Date()}
                maxDate={new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)}
                filterDate={(date) => !isSundayOrHoliday(date)}
                dateFormat="dd-MM-yyyy"
                placeholderText="Select a date"
                disabledKeyboardNavigation
              />
              {errors.date_for_collection && <p className={styles.errorMessage}>{errors.date_for_collection}</p>}
            </div>

            <div className={styles.inputFeild}>
              <div className={styles.preferredTimeInputOnBookingPage}>
                <div>
                  <label>Preferred Time*</label>
                </div>
                {formData.date_for_collection ? (
                  availableTimeSlots.length > 0 ? (
                    <select
                      id="time_slots"
                      name="preferred_time"
                      value={formData.preferred_time}
                      onChange={handleChange}
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
                  ) : (
                    <p>No time slots available for this date.</p>
                  )
                ) : (
                  <p>Select a date to see available time slots.</p>
                )}
                {errors.preferred_time && <p className={styles.errorMessage}>{errors.preferred_time}</p>}
              </div>
            </div>
            <div className={styles.inputFeild}>
              <label>Test Packages</label>
              <a href='../../../TEST-PACKAGES-BROCHURE-INCLUDING-FM-TESTS-APRIL24.pdf' id={styles.ATAgeBookingStandardId}>             <span id={styles.BookIngStandardPackageID}>
              VIEW STANDARD PACKAGES
              </span>
              </a>
              <input
                type="text"
                name="test_package_name"
                value={formData.test_package_name}
                onChange={handleChange}
                placeholder="Enter test package names"
              />
              <a href='https://discoverbydrdangs.com/' id={styles.ATAgeBookingStandardId}> 
              CUSTOMISE YOUR PACKAGE
              </a>
            </div>
          </div>
          <div className={styles.inputFeild}>
            <label>Mobile Number*</label>
            <input
              type="text"
              name="mobile_number"
              value={formData.mobile_number}
              onChange={handleChange}
              onKeyPress={handleEnterPress}
            />
            {errors.mobile_number && <p className={styles.errorMessage}>{errors.mobile_number}</p>}
          </div>

          <div className={styles.inputFeild}>
            <label>Patient Name*</label>
            <input
              type="text"
              name="patient_name"
              value={formData.patient_name}
              onChange={handleChange}
            />
            {errors.patient_name && <p className={styles.errorMessage}>{errors.patient_name}</p>}
          </div>

          <div className={styles.inputFeild}>
            <label>Gender</label>
            <Select
              name="gender"
              options={genderOptions}
              id={styles['inputFeild20']}
              value={formData.gender}
              onChange={handleGenderChange}
              isSearchable
              isClearable
            />
            {errors.gender && <p className={styles.errorMessage}>{errors.gender}</p>}
          </div>
        </div>

        <div className={styles.row1}>
          <div className={styles.inputFeild}>
            <label>WhatsApp Number</label>
            <input
              type="text"
              name="whatsapp_number"
              value={formData.whatsapp_number}
              onChange={handleChange}
            />
            {errors.whatsapp_number && <p className={styles.errorMessage}>{errors.whatsapp_number}</p>}
          </div>
          <div className={styles.inputFeild}>
            <label>Age</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            {errors.age && <p className={styles.errorMessage}>{errors.age}</p>}
          </div>

          <div className={styles.inputFeild}>
            <label>Patient Email</label>
            <input
              type="email"
              name="patient_email"
              value={formData.patient_email}
              onChange={handleChange}
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
              id={styles['inputFeild20']}
              onChange={(option) => {
                setSelectedStateOption(option);
                setFormData((prevFormData) => ({ ...prevFormData, state: option ? option.value : '' }));
              }}
              isSearchable
              isClearable
            />
          </div>

          <div className={styles.inputFeild}>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.row1}>
          <div className={styles.inputFeild} id={styles['inputFeild22']}>
            <label>Address*</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <p className={styles.errorMessage}>{errors.address}</p>}
          </div>
          <div className={styles.inputFeild} id={styles['inputFeild23']}>
            <label>Pincode</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.inputFeild}>
          <label>Upload Prescription: (supported file types are .jpg, .jpeg, .png, .pdf):</label>
          <input
            type="file"
            name="prescription"
            accept=".jpg, .jpeg, .png, .pdf"
            onChange={handleFileChange}
          />
          {errors.prescription && <p className={styles.errorMessage}>{errors.prescription}</p>}
        </div>

        <div className={styles.inputFeild} id={styles['inputtextarea']}>
          <label>Remark</label>
          <textarea
            name="remark"
            value={formData.remark}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={styles.AddButtonInAddBooking}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default HomeCollection;
