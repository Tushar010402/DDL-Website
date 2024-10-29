import React from 'react';
import './VirtualTour.css';
import VirtualTourMainImage from '../../PhotosAndLogos/VirtualTourHeaderImage.webp';
import VirtualTour11 from '../../PhotosAndLogos/487x650.webp';
import VirtualTour12 from '../../PhotosAndLogos/VirtualTOur2.webp';
import VirtualTour13 from '../../PhotosAndLogos/VirtualTour3.webp';
import VirtualTour14 from '../../PhotosAndLogos/VirtualTOur4.webp';
import VirtualTour21 from '../../PhotosAndLogos/VirtualTOur21.webp';
import VirtualTour22 from '../../PhotosAndLogos/VirtualTOur22.webp';
import VirtualTour31 from '../../PhotosAndLogos/VirtualTOur31.webp';
import VirtualTour32 from '../../PhotosAndLogos/VirtualTOur32.webp';
import VirtualTour33 from '../../PhotosAndLogos/VirtualTOur33.webp';
import VirtualTour41 from '../../PhotosAndLogos/VirtualTOur41.webp';
import VirtualTour42 from '../../PhotosAndLogos/VirtualTOur42.webp';

const VirtualTour = () => {
    return (
        <>
        <div className='VirtualTourMainDiv'>
            <div className='VirtualTour-main-banner'>
                <img src={VirtualTourMainImage} alt='Virtual Tour' className='VirtualTour-background-image' />
                <div className='VirtualTour-overlay'></div> {/* Black overlay */}
                <div className='VirtualTour-content-container'>
                    <div className='VirtualTour-text-content'>
                        <h2>Virtual Tour</h2>
                        <p>State of the art automation of the highest international standards, for unparalleled quality</p>
                    </div>
                </div>
            </div>

            <div className='VirtualTourImageMainDiv'>
                <div className='VirtualTour-First-Row-MainDiv'>
                    <div className='VirtualTourFirstImage'>
                        <img src={VirtualTour11} alt='Virtual Tour 1'/>
                    </div>
                    <div className='VirtualTourFirstImage' id='IDVirtualTourFirstImage'>
                        <img src={VirtualTour12} alt='Virtual Tour 2'/>
                    </div>
                    <div className='VirtualTourFirstImage' id='IDVirtualTourFirstImage12'>
                        <img src={VirtualTour13} alt='Virtual Tour 3'/>
                    </div>
                    <div className='VirtualTourFirstImage' id='IDVirtualTourFirstImage13'>
                        <img src={VirtualTour14} alt='Virtual Tour 4'/>
                    </div>
                </div>

                <div className='VirtualTour-First-Row-MainDiv'>
                    <div className='VirtualTourFirstImage' id='VirtualTourFirstImageID21'>
                        <img src={VirtualTour21} alt='Virtual Tour 1'/>
                    </div>
                    <div className='VirtualTourFirstImage' id='VirtualTourFirstImageID22'>
                        <img src={VirtualTour22} alt='Virtual Tour 2'/>
                    </div>
                  
                </div>


                <div className='VirtualTour-First-Row-MainDiv'>
                    <div className='VirtualTourFirstImage' id='VirtualTourFirstImageID31'>
                        <img src={VirtualTour31} alt='Virtual Tour 1'/>
                    </div>
                    <div className='VirtualTourFirstImage' id='VirtualTourFirstImageID32'>
                        <img src={VirtualTour32} alt='Virtual Tour 2'/>
                    </div>
                    <div className='VirtualTourFirstImage' id='VirtualTourFirstImageID33'>
                        <img src={VirtualTour33} alt='Virtual Tour 3'/>
                    </div>
                    
                </div>

                <div className='VirtualTour-First-Row-MainDiv'>
                    <div className='VirtualTourFirstImage' id='VirtualTourFirstImageID41'>
                        <img src={VirtualTour41} alt='Virtual Tour 1'/>
                    </div>
                    <div className='VirtualTourFirstImage' id='VirtualTourFirstImageID42'>
                        <img src={VirtualTour42} alt='Virtual Tour 2'/>
                    </div>
                    <div className='VirtualTourFirstImage' id='VirtualTourFirstImageID43'>
                       
                    </div>
                    <div className='VirtualTourFirstImage' id='VirtualTourFirstImageID44'>
                       
                    </div>
                    
                    
                </div>


            </div>
        </div>
        </>
    );
};

export default VirtualTour;
