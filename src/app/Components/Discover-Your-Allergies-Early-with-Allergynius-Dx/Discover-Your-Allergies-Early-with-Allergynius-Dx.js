// components/AllergyniusDx.js
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from './Discover-Your-Allergies-Early-with-Allergynius-Dx.module.css';
import 'react-datepicker/dist/react-datepicker.css';

const AllergyniusDx = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        mobile_number: '',
        patient_name: '',
        patient_email: '',
        address: '',
        date_for_collection: '',
        preferred_time: '',
        test_package_name: 'Allergynius Dx',
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

    // Toggle FAQ Accordion (if needed)
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
            setHolidays(response.data.map((holiday) => new Date(holiday.date)));
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

    // Validate fields
    const validateField = (name, value) => {
        switch (name) {
            case 'mobile_number':
                return validateMobileNumber(value);
            case 'patient_name':
                return !value ? 'Patient name is required' : '';
            case 'address':
                return !value ? 'Address is required' : '';
            case 'preferred_time':
                return !value ? 'Preferred time is required' : '';
            case 'gender':
                return !value ? 'Gender is required' : '';
            default:
                return '';
        }
    };

    // Fix date offset to prevent shifting
    const fixDateOffset = (originalDate) => {
        const adjustedDate = new Date(originalDate);
        adjustedDate.setHours(12, 0, 0, 0); // Force midday
        return adjustedDate;
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

    // Handle text field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        let processedValue = value;

        if (name === 'age') {
            processedValue = value.replace(/\D/g, '');
            if (
                processedValue &&
                (parseInt(processedValue) < 0 || parseInt(processedValue) > 120)
            ) {
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

    // Format date for backend
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

    // Send confirmation email (patient)
    const sendConfirmationEmail = async (patientName, email, uniqueId) => {
        if (!email) return;
        try {
            await axios.post(
                'https://backend.dangsccg.co.in/api/Swine-flu-orange-send-confirmation-emailaa/',
                {
                    patientName,
                    patient_email: email,
                    Unique_id: uniqueId,
                }
            );
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
                gender: formData.gender || 'Not provided', // INCLUDE GENDER
                Unique_id: uniqueId,
            };

            await axios.post('https://backend.dangsccg.co.in/api/Swine-flu-send-email-to-infosaaa/', emailData);
        } catch (error) {
            console.error('Error sending email to info:', error);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        // Validate required fields
        const newErrors = {};
        const requiredFields = [
            'mobile_number',
            'patient_name',
            'address',
            'date_for_collection',
            'preferred_time',
            'gender', // Add gender as required
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

            // Show thank you message + countdown
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
                test_package_name: 'Allergynius Dx',
                age: '',
                user_ip: formData.user_ip,
                remark: '',
                gender: ''
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
                            alt="Allergynius Dx"
                            fill
                            className={styles.backgroundImage}
                            priority
                        />
                        <div className={styles.CardiacHealthInnerMAinDivForFlex}>
                            <div className={styles.InnerMain1stLeftDiv}>
                                <h2>Discover Your Allergies Early with Allergynius Dx!</h2>
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
                                        />
                                        {errors.mobile_number && (
                                            <p className={styles.errorMessage} role="alert">
                                                {errors.mobile_number}
                                            </p>
                                        )}

                                        <input
                                            type="email"
                                            name="patient_email"
                                            placeholder="E-mail"
                                            value={formData.patient_email}
                                            onChange={handleChange}
                                            aria-label="Email"
                                        />

                                        <input
                                            type="text"
                                            name="address"
                                            placeholder="Address*"
                                            value={formData.address}
                                            onChange={handleChange}
                                            required
                                            aria-label="Address"
                                        />
                                        {errors.address && (
                                            <p className={styles.errorMessage} role="alert">
                                                {errors.address}
                                            </p>
                                        )}

                                        {/* DATE PICKER & TIME IN ROW */}
                                        <div className={styles.rowContainer}>
                                            <DatePicker
                                                selected={formData.date_for_collection}
                                                onChange={handleDateChange}
                                                minDate={new Date()}
                                                maxDate={new Date(
                                                    Date.now() + 365 * 24 * 60 * 60 * 1000
                                                )}
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
                                        {/* END ROW */}

                                        {/* GENDER SELECTION */}
                                        <select
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            required
                                            aria-label="Gender"
                                            className={styles.genderSelect}
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
                                            placeholder="Age"
                                            value={formData.age}
                                            onChange={handleChange}
                                            aria-label="Age"
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

                    {/* Overview Section with Allergynius Dx content */}
                    <div className={styles.OverviewSection}>
                        <p><strong>Discover Your Allergies Early with Allergynius Dx!</strong></p>
                        <p>
                            Unmask the mystery behind your allergies with Allergynius Dx, the revolutionary allergy
                            testing service by Dr. Dangs Lab, designed to help you take charge of your health!
                        </p>

                        <h3>What Is Allergynius Dx?</h3>
                        <p>
                            Allergynius Dx is a cutting-edge allergy component testing service that provides precise and
                            personalized insights into your allergies. By identifying allergens at the molecular level,
                            we go beyond standard allergy tests to pinpoint the exact triggers behind your symptoms.
                        </p>

                        <h3>Why Choose Allergynius Dx?</h3>
                        <ul>
                            <li>
                                <strong>Accurate Results:</strong> Detect allergens with unmatched precision, helping
                                you make informed health decisions.
                            </li>
                            <li>
                                <strong>Early Detection:</strong> Address allergies before they escalate, potentially
                                preventing severe reactions or long-term complications.
                            </li>
                            <li>
                                <strong>Personalised Care:</strong> Receive a tailored roadmap to manage and overcome
                                your allergies effectively.
                            </li>
                        </ul>

                        <h3>How Allergies Affect You</h3>
                        <p>Allergies can be triggered by various factors, such as:</p>
                        <ul>
                            <li>Certain foods like nuts, dairy, or shellfish.</li>
                            <li>Pollen from flowers and plants.</li>
                            <li>Pet dander or saliva.</li>
                            <li>Dust and mold.</li>
                        </ul>
                        <p>
                            Allergies may result in symptoms ranging from mild discomfort to life-threatening conditions
                            like anaphylaxis. Early detection is vital to managing and mitigating these risks.
                        </p>

                        <h3>How Does Allergynius Dx Work?</h3>
                        <ul>
                            <li>
                                <strong>Comprehensive Analysis:</strong> Identifying specific allergy components to
                                detect even hidden triggers.
                            </li>
                            <li>
                                <strong>Expert Interpretation:</strong> Test results interpreted by our team of doctors
                                to guide your allergy management plan.
                            </li>
                            <li>
                                <strong>Actionable Insights:</strong> Customized recommendations for lifestyle changes,
                                medications, or desensitization therapies.
                            </li>
                        </ul>

                        <h3>Why Early Detection Matters</h3>
                        <ul>
                            <li>Worsening of symptoms.</li>
                            <li>Increased risk of severe allergic reactions.</li>
                            <li>Impact on overall quality of life.</li>
                        </ul>
                        <p>
                            Take control today with Allergynius Dx and pave the way to a healthier, allergy-free future!
                        </p>

                        <h3>Where to Book?</h3>
                        <p>Booking your Allergynius Dx test is easy!</p>

                        <h3>Frequently Asked Questions</h3>
                        <p>
                            <strong>Q: What makes Allergynius Dx different from traditional allergy tests?</strong><br />
                            A: Allergynius Dx identifies allergens at the molecular level, offering precise and detailed
                            insights into your specific triggers.
                        </p>
                        <p>
                            <strong>Q: How soon can I get my results?</strong><br />
                            A: Results are typically available within a few days, depending on the specific tests
                            conducted.
                        </p>
                        <p>
                            <strong>Q: Can children take the Allergynius Dx test?</strong><br />
                            A: Absolutely! Our testing is suitable for individuals of all ages.
                        </p>
                        <p>
                            <strong>Q: What should I do after receiving my test results?</strong><br />
                            A: Our team of doctors will guide you with a personalized plan, which may include lifestyle
                            adjustments, medications, or desensitization therapies.
                        </p>
                        <p>
                            <strong>Q: Do you offer home collection for the test?</strong><br />
                            A: Yes, we offer home collection services for your convenience.
                        </p>
                        <p>
                            <strong>Q: Is fasting required for the test?</strong><br />
                            A: No, fasting is not required for the Allergynius Dx test.
                        </p>

                        <p><strong>Don’t Let Allergies Hold You Back!</strong></p>
                        <p>
                            Discover your allergies early with Allergynius Dx and enjoy a life of health and vitality.
                            Book your test now and take the first step toward a healthier tomorrow!
                        </p>
                        <p><strong>Visit or book your test with Dr. Dangs Lab today.</strong></p>
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

export default AllergyniusDx;
