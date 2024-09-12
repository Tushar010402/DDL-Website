import React from 'react';
import './RightSideButton.css';

const RightSideButton = () => {   
    return (
        <div className="right-side-buttons">
            <button className="right-button" id='BUTTON1ID' onClick={() => window.location.href = '/HomeCollectionServices'}>
                BOOK A TEST
            </button>
            <button className="right-button" id='BUTTON2ID' onClick={() => window.location.href = '/health-checkup-packages'}>TEST PACKAGES</button>
        </div>
    );
};

export default RightSideButton;
