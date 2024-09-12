import React from 'react';
import './LabImagesSection.css';
import FirststImage from '../../PhotosAndLogos/PERSONALISED-PATIENT-CENTRIC-CARE.jpg';
import SecondImageFirstRow from '../../PhotosAndLogos/AMBIENCEPAREXCELLENCE.jpg';
import ThirdImageFirstRow from '../../PhotosAndLogos/SERVICINGWITHASMILE.jpg';
import FirstImageSecondRow from '../../PhotosAndLogos/CRAFTINGEXPERIENCESCREATINGQUALITY.jpg';
import SecondImageSecondRow from '../../PhotosAndLogos/MEETOUREXPERTS.jpg';
import FirstImageThirdRow from '../../PhotosAndLogos/QUINTESSENTIALQUALITYDIAGNOSTICS.jpg';
import SecondImageThirdRow from '../../PhotosAndLogos/CARE-and-COMMITMENT.jpg';
import FirstImageFourthRow from '../../PhotosAndLogos/AUTOMATION-and-EXPERTISE.jpg';
import SecondImageFourthRow from '../../PhotosAndLogos/THE-DR-DANGS0LEGACY.jpg';
import ThirdImageFourthRow from '../../PhotosAndLogos/AWARDS-and-ACCOLADES.jpg';

const LabImagesSection = () => {
    return (
        <>
            <div className='LabimagesHomePageSectionMainDIv'>
                <div className='LabImageheadingdiv'>
                    <h2>A PATHOLOGY LAB CREATING BEAUTIFUL EXPERIENCES</h2>
                    <hr />
                </div>

                <div className='LabImageGridMainDiv'>
                    <div className='LabImage1stRow'>
                        <div className='LabImage1stimage'>
                            <img src={FirststImage} alt='PERSONALISED PATIENT-CENTRIC CARE' />
                            <div className='ImageOverlay'>
                                <div className='InnerOverlay'>
                            <hr></hr>
                                <p>PERSONALISED PATIENT-CENTRIC CARE</p>
                            </div>
                            </div>
                        </div>
                        <div className='LabImage1stimage'>
                            <img src={SecondImageFirstRow} alt='AMBIENCE PAR EXCELLENCE' />
                            <div className='ImageOverlay'>
                            <div className='InnerOverlay'>
                            <hr></hr>
                                <p>AMBIENCE PAR EXCELLENCE</p>
                            </div>
                            </div>
                        </div>
                        <div className='LabImage1stimage'>
                            <img src={ThirdImageFirstRow} alt='SERVICING WITH A SMILE' />
                            <div className='ImageOverlay'>
                            <div className='InnerOverlay'>
                            <hr></hr>
                                <p>SERVICING WITH A SMILE</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='LabImage1stRow'>
                        <div className='LabImage1stimage' id='LabImage1stimageID'>
                            <img src={FirstImageSecondRow} alt='CRAFTING EXPERIENCES, CREATING QUALITY' />
                            <div className='ImageOverlay' id='ImageOverLayID'>
                            <div className='InnerOverlay' id='InnerOverlayID'>
                            <hr></hr>
                                <p>CRAFTING EXPERIENCES, CREATING QUALITY</p>
                            </div>
                            </div>
                        </div>
                        <div className='LabImage1stimage'>
                            <img src={SecondImageSecondRow} alt='MEET OUR EXPERTS' />
                            <div className='ImageOverlay'>
                            <div className='InnerOverlay'>
                            <hr></hr>
                                <p>MEET OUR EXPERTS</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='LabImage1stRow'>
                        <div className='LabImage1stimage'>
                            <img src={FirstImageThirdRow} alt='QUINTESSENTIAL QUALITY DIAGNOSTICS' />
                            <div className='ImageOverlay'>
                            <div className='InnerOverlay'>
                            <hr></hr>
                                <p>QUINTESSENTIAL QUALITY DIAGNOSTICS</p>
                            </div>
                        </div>
                        </div>
                        <div className='LabImage1stimage' id='LabImage1stimageID'>
                            <img src={SecondImageThirdRow} alt='CARE & COMMITMENT' />
                            <div className='ImageOverlay' id='ImageOverLayID'>
                            <div className='InnerOverlay' id='InnerOverlayID'>
                            <hr></hr>
                                <p>CARE & COMMITMENT</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className='LabImage1stRow'>
                        <div className='LabImage1stimage'>
                            <img src={FirstImageFourthRow} alt='AUTOMATION & EXPERTISE' />
                            <div className='ImageOverlay'>
                            <div className='InnerOverlay'>
                            <hr></hr>
                                <p>AUTOMATION & EXPERTISE</p>
                            </div>
                            </div>
                        </div>
                        <div className='LabImage1stimage'>
                            <img src={SecondImageFourthRow} alt='THE DR. DANGS LEGACY' />
                            <div className='ImageOverlay'>
                            <div className='InnerOverlay'>
                            <hr></hr>
                                <p>THE DR. DANGS LEGACY</p>
                            </div>
                            </div>
                        </div>
                        <div className='LabImage1stimage'>
                            <img src={ThirdImageFourthRow} alt='AWARDS & ACCOLADES' />
                            <div className='ImageOverlay'>
                            <div className='InnerOverlay'>
                            <hr></hr>
                                <p>AWARDS & ACCOLADES</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LabImagesSection;
