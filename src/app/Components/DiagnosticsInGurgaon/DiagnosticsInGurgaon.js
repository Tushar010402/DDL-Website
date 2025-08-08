"use client";

import React from "react";
import Image from "next/image";
import styles from "./DiagnosticsInGurgaon.module.css";



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


const DiagnosticsInGurgaon = () => {
  return (
    <>
      <div className={styles.H3N2MainDiv}>
        <div className={styles.H3N2FirstInnerDiv}>
          <h1> Diagnostic Centre in Gurgaon</h1>
        </div>

        <div className={styles.H3N2BelowMainDIv}>
          <h2>
            Looking for the Best Diagnostic Lab in Gurgaon? Visit Dr. Dangs Lab
            Gurugram Centre
          </h2>
          <p>
            In today’s fast-moving world, good health is one of the most
            important things. Whether it's a simple fever, regular health
            check-up, or something serious that needs medical attention, the
            right diagnosis at the right time can make all the difference. This
            is why choosing the best diagnostic lab in Gurgaon is very
            important.
          </p>

          <p>
            We are happy to share that Dr. Dangs Lab, a trusted name in
            pathology and diagnostics for over 40 years, is now easily available
            at our Gurugram centre. Known for excellence, ethics, and quality,
            Dr. Dangs Lab is among the best pathlabs in Gurgaon, offering
            accurate reports, world-class technology, and expert guidance for
            all your diagnostic needs.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "/PhotosAndLogos/GGLab.jpg",
              "/PhotosAndLogos/gglab1.jpg",
              "/PhotosAndLogos/gglab2.jpg",
              "/PhotosAndLogos/gglab3.jpg",
              "/PhotosAndLogos/gglab4.jpg",
              "/PhotosAndLogos/gglab5.jpg",
              "/PhotosAndLogos/gglab6.jpg",
              "/PhotosAndLogos/gglab7.jpg",
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

          <h2 className="mt-5">
            Why Dr. Dangs Lab is the Best Diagnostic Lab in Gurgaon
          </h2>
          <p>
            When it comes to choosing a diagnostic centre in Gurgaon, people
            often look for three things – accuracy, reliability, and comfort.
            Dr. Dangs Lab offers all of these, and more. Here's what makes us
            the first choice for thousands of people in Gurugram:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Trusted Brand Name:</strong> We are a family-run lab known
              for delivering accurate results and ethical medical practices. We
              are proud to be considered one of the best pathlabs in Gurgaon and
              Delhi NCR.
            </li>
            <li>
              <strong>State-of-the-art Technology:</strong> Our Gurugram centre
              is equipped with the latest technology for sample testing and
              analysis. From basic blood tests to complex genetic and molecular
              testing, we have everything under one roof.
            </li>
            <li>
              <strong>Highly Trained Staff:</strong> Our team of pathologists,
              phlebotomists, and technicians are highly trained and experienced.
              Each test is double-verified for accuracy, and we follow
              international quality control standards.
            </li>
            <li>
              <strong>Home Collection Services:</strong> Too busy to visit the
              lab? No worries! Our diagnostic lab in Gurgaon offers easy and
              convenient home sample collection by expert phlebotomists. Just
              book your test online or on call, and we’ll reach your doorstep.
            </li>
            <li>
              <strong>Wide Range of Tests:</strong> Whether you need routine
              tests like CBC, Thyroid, or Vitamin D, or advanced diagnostics
              like Allergy Testing, Cancer Screening, or Genetic Testing, we
              offer a wide menu of more than 1000+ tests and health packages.
            </li>
          </ol>

          <h2 className="mt-5">What Makes Our Gurugram Centre Special?</h2>
          <p>
            Located in the heart of the city, our pathology lab in Gurgaon is
            designed keeping patient comfort and hygiene in mind. With a calming
            environment, minimum wait time, and well-trained staff, your lab
            experience will be smooth and stress-free.
          </p>
          <p>
            Our centre is one of India’s first labs to be NABL accredited, which
            means you can fully trust the quality and reliability of your
            reports. From corporate health check-ups to senior citizen care,
            paediatric to women’s wellness tests – we cater to all age groups.
          </p>
          <h2>Specialised Pediatric Team Available</h2>
          <p>
            We also have a specialised team of paediatricians available at our
            Gurugram lab from 8:00 AM to 3:30 PM, Monday to Saturday, to provide
            expert care and ensure that your child’s diagnostic experience is
            smooth, safe, and child-friendly.
          </p>
          <p>
            We also have specialist pediatric phlebotomists trained to handle
            sample collection from infants and young children with utmost care
            and expertise.
          </p>
          <h2>Popular Health Packages at Our Gurgaon Lab</h2>
          <p>
            To make healthcare easier and more affordable, our diagnostic lab in
            Gurgaon offers customised health packages for different needs:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
             <li>
            <a href="https://www.drdangslab.com/health-checkup-packages "  target="_blank" rel="noopener noreferrer" className="text-blue-500"><strong>Comprehensive Full Body Check-up
</strong></a>  
            </li>
            <li>
              <strong>Women’s Health Panel</strong>
            </li>
            <li>
              <strong>Senior Citizen Wellness</strong>
            </li>
            <li>
              <strong>Pre-Marital and Pre-Conception Panels</strong>
            </li>
            <li>
             <a href="https://www.drdangslab.com/food-allergy-test"  target="_blank" rel="noopener noreferrer" className="text-blue-500"><strong>Allergy & Food Intolerance panels

</strong></a>  
            </li>
            <li>
              <strong>Diabetes Care and Monitoring Packages</strong>
            </li>
            <li>
              <strong>Heart Risk Profile</strong>
            </li>
          </ol>
          <p className="mt-4">
            Our packages are designed scientifically and reviewed by our expert
            team to offer the best value and complete health insights.
          </p>

          <h2>Why People Prefer Dr. Dangs Lab in Gurugram</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>
              <strong>Easy Online Booking:</strong> Tests can be booked online
              within seconds through our website or helpline.
            </li>
            <li>
              <strong>Fast and Accurate Reports:</strong> Get your reports
              digitally within the promised turnaround time.
            </li>
            <li>
              <strong>Doctor Consultation Support:</strong> Confused about your
              test reports? Our experts are here to help you understand them
              better.
            </li>
            <li>
              <strong>Strict Hygiene & Safety Protocols:</strong> Especially
              after COVID-19, we have adopted very strict safety and
              sanitisation practices.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-4">
            Testimonials from Gurugram Patients
          </h2>
          <div className="space-y-6">
            <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700">
              “Dr Dangs home collection service is amazing. Sagar who came to
              collect blood sample was amazing at his job. He maintained proper
              hygiene and followed proper procedure. He is highly professional
              and excellent in what he does. Highly recommend their service”
              <footer className="mt-2 font-semibold text-sm">
                — Tanul Gupta
              </footer>
            </blockquote>

            <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700">
              “All of us in my family have been having our blood tests done only
              at Dr. Dang’s for decades , since the time it was located in Hauz
              Khas. Even at that time we were very impressed by all aspects of
              the lab including the professionalism and friendliness of the
              doctors and staff. This testing centre has grown from strength to
              strength, again in all aspects, too numerous to list. We are happy
              to have a branch at Gurgaon which we have been going to since the
              time it was se up. I give Dr. Dang’s a 7 star rating, it is truly
              nonpareil. KEEP IT UP. Sivakumar, MD, Meera Agencies P Ltd. ”
              <footer className="mt-2 font-semibold text-sm">
                — N. Sivakumar, MD, Meera Agencies P Ltd.
              </footer>
            </blockquote>

            <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700">
              “One of best timely services, Blood Sample collection and
              professionalism of Mr Manoj who came to collect the samples.
              Results were delivered by email and whatsapp by afternoon. .”
              <footer className="mt-2 font-semibold text-sm">
                — Neeraj Mehra
              </footer>
            </blockquote>
          </div>
          <p>
            Follow up call by Dr Nandita was unexpected & surprising (Extra
            Mile), she explained me about the report and also gave suggestion to
            help improve some parameters. Job well done Dr Dang. I am highly
            impressed by Your service. Thanks You
          </p>

          <h2>Our Commitment to Gurugram</h2>
          <p>
            We understand that Gurugram is growing fast – more families, more
            businesses, more needs. That’s why we are committed to bringing
            world-class diagnostic services closer to your home. Whether you're
            in DLF, Sohna Road, Golf Course Road, Sector 56, or Sector 45 – our
            pathlabs Gurgaon team is ready to serve you.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-4">
            Book Your Test Today
          </h2>
          <p className="mb-4">
            If you’re searching for a diagnostic centre in Gurgaon that truly
            cares for your health, look no further. Dr. Dangs Lab combines
            medical expertise, the latest diagnostic technology, and
            patient-first care to give you the best experience possible.
          </p>

          <ul className="list-none space-y-2 mb-4">
            <li>
              📞{" "}
              <span className="font-medium">
                Contact Number: +91-9818881065
              </span>
            </li>
            <li>
              🕗 <span className="font-medium">Timing:</span> 8:00 AM to 6:00 PM
              (Monday–Saturday)
            </li>
            <li>
              📍{" "}
              <span className="font-medium">
                Location on Maps:{" "}
                <a
                  href="https://g.co/kgs/vDCT6nu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  https://g.co/kgs/vDCT6nu
                </a>
              </span>
            </li>
          </ul>

          <p>
            You can easily book your test online, visit our centre, or request a
            home collection. Let us take care of your health with the accuracy
            and care that thousands of families already trust.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Final Thoughts</h2>
          <p className="mb-4">
            In today’s world, early detection and timely treatment are crucial.
            Choosing the right pathlabs in Gurgaon can make all the difference
            to your health journey. At Dr. Dangs Lab, we go beyond just testing.
            We offer peace of mind, trust, and commitment to your health.
          </p>
          <p className="mb-4">
            So if you're searching for the best pathology lab in Gurgaon or
            looking for reliable pathlabs Gurgaon with a legacy of trust, you
            know where to come.
          </p>
          <p>
            Your health is our priority. Experience the Dr. Dangs difference
            today.
          </p>

          <h2>Frequently Asked Questions</h2>
          <p>
            <strong>
              Q1: Do you offer home sample collection in Gurugram?
            </strong>
            <br />
            A1: Yes, absolutely. We provide safe and hygienic home sample
            collection across Gurugram. Our trained phlebotomists follow strict
            safety protocols and you can easily book the service online or by
            calling our helpline.
          </p>

          <p>
            <strong>
              Q2: Are the test reports from Dr. Dangs Lab in Gurgaon reliable?
            </strong>
            <br />
            A2: Yes. Our pathology lab in Gurgaon follows international
            standards, is NABL-accredited, and all reports are double-checked by
            senior pathologists. Accuracy and quality are our top priorities.
          </p>

          <p>
            <strong>
              Q3: What types of tests are available at your Gurgaon diagnostic
              centre?
            </strong>
            <br />
            A3: We offer a wide range of tests including routine blood tests,
            thyroid, diabetes, allergy testing, hormone panels, cancer markers,
            advanced diagnostics, and health packages. Our diagnostic centre in
            Gurgaon caters to all age groups.
          </p>

          <p>
            <strong>
              Q4: How can I book a test at your path lab in Gurgaon?
            </strong>
            <br />
            A4: You can book a test online through our official website, call
            our helpline number (+91 9818881065), or directly walk into our
            centre. We also provide detailed test reports via email and WhatsApp
            for easy access.
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

export default DiagnosticsInGurgaon;
