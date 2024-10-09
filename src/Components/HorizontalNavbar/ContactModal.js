import React from 'react';
import './ContactModal.css'; // Import the CSS for styling the modal
import PhoneCall from '../../PhotosAndLogos/PhoneCallContactUsbutton.webp';
import GmailContat from '../../PhotosAndLogos/GmailContactus.webp';
import Whatsapp from '../../PhotosAndLogos/WHatsappContactUs.webp';

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Only render modal if isOpen is true

    return (
        <div className="contact-modal">
            <div className="contact-modal-content">
                <h3>Contact Options</h3>
                <div className="contact-options">
                    <div className="contact-option">
                    <a href="tel:9999992020">
                            <img src={PhoneCall} alt="Phone" />
                            <p>Phone</p>
                        </a>
                    </div>
                    <div className="contact-option">
                    <a href="mailto:info@drdangslab.com">
                            <img src={GmailContat} alt="Gmail" />
                            <p>Gmail</p>
                        </a>
                    </div>
                    <div className="contact-option">
                    <a href="https://api.whatsapp.com/send?phone=917303895093">
                            <img src={Whatsapp} alt="Whatsapp" />
                            <p>Whatsapp</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact-modal-overlay" onClick={onClose}></div>
        </div>
    );
};

export default ContactModal;
