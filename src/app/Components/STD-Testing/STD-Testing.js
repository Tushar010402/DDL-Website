// components/STDTesting.js

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from './STD-Testing.module.css';
import 'react-datepicker/dist/react-datepicker.css';

const STDTesting = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        mobile_number: '',
        patient_name: '',
        patient_email: '',
        address: '',
        date_for_collection: '',
        preferred_time: '',
        test_package_name: 'STD-Testing',
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
            return validateEmail(value); // MODIFIED: Use your validateEmail function
        case 'address':
            return !value ? 'Address is required' : '';
        case 'age':
            return !value ? 'Age is required' : '';
        case 'preferred_time':
            return !value ? 'Preferred time is required' : '';
        case 'gender':
            return !value ? 'Gender is required' : '';
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
            'gender' ,// Gender also required
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
                                STD Testing - Comprehensive and Confidential Care
                                </h2>
                                <a
                                    href="/STD-TEST.pdf"
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
                                            className='text-black'
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
                                            className='text-black'
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
                                            placeholder="Age*"
                                            value={formData.age}
                                            required
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



                    {/* Overview and STD-specific content */}
                    <div className={styles.OverviewSection}>
                        <h2>OVERVIEW</h2>
                        <hr />
                        <p>
                            Sexually Transmitted Diseases (STDs) are infections passed from one person to another
                            through sexual contact. They may also spread through other modes, such as skin-to-skin
                            contact, saliva, or shared items like razors or towels. Regular testing for STDs is vital for
                            maintaining sexual health, early diagnosis, and effective treatment.
                        </p>
                        <p>
                            Our Comprehensive STD Profile is designed to screen for a wide range of sexually
                            transmitted infections (STIs) with high accuracy and confidentiality. By using advanced
                            diagnostic techniques, we provide precise and reliable results, empowering you to take
                            control of your health.
                        </p>

                        <h3>Why Choose Our Comprehensive STD Profile?</h3>
                        <ul>
                            <li>
                                <strong>Advanced Molecular Diagnostics:</strong> Employs cutting-edge nucleic acid
                                amplification techniques (NAAT/PCR) for unmatched accuracy.
                            </li>
                            <li>
                                <strong>Extensive Coverage:</strong> Screens for over 15 infections, including common
                                and less frequently diagnosed STIs.
                            </li>
                            <li>
                                <strong>Confidential Testing:</strong> Your privacy is our priority. We ensure a discreet
                                testing process and secure reporting.
                            </li>
                            <li>
                                <strong>Expert Guidance:</strong> Receive medical insights and post-test support to
                                understand your results better and discuss next steps.
                            </li>
                        </ul>

                        <h3>Tests Included in the Comprehensive STD Profile:</h3>
                        <ul>
                            <li>HIV Screening: HIV Combo (4th Generation Test).</li>
                            <li>Hepatitis Testing: HBsAg (Hepatitis B), HCV Antibodies (Hepatitis C).</li>
                            <li>
                                Syphilis Panel: RPR (Rapid Plasma Reagin), TPHA (Treponema Pallidum
                                Hemagglutination Assay).
                            </li>
                            <li>
                                Bacterial Infections: Chlamydia Trachomatis, Neisseria Gonorrhoeae, Gardnerella
                                Vaginalis, Mycoplasma Genitalium, Mycoplasma Hominis, and Ureaplasma Species.
                            </li>
                            <li>
                                Viral Infections: Herpes Simplex Virus (Type 1 & 2), Cytomegalovirus, Human
                                Papillomavirus (HPV Types 16 and 18).
                            </li>
                            <li>Other Pathogens: Trichomonas Vaginalis, Candida Albicans.</li>
                        </ul>

                        <h3>HOW IT SPREADS</h3>
                        <p>STDs can spread through various means:</p>
                        <ul>
                            <li>Sexual Contact: Vaginal, oral, or anal sex.</li>
                            <li>Skin-to-Skin Contact: Direct contact with infected areas.</li>
                            <li>Bodily Fluids: Blood, semen, or vaginal secretions.</li>
                            <li>Shared Items: Razors, towels, or other personal belongings.</li>
                        </ul>

                        <h3>WHEN TO GET TESTED</h3>
                        <ul>
                            <li>If you are sexually active with multiple partners.</li>
                            <li>After unprotected sexual contact.</li>
                            <li>
                                If you experience symptoms such as unusual discharge, pain during urination, sores,
                                or rashes.
                            </li>
                            <li>As part of a routine health check-up to ensure early detection and treatment.</li>
                        </ul>

                        <h3>WHERE TO BOOK?</h3>
                        <p>
                            You can conveniently book your Comprehensive STD Test with us for confidential and
                            accurate results:
                        </p>

                        <h3>FAQs</h3>
                        <p>
                            <strong>1. How soon can I get tested after exposure?</strong><br />
                            Each infection has a specific window period. Consult with our experts for the ideal
                            testing time based on your situation.
                        </p>
                        <p>
                            <strong>2. Are the tests painful?</strong><br />
                            Most tests involve a simple blood draw or urine sample, ensuring a comfortable
                            experience.
                        </p>
                        <p>
                            <strong>3. Can I get the results online?</strong><br />
                            Yes, your results will be securely shared online for your convenience.
                        </p>
                        <p>
                            <strong>4. What happens if I test positive?</strong><br />
                            Our medical professionals will guide you on treatment options and next steps to
                            ensure your well-being.
                        </p>
                        <p>
                            <strong>5. Do you offer home collection for samples?</strong><br />
                            Yes, we provide a convenient home collection service for your samples, ensuring a
                            hassle-free experience.
                        </p>
                        <p>
                            <strong>6. Is fasting required for the test?</strong><br />
                            No, fasting is not required for the tests.
                        </p>

                        <h3>Take Control of Your Sexual Health Today</h3>
                        <p>
                            Don’t let uncertainty weigh on your mind. Book your STD test now and take the first step
                            toward safeguarding your health and well-being.
                        </p>
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

export default STDTesting;
