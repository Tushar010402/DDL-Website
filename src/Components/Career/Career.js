import React, { useState } from 'react';
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
    const navigate = useNavigate();

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', formData.name);
        form.append('mobile_no', formData.mobile_no);
        form.append('email', formData.email);
        form.append('position', formData.position);
        form.append('experience', formData.experience);
        form.append('ctc', formData.ctc);
        form.append('resume', formData.resume);

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
            }, 3000); // Display the modal for 3 seconds before redirecting
        } catch (error) {
            console.error('Error submitting form:', error);
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
                </div>
                <div className='CareerFormInnerDIv'>
                <label>Mobile No.*:</label>
                <input type="text" name="mobile_no" value={formData.mobile_no} onChange={handleChange} required />
</div>
<div className='CareerFormInnerDIv'>
                <label>Email Address*:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                </div>
                <label>Position Applied For*:</label>
                <input type="text" name="position" value={formData.position} onChange={handleChange} required />

                <label>Total Work Experience*:</label>
                <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />

                <label>Expected CTC*:</label>
                <input type="text" name="ctc" value={formData.ctc} onChange={handleChange} required />

                <label>Upload Resume (supported file types are .pdf):</label>
                <input type="file" name="resume" onChange={handleFileChange} required />

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
