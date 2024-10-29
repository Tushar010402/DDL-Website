// Feedback.js
import React, { useState, useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import './Feedback.css';

const Feedback = () => {
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

  // Fetch user IP address
  const fetchUserIp = async () => {
    try {
      const response = await axios.get('https://api64.ipify.org?format=json');
      setFormData((prevFormData) => ({
        ...prevFormData,
        user_ip: response.data.ip,
      }));
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdownInterval);
    }
  }, [isSubmitted]);

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
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.testing_date) newErrors.testing_date = 'Date of Testing is required';
    if (!formData.coming_since_years) newErrors.coming_since_years = 'This field is required';
    if (ratings.sample_collection === 0) newErrors.sample_collection = 'Please rate our Sample Collection Service';
    if (ratings.timely_delivery === 0) newErrors.timely_delivery = 'Please rate our Timely Delivery of Reports';
    if (ratings.quality_report === 0) newErrors.quality_report = 'Please rate our Quality of Report';
    if (ratings.satisfaction_level === 0) newErrors.satisfaction_level = 'Please rate our Satisfaction Level';
    if (userCaptcha !== captcha.answer) newErrors.captcha = 'Incorrect CAPTCHA. Please try again.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const ratingChanged = (newRating, name) => {
    setRatings((prevRatings) => ({ ...prevRatings, [name]: newRating }));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      coming_since_years: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      testing_date: date,
    });
  };

  // Format date for email (dd/MM/yyyy)
  const formatDateForEmail = (date) => {
    if (!date) return '';
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-GB', options);
  };

  // Send email to info@drdangslab.com with feedback details
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
        sample_collection: feedbackData.sample_collection,
        timely_delivery: feedbackData.timely_delivery,
        quality_report: feedbackData.quality_report,
        satisfaction_level: feedbackData.satisfaction_level,
        comments: feedbackData.comments || '',
      };

      await axios.post('https://backend.dangsccg.co.in/api/feedback-send-email-to-info/', emailData);

      console.log('Email sent to info@drdangslab.com');
    } catch (error) {
      console.error('Error sending email to info@drdangslab.com:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formatDate = (date) => {
      const d = new Date(date);
      let day = '' + d.getDate();
      let month = '' + (d.getMonth() + 1);
      const year = d.getFullYear();

      if (day.length < 2) day = '0' + day;
      if (month.length < 2) month = '0' + month;

      return [day, month, year].join('-');
    };

    const dataToSubmit = {
      ...formData,
      testing_date: formData.testing_date ? formatDate(formData.testing_date) : null,
      ...ratings,
    };

    try {
      // Send data to backend API to save feedback
      await axios.post('https://backend.dangsccg.co.in/api/api/feedback/', dataToSubmit);

      // Send email to info@drdangslab.com
      await sendEmailToInfo({ ...formData, ...ratings });

      setIsSubmitted(true);
      setCountdown(3);
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        setErrors({ ...errors, general: 'Too many requests. Please try again later.' });
      } else if (error.response && error.response.data) {
        setErrors(error.response.data);
      } else {
        console.error('Error submitting feedback', error);
      }
    }
  };

    return (
        <>
            <div className={`feedback-form ${isSubmitted ? 'blurred' : ''}`}>
                <h1>Feedback Form</h1>
                {isSubmitted && (
                    <div className="thank-you-popup">
                        <h2>Thank you for your feedback!</h2>
                        <p>You will be redirected to the home page in {countdown} seconds.</p>
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <div>
                                <label htmlFor="name">Name*</label>
                                <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                                {errors.name && <div className="error">{errors.name}</div>}
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
                                {errors.email && <div className="error">{errors.email}</div>}
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <div>
                                <label htmlFor="contact_number">Contact Number</label>
                                <input type="tel" id="contact_number" value={formData.contact_number} onChange={handleChange} placeholder="Contact Number" />
                                {errors.contact_number && <div className="error">{errors.contact_number}</div>}
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                <label htmlFor="location">Locations</label>
                                <select id="location" value={formData.location} onChange={handleChange}>
    <option value="">-- Select --</option>
    <option value="SDA">SDA</option>
    <option value="Gurugram">Gurugram</option>
    <option value="Punjabi Bagh">Punjabi Bagh</option>
    <option value="New Friends Colony">New Friends Colony</option>
    <option value="Vasant Kunj">Vasant Kunj</option>
    <option value="Kamla Nagar">Kamla Nagar</option>
    <option value="Greater Kailash">Greater Kailash</option>
    <option value="Vasant Vihar">Vasant Vihar</option>
</select>
                                {errors.location && <div className="error">{errors.location}</div>}
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <div>
                                <label htmlFor="testing_date">Date of Testing</label>
                                <DatePicker
                                    selected={formData.testing_date}
                                    onChange={handleDateChange}
                                    dateFormat="dd-MM-yyyy"
                                    placeholderText="Date of Testing (dd-MM-yyyy)"
                                    maxDate={new Date()}
                                />
                                {errors.testing_date && <div className="error">{errors.testing_date}</div>}
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                <label>You are coming to our laboratory since (in years)*</label>
                                <div className="radio-group">
                                    <label><input type="radio" name="coming_since_years" value="1-5" onChange={handleRadioChange} /> 1-5</label>
                                    <label><input type="radio" name="coming_since_years" value="5-10" onChange={handleRadioChange} /> 5-10</label>
                                    <label><input type="radio" name="coming_since_years" value="10-15" onChange={handleRadioChange} /> 10-15</label>
                                    <label><input type="radio" name="coming_since_years" value="15-20" onChange={handleRadioChange} /> 15-20</label>
                                    <label><input type="radio" name="coming_since_years" value=">20" onChange={handleRadioChange} /> &gt;20</label>
                                </div>
                                {errors.coming_since_years && <div className="error">{errors.coming_since_years}</div>}
                            </div>
                        </div>
                    </div>
                  
                    <div className="form-group">
                        <div>
                            <label id='MainLabelFeedback'>Please Rate our Services:</label>
                            <div className="rating-group">
                                <div className='FeedbackLabel'>
                                    <label>Sample Collection Service*</label>
                                </div>
                                <ReactStars
                                    name="sample_collection"
                                    starCount={5}
                                    value={ratings.sample_collection}
                                    onChange={(newRating) => ratingChanged(newRating, 'sample_collection')}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                                {errors.sample_collection && <div className="error">{errors.sample_collection}</div>}
                            </div>
                            <div className="rating-group">
                                <div className='FeedbackLabel'>
                                    <label>Timely delivery of reports*</label>
                                </div>
                                <ReactStars
                                    name="timely_delivery"
                                    starCount={5}
                                    value={ratings.timely_delivery}
                                    onChange={(newRating) => ratingChanged(newRating, 'timely_delivery')}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                                {errors.timely_delivery && <div className="error">{errors.timely_delivery}</div>}
                            </div>
                            <div className="rating-group">
                                <div className='FeedbackLabel'>
                                    <label>Quality of report*</label>
                                </div>
                                <ReactStars
                                    name="quality_report"
                                    starCount={5}
                                    value={ratings.quality_report}
                                    onChange={(newRating) => ratingChanged(newRating, 'quality_report')}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                                {errors.quality_report && <div className="error">{errors.quality_report}</div>}
                            </div>
                            <div className="rating-group">
                                <div className='FeedbackLabel'>
                                    <label>Satisfaction level of our services*</label>
                                </div>
                                <ReactStars
                                    name="satisfaction_level"
                                    starCount={5}
                                    value={ratings.satisfaction_level}
                                    onChange={(newRating) => ratingChanged(newRating, 'satisfaction_level')}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                                {errors.satisfaction_level && <div className="error">{errors.satisfaction_level}</div>}
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="comments">Suggestion for further improvements</label>
                            <textarea id="comments" value={formData.comments} onChange={handleChange} placeholder="Comment"></textarea>
                            {errors.comments && <div className="error">{errors.comments}</div>}
                        </div>
                    </div>
                    
                    <div className="form-group">
            <div>
              <label>CAPTCHA</label>
              <div className="captcha-container">
                <span className="captcha-text">{captcha.question}</span>
                <button type="button" onClick={generateCaptcha} className="refresh-button">
                  Refresh
                </button>
              </div>
              <input
                type="text"
                value={userCaptcha}
                onChange={(e) => setUserCaptcha(e.target.value)}
                placeholder="Enter the answer"
                className="captcha-input"
              />
              {errors.captcha && <div className="error">{errors.captcha}</div>}
            </div>
          </div>
          <div className="FeedbackFormSubmitButton">
            <button type="submit" className="submit-button">SUBMIT</button>
          </div>
        </form>
            </div>
        </>
    );
};

export default Feedback;