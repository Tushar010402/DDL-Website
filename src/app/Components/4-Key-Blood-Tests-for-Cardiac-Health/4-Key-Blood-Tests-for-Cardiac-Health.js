// components/CardiacHealth.js
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from './4-Key-Blood-Tests-for-Cardiac-Health.module.css'; // Updated CSS import
import 'react-datepicker/dist/react-datepicker.css';

const CardiacHealth = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        mobile_number: '',
        patient_name: '',
        patient_email: '',
        address: '',
        date_for_collection: '',
        preferred_time: '',
        test_package_name: 'Comprehensive Blood Tests for Cardiac Health',
        age: '',
        user_ip: '',
        remark: '',
        gender: '' // NEW FIELD for gender
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

    // Toggle FAQ Accordion (if needed anywhere)
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
            const response = await axios.get('https://backend.dangsccg.co.in/api/holidays/');
            setHolidays(
                response.data.map((holiday) => new Date(holiday.date))
            );
        } catch (error) {
            console.error('Error fetching holidays:', error);
        }
    };

    useEffect(() => {
        fetchUserIp();
        fetchHolidays();
        generateCaptcha();
    }, [fetchUserIp]);

    // Check if Sunday or Holiday
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

    // Validate any field
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

    // This helper ensures the selected date does not shift due to time-zone offsets
    const fixDateOffset = (originalDate) => {
        const adjustedDate = new Date(originalDate);
        // Set the time to midday to avoid going back or forward one day due to offsets
        adjustedDate.setHours(12, 0, 0, 0);
        return adjustedDate;
    };

    // Handle date change
    const handleDateChange = async (selectedDate) => {
        // Fix for the date shift issue
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

            const response = await axios.get('https://backend.dangsccg.co.in/api/api/time-slots/', {
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

    // Handle form input change
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
                    [num1, num2] = [num2, num1]; // Ensure positive result
                }
                answer = num1 - num2;
                break;
            case '*':
                num1 = Math.floor(Math.random() * 5) + 1; // Smaller numbers for multiplication
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
        setUserCaptcha(''); // Reset user input
    };

    // Format date for sending to the backend
    const formatDate = (date) => {
        if (!date) return '';
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // Generate unique ID
    const generateUniqueID = async () => {
        try {
            const response = await axios.get('https://backend.dangsccg.co.in/api/api/generateUniqueID/');
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
            await axios.post('https://backend.dangsccg.co.in/api/Swine-flu-orange-send-confirmation-email/', {
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

            await axios.post('https://backend.dangsccg.co.in/api/Swine_flu_send_email_to_info/', emailData);
        } catch (error) {
            console.error('Error sending email to info:', error);
        }
    };

    // Handle form submit
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
            'gender', // GENDER is required as well
            'age', // AGE is required as well
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
                    formDataToSend.append(key, formatDate(value));
                } else {
                    formDataToSend.append(key, value || 'None');
                }
            });

            formDataToSend.append('Unique_id', uniqueID);

            // Submit booking
            await axios.post('https://backend.dangsccg.co.in/api/api/bookings/', formDataToSend);

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
                test_package_name: '4 Key Blood Tests for Cardiac Health',
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
        <div className={styles.CardiacHealthMainDiv}>
            {!showThankYou ? (
                <>
                    {/* Banner / Image Section */}
                    <div className={styles.CardiacHealthImageDiv}>
                        <Image
                            src="/PhotosAndLogos/swineflu.png"
                            alt="Background"
                            fill
                            className={styles.backgroundImage}
                            priority
                        />
                        <div className={styles.CardiacHealthInnerMAinDivForFlex}>
                            <div className={styles.InnerMain1stLeftDiv}>
                                <h2>Comprehensive Blood Tests for Cardiac Health</h2>

                                
                                <a
                                    href="https://testprofiles.drdangslab.com/static/files/Cardiac%20Panel%2010-5-2022.pdf"
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

                            {/* Form Section */}
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
                                            className='text-black'
                                        />
                                        {errors.patient_name && (
                                            <p className={styles.errorMessage} role="alert">
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
                                            <p className={styles.errorMessage} role="alert">
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
                                            <p className={styles.errorMessage} role="alert">
                                                {errors.address}
                                            </p>
                                        )}

                                        {/* DATE PICKER AND TIME SELECTOR IN A ROW */}
                                        <div className={styles.rowContainer}>
                                            <DatePicker
                                                selected={formData.date_for_collection}
                                                onChange={handleDateChange}
                                                minDate={new Date()}
                                                maxDate={new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)}
                                                filterDate={(date) => !isSundayOrHoliday(date)}
                                                dateFormat="yyyy/MM/dd"
                                                placeholderText="Select a date*"
                                                className={styles.datePicker}
                                                required
                                                aria-label="Collection Date"
                                            />
                                            {errors.date_for_collection && (
                                                <p className={styles.errorMessage} role="alert">
                                                    {errors.date_for_collection}
                                                </p>
                                            )}

                                            <select
                                                name="preferred_time"
                                                value={formData.preferred_time}
                                                onChange={handleChange}
                                                required
                                                className={styles.SwinefluTimeSLots}
                                                aria-label="Preferred Time"
                                            >
                                                <option value="">Select a time slot*</option>
                                                {availableTimeSlots.map((slot, index) => (
                                                    <option key={index} value={slot}>
                                                        {slot}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.preferred_time && (
                                                <p className={styles.errorMessage} role="alert">
                                                    {errors.preferred_time}
                                                </p>
                                            )}
                                        </div>
                                        {/* END ROW FOR DATE/TIME */}

                                        {/* GENDER SELECTION */}
                                        <select
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            required
                                            aria-label="Gender"
                                            className="text-black"
                                        >
                                            <option value="">Select Gender*</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {errors.gender && (
                                            <p className={styles.errorMessage} role="alert">
                                                {errors.gender}
                                            </p>
                                        )}

                                        <input
                                            type="text"
                                            name="age"
                                            placeholder="Age*"
                                            required
                                            value={formData.age}
                                            onChange={handleChange}
                                            aria-label="Age"
                                            className='text-black'
                                        />
                                        {errors.age && (
                                            <p className={styles.errorMessage} role="alert">
                                                {errors.age}
                                            </p>
                                        )}

                                        {/* CAPTCHA */}
                                        <div
                                            className={styles.captchaContainer}
                                            role="group"
                                            aria-label="CAPTCHA verification"
                                        >
                                            <span className={styles.captchaText}>
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
                                            onChange={(e) => setUserCaptcha(e.target.value)}
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
                                            {isSubmitting ? 'Submitting...' : 'BOOK'}
                                        </button>
                                    </form>

                                    <a href="tel:999-999-2020" className={styles.callButton}>
                                        CLICK HERE TO CALL 999-999-2020
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Overview Section */}
                    <div className={styles.OverviewSection}>
                        <h2>Because Early Detection Saves Lives</h2>
                        <hr />
                        <p>
                            Heart disease remains the number one cause of death globally, responsible for nearly 18 million lives each year, according to the<span className='font-bold '> World Health Organization (WHO). </span>What’s more alarming?<span className='font-bold'> 47% of sudden cardiac deaths occur outside hospitals</span>, often due to missed early signs or delayed diagnosis.

                        </p>
                         <p>That’s why<span className='font-bold'> Dr. Dangs Lab</span>, the best diagnostic lab in Delhi NCR, brings you a comprehensive and science-backed <span className='font-bold'>Cardiac Risk Profile</span> to assess your heart health, detect risks early, and help you take informed steps toward a healthier future.
</p>
                        <h3>Why Test for Cardiac Health?</h3>
                        <p>
                            Cardiovascular diseases (CVDs) often progress silently. You may feel fine today and still have underlying risks like atherosclerosis, inflammation, or early signs of heart failure. Regular testing can:

                        </p>
                        <ul className='list-disc pl-5'>
                            <li>Predict future heart problems</li>
                            <li>Identify existing risk factors</li>
                            <li>Help take preventive action</li>
                            <li>Enable lifestyle or medication-based interventions</li>
                        </ul>
                        <p>Whether you have a family history of heart disease, live a sedentary lifestyle, or have diabetes or high blood pressure, cardiac testing could save your life.
</p>
                        <h3>Key Blood Tests Offered at Dr. Dangs Lab for Cardiac Health
</h3>
                        <p>
                            Here’s a closer look at the advanced markers included in<span className='font-bold'> Dr. Dangs Lab’s CardiacPro Panel:</span> 
                        </p>

                        <h3>1. Extended Lipid Profile*</h3>
                        <p>(Includes Lipoprotein (a), Apolipoprotein A & B, Homocysteine)
</p>
                        <p>
                            A deeper, more insightful version of the routine lipid profile. It not only measures cholesterol and triglycerides but also:

                        </p>

                         <li><strong>Lipoprotein (a): </strong>A genetic marker associated with heightened susceptibility to high cholesterol and heart disease.
</li>
            <li><strong>Apolipoprotein A & B: </strong>Provide a more detailed understanding of cardiac risk based on cholesterol particle size and density.
</li>
            <li><strong>Homocysteine: </strong> An amino acid that, at elevated levels, significantly increases the risk of heart attacks and strokes.
</li>
                        <h3>2. High-Sensitivity C-Reactive Protein (hs-CRP)
</h3>
                        <p>
                            An inflammation marker that helps predict the risk of heart disease before symptoms appear. Even a small increase in hs-CRP levels can indicate ongoing vascular inflammation, often present before a heart event.

                        </p>
                        <p className='italic'>Referenced by the CDC and American Heart Association as a critical cardiovascular risk marker.
</p>
                        <h3>3. Lp-PLA₂ (PLAC Test)</h3>
                        <p>
                           <span className='font-bold'> Lipoprotein-Associated Phospholipase A2 is a specialized enzyme test used to assess vascular inflammation </span>and detect the presence of unstable plaque inside arteries—a strong predictor of heart attacks and strokes.
                        </p>
                        <p>Unlike traditional cholesterol tests, Lp-PLA₂ directly targets the <span className="font-bold">inflammatory process</span>, making it a highly sensitive and early warning marker.</p>
                         <p>Recommended in European and American guidelines for cardiovascular risk assessment.</p>
                        <h3>4. hs-Troponin I & hs-Troponin T</h3>
                        <p>
                           These are <span className='font-bold'>ultra-sensitive cardiac markers </span>used to detect even minor heart muscle damage. They help:

                        </p>

                    <ul className='list-disc pl-5'>
                        <li>Rule out or confirm heart attacks</li>
                        <li>Predict future cardiac events
</li>
                        <li>Monitor response to treatment in known heart patients
</li>
                    </ul>
                        <p>
                        <span className='font-bold'>Troponin I </span>is the preferred marker for assessing<span className='font-bold'> ongoing cardiac damage</span>, while Troponin T helps evaluate the<span className='font-bold'> long-term risk of cardiovascular events.</span>
                        </p>

                        <h3>5. Leptin</h3>
                        <p>
                           Leptin is a hormone produced by fat cells. Elevated levels are linked to:
                        </p>
                        <ul className='list-disc pl-5'>
                            <li>Obesity-related cardiac issues</li>
                            <li>Insulin resistance</li>
                            <li>Increased risk of heart failure</li>
                        </ul>
                        <p>
                           Testing leptin levels gives insight into how body fat is affecting your heart and metabolic health.

                        </p>
                        <h3>6. ProBNP (Pro–B-type Natriuretic Peptide)</h3>
                        <p>
                            This test is used for the<span className='font-bold'> early detection of heart failure.</span> When the heart is under stress or starting to fail, ProBNP levels rise in the bloodstream.
                        </p>
                        <p>
                           It helps:

                        </p>
                        <ul className='list-disc pl-5'>
                            <li>Diagnose congestive heart failure</li>
                            <li>Monitor the severity of cardiac stress</li>
                            <li>Distinguish between cardiac and non-cardiac causes of symptoms like breathlessness</li>
                        </ul>

                        <h3>Who Should Consider These Tests?</h3>
                        <p>
                           You should consider the<span className='font-bold'> Comprehensive Cardiac Panel</span>  if you:

                        </p>
                        <ul className='list-disc pl-5'>
                            <li>Are over 35 years old</li>
                            <li>Have a family history of heart disease</li>
                            <li>Are a smoker or consume alcohol frequently</li>
                            <li>Lead a sedentary lifestyle</li>
                            <li>Are overweight or obese
</li>
                            <li>

Have diabetes or high blood pressure
</li>
                            <li>Experience unexplained fatigue, chest discomfort, or breathlessness</li>
                            <li>Want to monitor your heart health proactively</li>
                        </ul>
                        <h3>Why Choose Dr. Dangs Lab?</h3>
                        <p>At <span className='font-bold'> Dr. Dangs Lab</span>, Delhi NCR’s most trusted pathology lab, we combine:</p>
                        <ul className='list-disc pl-5 font-bold'>
                            <li>Advanced diagnostic technology</li>
                            <li>MD pathologist-led review of every report</li>
                            <li>Expert counselling support post-report</li>
                            <li>Home sample collection across Delhi NCR</li>
                            <li>

Precise, quality-assured testing and fast TATs
</li>
 </ul>
                            <p>We believe in more than just accurate results—we believe in <span className='font-bold'>empowering you with the right information</span>, at the right time.
</p>
                       
                        <h3>Convenient Locations & Home Collection
</h3>
<p>Whether you're based in<span className='font-bold'> Delhi, Gurgaon, or Noida</span>, our team reaches you with punctual home sample collections.</p>
<h3>Final Word: Don’t Guess. Get Tested.
</h3>
<p>Cardiovascular disease doesn’t always come with warnings. Sometimes,<span className='font-bold'> the first symptom is the last</span>. But it doesn’t have to be that way.
</p>
<p>With Dr. Dangs Lab’s comprehensive cardiac testing, you don’t just check your numbers—you understand your <span className="font-bold">risk, your health, and your future.</span>

</p>
<h3>Trusted Sources:</h3>

                         <li><strong>World Health Organization (WHO): </strong>Cardiovascular Diseases Factsheet.
</li>
            <li><strong>CDC & AHA Guidelines –</strong> hs-CRP and Lp-PLA2 for heart disease risk
</li>
            <li><strong>

European Society of Cardiology (ESC):
</strong> Recommendations for biomarker testing

</li>
<p>Because <span className='font-bold'>your heart health deserves nothing less than the best</span>, choose <span className='font-bold'>Dr. Dangs Lab.</span> 
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

export default CardiacHealth;
