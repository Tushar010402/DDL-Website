

import Link from 'next/link';
import { Metadata } from 'next';


export async function generateMetadata() {
  return {
    title: 'Type 1 Diabetes Autoantibody Test Delhi & Gurgaon – Early Detection',
    description: 'Book Type 1 Diabetes Autoantibody Panel at Dr. Dangs Lab, Delhi/Gurgaon. Detect IAA, ICA & GAD 65 early for accurate diagnosis and better diabetes care.',
    keywords: 'Type 1 Diabetes Autoantibody Test, T1DM Autoantibody Panel Delhi, Insulin Antibodies Test, Islet Cell Antibodies Test, GAD 65 Antibodies Test, LADA Diagnosis Test, Autoimmune Diabetes Test Delhi NCR, Early Diabetes Detection Test Gurgaon, Dr. Dangs Lab Diabetes Test, Autoimmune Diabetes Screening',
  };
}


export default async function Type1DiabetesAntibodyPage() {
  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <div 
        className="w-full h-[600px] mt-5 bg-center bg-no-repeat bg-cover relative flex justify-center items-center text-white overflow-hidden bg-[url('/PhotosAndLogos/Diabetes.webp')]" 
        role="img"
        aria-label="Type 1 Diabetes Autoantibody Panel – Early Detection for Better Care"
      >
      </div>

      {/* Content Section */}
      <div className="p-8 mt-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Type 1 Diabetes Autoantibody Panel – Early Detection for Better Care
        </h1>
        
        {/* Introduction */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Introduction
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Type 1 Diabetes Mellitus (T1DM) is a chronic autoimmune condition in which the immune system mistakenly attacks the insulin-producing beta cells of the pancreas. As a result, the body cannot produce enough insulin, leading to high blood sugar levels. Early detection of this autoimmune process is crucial, especially in children, adolescents, and adults at risk of developing Latent Autoimmune Diabetes in Adults (LADA).
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            At <Link href="https://www.drdangslab.com" className='text-blue-500' target="_blank" rel="noopener noreferrer">Dr. Dangs Lab</Link>, we are pleased to introduce the <span className='font-bold'>Type 1 Diabetes Autoantibody Panel</span> — a comprehensive screening panel that includes <span className='font-bold'>Insulin Antibodies (IAA)</span>, <span className='font-bold'>Islet Cell Antibodies (ICA)</span>, and <span className='font-bold'>GAD 65 Antibodies</span>. These tests help in diagnosing autoimmune diabetes before the clinical onset, allowing for timely intervention, effective monitoring, and improved long-term management.
          </p>
        </section>

        {/* What Is the Panel */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            What Is the Type 1 Diabetes Autoantibody Panel?
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            The Type 1 Diabetes autoantibody test is designed to detect specific antibodies that target insulin or insulin-producing cells. These antibodies are often present months or even years before blood sugar abnormalities appear. By identifying them early, doctors can:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-gray-600 mb-2">Confirm autoimmune involvement in suspected diabetes cases.</li>
            <li className="text-gray-600 mb-2">Differentiate between Type 1 and Type 2 Diabetes.</li>
            <li className="text-gray-600 mb-2">Diagnose LADA (Latent Autoimmune Diabetes in Adults).</li>
            <li className="text-gray-600 mb-2">Assess risk in children and adolescents with a family history of T1DM.</li>
          </ul>
        </section>

        {/* The Panel Tests */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            The panel consists of three tests:
          </h2>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-4">
            <h3 className="text-lg font-bold text-purple-700 mb-3">
              1. Insulin Antibodies (IAA)
            </h3>
            <ul className="list-disc pl-5">
              <li className="text-gray-600 mb-2">Detects autoantibodies against insulin.</li>
              <li className="text-gray-600 mb-2">Often the first antibody to appear in children who are at risk of developing T1DM.</li>
              <li className="text-gray-600 mb-2">Helps in diagnosing early-onset Type 1 Diabetes.</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg mb-4">
            <h3 className="text-lg font-bold text-purple-700 mb-3">
              2. Islet Cell Antibodies (ICA)
            </h3>
            <ul className="list-disc pl-5">
              <li className="text-gray-600 mb-2">Identifies antibodies against pancreatic islet cells, which produce insulin.</li>
              <li className="text-gray-600 mb-2">The presence of ICA is a strong indicator of autoimmune activity.</li>
              <li className="text-gray-600 mb-2">Plays a crucial role in distinguishing autoimmune diabetes from other forms.</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg mb-4">
            <h3 className="text-lg font-bold text-purple-700 mb-3">
              3. GAD 65 Antibodies (Glutamic Acid Decarboxylase)
            </h3>
            <ul className="list-disc pl-5">
              <li className="text-gray-600 mb-2">Detects antibodies against the enzyme GAD 65, which is present in pancreatic beta cells.</li>
              <li className="text-gray-600 mb-2">Commonly found in both children and adults with T1DM or LADA.</li>
              <li className="text-gray-600 mb-2">Strong predictor of autoimmune progression in diabetes.</li>
            </ul>
          </div>
        </section>

        {/* Key Test Information */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Key Test Information
          </h2>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-gray-600 mb-2"><strong>Fasting:</strong> No fasting needed.</li>
            <li className="text-gray-600 mb-2"><strong>Sample Type:</strong> 1 SST tube for each test.</li>
            <li className="text-gray-600 mb-2"><strong>Turnaround Time (TAT):</strong> Varies depending on the panel selected, typically within a few working days.</li>
            <li className="text-gray-600 mb-2"><strong>Availability:</strong> Now available at Dr. Dangs Lab, with home sample collection facilities in Delhi NCR, Gurgaon, and pan-India.</li>
          </ul>
        </section>

        {/* Why Is Testing Important */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Why Is Type 1 Diabetes Autoantibody Testing Important?
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Unlike Type 2 Diabetes, which is primarily linked to lifestyle factors, Type 1 Diabetes is an autoimmune disease. Early detection through autoantibody screening provides multiple benefits:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-gray-600 mb-2"><strong>Early Diagnosis</strong> – Identifying antibodies before symptoms appear allows for close monitoring and timely initiation of treatment.</li>
            <li className="text-gray-600 mb-2"><strong>Better Management</strong> – Distinguishing between Type 1 and Type 2 ensures the right therapy, such as insulin initiation.</li>
            <li className="text-gray-600 mb-2"><strong>Risk Prediction</strong> – Family members of T1DM patients can be screened for early signs.</li>
            <li className="text-gray-600 mb-2"><strong>LADA Detection</strong> – Many adults misdiagnosed with Type 2 Diabetes actually have LADA. Antibody testing clarifies this distinction.</li>
            <li className="text-gray-600 mb-2"><strong>Prevention of Complications</strong> – Early monitoring helps reduce risks of diabetic ketoacidosis (DKA) at the time of diagnosis.</li>
          </ul>
        </section>

        {/* Who Should Take the Test */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Who Should Take Type 1 Diabetes Autoantibody Test?
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            The Type 1 Diabetes antibody panel is recommended for:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-gray-600 mb-2">Children or adolescents showing unexplained high blood sugar or diabetes symptoms.</li>
            <li className="text-gray-600 mb-2">Adults with suspected LADA, especially those who are lean, have poor response to oral medications, or have other autoimmune diseases.</li>
            <li className="text-gray-600 mb-2">First-degree relatives of Type 1 Diabetes patients who wish to assess risk.</li>
            <li className="text-gray-600 mb-2">Patients with uncertain diagnosis, where it is difficult to differentiate between Type 1 and Type 2 Diabetes.</li>
          </ul>
        </section>

        {/* Advantages */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Advantages of the Type 1 Diabetes Autoantibody Test at Dr. Dangs Lab
          </h2>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-gray-600 mb-2">Comprehensive coverage of three major autoimmune markers.</li>
            <li className="text-gray-600 mb-2">Accurate detection using advanced technology.</li>
            <li className="text-gray-600 mb-2">No fasting required for convenience.</li>
            <li className="text-gray-600 mb-2">Home collection available across Delhi, Gurgaon, and NCR.</li>
            <li className="text-gray-600 mb-2">Trusted by physicians for precise results.</li>
          </ul>
        </section>

        {/* Test Descriptions */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Type 1 Diabetes Autoantibody Test Descriptions
          </h2>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-gray-600 mb-2"><strong>Type 1 Diabetes Autoantibody Test in Delhi NCR</strong> – Early detection of autoimmune diabetes through IAA, ICA, and GAD 65 markers.</li>
            <li className="text-gray-600 mb-2"><strong>Insulin Antibodies Test in Delhi NCR and Gurgaon</strong> – Helps diagnose Type 1 Diabetes in children and adolescents by detecting antibodies against insulin.</li>
            <li className="text-gray-600 mb-2"><strong>Islet Cell Antibodies Test in Delhi NCR and Gurgaon</strong> – Screens for autoimmune activity affecting insulin-producing pancreatic cells.</li>
            <li className="text-gray-600 mb-2"><strong>GAD 65 Antibodies Test in Delhi NCR and Gurgaon</strong> – Identifies antibodies linked with Type 1 Diabetes and LADA in adults.</li>
            <li className="text-gray-600 mb-2"><strong>Comprehensive T1DM Antibody Panel</strong> – Ideal for early diagnosis, differentiation, and long-term management of diabetes.</li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            FAQs Around Type 1 Diabetes Autoantibody
          </h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              What is the difference between Type 1 and Type 2 Diabetes?
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Type 1 Diabetes is an autoimmune condition where the body attacks insulin-producing cells. Type 2 Diabetes is usually linked to insulin resistance and lifestyle factors.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Do I need to fast before this test?
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              No. The Type 1 Diabetes antibody panel does not require fasting.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Can this test predict diabetes before symptoms?
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Yes, Autoantibodies often appear months or years before the onset of clinical symptoms, making this test highly valuable for early diabetes screening.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Is this test available in Gurgaon and Delhi NCR?
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Yes, the test is available across Delhi, Gurgaon, and NCR with both in-lab and home collection options.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              What is LADA, and why is it important?
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Latent Autoimmune Diabetes in Adults (LADA) is a slower-progressing form of Type 1 Diabetes that occurs in adults. Many patients are misdiagnosed as having Type 2 Diabetes, leading to delayed treatment. Autoantibody testing confirms the correct diagnosis.
            </p>
          </div>
        </section>

        {/* Why Choose Dr. Dangs Lab */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Why Choose Dr. Dangs Lab?
          </h2>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-gray-600 mb-2">
              <strong>Trusted Legacy</strong> – Serving patients with excellence for over 4 decades.
            </li>
            <li className="text-gray-600 mb-2">
              <strong>Cutting-Edge Technology</strong> – Ensuring precise and reliable results.
            </li>
            <li className="text-gray-600 mb-2">
              <strong>Pan-India Reach</strong> – Easy access through sample collection centers.
            </li>
            <li className="text-gray-600 mb-2">
              <strong>Doctor-Led Guidance</strong> – Expert consultation and support for every patient.
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            The Type 1 Diabetes Autoantibody Panel at Dr. Dangs Lab is a powerful tool for early detection and accurate diagnosis of autoimmune diabetes. By combining Insulin Antibodies (IAA), Islet Cell Antibodies (ICA), and GAD 65 Antibodies, this panel provides a comprehensive evaluation, enabling doctors and patients to make informed decisions.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            If you are based in Delhi, Gurgaon, or anywhere in NCR, you can now book this test with ease — with or without a doctor's referral. Early diagnosis leads to better management, fewer complications, and improved quality of life.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Book your Type 1 Diabetes antibody test in Delhi NCR today at Dr. Dangs Lab and take the first step toward proactive diabetes care.
          </p>
        </section>

        {/* CTA Section */}
        <section className="mb-6">
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <p className="text-gray-800 mb-2">✅ <strong>Book your Type 1 Diabetes Autoantibody Panel at Dr. Dangs Lab today.</strong></p>
            <p className="text-gray-800 mb-2">📞 Call <a className="text-blue-500" href="tel:+919999992020">+91-9999992020</a></p>
            <p className="text-gray-800">🌐 Visit <a className="text-blue-500" href="https://www.drdangslab.com" target="_blank" rel="noopener noreferrer">www.drdangslab.com</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}