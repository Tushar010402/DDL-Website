import React, { useState } from 'react';
import './SwineFlu.css';
import playIcon from '../../PhotosAndLogos/icons8-play-30.png';
import swineFluImage from '../../PhotosAndLogos/swineflu.png'; // Ensure the path is correct
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Swineflu = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <div className='SwineFlueMainDiv'>
                <div className='SwineFLueImageDIv'>
                    <img src={swineFluImage} alt='Swine Flu' className='backgroundImage' />
                    <div className='SwineInnerMAinDivForFlex'>
                        <div className='InnerMain1stLeftDiv'>
                            <h2>FLU PANEL [Influenza A (H1N1, H3N2) & influenza B]</h2>
                            <a href='/H1N1.pdf' target='_blank'>
                                <span>
                                    <img src={playIcon} alt='Play Icon' />
                                </span>
                                <span className='H3N2Download'>
                                    DOWNLOAD BROCHURE
                                </span>
                            </a>
                        </div>
                        <div className='InnerSecondDiv'>
                            <div className='InnerDivForm'>
                                <h3>Dr. Dangs Lab - Home Collection</h3>
                                <form>
                                    <input type='text' placeholder='Name' required />
                                    <input type='text' placeholder='Mobile Number*' required />
                                    <input type='email' placeholder='E-mail' />
                                    <input type='text' placeholder='Address*' required />
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={date => setSelectedDate(date)}
                                        minDate={new Date()}
                                        placeholderText='Select a date'
                                        dateFormat='dd/MM/yyyy'
                                        className='datePicker'
                                    />
                                    <input type='time' required />
                                    <button type='submit'>BOOK</button>
                                </form>
                                <a href='tel:999-999-2020' className='callButton'>CLICK HERE TO CALL 999-999-2020</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='OverviewSection'>
                    <h2>OVERVIEW</h2>
                    <hr />
                    <p>Swine flu, also known as the H1N1 virus, is a relatively new strain of an influenza virus that causes symptoms similar to the regular flu.</p>
                    <p>Swine Flu originated in pigs but is spread primarily from person to person.</p>
                    <p>Swine flu made headlines in 2009 when it was first discovered in humans and became a pandemic.</p>
                    
                    <h3>Swine Flu is also known by the names –</h3>
                    <ul>
                        <li>H1N1 Flu</li>
                        <li>Pig Flu</li>
                    </ul>
                    
                    <h3>Swine Flu - summary</h3>
                    <ul>
                        <li>Preventable by vaccine</li>
                        <li>Treatable by a medical professional</li>
                        <li>Spreads easily</li>
                        <li>Requires a medical diagnosis</li>
                        <li>Lab tests or imaging often required</li>
                        <li>Short-term: resolves within days to weeks</li>
                    </ul>
                    
                    <h3>Where to book?</h3>
                    <p>Swine Flu test in Delhi can be booked here – <a href="https://drdangslab.com/Swine-Flu-H1n1-Test.aspx" target='_blank' rel="noopener noreferrer">https://drdangslab.com/Swine-Flu-H1n1-Test.aspx</a></p>
                    
                    <h3>HOW IT SPREADS</h3>
                    <ul>
                        <li>By airborne respiratory droplets (coughs or sneezes).</li>
                        <li>By touching a contaminated surface (blanket or doorknob).</li>
                        <li>By saliva (kissing or shared drinks).</li>
                        <li>By skin-to-skin contact (handshakes or hugs).</li>
                    </ul>
                </div>
                <div className='FAQSection'>
                    <h2>Frequently Asked Questions</h2>
                    <div className='accordion'>
                        <div className='accordion-item'>
                            <div className='accordion-header' onClick={() => toggleAccordion(0)}>
                                <span>What does H1N1 stand for?</span>
                                {activeIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            <div className={`accordion-body ${activeIndex === 0 ? 'show' : ''}`}>
                                <strong>The designation “H1N1” indicates unique traits, which exhibit characteristics that identify the virus to the immune system and allows for attachment and replication of the virus. The “H” (hemagglutinin) and the “N” (neuraminidases) are both proteins that are found on the outer shell or envelope of the virus.</strong>
                            </div>
                        </div>
                        <div className='accordion-item'>
                            <div className='accordion-header' onClick={() => toggleAccordion(1)}>
                                <span>Where did swine flu come from?</span>
                                {activeIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            <div className={`accordion-body ${activeIndex === 1 ? 'show' : ''}`}>
                           <strong> For example, one virus that causes swine flu is believed to be a mix of pig, bird (avian), and human flu viruses. These types of viruses caused huge outbreaks in 1957, 1968, and 2009. H1N1 virus: The most common subtype of influenza A, including the swine flu virus.
                           </strong>
                             </div>
                        </div>
                        <div className='accordion-item'>
                            <div className='accordion-header' onClick={() => toggleAccordion(2)}>
                                <span>Where was the first case of swine flu reported?</span>
                                {activeIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            <div className={`accordion-body ${activeIndex === 2 ? 'show' : ''}`}>
                                <strong>In India, the first case of influenza A H1N1 was reported on May 16, 2009 from Hyderabad. The World Health Organization declared the post pandemic phase on August 10, 2010</strong>
                            </div>
                        </div>
                        <div className='accordion-item'>
                            <div className='accordion-header' onClick={() => toggleAccordion(3)}>
                                <span>Why Dr. Dangs Lab For Testing Swine Flu/H1N1?</span>
                                {activeIndex === 3 ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            <div className={`accordion-body ${activeIndex === 3 ? 'show' : ''}`}>
                             <ul>
                                <li>
                                Dr. Dangs Lab is one of the first 3 labs to have been approved by the government for testing of H1N1 by Real Time-PCR in 2010.
                                </li>
                                <li>
                                We have highly trained in house & Home Collection Experts for sample collection for children & patients of all ages.
                                    </li>
                                    <li>
                                    H1N1 testing is done by Real Time PCR & has been Accredited by NABL (National Accreditation Board of Laboratories) for Dr. Dangs Lab.
                                    </li>
                                    <li>
                                    We provide a quick turn around time which ensures timely reporting of all samples (Same day reporting of all samples received before 1:30 PM ).
                                    </li>
                                    <li>
                                    The test is performed for Influenza A, H1N1, H3N2 & Influenza B with the sample SWAB Sample at no extra cost.
                                    </li>
                                    <li>
                                    The Testing Cost is 4500 Rs. as recommended by The DELHI GOVT.
                                    </li>
                             </ul>
                            </div>
                        </div>
                        <div className='accordion-item'>
                            <div className='accordion-header' onClick={() => toggleAccordion(4)}>
                                <span>What is Swine Flu?</span>
                                {activeIndex === 4 ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            <div className={`accordion-body ${activeIndex === 4 ? 'show' : ''}`}>
                              <ul>
                                <li>
                                Swine influenza is a contagious respiratory disease of pigs caused by influenza viruses and is found in almost all the countries around the world.
                                </li>
                                <li>
                                There are many different types of influenza viruses. They affect humans and are spread amongst people by coughing and sneezing.
                                    </li>
                              </ul>
                            </div>
                        </div>
                        <div className='accordion-item'>
                            <div className='accordion-header' onClick={() => toggleAccordion(5)}>
                                <span>Symptoms Of Swine Flu</span>
                                {activeIndex === 5 ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            <div className={`accordion-body ${activeIndex === 5 ? 'show' : ''}`}>
                               <strong>Swine Flu or H1N1 flu usually results in breathing difficulty and depends on the virus involved for the severity of infection.</strong>
                                <ul>
                                    <li>
                                    Sneezing and coughing
                                    </li>
                                    <li>
                                    Difficulty in breathing
                                    </li>
                                    <li>
                                    Increased discharge from eyes or nose
                                    </li>
                                    <li>
                                    High fever
                                    </li>
                                    <li>
                                    Lack of appetite
                                    </li>
                                    <li>
                                    Feeling of weakness and tiredness
                                    </li>
                                    <li>
                                    Swollen and red eyes
                                    </li>
                                    <li>
                                    Runny or stuffy nose
                                    </li>

                                    <li>
                                    Sore throat
                                    </li>
                                    <li>
                                    In Some cases, nausea, vomiting, and diarrhea has also been reported.
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className='accordion-item'>
    <div className='accordion-header' onClick={() => toggleAccordion(6)}>
        <span>Preventing and Controlling Swine Flu</span>
        {activeIndex === 6 ? <FaChevronUp /> : <FaChevronDown />}
    </div>
    <div className={`accordion-body ${activeIndex === 6 ? 'show' : ''}`}>
        <h4>Mild Cases:</h4>
        <ul>
            <li>Infected patients should rest at home.</li>
            <li>Drink plenty of liquids.</li>
            <li>Keep body hydrated.</li>
            <li>Wash your hands several times in a day.</li>
            <li>Use alcohol-based hand wash or sanitizers.</li>
            <li>Avoid touching face, eyes, mouth, or nose.</li>
            <li>Take prescribed medicines on time.</li>
            <li>Maintain distance from patient as it is a communicable disease.</li>
        </ul>
        <h4>When to seek emergency care:</h4>
        <p>Please visit to a hospital if the patient is:</p>
        <ul>
            <li>Having trouble in breathing</li>
            <li>Breathing fast</li>
            <li>Skin color changing to blue</li>
            <li>Not having enough fluids</li>
            <li>Continuous vomiting</li>
            <li>Not able to walk</li>
            <li>Being irritable</li>
            <li>Flu improves but fever returning</li>
        </ul>
    </div>
</div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Swineflu;
