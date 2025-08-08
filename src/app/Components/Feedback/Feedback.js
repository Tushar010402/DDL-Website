'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DatePicker from 'react-datepicker';
import { Check, RefreshCw, AlertCircle, Calendar, MapPin, Star, Mail, Phone } from 'lucide-react';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Feedback.module.css';
import axios from 'axios';

const StarRating = ({ value, onChange }) => {
    return (
        <div className={styles.starRating}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`${styles.star} ${star <= value ? styles.selected : ''}`}
                    onClick={() => onChange(star)}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

const locations = [
    "SDA",
    "Gurugram",
    "Punjabi Bagh",
    "New Friends Colony",
    "Vasant Kunj",
    "Kamla Nagar",
    "Greater Kailash",
    "Vasant Vihar"
];

const ratingCategories = [
    { key: 'sample_collection', label: 'Sample Collection Service' },
    { key: 'timely_delivery', label: 'Timely Delivery of Reports' },
    { key: 'quality_report', label: 'Quality of Report' },
    { key: 'satisfaction_level', label: 'Overall Satisfaction Level' }
];

const Feedback = () => {
    const router = useRouter();
    const [ratings, setRatings] = useState({
        sample_collection: 0,
        timely_delivery: 0,
        quality_report: 0,
        satisfaction_level: 0,
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact_number: '',
        location: '',
        testing_date: null,
        coming_since_years: '',
        comments: '',
        sms_sent_to_patient: 0,
        review_mail_sent_to_patient: 0,
        remarks: '',
        user_ip: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [countdown, setCountdown] = useState(3);
    const [captcha, setCaptcha] = useState({ question: '', answer: '' });
    const [userCaptcha, setUserCaptcha] = useState('');

    useEffect(() => {
        generateCaptcha();
        fetchUserIp();
    }, []);

    useEffect(() => {
        if (isSubmitted) {
            const countdownInterval = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        clearInterval(countdownInterval);
                        router.push('/');
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(countdownInterval);
        }
    }, [isSubmitted, router]);

    const fetchUserIp = async () => {
        try {
            const response = await axios.get('https://api64.ipify.org?format=json');
            setFormData(prev => ({
                ...prev,
                user_ip: response.data.ip,
            }));
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

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.testing_date) newErrors.testing_date = 'Testing date is required';
        if (!formData.coming_since_years) newErrors.coming_since_years = 'Please select how long you have been visiting';
        
        Object.keys(ratings).forEach(key => {
            if (ratings[key] === 0) {
                newErrors[key] = `Please rate our ${key.replace(/_/g, ' ')}`;
            }
        });

        if (formData.contact_number && !/^\d{10}$/.test(formData.contact_number.trim())) {
            newErrors.contact_number = 'Please enter a valid 10-digit number';
        }

        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (userCaptcha !== captcha.answer) {
            newErrors.captcha = 'Incorrect CAPTCHA answer';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const ratingChanged = (newRating, name) => {
        setRatings(prev => ({
            ...prev,
            [name]: newRating
        }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'contact_number' && !/^\d*$/.test(value)) return;
        
        setFormData(prev => ({
            ...prev,
            [id]: value,
        }));
        if (errors[id]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[id];
                return newErrors;
            });
        }
    };

    const handleRadioChange = (e) => {
        setFormData(prev => ({
            ...prev,
            coming_since_years: e.target.value,
        }));
        if (errors.coming_since_years) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.coming_since_years;
                return newErrors;
            });
        }
    };

    const handleDateChange = (date) => {
        setFormData(prev => ({
            ...prev,
            testing_date: date,
        }));
        if (errors.testing_date) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.testing_date;
                return newErrors;
            });
        }
    };

    const formatDateForEmail = (date) => {
        if (!date) return '';
        return new Date(date).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const sendEmailToInfo = async (feedbackData) => {
        try {
            const emailData = {
                date: new Date().toLocaleString('en-GB', { timeZone: 'Asia/Kolkata' }),
                client_ip: formData.user_ip,
                name: feedbackData.name,
                email: feedbackData.email || '',
                contact_number: feedbackData.contact_number || '',
                location: feedbackData.location || '',
                testing_date: formatDateForEmail(feedbackData.testing_date),
                coming_since_years: feedbackData.coming_since_years,
                sample_collection: ratings.sample_collection,
                timely_delivery: ratings.timely_delivery,
                quality_report: ratings.quality_report,
                satisfaction_level: ratings.satisfaction_level,
                comments: feedbackData.comments || '',
            };

            await axios.post('https://backend.dangsccg.co.in/api/feedback-send-email-to-info/', emailData);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const formatDate = (date) => {
            if (!date) return null;
            const d = new Date(date);
            return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
        };

        try {
            const submissionData = {
                ...formData,
                testing_date: formatDate(formData.testing_date),
                ...ratings,
            };

            await axios.post('https://backend.dangsccg.co.in/api/api/feedback/', submissionData);
            await sendEmailToInfo(formData);
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error submitting feedback:', error);
            alert('An error occurred while submitting the feedback. Please try again.');
        }
    };

    return (
        <div className={`${styles.feedbackForm} ${isSubmitted ? styles.blurred : ''}`}>
            <h1>Customer Feedback</h1>
            
            {isSubmitted && (
                <div className={styles.thankYouPopup}>
                    <div className={styles.thankYouIcon}>
                        <Check size={48} className="text-green-500" />
                    </div>
                    <h2>Thank you for your feedback!</h2>
                    <p>Redirecting in {countdown} seconds...</p>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                {/* Personal Information */}
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                        />
                        {errors.name && (
                            <div className={styles.error}>
                                <AlertCircle size={16} />
                                {errors.name}
                            </div>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">
                            <div className="flex items-center gap-2">
                                <Mail size={16} />
                                Email Address
                            </div>
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                        />
                        {errors.email && (
                            <div className={styles.error}>
                                <AlertCircle size={16} />
                                {errors.email}
                            </div>
                        )}
                    </div>
                </div>

                {/* Contact and Location */}
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="contact_number">
                            <div className="flex items-center gap-2">
                                <Phone size={16} />
                                Contact Number
                            </div>
                        </label>
                        <input
                            type="tel"
                            id="contact_number"
                            value={formData.contact_number}
                            onChange={handleChange}
                            placeholder="Your 10-digit mobile number"
                            maxLength="10"
                        />
                        {errors.contact_number && (
                            <div className={styles.error}>
                                <AlertCircle size={16} />
                                {errors.contact_number}
                            </div>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="location">
                            <div className="flex items-center gap-2">
                                <MapPin size={16} />
                                Select Location
                            </div>
                        </label>
                        <select
                            id="location"
                            value={formData.location}
                            onChange={handleChange}
                        >
                            <option value="">Choose a location</option>
                            {locations.map(loc => (
                                <option key={loc} value={loc}>{loc}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Date and Duration */}
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <div className={styles.DateLabelDivBLock}>
                            <label htmlFor="testing_date">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    Date of Testing <span className="text-red-500">*</span>
                                </div>
                            </label>
                            <DatePicker
                                selected={formData.testing_date}
                                onChange={handleDateChange}
                                dateFormat="dd-MM-yyyy"
                                maxDate={new Date()}
                                placeholderText="Select your testing date"
                                className={styles.datePicker}
                            />
                            {errors.testing_date && (
                                <div className={styles.error}>
                                    <AlertCircle size={16} />
                                    {errors.testing_date}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label>
                            Years with our laboratory <span className="text-red-500">*</span>
                        </label>
                        <div className={styles.radioGroup}>
                            {['1-5', '5-10', '10-15', '15-20', '>20'].map((value) => (
                                <label key={value} className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="coming_since_years"
                                        value={value}
                                        checked={formData.coming_since_years === value}
                                        onChange={handleRadioChange}
                                    />
                                    <span>{value} years</span>
                                </label>
                            ))}
                        </div>
                        {errors.coming_since_years && (
                            <div className={styles.error}>
                                <AlertCircle size={16} />
                                {errors.coming_since_years}
                            </div>
                        )}
                    </div>
                </div>

                {/* Rating Section */}
                <div className={styles.ratingSection}>
                    <h3 className={styles.rateServicesTitle}>
                        <Star className="inline-block mr-2" size={24} />
                        Please Rate our Services
                    </h3>
                    
                    <div className={styles.ratingContainer}>
                        {ratingCategories.map(({ key, label }) => (
                            <div key={key}>
                                <div className={styles.ratingRow}>
                                    <div className={styles.InnerRatingRow}>
                                        <span className={styles.ratingLabel}>
                                            {label} <span className="text-red-500">*</span>
                                        </span>
                                    </div>
                                    <div className={styles.starsWrapper}>
                                        <StarRating
                                            value={ratings[key]}
                                            onChange={(rating) => ratingChanged(rating, key)}
                                        /></div>
                                        </div>
                                        {errors[key] && (
                                            <div className={styles.error}>
                                                <AlertCircle size={16} />
                                                {errors[key]}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
        
                        {/* Comments Section */}
                        <div className={styles.formGroup}>
                            <label htmlFor="comments">
                                Suggestions for Improvement
                            </label>
                            <textarea
                                id="comments"
                                value={formData.comments}
                                onChange={handleChange}
                                placeholder="Please share your valuable suggestions to help us serve you better..."
                                className={styles.textarea}
                            />
                        </div>
        
                        {/* CAPTCHA Section */}
                        <div className={styles.formGroup}>
                            <label>Verification</label>
                            <div className={styles.captchaContainer}>
                                <span className={styles.captchaText}>{captcha.question}</span>
                                <button
                                    type="button"
                                    onClick={generateCaptcha}
                                    className={styles.refreshButton}
                                >
                                    <RefreshCw size={16} />
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
                            {errors.captcha && (
                                <div className={styles.error}>
                                    <AlertCircle size={16} />
                                    {errors.captcha}
                                </div>
                            )}
                        </div>
        
                        {/* Submit Button */}
                        <div className={styles.feedbackFormSubmitButton}>
                            <button type="submit" className={styles.submitButton}>
                                Submit Feedback
                            </button>
                        </div>
                    </form>
                </div>
            );
        };
        
        export default Feedback;