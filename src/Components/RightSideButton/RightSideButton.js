import React from 'react';
import { useLocation } from 'react-router-dom';
import './RightSideButton.css';

const RightSideButton = () => {
    const location = useLocation();

    // Determine if the current page is '/HomeCollectionServices'
    const isHomeCollectionServices = location.pathname === '/HomeCollectionServices';

    return (
        <div 
            className={`right-side-buttons ${isHomeCollectionServices ? 'home-collection-style' : ''}`}
        >
            <button
                className="right-button"
                id='BUTTON1ID'
                style={{ display: isHomeCollectionServices ? 'none' : 'block' }}
                onClick={() => window.location.href = '/HomeCollectionServices'}
            >
                BOOK A TEST
            </button>
            <button className="right-button" id='BUTTON2ID' onClick={() => window.location.href = '/health-checkup-packages'}>
                TEST PACKAGES
            </button>
        </div>
    );
};

export default RightSideButton;
