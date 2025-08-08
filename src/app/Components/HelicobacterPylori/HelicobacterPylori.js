"use client";

import React from "react";
import Image from "next/image";
import styles from "./HelicobacterPylori.module.css";

const H3N2 = () => {
  return (
    <>
      <div className={styles.H3N2MainDiv}>
        <div className={styles.H3N2FirstInnerDiv}>
          <h1>Helicobacter Pylori Test</h1>
          <a
            href="https://testprofiles.drdangslab.com/static/files/H.%20PYLORI%20PROFILES.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-10"
          >
            <span>
              <Image
                src="/PhotosAndLogos/icons8-play-30.png"
                alt="Download Icon"
                width={20}
                height={20}
              />
            </span>
            <span className={styles.H3N2Download}>DOWNLOAD BROCHURE</span>
          </a>
        </div>

        <div className={styles.H3N2BelowMainDIv}>
          <h2>Helicobacter Pylori Testing at Dr. Dangs Lab</h2>

          <p>
            If you often experience acidity after meals, bloating that just
            won't go away, or a nagging burning sensation in your upper stomach,
            it might not just be "something you ate."
          </p>

          <p>
            These could be signs of an H. pylori infection—a common bacterial
            condition that affects nearly 50% of the world's population.
          </p>

          <p>
            Many people mistake it for simple indigestion or blame it on stress
            or spicy food, but the root cause may be a hidden bacterial
            infection.
          </p>

          <h3 className="font-bold">
            What is{" "}
            <span className="italic ">Helicobacter pylori (H. pylori)?</span>{" "}
          </h3>
          <p className="mt-3">
            H. pylori is a spiral-shaped bacterium that colonizes the stomach
            lining. It is usually acquired during childhood and can remain
            undetected for years. If left untreated, it can lead to:
          </p>
          <ul className="list-disc pl-5">
            <li>
              <strong>Chronic gastritis</strong>
            </li>
            <li>
              <strong>
                Peptic ulcers (painful sores in the stomach or small intestine)
              </strong>
            </li>
            <li>
              <strong>Persistent acid reflux</strong>
            </li>
            <li>
              <strong>And in some cases, even gastric cancer</strong>
            </li>
          </ul>
          <p>
            It's a silent troublemaker—many people don't realize they're
            infected until symptoms become chronic or complications arise.
          </p>

          <h3 className="font-bold">Why You Might Need an H. pylori Test</h3>
          <p>
            Have you been taking antacids or home remedies frequently without
            long-term relief?
          </p>
          <p>
            Do you feel bloated after small meals, experience frequent burping,
            or suffer from upper stomach discomfort, even when your diet seems
            fine?
          </p>
          <p>These could be signs of an active H. pylori infection.</p>
          <p>
            If you're constantly reaching for digestive tablets or skipping
            spicy foods because of "acidity," it's time to dig deeper.
          </p>

          <h3 className="font-bold ">Symptoms to Watch For:</h3>
          <ul className="list-disc pl-5 mt-4">
            <li>
              <strong>Recurring bloating or gas</strong>
            </li>
            <li>
              <strong>Heartburn or acidity (especially at night)</strong>
            </li>
            <li>
              <strong>Frequent burping or reflux</strong>
            </li>
            <li>
              <strong>Upper abdominal pain</strong>
            </li>
            <li>
              <strong>Loss of appetite</strong>
            </li>
            <li>
              <strong>Nausea or vomiting</strong>
            </li>
            <li>
              <strong>Bad breath (halitosis) despite oral hygiene</strong>
            </li>
            <li>
              <strong>IBS-like symptoms</strong>
            </li>
            <li>
              <strong>Fatigue without a clear cause</strong>
            </li>
            <li>
              <strong>Unexplained weight loss</strong>
            </li>
          </ul>
          <p>
            These symptoms can interfere with your quality of life—from
            disrupted sleep due to acid reflux to feeling uncomfortable at work
            after meals.
          </p>

          <h3 className="font-bold ">
            Tests for Helicobacter pylori at Dr. Dangs Lab
          </h3>
          <p>
            We offer scientifically validated and non-invasive tests to detect
            active or past H. pylori infection. Tests are recommended based on
            your symptoms, history, and your physician's guidance.
          </p>

          <h3 className="font-bold ">1. Urea Breath Test (UBT)</h3>
          <p className="mt-3">
            <strong>Exclusively at Dr. Dangs Lab – Appointment Required</strong>
          </p>
          <p>
            The UBT is the <strong>gold-standard</strong>, non-invasive test to
            diagnose active H. pylori infection.
          </p>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <div class="p-2">
      <h3 class="text-xl font-semibold mb-3">How It Works</h3>
      <p class="mb-4">
        The patient drinks a urea solution containing a special carbon isotope. This is a <strong>completely harmless liquid</strong> that includes urea, a compound naturally present in the body.
      </p>
      <p class="mb-4">
        If <span class="italic">Helicobacter pylori</span> is present, it breaks down the urea and releases carbon dioxide, which is then measured in the patient's breath sample.
      </p>
      <p class="mb-4">
        The entire procedure takes approximately <strong>15–20 minutes</strong>.
      </p>
      <p class="mb-4">
        No blood tests, no discomfort—just a simple drink and breath sample. It's like doing a health check with a sip and a breath.
      </p>
      
      <h3 class="text-xl font-semibold mb-3">Preparation Guidelines</h3>
      <ul class="list-disc pl-5 mb-4">
        <li class="mb-2">
          <strong>Avoid antibiotics, bismuth-containing medications, and proton pump inhibitors (PPIs) for at least 10–14 days prior to the test.</strong><br/>
          (Always consult your doctor before stopping any medications.)
        </li>
        <li class="mb-2">
          <strong>Fast for at least 6 hours before the test.</strong>
        </li>
      </ul>
      <p class="mb-4">
        Preparing well helps ensure the test results are accurate—think of it like preparing for a fitness test for your stomach.
      </p>
    </div>
    <div class=" flex justify-center ">
      <img src="/PhotosAndLogos/hpylori.jpeg" alt="Helicobacter Pylori Test" className="w-80 h-[600px] object-contain"/>
    </div>
  </section>
          <h3 className="font-bold mt-5">Why Choose This Test?</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>
                Highly accurate: &gt;95% specificity and ~90% sensitivity
              </strong>
            </li>
            <li>
              <strong>No needles or blood draw</strong>
            </li>
            <li>
              <strong>Ideal for children and adults</strong>
            </li>
            <li>
              <strong>
                Suitable for initial diagnosis and post-treatment confirmation
              </strong>
            </li>
          </ul>
          <p>
            It's often the first choice for patients who want fast, painless,
            and highly reliable answers.
          </p>

          <p>
            <strong>Reference:</strong> Chey WD, Wong BC. Am J Gastroenterol.
            2007;102(8):1808–1825.
            <br />
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/17608775/"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 View study on PubMed
            </a>
          </p>

          <h3>Other options for H. Pylori Testing:</h3>

          <h3 className="font-bold">2. Stool Antigen Test</h3>
          <p>
            Detects the presence of H. pylori antigens in a stool sample,
            indicating active infection.
          </p>
          <h3>Why Choose This Test?</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>Non-invasive and simple</strong>
            </li>
            <li>
              <strong>
                Effective for both diagnosis and monitoring treatment success
              </strong>
            </li>
            <li>
              <strong>Great option when a breath test is not feasible</strong>
            </li>
          </ul>
          <p>
            Especially helpful for children or elderly patients who prefer
            avoiding breath or blood-based testing.
          </p>
          <h3 className="font-bold">3. Blood Antibody Tests (IgG, IgA, IgM)</h3>
          <p>
            Detects antibodies (immune response) to H. pylori. These may
            indicate past or recent exposure, but{" "}
            <strong>do not differentiate active from old infection</strong>.
          </p>
          <h3>Use Case:</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>Helpful as a screening tool</strong>
            </li>
            <li>
              <strong>Not reliable for post-treatment confirmation</strong>
            </li>
            <li>
              <strong>Less accurate than breath or stool tests</strong>
            </li>
            <li>
              <strong>A good option when doing a full health panel</strong> or
              if you need supporting information for a clinical evaluation.
            </li>
          </ul>

          <h3 className="font-bold">Why Dr. Dangs Lab?</h3>
          <p className=" mt-2">
            With over 4 decades of clinical excellence, Dr. Dangs Lab is trusted
            by physicians and patients across India.
          </p>
          <p>We provide:</p>
          <ul className="list-disc pl-5">
            <li>
              <strong>
                Exclusive breath testing facility with trained staff
              </strong>
            </li>
            <li>
              <strong>Internationally validated test protocols</strong>
            </li>
            <li>
              <strong>Home sample collection across Delhi NCR and India</strong>
            </li>
            <li>
              <strong>Pathologist-led reporting for diagnostic accuracy</strong>
            </li>
            <li>
              <strong>
                End-to-end assistance with test preparation and follow-up
              </strong>
            </li>
          </ul>
          <p>
            We don't just collect samples—we interpret them with expertise and
            care to guide your next medical step.
          </p>

          <h3 className="font-bold">How to Book Your Test</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>
              <strong>Call our helpline or visit Dr. Dangs Lab</strong>
            </li>
            <li>
              <strong>Select your preferred H. pylori test</strong>
            </li>
            <li>
              <strong>Choose between lab testing or home collection</strong>
            </li>
            <li>
              <strong>
                For the Breath Test, please schedule your appointment in advance
                and collect the test kit from the lab.
              </strong>
            </li>
          </ul>

          <h3 className="font-bold ">Also Known As</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>H. Pylori Urea Breath Test</li>
            <li>Helicobacter Pylori Breath Test</li>
            <li>Pylori, Helicobacter Breath Test</li>
            <li>Ulcer Breath Test</li>
            <li>Urea Breath Test</li>
            <li>UBT</li>
            <li>(13)C Urea Breath Test</li>
          </ul>

          <h3 className="font-bold ">Frequently Asked Questions (FAQs)</h3>

          <h3 className="mt-2 ">
            1. Can I eat or drink water before the H. pylori breath test?
          </h3>
          <p>
            <strong>No.</strong> You should fast for at least 6 hours before the
            breath test—this includes no food or water. Fasting ensures the
            results are accurate and not affected by recent intake.
          </p>

          <h3>2. Do I need a doctor's prescription for the H. pylori test?</h3>
          <p>
            While a prescription isn't mandatory for most tests, it's{" "}
            <strong>highly recommended to consult your doctor first</strong>.
            They can help choose the most appropriate test based on your
            symptoms and history.
          </p>

          <h3>3. How soon will I get my test results?</h3>
          <ul className="list-disc pl-5 ">
            <li>
              {" "}
              Breath test results are typically available within 72 hours.
            </li>
            <li>
              {" "}
              Blood antibody test results may also be available within a day.
            </li>
          </ul>
          <p>Our team will notify you once your reports are ready.</p>
          <h3>4. Can H. pylori go away on its own without treatment?</h3>
          <p>
            <strong>No.</strong> H. pylori infections usually require a specific
            combination of antibiotics and acid-suppressing medications.
            Ignoring the infection can lead to ulcers, chronic gastritis, or
            even stomach cancer over time.
          </p>

          <h3 className="font-bold">Still Have Questions?</h3>
          <p>
            Whether you're confused about which test is right for you or just
            need help preparing, our team is here to guide you every step of the
            way.
          </p>
          <p>
            Early detection can make all the difference. Let's prioritize your
            gut health—together.
          </p>

          
        </div>
      </div>
    </>
  );
};

export default H3N2;
