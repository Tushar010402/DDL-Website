'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    FaPills,
    FaVial,
    FaVials,
    FaArrowDown,
    FaClinicMedical,
    FaMapMarkerAlt,
    FaCheckCircle,
    FaTimesCircle,
    FaInfoCircle,
    FaExclamationTriangle,
    FaShieldAlt,
    FaBolt,
    FaTint,
    FaBrain,
    FaHeartbeat,
    FaHeart,
    FaBatteryQuarter,
    FaSmile,
    FaCloud,
    FaBed,
    FaHandPaper,
    FaDna,
    FaStethoscope,
    FaUserMd,
    FaUtensils,
    FaSeedling,
    FaCheese,
    FaAppleAlt,
    FaFish,
    FaLeaf,
    FaWineGlassAlt,
    FaCalendarCheck,
    FaFileAlt,
    FaMicroscope,
    FaSnowflake,
    FaThermometerHalf,
    FaMinus,
    FaPlus,
    FaFlask,
    FaSearchPlus,
    FaChild,
} from 'react-icons/fa';
import styles from './VitaminB.module.css';

const VITAMIN_PROFILES = [
    {
        Icon: FaBolt,
        name: 'Vitamin B1',
        sub: 'Thiamine',
        items: [
            'Energy production from carbohydrates',
            'Nerve signaling',
            'Heart and brain function',
        ],
    },
    {
        Icon: FaTint,
        name: 'Vitamin B2',
        sub: 'Riboflavin',
        items: [
            'Cellular energy production',
            'Skin and eye health',
            'Activation of other vitamins, such as B6 and folate',
        ],
    },
    {
        Icon: FaShieldAlt,
        name: 'Vitamin B5',
        sub: 'Pantothenic Acid',
        items: [
            'Hormone production',
            'Stress response',
            'Fat metabolism',
        ],
    },
    {
        Icon: FaBrain,
        name: 'Vitamin B6',
        sub: 'Pyridoxine',
        items: [
            'Neurotransmitter synthesis',
            'Red blood cell production',
            'Immune function',
            'Homocysteine metabolism',
        ],
    },
];

const WHY_TEST = [
    { Icon: FaSearchPlus, text: 'Detect nutritional deficiencies before symptoms worsen' },
    { Icon: FaBatteryQuarter, text: 'Identify causes of fatigue and low energy' },
    { Icon: FaHandPaper, text: 'Evaluate nerve-related symptoms such as tingling or numbness' },
    { Icon: FaBrain, text: 'Assess mood changes and cognitive difficulties' },
    { Icon: FaUtensils, text: 'Monitor individuals with digestive disorders or restrictive diets' },
    { Icon: FaExclamationTriangle, text: 'Prevent over-supplementation, especially with vitamin B6' },
];

const SYMPTOMS = [
    { Icon: FaBatteryQuarter, label: 'Persistent fatigue' },
    { Icon: FaShieldAlt, label: 'Muscle weakness' },
    { Icon: FaHandPaper, label: 'Tingling or burning sensation in feet and hands' },
    { Icon: FaBrain, label: 'Poor memory and concentration' },
    { Icon: FaSmile, label: 'Irritability or anxiety' },
    { Icon: FaTint, label: 'Cracked lips and mouth sores' },
    { Icon: FaUserMd, label: 'Hair fall' },
    { Icon: FaCloud, label: 'Acne or skin rashes' },
    { Icon: FaBed, label: 'Sleep disturbances' },
];

const VITAMIN_SYMPTOMS = [
    {
        when: 'Vitamin B1 Deficiency',
        Icon: FaBolt,
        items: ['Extreme tiredness', 'Poor appetite', 'Nerve pain', 'Heart palpitations', 'Brain fog'],
    },
    {
        when: 'Vitamin B2 Deficiency',
        Icon: FaTint,
        items: ['Cracked corners of the mouth', 'Sore tongue', 'Dry skin', 'Light sensitivity'],
    },
    {
        when: 'Vitamin B5 Deficiency',
        Icon: FaShieldAlt,
        items: ['Burning feet', 'Numbness', 'Sleep disturbances', 'Low stress tolerance'],
    },
    {
        when: 'Vitamin B6 Deficiency',
        Icon: FaBrain,
        items: ['Anemia', 'Depression', 'Peripheral neuropathy', 'Weakened immunity'],
    },
];

const HIGH_RISK = [
    { Icon: FaLeaf, label: 'Vegetarians and vegans' },
    { Icon: FaUserMd, label: 'Older adults' },
    { Icon: FaStethoscope, label: 'People with diabetes' },
    { Icon: FaHeartbeat, label: 'Patients with celiac disease or inflammatory bowel disease' },
    { Icon: FaWineGlassAlt, label: 'Individuals with chronic alcohol use' },
    { Icon: FaPills, label: 'People taking long-term medications such as metformin, oral contraceptives, anti-seizure medicines, or acid suppressants' },
    { Icon: FaBrain, label: 'Patients with chronic stress or adrenal dysfunction' },
    { Icon: FaBatteryQuarter, label: 'Individuals with unexplained fatigue or neuropathy' },
];

const CONDITIONS = [
    { Icon: FaHandPaper, label: 'Peripheral neuropathy' },
    { Icon: FaHeartbeat, label: 'Migraine headaches' },
    { Icon: FaSmile, label: 'Depression and anxiety' },
    { Icon: FaDna, label: 'Insulin resistance' },
    { Icon: FaStethoscope, label: 'Fatty liver disease' },
    { Icon: FaDna, label: 'Polycystic ovary syndrome (PCOS)' },
    { Icon: FaTint, label: 'Anemia' },
    { Icon: FaBatteryQuarter, label: 'Chronic fatigue' },
];

const TESTS = [
    {
        Icon: FaBolt,
        title: 'Whole blood thiamine',
        text: 'Vitamin B1 — direct measurement for the most reliable status assessment.',
    },
    {
        Icon: FaTint,
        title: 'Riboflavin (Vitamin B2)',
        text: 'Assesses Vitamin B2 status, key for cellular energy and skin and eye health.',
    },
    {
        Icon: FaShieldAlt,
        title: 'Pantothenic acid (Vitamin B5)',
        text: 'Measures Vitamin B5 — the precursor to coenzyme A, essential for hormone and fat metabolism.',
    },
    {
        Icon: FaBrain,
        title: 'Pyridoxal-5-phosphate',
        text: 'The active form of Vitamin B6 — the most clinically useful marker of B6 status.',
    },
];

const COMPANION_TESTS = [
    { Icon: FaVial, text: 'CBC' },
    { Icon: FaVial, text: 'Vitamin B12' },
    { Icon: FaVial, text: 'Folate' },
    { Icon: FaVial, text: 'Homocysteine' },
    { Icon: FaVial, text: 'Magnesium' },
    { Icon: FaVial, text: 'Iron studies' },
];

const WHY_BETTER = [
    'Confirm deficiency',
    'Determine severity',
    'Guide exact supplementation',
    'Monitor response to treatment',
    'Avoid unnecessary or excessive supplements',
];

const ABSORPTION_FACTORS = [
    { Icon: FaStethoscope, label: 'Gut disorders' },
    { Icon: FaExclamationTriangle, label: 'Chronic inflammation' },
    { Icon: FaWineGlassAlt, label: 'High alcohol intake' },
    { Icon: FaPills, label: 'Certain medications' },
    { Icon: FaDna, label: 'Genetic variations affecting nutrient metabolism' },
    { Icon: FaBrain, label: 'Prolonged stress' },
];

const FOOD_SOURCES = [
    {
        Icon: FaSeedling,
        name: 'Vitamin B1',
        sub: 'Thiamine',
        items: ['Whole grains', 'Legumes', 'Pork', 'Seeds'],
    },
    {
        Icon: FaCheese,
        name: 'Vitamin B2',
        sub: 'Riboflavin',
        items: ['Milk', 'Eggs', 'Almonds', 'Mushrooms'],
    },
    {
        Icon: FaUtensils,
        name: 'Vitamin B5',
        sub: 'Pantothenic Acid',
        items: ['Chicken', 'Avocado', 'Mushrooms', 'Sunflower seeds'],
    },
    {
        Icon: FaAppleAlt,
        name: 'Vitamin B6',
        sub: 'Pyridoxine',
        items: ['Bananas', 'Potatoes', 'Fish', 'Chickpeas'],
    },
];

const WHY_DDL = [
    { Icon: FaShieldAlt, text: 'NABL-accredited quality standards' },
    { Icon: FaMicroscope, text: 'Specialized micronutrient analysis' },
    { Icon: FaClinicMedical, text: 'Home sample collection across major Indian cities' },
    { Icon: FaUserMd, text: 'Expert diagnostic support' },
    { Icon: FaHeartbeat, text: 'Trusted legacy of over 4 decades in laboratory medicine' },
];

const ACCURACY = [
    {
        when: 'Immediate cooling after collection',
        Icon: FaSnowflake,
        body: 'Samples are cooled right after collection to preserve vitamin integrity.',
    },
    {
        when: 'Light-protected sample handling',
        Icon: FaShieldAlt,
        body: 'B-vitamins like riboflavin degrade with light — samples are kept light-protected throughout the workflow.',
    },
    {
        when: 'Controlled transport conditions',
        Icon: FaThermometerHalf,
        body: 'Temperature-controlled transport conditions to maintain analyte stability from collection to lab.',
    },
    {
        when: 'Ultra-low temperature storage when needed',
        Icon: FaSnowflake,
        body: 'For sensitive analytes, ultra-low temperature storage prevents degradation before analysis.',
    },
    {
        when: 'Quality checks before analysis',
        Icon: FaMicroscope,
        body: 'Pre-analytical quality checks ensure only viable samples are processed — guarding against false results.',
    },
];

const FAQS = [
    {
        q: 'Why is Vitamin B1, B2, B5 and B6 testing important?',
        a: 'These tests help identify deficiencies that may cause fatigue, nerve symptoms, mood changes, and metabolic issues.',
    },
    {
        q: 'What symptoms suggest I should get tested?',
        a: 'Persistent tiredness, tingling in the limbs, brain fog, skin problems, and low mood are common indicators.',
    },
    {
        q: 'Can vitamin B6 levels be too high?',
        a: 'Yes. Excessive supplementation can lead to nerve-related symptoms, which is why testing is useful.',
    },
    {
        q: 'Are these tests included in routine health checkups?',
        a: 'Usually not. They are often ordered separately when symptoms or risk factors are present.',
    },
    {
        q: 'Do I need fasting before these tests?',
        a: 'Requirements vary by test. Follow the instructions provided by your laboratory.',
    },
    {
        q: 'How often should these vitamins be checked?',
        a: 'Testing frequency depends on symptoms, treatment, and your physician\'s recommendation.',
    },
    {
        q: 'Can deficiencies occur despite a healthy diet?',
        a: 'Yes. Absorption problems, medications, stress, and chronic illness can all contribute.',
    },
];

const VitaminB = () => {
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
                            <FaPills aria-hidden="true" />
                            Functional Medicine · Nutritional Health
                        </span>
                        <h1 className={`${styles.heroTitle} ${styles.reveal}`} data-reveal>
                            Importance of <span className={styles.hl}>Vitamin B1, B2,<br />B5 &amp; B6</span> Testing
                        </h1>
                        <p className={`${styles.heroSub} ${styles.reveal}`} data-reveal>
                            B vitamins are often discussed as a group, but each one plays a unique
                            role in keeping your body energized, your nerves healthy, and your
                            metabolism functioning smoothly. When levels are low, the symptoms can
                            be subtle at first: fatigue, brain fog, tingling in the hands and feet,
                            mood changes, and skin issues.
                        </p>
                        <p className={`${styles.heroSub} ${styles.reveal}`} data-reveal>
                            This is where the Importance of Vitamin B1, B2, B5, and B6 Testing
                            becomes clear. Identifying deficiencies early through laboratory testing
                            can help uncover the root cause of unexplained symptoms and prevent
                            long-term complications.
                        </p>
                        <p className={`${styles.heroSub} ${styles.reveal}`} data-reveal>
                            At{' '}
                            <a href="https://www.drdangslab.com/" className={styles.inlineLink}>
                                Dr. Dangs Lab
                            </a>
                            , advanced nutritional testing helps detect hidden micronutrient
                            deficiencies that may impact your overall health and wellness. With more
                            than four decades of diagnostic excellence, the lab is trusted by
                            physicians and patients across India for accurate and reliable results.
                        </p>

                        <div className={`${styles.heroHighlights} ${styles.reveal}`} data-reveal>
                            <span className={styles.highlight}>
                                <FaCheckCircle aria-hidden="true" />
                                Whole-blood markers
                            </span>
                            <span className={styles.highlight}>
                                <FaCheckCircle aria-hidden="true" />
                                4 essential B-vitamins
                            </span>
                            <span className={styles.highlight}>
                                <FaCheckCircle aria-hidden="true" />
                                Functional medicine grade
                            </span>
                        </div>

                        <div className={`${styles.heroCtas} ${styles.reveal}`} data-reveal>
                            <Link href="/HomeCollection" className={styles.ctaPrimary}>
                                <FaVial aria-hidden="true" /> Book Vitamin B Test
                            </Link>
                            <a href="#tests" className={styles.ctaGhost}>
                                What it measures <FaArrowDown aria-hidden="true" />
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
                                src="/PhotosAndLogos/Vitamin-B-Testing.webp"
                                alt="Importance of Vitamin B1, B2, B5 and B6 Testing — nutritional blood test at Dr. Dangs Lab"
                                fill
                                sizes="(max-width: 980px) 100vw, 640px"
                                className={styles.heroImage}
                                priority
                            />
                            <span className={styles.imageGlow} aria-hidden="true" />
                        </div>
                    </div>
                </div>

                <div className={`${styles.credentialsBar} ${styles.reveal}`} data-reveal>
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
                            <strong>B1 · B2 · B5 · B6</strong>
                            <span>Plus active forms (P5P)</span>
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
                {/* WHAT ARE THESE VITAMINS */}
                <section className={styles.section} id="what">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>The basics</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        What Are Vitamins B1, B2, B5 &amp; B6?
                    </h2>
                    <p className={`${styles.lead} ${styles.reveal}`} data-reveal>
                        These four vitamins belong to the <strong>B-complex family</strong> and are
                        water-soluble, meaning your body does not store them in large amounts.
                    </p>

                    <div className={styles.measureGrid}>
                        {VITAMIN_PROFILES.map((v, i) => (
                            <div
                                key={v.name}
                                className={`${styles.measureCard} ${styles.reveal}`}
                                data-reveal
                                style={{ animationDelay: `${i * 80}ms` }}
                            >
                                <span className={styles.measureHead}>
                                    <v.Icon aria-hidden="true" /> {v.name}
                                </span>
                                <h3>{v.sub}</h3>
                                <p style={{ fontSize: '0.82rem', margin: '4px 0 8px', opacity: 0.7 }}>Supports:</p>
                                <ul>
                                    {v.items.map((it) => (
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

                {/* WHY TESTING IS IMPORTANT */}
                <section className={styles.section} id="why">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Why it matters</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Why Vitamin B Testing Is Important
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        Many people supplement vitamins without knowing whether they are deficient.
                        Blood testing offers objective data and allows targeted treatment.
                    </p>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        The Importance of Vitamin B1, B2, B5 and B6 Testing lies in its ability to:
                    </p>

                    <div className={styles.causeGrid}>
                        {WHY_TEST.map((c, i) => (
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
                </section>

                {/* SYMPTOMS */}
                <section className={styles.section} id="symptoms">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Watch for</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Symptoms That May Indicate A Deficiency
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        Deficiencies in these vitamins often produce overlapping symptoms.
                    </p>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        <strong>Common Signs and Symptoms</strong>
                    </p>

                    <div className={styles.symptomGrid}>
                        {SYMPTOMS.map((s, i) => (
                            <div
                                key={s.label}
                                className={`${styles.symptomChip} ${styles.reveal}`}
                                data-reveal
                                style={{ animationDelay: `${i * 50}ms` }}
                            >
                                <s.Icon aria-hidden="true" />
                                <span>{s.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className={`${styles.calloutSoft} ${styles.reveal}`} data-reveal>
                        <FaInfoCircle aria-hidden="true" />
                        <p>
                            If you have these symptoms, testing can help determine whether vitamin
                            deficiencies are contributing factors.
                        </p>
                    </div>
                </section>

                {/* VITAMIN-SPECIFIC SYMPTOMS */}
                <section className={styles.section} id="vitamin-symptoms">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>By vitamin</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Vitamin-Specific Deficiency Symptoms
                    </h2>

                    <div className={styles.prereqGrid}>
                        {VITAMIN_SYMPTOMS.map((v, i) => (
                            <div
                                key={v.when}
                                className={`${styles.prereqCard} ${styles.reveal}`}
                                data-reveal
                                style={{ animationDelay: `${i * 90}ms` }}
                            >
                                <span className={styles.prereqHead}>
                                    <v.Icon aria-hidden="true" />
                                    {v.when}
                                </span>
                                <ul>
                                    {v.items.map((it) => (
                                        <li key={it}>
                                            <FaTimesCircle aria-hidden="true" />
                                            <span>{it}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* WHO SHOULD CONSIDER */}
                <section className={styles.section} id="who">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Right for you?</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Who Should Consider Vitamin B1, B2, B5 &amp; B6 Testing?
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        Testing is particularly useful for people at increased risk of deficiency.
                    </p>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        <strong>High-Risk Groups</strong>
                    </p>

                    <div className={styles.symptomGrid}>
                        {HIGH_RISK.map((item, i) => (
                            <div
                                key={item.label}
                                className={`${styles.symptomChip} ${styles.reveal}`}
                                data-reveal
                                style={{ animationDelay: `${i * 50}ms` }}
                            >
                                <item.Icon aria-hidden="true" />
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CONDITIONS LINKED */}
                <section className={styles.section} id="conditions">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Clinical context</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Clinical Conditions Linked To B Vitamin Deficiencies
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        Low B-vitamin status can contribute to:
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

                    <div className={`${styles.calloutWarn} ${styles.reveal}`} data-reveal>
                        <FaExclamationTriangle aria-hidden="true" />
                        <p>
                            Vitamin B6 is also important for regulating homocysteine, an elevated
                            marker associated with cardiovascular risk.
                        </p>
                    </div>
                </section>

                {/* HOW ARE THESE VITAMINS TESTED */}
                <section className={`${styles.section} ${styles.diagnosis}`} id="tests">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Inside the report</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        How Are These Vitamins Tested?
                    </h2>
                    <p className={`${styles.lead} ${styles.reveal}`} data-reveal>
                        Blood samples are used to assess levels of each vitamin or their active forms.
                    </p>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        <strong>Common Tests Include</strong>
                    </p>

                    <div className={styles.processRow}>
                        {TESTS.map((p, i) => (
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

                    <p className={`${styles.body} ${styles.reveal}`} data-reveal style={{ marginTop: '32px' }}>
                        Depending on your symptoms, your doctor may also recommend:
                    </p>

                    <div className={styles.symptomGrid}>
                        {COMPANION_TESTS.map((c, i) => (
                            <div
                                key={c.text}
                                className={`${styles.symptomChip} ${styles.reveal}`}
                                data-reveal
                                style={{ animationDelay: `${i * 55}ms` }}
                            >
                                <c.Icon aria-hidden="true" />
                                <span>{c.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className={`${styles.calloutSoft} ${styles.reveal}`} data-reveal>
                        <FaInfoCircle aria-hidden="true" />
                        <p>
                            Advanced micronutrient testing can provide a broader picture of
                            nutritional health.
                        </p>
                    </div>
                </section>

                {/* WHY TESTING IS BETTER THAN GUESSWORK */}
                <section className={styles.section} id="better">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Stop guessing</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Why Testing Is Better Than Guesswork
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        Symptoms of B-vitamin deficiency can mimic thyroid disorders, anemia, sleep
                        issues, and stress.
                    </p>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        Testing helps:
                    </p>
                    <div className={styles.treatmentList}>
                        {WHY_BETTER.map((t, i) => (
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
                            This is especially important for vitamin B6, since prolonged high intake
                            may itself cause nerve-related symptoms.
                        </p>
                    </div>
                </section>

                {/* CAN YOU BE DEFICIENT EVEN IF YOU EAT WELL */}
                <section className={styles.section} id="absorption">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Hidden factors</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Can You Be Deficient Even If You Eat Well?
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        Yes. Several factors can impair absorption or increase nutrient requirements,
                        including:
                    </p>
                    <div className={styles.symptomGrid}>
                        {ABSORPTION_FACTORS.map((item, i) => (
                            <div
                                key={item.label}
                                className={`${styles.symptomChip} ${styles.reveal}`}
                                data-reveal
                                style={{ animationDelay: `${i * 50}ms` }}
                            >
                                <item.Icon aria-hidden="true" />
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                    <p className={`${styles.note} ${styles.reveal}`} data-reveal>
                        Even a balanced diet may not guarantee optimal vitamin status.
                    </p>
                </section>

                {/* FOOD SOURCES */}
                <section className={styles.section} id="food-sources">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Eat this</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Best Food Sources Of These Vitamins
                    </h2>

                    <div className={styles.measureGrid}>
                        {FOOD_SOURCES.map((v, i) => (
                            <div
                                key={v.name}
                                className={`${styles.measureCard} ${styles.reveal}`}
                                data-reveal
                                style={{ animationDelay: `${i * 80}ms` }}
                            >
                                <span className={styles.measureHead}>
                                    <v.Icon aria-hidden="true" /> {v.name}
                                </span>
                                <h3>{v.sub}</h3>
                                <ul>
                                    {v.items.map((it) => (
                                        <li key={it}>
                                            <FaCheckCircle aria-hidden="true" />
                                            <span>{it}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <p className={`${styles.note} ${styles.reveal}`} data-reveal>
                        Diet is foundational, but testing determines whether intake is translating
                        into adequate body levels.
                    </p>
                </section>

                {/* WHY CHOOSE DR DANGS LAB */}
                <section className={styles.section} id="why-ddl">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Why Dr. Dangs Lab</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Why Choose Dr. Dangs Lab?
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        Dr. Dangs Lab offers advanced nutritional and functional testing with:
                    </p>
                    <div className={styles.warnGrid}>
                        {WHY_DDL.map((w, i) => (
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
                    <div className={`${styles.calloutSoft} ${styles.reveal}`} data-reveal>
                        <FaInfoCircle aria-hidden="true" />
                        <p>
                            For patients with unexplained fatigue, nerve symptoms, or metabolic
                            concerns, targeted vitamin testing can be a valuable part of a
                            root-cause evaluation.
                        </p>
                    </div>
                </section>

                {/* HOW DDL ENSURES ACCURATE RESULTS */}
                <section className={styles.section} id="accuracy">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Pre-analytical care</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        How Dr. Dangs Lab Ensures Accurate Results
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        Dr. Dangs Lab follows strict protocols for specialized vitamin testing,
                        including:
                    </p>
                    <div className={styles.timeline}>
                        {ACCURACY.map((p, i) => (
                            <div
                                key={p.when}
                                className={`${styles.timelineItem} ${styles.reveal}`}
                                data-reveal
                                style={{ animationDelay: `${i * 100}ms` }}
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
                    <p className={`${styles.note} ${styles.reveal}`} data-reveal>
                        These measures are essential for obtaining reliable and clinically meaningful
                        micronutrient results.
                    </p>
                </section>

                {/* BANNER */}
                <section className={`${styles.earlyBanner} ${styles.reveal}`} data-reveal>
                    <span className={styles.bannerSheen} aria-hidden="true" />
                    <div className={styles.earlyText}>
                        <h2>Stop Guessing — Start Measuring</h2>
                        <p>
                            If you&apos;re dealing with unexplained tiredness, neuropathy, brain fog,
                            or stress-related symptoms, targeted B-vitamin testing gives you
                            actionable insights — instead of another bottle of supplements.
                        </p>
                    </div>
                    <Link href="/HomeCollection" className={styles.ctaWhite}>
                        <FaCalendarCheck aria-hidden="true" /> Get tested now
                    </Link>
                </section>

                {/* CONCLUSION */}
                <section className={styles.section}>
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>In summary</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>Conclusion</h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        The Importance of Vitamin B1, B2, B5 and B6 Testing lies in detecting hidden
                        deficiencies that can affect energy, nerve health, mood, and metabolism. If
                        you are dealing with unexplained tiredness, neuropathy, brain fog, or
                        stress-related symptoms, these tests can provide actionable insights.
                    </p>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        Rather than relying on supplements alone, laboratory testing allows for a
                        more precise and personalized approach to nutritional health.
                    </p>
                </section>

                {/* TEST SUMMARY CTA */}
                <section className={`${styles.testCard} ${styles.reveal}`} data-reveal>
                    <div className={styles.testCardBody}>
                        <span className={styles.testCardTag}>Test details</span>
                        <h3>Vitamin B1, B2, B5 &amp; B6 Profile</h3>
                        <ul className={styles.testCardMeta}>
                            <li><FaFlask aria-hidden="true" /> Blood-based micronutrient analysis</li>
                            <li><FaMapMarkerAlt aria-hidden="true" /> Home collection or SDA, New Delhi lab</li>
                            <li><FaFileAlt aria-hidden="true" /> Sample report: available on request</li>
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
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Common questions</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        FAQs Around Vitamin B&apos;s Testing
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

export default VitaminB;
