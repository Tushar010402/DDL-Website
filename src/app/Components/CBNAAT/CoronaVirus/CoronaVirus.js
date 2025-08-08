// components/CoronaVirus.js
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CoronaVirus.module.css';

const CoronaVirus = () => {
    return (
        <>
            <div className={styles['corona-main']}>
                <h1 className={styles.title}>NOVEL CORONAVIRUS (NCOV-2019/COVID-19)</h1>
                <p className={styles.text}>
                    Coronavirus government helpline: <a className={styles.link} href="tel:+911123978046">+91-11-23978046</a> / Toll free No. : <a className={styles.link} href="tel:1075">1075</a> / Email: <a className={styles.link} href="mailto:ncov2019@gmail.com">ncov2019@gmail.com</a>
                </p>
                <h2 className={styles.subtitle}>HEALTH ADVISORY - DR. DANGS LAB</h2>
                <p className={styles.text}>*ISSUED IN PUBLIC INTEREST BY DR. DANGS LAB LLP</p>
                <div className={styles['button-container']}>
                    <button className={styles.button}>FRESH CASE OF CORONAVIRUS IN INDIA</button>
                    <button className={styles.button}>BOOK COVID 19 HOME COLLECTION</button>
                    <button className={styles.button}>BOOK COVID 19 DRIVE THRU</button>
                </div>
                <p className={styles.text}>China's lethal CoronaVirus has been officially renamed as 'COVID-19' by WHO (World Health Organisation).</p>
                
                <div className={styles['info-section']}>
                    <div className={styles['info-box']}>
                        <h3 className={styles['info-title']}>CORONAVIRUS</h3>
                        <h4 className={styles['info-subtitle']}>How it Spreads</h4>
                        <div className={styles['image-wrapper']}>
                            <Image
                                src="/PhotosAndLogos/covid-2.png"
                                alt="How it Spreads"
                                width={600}
                                height={400}
                                className={styles.image}
                                priority
                            />
                        </div>
                    </div>
                    <div className={styles['info-box']}>
                        <h4 className={styles['info-subtitle']}>Keep Your Hands To Yourself</h4>
                        <h4 className={styles['info-subtitle']}>Wash Your Hands</h4>
                        <div className={styles['image-wrapper']}>
                            <Image
                                src="/PhotosAndLogos/covid-1.png"
                                alt="Wash Your Hands"
                                width={600}
                                height={400}
                                className={styles.image}
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div className={styles['prevention-section']}>
                    <h2 className={styles['prevention-title']}>DO THE FIVE (HELP STOP CORONAVIRUS)</h2>
                    <ol className={styles['prevention-list']}>
                        <li className={styles['prevention-item']}><strong className={styles['prevention-highlight']}>HANDS</strong> Wash them often</li>
                        <li className={styles['prevention-item']}><strong className={styles['prevention-highlight']}>ELBOW</strong> Cough into it</li>
                        <li className={styles['prevention-item']}><strong className={styles['prevention-highlight']}>FACE</strong> Don't touch it</li>
                        <li className={styles['prevention-item']}><strong className={styles['prevention-highlight']}>SPACE</strong> Keep safe distance</li>
                        <li className={styles['prevention-item']}><strong className={styles['prevention-highlight']}>HOME</strong> Stay if you can</li>
                    </ol>
                    <h3 className={styles['prevention-subtitle']}>USE ALCOHOL BASED HAND WASHES OR SANITIZERS.</h3>
                    <ul className={styles['prevention-list']}>
                        <li className={styles['prevention-item']}>Keep your Hands to yourself. Do not touch here and there while travelling and do not touch back yourself specially your face.</li>
                        <li className={styles['prevention-item']}>The main route of transmission of CoronaVirus is through the respiratory tract. The virus can also be detected in other body fluids and excreta.</li>
                    </ul>
                    <h3 className={styles['prevention-subtitle']}>PREVENTION, SYMPTOMS AND CARE FOR CORONAVIRUS :</h3>
                    <ul className={styles['prevention-list']}>
                        <li className={styles['prevention-item']}>Hand hygiene & Respiratory etiquette are essential at this stage. This means frequent use of hand sanitizers and covering your face with a handkerchief/ tissue/ hand with a flexed elbow to prevent droplets from reaching people around you. Avoid close contact with people who are showing signs of respiratory illness such as sneezing and coughing. Keep your hands and fingers away from your eyes, nose, and mouth.</li>
                        <li className={styles['prevention-item']}>N95 masks are known to help with prevention of such outbreaks.</li>
                        <li className={styles['prevention-item']}>Anyone with likely symptoms (cough, fever, breathlessness, feeling of being unwell, malaise, runny nose, sore throat, weakness, pneumonia & in severe cases- kidney failure) must consult a physician immediately & also are advised to avoid contact with other family members.</li>
                        <li className={styles['prevention-item']}>Immunosuppressed people are at a higher risk and are advised to be extra careful.</li>
                        <li className={styles['prevention-item']}>Ensure that Eggs & meat are thoroughly cooked prior to consumption.</li>
                        <li className={styles['prevention-item']}>It is reassuring that the government has released a health advisory and is screening airports for any visitors from China.</li>
                        <li className={styles['prevention-item']}>Currently there is no vaccine available to prevent the virus.</li>
                        <li className={styles['prevention-item']}>Spread awareness regarding the above to family & friends.</li>
                    </ul>
                </div>

                <div className={styles['containment-section']}>
                    <h2 className={styles['containment-title']}>INDIA RAMPS UP EFFORTS TO CONTAIN THE SPREAD OF NOVEL CORONAVIRUS :</h2>
                    <p className={styles['containment-text']}>On 12 January 2020, the <Link href="https://www.who.int" className={styles.link} target="_blank" rel="noopener noreferrer">World Health Organization</Link> (WHO) confirmed that a <Link href="https://www.who.int/health-topics/coronavirus" className={styles.link} target="_blank" rel="noopener noreferrer">novel coronavirus</Link> was the cause of a respiratory illness in a cluster of people in Wuhan City, Hubei Province, China, which was reported to the WHO on 31 December 2019.</p>
                    <p className={styles['containment-text']}>The first case of the <Link href="https://en.wikipedia.org/wiki/COVID-19_pandemic_in_India" className={styles.link} target="_blank" rel="noopener noreferrer">COVID-19 pandemic in India</Link> was reported on 30 January 2020.</p>
                    <p className={styles['containment-text']}>On 30 January, India reported its first case of COVID-19 in Kerala, which rose to three cases by 3 February; all were students who had returned from Wuhan, China. No significant rise in cases was seen in the rest of February. On 4 March 22 new cases came to light, including those of an Italian tourist group with 14 infected members.</p>
                    <p className={styles['containment-text']}>The transmission escalated during March, after several cases were reported all over the country, most of which were linked to people with a travel history to affected countries. On 12 March, a 76-year-old man who had returned from Saudi Arabia became the first victim of the virus in the country.</p>
                    <p className={styles['containment-text']}>On 11 March 2020, WHO declared Novel CoronaVirus Disease (COVID-19) outbreak as a pandemic and reiterated the call for countries to take immediate actions and scale up response to treat, detect and reduce transmission to save people's lives.</p>
                </div>

                <div className={styles['lockdown-section']}>
                    <h2 className={styles['lockdown-title']}>PRIME MINISTER'S APPEAL TO OUR CITIZENS AND LOCKDOWN 2020 :</h2>
                    <p className={styles['lockdown-text']}>On 19 March 2020, Modi asked all citizens to observe "Janata Curfew" (people's curfew) from 7 am to 9 pm on Sunday, 22 March.</p>
                    <p className={styles['lockdown-text']}>On 22 March 2020, India observed a 14-hour voluntary public curfew at the instance of the Prime Minister <Link href="https://en.wikipedia.org/wiki/Narendra_Modi" className={styles.link} target="_blank" rel="noopener noreferrer">Narendra Modi</Link>. He implored all Indians to stay at home for the next few weeks, and if possible, to also work from home.</p>
                    <p className={styles['lockdown-text']}>The government followed it up with lockdowns in 75 districts where COVID-19 cases had occurred as well as all major cities. The lockdown was placed when the number of confirmed positive coronavirus cases in India was approximately 500.</p>
                    <p className={styles['lockdown-text']}>Further, on 24 March, the prime minister ordered a <Link href="https://en.wikipedia.org/wiki/COVID-19_lockdown_in_India" className={styles.link} target="_blank" rel="noopener noreferrer">nationwide lockdown</Link> for 21 days, affecting the entire 1.3 billion population of India.</p>
                    <ul className={styles['lockdown-list']}>
                        <li className={styles['lockdown-item']}>On 14 April, the prime minister extended the ongoing nationwide lockdown till 3 May.</li>
                        <li className={styles['lockdown-item']}>On 1 May, lockdown across the country was further extended by two more weeks till 17 May.</li>
                        <li className={styles['lockdown-item']}>On 17 May, NDMA extended the lockdown till 31 May in all Indian States.</li>
                    </ul>
                    <h3 className={styles['lockdown-subtitle']}>Zonal classification</h3>
                    <p className={styles['lockdown-text']}>The Government divided the entire nation into three zones – Green Zone, Red Zone, Orange Zone.</p>
                    <ul className={styles['lockdown-list']}>
                        <li className={styles['lockdown-item']}><strong>Red zone (Hotspots)</strong> – districts with high doubling rate and high number of active cases</li>
                        <li className={styles['lockdown-item']}><strong>Orange zone (Non-hotspots)</strong> – districts with fewer cases</li>
                        <li className={styles['lockdown-item']}><strong>Green zone</strong> – districts without confirmed cases or without new cases in last 21 days</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CoronaVirus;