"use client";
import React from "react";

const DendriteDx = () => {
  return (
    <div className="relative bg-white">
      {/* Hero Section with Background Image */}
      <div
  className="w-full h-[600px] bg-cover mt-5 bg-center bg-no-repeat relative flex justify-center items-center text-white overflow-hidden banner"
  role="img"
  aria-label="Dendrite Dx – Advanced Alzheimer’s Diagnosis in Delhi NCR"
>
</div>

<style jsx>{`
  /* Default (Desktop) */
  .banner {
    background-image: url('/PhotosAndLogos/Alzheimer-Page-Banner1.webp');
  }

  /* Tablet (iPad Portrait & Landscape) */
  @media (min-width: 769px) and (max-width: 1024px) {
    .banner {
      background-image: url('/PhotosAndLogos/Alzheimer-Tablet-Banner-Image.webp');
    }
  }

  /* Mobile */
  @media (max-width: 768px) {
    .banner {
      background-image: url('/PhotosAndLogos/Alzheimer-Page-Mobile-Banner1.webp');
    }
  }
`}</style>



      {/* Main Content Section */}
      <div className="p-8 mt-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Dendrite Dx – Advanced Alzheimer's Diagnosis in Delhi NCR 
        </h1>
        
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
        The Integrated Suite for Cognitive Health & Alzheimer's Diagnosis by Dr. Dangs Lab
        </h2>
        
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          Dr. Dangs Lab unveils an integrated diagnostics pathway for precision brain health — that begins with digital cognitive assessments and blood-based biomarkers to screen mild cognitive decline, then progresses to stepwise reflex testing for Alzheimer's, including FDA-approved biomarkers, targeted genotyping, and an exclusive LC-MS–based proprietary confirmatory test in collaboration with C2N Diagnostics (USA).
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Early Detection with Dendrite Dx for a Healthier Brain
        </h2>
        <ol className="list-disc pl-5 mb-6">
          <li className="text-gray-600 mb-2">Alzheimer's affects over 55 million people worldwide.</li>
          <li className="text-gray-600 mb-2">Most cases are detected too late, as subtle early changes are often missed in routine checkups.</li>
          <li className="text-gray-600 mb-2">Traditional methods like PET/MRI scans or lumbar punctures are expensive, invasive, and not widely accessible.</li>
          <li className="text-gray-600 mb-2">Dendrite Dx bridges this gap by offering a non-invasive, affordable, and scientifically validated diagnostic pathway — combining a digital cognitive assessment with advanced blood biomarkers to detect risks years earlier.</li>
        </ol>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Dendrite Dx?</h2>
        <ul className="list-disc pl-5 mb-6">
          <li className="text-gray-600 mb-2">15–20 minute digital brain cognitive assessment (FDA cleared, ISO 13485:2016, ISO 27001:2013 certified)</li>
          <li className="text-gray-600 mb-2">Scientifically validated, FDA-cleared biomarkers (pTau-217, Amyloid Beta 1-42 and APO E)</li>
          <li className="text-gray-600 mb-2">A liquid chromatography-tandem mass spectrometry test combining amyloid beta and p-tau measures into a proprietary APS2 result for accurate Alzheimer's disease test analysis</li>
          <li className="text-gray-600 mb-2">Early detection before major cognitive decline</li>
          <li className="text-gray-600 mb-2">Non-invasive alternative to PET scans & spinal taps</li>
          <li className="text-gray-600 mb-2">Helps identify reversible causes like vitamin deficiencies, thyroid dysfunction, and metabolic imbalance</li>
        </ul>

        <blockquote className="text-gray-700 italic text-xl font-bold border-l-4 border-blue-500 pl-4 my-6">
          "Alzheimer's that surfaces in the 70s may be signaled in the 40s by a simple blood draw."
        </blockquote>
        <p className="text-sm text-gray-600 mb-6">
          <strong>Reference:</strong> Diagnostic Accuracy of a Plasma Phosphorylated Tau 217 Immunoassay for Alzheimer's Disease Pathology Nicholas J. Ashton, PhD - JAMA Neurology
        </p>

        <h2 className="text-xl font-bold text-gray-800 mb-4">Included in Every Package</h2>
        
        <h2 className="text-lg text-gray-800 mb-3">Digital Brain Cognitive Assessment</h2>
        <ul className="list-disc pl-5 mb-4">
          <li className="text-gray-600 mb-2">Quick 15–20 min validated test</li>
          <li className="text-gray-600 mb-2">Measures memory, attention, executive function, processing speed & visuospatial skills</li>
          <li className="text-gray-600 mb-2">Generates an age-adjusted cognitive profile with actionable insights</li>
        </ul>
        <p className="text-sm text-gray-600 mb-6">
          <strong>Reference:</strong> Chew, E. Y. C., Prem, P., Kuah, J., Vij, N., & Balasundaram, A. (2023). Comparison of DBFS with MoCA and MMSE tools for MCI screening. Biomedical Informatics, 19(5), 22. 
          <a className="text-blue-500" href="https://pubmed.ncbi.nlm.nih.gov/37886151/">https://pubmed.ncbi.nlm.nih.gov/37886151/</a>
        </p>

        <h2 className="text-lg font-semibold text-gray-800 mb-3">Simple Blood Draw Using CLEIA (Chemiluminescent Enzyme Immunoassay) Method</h2>
        <ul className="list-disc pl-5 mb-4">
          <li className="text-gray-600 mb-2">Accurate, reliable, and CLIA-certified</li>
          <li className="text-gray-600 mb-2">Detects Alzheimer's biomarkers with greater accessibility and comfort</li>
          <li className="text-gray-600 mb-2">A game-changing alternative to invasive lumbar punctures and costly PET scans</li>
        </ul>
        <p className="text-sm text-yellow-700 font-semibold mb-6">Note: This is a screening test with a high Negative Predictive Value (NPV).</p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Packages</h2>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h4 className="text-xl font-bold text-purple-700 mb-3">Basic – Dendrite Dx</h4>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-gray-600 mb-2"><strong>pTau-217</strong> – Highly specific Alzheimer's marker</li>
            <li className="text-gray-600 mb-2"><strong>Amyloid Beta 1-42</strong> – Linked to amyloid plaque buildup</li>
            <li className="text-gray-600 mb-2">Quick 15–20 min validated Digital Cognitive Assessment test</li>
            <li className="text-gray-600 mb-2">Done through a simple CLEIA-based blood draw — fast, accurate, and patient-friendly</li>
          </ul>
          <p className="text-blue-700 font-semibold">➡ Perfect for: Family history, early symptoms, or baseline brain health screening.</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h4 className="text-xl font-bold text-purple-700 mb-3">Advanced – Dendrite Dx</h4>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-gray-600 mb-2"><strong>pTau-217</strong> – Highly specific Alzheimer's marker</li>
            <li className="text-gray-600 mb-2"><strong>Amyloid Beta 1-42</strong> – Linked to amyloid plaque buildup</li>
            <li className="text-gray-600 mb-2"><strong>APO E</strong> – Shows your inherited risk of developing Alzheimer's disease but does not confirm whether you will get it</li>
            <li className="text-gray-600 mb-2">Quick 15–20 min validated Digital Cognitive Assessment test</li>
          </ul>
          
          <h5 className="font-semibold text-purple-700 mb-2">Additional Cognitive & Health Markers:</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <p className="text-gray-600 mb-2"><strong>Cognition specific:</strong> Ferritin, Homocysteine</p>
              <p className="text-gray-600 mb-2"><strong>Hormonal:</strong> Thyroid (TSH, Free T3, Free T4), Cortisol, PTH, Calcium/Phosphate</p>
              <p className="text-gray-600 mb-2"><strong>Inflammatory:</strong> hs-CRP, Magnesium</p>
            </div>
            <div>
              <p className="text-gray-600 mb-2"><strong>Metabolic:</strong> HbA1c, Insulin, Lipid Profile (ApoB), Uric Acid, LFTs</p>
              <p className="text-gray-600 mb-2"><strong>Nutritional:</strong> Vitamin B12, Folate, Vitamin D, Protein/Albumin</p>
              <p className="text-gray-600 mb-2"><strong>Renal:</strong> Creatinine/eGFR</p>
              <p className="text-gray-600 mb-2"><strong>General Health:</strong> CBC</p>
            </div>
          </div>
          <p className="text-green-700 mt-3">These tests look at different aspects of your body that directly impact how your brain works—things like vitamin and hormone balance, blood sugar control, inflammation, and even kidney health. When any of these are off, it can show up as poor memory, low focus, mood changes, or a higher risk of long-term cognitive decline.</p>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg mb-6">
          <h4 className="text-xl font-bold text-purple-700 mb-3">Final Confirmation via PrecivityAD2™ (C2N Diagnostics) — Add-On Not Included in Standard Packages</h4>
          <p className="text-gray-600 mb-4">The <span className="font-bold">PrecivityAD2™ test</span> is a clinically available multi-analyte blood test for Alzheimer's, performed by liquid chromatography-tandem mass spectrometry, that determines whether a patient is likely positive or negative for the presence of brain amyloid plaques — one of the neuropathological findings of Alzheimer's disease.</p>
          <p className="text-gray-600 mb-4">The testing process uses highly sensitive and specialized laboratory technologies to identify and measure certain proteins that are found in blood and that are known to be associated with the presence of brain amyloid plaques. The main test result is a score, called the <span className="font-bold">Amyloid Probability Score 2 (APS2)</span> — a key metric used in cutting-edge blood tests for Alzheimer's.</p>
          <p className="italic text-gray-600 mb-4">Note: For a complete diagnostic pathway that begins with clinical evaluation and progresses through to definitive confirmation, the PrecivityAD2™ test plays an essential role in establishing the likelihood of amyloid pathology.</p>
          <p className="text-gray-600 mb-4">At Dr. Dangs Lab, we've partnered with C2N Diagnostics, a global leader in brain health testing, to bring to India the revolutionary <span>The PrecivityAD2™ Blood Test.</span></p>
          <p className="text-gray-600 mb-4">Offers a 360° brain & body health evaluation, helping detect both neurodegenerative and reversible causes of memory issues.</p>
          <ul className="list-disc pl-5 mt-3">
            <li className="text-gray-600 mb-2">Detects Amyloid Beta & pTau-217 proteins linked to brain plaque buildup</li>
            <li className="text-gray-600 mb-2">Powered by mass spectrometry + AI-backed algorithm</li>
            <li className="text-gray-600 mb-2">Gives you an APS2 Score (your likelihood of Alzheimer's-linked brain changes)</li>
            <li className="text-gray-600 mb-2">No painful spinal tap. No costly brain scans. Just 15 days.</li>
          </ul>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mb-4">Why Alzheimer's Diagnosis Matters?</h2>
        <ul className="list-disc pl-5 mb-6">
          <li className="text-gray-600 mb-2">Earlier diagnosis - better outcomes</li>
          <li className="text-gray-600 mb-2">Expanded access – reach underserved communities with a simple test</li>
          <li className="text-gray-600 mb-2">Improved planning – helps families make timely decisions about care & lifestyle</li>
          <li className="text-gray-600 mb-2">Supports research & trials – enables participation in disease-modifying therapies.</li>
        </ul>

        <h2 className="text-gray-900 text-lg mb-2">Who Should Get Tested?</h2>
        <ul className="list-disc pl-5 mb-6">
          <li className="text-gray-600 mb-2">Adults with a family history of Alzheimer's/dementia</li>
          <li className="text-gray-600 mb-2">Those with brain fog, memory lapses, or poor concentration</li>
          <li className="text-gray-600 mb-2">Patients with lifestyle risks (diabetes, hypertension, obesity)</li>
          <li className="text-gray-600 mb-2">Adults 45+ years for proactive cognitive health</li>
        </ul>

        <h2 className="text-lg font-semibold text-gray-800 mb-4">Reduce Your Risk of Alzheimer's with Dr. Dangs Lab</h2>
        <p className="text-gray-600 mb-4">You can lower your risk of Alzheimer's by keeping your brain, body, and heart healthy:</p>
        <ul className="list-disc pl-5 mb-6">
          <li className="text-gray-600 mb-2">Regular exercise</li>
          <li className="text-gray-600 mb-2">A balanced diet, like the Mediterranean or MIND diet</li>
          <li className="text-gray-600 mb-2">Good sleep</li>
          <li className="text-gray-600 mb-2">Managing conditions such as diabetes, high blood pressure, and cholesterol</li>
          <li className="text-gray-600 mb-2">Staying socially engaged and mentally active (learning, puzzles, reading)</li>
          <li className="text-gray-600 mb-2">Reducing stress</li>
          <li className="text-gray-600 mb-2">Avoid smoking, limit alcohol, and protect against head injuries</li>
        </ul>
        <p className="font-bold text-gray-800 mb-4">In short: what's good for your heart is good for your brain.</p>
        <p className="text-gray-600 mb-6">The FDA has approved two treatments that slow the progression of early-stage Alzheimer's by clearing amyloid plaques. Very soon, they will be launched in India.</p>

        <h2 className="text-lg font-semibold text-gray-800 mb-4">Why Dr. Dangs Lab?</h2>
        <ul className="list-disc pl-5 mb-6">
          <li className="text-gray-600 mb-2">4 decades of diagnostic excellence in India</li>
          <li className="text-gray-600 mb-2">Available pan-India</li>
          <li className="text-gray-600 mb-2">Among the first to integrate digital + blood-based Alzheimer's detection</li>
          <li className="text-gray-600 mb-2">Patient-centric approach: Accessible, affordable & scientifically rigorous</li>
        </ul>

        <h2 className="font-bold text-lg text-gray-800 mb-4">Take Charge of Your Brain Health Today</h2>
        <h4 className="font-semibold text-gray-800 mb-4">How to Get Started:</h4>
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p className="text-gray-800 mb-2"><strong>🌐</strong> <a className="text-blue-500" href="https://www.drdangslab.com">www.drdangslab.com</a></p>
          <p className="text-gray-800 mb-2"><strong>📞 Call us at</strong> 9999992020</p>
          <p className="text-gray-800 mb-2"><strong>📧 Email:</strong> <a className="text-blue-500" href="mailto:info@drdangslab.com">info@drdangslab.com</a></p>
          <p className="text-gray-800"><strong>🏠 Home collection available across Delhi NCR</strong></p>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mb-4">Final Thought</h2>
        <p className="text-lg font-semibold text-blue-800 bg-blue-50 p-4 rounded-lg">
          Dendrite Dx — Bridging the Gap in Alzheimer's Detection. Early, Accessible, Actionable.
        </p>
      </div>
    </div>
  );
};

export default DendriteDx;