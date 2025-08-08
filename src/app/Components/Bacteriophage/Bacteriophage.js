'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from './Bacteriophage.module.css';
import 'react-datepicker/dist/react-datepicker.css';

const Bacteriophage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <div className={styles.BackteriophagecontentsMainssa}>
<div className={styles.bacteriophageMainBanner}>
  <Image
    src="/PhotosAndLogos/senstivity-2.png"
    alt="Bacteriophage"
    fill
    className={styles.bacteriophageBackgroundImage}
    priority
  />
  <div className={styles.imageOverlay}></div>
  <div className={styles.bacteriophageContentContainer}>
    <div className={styles.bacteriophageLeftContent}>
      <h2>Bacteriophage Sensitivity Testing</h2>
      <p>
        We Announced India's First Diagnostic Phage Susceptibility Testing to Fight Antibiotic Resistance.
      </p>
    </div>
  </div>
</div>
      
      <div className={styles.bacteriophageContentBelowHeader}>
        <div className={styles.Backteriophagecontentss}>
          <h2>Bacteriophage Sensitivity Testing</h2>
          <div className={styles.bacteriophageButtons}>
            <button className={styles.bacteriophageButton}>
              <a href='/HowToTakePhageTherapy.pdf' target='_blank' rel='noopener noreferrer'>
                Brochure
              </a>
            </button>
            <button className={styles.bacteriophageButton}>
              <a href='/ConsentFormforBacteriophageTesting.pdf' target='_blank' rel='noopener noreferrer'>
                Consent Form
              </a>
            </button>
          </div>
        </div>

        <h3>HERE'S WHAT YOU NEED TO KNOW</h3>
        <hr />
        <p>Phage therapy is the use of phages to treat bacterial infections</p>
        <p>Phage therapy has been used for treating infectious conditions for almost 100 years in eastern European countries like Georgia and Russia</p>
      
        <div className={styles.bacteriophageInfoSteps}>
          <div className={styles.step}>Any Recalcitrant Bacterial Infection</div>
          <div className={styles.arrow}>&#x21E9;</div>
          <div className={styles.step}>Visit the Lab / Send us the Condition Related Specimen/s</div>
          <div className={styles.arrow}>&#x21E9;</div>
          <div className={styles.step}>Once Bacterial Pathogen/s Identified</div>
          <div className={styles.arrow}>&#x21E9;</div>
          <div className={styles.step}>Bacteriophage Susceptibility Test will be Initiated Against Pathogen/s Isolated after consent from patient.</div>
          <div className={styles.arrow}>&#x21E9;</div>
          <div className={styles.step}>Report shall be shared with patient and Eliava Phage Therapy Center, Georgia and Vitalis Phage Therapy, INDIA</div>
          <div className={styles.arrow}>&#x21E9;</div>
          <div className={styles.step}>Vitalis shall communicate with you regarding treatment procedure.</div>
        </div>
      </div>

      <div className={styles.FAQSection} id='FAQON-Bacteriophage'>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.accordion}>
          <div className={styles.accordionItem}>
            <div className={styles.accordionHeader} onClick={() => toggleAccordion(0)}>
              <span>WHAT ARE PHAGES?</span>
              {activeIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div className={`${styles.accordionBody} ${activeIndex === 0 ? styles.show : ''}`}>
              <ul>
                <li>Phages are naturally occurring viruses that attack, infect and feed on bacteria. They are the most abundant organisms in nature. They are everywhere – in food, water, air, and even in our bodies. Any environment that has bacteria in it also has phages that feed on those bacteria.</li>
                <li>Phage therapy is the use of phages to treat bacterial infections.</li>
              </ul>
            </div>
          </div>

          <div className={styles.accordionItem}>
            <div className={styles.accordionHeader} onClick={() => toggleAccordion(1)}>
              <span>WHY HAVE I NOT HEARD OF PHAGE THERAPY BEFORE?</span>
              {activeIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div className={`${styles.accordionBody} ${activeIndex === 1 ? styles.show : ''}`}>
              <ul>
                <li>Phage therapy has been used for treating infectious conditions for almost 100 years in eastern European countries like Georgia and Russia. It did not become popular in the rest of the world because after the discovery of penicillin, the global medical industry focussed its efforts on the development of antibiotics. The Cold War between the western countries and the erstwhile Soviet Union further widened the gap in the world's knowledge of phage therapy. However, as antibiotics are failing in treating an increasing number of infections today, western interest is reviving in phage therapy as a strong alternative to antibiotics.</li>
              </ul>
            </div>
          </div>

          <div className={styles.accordionItem}>
            <div className={styles.accordionHeader} onClick={() => toggleAccordion(2)}>
              <span>WHAT ARE THE CONDITIONS PHAGE THERAPY CAN TREAT?</span>
              {activeIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div className={`${styles.accordionBody} ${activeIndex === 2 ? styles.show : ''}`}>
              <p><strong>Phage therapy can be used to treat a vast number of bacterial infections. It can treat 9 out of the 12 bacteria listed in WHO's recent list of "priority pathogens" – superbugs that are resistant to all antibiotics available globally.</strong></p>
              <p><strong>The Eliava Phage Therapy Center treats a wide variety of conditions.</strong></p>
              <p><strong>Navigate through the most common conditions treated using phage therapy by clicking the icons below :</strong></p>

              <ul>
                <li>UROLOGY</li>
                <ul type='circle'>
                  <li>Cystitis</li>
                  <li>Epididymitis</li>
                  <li>Orchitis</li>
                  <li>Prostatitis</li>
                  <li>Pyelonephritis</li>
                  <li>Urethritis</li>
                  <li>Other Inflammatory Diseases of the Urinary Tract</li>
                </ul>

                <li>GYNAECOLOGY</li>
                <ul>
                  <li>Bacterial Infections of the Pelvic Cavity</li>
                  <li>Cervicitis</li>
                  <li>Cystitis</li>
                  <li>Vaginal Dysbiosis</li>
                  <li>Vaginitis</li>
                  <li>Vulvo-Vaginitis</li>
                  <li>Other Inflammatory Diseases of the Urinary Tract</li>
                </ul>

                <li>EAR, NOSE AND THROAT</li>
                <ul>
                  <li>Bronchiectasis</li>
                  <li>Cystic Fibrosis Associated Infections</li>
                  <li>Laryngitis</li>
                  <li>Otitis</li>
                  <li>Pharyngitis</li>
                  <li>Pneumonia</li>
                  <li>Rhinitis</li>
                  <li>Sinusitis</li>
                  <li>Tonsilitis</li>
                  <li>Tracheitis</li>
                </ul>

                <li>GASTROINTESTINAL DISEASES</li>
                <ul>
                  <li>Antibiotic-Associated Diarrhea</li>
                  <li>Enteritis</li>
                  <li>Gastritis</li>
                  <li>Infectious Diarrhea</li>
                  <li>Irritable Bowel Syndrome</li>
                  <li>Lyme Disease-Associated Gastrointestinal Disorders</li>
                  <li>Reflux Oesophagitis</li>
                  <li>Small Intestine Bacterial Overgrowth Syndrome</li>
                </ul>

                <li>DERMATOLOGY</li>
                <ul>
                  <li>Fistulas</li>
                  <li>Folliculitis</li>
                  <li>Hidradenitis</li>
                  <li>Infections from Burn Wounds</li>
                  <li>Infectious Complications of Acne</li>
                  <li>Infectious Complications of Icthysosis and Netherton Syndrome</li>
                  <li>Infectious Complications of Trophic Ulcers</li>
                  <li>Purulent Dermatitis</li>
                  <li>Wounds</li>
                </ul>

                <li>PAEDIATRICS</li>
                <ul>
                  <li>Bacterial Conjunctivitis</li>
                  <li>Bepharitis</li>
                  <li>ENT Conditions</li>
                  <li>Gastrointestinal Diseases</li>
                </ul>

                <li>HEALTHCARE ASSOCIATED INFECTIONS</li>
                <p><strong>Healthcare associated infections, also known as nosocomial infections, are acquired from hospitals or healthcare facilities. They commonly happen due to the use of hospital equipment, which can carry antibiotic-resistant infections, or superbugs. Such bacterial infections can be treated with phage therapy.</strong></p>

                <li>SURGICAL INFECTIONS</li>
                <ul>
                  <li>Chronic Wounds</li>
                  <li>Diabetic Foot Ulcers</li>
                  <li>Prosthetic-Associated Infections</li>
                  <li>Other surgical infections</li>
                </ul>
              </ul>
            </div>
          </div>

          <div className={styles.accordionItem}>
            <div className={styles.accordionHeader} onClick={() => toggleAccordion(3)}>
              <span>HOW DOES PHAGE THERAPY WORK?</span>
              {activeIndex === 3 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div className={`${styles.accordionBody} ${activeIndex === 3 ? styles.show : ''}`}>
              <p><strong>Based on the infection, the patient is given a phage preparation that is sensitive to the infection. After consuming this phage medication, the phages travel through the body towards the bacteria they are sensitive towards. Once they reach the bacteria at the site of infection, they attach onto the bacterial cells, and inject their DNA into the cells. This DNA then uses the bacterial cell's machinery to reproduce very rapidly, making an army of new phages inside the cell.</strong></p>
              <p><strong>As the number of phages continues to grow rapidly in the cell, it is no longer able to contain the invading phages. It bursts and the new phages spread to other cells of the same bacterium, looking to reproduce, and thus the cycle continues till there are no more bacterial cells left for the phages to invade. Once all the bacteria are dead, the phages can no longer replicate, and are flushed out from the body.</strong></p>
            </div>
          </div>

          <div className={styles.accordionItem}>
            <div className={styles.accordionHeader} onClick={() => toggleAccordion(4)}>
              <span>WHAT ARE THE ADVANTAGES OF PHAGE THERAPY OVER ANTIBIOTICS?</span>
              {activeIndex === 4 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div className={`${styles.accordionBody} ${activeIndex === 4 ? styles.show : ''}`}>
              <h2>Antibiotics</h2>
              <ul>
                <li>Antibiotics are broad spectrum – they attack many types of bacteria at the same time. This includes the bad, pathogenic bacteria, as well as the good bacteria that help in our digestion and in maintaining our body's immunity.</li>
                <li>Antibiotics have side effects, sometimes very strong ones, such as kidney damage, tendon damage etc. An overdose of antibiotics can adversely impact our immune system, and can be dangerous for the body and its vital organs.</li>
                <li>Antibiotic molecules fight bacteria and get destroyed as part of the process. In areas where the antibiotic reaches in limited quantities, this is a disadvantage because sub-lethal quantities lead to bacteria forming resistance against the antibiotic. This renders them ineffective for treating these infections in hard to reach places.</li>
                <li>Once a bacterium develops resistance to an antibiotic, that antibiotic can do nothing to overcome this resistance. It essentially becomes unusable against this strain of bacteria.</li>
                <li>Bacteria create protective mucous layers around themselves called 'biofilm'. Antibiotics are unable to penetrate biofilms and eradicate the bacteria protected within. This allows the infection persist and grow.</li>
              </ul>

              <h2>Phages and Phage Therapy</h2>
              <ul>
                <li>Phages only attack their specific bacteria. They do not attack the bacteria in our body that they are not specific for.</li>
                <li>Phages do not have side effects, so they can be used over a long period of time, if needed, such as in cases of chronic infection.</li>
                <li>Phages replicate at the site of the infection. So if the infection is in an area of the body where medicines do not reach easily, such as the prostate gland, even if a small quantity of phages reaches the infection, they can quickly multiply themselves and start destroying the bacterial infection.</li>
                <li>Phages are "living" organisms. If bacteria try to form resistance against phages, phages evolve themselves to overcome the bacteria's resistance. This is how they are in nature, and are therefore more robust against bacterial infections than antibiotics.</li>
                <li>Phages are able to penetrate through bacterial biofilm and eradicate the bacteria protected within. Therefore, even persistent bacterial infections hidden inside biofilms can be treated using phages.</li>
              </ul>
            </div>
          </div>

          <div className={styles.accordionItem}>
            <div className={styles.accordionHeader} onClick={() => toggleAccordion(5)}>
              <span>WHAT TESTS WILL BE PERFORMED TO DETERMINE MY INFECTION?</span>
              {activeIndex === 5 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div className={`${styles.accordionBody} ${activeIndex === 5 ? styles.show : ''}`}>
              <p><strong>A sample from the site of infection will be taken and processed for culture and phage sensitivity testing shall be performed if there is growth of any pathogen. The results of these tests will show what pathogens are causing your infection, as well as whether they are sensitive to standard phage medications.</strong></p>
            </div>
          </div>

          <div className={styles.accordionItem}>
            <div className={styles.accordionHeader} onClick={() => toggleAccordion(6)}>
              <span>HOW IS PHAGE THERAPY ADMINISTERED?</span>
              {activeIndex === 6 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div className={`${styles.accordionBody} ${activeIndex === 6 ? styles.show : ''}`}>
              <p><strong>Depending on the site of your infection, the doctors will decide how the phage medicines are administered to you. It will generally be oral administration, and topical administration wherever possible.</strong></p>
            </div>
          </div>

          <div className={styles.accordionItem}>
            <div className={styles.accordionHeader} onClick={() => toggleAccordion(7)}>
              <span>HOW LONG DOES IT TAKE TO BE CURED?</span>
              {activeIndex === 7 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div className={`${styles.accordionBody} ${activeIndex === 7 ? styles.show : ''}`}>
              <p><strong>Each case is separate, and the same kind of infection can take different amounts of time to cure for different people. Your doctor will assess your condition and give you a reasonable estimate of the time it might take to treat you.</strong></p>
            </div>
          </div>
        </div>

        <div className={styles.bacteriophageLastpageDivContent}>
          <p>FOR PROSTATE RELATED CONDITIONS WE HAVE A VISITING UROLOGIST AT THE LAB</p>
          <h4>Dr. Mahendrakumar Sharma (MBBS,MS,DNB Urology), Attending Consultant, Urology and Robotic surgery, Indraprastha Apollo Hospital</h4>
          <hr />
          <h4>Links</h4>
          <a 
            href='https://www.vitalisphagetherapy.com/what-phage-therapy-treats'
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.vitalisphagetherapy.com/what-phage-therapy-treats
          </a>
        </div>
      </div>
      </div>
    </>
  );
};

export default Bacteriophage;