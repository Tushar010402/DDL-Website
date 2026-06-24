"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaHeartbeat,
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
  FaBrain,
  FaBatteryQuarter,
  FaSmile,
  FaCloud,
  FaBed,
  FaUserMd,
  FaFlask,
  FaSun,
  FaMoon,
  FaCoffee,
  FaSmokingBan,
  FaTooth,
  FaPills,
  FaMobile,
  FaSyncAlt,
  FaSnowflake,
  FaThermometerHalf,
  FaCalendarCheck,
  FaFileAlt,
  FaMinus,
  FaPlus,
  FaClock,
  FaRunning,
  FaUserShield,
  FaDumbbell,
  FaTint,
  FaStopwatch,
  FaBalanceScale,
  FaCertificate,
  FaLeaf,
  FaUtensils,
} from "react-icons/fa";

const PACKAGES = [
  {
    Icon: FaSun,
    tag: "Basic",
    title: "Cortisol Awakening Response (CAR) Panel",
    desc: "A focused 3-point cortisol assessment performed shortly after waking to evaluate the body's immediate cortisol surge and adrenal responsiveness.",
    points: [
      "3-point morning panel",
      "0 / 30 / 60 minutes after waking",
      "Adrenal responsiveness",
    ],
  },
  {
    Icon: FaClock,
    tag: "Advanced",
    title: "Diurnal Cortisol Panel",
    desc: "A comprehensive 4-point cortisol profile collected at different times throughout the day to assess the natural daily cortisol rhythm and identify patterns of adrenal imbalance.",
    points: [
      "4-point full-day panel",
      "Morning · Afternoon · Evening · Late Night",
      "Daily rhythm + adrenal balance",
    ],
  },
  {
    Icon: FaBalanceScale,
    tag: "Premium",
    title: "CAR + Diurnal Cortisol Panel",
    desc: "Our most detailed 6-point cortisol assessment combines both the Cortisol Awakening Response and full diurnal cortisol monitoring for an in-depth evaluation of stress physiology, adrenal function, energy regulation, and circadian rhythm patterns.",
    points: [
      "6-point comprehensive panel",
      "CAR + Diurnal combined",
      "Full stress + circadian profile",
    ],
  },
];

const CORTISOL_ROLES = [
  { Icon: FaShieldAlt, text: "Stress response" },
  { Icon: FaBed, text: "Sleep-wake cycle regulation" },
  { Icon: FaTint, text: "Blood sugar balance" },
  { Icon: FaDumbbell, text: "Energy production" },
  { Icon: FaShieldAlt, text: "Inflammation control" },
  { Icon: FaUserShield, text: "Immune system function" },
  { Icon: FaBrain, text: "Cognitive performance" },
];

const DISRUPTED_SYMPTOMS = [
  { Icon: FaBatteryQuarter, label: "Chronic fatigue" },
  { Icon: FaBed, label: "Sleep disturbances" },
  { Icon: FaSmile, label: "Anxiety or mood changes" },
  { Icon: FaExclamationTriangle, label: "Burnout" },
  { Icon: FaCloud, label: "Brain fog" },
  { Icon: FaBrain, label: "Poor concentration" },
  { Icon: FaBatteryQuarter, label: "Low energy" },
  { Icon: FaBalanceScale, label: "Weight fluctuations" },
  { Icon: FaShieldAlt, label: "Stress intolerance" },
];

const USEFUL_FOR = [
  "Circadian rhythm abnormalities",
  "Chronic stress patterns",
  "Adrenal function",
  "Sleep-related hormonal disturbances",
  "Stress recovery capacity",
  "Cortisol awakening response abnormalities",
];

const CAR_HEALTHY = [
  "Morning alertness",
  "Energy levels",
  "Cognitive performance",
  "Mental resilience",
  "Healthy circadian rhythm regulation",
];

const CAR_ABNORMAL = [
  "Chronic stress",
  "Burnout",
  "Fatigue syndromes",
  "Sleep disruption",
  "Mood disorders",
  "Irregular cortisol regulation",
];

const WHO_SHOULD = [
  {
    when: "Chronic Stress or Burnout",
    Icon: FaExclamationTriangle,
    items: [
      "Persistent stress can alter cortisol secretion patterns and affect physical as well as emotional health.",
    ],
  },
  {
    when: "Fatigue and Low Energy",
    Icon: FaBatteryQuarter,
    items: [
      "People who wake up tired or experience energy crashes during the day may benefit from evaluating cortisol rhythms.",
    ],
  },
  {
    when: "Sleep Problems",
    Icon: FaBed,
    items: [
      "Difficulty falling asleep, staying asleep, or waking unrefreshed can sometimes be linked to cortisol dysregulation.",
    ],
  },
  {
    when: "Mood and Cognitive Changes",
    Icon: FaBrain,
    items: [
      "Anxiety, irritability, poor concentration, and mental fatigue may be associated with abnormal cortisol patterns.",
    ],
  },
  {
    when: "Lifestyle and Performance Optimization",
    Icon: FaRunning,
    items: [
      "Athletes, professionals, and individuals focused on preventive health may use cortisol testing to understand stress adaptation and recovery.",
    ],
  },
];

const SAMPLE_TIMELINE = {
  columns: ["CAR", "Diurnal", "CAR + Diurnal"],
  rows: [
    ["0 Minutes", "Morning", "0 Minutes"],
    ["30 Minutes", "Afternoon", "30 Minutes"],
    ["60 Minutes", "Evening", "60 Minutes / Morning"],
    ["—", "Late Night", "Afternoon"],
    ["—", "—", "Evening"],
    ["—", "—", "Late Night"],
  ],
};

const COLLECTION_TIMELINE = [
  {
    Icon: FaSun,
    when: "Immediately Upon Waking (0 Minutes)",
    body: "Collected immediately after awakening, before getting out of bed or engaging in any activity.",
  },
  {
    Icon: FaStopwatch,
    when: "30 Minutes After Waking",
    body: "This sample evaluates the early cortisol rise after waking.",
  },
  {
    Icon: FaClock,
    when: "60 Minutes After Waking / Morning",
    body: "Collected within the morning window to complete the Cortisol Awakening Response assessment.",
  },
  {
    Icon: FaSun,
    when: "Afternoon Sample",
    body: "Helps assess daytime cortisol regulation.",
  },
  {
    Icon: FaCoffee,
    when: "Evening Sample",
    body: "Evaluates the gradual decline of cortisol later in the day.",
  },
  {
    Icon: FaMoon,
    when: "Night Sample",
    body: "Measures late-night cortisol levels when cortisol is expected to be lowest.",
  },
];

const PRE_TEST = [
  { Icon: FaUtensils, label: "No food intake" },
  { Icon: FaCoffee, label: "No caffeine" },
  { Icon: FaSmokingBan, label: "No smoking" },
  { Icon: FaTooth, label: "No brushing teeth" },
];

const MEDICATIONS = [
  "Steroid-containing medications",
  "Anxiety medications",
  "Antidepressants",
  "Blood pressure medications",
  "Sleep medications",
];

const COLLECTION_STEPS = [
  "Opening the collection tube",
  "Removing the Salivette® without touching it",
  "Placing the swab in the mouth for 60–120 seconds",
  "Returning the saturated swab into the tube",
  "Sealing the tube securely",
  "Labeling the sample with name, date, and collection time",
];

const ADVANTAGES = [
  {
    Icon: FaVial,
    title: "Non-Invasive",
    text: "No needles or blood draws are required.",
  },
  {
    Icon: FaClinicMedical,
    title: "Convenient Home Collection",
    text: "Samples can be collected comfortably in a home environment in Delhi NCR.",
  },
  {
    Icon: FaSyncAlt,
    title: "Better Circadian Assessment",
    text: "Multiple daily samples provide a clearer understanding of cortisol rhythm compared to a single cortisol measurement.",
  },
  {
    Icon: FaFlask,
    title: "Measures Free Cortisol",
    text: "Salivary testing reflects biologically active cortisol levels.",
  },
  {
    Icon: FaLeaf,
    title: "Useful for Functional and Preventive Health Evaluation",
    text: "Provides insight into stress adaptation and hormonal rhythm patterns.",
  },
];

const WHY_DDL = [
  { Icon: FaCertificate, text: "Structured time-based sampling" },
  { Icon: FaUserMd, text: "Detailed patient guidance" },
  { Icon: FaFlask, text: "Salivette® standardized collection devices" },
  { Icon: FaClock, text: "Emphasis on accurate circadian rhythm assessment" },
];

const FAQS = [
  {
    q: "Is Salivary Cortisol Testing better than Blood Cortisol Testing?",
    a: "Salivary cortisol testing offers the advantage of measuring free, biologically active cortisol levels and allows multiple collections throughout the day. This helps evaluate the natural cortisol rhythm and Cortisol Awakening Response (CAR), which cannot be assessed accurately with a single blood sample.",
  },
  {
    q: "Can I eat or drink before collecting my Saliva sample?",
    a: "No, it is recommended to avoid food, caffeine, smoking, and brushing teeth for at least 30 minutes before each saliva collection. Following these instructions carefully is important to avoid contamination and ensure accurate cortisol measurements.",
  },
  {
    q: "What symptoms may indicate the need for Salivary Cortisol Testing?",
    a: "Individuals experiencing chronic stress, fatigue, poor sleep, burnout, anxiety, mood fluctuations, low morning energy, brain fog, or irregular daily energy patterns may benefit from evaluating their cortisol rhythm through salivary cortisol testing.",
  },
];

const SalivaryCortisol = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-[#fdfbfb] text-[#1f1f1f] font-[Montserrat,'Roboto',sans-serif] overflow-x-clip">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden border-b border-[#f5d2d3] px-6 pt-[68px] pb-12 sm:pt-[78px] sm:pb-14 bg-gradient-to-b from-white to-[#fff5f5]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(118deg, transparent 50%, rgba(217,36,42,0.045) 74%, rgba(217,36,42,0.10) 100%), radial-gradient(130% 90% at 100% 0%, rgba(217,36,42,0.07), transparent 55%)",
          }}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(217,36,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(217,36,42,0.05) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(700px 360px at 70% 20%, #000, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(700px 360px at 70% 20%, #000, transparent 75%)",
          }}
        />

        <div className="relative z-10 mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.15fr]">
          <div className="min-w-0">
            <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#f5d2d3] bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-[2.5px] text-[#d9242a] shadow-[0_6px_18px_rgba(217,36,42,0.08)]">
              <span className="relative h-[7px] w-[7px] flex-shrink-0 rounded-full bg-[#d9242a]">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-full bg-[#d9242a]"
                  style={{ animation: "livePulse 1.8s ease-out infinite" }}
                />
              </span>
              <FaHeartbeat aria-hidden="true" className="text-[13px]" />
              Functional Medicine · Stress &amp; Hormones
            </span>
            <h1 className="mb-5 text-[clamp(28px,4.4vw,48px)] font-extrabold leading-[1.1] tracking-[-0.6px]">
              Salivary Cortisol Testing:{" "}
              <span className="whitespace-normal text-[#d9242a]">
                Understanding Your Body&rsquo;s Stress Rhythm
              </span>
            </h1>
            <p className="mb-4 max-w-[580px] text-[15px] leading-[1.75] text-[#5e5e5e]">
              Stress is more than just an emotional experience. It directly
              affects the body&apos;s hormonal balance, sleep cycle, energy levels,
              immunity, metabolism, and mental well-being. One of the most
              important hormones involved in the body&apos;s stress response is
              cortisol.
            </p>
            <p className="mb-4 max-w-[580px] text-[15px] leading-[1.75] text-[#5e5e5e]">
              Salivary cortisol testing in Delhi NCR is an advanced,
              non-invasive method used to evaluate how cortisol levels fluctuate
              throughout the day. Unlike a single blood cortisol measurement,
              salivary cortisol testing provides a more dynamic view of your
              body&apos;s natural circadian rhythm and stress response pattern.
            </p>
            <p className="mb-7 max-w-[580px] text-[15px] leading-[1.75] text-[#5e5e5e]">
              At{" "}
              <a
                href="https://www.drdangslab.com/"
                className="font-semibold text-[#d9242a] underline underline-offset-2 hover:text-[#b81e23]"
              >
                Dr. Dangs Lab
              </a>
              , we offer specialized salivary cortisol testing packages designed
              to evaluate your body&apos;s stress response and daily cortisol rhythm
              using the advanced{" "}
              <strong className="font-bold text-[#d9242a]">Salivette®</strong>{" "}
              saliva collection system.
            </p>

            <div className="mb-7 flex flex-wrap gap-2.5">
              {[
                "Non-invasive saliva test",
                "Salivette® collection",
                "6-point cortisol panel",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-[10px] border border-[#f0d8d9] bg-white px-3.5 py-2 text-[12.5px] font-semibold text-[#3a3a3a] shadow-[0_2px_8px_rgba(217,36,42,0.04)] transition hover:-translate-y-0.5 hover:border-[#d9242a]"
                >
                  <FaCheckCircle
                    aria-hidden="true"
                    className="text-[12px] text-[#d9242a]"
                  />
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3.5">
              <Link
                href="/HomeCollection"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-br from-[#d9242a] to-[#b81e23] px-7 py-[15px] text-[14.5px] font-bold text-white shadow-[0_14px_30px_rgba(217,36,42,0.34)] transition hover:-translate-y-1 hover:shadow-[0_20px_38px_rgba(217,36,42,0.46)]"
              >
                <FaVial aria-hidden="true" /> Book Cortisol Test
              </Link>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#f5d2d3] bg-white px-7 py-[15px] text-[14.5px] font-bold text-[#d9242a] transition hover:-translate-y-1 hover:border-[#d9242a] hover:bg-[#fff4f4]"
              >
                See packages <FaArrowDown aria-hidden="true" />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-[12.5px] font-semibold text-[#5e5e5e]">
              <span>40+ years of trust</span>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#f5d2d3]" />
              <span>NABL accredited</span>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#f5d2d3]" />
              <span>Salivette® collection</span>
            </div>
          </div>

          <div className="relative min-w-0">
            <div
              className="relative overflow-hidden rounded-[24px] border-[5px] border-white shadow-[0_30px_60px_rgba(217,36,42,0.18),0_6px_18px_rgba(0,0,0,0.08)]"
              style={{ aspectRatio: "16 / 9" }}
            >
              <Image
                src="/PhotosAndLogos/Salivary-Cortisol-Testing.webp"
                alt="Salivary Cortisol Testing — understanding your body's stress rhythm at Dr. Dangs Lab"
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover"
                priority
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, transparent 65%, rgba(217,36,42,0.06))",
                }}
              />
            </div>
          </div>
        </div>

        {/* Credentials bar */}
        <div className="relative z-10 mx-auto mt-12 flex max-w-[1140px] flex-wrap items-stretch gap-4 rounded-[20px] border border-[#f5d2d3] bg-white p-5 shadow-[0_18px_40px_rgba(217,36,42,0.08)] sm:gap-5 sm:p-6">
          <div className="flex flex-1 min-w-[220px] items-center gap-3.5">
            <span className="inline-flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-[12px] border border-[#f5d2d3] bg-gradient-to-br from-[#fff4f4] to-white text-[18px] text-[#d9242a]">
              <FaClinicMedical aria-hidden="true" />
            </span>
            <div className="flex flex-col">
              <strong className="text-[14px] font-bold leading-tight text-[#1f1f1f]">Home or lab collection</strong>
              <span className="mt-0.5 text-[12px] text-[#5e5e5e]">Same-day slots across NCR</span>
            </div>
          </div>
          <span aria-hidden="true" className="hidden h-[38px] w-px self-center bg-[#f5d2d3] sm:block" />
          <div className="flex flex-1 min-w-[220px] items-center gap-3.5">
            <span className="inline-flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-[12px] border border-[#f5d2d3] bg-gradient-to-br from-[#fff4f4] to-white text-[18px] text-[#d9242a]">
              <FaVials aria-hidden="true" />
            </span>
            <div className="flex flex-col">
              <strong className="text-[14px] font-bold leading-tight text-[#1f1f1f]">CAR · Diurnal · Combined</strong>
              <span className="mt-0.5 text-[12px] text-[#5e5e5e]">3 / 4 / 6 sample panels</span>
            </div>
          </div>
          <span aria-hidden="true" className="hidden h-[38px] w-px self-center bg-[#f5d2d3] sm:block" />
          <div className="flex flex-1 min-w-[220px] items-center gap-3.5">
            <span className="inline-flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-[12px] border border-[#f5d2d3] bg-gradient-to-br from-[#fff4f4] to-white text-[18px] text-[#d9242a]">
              <FaMapMarkerAlt aria-hidden="true" />
            </span>
            <div className="flex flex-col">
              <strong className="text-[14px] font-bold leading-tight text-[#1f1f1f]">Delhi · Gurugram · Noida</strong>
              <span className="mt-0.5 text-[12px] text-[#5e5e5e]">Trusted across the NCR</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTAINER ===== */}
      <div className="mx-auto max-w-[940px] px-5 pb-24 pt-6 sm:px-6">

        {/* PACKAGES */}
        <section id="packages" className="border-b border-[#f1ebeb] pb-3.5 pt-14 sm:pt-16">
          <span className="mb-2.5 inline-block text-[11.5px] font-extrabold uppercase tracking-[2.5px] text-[#d9242a]">Test packages</span>
          <h2 className="relative mb-5 pl-[18px] text-[clamp(24px,3.4vw,33px)] font-extrabold leading-[1.24] tracking-[-0.4px]">
            <span aria-hidden="true" className="absolute left-0 top-[5px] bottom-[5px] w-[5px] rounded-[3px] bg-gradient-to-b from-[#d9242a] to-[#b81e23]" />
            Choose The Right Cortisol Panel For You
          </h2>
          <p className="mb-4 text-[16.5px] leading-[1.82] text-[#3d3d3d]">
            At{" "}
            <a href="https://www.drdangslab.com/" className="font-semibold text-[#d9242a] underline underline-offset-2 hover:text-[#b81e23]">
              Dr. Dangs Lab
            </a>{" "}
            we offer three specialised salivary cortisol testing packages using the advanced{" "}
            <strong className="font-bold text-[#d9242a]">Salivette®</strong> saliva collection system.
          </p>

          <div className="mt-6 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {PACKAGES.map((p) => (
              <article key={p.title} className="group rounded-[18px] border border-[#f0eaea] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:border-[#f5d2d3] hover:shadow-[0_16px_32px_rgba(217,36,42,0.14)]">
                <span className="mb-3.5 inline-flex items-center gap-2.5 rounded-full bg-[#fff4f4] px-3.5 py-1.5 text-[12px] font-extrabold uppercase tracking-[0.6px] text-[#d9242a]">
                  <p.Icon aria-hidden="true" /> {p.tag}
                </span>
                <h3 className="mb-3 text-[17px] font-extrabold tracking-[-0.2px] text-[#1f1f1f] leading-snug">{p.title}</h3>
                <p className="mb-4 text-[13.5px] leading-[1.65] text-[#5e5e5e]">{p.desc}</p>
                <ul className="flex flex-col gap-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[13.5px] font-medium leading-[1.55] text-[#3f3f3f]">
                      <FaCheckCircle aria-hidden="true" className="mt-1 flex-shrink-0 text-[12px] text-[#d9242a]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* WHAT IS CORTISOL */}
        <section className="border-b border-[#f1ebeb] pb-3.5 pt-14 sm:pt-16">
          <span className="mb-2.5 inline-block text-[11.5px] font-extrabold uppercase tracking-[2.5px] text-[#d9242a]">The basics</span>
          <h2 className="relative mb-5 pl-[18px] text-[clamp(24px,3.4vw,33px)] font-extrabold leading-[1.24] tracking-[-0.4px]">
            <span aria-hidden="true" className="absolute left-0 top-[5px] bottom-[5px] w-[5px] rounded-[3px] bg-gradient-to-b from-[#d9242a] to-[#b81e23]" />
            What Is Cortisol?
          </h2>
          <p className="mb-4 text-[16.5px] leading-[1.82] text-[#3d3d3d]">
            Cortisol is a hormone produced by the{" "}
            <strong className="font-bold text-[#d9242a]">adrenal glands</strong>. It plays a vital role in:
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CORTISOL_ROLES.map((c) => (
              <div key={c.text} className="flex items-start gap-3.5 rounded-[16px] border border-[#f0eaea] bg-white p-5 shadow-[0_4px_14px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:border-[#f5d2d3] hover:shadow-[0_16px_32px_rgba(217,36,42,0.14)]">
                <span className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-[13px] border border-[#f5d2d3] bg-[#fff4f4] text-[18px] text-[#d9242a]">
                  <c.Icon aria-hidden="true" />
                </span>
                <p className="m-0 text-[14px] font-medium leading-[1.55] text-[#404040]">{c.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 mb-3 text-[15px] leading-[1.82] text-[#5e5e5e]">
            Normally, cortisol follows a predictable daily rhythm. It rises rapidly after waking up, known as the{" "}
            <strong className="font-bold text-[#d9242a]">Cortisol Awakening Response (CAR)</strong>, and gradually declines throughout the day, reaching its lowest levels at night.
          </p>
          <p className="mb-3 text-[15px] leading-[1.82] text-[#5e5e5e]">
            When this rhythm becomes disrupted, it may contribute to symptoms such as:
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {DISRUPTED_SYMPTOMS.map((s) => (
              <div key={s.label} className="inline-flex items-center gap-2.5 rounded-full border border-[#efe8e8] bg-white px-5 py-3 text-[14px] font-semibold text-[#333] shadow-[0_3px_10px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:border-[#d9242a] hover:bg-[#fff4f4]">
                <s.Icon aria-hidden="true" className="text-[14px] text-[#d9242a]" />
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT IS THE TEST */}
        <section className="border-b border-[#f1ebeb] pb-3.5 pt-14 sm:pt-16">
          <span className="mb-2.5 inline-block text-[11.5px] font-extrabold uppercase tracking-[2.5px] text-[#d9242a]">The test</span>
          <h2 className="relative mb-5 pl-[18px] text-[clamp(24px,3.4vw,33px)] font-extrabold leading-[1.24] tracking-[-0.4px]">
            <span aria-hidden="true" className="absolute left-0 top-[5px] bottom-[5px] w-[5px] rounded-[3px] bg-gradient-to-b from-[#d9242a] to-[#b81e23]" />
            What Is Salivary Cortisol Testing?
          </h2>
          <p className="mb-4 text-[16.5px] leading-[1.82] text-[#3d3d3d]">
            Salivary cortisol testing measures{" "}
            <strong className="font-bold text-[#d9242a]">free cortisol levels</strong> in saliva collected at specific intervals throughout the day. Unlike blood cortisol testing, which reflects total cortisol, salivary testing evaluates{" "}
            <strong className="font-bold text-[#d9242a]">biologically active cortisol</strong> — the fraction available for use by the body.
          </p>
          <p className="mb-4 text-[15px] leading-[1.82] text-[#5e5e5e]">
            This makes salivary cortisol assessment especially useful for evaluating:
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {USEFUL_FOR.map((u) => (
              <span key={u} className="inline-flex items-center gap-2.5 rounded-full border border-[#efe8e8] bg-white px-5 py-3 text-[14px] font-semibold text-[#333] shadow-[0_3px_10px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:border-[#d9242a] hover:bg-[#fff4f4]">
                <FaCheckCircle aria-hidden="true" className="text-[12px] text-[#d9242a]" />
                {u}
              </span>
            ))}
          </div>

          <p className="mt-6 text-[15px] leading-[1.82] text-[#5e5e5e]">
            The test is completely non-invasive and can be performed conveniently from home using{" "}
            <strong className="font-bold text-[#d9242a]">Salivette®</strong> collection devices.
          </p>
        </section>

        {/* CAR */}
        <section className="border-b border-[#f1ebeb] pb-3.5 pt-14 sm:pt-16">
          <span className="mb-2.5 inline-block text-[11.5px] font-extrabold uppercase tracking-[2.5px] text-[#d9242a]">Morning surge</span>
          <h2 className="relative mb-5 pl-[18px] text-[clamp(24px,3.4vw,33px)] font-extrabold leading-[1.24] tracking-[-0.4px]">
            <span aria-hidden="true" className="absolute left-0 top-[5px] bottom-[5px] w-[5px] rounded-[3px] bg-gradient-to-b from-[#d9242a] to-[#b81e23]" />
            What Is The Cortisol Awakening Response (CAR)?
          </h2>
          <p className="mb-4 text-[16.5px] leading-[1.82] text-[#3d3d3d]">
            The Cortisol Awakening Response refers to the natural surge in cortisol that occurs within the first{" "}
            <strong className="font-bold text-[#d9242a]">30–60 minutes after waking</strong>.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[18px] border border-[#f0eaea] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
              <span className="mb-4 inline-flex items-center gap-2.5 rounded-[10px] bg-[#fff4f4] px-3.5 py-2 text-[13px] font-bold text-[#d9242a]">
                <FaSun aria-hidden="true" /> A healthy CAR is essential for
              </span>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {CAR_HEALTHY.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-[13.5px] leading-[1.6] text-[#5e5e5e]">
                    <FaCheckCircle aria-hidden="true" className="mt-1 flex-shrink-0 text-[13px] text-[#d9242a]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[18px] border border-[#f0eaea] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
              <span className="mb-4 inline-flex items-center gap-2.5 rounded-[10px] bg-[#fff4f4] px-3.5 py-2 text-[13px] font-bold text-[#d9242a]">
                <FaExclamationTriangle aria-hidden="true" /> An abnormal CAR may be associated with
              </span>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {CAR_ABNORMAL.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-[13.5px] leading-[1.6] text-[#5e5e5e]">
                    <FaTimesCircle aria-hidden="true" className="mt-1 flex-shrink-0 text-[13px] text-[#d9242a]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 text-[15px] leading-[1.82] text-[#5e5e5e]">
            Our Salivary Cortisol Panel helps evaluate whether your cortisol pattern follows a healthy rhythm throughout the day.
          </p>
        </section>

        {/* WHO SHOULD CONSIDER */}
        <section className="border-b border-[#f1ebeb] pb-3.5 pt-14 sm:pt-16">
          <span className="mb-2.5 inline-block text-[11.5px] font-extrabold uppercase tracking-[2.5px] text-[#d9242a]">Right for you?</span>
          <h2 className="relative mb-5 pl-[18px] text-[clamp(24px,3.4vw,33px)] font-extrabold leading-[1.24] tracking-[-0.4px]">
            <span aria-hidden="true" className="absolute left-0 top-[5px] bottom-[5px] w-[5px] rounded-[3px] bg-gradient-to-b from-[#d9242a] to-[#b81e23]" />
            Who Should Consider Salivary Cortisol Testing?
          </h2>
          <p className="mb-4 text-[15px] leading-[1.82] text-[#5e5e5e]">
            This test may be beneficial for individuals experiencing:
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {WHO_SHOULD.map((p) => (
              <div key={p.when} className="rounded-[18px] border border-[#f0eaea] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(217,36,42,0.14)]">
                <span className="mb-4 inline-flex items-center gap-2.5 rounded-[10px] bg-[#fff4f4] px-3.5 py-2 text-[13px] font-bold text-[#d9242a]">
                  <p.Icon aria-hidden="true" />
                  {p.when}
                </span>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-[13.5px] leading-[1.6] text-[#5e5e5e]">
                      <FaTimesCircle aria-hidden="true" className="mt-0.5 flex-shrink-0 text-[13px] text-[#d9242a]" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* COLLECTION TIMELINE */}
        <section className="border-b border-[#f1ebeb] pb-3.5 pt-14 sm:pt-16">
          <span className="mb-2.5 inline-block text-[11.5px] font-extrabold uppercase tracking-[2.5px] text-[#d9242a]">Step-by-step</span>
          <h2 className="relative mb-5 pl-[18px] text-[clamp(24px,3.4vw,33px)] font-extrabold leading-[1.24] tracking-[-0.4px]">
            <span aria-hidden="true" className="absolute left-0 top-[5px] bottom-[5px] w-[5px] rounded-[3px] bg-gradient-to-b from-[#d9242a] to-[#b81e23]" />
            How Is The Test Performed?
          </h2>
          <p className="mb-4 text-[15px] leading-[1.82] text-[#5e5e5e]">
            The panel involves collecting a total of six saliva samples at different times during the day. Accurate timing is extremely important for meaningful interpretation of the results.
          </p>

          {/* SAMPLE COLLECTION TIMELINE TABLE */}
          <h3 className="mt-8 mb-4 text-[18px] font-extrabold tracking-[-0.2px] text-[#1f1f1f]">
            Sample Collection Timeline
          </h3>
          <div className="overflow-x-auto rounded-[16px] border border-[#f0eaea] shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
            <table className="w-full min-w-[460px] border-collapse text-left">
              <thead>
                <tr>
                  {SAMPLE_TIMELINE.columns.map((col) => (
                    <th
                      key={col}
                      className="bg-gradient-to-br from-[#d9242a] to-[#b81e23] px-5 py-3.5 text-[13.5px] font-bold uppercase tracking-[0.6px] text-white"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SAMPLE_TIMELINE.rows.map((row, ri) => (
                  <tr
                    key={ri}
                    className={ri % 2 === 0 ? "bg-white" : "bg-[#fff8f8]"}
                  >
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`border-t border-[#f0eaea] px-5 py-3.5 text-[14px] leading-[1.5] ${
                          cell === "—"
                            ? "text-[#c4bcbc]"
                            : "font-medium text-[#3f3f3f]"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="relative mt-8 pl-1.5">
            <span aria-hidden="true" className="absolute bottom-2.5 left-[22px] top-2.5 w-[2px] bg-gradient-to-b from-[#d9242a] to-[rgba(217,36,42,0.25)]" />
            {COLLECTION_TIMELINE.map((p, i) => (
              <div key={p.when} className="relative mb-5 flex gap-5 last:mb-0">
                <div className="relative z-10 flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full border-2 border-[#d9242a] bg-white text-[16px] text-[#d9242a] shadow-[0_0_0_6px_rgba(217,36,42,0.08)]">
                  <p.Icon aria-hidden="true" />
                </div>
                <div className="flex-1 rounded-[16px] border border-[#f0eaea] bg-white p-5 shadow-[0_4px_14px_rgba(0,0,0,0.04)] transition hover:shadow-[0_14px_30px_rgba(217,36,42,0.12)]">
                  <span className="mb-3 inline-block rounded-full bg-gradient-to-br from-[#d9242a] to-[#b81e23] px-3.5 py-1 text-[12px] font-bold uppercase tracking-[0.5px] text-white">
                    {i + 1}. {p.when}
                  </span>
                  <p className="m-0 text-[14px] leading-[1.72] text-[#5e5e5e]">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRE-TEST */}
        <section className="border-b border-[#f1ebeb] pb-3.5 pt-14 sm:pt-16">
          <span className="mb-2.5 inline-block text-[11.5px] font-extrabold uppercase tracking-[2.5px] text-[#d9242a]">Before each sample</span>
          <h2 className="relative mb-5 pl-[18px] text-[clamp(24px,3.4vw,33px)] font-extrabold leading-[1.24] tracking-[-0.4px]">
            <span aria-hidden="true" className="absolute left-0 top-[5px] bottom-[5px] w-[5px] rounded-[3px] bg-gradient-to-b from-[#d9242a] to-[#b81e23]" />
            Important Pre-Test Instructions
          </h2>
          <p className="mb-2 text-[15px] leading-[1.82] text-[#5e5e5e]">
            To ensure reliable and accurate results, certain precautions must be followed before and during saliva collection.
          </p>

          {/* Before Each Sample */}
          <h3 className="mt-7 mb-3 text-[18px] font-extrabold tracking-[-0.2px] text-[#1f1f1f]">
            Before Each Sample
          </h3>
          <p className="mb-4 text-[15px] leading-[1.82] text-[#5e5e5e]">
            Patients are advised to avoid:
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {PRE_TEST.map((p) => (
              <div key={p.label} className="flex flex-col items-center gap-2.5 rounded-[14px] border border-[#f5d2d3] bg-[#fff4f4] p-5 text-center">
                <span className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-white text-[20px] text-[#d9242a]">
                  <p.Icon aria-hidden="true" />
                </span>
                <span className="text-[13px] font-semibold text-[#7a3438]">{p.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[15px] leading-[1.82] text-[#5e5e5e]">
            for at least <strong className="font-bold text-[#d9242a]">30 minutes</strong> before each saliva sample collection.
          </p>

          {/* Sleep Recommendations */}
          <h3 className="mt-7 mb-3 text-[18px] font-extrabold tracking-[-0.2px] text-[#1f1f1f]">
            Sleep Recommendations
          </h3>
          <div className="flex items-start gap-3 rounded-[14px] bg-[#fff4f4] p-4 sm:p-5">
            <FaBed aria-hidden="true" className="mt-0.5 flex-shrink-0 text-[18px] text-[#d9242a]" />
            <p className="m-0 text-[13.5px] leading-[1.65] text-[#7a3438]">
              Maintaining a normal sleep schedule is important. The guide recommends sleeping between{" "}
              <strong className="font-bold">10 PM and 12 AM</strong> and ensuring 7–9 hours of uninterrupted sleep before testing.
            </p>
          </div>

          {/* Reduce Stressful Activity */}
          <h3 className="mt-7 mb-3 text-[18px] font-extrabold tracking-[-0.2px] text-[#1f1f1f]">
            Reduce Stressful Activity
          </h3>
          <div className="flex items-start gap-3 rounded-[14px] bg-[#fff4f4] p-4 sm:p-5">
            <FaMobile aria-hidden="true" className="mt-0.5 flex-shrink-0 text-[18px] text-[#d9242a]" />
            <p className="m-0 text-[13.5px] leading-[1.65] text-[#7a3438]">
              Stressful calls, emails, screen activity, or emotionally stimulating situations should ideally be avoided before sample collection, especially during the first three morning samples.
            </p>
          </div>

          {/* Medication Considerations */}
          <h3 className="mt-7 mb-3 text-[18px] font-extrabold tracking-[-0.2px] text-[#1f1f1f]">
            Medication Considerations
          </h3>
          <p className="mb-2 text-[15px] leading-[1.82] text-[#5e5e5e]">
            Certain medications may interfere with cortisol measurements.
          </p>
          <p className="mb-4 text-[15px] leading-[1.82] text-[#5e5e5e]">
            Patients should inform their physician if they are taking:
          </p>

          <div className="rounded-[16px] border border-[#f5d2d3] bg-gradient-to-br from-[#fff4f4] to-white p-5">
            <ul className="m-0 grid list-none gap-2 p-0 sm:grid-cols-2">
              {MEDICATIONS.map((m) => (
                <li key={m} className="flex items-start gap-2.5 text-[13.5px] leading-[1.55] text-[#7a3438]">
                  <FaTimesCircle aria-hidden="true" className="mt-1 flex-shrink-0 text-[12px] text-[#d9242a]" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-[15px] leading-[1.82] text-[#5e5e5e]">
            The treating doctor can determine whether testing should proceed or be rescheduled.
          </p>
        </section>

        {/* COLLECTION PROCESS */}
        <section className="border-b border-[#f1ebeb] pb-3.5 pt-14 sm:pt-16">
          <span className="mb-2.5 inline-block text-[11.5px] font-extrabold uppercase tracking-[2.5px] text-[#d9242a]">Salivette® process</span>
          <h2 className="relative mb-5 pl-[18px] text-[clamp(24px,3.4vw,33px)] font-extrabold leading-[1.24] tracking-[-0.4px]">
            <span aria-hidden="true" className="absolute left-0 top-[5px] bottom-[5px] w-[5px] rounded-[3px] bg-gradient-to-b from-[#d9242a] to-[#b81e23]" />
            Salivette&reg; Collection Process
          </h2>
          <p className="mb-4 text-[15px] leading-[1.82] text-[#5e5e5e]">
            The test uses the Salivette® collection device for hygienic and standardized saliva sampling.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            {COLLECTION_STEPS.map((t, i) => (
              <div key={t} className="flex items-center gap-5 rounded-[14px] border border-[#f0eaea] bg-white p-4 px-5 shadow-[0_3px_12px_rgba(0,0,0,0.03)] transition hover:translate-x-2 hover:border-[#f5d2d3] hover:shadow-[0_12px_26px_rgba(217,36,42,0.12)]">
                <span className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full border-2 border-[#d9242a] bg-white text-[15px] font-extrabold text-[#d9242a]">
                  {i + 1}
                </span>
                <p className="m-0 text-[14.5px] font-medium text-[#3f3f3f]">{t}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[14.5px] leading-[1.78] text-[#5e5e5e]">
            Proper handling helps maintain sample integrity and prevents contamination.
          </p>
        </section>

        {/* STORAGE */}
        <section className="border-b border-[#f1ebeb] pb-3.5 pt-14 sm:pt-16">
          <span className="mb-2.5 inline-block text-[11.5px] font-extrabold uppercase tracking-[2.5px] text-[#d9242a]">Sample handling</span>
          <h2 className="relative mb-5 pl-[18px] text-[clamp(24px,3.4vw,33px)] font-extrabold leading-[1.24] tracking-[-0.4px]">
            <span aria-hidden="true" className="absolute left-0 top-[5px] bottom-[5px] w-[5px] rounded-[3px] bg-gradient-to-b from-[#d9242a] to-[#b81e23]" />
            Sample Storage &amp; Stability
          </h2>
          <p className="mb-4 text-[15px] leading-[1.82] text-[#5e5e5e]">
            After collection, the salivary samples need to be refrigerated.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[18px] border border-[#f0eaea] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
              <span className="mb-3 inline-flex h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[#fff4f4] text-[20px] text-[#d9242a]">
                <FaThermometerHalf aria-hidden="true" />
              </span>
              <h3 className="m-0 mb-2 text-[16px] font-bold text-[#1f1f1f]">Refrigerated (2–8°C)</h3>
              <p className="m-0 text-[13.5px] leading-[1.65] text-[#5e5e5e]">
                Stable for up to <strong className="font-bold">4 days</strong>.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#f0eaea] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
              <span className="mb-3 inline-flex h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[#fff4f4] text-[20px] text-[#d9242a]">
                <FaSnowflake aria-hidden="true" />
              </span>
              <h3 className="m-0 mb-2 text-[16px] font-bold text-[#1f1f1f]">Frozen Storage</h3>
              <p className="m-0 text-[13.5px] leading-[1.65] text-[#5e5e5e]">
                Only if specifically instructed by the laboratory.
              </p>
            </div>
          </div>
        </section>

        {/* ADVANTAGES */}
        <section className="border-b border-[#f1ebeb] pb-3.5 pt-14 sm:pt-16">
          <span className="mb-2.5 inline-block text-[11.5px] font-extrabold uppercase tracking-[2.5px] text-[#d9242a]">Why this test</span>
          <h2 className="relative mb-5 pl-[18px] text-[clamp(24px,3.4vw,33px)] font-extrabold leading-[1.24] tracking-[-0.4px]">
            <span aria-hidden="true" className="absolute left-0 top-[5px] bottom-[5px] w-[5px] rounded-[3px] bg-gradient-to-b from-[#d9242a] to-[#b81e23]" />
            Advantages Of Salivary Cortisol Testing
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((a) => (
              <div key={a.title} className="rounded-[18px] border border-[#f0eaea] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(217,36,42,0.14)]">
                <span className="mb-3 inline-flex h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-gradient-to-br from-[#d9242a] to-[#b81e23] text-[20px] text-white shadow-[0_12px_22px_rgba(217,36,42,0.28)]">
                  <a.Icon aria-hidden="true" />
                </span>
                <h3 className="m-0 mb-2 text-[16px] font-bold text-[#1f1f1f]">{a.title}</h3>
                <p className="m-0 text-[13.5px] leading-[1.65] text-[#5e5e5e]">{a.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY DDL */}
        <section className="border-b border-[#f1ebeb] pb-3.5 pt-14 sm:pt-16">
          <span className="mb-2.5 inline-block text-[11.5px] font-extrabold uppercase tracking-[2.5px] text-[#d9242a]">Why Dr. Dangs Lab</span>
          <h2 className="relative mb-5 pl-[18px] text-[clamp(24px,3.4vw,33px)] font-extrabold leading-[1.24] tracking-[-0.4px]">
            <span aria-hidden="true" className="absolute left-0 top-[5px] bottom-[5px] w-[5px] rounded-[3px] bg-gradient-to-b from-[#d9242a] to-[#b81e23]" />
            Why Choose Dr. Dangs Lab for Salivary Cortisol Testing?
          </h2>
          <p className="mb-4 text-[15px] leading-[1.82] text-[#5e5e5e]">
            Dr. Dangs Lab combines advanced diagnostic expertise with standardized collection protocols to ensure reliable cortisol analysis.
          </p>
          <p className="mb-4 text-[15px] leading-[1.82] text-[#5e5e5e]">
            Our Salivary Cortisol Panel is designed with:
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {WHY_DDL.map((w) => (
              <div key={w.text} className="flex items-start gap-3 rounded-[14px] border border-[#f5d2d3] bg-[#fff4f4] p-5">
                <w.Icon aria-hidden="true" className="mt-0.5 flex-shrink-0 text-[18px] text-[#d9242a]" />
                <p className="m-0 text-[13.5px] leading-[1.6] text-[#7a3438]">{w.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[15px] leading-[1.82] text-[#5e5e5e]">
            The test is particularly useful for individuals seeking deeper insight into stress physiology, energy regulation, sleep health, and hormonal balance.
          </p>
        </section>

        {/* BANNER */}
        <section className="relative mx-auto my-14 overflow-hidden rounded-[24px] bg-gradient-to-br from-[#d9242a] to-[#b81e23] p-8 text-white shadow-[0_24px_50px_rgba(217,36,42,0.32)] sm:p-12">
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-0" style={{ background: "linear-gradient(120deg, rgba(255,255,255,0.16) 0%, transparent 42%), linear-gradient(300deg, rgba(255,255,255,0.07) 0%, transparent 38%)" }} />
          <div className="relative flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
            <div className="max-w-[640px]">
              <h2 className="m-0 mb-2.5 text-[clamp(22px,3vw,28px)] font-extrabold tracking-[-0.4px]">
                Understand Your Stress, Scientifically.
              </h2>
              <p className="m-0 text-[14.5px] leading-[1.72] text-white/90">
                Skip the guesswork. A salivary cortisol panel from Dr. Dangs Lab gives you a clear, time-mapped picture of your stress physiology — so you can act on the right thing.
              </p>
            </div>
            <Link href="/HomeCollection" className="relative z-10 inline-flex flex-shrink-0 items-center gap-2.5 rounded-full bg-white px-7 py-[15px] text-[14.5px] font-bold text-[#d9242a] shadow-[0_14px_30px_rgba(0,0,0,0.16)] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.24)]">
              <FaCalendarCheck aria-hidden="true" /> Book your test
            </Link>
          </div>
        </section>

        {/* CONCLUSION */}
        <section className="border-b border-[#f1ebeb] pb-3.5 pt-14 sm:pt-16">
          <h2 className="relative mb-5 pl-[18px] text-[clamp(24px,3.4vw,33px)] font-extrabold leading-[1.24] tracking-[-0.4px]">
            <span aria-hidden="true" className="absolute left-0 top-[5px] bottom-[5px] w-[5px] rounded-[3px] bg-gradient-to-b from-[#d9242a] to-[#b81e23]" />
            Summary
          </h2>
          <p className="mb-4 text-[15px] leading-[1.82] text-[#5e5e5e]">
            Stress affects every system in the body, but its effects are not always visible through routine testing. Salivary cortisol testing offers a deeper understanding of how your body responds to stress throughout the day.
          </p>
          <p className="mb-4 text-[15px] leading-[1.82] text-[#5e5e5e]">
            By evaluating the Cortisol Awakening Response and daily cortisol rhythm, clinicians can gain valuable insights into circadian balance, adrenal function, and stress adaptation patterns.
          </p>
          <p className="text-[15px] leading-[1.82] text-[#5e5e5e]">
            If you are struggling with fatigue, sleep issues, chronic stress, or burnout-related symptoms, salivary cortisol testing in Delhi NCR at Dr. Dangs Lab may help provide meaningful direction for further evaluation and personalized care.
          </p>
        </section>

        {/* TEST SUMMARY CARD */}
        <section className="relative my-12 flex flex-col gap-8 overflow-hidden rounded-[24px] border border-[#f5d2d3] bg-white p-8 shadow-[0_20px_44px_rgba(217,36,42,0.12)] sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <span aria-hidden="true" className="absolute left-0 top-0 h-full w-[6px] bg-gradient-to-b from-[#d9242a] to-[#b81e23]" />
          <div className="relative">
            <span className="mb-2.5 inline-block text-[11px] font-extrabold uppercase tracking-[2px] text-[#d9242a]">Test details</span>
            <h3 className="m-0 mb-4 text-[22px] font-extrabold text-[#1f1f1f]">Salivary Cortisol Panel</h3>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              <li className="flex items-center gap-3 text-[14px] font-medium text-[#555]">
                <FaFlask aria-hidden="true" className="w-[18px] flex-shrink-0 text-[#d9242a]" />
                Salivette® saliva collection
              </li>
              <li className="flex items-center gap-3 text-[14px] font-medium text-[#555]">
                <FaMapMarkerAlt aria-hidden="true" className="w-[18px] flex-shrink-0 text-[#d9242a]" />
                Home collection or SDA, New Delhi lab
              </li>
              <li className="flex items-center gap-3 text-[14px] font-medium text-[#555]">
                <FaFileAlt aria-hidden="true" className="w-[18px] flex-shrink-0 text-[#d9242a]" />
                Sample report: available on request
              </li>
            </ul>
          </div>
          <div className="relative flex flex-col gap-3">
            <Link href="/HomeCollection" className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-br from-[#d9242a] to-[#b81e23] px-7 py-[15px] text-[14.5px] font-bold text-white shadow-[0_14px_30px_rgba(217,36,42,0.34)] transition hover:-translate-y-1 hover:shadow-[0_20px_38px_rgba(217,36,42,0.46)]">
              <FaVial aria-hidden="true" /> Book this test
            </Link>
            <Link href="/Feedback" className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-[#f5d2d3] bg-white px-7 py-[15px] text-[14.5px] font-bold text-[#d9242a] transition hover:-translate-y-1 hover:border-[#d9242a] hover:bg-[#fff4f4]">
              Talk to us
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="pt-14 sm:pt-16" id="faq">
          <span className="mb-2.5 inline-block text-[11.5px] font-extrabold uppercase tracking-[2.5px] text-[#d9242a]">Common questions</span>
          <h2 className="relative mb-5 pl-[18px] text-[clamp(24px,3.4vw,33px)] font-extrabold leading-[1.24] tracking-[-0.4px]">
            <span aria-hidden="true" className="absolute left-0 top-[5px] bottom-[5px] w-[5px] rounded-[3px] bg-gradient-to-b from-[#d9242a] to-[#b81e23]" />
            FAQs Around Cortisol Testing
          </h2>

          <div className="mt-6 flex flex-col gap-3">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className={`overflow-hidden rounded-[16px] border bg-white transition ${open ? "border-[#f5d2d3] shadow-[0_14px_30px_rgba(217,36,42,0.10)]" : "border-[#ece6e6]"}`}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 bg-transparent px-6 py-5 text-left text-[15.5px] font-bold text-[#1f1f1f] transition hover:text-[#d9242a]"
                  >
                    <h3 className="m-0">{f.q}</h3>
                    <span aria-hidden="true" className={`flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full text-[#d9242a] transition ${open ? "rotate-180 bg-gradient-to-br from-[#d9242a] to-[#b81e23] text-white" : "bg-[#fff4f4]"}`}>
                      {open ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>
                  <div className="grid transition-[grid-template-rows] duration-300" style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <p className="m-0 px-6 pb-6 text-[14.5px] leading-[1.82] text-[#5e5e5e]">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <style>{`
        @keyframes livePulse {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(3.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default SalivaryCortisol;
