import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './Career.css';

const Career = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile_no: '',
        email: '',
        position: '',
        experience: '',
        ctc: '',
        resume: null
    });
    const [showModal, setShowModal] = useState(false);
    const [captcha, setCaptcha] = useState({ question: '', answer: '' });
    const [userCaptcha, setUserCaptcha] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        const question = `${num1} + ${num2} = ?`;
        const answer = (num1 + num2).toString();
        setCaptcha({ question, answer });
        setUserCaptcha('');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            resume: e.target.files[0]
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.mobile_no) newErrors.mobile_no = 'Mobile number is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.position) newErrors.position = 'Position is required';
        if (!formData.experience) newErrors.experience = 'Experience is required';
        if (!formData.ctc) newErrors.ctc = 'Expected CTC is required';
        if (!formData.resume) newErrors.resume = 'Resume is required';
        if (userCaptcha !== captcha.answer) newErrors.captcha = 'Incorrect CAPTCHA. Please try again.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const form = new FormData();
        for (const key in formData) {
            form.append(key, formData[key]);
        }

        try {
            const response = await axios.post('https://api.dangsccg.co.in/api/api/careers/', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
                navigate('/');
            }, 3000);
        } catch (error) {
            console.error('Error submitting form:', error);
            if (error.response && error.response.status === 429) {
                setErrors({ ...errors, general: 'Too many requests. Please try again later.' });
            } else if (error.response && error.response.data) {
                setErrors(error.response.data);
            }
        }
    };

    return (
        <div className="career-form">
            <h2>Careers</h2>
            <p>
                Dr. Dangs Lab welcomes and encourages application from every individual trained in various fields of lab medicine. We believe that hiring the right talent would go a long way in creating impact for our organization as well as the individual. As a Company, we lay strong emphasis on quality standards, stellar services & personalized care. We are committed to hiring individuals who demonstrate integrity, excellence, initiative, problem solving qualities and leadership.
            </p>
            <p>
                Join our team and grow with us!
            </p>
            <p>
                Fill up the form below and our HR Team will contact you in case of a vacancy:
            </p>
            <form onSubmit={handleSubmit}>
                <div className='CareerFormMaindIv'>
                    <div className='CareerFormInnerDIv'>
                        <label>Name*:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        {errors.name && <div className="error">{errors.name}</div>}
                    </div>
                    <div className='CareerFormInnerDIv'>
                        <label>Mobile No.*:</label>
                        <input type="text" name="mobile_no" value={formData.mobile_no} onChange={handleChange} required />
                        {errors.mobile_no && <div className="error">{errors.mobile_no}</div>}
                    </div>
                    <div className='CareerFormInnerDIv'>
                        <label>Email Address*:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>
                </div>
                <label>Position Applied For*:</label>
                <input type="text" name="position" value={formData.position} onChange={handleChange} required />
                {errors.position && <div className="error">{errors.position}</div>}

                <label>Total Work Experience*:</label>
                <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />
                {errors.experience && <div className="error">{errors.experience}</div>}

                <label>Expected CTC*:</label>
                <input type="text" name="ctc" value={formData.ctc} onChange={handleChange} required />
                {errors.ctc && <div className="error">{errors.ctc}</div>}

                <label>Upload Resume (supported file types are .pdf):</label>
                <input type="file" name="resume" onChange={handleFileChange} required />
                {errors.resume && <div className="error">{errors.resume}</div>}

                <div className="captcha-container">
                    <label>CAPTCHA:</label>
                    <span className="captcha-text">{captcha.question}</span>
                    <button type="button" onClick={generateCaptcha} className="refresh-button">
                        Refresh
                    </button>
                    <input
                        type="text"
                        value={userCaptcha}
                        onChange={(e) => setUserCaptcha(e.target.value)}
                        placeholder="Enter the answer"
                        className="captcha-input"
                    />
                    {errors.captcha && <div className="error">{errors.captcha}</div>}
                </div>

                <button type="submit">Submit</button>
            </form>
            {showModal && (
                <Modal>
                    <ModalContent>
                        <h3>Thank You!</h3>
                        <p>Your application has been submitted successfully.</p>
                    </ModalContent>
                </Modal>
            )}
        </div>
    );
};

export default Career;

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    max-width: 400px;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;