// components/SwineFlu.js
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from './SwineFlue.module.css';
import 'react-datepicker/dist/react-datepicker.css';

const Swineflu = () => {
    const router = useRouter();
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
        gender: '' // NEW GENDER FIELD
    });

    const [activeIndex, setActiveIndex] = useState(null);
    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
    const [holidays, setHolidays] = useState([]);
    const [errors, setErrors] = useState({});
    const [captcha, setCaptcha] = useState({ question: '', answer: '' });
    const [userCaptcha, setUserCaptcha] = useState('');
    const [showThankYou, setShowThankYou] = useState(false);
    const [countdown, setCountdown] = useState(10);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Toggle FAQ accordion
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Fetch user IP
    const fetchUserIp = useCallback(async () => {
        try {
            const response = await axios.get('https://api64.ipify.org?format=json');
            setFormData((prev) => ({ ...prev, user_ip: response.data.ip }));
        } catch (error) {
            console.error('Error fetching IP:', error);
        }
    }, []);

    // Fetch holidays
    const fetchHolidays = async () => {
        try {
            const response = await axios.get('https://backend.dangsccg.co.in//api/holidays/');
            setHolidays(response.data.map((holiday) => new Date(holiday.date)));
        } catch (error) {
            console.error('Error fetching holidays:', error);
        }
    };

    // Adjust date to avoid potential offset issues
    const fixDateOffset = (originalDate) => {
        const adjustedDate = new Date(originalDate);
        // Set the time to midday (12:00) to avoid shifting to a previous/next day
        adjustedDate.setHours(12, 0, 0, 0);
        return adjustedDate;
    };

    useEffect(() => {
        fetchUserIp();
        fetchHolidays();
        generateCaptcha();
    }, [fetchUserIp]);

    // Check if date is Sunday or holiday
    const isSundayOrHoliday = useCallback(
        (date) => {
            return (
                date.getDay() === 0 ||
                holidays.some((holiday) => date.toDateString() === holiday.toDateString())
            );
        },
        [holidays]
    );

    // Validate mobile number
    const validateMobileNumber = (value) => {
        if (!value) return 'Mobile number is required';
        if (!/^\d{10}$/.test(value)) return 'Mobile number should be 10 digits';
        return '';
    };

    const validateEmail = (patient_email) => {
        if (!patient_email || patient_email.trim() === '') {
            return 'Email is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(patient_email)) {
            return 'Email format is invalid';
        }
        return '';
    };

    // Validate field
    const validateField = (name, value) => {
        switch (name) {
            case 'mobile_number':
                return validateMobileNumber(value);
            case 'patient_name':
                return !value ? 'Patient name is required' : '';
                 case 'patient_email':
            return validateEmail(value);
            case 'address':
                return !value ? 'Address is required' : '';
            case 'preferred_time':
                return !value ? 'Preferred time is required' : '';
            case 'gender':
                return !value ? 'Gender is required' : '';
            case 'age':
                return !value ? 'Age is required' : '';
            default:
                return '';
        }
    };

    // Handle date change
    const handleDateChange = async (selectedDate) => {
        const correctedDate = fixDateOffset(selectedDate);

        if (isSundayOrHoliday(correctedDate)) {
            alert('Selected date is a holiday or Sunday');
            return;
        }

        setFormData((prev) => ({
            ...prev,
            date_for_collection: correctedDate,
            preferred_time: '',
        }));

        try {
            const currentTime = new Date().toLocaleTimeString('en-GB', {
                hour12: false,
                timeZone: 'Asia/Kolkata',
            });

            const response = await axios.get('https://backend.dangsccg.co.in//api/api/time-slots/', {
                params: {
                    date: correctedDate.toISOString().split('T')[0],
                    current_time: currentTime,
                },
            });
            setAvailableTimeSlots(response.data.time_slots || []);
        } catch (error) {
            console.error('Error fetching time slots:', error);
            setAvailableTimeSlots([]);
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        let processedValue = value;

        if (name === 'age') {
            processedValue = value.replace(/\D/g, '');
            if (processedValue && (parseInt(processedValue) < 0 || parseInt(processedValue) > 120)) {
                setErrors((prev) => ({
                    ...prev,
                    age: 'Age must be between 0 and 120',
                }));
                return;
            }
        }

        setFormData((prev) => ({ ...prev, [name]: processedValue }));
        setErrors((prev) => ({ ...prev, [name]: validateField(name, processedValue) }));
    };

    // Generate CAPTCHA
    const generateCaptcha = () => {
        const operations = ['+', '-', '*'];
        const operation = operations[Math.floor(Math.random() * operations.length)];
        let num1 = Math.floor(Math.random() * 10) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1;
        let answer;

        switch (operation) {
            case '+':
                answer = num1 + num2;
                break;
            case '-':
                if (num1 < num2) {
                    [num1, num2] = [num2, num1]; 
                }
                answer = num1 - num2;
                break;
            case '*':
                num1 = Math.floor(Math.random() * 5) + 1;
                num2 = Math.floor(Math.random() * 5) + 1;
                answer = num1 * num2;
                break;
            default:
                answer = 0;
        }

        setCaptcha({
            question: `${num1} ${operation} ${num2} = ?`,
            answer: answer.toString(),
        });
        setUserCaptcha('');
    };

    // Format date for submission
    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // Generate unique ID
    const generateUniqueID = async () => {
        try {
            const response = await axios.get('https://backend.dangsccg.co.in//api/api/generateUniqueID/');
            return response.data.Unique_id;
        } catch (error) {
            console.error('Error generating unique ID:', error);
            return null;
        }
    };

    // Send Confirmation Email (patient)
    const sendConfirmationEmail = async (patientName, email, uniqueId) => {
        if (!email) return;
        try {
            await axios.post('https://backend.dangsccg.co.in//api/Swine-flu-orange-send-confirmation-email/', {
                patient_email: email,
                patient_name: patientName,
                Unique_id: uniqueId,
                test_package_name: formData.test_package_name, // Include test_package_name
                address: formData.address,
                mobile_number: formData.mobile_number,
                preferred_time: formData.preferred_time,
                gender: formData.gender,
                age: formData.age,
                remark: formData.remark,
            });
        } catch (error) {
            console.error('Error sending confirmation email:', error);
        }
    };

    // Send email to info
    const sendEmailToInfo = async (formData, uniqueId) => {
        try {
            const emailData = {
                patient_name: formData.patient_name,
                patient_email: formData.patient_email || 'Not provided',
                mobile_number: formData.mobile_number,
                address: formData.address,
                date_for_collection: formatDate(formData.date_for_collection),
                preferred_time: formData.preferred_time,
                age: formData.age || 'Not provided',
                user_ip: formData.user_ip,
                remark: formData.remark || 'No remarks',
                gender: formData.gender || 'Not provided',
                Unique_id: uniqueId,
                test_package_name: formData.test_package_name, // Include test_package_name
            };

            await axios.post('https://backend.dangsccg.co.in//api/Swine_flu_send_email_to_info/', emailData);
        } catch (error) {
            console.error('Error sending email to info:', error);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        // Validate all required fields
        const newErrors = {};
        const requiredFields = [
            'mobile_number',
            'patient_name',
            'patient_email',
            'address',
            'date_for_collection',
            'preferred_time',
            'gender',// Gender also required
            'age'
        ];
        requiredFields.forEach((field) => {
            const error = validateField(field, formData[field]);
            if (error) newErrors[field] = error;
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        if (userCaptcha !== captcha.answer) {
            alert('Invalid CAPTCHA. Please try again.');
            generateCaptcha();
            setUserCaptcha('');
            return;
        }

        setIsSubmitting(true);

        try {
            const uniqueID = await generateUniqueID();
            if (!uniqueID) {
                throw new Error('Failed to generate unique ID');
            }

            const formDataToSend = new FormData();

            // Append all form data
            Object.entries(formData).forEach(([key, value]) => {
                if (key === 'date_for_collection') {
                    // Format the date for the backend
                    formDataToSend.append(key, formatDate(value));
                } else {
                    formDataToSend.append(key, value || 'None');
                }
            });

            formDataToSend.append('Unique_id', uniqueID);

            // Submit booking
            await axios.post('https://backend.dangsccg.co.in//api/api/bookings/', formDataToSend);

            // Send emails
            await Promise.all([
                sendConfirmationEmail(formData.patient_name, formData.patient_email, uniqueID),
                sendEmailToInfo(formData, uniqueID),
            ]);

            // Show thank you message and start countdown
            setShowThankYou(true);
            const timer = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        router.push('/');
                    }
                    return prev - 1;
                }, 1000);
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
                user_ip: formData.user_ip, // Preserve IP
                remark: '',
                gender: '' // Reset gender
            });
            setErrors({});
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.SwineFlueMainDiv}>
            {!showThankYou ? (
                <>
                    <div className={styles.SwineFLueImageDIv}>
                        <Image
                            src="/PhotosAndLogos/swineflu.png"
                            alt="Swine Flu Background"
                            fill
                            className={styles.backgroundImage}
                            priority
                        />
                        <div className={styles.SwineInnerMAinDivForFlex}>
                            <div className={styles.InnerMain1stLeftDiv}>
                                <h2>
                                    FLU PANEL [Influenza A (H1N1, H3N2) &amp; influenza B]
                                </h2>
                                <a
                                    href="/H1N1.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>
                                        <Image
                                            src="/PhotosAndLogos/icons8-play-30.png"
                                            alt="Download Icon"
                                            width={20}
                                            height={20}
                                        />
                                    </span>
                                    <span className={styles.H3N2Download}>
                                        DOWNLOAD BROCHURE
                                    </span>
                                </a>
                            </div>

                            <div className={styles.InnerSecondDiv}>
                                <div className={styles.InnerDivForm}>
                                    <h3>Dr. Dangs Lab - Home Collection</h3>
                                    <form onSubmit={handleSubmit} noValidate>
                                        <input
                                            type="text"
                                            name="patient_name"
                                            placeholder="Name*"
                                            value={formData.patient_name}
                                            onChange={handleChange}
                                            required
                                            aria-label="Patient Name"
                                            className='text-gray-800'
                                        />
                                        {errors.patient_name && (
                                            <p
                                                className={styles.errorMessage}
                                                role="alert"
                                            >
                                                {errors.patient_name}
                                            </p>
                                        )}

                                        <input
                                            type="tel"
                                            name="mobile_number"
                                            placeholder="Mobile Number*"
                                            value={formData.mobile_number}
                                            onChange={handleChange}
                                            required
                                            aria-label="Mobile Number"
                                            pattern="[0-9]{10}"
                                            className='text-gray-800'
                                        />
                                        {errors.mobile_number && (
                                            <p
                                                className={styles.errorMessage}
                                                role="alert"
                                            >
                                                {errors.mobile_number}
                                            </p>
                                        )}

                                        <input
    type="email"
    name="patient_email"
    placeholder="E-mail*"
    value={formData.patient_email}
    onChange={handleChange}
    required
    aria-label="Email"
    className='text-black'
/>
{/* ADD THIS BLOCK FOR EMAIL ERROR DISPLAY */}
{errors.patient_email && (
    <p className={styles.errorMessage} role="alert">
        {errors.patient_email}
    </p>
)}

                                        <input
                                            type="text"
                                            name="address"
                                            placeholder="Address*"
                                            value={formData.address}
                                            onChange={handleChange}
                                            required
                                            aria-label="Address"
                                            className='text-gray-800'
                                        />
                                        {errors.address && (
                                            <p
                                                className={styles.errorMessage}
                                                role="alert"
                                            >
                                                {errors.address}
                                            </p>
                                        )}

                                        <DatePicker
                                            selected={formData.date_for_collection}
                                            onChange={handleDateChange}
                                            minDate={new Date()}
                                            maxDate={
                                                new Date(
                                                    Date.now() +
                                                        365 * 24 * 60 * 60 * 1000
                                                )
                                            }
                                            filterDate={(date) =>
                                                !isSundayOrHoliday(date)
                                            }
                                            dateFormat="yyyy/MM/dd"
                                            placeholderText="Select a date*"
                                            className={styles.datePicker}
                                            required
                                            aria-label="Collection Date"
                                            
                                        />
                                        {errors.date_for_collection && (
                                            <p
                                                className={styles.errorMessage}
                                                role="alert"
                                            >
                                                {errors.date_for_collection}
                                            </p>
                                        )}

                                        <select
                                            name="preferred_time"
                                            value={formData.preferred_time}
                                            onChange={handleChange}
                                            required
                                            className={
                                                styles.SwinefluTimeSLots
                                            }
                                            aria-label="Preferred Time"
                                        >
                                            <option value="">
                                                Select a time slot*
                                            </option>
                                            {availableTimeSlots.map(
                                                (slot, index) => (
                                                    <option
                                                        key={index}
                                                        value={slot}
                                                    >
                                                        {slot}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                        {errors.preferred_time && (
                                            <p
                                                className={styles.errorMessage}
                                                role="alert"
                                            >
                                                {errors.preferred_time}
                                            </p>
                                        )}

                                        <input
                                            type="text"
                                            name="age"
                                            required
                                            placeholder="Age*"
                                            value={formData.age}
                                            onChange={handleChange}
                                            aria-label="Age"
                                            className='text-gray-800'
                                        />
                                        {errors.age && (
                                            <p
                                                className={styles.errorMessage}
                                                role="alert"
                                            >
                                                {errors.age}
                                            </p>
                                        )}

                                        {/* GENDER FIELD */}
                                        <select
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            required
                                            aria-label="Gender"
                                            className={styles.SwinefluTimeSLots}
                                        >
                                            <option value="">
                                                Select Gender*
                                            </option>
                                            <option value="Male">
                                                Male
                                            </option>
                                            <option value="Female">
                                                Female
                                            </option>
                                            <option value="Other">
                                                Other
                                            </option>
                                        </select>
                                        {errors.gender && (
                                            <p
                                                className={styles.errorMessage}
                                                role="alert"
                                            >
                                                {errors.gender}
                                            </p>
                                        )}

                                        <div
                                            className={styles.captchaContainer}
                                            role="group"
                                            aria-label="CAPTCHA verification"
                                        >
                                            <span
                                                className={styles.captchaText}
                                            >
                                                {captcha.question}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={generateCaptcha}
                                                className={styles.refreshButton}
                                                aria-label="Refresh CAPTCHA"
                                            >
                                                Refresh
                                            </button>
                                        </div>

                                        <input
                                            type="text"
                                            value={userCaptcha}
                                            onChange={(e) =>
                                                setUserCaptcha(e.target.value)
                                            }
                                            placeholder="Enter the answer"
                                            className={styles.captchaInput}
                                            required
                                            aria-label="CAPTCHA Answer"
                                        />

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={styles.submitButton}
                                        >
                                            {isSubmitting
                                                ? 'Submitting...'
                                                : 'BOOK'}
                                        </button>
                                    </form>

                                    <a
                                        href="tel:999-999-2020"
                                        className={styles.callButton}
                                    >
                                        CLICK HERE TO CALL 999-999-2020
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.OverviewSection}>
                        <h2>OVERVIEW</h2>
                        <hr />
                        <p>
                            Swine flu, also known as the H1N1 virus, is a relatively new
                            strain of an influenza virus that causes symptoms similar to
                            the regular flu.
                        </p>
                        <p>
                            Swine Flu originated in pigs but is spread primarily from
                            person to person.
                        </p>
                        <p>
                            Swine flu made headlines in 2009 when it was first
                            discovered in humans and became a pandemic.
                        </p>

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
                            <a
                                href="https://www.drdangslab.com/Swine-Flu-H1n1-Test.aspx"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://www.drdangslab.com/Swine-Flu-H1n1-Test.aspx
                            </a>
                        </p>

                        <h3>HOW IT SPREADS</h3>
                        <ul>
                            <li>
                                By airborne respiratory droplets (coughs or sneezes).
                            </li>
                            <li>
                                By touching a contaminated surface (blanket or doorknob).
                            </li>
                            <li>By saliva (kissing or shared drinks).</li>
                            <li>
                                By skin-to-skin contact (handshakes or hugs).
                            </li>
                        </ul>
                    </div>

                    <div className={styles.FAQSection}>
                        <h2>Frequently Asked Questions</h2>
                        <div className={styles.accordion}>
                            <div className={styles.accordionItem}>
                                <div
                                    className={styles.accordionHeader}
                                    onClick={() => toggleAccordion(0)}
                                    role="button"
                                    aria-expanded={activeIndex === 0}
                                    tabIndex={0}
                                >
                                    <span className='text-gray-800'>What does H1N1 stand for?</span>
                                    {activeIndex === 0 ? (
                                      <FaChevronUp className='text-black'/>
                                    ) : (
                                        <FaChevronDown className='text-black' />
                                    )}
                                </div>
                                <div
                                    className={`${styles.accordionBody} ${
                                        activeIndex === 0
                                            ? styles.show
                                            : ''
                                    }`}
                                    role="region"
                                    aria-labelledby="h1n1-header"
                                >
                                    <strong>
                                        The designation "H1N1" indicates unique
                                        traits, which exhibit characteristics
                                        that identify the virus to the immune
                                        system and allows for attachment and
                                        replication of the virus. The "H"
                                        (hemagglutinin) and the "N"
                                        (neuraminidases) are both proteins that
                                        are found on the outer shell or envelope
                                        of the virus.
                                    </strong>
                                </div>
                            </div>

                            <div className={styles.accordionItem}>
                                <div
                                    className={styles.accordionHeader}
                                    onClick={() => toggleAccordion(1)}
                                    role="button"
                                    aria-expanded={activeIndex === 1}
                                    tabIndex={0}
                                >
                                    <span className='text-gray-800'>Where did swine flu come from?</span>
                                    {activeIndex === 1 ? (
                                        <FaChevronUp className='text-black'/>
                                    ) : (
                                        <FaChevronDown className='text-black'/>
                                    )}
                                </div>
                                <div
                                    className={`${styles.accordionBody} ${
                                        activeIndex === 1
                                            ? styles.show
                                            : ''
                                    }`}
                                    role="region"
                                    aria-labelledby="origin-header"
                                >
                                    <strong>
                                        One virus that causes swine flu is
                                        believed to be a mix of pig, bird
                                        (avian), and human flu viruses. These
                                        types of viruses caused huge outbreaks
                                        in 1957, 1968, and 2009. H1N1 virus: The
                                        most common subtype of influenza A,
                                        including the swine flu virus.
                                    </strong>
                                </div>
                            </div>

                            <div className={styles.accordionItem}>
                                <div
                                    className={styles.accordionHeader}
                                    onClick={() => toggleAccordion(2)}
                                    role="button"
                                    aria-expanded={activeIndex === 2}
                                    tabIndex={0}
                                >
                                    <span className='text-gray-800'>
                                        Where was the first case of swine flu
                                        reported?
                                    </span>
                                    {activeIndex === 2 ? (
                                        <FaChevronUp className='text-black' />
                                    ) : (
                                        <FaChevronDown className='text-black'/>
                                    )}
                                </div>
                                <div
                                    className={`${styles.accordionBody} ${
                                        activeIndex === 2
                                            ? styles.show
                                            : ''
                                    }`}
                                    role="region"
                                    aria-labelledby="first-case-header"
                                >
                                    <strong>
                                        In India, the first case of influenza A
                                        H1N1 was reported on May 16, 2009 from
                                        Hyderabad. The World Health Organization
                                        declared the post pandemic phase on
                                        August 10, 2010.
                                    </strong>
                                </div>
                            </div>

                            <div className={styles.accordionItem}>
                                <div
                                    className={styles.accordionHeader}
                                    onClick={() => toggleAccordion(3)}
                                    role="button"
                                    aria-expanded={activeIndex === 3}
                                    tabIndex={0}
                                >
                                    <span className='text-gray-800'>
                                        Why Dr. Dangs Lab For Testing Swine
                                        Flu/H1N1?
                                    </span>
                                    {activeIndex === 3 ? (
                                        <FaChevronUp className='text-black' />
                                    ) : (
                                        <FaChevronDown className='text-black'/>
                                    )}
                                </div>
                                <div
                                    className={`${styles.accordionBody} ${
                                        activeIndex === 3
                                            ? styles.show
                                            : ''
                                    }`}
                                    role="region"
                                    aria-labelledby="why-dangs-header"
                                >
                                    <ul>
                                        <li>
                                            Dr. Dangs Lab is one of the first 3
                                            labs to have been approved by the
                                            government for testing of H1N1 by
                                            Real Time-PCR in 2010.
                                        </li>
                                        <li>
                                            We have highly trained in-house
                                            &amp; Home Collection Experts for
                                            sample collection for children
                                            &amp; patients of all ages.
                                        </li>
                                        <li>
                                            H1N1 testing is done by Real Time
                                            PCR &amp; has been Accredited by
                                            NABL (National Accreditation Board
                                            of Laboratories) for Dr. Dangs Lab.
                                        </li>
                                        <li>
                                            We provide a quick turnaround time
                                            which ensures timely reporting of
                                            all samples (Same day reporting of
                                            all samples received before 1:30
                                            PM).
                                        </li>
                                        <li>
                                            The test is performed for Influenza
                                            A, H1N1, H3N2 &amp; Influenza B with
                                            the sample SWAB Sample at no extra
                                            cost.
                                        </li>
                                        <li>
                                            The Testing Cost is Rs. 4500 as
                                            recommended by the DELHI GOVT.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.accordionItem}>
                                <div
                                    className={styles.accordionHeader}
                                    onClick={() => toggleAccordion(4)}
                                    role="button"
                                    aria-expanded={activeIndex === 4}
                                    tabIndex={0}
                                >
                                    <span className='text-gray-800'>What is Swine Flu?</span>
                                    {activeIndex === 4 ? (
                                        <FaChevronUp className='text-black'/>
                                    ) : (
                                        <FaChevronDown className='text-black'/>
                                    )}
                                </div>
                                <div
                                    className={`${styles.accordionBody} ${
                                        activeIndex === 4
                                            ? styles.show
                                            : ''
                                    }`}
                                    role="region"
                                    aria-labelledby="what-is-header"
                                >
                                    <ul>
                                        <li>
                                            Swine influenza is a contagious
                                            respiratory disease of pigs caused
                                            by influenza viruses and is found in
                                            almost all the countries around the
                                            world.
                                        </li>
                                        <li>
                                            There are many different types of
                                            influenza viruses. They affect
                                            humans and are spread amongst people
                                            by coughing and sneezing.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.accordionItem}>
                                <div
                                    className={styles.accordionHeader}
                                    onClick={() => toggleAccordion(5)}
                                    role="button"
                                    aria-expanded={activeIndex === 5}
                                    tabIndex={0}
                                >
                                    <span className='text-gray-800'>Symptoms Of Swine Flu</span>
                                    {activeIndex === 5 ? (
                                        <FaChevronUp className='text-black'/>
                                    ) : (
                                        <FaChevronDown className='text-black' />
                                    )}
                                </div>
                                <div
                                    className={`${styles.accordionBody} ${
                                        activeIndex === 5
                                            ? styles.show
                                            : ''
                                    }`}
                                    role="region"
                                    aria-labelledby="symptoms-header"
                                >
                                    <strong>
                                        Swine Flu or H1N1 flu usually results in
                                        breathing difficulty and depends on the
                                        virus involved for the severity of
                                        infection.
                                    </strong>
                                    <ul>
                                        <li>Sneezing and coughing</li>
                                        <li>Difficulty in breathing</li>
                                        <li>
                                            Increased discharge from eyes or
                                            nose
                                        </li>
                                        <li>High fever</li>
                                        <li>Lack of appetite</li>
                                        <li>
                                            Feeling of weakness and tiredness
                                        </li>
                                        <li>Swollen and red eyes</li>
                                        <li>Runny or stuffy nose</li>
                                        <li>Sore throat</li>
                                        <li>
                                            In some cases, nausea, vomiting, and
                                            diarrhea have also been reported.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.accordionItem}>
                                <div
                                    className={styles.accordionHeader}
                                    onClick={() => toggleAccordion(6)}
                                    role="button"
                                    aria-expanded={activeIndex === 6}
                                    tabIndex={0}
                                >
                                    <span className='text-gray-800'>Preventing and Controlling Swine Flu</span>
                                    {activeIndex === 6 ? (
                                        <FaChevronUp className='text-black'/>
                                    ) : (
                                        <FaChevronDown className='text-black'/>
                                    )}
                                </div>
                                <div
                                    className={`${styles.accordionBody} ${
                                        activeIndex === 6
                                            ? styles.show
                                            : ''
                                    }`}
                                    role="region"
                                    aria-labelledby="prevention-header"
                                >
                                    <h4>Mild Cases:</h4>
                                    <ul>
                                        <li>
                                            Infected patients should rest at
                                            home.
                                        </li>
                                        <li>
                                            Drink plenty of liquids.
                                        </li>
                                        <li>
                                            Keep body hydrated.
                                        </li>
                                        <li>
                                            Wash your hands several times a day.
                                        </li>
                                        <li>
                                            Use alcohol-based hand wash or
                                            sanitizers.
                                        </li>
                                        <li>
                                            Avoid touching face, eyes, mouth, or
                                            nose.
                                        </li>
                                        <li>
                                            Take prescribed medicines on time.
                                        </li>
                                        <li>
                                            Maintain distance from the patient
                                            as it is a communicable disease.
                                        </li>
                                    </ul>
                                    <h4>When to seek emergency care:</h4>
                                    <p>
                                        Please visit a hospital if the patient
                                        is:
                                    </p>
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
                <div className={styles.thankYouCard}>
                    <h2>Thank You!</h2>
                    <p>Your form has been successfully submitted.</p>
                    <p>Redirecting in {countdown} seconds...</p>
                </div>
            )}
        </div>
    );
};

export default Swineflu;
