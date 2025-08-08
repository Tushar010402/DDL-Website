"use client";

import React from "react";
import Image from "next/image";
import styles from "./DiagnosticInPunjabibagh.module.css";


  const features = [
    {
      number: 1,
      title: "Easy Online Booking – Just a Click Away",
      description:
        "Choose your desired test or health package, choose your slot, and add your address – getting tested at home has never been easier.",
      image: "/PhotosAndLogos/image1.jpg",
    },
    {
      number: 2,
      title: "Child-Friendly Phlebotomists – Gentle, Safe & Caring",
      description:
        "Our centres have specially trained pediatric phlebotomists who ensure a stress-free experience for your little ones – with precision, hygiene, and a comforting touch.",
      image: "/PhotosAndLogos/image2.jpg",
    },
    {
      number: 3,
      title: "Home Collection – Safe, Timely & Hassle-Free",
      description:
        "Our experts follow rigorous safety protocols and arrive on time to collect your sample with utmost care and professionalism.",
      image: "/PhotosAndLogos/image3.jpg",
    },
    {
      number: 4,
      title: "Expert Processing – Your Sample in Safe Hands",
      description:
        "Once collected, your sample is swiftly transported under temperature controlled conditions to our lab, where it's handled by highly qualified technicians.",
      image: "/PhotosAndLogos/image4.jpg",
    },
    {
      number: 5,
      title: "Fast Reports + Pathologist Call-Back facility",
      description:
        "Receive your reports quickly! Need help decoding them? Our senior pathologists and lab specialists are just a free call away.",
      image: "/PhotosAndLogos/image5.jpg",
    },
    {
      number: 6,
      title: "NABL Accredited Excellence – Since 2001",
      description:
        "With NABL accreditation for over two decades, we’re trusted for our uncompromising accuracy, reliability, and top-notch quality standards.",
      image:"/PhotosAndLogos/nabl logo.jpg",
    },
  ];

const DiagnosticInPunjabibagh = () => {
  return (
    <>
      <div className={styles.H3N2MainDiv}>
        <div className={styles.H3N2FirstInnerDiv}>
          <h1> Diagnostic Centre in Punjabi Bagh</h1>
        </div>

        <div className={styles.H3N2BelowMainDIv}>
          <h2>
            Looking for the Best Diagnostic Lab in Punjabi Bagh? Visit Dr. Dangs
            Lab at West Punjabi Bagh
          </h2>
          <p>
            In today’s fast-paced world, maintaining good health has become more
            important than ever. Whether you are managing a lifestyle condition,
            feeling unwell, or just going for a routine check-up, choosing the
            right lab for your tests is critical. A timely and accurate
            diagnosis can not only help in early detection but also in better
            treatment outcomes.
          </p>

          <p>
            If you are in West Delhi and looking for the best diagnostic lab in
            Punjabi Bagh, then your search ends at Dr. Dangs Lab, located
            conveniently opposite Central Market, West Punjabi Bagh. With over
            three decades of trust, precision, and medical ethics, Dr. Dangs Lab
            is now among the most preferred pathlabs in Punjabi Bagh and across
            Delhi NCR.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "/PhotosAndLogos/PB1.jpg",
              "/PhotosAndLogos/PB2.jpg",
              "/PhotosAndLogos/PB3.jpg",
              "/PhotosAndLogos/PB4.jpg",
            ].map((src, index) => (
              <div
                key={index}
                className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>

          <h2 className="mt-5">Why Choose Dr. Dangs Lab in Punjabi Bagh?</h2>
          <p>
            Finding a diagnostic centre in Punjabi Bagh that is both trustworthy
            and technologically advanced can be a challenge. Dr. Dangs Lab
            brings years of excellence, cutting-edge diagnostic tools, and
            patient-centric services all under one roof.
          </p>
          <p>Here’s what makes our diagnostic lab in Punjabi Bagh stand out:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Legacy of Trust and Accuracy :</strong> The lab has earned
              a national reputation for accurate test reports and ethical
              diagnostic practices. Our Punjabi Bagh centre brings the same
              commitment and quality to West Delhi residents.
            </li>
            <li>
              <strong>Advanced Diagnostic Technology :</strong> Our pathology
              lab in Punjabi Bagh is equipped with the latest analyzers and
              diagnostic platforms to provide fast and precise results across
              multiple specialties including biochemistry, immunology, molecular
              biology, and genetics.
            </li>
            <li>
              <strong>Expert Pathologists and Technicians :</strong> Every
              report at Dr. Dangs Lab is reviewed by senior pathologists. Our
              Punjabi Bagh team is highly trained, ensuring your test results
              are both timely and clinically reliable.
            </li>
            <li>
              <strong>Safe and Convenient Home Collection :</strong> If you
              prefer not to step out, we offer home sample collection across
              Punjabi Bagh and nearby areas. Our trained phlebotomists ensure a
              safe and hygienic collection process from the comfort of your
              home.
            </li>
            <li>
              <strong>Specialist Pediatric Phlebotomists:</strong> We have
              specialist pediatric phlebotomists at our Punjabi Bagh centre who
              are skilled in collecting samples from children with utmost care,
              safety, and patience.
            </li>
            <li>
              <strong>Wide Test Menu and Health Packages :</strong> From routine
              blood tests to advanced diagnostics, we offer a large variety of
              tests and curated wellness packages for preventive and
              personalised care.
            </li>
            <li>
              <strong>Customised Health Profiles with Discover :</strong>{" "}
              Through Discover by Dr. Dangs, we help you build customised test
              profiles based on your age, health goals, lifestyle, and medical
              history — giving you a truly personalised diagnostic experience.
            </li>
          </ol>

          <h2 className="mt-5">Highlights of the Punjabi Bagh Centre
</h2>
          <p>
           Located at 1/51, Ground Floor, Opposite Central Market, West Punjabi Bagh, New Delhi, our centre is easy to access and patient-friendly. It features a clean, calm environment, minimal waiting time, and trained support staff to make your visit smooth and stress-free.

          </p>
     <a href="https://g.co/kgs/vwe8fBs" target="_blank" rel="noopener noreferrer">
  <h1 className="text-xl text-blue-500 font-bold">📍 View on Google Maps</h1>
</a>
  <h3 className="text-xl font-semibold">📞 Call us at: +91-9810678165</h3>
  <p className="text-base text-gray-600">Timing: 8:00 AM to 6:00 PM (Monday–Saturday)</p>

  <p>Our diagnostic centre in Punjabi Bagh is NABL-accredited, ensuring top-notch quality control and reliable results for every test, every time.
</p>
          <h2>Popular Health Check-up Packages at Our Punjabi Bagh Lab
</h2>
          <p>
            To make healthcare affordable and easy for the entire family, our diagnostic lab Punjabi Bagh offers a variety of health check-up packages tailored for different age groups and health needs:

          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
            <a href="https://www.drdangslab.com/health-checkup-packages "  target="_blank" rel="noopener noreferrer" className="text-blue-500"><strong>Comprehensive Full Body Check-up
</strong></a>  
            </li>
            <li>
              <strong>Women's Health Panels including PCOS panel
</strong>
            </li>
            <li>
              <strong>Senior Citizen Wellness Profiles
</strong>
            </li>
            <li>
              <strong>Pre-Marital & Fertility Assessments
</strong>
            </li>
            <li>
             <a href="https://www.drdangslab.com/food-allergy-test"  target="_blank" rel="noopener noreferrer" className="text-blue-500"><strong>Allergy & Food Intolerance panels

</strong></a>  
            </li>
            <li>
              <strong>Heart & Diabetes Profiles
</strong>
            </li>
            <li>
              <strong>Vitamin & Minerals Profiles
</strong>
            </li>
            <li>
              <strong>Hormone Screening

</strong>
            </li>
          </ol>
          <p className="mt-4">
           These packages are thoughtfully created by our in-house pathologists and reviewed frequently to keep up with medical advancements.

          </p>

          <h2>Why Residents Trust Our Path Labs in Punjabi Bagh
</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>
              <strong>Trusted since 1983
</strong>
            </li>
            <li>
              <strong> Digital and printed test reports
</strong> 
            </li>
            <li>
              <strong> Online bookings and Reports on WhatsApp
</strong> 
            </li>
            <li>
              <strong>Triple Quality Check Protocol for unmatched reporting quality
</strong> 
            </li>
            <li>
              <strong> Doctor support available for report clarification

</strong> 
            </li>
            <li>
              <strong> Special care for children, the elderly, and chronic patients


</strong> 
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-4">
            Real Experiences from Punjabi Bagh Patients

          </h2>
          <div className="space-y-6">
            <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700">
              “Navlesh collected samples for Avyukt, for CBC and Dengue Serology. Excellent collection procedure followed by Navlesh for child sample collection, which is otherwise a very difficult task. He did it with utmost ease and patience. Extremely professional work. Very impressive. Thank you very much.”

              <footer className="mt-2 font-semibold text-sm">
                — Anand Gupta
              </footer>
            </blockquote>

            <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700">
               “Very smooth service, the doctors are really helpful and the technicians also make you feel at ease during a blood test. Mr Navlesh does my blood work whenever I need it and he’s amazing!”

              <footer className="mt-2 font-semibold text-sm">
                — Kamalika Anand
              </footer>
            </blockquote>

            <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700">
              “Great experience, Navlesh was very calm and prepared, he explained every step of every test. He was on time and the whole process was smoother even tho I’m really scared of needles.”

              <footer className="mt-2 font-semibold text-sm">
                — Tanak Bajaj
              </footer>
            </blockquote>
          </div>
          <h3 className="mt-2">Final Words</h3>
          <p>
            Health is wealth, and to protect it, accurate testing plays a vital role. If you’re looking for the best pathlabs in Punjabi Bagh, choose a lab that has a proven record, uses the latest medical technology, and truly cares about your health.<br></br>
            Dr. Dangs Lab is more than just a lab — it’s a place where science meets care. We are here to support your wellness journey with timely diagnostics, expert care, and the trust of lakhs of patients.

          </p>

          <h3>
           Make the right choice. Choose the best diagnostic lab in Punjabi Bagh – choose Dr. Dangs Lab.

          </h3>

          <h2 className="mt-3">Frequently Asked Questions</h2>
          <p>
            <strong>
              Q1: Which is the best diagnostic lab in Punjabi Bagh for full body check-ups?
            </strong>
            <br />
            A1: Dr. Dangs Lab Punjabi Bagh offers a range of complete health packages designed by expert pathologists. We are known for being one of the best diagnostic labs in Punjabi Bagh with accurate reports and experienced staff.

          </p>

          <p>
            <strong>
              Q2: Do you offer home sample collection in Punjabi Bagh?

            </strong>
            <br />
            A2: Yes, we offer reliable and hygienic home sample collection across West Delhi, including Punjabi Bagh. You can book the service online or by calling our helpline.

          </p>

          <p>
            <strong>
              Q3:  Are reports from Dr. Dangs Lab Punjabi Bagh trusted by doctors?
            </strong>
            <br />
            A3: Absolutely. Our reports are trusted by top doctors and hospitals. Each test is conducted under strict quality protocols and reviewed by senior doctors for accuracy.

          </p>

          <p>
            <strong>
              Q4: What tests can I get done at your Punjabi Bagh centre?

            </strong>
            <br />
            A4: Our diagnostic centre in Punjabi Bagh offers routine tests (like CBC, Vitamin D, Thyroid), hormone tests, fertility panels, cancer screening, allergy tests, and more.

          </p>
          <p>
            <strong>
              Q5:  How do I book a test at the Punjabi Bagh path lab?

            </strong>
            <br />
            A5: You can visit our centre directly, call us, or book a test online through our website. Reports are delivered by email, WhatsApp, and can be collected from the centre.


          </p>
        </div>
         <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Care You Can Book, Trust You Can Feel.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {features.map((feature) => (
    <div
      key={feature.number}
      className="bg-white shadow-md rounded-md overflow-hidden"
    >
      {/* Image container with number overlay */}
      <div className="relative w-full h-40">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 bg-red-600 text-white w-10 h-10 flex items-center justify-center text-sm font-bold rounded">
          {feature.number}
        </div>
      </div>
      {/* Text content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {feature.title}
        </h3>
        <p className="mt-2 text-gray-700 text-sm">
          {feature.description}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
      </div>
    </>
  );
};

export default DiagnosticInPunjabibagh;
