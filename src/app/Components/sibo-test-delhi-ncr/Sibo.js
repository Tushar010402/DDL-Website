"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaBacteria,
  FaVial,
  FaVials,
  FaArrowDown,
  FaLungs,
  FaClinicMedical,
  FaMapMarkerAlt,
  FaTachometerAlt,
  FaProjectDiagram,
  FaPills,
  FaNotesMedical,
  FaShieldVirus,
  FaWind,
  FaToilet,
  FaCloud,
  FaHandHoldingMedical,
  FaBatteryQuarter,
  FaWeight,
  FaTint,
  FaInfoCircle,
  FaFlask,
  FaStopwatch,
  FaBan,
  FaShieldAlt,
  FaExclamationTriangle,
  FaUtensils,
  FaGlassWhiskey,
  FaSmokingBan,
  FaCalendarTimes,
  FaCalendarMinus,
  FaCalendarDay,
  FaTimesCircle,
  FaUserMd,
  FaChild,
  FaCalendarCheck,
  FaFileAlt,
  FaMinus,
  FaPlus,
  FaCheckCircle,
} from "react-icons/fa";
import styles from "./Sibo.module.css";

const CAUSES = [
  {
    Icon: FaTachometerAlt,
    text: "Slow intestinal movement (called motility disorders)",
  },
  {
    Icon: FaProjectDiagram,
    text: "Structural issues in the small intestine, such as strictures or surgical changes",
  },
  {
    Icon: FaPills,
    text: "Use of medications, especially antibiotics, proton pump inhibitors (PPIs), or opioids",
  },
  {
    Icon: FaNotesMedical,
    text: "Chronic conditions like diabetes, celiac disease, or irritable bowel syndrome (IBS)",
  },
  { Icon: FaShieldVirus, text: "Immune system problems" },
];

const SYMPTOMS = [
  { Icon: FaWind, label: "Bloating or a feeling of fullness" },
  { Icon: FaToilet, label: "Diarrhoea or constipation (sometimes alternating)" },
  { Icon: FaCloud, label: "Gas and flatulence" },
  { Icon: FaHandHoldingMedical, label: "Abdominal pain or cramping" },
  { Icon: FaBatteryQuarter, label: "Fatigue and weakness" },
  { Icon: FaWeight, label: "Weight loss or difficulty gaining weight" },
  { Icon: FaTint, label: "Nutrient deficiencies (like Vitamin B12, Iron)" },
];

const PROCESS = [
  {
    Icon: FaVial,
    title: "Baseline sample",
    text: "A baseline breath sample is collected before the test begins.",
  },
  {
    Icon: FaFlask,
    title: "Test solution",
    text: "You drink a test solution such as glucose or lactulose.",
  },
  {
    Icon: FaStopwatch,
    title: "Serial samples",
    text: "Usually 5 additional samples over 2 hours or 7 additional samples over 3 hours, depending on the prescribed protocol.",
  },
  {
    Icon: FaBan,
    title: "Fasting maintained",
    text: "No food or beverages are allowed during the test to ensure accurate and reliable SIBO test results.",
  },
];

const TREATMENT = [
  "Antibiotics, such as Rifaximin, which help reduce the bacterial load",
  "Dietary changes, such as a low FODMAP diet or specific carbohydrate diet (SCD)",
  "Probiotics and prebiotics (used carefully under medical guidance)",
  "Nutritional supplements, if deficiencies are present",
  "Treating the root cause, like motility disorders or structural problems",
];

const PREP = [
  {
    when: "24 hours before",
    Icon: FaUtensils,
    body: "Patients should follow a restricted special diet. Allowed foods include peeled boiled potatoes and carrots, plain steamed white rice, eggs, plain tofu, and grilled/baked/boiled meat, poultry, fish, or seafood. Sabudana/sago and rice-lentil porridge/khichdi are allowed for breakfast or lunch in moderation. Only plain water, weak black tea or weak black coffee without sugar, sweeteners, milk, or cream, and salt and pepper only are permitted.",
  },
  {
    when: "12 hours before and during the test",
    Icon: FaGlassWhiskey,
    body: "Do not eat or drink anything except plain water. Avoid non-essential medications or supplements unless specifically advised by your doctor. Do not chew gum, eat candy, use mouthwash, or use toothpaste.",
  },
  {
    when: "1 hour before and during the test",
    Icon: FaSmokingBan,
    body: "Avoid smoking, second-hand smoke, sleeping, and exercise. Do not eat or drink anything during the sample collection period. Patients should also avoid scented or flavoured lip products and cosmetics before the test, and brush teeth and tongue using only water and rinse without toothpaste or mouthwash.",
  },
];

const PREREQ = [
  {
    when: "4 weeks before",
    Icon: FaCalendarTimes,
    items: [
      "Wait at least 4 weeks after a colonoscopy or barium enema before collecting the sample.",
      "Avoid antibiotics, antifungals, or herbal/natural antimicrobial products.",
    ],
  },
  {
    when: "2 weeks before",
    Icon: FaCalendarMinus,
    items: [
      "Avoid bismuth-containing preparations and pre/probiotic preparations.",
    ],
  },
  {
    when: "7 days before",
    Icon: FaCalendarDay,
    items: [
      "Avoid laxatives, stool softeners, stool-bulking agents, and antacids containing aluminium or magnesium hydroxide.",
    ],
  },
];

const FAQS = [
  {
    q: "Can SIBO be cured permanently?",
    a: "SIBO can be treated, but recurrence is common, especially if the underlying cause isn't managed. A combination of medication, diet, and lifestyle changes improves long-term outcomes.",
  },
  {
    q: "Is SIBO the same as IBS?",
    a: "No. However, many people with IBS-like symptoms are later found to have SIBO. The symptoms overlap, but the causes and treatment differ.",
  },
  {
    q: "What is the difference between glucose and lactulose as a substrate?",
    a: "Glucose is absorbed quickly in the upper part of the small intestine. Because of this, it is more useful for detecting bacterial overgrowth in the proximal, or early, small intestine. However, since glucose may get absorbed before reaching the lower small intestine, it can sometimes miss overgrowth that is present further down. Lactulose is not absorbed by the small intestine. It travels through the full length of the small bowel and eventually reaches the colon. This means it can help assess fermentation patterns across a wider intestinal transit route. However, because lactulose is also used as a laxative, it can sometimes cause discomfort in some patients. In simple terms, glucose is more specific but may miss distal SIBO, while lactulose covers a broader area but can be more affected by intestinal transit time and can cause some discomfort.",
  },
];

const Sibo = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <span className={styles.heroSheen} aria-hidden="true" />
        <span className={styles.gridFade} aria-hidden="true" />

        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <span className={`${styles.eyebrow} ${styles.reveal}`} data-reveal>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              <FaBacteria aria-hidden="true" />
              Gut Health · Diagnostics
            </span>
            <h1 className={`${styles.heroTitle} ${styles.reveal}`} data-reveal>
              Understanding <span className={styles.hl}>SIBO</span> — Small
              Intestinal Bacterial Overgrowth
            </h1>
            <p className={`${styles.heroSub} ${styles.reveal}`} data-reveal>
              In recent years, gut health has become a major focus for both
              doctors and individuals. Among the many digestive issues, SIBO or
              Small Intestinal Bacterial Overgrowth is gaining attention. Though
              it may sound technical, understanding this condition is crucial,
              especially if you&apos;ve been facing unexplained digestive problems.
            </p>
            <p className={`${styles.heroSub} ${styles.reveal}`} data-reveal>
              This article aims to explain what SIBO is, its signs and causes,
              how it is diagnosed, and where you can get tested in Delhi,
              Gurugram, and Noida with a focus on trusted pathology labs.
            </p>

            <div
              className={`${styles.heroHighlights} ${styles.reveal}`}
              data-reveal
            >
              <span className={styles.highlight}>
                <FaCheckCircle aria-hidden="true" />
                Non-invasive breath test
              </span>
              <span className={styles.highlight}>
                <FaCheckCircle aria-hidden="true" />
                Glucose or lactulose substrate
              </span>
              <span className={styles.highlight}>
                <FaCheckCircle aria-hidden="true" />
                Home or lab collection
              </span>
            </div>

            <div className={`${styles.heroCtas} ${styles.reveal}`} data-reveal>
              <Link href="/HomeCollection" className={styles.ctaPrimary}>
                <FaVial aria-hidden="true" /> Book SIBO Test
              </Link>
              <a href="#diagnosis" className={styles.ctaGhost}>
                How testing works <FaArrowDown aria-hidden="true" />
              </a>
            </div>

            <div className={`${styles.trustRow} ${styles.reveal}`} data-reveal>
              <span className={styles.trustItem}>40+ years of trust</span>
              <span className={styles.trustDot} aria-hidden="true" />
              <span className={styles.trustItem}>NABL accredited</span>
            </div>
          </div>

          <div className={`${styles.heroMedia} ${styles.reveal}`} data-reveal>
            <div className={styles.heroImageWrap}>
              <Image
                src="/PhotosAndLogos/Understanding-SIBO.webp"
                alt="Understanding SIBO - Small Intestinal Bacterial Overgrowth - causes, symptoms, diagnosis and testing in Delhi NCR at Dr. Dangs Lab"
                fill
                sizes="(max-width: 980px) 100vw, 640px"
                className={styles.heroImage}
                priority
              />
              <span className={styles.imageGlow} aria-hidden="true" />
            </div>
          </div>
        </div>

        <div
          className={`${styles.credentialsBar} ${styles.reveal}`}
          data-reveal
        >
          <div className={styles.credential}>
            <span className={styles.credIcon}>
              <FaClinicMedical aria-hidden="true" />
            </span>
            <div className={styles.credText}>
              <strong>Home or lab collection</strong>
              <span>Same-day slots across NCR</span>
            </div>
          </div>
          <span className={styles.credDivider} aria-hidden="true" />
          <div className={styles.credential}>
            <span className={styles.credIcon}>
              <FaVials aria-hidden="true" />
            </span>
            <div className={styles.credText}>
              <strong>Glucose or lactulose</strong>
              <span>Substrate per protocol</span>
            </div>
          </div>
          <span className={styles.credDivider} aria-hidden="true" />
          <div className={styles.credential}>
            <span className={styles.credIcon}>
              <FaMapMarkerAlt aria-hidden="true" />
            </span>
            <div className={styles.credText}>
              <strong>Delhi · Gurugram · Noida</strong>
              <span>Trusted across the NCR</span>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        {/* WHAT IS SIBO */}
        <section className={styles.section} id="what">
          <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>
            The basics
          </span>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
            What Is SIBO?
          </h2>
          <p className={`${styles.lead} ${styles.reveal}`} data-reveal>
            Small Intestinal Bacterial Overgrowth (SIBO) occurs when an
            unusually high number of bacteria grow in the small intestine.
            Normally, bacteria are more common in the large intestine, but when
            they start multiplying in the small intestine, they can disrupt the
            digestive process. This overgrowth leads to improper absorption of
            nutrients and various gut-related symptoms.
          </p>
          <p className={`${styles.body} ${styles.reveal}`} data-reveal>
            There isn&apos;t one single cause of SIBO. Instead, several conditions
            can contribute to its development:
          </p>

          <div className={styles.causeGrid}>
            {CAUSES.map((c, i) => (
              <div
                key={c.text}
                className={`${styles.causeCard} ${styles.reveal}`}
                data-reveal
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <span className={styles.causeIcon}>
                  <c.Icon aria-hidden="true" />
                </span>
                <p>{c.text}</p>
              </div>
            ))}
          </div>

          <p className={`${styles.note} ${styles.reveal}`} data-reveal>
            When the balance of bacteria is disturbed, the wrong types can take
            over, resulting in fermentation of food in the small intestine and
            related discomfort.
          </p>
        </section>

        {/* SYMPTOMS */}
        <section className={styles.section} id="symptoms">
          <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>
            Watch for
          </span>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
            Common Symptoms Of SIBO
          </h2>
          <p className={`${styles.body} ${styles.reveal}`} data-reveal>
            The signs of SIBO often resemble other gastrointestinal disorders.
            This makes diagnosis tricky without proper testing. Common symptoms
            include:
          </p>

          <div className={styles.symptomGrid}>
            {SYMPTOMS.map((s, i) => (
              <div
                key={s.label}
                className={`${styles.symptomChip} ${styles.reveal}`}
                data-reveal
                style={{ animationDelay: `${i * 55}ms` }}
              >
                <s.Icon aria-hidden="true" />
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <div className={`${styles.calloutSoft} ${styles.reveal}`} data-reveal>
            <FaInfoCircle aria-hidden="true" />
            <p>
              If these issues are ongoing, and especially if you&apos;re not
              responding to standard treatments for IBS or acidity, it&apos;s worth
              getting tested for SIBO.
            </p>
          </div>
        </section>

        {/* DIAGNOSIS */}
        <section
          className={`${styles.section} ${styles.diagnosis}`}
          id="diagnosis"
        >
          <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>
            Accurate diagnosis
          </span>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
            How Is SIBO Diagnosed Accurately and What Is the Process?
          </h2>

          <p className={`${styles.lead} ${styles.reveal}`} data-reveal>
            SIBO, or Small Intestinal Bacterial Overgrowth, is diagnosed
            accurately through a <strong>SIBO breath test</strong>, a
            non-invasive test that measures gases produced by bacteria in the
            small intestine after drinking a test solution such as glucose or
            lactulose. At{" "}
            <a
              href="https://www.drdangslab.com/"
              className={styles.inlineLink}
            >
              Dr. Dangs Lab
            </a>
            , the test can be conducted at home or at the main laboratory in
            SDA, New Delhi.
          </p>

          <div className={styles.processRow}>
            {PROCESS.map((p, i) => (
              <div
                key={p.title}
                className={`${styles.processStep} ${styles.reveal}`}
                data-reveal
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div className={styles.stepTop}>
                  <span className={styles.stepNum}>{i + 1}</span>
                  <span className={styles.stepIcon}>
                    <p.Icon aria-hidden="true" />
                  </span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>

          <div
            className={`${styles.accreditBanner} ${styles.reveal}`}
            data-reveal
          >
            <FaShieldAlt aria-hidden="true" />
            <p>
              Dr. Dangs Lab is one of India&apos;s first labs to be
              NABL-accredited, ensuring trusted collection, cold-chain
              maintenance, and reliable result handling.
            </p>
          </div>
        </section>

        {/* TREATMENT */}
        <section className={styles.section} id="treatment">
          <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>
            After diagnosis
          </span>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
            Treatment Of SIBO
          </h2>
          <p className={`${styles.body} ${styles.reveal}`} data-reveal>
            SIBO is generally treated with:
          </p>
          <div className={styles.treatmentList}>
            {TREATMENT.map((t, i) => (
              <div
                key={t}
                className={`${styles.treatmentItem} ${styles.reveal}`}
                data-reveal
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <span className={styles.treatmentNum}>{i + 1}</span>
                <p>{t}</p>
              </div>
            ))}
          </div>
          <div className={`${styles.calloutWarn} ${styles.reveal}`} data-reveal>
            <FaExclamationTriangle aria-hidden="true" />
            <p>
              Treatment must be guided by a healthcare provider.
              Self-medicating with probiotics or antibiotics without a diagnosis
              can make symptoms worse.
            </p>
          </div>
        </section>

        {/* PREP GUIDELINES */}
        <section className={styles.section} id="preparation">
          <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>
            Before your test
          </span>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
            SIBO Test Preparatory Guidelines
          </h2>
          <div className={styles.timeline}>
            {PREP.map((p, i) => (
              <div
                key={p.when}
                className={`${styles.timelineItem} ${styles.reveal}`}
                data-reveal
                style={{ animationDelay: `${i * 110}ms` }}
              >
                <div className={styles.timelineMarker}>
                  <p.Icon aria-hidden="true" />
                </div>
                <div className={styles.timelineCard}>
                  <span className={styles.timelineWhen}>{p.when}</span>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PREREQUISITES */}
        <section className={styles.section} id="prerequisites">
          <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>
            Plan ahead
          </span>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
            SIBO Test Prerequisites
          </h2>
          <p className={`${styles.body} ${styles.reveal}`} data-reveal>
            To ensure accurate SIBO breath test results, patients must follow
            important prerequisites before sample collection:
          </p>

          <div className={styles.prereqGrid}>
            {PREREQ.map((p, i) => (
              <div
                key={p.when}
                className={`${styles.prereqCard} ${styles.reveal}`}
                data-reveal
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <span className={styles.prereqHead}>
                  <p.Icon aria-hidden="true" />
                  {p.when}
                </span>
                <ul>
                  {p.items.map((it) => (
                    <li key={it}>
                      <FaTimesCircle aria-hidden="true" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.warnGrid}>
            <div className={`${styles.warnCard} ${styles.reveal}`} data-reveal>
              <FaUserMd aria-hidden="true" />
              <p>
                Patients who are unwell or unsure whether to proceed should
                consult their treating physician before collecting the sample.
              </p>
            </div>
            <div
              className={`${styles.warnCard} ${styles.reveal}`}
              data-reveal
              style={{ animationDelay: "90ms" }}
            >
              <FaChild aria-hidden="true" />
              <p>
                The test is not recommended for children under 12 years old.
              </p>
            </div>
            <div
              className={`${styles.warnCard} ${styles.reveal}`}
              data-reveal
              style={{ animationDelay: "180ms" }}
            >
              <FaTint aria-hidden="true" />
              <p>
                Diabetic patients should use caution as the substrate may
                temporarily raise blood sugar levels and should consult their
                physician before testing for SIBO.
              </p>
            </div>
          </div>
        </section>

        {/* EARLY DIAGNOSIS BANNER */}
        <section
          className={`${styles.earlyBanner} ${styles.reveal}`}
          data-reveal
        >
          <span className={styles.bannerSheen} aria-hidden="true" />
          <div className={styles.earlyText}>
            <h2>Why Early Diagnosis Matters</h2>
            <p>
              Many patients with SIBO go undiagnosed for years, suffering with
              bloating, fatigue, and IBS-like symptoms. Getting tested early at
              a reputable lab in Delhi, Noida, or Gurugram helps avoid
              complications like nutrient deficiencies and chronic gut issues.
            </p>
          </div>
          <Link href="/HomeCollection" className={styles.ctaWhite}>
            <FaCalendarCheck aria-hidden="true" /> Get tested early
          </Link>
        </section>

        {/* CONCLUSION */}
        <section className={styles.section}>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
            Summary
          </h2>
          <p className={`${styles.body} ${styles.reveal}`} data-reveal>
            SIBO is more common than most people realise, and often goes
            undetected due to its similarity with other gut disorders. However,
            timely testing, especially with trusted pathology labs like{" "}
            <a
              href="https://www.drdangslab.com/"
              className={styles.inlineLink}
            >
              Dr. Dangs Lab
            </a>
            , one of India&apos;s first NABL-accredited labs, can help in accurate
            diagnosis and effective treatment.
          </p>
          <p className={`${styles.body} ${styles.reveal}`} data-reveal>
            If you&apos;re located in Delhi, Noida, or Gurugram, and you&apos;ve been
            dealing with bloating, gas, or other persistent digestive symptoms,
            it&apos;s time to take your gut health seriously. Talk to your doctor and
            get tested for SIBO. Early diagnosis leads to better recovery and a
            healthier life.
          </p>
        </section>

        {/* TEST SUMMARY CTA */}
        <section className={`${styles.testCard} ${styles.reveal}`} data-reveal>
          <div className={styles.testCardBody}>
            <span className={styles.testCardTag}>Test details</span>
            <h3>Small Intestinal Bacterial Overgrowth (SIBO)</h3>
            <ul className={styles.testCardMeta}>
              <li>
                <FaLungs aria-hidden="true" /> Non-invasive breath test
              </li>
              <li>
                <FaMapMarkerAlt aria-hidden="true" /> Home collection or SDA,
                New Delhi lab
              </li>
              <li>
                <FaFileAlt aria-hidden="true" /> Sample report: available on
                request
              </li>
            </ul>
          </div>
          <div className={styles.testCardActions}>
            <Link href="/HomeCollection" className={styles.ctaPrimary}>
              <FaVial aria-hidden="true" /> Book this test
            </Link>
            <Link href="/Feedback" className={styles.ctaGhost}>
              Talk to us
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section} id="faq">
          <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>
            Common questions
          </span>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
            Common FAQs On SIBO
          </h2>
          <div className={styles.faqList}>
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={f.q}
                  className={styles.reveal}
                  data-reveal
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div
                    className={`${styles.faqItem} ${open ? styles.faqOpen : ""}`}
                  >
                    <button
                      type="button"
                      className={styles.faqQuestion}
                      onClick={() => setOpenFaq(open ? -1 : i)}
                      aria-expanded={open}
                    >
                      <h3 className={styles.faqQuestionText}>{f.q}</h3>
                      {open ? (
                        <FaMinus aria-hidden="true" />
                      ) : (
                        <FaPlus aria-hidden="true" />
                      )}
                    </button>
                    <div
                      className={styles.faqAnswer}
                      style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                    >
                      <div className={styles.faqAnswerInner}>
                        <p>{f.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sibo;
