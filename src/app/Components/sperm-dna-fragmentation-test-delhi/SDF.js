'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    FaDna,
    FaMicroscope,
    FaVial,
    FaArrowDown,
    FaCheckCircle,
    FaTimesCircle,
    FaExclamationTriangle,
    FaInfoCircle,
    FaFire,
    FaSmoking,
    FaWeight,
    FaWind,
    FaVirus,
    FaNotesMedical,
    FaSyncAlt,
    FaAppleAlt,
    FaUserMd,
    FaFlask,
    FaFileAlt,
    FaCalendarCheck,
    FaMapMarkerAlt,
    FaClinicMedical,
    FaMinus,
    FaPlus,
} from 'react-icons/fa';
import styles from '@/app/Components/importance-of-omega-3-omega-6-testing/Omega.module.css';

const SAMPLE_REPORT_URL =
    'https://drive.google.com/file/d/1aMV3r-hA_rjhW4t3zMoGYjwWCmECfLC8/view?usp=sharing';

const SDF_LEVELS = [
    {
        Icon: FaCheckCircle,
        head: 'Normal SDF',
        title: 'Low DNA damage',
        items: [
            'Low DNA damage',
            'Better chances of conception',
        ],
    },
    {
        Icon: FaExclamationTriangle,
        head: 'Moderate SDF',
        title: 'Borderline integrity',
        items: [
            'May reduce fertility potential',
        ],
    },
    {
        Icon: FaTimesCircle,
        head: 'High SDF',
        title: 'Significant DNA damage',
        items: [
            'Associated with male infertility',
            'IVF failure',
            'Recurrent pregnancy loss',
        ],
    },
];

const CAUSES = [
    { Icon: FaFire, label: 'Oxidative stress, the leading cause affecting sperm DNA' },
    { Icon: FaSmoking, label: 'Smoking and alcohol consumption' },
    { Icon: FaWeight, label: 'Poor diet and obesity' },
    { Icon: FaWind, label: 'Exposure to environmental toxins' },
    { Icon: FaVirus, label: 'Infections or inflammation' },
    { Icon: FaNotesMedical, label: 'Varicocele (enlarged veins in the scrotum)' },
];

const IVF_EFFECTS = [
    { Icon: FaTimesCircle, label: 'Poor fertilization' },
    { Icon: FaTimesCircle, label: 'Reduced embryo quality' },
    { Icon: FaTimesCircle, label: 'Failure of implantation' },
    { Icon: FaTimesCircle, label: 'Increased chances of recurrent pregnancy loss' },
    { Icon: FaTimesCircle, label: 'Higher likelihood of IVF failure' },
    { Icon: FaTimesCircle, label: 'Variable or reduced ICSI success' },
];

const TUNEL_BENEFITS = [
    'Provides an accurate measurement of SDF',
    'Helps identify hidden causes of infertility',
    'Supports better clinical decision-making',
];

const WHO_SHOULD = [
    'Are facing male infertility',
    'Have normal semen analysis or seminogram reports, but have difficulty conceiving',
    'Have experienced repeated IVF failure',
    'Have concerns about ICSI success',
    'Have a history of recurrent pregnancy loss',
];

const REDUCE = [
    {
        when: 'Lifestyle Changes for Male Infertility',
        Icon: FaAppleAlt,
        items: [
            'Quit smoking and reduce alcohol intake',
            'Maintain a healthy body weight',
            'Eat a balanced diet rich in antioxidants',
            'Improve sleep and reduce stress',
        ],
        note: 'These lifestyle changes for male infertility can significantly lower oxidative stress and improve sperm DNA health.',
    },
    {
        when: 'Medical Support',
        Icon: FaUserMd,
        items: [
            'Treat infections or inflammation',
            'Manage varicocele, orchiditis if present',
            'Take antioxidant therapy under medical guidance',
        ],
        note: 'With consistent efforts, many patients see improvement in sperm quality and DNA integrity over time.',
    },
];

const WHY_DDL = [
    { Icon: FaMicroscope, text: 'Decades of diagnostic experience' },
    { Icon: FaFlask, text: 'Advanced technology for Advanced Semen Analysis' },
    { Icon: FaDna, text: 'Use of reliable methods like the TUNEL assay' },
    { Icon: FaUserMd, text: 'Clinician-trusted reporting' },
    { Icon: FaCheckCircle, text: 'A patient-focused approach' },
];

const BOOK_OFFERS = [
    'Advanced Semen Analysis',
    'Sperm DNA Fragmentation (SDF) Testing',
    'TUNEL Assay',
];

const FAQS = [
    {
        q: 'What are normal SDF levels?',
        a: 'Normal SDF levels indicate minimal DNA damage and better chances of conception.',
    },
    {
        q: 'What is high sperm DNA fragmentation?',
        a: 'It refers to significant DNA damage in sperm that can affect fertilization and embryo development.',
    },
    {
        q: 'Does SDF affect IVF success?',
        a: 'Yes, high SDF is linked to IVF failure, poor embryo quality, and implantation issues.',
    },
    {
        q: 'How to reduce DNA fragmentation in sperm?',
        a: 'Through lifestyle changes, medical treatment, and antioxidant support.',
    },
    {
        q: 'Is SDF part of semen analysis?',
        a: 'No, it is an advanced test performed alongside routine sperm analysis or seminogram.',
    },
];

const SDF = () => {
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
                            <FaDna aria-hidden="true" />
                            Andrology · Advanced Semen Analysis
                        </span>
                        <h1 className={`${styles.heroTitle} ${styles.reveal}`} data-reveal>
                            Sperm <span className={styles.hl}>DNA Fragmentation</span> Test (SDF)
                        </h1>
                        <p className={`${styles.heroSub} ${styles.reveal}`} data-reveal>
                            When a couple is trying to conceive, and things don&apos;t go as planned,
                            the journey can quickly become stressful and confusing. Many times, reports
                            like semen analysis, sperm analysis, or a seminogram come back normal, yet
                            pregnancy still doesn&apos;t happen.
                        </p>
                        <p className={`${styles.heroSub} ${styles.reveal}`} data-reveal>
                            In such situations, one important factor is often overlooked:{' '}
                            <strong>sperm DNA fragmentation (SDF)</strong>.
                        </p>
                        <p className={`${styles.heroSub} ${styles.reveal}`} data-reveal>
                            At{' '}
                            <a href="https://www.drdangslab.com/" className={styles.inlineLink}>
                                Dr. Dangs Lab
                            </a>
                            , we have seen many cases where routine testing was not enough to explain
                            infertility. That&apos;s why we offer Advanced Semen Analysis, including the
                            TUNEL assay, to provide a deeper and more meaningful fertility assessment.
                        </p>
                        <p className={`${styles.heroSub} ${styles.reveal}`} data-reveal>
                            With decades of experience in diagnostic services, our focus is not just on
                            testing but on helping patients and clinicians find clear, actionable answers.
                        </p>

                        <div className={`${styles.heroHighlights} ${styles.reveal}`} data-reveal>
                            <span className={styles.highlight}>
                                <FaCheckCircle aria-hidden="true" />
                                TUNEL assay
                            </span>
                            <span className={styles.highlight}>
                                <FaCheckCircle aria-hidden="true" />
                                Direct DNA-break detection
                            </span>
                            <span className={styles.highlight}>
                                <FaCheckCircle aria-hidden="true" />
                                Beyond routine semen analysis
                            </span>
                        </div>

                        <div className={`${styles.heroCtas} ${styles.reveal}`} data-reveal>
                            <Link
                                href="/HomeCollection?package=Sperm%20DNA%20Fragmentation%20Test%20(SDF)"
                                className={styles.ctaPrimary}
                            >
                                <FaVial aria-hidden="true" /> Book SDF Test
                            </Link>
                            <a href="#tunel" className={styles.ctaGhost}>
                                How it is measured <FaArrowDown aria-hidden="true" />
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
                                src="/PhotosAndLogos/Sperm-DNA-Fragmentation-Test-SDF.webp"
                                alt="Sperm DNA Fragmentation (SDF) Test at Dr. Dangs Lab — TUNEL assay for male fertility assessment"
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
                            <FaDna aria-hidden="true" />
                        </span>
                        <div className={styles.credText}>
                            <strong>TUNEL assay</strong>
                            <span>Direct DNA-break method</span>
                        </div>
                    </div>
                    <span className={styles.credDivider} aria-hidden="true" />
                    <div className={styles.credential}>
                        <span className={styles.credIcon}>
                            <FaMapMarkerAlt aria-hidden="true" />
                        </span>
                        <div className={styles.credText}>
                            <strong>Delhi · Gurugram · Noida</strong>
                            <span>Trusted diagnostics</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.container}>
                {/* WHAT IS SDF */}
                <section className={styles.section} id="what">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>The basics</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        What Is Sperm DNA Fragmentation (SDF)?
                    </h2>
                    <p className={`${styles.lead} ${styles.reveal}`} data-reveal>
                        Sperm DNA fragmentation refers to <strong>damage in the genetic material of
                        sperm cells</strong>. This damage can interfere with fertilization and affect
                        how an embryo develops.
                    </p>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        A standard semen analysis, or sperm analysis, evaluates basic parameters such
                        as count, motility, and morphology. While these are important, they do not
                        reflect the actual health of sperm DNA.
                    </p>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        This means a person can have a &ldquo;normal&rdquo; report and still experience male
                        infertility due to compromised DNA integrity.
                    </p>
                    <div className={`${styles.calloutSoft} ${styles.reveal}`} data-reveal>
                        <FaInfoCircle aria-hidden="true" />
                        <p>
                            That&apos;s where SDF testing becomes essential; it helps assess the true
                            quality of sperm beyond what is visible under a microscope.
                        </p>
                    </div>
                </section>

                {/* NORMAL VS HIGH */}
                <section className={styles.section} id="levels">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Reading the result</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Normal vs High SDF Levels: What Do They Mean?
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        A common question we hear from patients is:{' '}
                        <strong>What is high sperm DNA fragmentation?</strong>
                    </p>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        SDF levels are usually interpreted as:
                    </p>

                    <div className={styles.measureGrid}>
                        {SDF_LEVELS.map((lvl, i) => (
                            <div
                                key={lvl.head}
                                className={`${styles.measureCard} ${styles.reveal}`}
                                data-reveal
                                style={{ animationDelay: `${i * 90}ms` }}
                            >
                                <span className={styles.measureHead}>
                                    <lvl.Icon aria-hidden="true" /> {lvl.head}
                                </span>
                                <h3>{lvl.title}</h3>
                                <ul>
                                    {lvl.items.map((it) => (
                                        <li key={it}>
                                            <FaCheckCircle aria-hidden="true" />
                                            <span>{it}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        Understanding where you stand helps doctors decide the next steps in treatment,
                        especially in complex cases.
                    </p>
                </section>

                {/* CAUSES */}
                <section className={styles.section} id="causes">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>What drives it</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        What Causes Sperm DNA Fragmentation?
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        In our clinical experience, several factors can contribute to increased sperm
                        DNA fragmentation:
                    </p>

                    <div className={styles.symptomGrid}>
                        {CAUSES.map((s, i) => (
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
                            These factors not only damage DNA but also reduce overall sperm quality,
                            even if basic test results appear normal.
                        </p>
                    </div>
                </section>

                {/* IVF SUCCESS */}
                <section className={`${styles.section} ${styles.diagnosis}`} id="ivf">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Impact on treatment</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Does SDF Affect IVF Success?
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        One of the most important concerns for couples undergoing treatment is:{' '}
                        <strong>Does SDF affect IVF success?</strong>
                    </p>
                    <p className={`${styles.lead} ${styles.reveal}`} data-reveal>
                        The answer is yes.
                    </p>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        High levels of sperm DNA fragmentation can lead to:
                    </p>

                    <div className={styles.symptomGrid}>
                        {IVF_EFFECTS.map((s, i) => (
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

                    <div className={`${styles.calloutWarn} ${styles.reveal}`} data-reveal>
                        <FaExclamationTriangle aria-hidden="true" />
                        <p>
                            Even when advanced procedures like ICSI are used, sperm DNA health still
                            plays a critical role in outcomes.
                        </p>
                    </div>
                </section>

                {/* TUNEL ASSAY */}
                <section className={styles.section} id="tunel">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>How it is measured</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        TUNEL Assay: A More Accurate Way to Assess Sperm DNA
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        At{' '}
                        <a href="https://www.drdangslab.com/" className={styles.inlineLink}>
                            Dr. Dangs Lab
                        </a>
                        , we use the TUNEL assay, a scientifically validated method to detect DNA
                        damage in sperm.
                    </p>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        Unlike indirect tests, the TUNEL assay directly identifies DNA strand breaks,
                        making it a reliable tool for advanced semen analysis.
                    </p>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        <strong>Why this matters:</strong>
                    </p>
                    <div className={styles.treatmentList}>
                        {TUNEL_BENEFITS.map((t, i) => (
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
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        This level of detail makes a real difference in how fertility treatments are
                        planned.
                    </p>
                </section>

                {/* WHO SHOULD CONSIDER */}
                <section className={styles.section} id="who">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Right for you?</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Who Should Consider SDF Testing?
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        SDF testing is especially helpful in situations where answers are not clear.
                    </p>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        You may benefit from this test if you:
                    </p>

                    <div className={styles.symptomGrid}>
                        {WHO_SHOULD.map((item, i) => (
                            <div
                                key={item}
                                className={`${styles.symptomChip} ${styles.reveal}`}
                                data-reveal
                                style={{ animationDelay: `${i * 50}ms` }}
                            >
                                <FaCheckCircle aria-hidden="true" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className={`${styles.calloutSoft} ${styles.reveal}`} data-reveal>
                        <FaInfoCircle aria-hidden="true" />
                        <p>
                            In many such cases, SDF testing provides the missing insights needed for
                            the next step.
                        </p>
                    </div>
                </section>

                {/* HOW TO REDUCE */}
                <section className={styles.section} id="reduce">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Your action plan</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        How to Reduce DNA Fragmentation in Sperm
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        A very common and practical question is:{' '}
                        <strong>how to reduce DNA fragmentation in sperm?</strong>
                    </p>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        The encouraging part is that SDF levels can often be improved with the right
                        approach.
                    </p>
                    <div className={styles.timeline}>
                        {REDUCE.map((p, i) => (
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
                                    <ul style={{ margin: '8px 0 6px', paddingLeft: '1.2rem' }}>
                                        {p.items.map((it) => (
                                            <li key={it} style={{ marginBottom: '4px' }}>{it}</li>
                                        ))}
                                    </ul>
                                    <p>{p.note}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* WHY DR DANGS LAB */}
                <section className={styles.section} id="why-ddl">
                    <span className={`${styles.kicker} ${styles.reveal}`} data-reveal>Why Dr. Dangs Lab</span>
                    <h2 className={`${styles.sectionTitle} ${styles.reveal}`} data-reveal>
                        Why Choose Dr. Dangs Lab for Advanced Semen Analysis?
                    </h2>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        When it comes to fertility testing, trust and accuracy are critical.
                    </p>
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        At Dr. Dangs Lab, we bring together:
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
                    <p className={`${styles.body} ${styles.reveal}`} data-reveal>
                        We understand that every test result impacts an important life decision.
                        That&apos;s why we ensure every report is accurate, clear, and clinically
                        meaningful.
                    </p>
                </section>

                {/* BOOK BANNER */}
                <section className={`${styles.earlyBanner} ${styles.reveal}`} data-reveal>
                    <span className={styles.bannerSheen} aria-hidden="true" />
                    <div className={styles.earlyText}>
                        <h2>Book Your SDF Test in Delhi</h2>
                        <p>
                            If you&apos;ve been trying to conceive and still don&apos;t have answers,
                            it may be time to go beyond basic testing. At Dr. Dangs Lab, we offer:
                        </p>
                        <ul style={{ margin: '8px 0 0', paddingLeft: '1.4rem' }}>
                            {BOOK_OFFERS.map((o) => (
                                <li key={o}>{o}</li>
                            ))}
                        </ul>
                    </div>
                    <Link
                        href="/HomeCollection?package=Sperm%20DNA%20Fragmentation%20Test%20(SDF)"
                        className={styles.ctaWhite}
                    >
                        <FaCalendarCheck aria-hidden="true" /> Book your test today
                    </Link>
                </section>

                {/* TEST CARD */}
                <section className={`${styles.testCard} ${styles.reveal}`} data-reveal>
                    <div className={styles.testCardBody}>
                        <span className={styles.testCardTag}>Test details</span>
                        <h3>Sperm DNA Fragmentation (SDF) · TUNEL Assay</h3>
                        <ul className={styles.testCardMeta}>
                            <li><FaFlask aria-hidden="true" /> Advanced Semen Analysis (TUNEL assay)</li>
                            <li><FaMapMarkerAlt aria-hidden="true" /> Home collection or lab, Delhi NCR</li>
                            <li>
                                <FaFileAlt aria-hidden="true" />
                                <a
                                    href={SAMPLE_REPORT_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.inlineLink}
                                >
                                    View sample report
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.testCardActions}>
                        <Link
                            href="/HomeCollection?package=Sperm%20DNA%20Fragmentation%20Test%20(SDF)"
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
                        FAQs Around Sperm DNA Fragmentation Test
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

export default SDF;
