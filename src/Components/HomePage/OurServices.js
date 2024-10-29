import './OurServices.css';
import React from 'react';
import FeaturesHomePage from '../../PhotosAndLogos/doctor-icon-vector.png';
import PatientCareOurPromise from '../../PhotosAndLogos/Patient-care.jpg';
import PediatricOurPromise from '../../PhotosAndLogos/pediatric-prowess.jpg';
import SuperiorOurPromise from '../../PhotosAndLogos/Superior-Technology.jpg';

const OurService = () => {
    return (
        <div className='OurPromisesHomePage'>
            <div className='OurPromiseHomePageMainHeading'>
                <h1>OUR PROMISE</h1>
                <hr />
            </div>

            <div className='OurPromisesFLex'>
            <div className='SSSSSSSSSSSSSAAAAAAAAAAAAA'>
                <div className='OurFirstPromiseDIvMain'>
                   
                    <div className="flip-container">
                        <div className='flip-front'>
                            <div className='OurFirstPromiseDivIConSIde'>
                                <img src={FeaturesHomePage} alt="Quality Icon" />
                            </div>
                            <div className='OurFirstPromiseTextDIv'>
                                <h2>Quintessential Quality</h2>
                                <p>Robust Quality Assurance Systems</p>
                            </div>
                        </div>
                        <div className='flip-back'>
                            <h2>Quintessential Quality</h2>
                            <ul>
                                <li>Triple Quality Check Policy, unique to the lab, is handled exclusively by our expert team of doctors.</li>
                            </ul>
                        </div>
                    </div>
                </div>
               

                <div className='OurFirstPromiseDIvMain'>
                    <div className="flip-container">
                        <div className='flip-front'>
                            <div className='OurFirstPromiseDivIConSIde'>
                                <img src={PatientCareOurPromise} alt="Patient Care Icon" />
                            </div>
                            <div className='OurFirstPromiseTextDIv'>
                                <h2>Personalized Patient Care</h2>
                                <p>"You"<br /><strong>Our Top Priority</strong></p>
                            </div>
                        </div>
                        <div className='flip-back'>
                            <h2>Personalized Patient Care</h2>
                            <ul>
                                <li>Low/No-Queue Reception.</li>
                                <li>Monitored Air-Quality.</li>
                                <li>Senior Citizen Friendly.</li>
                                <li>Wheel-Chair Accessible.</li>
                                <li>Critical Callouts for emergency lab values.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                <div className='SSSSSSSSSSSSSAAAAAAAAAAAAA'>
                <div className='OurFirstPromiseDIvMain'>
                
                    <div className="flip-container">
                        <div className='flip-front'>
                            <div className='OurFirstPromiseDivIConSIde'>
                                <img src={SuperiorOurPromise} alt="Technology Icon" />
                            </div>
                            <div className='OurFirstPromiseTextDIv'>
                                <h2>Superior Technology</h2>
                                <p>Results Par <br /><strong>Excellence</strong></p>
                            </div>
                        </div>
                        <div className='flip-back'>
                            <h2>Superior Technology</h2>
                            <ul>
                                <li>Automation most suited for our population base.</li>
                                <li>Specialists in every field.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='OurFirstPromiseDIvMain'>
                    <div className="flip-container">
                        <div className='flip-front'>
                            <div className='OurFirstPromiseDivIConSIde'>
                                <img src={PediatricOurPromise} alt="Pediatric Icon" />
                            </div>
                            <div className='OurFirstPromiseTextDIv'>
                                <h2>Paediatric Prowess</h2>
                                <p>Caring for the <br /><strong>Little Ones</strong></p>
                            </div>
                        </div>
                        <div className='flip-back'>
                            <h2>Paediatric Prowess</h2>
                            <ul>
                                <li>Specialised paediatric phlebotomists, including Dr. Dang (on request).</li>
                                <li>Special Pain-Less Needles for Babies.</li>
                                <li>Wide array of Baby-Tests.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;
