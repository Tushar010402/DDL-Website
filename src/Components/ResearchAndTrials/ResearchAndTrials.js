import React from 'react';
import './ResearchAndTrials.css';
import ResearchMainHeaderImage from '../../PhotosAndLogos/Research-&-Trial-2.webp';
import Image1 from '../../PhotosAndLogos/Research1.webp';
import Image2 from '../../PhotosAndLogos/Research2.webp';
import Image3 from '../../PhotosAndLogos/Research3.webp';
import Image4 from '../../PhotosAndLogos/Research4.webp';
import Image5 from '../../PhotosAndLogos/Research5.webp';
import Image6 from '../../PhotosAndLogos/Research6.webp';
import Image7 from '../../PhotosAndLogos/Research7.webp';
import Image8 from '../../PhotosAndLogos/Research8.webp';
import Image9 from '../../PhotosAndLogos/Research9.webp';
import Image10 from '../../PhotosAndLogos/Research10.webp';
import Image11 from '../../PhotosAndLogos/Research11.webp';
import Image12 from '../../PhotosAndLogos/Research12.webp';
import Image13 from '../../PhotosAndLogos/Research13.webp';

const ResearchAndTrials = () => {
    return (
        <>
            <div className='ResearchAndTrialsMainDiv'>
                <div className='ResearchAndTrials-main-banner'>
                    <img src={ResearchMainHeaderImage} alt='Research and Trials' className='ResearchAndTrials-background-image' />
                    <div className='ResearchAndTrials-overlay'></div>
                    <div className='ResearchAndTrials-content-container'>
                        <div className='ResearchAndTrials-text-content'>
                            <h2>Research and Trials</h2>
                            <p>Enhancing Patient Care with State of the Art Technology & Excellent Expertise</p>
                        </div>
                    </div>
                </div>

                <div className='ResearchAndTrialsContent'>
                    <h3>Dr. Dangs Lab: Enhancing Patient Care with State of the Art Technology & Excellent Expertise</h3>
                    <p>
                        Dr Dangs Lab offers customized, high-quality central laboratory services to pharmaceutical and biotech clinical development through Scientific guidance, 
                        efficient project management, state of the art technologies, competent leadership and regulatory know-how. 
                        We possess extensive experience in efficiently managing from small and simple clinical trials to those that are large and complex.
                    </p>
                    <p>
                        The studies range from academic to the advanced regulatory submission vaccine trials in the domains of public health diseases 
                        (both for safety and immunogenicity). Some eminent amongst many are:
                    </p>
                    <ul className='ResearchAndTrials-list'>
                        <li>Large Multicentric Phase 3 vaccine Trial on Tuberculosis</li>
                        <li>Immunogenicity studies for Rotavirus candidate (vaccine)</li>
                        <li>Phase 1, 2 and 3 Vaccine studies for the leading Covid 19 vaccine candidates for authorisation purpose (recombinant)</li>
                        <li>Phase 1 trial on Chikungunya</li>
                        <li>Several PMS studies</li>
                        <li>National sero-survey with prominent DSS sites (ongoing)</li>
                        <li>Reproductive health studies</li>
                        <li>Nutraceuticals</li>
                    </ul>

                    <h4>THE SERVICES INCLUDE:</h4>
                    <ul className='ResearchAndTrials-list'>
                        <li>Guidance on Test and methodology selection for study protocol development</li>
                        <li>Offer comprehensive menu of accredited tests</li>
                        <li>Fully-harmonized, high throughput instrumentation delivering high quality data</li>
                        <li>Well integrated scientific, technical, and operational teams to execute project seamlessly</li>
                        <li>Method validations and verification of biomarkers/assays</li>
                        <li>Pan India logistics capability for on-time and in-stability shipments</li>
                        <li>Accurate and reliable data management solutions</li>
                    </ul>

                    <h5>QA at Dr Dangs Lab is independent of operations. We deliver a structured risk-based approach to planning and conducting compliance assessments by applying the principles of quality risk management (QRM). We oversee the management of quality issues, fostering a culture of continuous process improvement.</h5>
                </div>

                <div className='ResearchAndTrialsImageSection'>
                    <img src={Image1} alt="Image 1" className='ResearchAndTrialsImage' />
                    <img src={Image2} alt="Image 2" className='ResearchAndTrialsImage' />
                    <img src={Image3} alt="Image 3" className='ResearchAndTrialsImage' />
                </div>
                <div className='ResearchAndTrialsImageSection'>
                    <img src={Image4} alt="Image 4" className='ResearchAndTrialsImage' />
                    <img src={Image5} alt="Image 5" className='ResearchAndTrialsImage' />
                    <img src={Image6} alt="Image 6" className='ResearchAndTrialsImage' />
                </div>
                <div className='ResearchAndTrialsImageSection'>
                    <img src={Image7} alt="Image 7" className='ResearchAndTrialsImage' />
                    <img src={Image8} alt="Image 8" className='ResearchAndTrialsImage' />
                    <img src={Image9} alt="Image 9" className='ResearchAndTrialsImage' />
                </div>
                <div className='ResearchAndTrialsImageSection'>
                    <img src={Image10} alt="Image 10" className='ResearchAndTrialsImage' />
                    <img src={Image11} alt="Image 11" className='ResearchAndTrialsImage' />
                    <img src={Image12} alt="Image 12" className='ResearchAndTrialsImage' />
                </div>
                <div className='ResearchAndTrialsImageSection'>
                    <img src={Image13} alt="Image 13" className='ResearchAndTrialsImage' />
                </div>
            </div>
        </>
    );
};

export default ResearchAndTrials;
