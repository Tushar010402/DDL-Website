'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    FaHeartbeat,
    FaVial,
    FaFish,
    FaBrain,
    FaShieldAlt,
    FaSeedling,
    FaOilCan,
    FaBalanceScale,
    FaFlask,
    FaChartLine,
    FaFire,
    FaDna,
    FaTint,
    FaWeight,
    FaSmile,
    FaCloud,
    FaBatteryQuarter,
    FaUserMd,
    FaCalendarCheck,
    FaFileAlt,
    FaMinus,
    FaPlus,
    FaCheckCircle,
    FaExclamationTriangle,
    FaAppleAlt,
    FaSyncAlt,
    FaEye,
    FaRunning,
    FaStethoscope,
    FaHandHoldingMedical,
    FaClinicMedical,
    FaMapMarkerAlt,
} from 'react-icons/fa';
import styles from './Omega.module.css';

const OMEGA3_MARKERS = [
    'Alpha-Linolenic Acid (ALA)',
    'Eicosapentaenoic Acid (EPA)',
    'Docosahexaenoic Acid (DHA)',
];

const OMEGA6_MARKERS = [
    'Linoleic Acid (LA)',
    'Arachidonic Acid (AA)',
];

const KEY_RATIO = ['AA/EPA Ratio'];

const OMEGA3_SUPPORTS = [
    { Icon: FaHeartbeat, text: 'Heart health' },
    { Icon: FaBrain, text: 'Brain function' },
    { Icon: FaEye, text: 'Eye health' },
    { Icon: FaRunning, text: 'Joint mobility' },
    { Icon: FaSmile, text: 'Mood and cognition' },
];

const OMEGA6_SOURCES = [
    { Icon: FaOilCan, label: 'Sunflower oil' },
    { Icon: FaOilCan, label: 'Soybean oil' },
    { Icon: FaOilCan, label: 'Corn oil' },
    { Icon: FaAppleAlt, label: 'Processed foods' },
    { Icon: FaAppleAlt, label: 'Packaged snacks' },
];

const GUESSWORK = [
    'Low EPA and DHA despite supplementation',
    'High linoleic acid from hidden dietary sources',
    'Elevated AA/EPA ratio indicating inflammation',
];

const INSIGHTS = [
    { Icon: FaSeedling, title: 'Alpha-Linolenic Acid (ALA)', text: 'ALA is the plant-based omega-3 found in flax, chia, and walnuts. Low levels may indicate inadequate intake.' },
    { Icon: FaFish, title: 'EPA (Eicosapentaenoic Acid)', text: 'EPA helps reduce inflammation and supports cardiovascular health.' },
    { Icon: FaBrain, title: 'DHA (Docosahexaenoic Acid)', text: 'DHA is crucial for brain, eye, and nervous system health.' },
    { Icon: FaOilCan, title: 'Linoleic Acid (LA)', text: 'LA is the primary omega-6 fat. Elevated levels often reflect excessive intake of vegetable oils and processed foods.' },
    { Icon: FaFire, title: 'Arachidonic Acid (AA)', text: 'AA is involved in inflammatory signaling. Excessive levels may contribute to chronic inflammation.' },
    { Icon: FaChartLine, title: 'AA/EPA Ratio', text: 'An elevated ratio suggests a higher inflammatory burden and increased cardiovascular risk.' },
];

const CONDITIONS = [
    { Icon: FaHeartbeat, label: 'Heart disease' },
    { Icon: FaTint, label: 'High triglycerides' },
    { Icon: FaDna, label: 'Insulin resistance' },
    { Icon: FaWeight, label: 'Type 2 diabetes' },
    { Icon: FaStethoscope, label: 'Fatty liver disease' },
    { Icon: FaWeight, label: 'Obesity' },
    { Icon: FaDna, label: 'PCOS' },
    { Icon: FaHandHoldingMedical, label: 'Arthritis' },
    { Icon: FaSmile, label: 'Depression' },
    { Icon: FaCloud, label: 'Brain fog' },
    { Icon: FaBatteryQuarter, label: 'Chronic fatigue' },
    { Icon: FaShieldAlt, label: 'Autoimmune disorders' },
];

const CONSIDER = [
    'Elevated cholesterol or triglycerides',
    'Chronic inflammation',
    'Joint pain',
    'Brain fog',
    'Anxiety or depression',
    'PCOS',
    'Metabolic syndrome',
    'Autoimmune disease',
    'Vegan or vegetarian diets',
    'Poor response to fish oil supplements',
];

const SYMPTOMS = [
    { Icon: FaTint, label: 'Dry skin' },
    { Icon: FaUserMd, label: 'Hair thinning' },
    { Icon: FaSmile, label: 'Mood changes' },
    { Icon: FaBrain, label: 'Poor concentration' },
    { Icon: FaCloud, label: 'Memory issues' },
    { Icon: FaRunning, label: 'Joint stiffness' },
    { Icon: FaBatteryQuarter, label: 'Fatigue' },
    { Icon: FaFire, label: 'Frequent inflammation' },
];

const IMPROVE = [
    {
        title: 'Increase Omega-3 Intake',
        Icon: FaFish,
        items: ['Salmon, sardines, mackerel', 'Algal DHA/EPA supplements', 'Fish oil supplements', 'Flax and chia seeds'],
    },
    {
        title: 'Reduce Excess Omega-6 Intake',
        Icon: FaOilCan,
        items: ['Minimize refined vegetable oils', 'Reduce fried and packaged foods', 'Choose olive oil or avocado oil'],
    },
    {
        title: 'Retest After 3 to 4 Months',
        Icon: FaSyncAlt,
        items: ['Fatty acid levels change gradually. Follow-up testing helps confirm improvement.'],
    },
];

const FUNCTIONAL_USES = [
    'Longevity programs',
    'Preventive health evaluations',
    'Cardiometabolic assessments',
    'Autoimmune workups',
];

const WHY_BENEFITS = [
    { Icon: FaFlask, text: 'Advanced functional medicine testing' },
    { Icon: FaFileAlt, text: 'Accurate and clinically actionable reports' },
    { Icon: FaUserMd, text: 'Expert guidance for specialized testing' },
    { Icon: FaClinicMedical, text: 'Convenient home sample collection' },
];

const FAQS = [
    {
        q: 'Can vegetarians be deficient in Omega-3?',
        a: 'Yes. Plant sources provide ALA, but conversion to EPA and DHA is limited.',
    },
    {
        q: 'How often should I repeat the test?',
        a: 'Every 3 to 6 months after dietary or supplement changes.',
    },
    {
        q: 'Do fish oil supplements guarantee good results?',
        a: 'Not always. Absorption and dose vary, which is why testing is useful.',
    },
    {
        q: 'Is fasting required for this test?',
        a: 'Requirements may vary by laboratory and follow the instructions provided at the time of booking.',
    },
    {
        q: 'Where can I get Omega-3 and Omega-6 Testing in India?',
        a: 'You can access advanced fatty acid testing through Dr. Dangs Lab’s Functional Medicine Testing Platform.',
    },
];

const Omega = () => {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <div className={styles.page}>
            {/* HERO */}
            <section className={styles.hero}>
                <span className={styles.heroSheen} aria-hidden="true" />
                <span className={styles.gridFade} aria-hidden="true" />

                <div className={styles.heroInner}>
                    <div className={styles.heroCopy}>
                        <h1 className={`${styles.heroTitle} ${styles.reveal}`} data-reveal>
                            Importance of <span className={styles.hl}>Omega-3 &amp; Omega-6</span> Testing
                        </h1>
                        <p className={`${styles.heroSub} ${styles.reveal}`} data-reveal>
                            A Deeper Look at Your Inflammation and Heart Health
                        </p>
                        <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                            Omega-3 and Omega-6 fatty acids are essential fats your body cannot produce
                            on its own. They play a vital role in brain function, heart health, immunity,
                            hormone production, and inflammation control. While both are necessary,
                            maintaining the right balance between them is critical.
                        </p>
                        <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                            That is where Omega-3 and Omega-6 Testing in Delhi becomes valuable. This
                            advanced blood test measures the levels of individual fatty acids in your
                            body and helps identify whether your diet is supporting health or silently
                            driving inflammation.
                        </p>
                        <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                            At{' '}
                            <a href="https://www.drdangslab.com/" className={styles.inlineLink}>
                                Dr. Dangs Lab
                            </a>
                            , this specialized functional medicine test helps clinicians assess
                            nutritional status, cardiovascular risk, and chronic inflammatory tendencies
                            with precision.
                        </p>

                        <div className={`${styles.heroCtas} ${styles.reveal}`} data-reveal>
                            <Link
                                href="/HomeCollection?package=Omega-3%20and%20Omega-6%20Testing"
                                className={styles.ctaPrimary}
                            >
                                <FaVial aria-hidden="true" /> Book Omega Test
                            </Link>
                        </div>
                    </div>

                    <div className={`${styles.heroMedia} ${styles.reveal}`} data-reveal>
                        <div className={styles.heroImageWrap}>
                            <Image
                                src="/PhotosAndLogos/Omega-3-Omega-6-Testing.webp"
                                alt="Omega-3 and Omega-6 blood testing"
                                fill
                                sizes="(max-width: 980px) 100vw, 640px"
                                className={styles.heroImage}
                                priority
                            />
                            <span className={styles.imageGlow} aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.container}>
                {/* WHAT IS THE TEST */}
                <section className={styles.section} id="what">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>The basics</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        What Is Omega-3 And Omega-6 Testing?
                    </h2>
                    <p className={`${styles.lead} ${styles.reveal}`} data-reveal>
                        Omega-3 and Omega-6 Testing is a blood-based fatty acid analysis that measures
                        the composition of essential fats in your cell membranes.
                    </p>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        Unlike dietary questionnaires, this test shows what is actually present in your
                        body. The test typically measures:
                    </p>

                    <div className={styles.measureGrid}>
                        <div className={`${styles.measureCard} ${styles.reveal}`} data-reveal>
                            <span className={styles.measureHead}>
                                <FaFish aria-hidden="true" /> Omega-3 Fatty Acids
                            </span>
                            <ul>
                                {OMEGA3_MARKERS.map((m) => (
                                    <li key={m}>
                                        <FaCheckCircle aria-hidden="true" />
                                        <span>{m}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={`${styles.measureCard} ${styles.reveal}`} data-reveal style={{ animationDelay: '90ms' }}>
                            <span className={styles.measureHead}>
                                <FaOilCan aria-hidden="true" /> Omega-6 Fatty Acids
                            </span>
                            <ul>
                                {OMEGA6_MARKERS.map((m) => (
                                    <li key={m}>
                                        <FaCheckCircle aria-hidden="true" />
                                        <span>{m}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={`${styles.measureCard} ${styles.reveal}`} data-reveal style={{ animationDelay: '180ms' }}>
                            <span className={styles.measureHead}>
                                <FaBalanceScale aria-hidden="true" /> Ratio
                            </span>
                            <ul>
                                {KEY_RATIO.map((m) => (
                                    <li key={m}>
                                        <FaCheckCircle aria-hidden="true" />
                                        <span>{m}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <p className={`${styles.note} ${styles.reveal}`} data-reveal>
                        These biomarkers provide a comprehensive picture of inflammatory balance and
                        cardiovascular health.
                    </p>
                </section>

                {/* WHY OMEGAS MATTER */}
                <section className={styles.section} id="why">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Why it matters</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Why Are Omega-3 And Omega-6 Important?
                    </h2>
                    <p className={`${styles.lead} ${styles.reveal}`} data-reveal>
                        <strong>Omega-3 Fatty Acids</strong> are anti-inflammatory fats that support:
                    </p>

                    <div className={styles.causeGrid}>
                        {OMEGA3_SUPPORTS.map((c, i) => (
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

                    <p className={`${styles.body} ${styles.reveal}`} data-reveal style={{ marginTop: '24px' }}>
                        Major dietary sources include fatty fish, flaxseeds, chia seeds, and walnuts.
                    </p>

                    <p className={`${styles.body} ${styles.reveal}`} data-reveal style={{ marginTop: '24px' }}>
                        <strong>Omega-6 Fatty Acids</strong> are also essential, but excessive intake,
                        especially from processed seed oils, can promote inflammation when not balanced
                        by sufficient omega-3 intake. Common sources include:
                    </p>

                    <div className={styles.symptomGrid}>
                        {OMEGA6_SOURCES.map((s, i) => (
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
                </section>

                {/* WHY TESTING MATTERS */}
                <section className={styles.section} id="guesswork">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Beyond guesswork</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Why Testing Matters More Than Guesswork
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        Many people assume they get enough omega-3 by eating walnuts or taking fish oil
                        occasionally. However, blood testing often reveals:
                    </p>

                    <div className={styles.symptomGrid}>
                        {GUESSWORK.map((g, i) => (
                            <div
                                key={g}
                                className={`${styles.symptomChip} ${styles.reveal}`}
                                data-reveal
                                style={{ animationDelay: `${i * 55}ms` }}
                            >
                                <FaExclamationTriangle aria-hidden="true" />
                                <span>{g}</span>
                            </div>
                        ))}
                    </div>

                    <p className={`${styles.note} ${styles.reveal}`} data-reveal>
                        Testing eliminates guesswork and provides actionable data.
                    </p>
                </section>

                {/* KEY INSIGHTS */}
                <section className={`${styles.section} ${styles.diagnosis}`} id="insights">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Inside the report</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Key Insights From The Omega-3 And Omega-6 Test Report
                    </h2>

                    <div className={styles.processRow}>
                        {INSIGHTS.map((p, i) => (
                            <div
                                key={p.title}
                                className={`${styles.processStep} ${styles.reveal}`}
                                data-reveal
                                style={{ animationDelay: `${i * 80}ms` }}
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
                </section>

                {/* HEALTH CONDITIONS LINKED */}
                <section className={styles.section} id="conditions">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Why imbalance hurts</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Health Conditions Linked To Poor Fatty Acid Balance
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        Imbalances in omega-3 and omega-6 levels may be associated with:
                    </p>

                    <div className={styles.symptomGrid}>
                        {CONDITIONS.map((s, i) => (
                            <div
                                key={s.label}
                                className={`${styles.symptomChip} ${styles.reveal}`}
                                data-reveal
                                style={{ animationDelay: `${i * 45}ms` }}
                            >
                                <s.Icon aria-hidden="true" />
                                <span>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* WHO SHOULD CONSIDER */}
                <section className={styles.section} id="who">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Right for you?</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Who Should Consider Omega-3 And Omega-6 Testing?
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        This test is particularly useful for individuals with:
                    </p>

                    <div className={styles.symptomGrid}>
                        {CONSIDER.map((c, i) => (
                            <div
                                key={c}
                                className={`${styles.symptomChip} ${styles.reveal}`}
                                data-reveal
                                style={{ animationDelay: `${i * 45}ms` }}
                            >
                                <FaCheckCircle aria-hidden="true" />
                                <span>{c}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SYMPTOMS OF LOW OMEGA-3 */}
                <section className={styles.section} id="symptoms">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Watch for</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Symptoms That May Suggest Low Omega-3 Levels
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        Common signs include:
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
                </section>

                {/* HOW TO IMPROVE */}
                <section className={styles.section} id="improve">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Your action plan</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        How To Improve Your Omega Balance
                    </h2>

                    <div className={styles.prereqGrid}>
                        {IMPROVE.map((p, i) => (
                            <div
                                key={p.title}
                                className={`${styles.prereqCard} ${styles.reveal}`}
                                data-reveal
                                style={{ animationDelay: `${i * 90}ms` }}
                            >
                                <span className={styles.prereqHead}>
                                    <p.Icon aria-hidden="true" />
                                    {p.title}
                                </span>
                                <ul>
                                    {p.items.map((it) => (
                                        <li key={it}>
                                            <FaCheckCircle aria-hidden="true" />
                                            <span>{it}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FUNCTIONAL MEDICINE USE */}
                <section className={styles.section} id="functional">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Used by clinicians</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Why Functional Medicine Doctors Use This Test
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        Functional medicine practitioners use Omega-3 and Omega-6 Testing to personalize
                        nutritional strategies and assess hidden drivers of inflammation. It is commonly
                        included in:
                    </p>
                    <div className={styles.treatmentList}>
                        {FUNCTIONAL_USES.map((t, i) => (
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
                </section>

                {/* WHY DR DANGS LAB */}
                <section className={styles.section} id="why-ddl">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Why Dr. Dangs Lab</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Why Choose Dr. Dangs Lab?
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        Dr. Dangs Lab is one of India’s most trusted diagnostic laboratories, known for
                        more than four decades of quality-focused testing and access to advanced
                        specialty diagnostics. Patients benefit from:
                    </p>
                    <div className={styles.warnGrid}>
                        {WHY_BENEFITS.map((w, i) => (
                            <div
                                key={w.text}
                                className={`${styles.warnCard} ${styles.reveal}`}
                                data-reveal
                                style={{ animationDelay: `${i * 90}ms` }}
                            >
                                <w.Icon aria-hidden="true" />
                                <p>{w.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SUMMARY */}
                <section className={styles.section}>
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>In summary</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>Summary</h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        The Importance of Omega-3 and Omega-6 Testing lies in its ability to reveal
                        whether your body is in a state of inflammatory balance or chronic imbalance. By
                        measuring EPA, DHA, linoleic acid, arachidonic acid, and key ratios such as the
                        AA/EPA ratio, this test offers powerful insights into your cardiovascular,
                        metabolic, and overall health.
                    </p>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        If you are dealing with fatigue, high cholesterol, inflammation, or simply want
                        to optimize your health, Omega-3 and Omega-6 Testing in Delhi at Dr. Dangs Lab
                        can provide a personalized roadmap toward better wellness.
                    </p>
                </section>

                {/* TEST SUMMARY CTA */}
                <section className={`${styles.testCard} ${styles.reveal}`} data-reveal>
                    <div className={styles.testCardBody}>
                        <span className={styles.testCardTag}>Test details</span>
                        <h3>Omega-3 &amp; Omega-6 Fatty Acid Profile</h3>
                        <ul className={styles.testCardMeta}>
                            <li><FaFlask aria-hidden="true" /> Blood-based fatty acid analysis</li>
                            <li><FaMapMarkerAlt aria-hidden="true" /> Home or lab collection</li>
                        </ul>
                    </div>
                    <div className={styles.testCardActions}>
                        <Link
                            href="/HomeCollection?package=Omega-3%20and%20Omega-6%20Testing"
                            className={styles.ctaPrimary}
                        >
                            <FaVial aria-hidden="true" /> Book this test
                        </Link>
                        <Link href="/Feedback" className={styles.ctaGhost}>
                            Talk to us
                        </Link>
                    </div>
                </section>

                {/* FAQ */}
                <section className={styles.section} id="faq">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Common questions</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        FAQs Around Omega Testing
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
                                    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}>
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
                                            style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
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

export default Omega;
