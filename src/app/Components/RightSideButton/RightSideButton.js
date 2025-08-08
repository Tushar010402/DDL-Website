"use client";

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import styles from './RightSideButton.module.css';

const RightSideButton = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Determine if the current page is '/HomeCollectionServices'
  const isHomeCollectionServices = pathname === '/HomeCollection';

  return (
    <div
      className={`${styles.rightSideButtons} ${
        isHomeCollectionServices ? styles.homeCollectionStyle : ''
      }`}
    >
      <button
        className={styles.rightButton}
        id='BUTTON1ID'
        style={{ display: isHomeCollectionServices ? 'none' : 'block' }}
        onClick={() => router.push('/HomeCollection')}
      >
        BOOK A TEST
      </button>
      <button 
        className={styles.rightButton} 
        id='BUTTON2ID' 
        onClick={() => router.push('/health-checkup-packages')}
      >
        TEST PACKAGES
      </button>
    </div>
  );
};

export default RightSideButton;