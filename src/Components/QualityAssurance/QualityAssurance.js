import React from 'react';
import './QualityAssurance.css';
import QualityAssuranceImage from '../../PhotosAndLogos/Quality-Assurence-BannerC.webp'; // Replace with the actual path
import CertificateImage from '../../PhotosAndLogos/QualityAssuranceNABLimg.webp';
import ProficiencyImage from '../../PhotosAndLogos/QualityAssurance3.webp';

const QualityAssurance = () => {
    return (
        <>
              <div className='QualityAssuranceMainDiv'>
                <div className='QualityAssurance-main-banner'>
                    <img src={QualityAssuranceImage} alt='Quality Assurance' className='QualityAssurance-background-image' />
                    <div className='QualityAssurance-overlay'></div> {/* Black overlay */}
                    <div className='QualityAssurance-content-container'>
                        <div className='QualityAssurance-text-content'>
                            <h2>Quality Assurance</h2>
                            <p>Quintessential Quality Diagnostics</p>
                        </div>
                    </div>
                </div>
                <div className='QualityCertificateSection'>
                    <div className='CertificateImageContainer'>
                        <img src={CertificateImage} alt='Certificate' className='CertificateImage' />
                    </div>
                    <div className='CertificateTextContainer'>
                        <h3>Quality Assurance</h3>
                        <p>
                            Dr. Dangs Lab is dedicated to providing the highest degrees of service and quality results. The laboratory is known for consistent QUALITY DRIVEN operations through the systematic implementation of effective QUALITY MANAGEMENT SYSTEMS (QMS) that assures our clients of accurate, reliable, and timely reporting of test results. It is our endeavor to continuously strive for the best in patient care through efficient, effective, and robust quality systems.
                        </p>
                        <p>
                            The laboratory subjects itself to continuous and rigorous voluntary ACCREDITATION compliant to GLOBAL ISO 15189 STANDARDS applicable to clinical laboratories through demonstrated competence to achieve quality goals. A dedicated QAU (Quality Assurance Unit) is set up to help design, implement, and continually improve on the laboratory’s performance and services.
                        </p>
                        <p>
                            We understand that discrepant laboratory results may pose considerable risk to patients and hence, make all possible structured efforts including multiple internal and external laboratory QUALITY CONTROL AND QUALITY ASSURANCE (QC/QA) measures, participation in PROFICIENCY TESTING (PT).
                        </p>
                    </div>
                </div>

                <div className='QualityProficiencySection'>
                    <div className='QualityProficiencyImage'>
                        <img src={ProficiencyImage} alt='Quality Policy' className='ProficiencyImage' />
                    </div>
                    <div className='QualityProficiencyContent'>
                        <p>We follow excellent Quality Control and Standardisation procedures in all aspects of Laboratory Medicine and this is of fundamental importance for us for the provision of clinical diagnosis and optimal patient-care.</p>
                        <h3>Proficiency Testing</h3>
                        <p>
                            Proficiency testing determines the performance of individual laboratories for specific tests or measurements and is used to monitor laboratories continuing performance. Proficiency testing involves a group of laboratories or analysts performing the same analysis on the same samples and comparing results. The key requirements of such comparisons are that the samples are homogeneous and stable and also that the set of samples analyzed are appropriate to test and display similarities and differences in results. We are committed to performing proficiency testing on a regular basis to ensure the best quality of our services.
                        </p>
                    </div>
                </div>



                <div className='QualityAssuranceLastDiv'>
                    <h3>BMW ANNUAL REPORT</h3>
                    <div>
                    <a href='../../../BMW Annual report for website _Main Lab.pdf'>BMW Annual Report Dr. Dangs Lab LLP Jan-2019 to Dec-2019
                   
                    
                    </a>

                    </div>
                    <div>
                    <a href='../../../BMW Annual Report for website _Gurugram2.pdf'>BMW Annual Report Gurugram Jan-2019 to Dec-2019

</a>
</div>



<div>
<a href='../../../BMW annual report 2020_GGN PSC3.pdf'>BMW Annual Report GGN PSC Jan-2020 to Dec-2020

</a>
</div>


<div>
<a href='../../../BMW annual report 2020_SDA Lab4.pdf'>BMW Annual Report PB PSC Jan-2020 to Dec-2020

</a>
</div>
<div>

<a href='../../../BMW Annual Report SDA Lab Jan-2021 to Dec-20216.pdf'>BMW Annual Report SDA Lab Jan-2021 to Dec-2021


</a>
</div>

                </div>
            </div>
        </>
    );
}

export default QualityAssurance;