import SalivaryCortisol from '@/app/Components/salivary-cortisol-testing-delhi/SalivaryCortisol';

const PAGE_URL = 'https://www.drdangslab.com/salivary-cortisol-testing-delhi';
const ORG_URL = 'https://www.drdangslab.com';
const HERO_IMAGE = 'https://www.drdangslab.com/PhotosAndLogos/Salivary-Cortisol-Testing.webp';

export const metadata = {
    metadataBase: new URL(ORG_URL),
    title:
        'Salivary Cortisol Testing in Delhi NCR | Cortisol Awakening Response Test | Dr. Dangs Lab',
    description:
        'Discover how salivary cortisol testing helps assess stress, burnout, sleep issues, fatigue and adrenal function. Learn about CAR and diurnal cortisol testing at Dr. Dangs Lab in Delhi NCR.',
    keywords: [
        'Salivary Cortisol Testing',
        'Salivary cortisol testing in Delhi NCR',
        'Cortisol Awakening Response test',
        'CAR cortisol panel',
        'Diurnal cortisol panel',
        'Stress hormone testing',
        'Cortisol rhythm test',
        'Adrenal function test',
        'Saliva cortisol test',
        'Burnout testing',
        'Chronic stress testing',
        'Cortisol imbalance symptoms',
        'Saliva cortisol testing',
        'Dr. Dangs Lab',
    ],
    authors: [{ name: 'Dr. Dangs Lab', url: ORG_URL }],
    creator: 'Dr. Dangs Lab',
    publisher: 'Dr. Dangs Lab',
    category: 'Health & Diagnostics',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title:
            'Salivary Cortisol Testing in Delhi NCR | Cortisol Awakening Response Test',
        description:
            'Salivary cortisol testing in Delhi NCR helps evaluate stress hormones, cortisol rhythm, fatigue, sleep issues and adrenal function using non-invasive saliva samples.',
        url: PAGE_URL,
        siteName: 'Dr. Dangs Lab',
        type: 'article',
        locale: 'en_IN',
        images: [
            {
                url: HERO_IMAGE,
                width: 1200,
                height: 630,
                alt: 'Salivary Cortisol Testing at Dr. Dangs Lab',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title:
            'Salivary Cortisol Testing in Delhi NCR | Dr. Dangs Lab',
        description:
            'Non-invasive salivary cortisol testing to evaluate stress, sleep, fatigue and adrenal function at Dr. Dangs Lab.',
        images: [HERO_IMAGE],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
        },
    },
    other: {
        'geo.region': 'IN-DL',
        'geo.placename': 'New Delhi',
        'geo.position': '28.5535;77.1942',
        ICBM: '28.5535, 77.1942',
        'article:section': 'Functional Medicine',
        'article:tag':
            'Salivary Cortisol, Cortisol Awakening Response, CAR, Diurnal Cortisol, Stress Hormones, Adrenal Function, Saliva',
    },
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Is salivary cortisol testing better than blood cortisol testing?',
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    'Salivary cortisol testing offers the advantage of measuring free, biologically active cortisol levels and allows multiple collections throughout the day. This helps evaluate the natural cortisol rhythm and Cortisol Awakening Response (CAR), which cannot be assessed accurately with a single blood sample.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I eat or drink before collecting my saliva sample?',
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    'No. It is recommended to avoid food, caffeine, smoking and brushing teeth for at least 30 minutes before each saliva collection. Following these instructions carefully is important to avoid contamination and ensure accurate cortisol measurements.',
            },
        },
        {
            '@type': 'Question',
            name: 'What symptoms may indicate the need for salivary cortisol testing?',
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    'Individuals experiencing chronic stress, fatigue, poor sleep, burnout, anxiety, mood fluctuations, low morning energy, brain fog or irregular daily energy patterns may benefit from evaluating their cortisol rhythm through salivary cortisol testing.',
            },
        },
    ],
};

const testJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalTest',
    name: 'Salivary Cortisol Panel',
    alternateName: 'Cortisol Awakening Response & Diurnal Cortisol Test',
    code: {
        '@type': 'MedicalCode',
        codingSystem: 'Functional Medicine',
        code: 'SALIVARY-CORTISOL-PANEL',
    },
    usedToDiagnose: [
        { '@type': 'MedicalCondition', name: 'Chronic stress' },
        { '@type': 'MedicalCondition', name: 'Burnout' },
        { '@type': 'MedicalCondition', name: 'Adrenal dysfunction' },
        { '@type': 'MedicalCondition', name: 'Circadian rhythm disruption' },
        { '@type': 'MedicalCondition', name: 'Cortisol Awakening Response abnormalities' },
        { '@type': 'MedicalCondition', name: 'Sleep disturbances' },
    ],
    relevantSpecialty: [
        { '@type': 'MedicalSpecialty', name: 'Endocrinology' },
        { '@type': 'MedicalSpecialty', name: 'Psychiatry' },
        { '@type': 'MedicalSpecialty', name: 'Sleep medicine' },
    ],
    provider: {
        '@type': 'MedicalOrganization',
        '@id': `${ORG_URL}#organization`,
        name: 'Dr. Dangs Lab',
        url: ORG_URL,
    },
};

const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    '@id': `${ORG_URL}#organization`,
    name: 'Dr. Dangs Lab',
    alternateName: 'Dr. Dang’s Lab',
    url: ORG_URL,
    logo: 'https://www.drdangslab.com/PhotosAndLogos/DangsLogo.webp',
    image: HERO_IMAGE,
    medicalSpecialty: ['Pathology', 'ClinicalLaboratoryScience', 'Endocrine'],
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'C 2/1, Safdarjung Development Area',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110016',
        addressCountry: 'IN',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 28.5535,
        longitude: 77.1942,
    },
    areaServed: [
        { '@type': 'City', name: 'New Delhi' },
        { '@type': 'City', name: 'Gurugram' },
        { '@type': 'City', name: 'Noida' },
    ],
    sameAs: [
        'https://www.facebook.com/drdangslab',
        'https://www.instagram.com/drdangslab',
        'https://www.linkedin.com/company/dr-dangs-lab',
    ],
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: ORG_URL },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Functional Medicine',
            item: `${ORG_URL}/FunctionalMedicine`,
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Salivary Cortisol Testing',
            item: PAGE_URL,
        },
    ],
};

const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline:
        'Salivary Cortisol Testing: Understanding Your Body’s Stress Rhythm',
    description:
        'Advanced, non-invasive salivary cortisol testing that maps the body’s cortisol rhythm across the day — evaluating CAR, diurnal patterns, stress physiology, sleep and adrenal function.',
    url: PAGE_URL,
    mainEntityOfPage: PAGE_URL,
    image: [HERO_IMAGE],
    inLanguage: 'en-IN',
    isPartOf: {
        '@type': 'WebSite',
        name: 'Dr. Dangs Lab',
        url: ORG_URL,
    },
    about: [
        { '@type': 'Thing', name: 'Cortisol' },
        { '@type': 'Thing', name: 'Cortisol Awakening Response (CAR)' },
        { '@type': 'Thing', name: 'Diurnal cortisol' },
        { '@type': 'Thing', name: 'Adrenal function' },
        { '@type': 'Thing', name: 'Chronic stress' },
        { '@type': 'Thing', name: 'Circadian rhythm' },
        { '@type': 'Thing', name: 'Burnout' },
    ],
    audience: {
        '@type': 'MedicalAudience',
        audienceType: 'Patient',
        geographicArea: {
            '@type': 'AdministrativeArea',
            name: 'Delhi NCR',
        },
    },
    speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', 'h3'],
    },
    publisher: {
        '@type': 'MedicalOrganization',
        '@id': `${ORG_URL}#organization`,
        name: 'Dr. Dangs Lab',
        url: ORG_URL,
    },
    lastReviewed: '2026-05-26',
    reviewedBy: {
        '@type': 'MedicalOrganization',
        name: 'Dr. Dangs Lab Clinical Team',
        url: ORG_URL,
    },
    specialty: {
        '@type': 'MedicalSpecialty',
        name: 'Clinical Pathology',
    },
};

export default function SalivaryCortisolPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(testJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <SalivaryCortisol />
        </>
    );
}
