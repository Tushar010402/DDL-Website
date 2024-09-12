import React from 'react';
import './FitBlog.css';
import FitInnerImage from '../../../PhotosAndLogos/FitInnerImage.jpg';
import FitInnerImage2 from '../../../PhotosAndLogos/FitInnerImage2.jpg';


const FitBlog = () => {
    return(
        <>

        
        <div className='HealthDrinkMainDiv'>
        <div className='SecondaryDiv'>
                    <img src={FitInnerImage} alt="aaaaaaaa" />
                </div>
                <div className='ThirdDiv'>
                <h2>FIT Or FOBT: Which Is A Better Screening Test For Colorectal Cancer?</h2>
                </div>
                <div className='FourthDiv'>
        <h3>The Faecal Immunochemical Test (FIT) Is A Screening Test Used To Detect The Presence Of Blood In The Stool. It Is A More Advanced And Accurate Alternative To The Traditional Faecal Occult Blood Test (FOBT). Here's A Breakdown Of How FIT Is Superior To FOBT:</h3>




                         <ol>
                    <li>
                    Detection Method: FIT uses antibodies specific to human haemoglobin, the protein in red blood cells, to detect blood in the stool. It is highly sensitive to the presence of human blood, whereas FOBT detects blood based on the peroxidase activity in the stool, which can be influenced by various factors like diet and medications. </li>
                <li>
                Specificity: FIT is more specific in detecting lower gastrointestinal bleeding. It can differentiate between human blood and other sources of bleeding, such as from certain foods or medications, reducing the likelihood of false positive results.    </li>


                <li> Sample Collection: FIT requires only a small sample of stool, typically obtained from a single bowel movement. In contrast, FOBT may require multiple stool samples collected over consecutive days, making it more cumbersome for patients.</li>
<li> Ease of Use: FIT is easier to use and does not require any dietary restrictions or medication cessation before testing. This makes it more convenient for individuals undergoing screening.</li>
<li>Accuracy: FIT has been shown to have higher sensitivity for detecting colorectal cancer and advanced adenomas compared to FOBT. It can detect smaller amounts of blood in the stool, which may be indicative of early-stage colorectal cancer or precancerous polyps.</li>



<li>Patient Compliance: The improved convenience and ease of use associated with FIT may result in higher patient compliance with colorectal cancer screening programs.
    
    </li>
    
    </ol>

    <div className='SecondaryDiv'>
                    <img src={FitInnerImage2} alt="aaaaaaaa" />
                </div>

<h3>
It's important to note that a positive FIT result does not necessarily mean a person has colorectal cancer. It indicates the presence of blood in the stool, which could be due to various reasons, including benign conditions. Further diagnostic tests, such as colonoscopy, are typically recommended to investigate positive FIT results. If you are considering colorectal cancer screening, it is best to discuss with your healthcare provider to determine the most appropriate screening method based on your individual circumstances.

</h3>





           
                
                
                
                
                </div>
        </div>

        

        
        </>
        
    )
};
export default FitBlog;
