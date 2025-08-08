"use client";

import Image from 'next/image';
import styles from './ContactModal.module.css';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.contactModal}>
      <div className={styles.contactModalContent}>
        <h3>Contact Options</h3>
        <div className={styles.contactOptions}>
          <div className={styles.contactOption}>
            <a href="tel:9999992020">
              <div className={styles.imageWrapper}>
                <Image 
                  src="/PhotosAndLogos/PhoneCallContactUsbutton.webp" 
                  alt="Phone"
                  width={45}
                  height={45}
                  priority
                />
              </div>
              <p>Phone</p>
            </a>
          </div>
          <div className={styles.contactOption}>
            <a href="mailto:info@drdangslab.com">
              <div className={styles.imageWrapper}>
                <Image 
                  src="/PhotosAndLogos/GmailContactus.webp" 
                  alt="Gmail"
                  width={45}
                  height={45}
                  priority
                />
              </div>
              <p>Gmail</p>
            </a>
          </div>
          <div className={styles.contactOption}>
            <a href="https://api.whatsapp.com/send?phone=917303895093">
              <div className={styles.imageWrapper}>
                <Image 
                  src="/PhotosAndLogos/WHatsappContactUs.webp" 
                  alt="Whatsapp"
                  width={45}
                  height={45}
                  priority
                />
              </div>
              <p>Whatsapp</p>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.contactModalOverlay} onClick={onClose}></div>
    </div>
  );
};

export default ContactModal;