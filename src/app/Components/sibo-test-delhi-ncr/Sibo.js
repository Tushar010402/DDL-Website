"use client";

import { useState, useEffect } from "react";
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
  const [newsImages, setNewsImages] = useState({});
  useEffect(() => {
    NEWS_ITEMS.forEach((n) => {
      const fetchUrl = n.ogUrl || n.url;
      fetch(`https://api.microlink.io?url=${encodeURIComponent(fetchUrl)}`)
        .then((r) => r.json())
        .then((d) => {
          const img = d?.data?.image?.url;
          if (img) setNewsImages((prev) => ({ ...prev, [n.url]: img }));
        })
        .catch(() => {});
    });
  }, []);

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
            Conclusion
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

      {/* ── In the News & Social Media ── */}
      <div style={{ background: "#fafafa", borderTop: "1px solid #f0eaea", paddingTop: "56px", paddingBottom: "60px", overflow: "hidden" }}>

        {/* Heading */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", marginBottom: "40px" }}>
          <p style={{ fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "2.5px", color: "#d9242a", marginBottom: "6px" }}>
            Media Coverage
          </p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: "800", color: "#1f1f1f", margin: 0 }}>
            As Seen In
          </h2>
        </div>

        {/* ── Instagram Reels ── */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", marginBottom: "56px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", color: "#888", marginBottom: "28px" }}>
            Watch Our Reels
          </p>
          <div style={{ display: "flex", gap: "40px", overflowX: "auto", paddingBottom: "16px", alignItems: "flex-start" }}>
            {REEL_ITEMS.map((r) => (
              <div key={r.id} style={{ flexShrink: 0, position: "relative" }}>
                {/* Side buttons */}
                <div style={{ position: "absolute", left: "-5px", top: "110px", width: "5px", height: "34px", background: "#2a2a2a", borderRadius: "2px 0 0 2px" }}/>
                <div style={{ position: "absolute", left: "-5px", top: "156px", width: "5px", height: "34px", background: "#2a2a2a", borderRadius: "2px 0 0 2px" }}/>
                <div style={{ position: "absolute", right: "-5px", top: "136px", width: "5px", height: "68px", background: "#2a2a2a", borderRadius: "0 2px 2px 0" }}/>

                {/* Phone shell */}
                <div style={{ width: "320px", background: "#111", borderRadius: "52px", border: "10px solid #222", boxShadow: "0 0 0 1.5px #444", overflow: "hidden", display: "flex", flexDirection: "column" }}>

                  {/* Status bar */}
                  <div style={{ height: "48px", background: "#000", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", flexShrink: 0, position: "relative" }}>
                    <span style={{ color: "#fff", fontSize: "13px", fontWeight: "700" }}>9:41</span>
                    <div style={{ position: "absolute", top: "11px", left: "50%", transform: "translateX(-50%)", width: "90px", height: "26px", background: "#111", borderRadius: "14px" }}/>
                    <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                      <svg width="16" height="12" viewBox="0 0 15 11" fill="white"><rect x="0" y="7" width="3" height="4" rx="0.6"/><rect x="4" y="5" width="3" height="6" rx="0.6"/><rect x="8" y="2.5" width="3" height="8.5" rx="0.6"/><rect x="12" y="0" width="3" height="11" rx="0.6"/></svg>
                      <svg width="15" height="11" viewBox="0 0 13 10" fill="none"><circle cx="6.5" cy="9" r="1.1" fill="white"/><path d="M4 6.5a3.5 3.5 0 0 1 5 0" stroke="white" strokeWidth="1.2" strokeLinecap="round"/><path d="M1.5 4a6 6 0 0 1 10 0" stroke="white" strokeWidth="1.2" strokeLinecap="round"/></svg>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ width: "22px", height: "11px", border: "1.3px solid rgba(255,255,255,0.6)", borderRadius: "3px", padding: "1.5px" }}>
                          <div style={{ width: "70%", height: "100%", background: "white", borderRadius: "1.5px" }}/>
                        </div>
                        <div style={{ width: "2px", height: "5px", background: "rgba(255,255,255,0.4)", borderRadius: "0 1px 1px 0" }}/>
                      </div>
                    </div>
                  </div>

                  {/* iframe — sandbox blocks parent navigation so "Watch on Instagram" can't redirect */}
                  <div style={{ position: "relative" }}>
                    <iframe
                      src={`https://www.instagram.com/reel/${r.id}/embed/`}
                      width="300"
                      height="580"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency="true"
                      style={{ display: "block", border: "none" }}
                      title={`Instagram Reel ${r.id}`}
                    />
                    {/* Blocks the "Watch on Instagram" header link area */}
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "52px", zIndex: 10 }} />
                  </div>

                  {/* Home indicator */}
                  <div style={{ height: "22px", background: "#000", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <div style={{ width: "100px", height: "4px", background: "rgba(255,255,255,0.2)", borderRadius: "2px" }}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── News articles marquee (scrolls left) ── */}
        <div>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", marginBottom: "20px" }}>
            <p style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", color: "#888", margin: 0 }}>
              In the News
            </p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className="sibo-news-track" style={{ display: "flex", gap: "20px", animation: "siboMarqueeLeft 40s linear infinite", width: "max-content", paddingLeft: "24px" }}>
              {[...NEWS_ITEMS, ...NEWS_ITEMS].map((n, i) => (
                <a
                  key={i}
                  href={n.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flexShrink: 0,
                    width: "clamp(300px, 28vw, 420px)",
                    background: "#fff",
                    border: "1.5px solid #f0eaea",
                    borderRadius: "18px",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  }}
                >
                  {/* OG image or color fallback */}
                  <div style={{ width: "100%", height: "168px", overflow: "hidden", background: n.color + "18", flexShrink: 0, position: "relative" }}>
                    {newsImages[n.url] ? (
                      <img
                        src={newsImages[n.url]}
                        alt={n.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke={n.color} strokeWidth="1.5" opacity="0.4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h3l2-2h4l2 2h3a2 2 0 012 2v12a2 2 0 01-2 2z"/>
                          <circle cx="12" cy="13" r="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                    {/* Source pill over image */}
                    <span style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      background: n.color,
                      color: "#fff",
                      borderRadius: "20px",
                      padding: "3px 10px",
                      fontSize: "10px",
                      fontWeight: "800",
                      textTransform: "uppercase",
                      letterSpacing: "0.7px",
                    }}>
                      {n.source}
                    </span>
                  </div>
                  {/* Text content */}
                  <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
                    <p style={{ fontSize: "13.5px", fontWeight: "700", color: "#1f1f1f", margin: 0, lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {n.title}
                    </p>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#d9242a", display: "flex", alignItems: "center", gap: "4px", marginTop: "auto" }}>
                      Read article
                      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes siboMarqueeLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .sibo-news-track:hover {
          animation-play-state: paused;
        }
      `}</style>

    </div>
  );
};

const NEWS_ITEMS = [
  {
    source: "ANI News",
    title: "Dr. Dangs Lab Launches Breath Lab for Gut Disorders on World Digestive Health Day",
    url: "https://aninews.in/news/national/general-news/dr-dangs-lab-launches-breath-lab-for-gut-disorders-on-world-digestive-health-day20260529070741/",
    ogUrl: "https://www.malaysiasun.com/news/279088646/dr-dang-lab-launches-breath-lab-for-gut-disorders-on-world-digestive-health-day",
    color: "#0066cc",
  },
  {
    source: "The CSR Journal",
    title: "Dr. Dangs Lab Launches Advanced Gut Health Testing Portfolio on World Digestive Health Day",
    url: "https://thecsrjournal.in/dr-dangs-lab-launches-advanced-gut-health-testing-portfolio-on-world-digestive-health-day/",
    color: "#1a7a30",
  },
  {
    source: "Malaysia Sun",
    title: "Dr. Dangs Lab Launches Breath Lab for Gut Disorders on World Digestive Health Day",
    url: "https://www.malaysiasun.com/news/279088646/dr-dang-lab-launches-breath-lab-for-gut-disorders-on-world-digestive-health-day",
    color: "#c45e00",
  },
  {
    source: "Mugglehead",
    title: "Dr. Dangs Lab Expands Breath Testing for Gut Disorders",
    url: "https://mugglehead.com/dr-dangs-lab-expands-breath-testing-for-gut-disorders/",
    color: "#6d28d9",
  },
];

const REEL_ITEMS = [
  { id: "DY5r6KOTwZV", url: "https://www.instagram.com/reel/DY5r6KOTwZV/", videoSrc: "/reels/DY5r6KOTwZV.mp4" },
  { id: "DZG9sefhXG7", url: "https://www.instagram.com/reel/DZG9sefhXG7/", videoSrc: "/reels/DZG9sefhXG7.mp4" },
  { id: "DZMdGVqBvRf", url: "https://www.instagram.com/reel/DZMdGVqBvRf/", videoSrc: "/reels/DZMdGVqBvRf.mp4" },
];

export default Sibo;
