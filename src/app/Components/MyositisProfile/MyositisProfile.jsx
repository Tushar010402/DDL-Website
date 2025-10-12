import React from 'react';
import Link from 'next/link';

const MyositisProfilePage = ({ pageTitle }) => {
  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <div 
        className="w-full h-[600px] mt-5 bg-center bg-no-repeat bg-cover relative flex justify-center items-center text-white overflow-hidden bg-[url('/PhotosAndLogos/Myositis.webp')]"
        role="img"
        aria-label="Myositis Profile (16 Antigens) - Comprehensive Diagnostic Test"
      >
      </div>

      {/* Content Section */}
      <div className="p-8 mt-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Myositis Profile (16 Antigens) – Comprehensive Diagnostic Test for Autoimmune Muscle Diseases
        </h1>
        
        {/* Introduction */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Introduction
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Autoimmune muscle diseases can be challenging to diagnose because their symptoms often overlap with other conditions such as chronic fatigue, arthritis, or metabolic disorders. Among these,<span className='font-bold'> myositis </span> stands out as a group of rare but serious inflammatory conditions that primarily affect skeletal muscles. If left undiagnosed or untreated, myositis can lead to severe muscle weakness, impaired mobility, and reduced quality of life.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            At <Link href="https://www.drdangslab.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Dr. Dangs Lab</Link>, we offer the <span className='font-bold'>Myositis Profile (16 Antigens)</span> test, a specialized blood test designed to detect specific autoantibodies associated with myositis. This comprehensive panel aids in the accurate diagnosis of conditions like <span className='font-bold'>Dermatomyositis</span> and <span className='font-bold'>Polymyositis</span>, enabling timely intervention and management.
          </p>
        </section>

        {/* What is Myositis */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            What is Myositis?
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Myositis refers to a group of <span className='font-bold'>inflammatory muscle diseases</span> that cause chronic muscle inflammation and progressive weakness. It may be hereditary, infection-related, toxin-induced, or triggered by an immune system disorder.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Two of the most well-recognized forms are:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-gray-600 mb-2">
              <strong>Polymyositis</strong> – Characterized by symmetrical muscle weakness, typically affecting the hips, thighs, shoulders, and upper arms.
            </li>
            <li className="text-gray-600 mb-2">
              <strong>Dermatomyositis</strong> – Similar to polymyositis, but with additional hallmark skin manifestations, including rashes on the face, knuckles, and chest.
            </li>
          </ul>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Because myositis is rare and often misdiagnosed, accurate laboratory testing is essential for early intervention.
          </p>
        </section>

        {/* Role of the Test */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Role of the Myositis Profile Test
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            The <span className='font-bold'>Myositis Profile</span> test helps identify specific <span className='font-bold'>myositis autoantibodies</span> that serve as markers of these autoimmune conditions. Detection of these antibodies is crucial for:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-gray-600 mb-2">Confirming diagnosis of <span className='font-bold'>Dermatomyositis and Polymyositis</span></li>
            <li className="text-gray-600 mb-2">Differentiating between various types of <span className='font-bold'>skeletal muscle autoimmune disorders</span></li>
            <li className="text-gray-600 mb-2">Monitoring disease progression and response to treatment</li>
            <li className="text-gray-600 mb-2">Helping physicians tailor therapy for better patient outcomes</li>
          </ul>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            By testing <span className='font-bold'>16 different antigens</span>, this panel provides a detailed assessment of the patient's immune profile.
          </p>
        </section>

        {/* Test Details */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Test Details:
          </h2>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-gray-600 mb-2"><strong>Test & Code:</strong> Myositis Profile (16 Antigens)</li>
            <li className="text-gray-600 mb-2"><strong>Sample Type:</strong> 3 ml serum in SST (serum separator tube)</li>
            <li className="text-gray-600 mb-2"><strong>Turnaround Time (TAT):</strong> 5 days</li>
            <li className="text-gray-600 mb-2"><strong>Cost:</strong> INR 15,900</li>
            <li className="text-gray-600 mb-2"><strong>Prerequisite:</strong> None. However, sharing clinical history or prescription can improve result interpretation.</li>
          </ul>
        </section>

        {/* Why Choose */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Why Choose the Myositis Profile (16 Antigens) Test?
          </h2>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-4">
            <h2 className="text-lg font-bold text-purple-700 mb-3">
              Comprehensive Antibody Coverage
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              This test evaluates a broad panel of <span className='font-bold'>myositis autoantibodies</span>, covering 16 antigens linked to autoimmune muscle diseases.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg mb-4">
            <h2 className="text-lg font-bold text-purple-700 mb-3">
              Early & Accurate Diagnosis
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Since myositis can mimic other disorders, antibody testing improves diagnostic accuracy and reduces delays in initiating treatment.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg mb-4">
            <h2 className="text-lg font-bold text-purple-700 mb-3">
              Non-Invasive & Simple Procedure
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              A single <span className='font-bold'>blood sample</span> is sufficient, making it easy and convenient for patients.
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg mb-4">
            <h2 className="text-lg font-bold text-purple-700 mb-3">
              Trusted Laboratory Expertise
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              At Dr. Dangs Lab, all tests are performed using advanced technology with stringent quality controls to ensure accuracy and reliability.
            </p>
          </div>
        </section>

        {/* Who Should Get */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Who Should Get the Myositis Autoimmune Test?
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Doctors may recommend the Myositis Profile lab test in Delhi or Gurgaon if you experience:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-gray-600 mb-2">Unexplained muscle weakness</li>
            <li className="text-gray-600 mb-2">Fatigue and difficulty performing daily activities</li>
            <li className="text-gray-600 mb-2">Muscle pain or tenderness</li>
            <li className="text-gray-600 mb-2">Rashes associated with muscle symptoms</li>
            <li className="text-gray-600 mb-2">Shortness of breath due to weakened respiratory muscles</li>
            <li className="text-gray-600 mb-2">Elevated muscle enzymes detected in prior blood tests</li>
          </ul>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            If you have any of these, your physician may order this myositis antigen test as part of your diagnostic pathway.
          </p>
        </section>

        {/* Cost */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            What is the Cost of Myositis Profile (16 Antigens) Test?
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            The Myositis Profile (16 Antigens) Test is priced at  <span className='font-bold'>₹15,900</span> at Dr. Dangs Lab.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            This cost includes comprehensive testing of 16 antigens, expert interpretation, and accurate reporting to support early diagnosis and effective treatment planning.
          </p>
        </section>

        {/* Understanding Results */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Understanding the Results
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            The Myositis autoantibodies test provides results that help physicians confirm or rule out specific autoimmune muscle diseases.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-gray-600 mb-2">
              <strong>Positive Result</strong> – Indicates the presence of one or more autoantibodies, suggesting an autoimmune process affecting skeletal muscles.
            </li>
            <li className="text-gray-600 mb-2">
              <strong>Negative Result</strong> – Reduces the likelihood of autoimmune myositis but does not completely rule out the condition.
            </li>
          </ul>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Interpretation must always be done in conjunction with clinical findings, patient history, and other laboratory tests.
          </p>
        </section>

        {/* Importance of Early Diagnosis */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Importance of Early Diagnosis
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Early detection through the Dermatomyositis blood test or Polymyositis diagnosis test is vital for:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-gray-600 mb-2">Preventing long-term muscle damage</li>
            <li className="text-gray-600 mb-2">Initiating prompt treatment with immunosuppressants or biologics</li>
            <li className="text-gray-600 mb-2">Reducing complications such as difficulty swallowing or respiratory weakness</li>
            <li className="text-gray-600 mb-2">Enhancing quality of life with timely medical intervention</li>
          </ul>
        </section>

        {/* Availability */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Availability in Delhi NCR & Gurgaon
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Patients searching for myositis profile test Delhi NCR or myositis antibodies test Gurgaon can access this specialized diagnostic service conveniently at Dr. Dangs Lab.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Our lab provides state-of-the-art testing with:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-gray-600 mb-2"><strong>Pan-India sample collection</strong></li>
            <li className="text-gray-600 mb-2"><strong>Home collection facility</strong> on request</li>
            <li className="text-gray-600 mb-2"><strong>Quick turnaround time of 5 days for results</strong></li>
          </ul>
        </section>

        {/* Related Tests */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Related Tests
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Along with the myositis autoimmune test, physicians may also recommend additional investigations like:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-gray-600 mb-2">Muscle enzyme tests (e.g., Creatine Kinase)</li>
            <li className="text-gray-600 mb-2">Electromyography (EMG)</li>
            <li className="text-gray-600 mb-2">MRI scans of affected muscles</li>
            <li className="text-gray-600 mb-2">Muscle biopsy in select cases</li>
          </ul>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            These tests, when combined with the myositis profile test, provide a complete clinical picture.
          </p>
        </section>

        {/* Why Dr. Dangs Lab */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Why Dr. Dangs Lab for Myositis Profile Test?
          </h2>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-gray-600 mb-2">
              <strong>Trusted Diagnostic Excellence</strong> – Serving patients with accuracy and compassion for decades
            </li>
            <li className="text-gray-600 mb-2">
              <strong>Specialized Testing Portfolio</strong> – Offering advanced autoimmune and molecular testing solutions
            </li>
            <li className="text-gray-600 mb-2">
              <strong>Expert Interpretation</strong> – Reports reviewed by experienced pathologists
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            The Myositis Profile (16 Antigens) is a specialized diagnostic test that helps detect autoantibodies linked to autoimmune muscle diseases. It plays a vital role in the accurate diagnosis of Dermatomyositis and Polymyositis, ensuring patients receive timely and effective treatment.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            If you are experiencing persistent muscle weakness, pain, or unexplained fatigue, consult your doctor about the Myositis Profile lab test Delhi or Myositis antibodies test Gurgaon. With accurate testing and early intervention, the impact of autoimmune muscle diseases can be significantly reduced.
          </p>
        </section>

        {/* CTA Section */}
        <section className="mb-6">
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <p className="text-gray-800 mb-2">✅ <strong>Book your Myositis Profile test at Dr. Dangs Lab today.</strong></p>
            <p className="text-gray-800 mb-2">📞 Call <a className="text-blue-500" href="tel:+919999992020">+91-9999992020</a></p>
            <p className="text-gray-800">🌐 Visit <a className="text-blue-500" href="https://www.drdangslab.com" target="_blank" rel="noopener noreferrer">www.drdangslab.com</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MyositisProfilePage;