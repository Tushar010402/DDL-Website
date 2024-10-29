// Footer.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Footer.css';
import 'et-line/style.css';
import locationIcon from '../../PhotosAndLogos/location-icon.png';
import Facebook from '../../PhotosAndLogos/fb-footer-smo.png';
import Instagram from '../../PhotosAndLogos/insta-footer-smo.png';
import Twitter from '../../PhotosAndLogos/twitter-footer-smo.png';
import YouTube from '../../PhotosAndLogos/youtube-footer-smo.png';
import LinkedIn from '../../PhotosAndLogos/linkedin-footer-smo.png';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    comment: '',
  });
  const [userIp, setUserIp] = useState('');
  const [captcha, setCaptcha] = useState({ question: '', answer: '' });
  const [userCaptcha, setUserCaptcha] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await axios.get('https://api64.ipify.org?format=json');
        setUserIp(response.data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIp();
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate Mobile Number to allow only digits
    if (name === 'phone') {
      if (!/^\d*$/.test(value)) {
        return; // Prevent non-numeric input
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
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
    let valid = true;
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required.';
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Mobile number must be exactly 10 digits.';
      valid = false;
    }

    if (userCaptcha !== captcha.answer) {
      newErrors.captcha = 'Incorrect CAPTCHA. Please try again.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Function to send email to info@drdangslab.com
  const sendEmailToInfo = async (formData) => {
    try {
      const emailData = {
        date: new Date().toLocaleString('en-GB', { timeZone: 'Asia/Kolkata' }),
        client_ip: userIp,
        name: formData.name,
        email: formData.email || '',
        mobile_number: formData.phone,
        subject: formData.subject || '',
        message: formData.comment || '',
      };

      const response = await axios.post('https://backend.dangsccg.co.in/api/footer-send-email-to-info/', emailData);

      console.log('Email sent to info@drdangslab.com:', response.data);
    } catch (error) {
      console.error('Error sending email to info@drdangslab.com:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return; // Prevent multiple submissions
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send data to the backend API to handle and send email
      const response = await axios.post(
        'https://backend.dangsccg.co.in/api/api/enquiries/',
        { ...formData, ip: userIp },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        // Send email to info@drdangslab.com
        await sendEmailToInfo(formData);

        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          comment: '',
        });
        setUserCaptcha('');
        generateCaptcha();
        setErrors({});
      }
    } catch (error) {
      console.error('Error sending message:', error);
      if (error.response && error.response.status === 429) {
        alert('Too many requests. Please try again later.');
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

    return (
        <>
            <div className="footer-main-div">
                <div className="footer-locations">
                    <h2>Our Locations <img src={locationIcon} alt="Location Icon" /></h2>
                    <p className="closed-text">(Sundays closed)</p>
                    <div className="LocationsFooterMainDiv">
                        <div className="FirstRowInFooterLocations">
                            <div className="location-item">
                                <div className="FooterNAmeMainDIv">
                                    <div className="FooterNameDIv">
                                        <i className="icon-map icon-medium text-deep-pink padding-5px-top"></i>
                                    </div>
                                    <div>
                                        <h3>SDA</h3>
                                        <p>C2/1, SDA Aurobindo Marg, Next to Aurobindo Market, New Delhi-110016</p>
                                        <p><a href="tel:01145004200">011-45004200</a>, <a href="tel:+919999992020">+91-9999992020</a></p>
                                        <p>Timing: 7:30am to 7:00pm <br /> (Monday-Saturday)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="location-item">
                                <div className="FooterNAmeMainDIv">
                                    <div className="FooterNameDIv">
                                        <i className="icon-map icon-medium text-deep-pink padding-5px-top"></i>
                                    </div>
                                    <div>
                                        <h3>Punjabi Bagh</h3>
                                        <p>Building No. 25, Ground Floor, Central Market West Punjabi Bagh, New Delhi-110026</p>
                                        <p><a href="tel:+919810678165">+91-9810678165</a></p>
                                        <p>Timing: 8:00am to 6:00pm <br />(Monday-Saturday)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="location-item">
                                <div className="FooterNAmeMainDIv">
                                    <div className="FooterNameDIv">
                                        <i className="icon-map icon-medium text-deep-pink padding-5px-top"></i>
                                    </div>
                                    <div>
                                        <h3>Vasant Kunj</h3>
                                        <p>12/13 G.F., Vasant Arcade, Nelson Mandela Marg, Vasant Kunj, New Delhi-110070</p>
                                        <p><a href="tel:+919810678165">+91-9910589234</a></p>
                                        <p>Timing: 8:00am to 6:00pm <br />(Monday-Saturday)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="location-item">
                                <div className="FooterNAmeMainDIv">
                                    <div className="FooterNameDIv">
                                        <i className="icon-map icon-medium text-deep-pink padding-5px-top"></i>
                                    </div>
                                    <div>
                                        <h3>Greater Kailash</h3>
                                        <p>GF N36 GK1 <br /> New Delhi–110048</p>
                                        <p><a href="tel:+919810678165">+91-9910313567</a></p>
                                        <p>Timing-8:00am to 4:00pm <br />(Monday-Saturday)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="SecondRowInFooterLocations">
                            <div className="location-item">
                                <div className="FooterNAmeMainDIv">
                                    <div className="FooterNameDIv">
                                        <i className="icon-map icon-medium text-deep-pink padding-5px-top"></i>
                                    </div>
                                    <div>
                                        <h3>Gurugram</h3>
                                        <p>Palm Springs Plaza, Golf Course Road Sector-53, Gurugram-122001</p>
                                        <p><a href="tel:+919818881065">+91-9818881065</a></p>
                                        <p>Timing: 8:00am to 6:00pm <br />(Monday-Saturday)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="location-item">
                                <div className="FooterNAmeMainDIv">
                                    <div className="FooterNameDIv">
                                        <i className="icon-map icon-medium text-deep-pink padding-5px-top"></i>
                                    </div>
                                    <div>
                                        <h3>New Friends Colony</h3>
                                        <p>D-851, Ground Floor, New Friends Colony, New Delhi-110025</p>
                                        <p><a href="tel:+919311225665">+91-9311225665</a></p>
                                        <p>Timing: 8:00am to 6:00pm<br />(Monday-Saturday)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="location-item">
                                <div className="FooterNAmeMainDIv">
                                    <div className="FooterNameDIv">
                                        <i className="icon-map icon-medium text-deep-pink padding-5px-top"></i>
                                    </div>
                                    <div>
                                        <h3>Kamla Nagar</h3>
                                        <p>UA No-25, Ground Floor, Jawahar Nagar, Malka Ganj, New Delhi-110007</p>
                                        <p><a href="tel:+919311225665">+91-9289157434</a></p>
                                        <p>Timing: 8:00am to 6:00pm <br />(Monday-Saturday)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="location-item">
                                <div className="FooterNAmeMainDIv">
                                    <div className="FooterNameDIv">
                                        <i className="icon-map icon-medium text-deep-pink padding-5px-top"></i>
                                    </div>
                                    <div>
                                        <h3>Vasant Vihar</h3>
                                        <p>E 13/11 Basement, Vasant Vihar New Delhi - 110057</p>
                                        <p><a href="tel:+919311225665">+91-9599191590</a></p>
                                        <p>Timing- 05:00pm to 8:30pm <br />(Monday-Saturday)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Main">
          <div className="footer-contact-form">
            <h2>We would love to hear from you!</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="errorMessage">{errors.name}</p>}
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Mobile Number*"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <p className="errorMessage">{errors.phone}</p>}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                name="comment"
                placeholder="Your Message"
                value={formData.comment}
                onChange={handleChange}
              ></textarea>
              <div className="footer-row1">
                <div className="footer-inputFeild">
                  <label>CAPTCHA</label>
                  <div className="footer-captchaContainer">
                    <span className="footer-captchaText">{captcha.question}</span>
                    <button type="button" onClick={generateCaptcha} className="refreshButton">
                      Refresh
                    </button>
                  </div>
                  <input
                    type="text"
                    value={userCaptcha}
                    onChange={(e) => setUserCaptcha(e.target.value)}
                    placeholder="Enter the answer"
                    className="footer-captchaInput"
                    required
                  />
                  {errors.captcha && <p className="errorMessage">{errors.captcha}</p>}
                </div>
              </div>
              <div className="Footer-Submit-Button">
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
                    <div className="ThirdcolumnFOoter">
                        <button className="link-button"><h3>List of Holidays</h3></button>
                        <p>Find us on</p>
                    </div>
                    <div className="FooterSocialIcon">
    <span>
        <a href="https://www.facebook.com/DrDangsLab/" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Facebook" />
        </a>
    </span>
    <span>
        <a href="https://www.instagram.com/drdangs/?hl=en" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
        </a>
    </span>
    <span>
        <a href="https://x.com/drdangslab" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt="Twitter" />
        </a>
    </span>
    <span>
        <a href="https://www.youtube.com/channel/UCt-iw59KbbSVMRNdzQsorTg" target="_blank" rel="noopener noreferrer">
            <img src={YouTube} alt="YouTube" />
        </a>
    </span>
    <span>
        <a href="https://in.linkedin.com/company/drdangslab/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
        </a>
    </span>
</div>

                </div>
            </div>
            <div className="DisclaimerBelowFooter"><strong>IMPORTANT : </strong>  Dr. Dangs Lab does not resell through other websites. Please be aware of misleading advertisements.</div>
            <div className="LastInFooterDIvv">© 2019 Dr. Dangs | All Rights Reserved |</div>
        </>
    );
}

export default Footer;
