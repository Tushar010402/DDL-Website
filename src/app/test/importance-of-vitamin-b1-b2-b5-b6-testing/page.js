import VitaminB from '@/app/Components/importance-of-vitamin-b1-b2-b5-b6-testing/VitaminB';

const PAGE_URL = 'https://www.drdangslab.com/test/importance-of-vitamin-b1-b2-b5-b6-testing';
const ORG_URL = 'https://www.drdangslab.com';
const HERO_IMAGE = 'https://www.drdangslab.com/PhotosAndLogos/Vitamin-B-Testing.webp';

export const metadata = {
    metadataBase: new URL(ORG_URL),
    title:
        'Importance of Vitamin B1, B2, B5 and B6 Testing for Energy & Nerve Health | Dr. Dangs Lab',
    description:
        'Learn the importance of Vitamin B1, B2, B5 and B6 testing to detect hidden deficiencies causing fatigue, neuropathy and brain fog. Book advanced micronutrient testing at Dr. Dangs Lab, Delhi NCR.',
    keywords: [
        'Importance of Vitamin B1, B2, B5 and B6 Testing',
        'Vitamin B1 test',
        'Vitamin B2 test',
        'Vitamin B5 test',
        'Vitamin B6 test',
        'Thiamine test',
        'Riboflavin test',
        'Pantothenic acid test',
        'Pyridoxal-5-phosphate',
        'B vitamin deficiency symptoms',
        'Micronutrient testing',
        'Functional medicine tests',
        'Fatigue blood tests',
        'Peripheral neuropathy testing',
        'Nutritional deficiency tests',
        'Vitamin B test Delhi',
        'Vitamin B test Gurugram',
        'Vitamin B test Noida',
        'Dr. Dangs Lab',
    ],
    authors: [{ name: 'Dr. Dangs Lab', url: ORG_URL }],
    creator: 'Dr. Dangs Lab',
    publisher: 'Dr. Dangs Lab',
    category: 'Health & Diagnostics',
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title:
            'Importance of Vitamin B1, B2, B5 and B6 Testing | Dr. Dangs Lab',
        description:
            'Detect hidden B-vitamin deficiencies causing fatigue, neuropathy and brain fog. Advanced micronutrient testing at Dr. Dangs Lab, Delhi NCR.',
        url: PAGE_URL,
        siteName: 'Dr. Dangs Lab',
        type: 'article',
        locale: 'en_IN',
        images: [
            {
                url: HERO_IMAGE,
                width: 1200,
                height: 630,
                alt: 'Vitamin B1, B2, B5 and B6 Testing at Dr. Dangs Lab',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title:
            'Importance of Vitamin B1, B2, B5 and B6 Testing | Dr. Dangs Lab',
        description:
            'Detect hidden B-vitamin deficiencies causing fatigue, neuropathy and brain fog at Dr. Dangs Lab.',
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
            'Vitamin B1, Vitamin B2, Vitamin B5, Vitamin B6, Thiamine, Riboflavin, Pantothenic Acid, Pyridoxine, Micronutrient Testing, Functional Medicine',
    },
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Why is Vitamin B1, B2, B5 and B6 testing important?',
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    'These tests help identify deficiencies that may cause fatigue, nerve symptoms, mood changes and metabolic issues — well before they show up on routine bloodwork.',
            },
        },
        {
            '@type': 'Question',
            name: 'What symptoms suggest I should get tested?',
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    'Persistent tiredness, tingling in the limbs, brain fog, skin problems and low mood are common indicators. People with restrictive diets, gut disorders or long-term medication use should also consider testing.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can Vitamin B6 levels be too high?',
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    'Yes. Excessive supplementation can itself lead to nerve-related symptoms (sensory neuropathy), which is why objective testing is so useful before and during supplementation.',
            },
        },
        {
            '@type': 'Question',
            name: 'Are these tests included in routine health checkups?',
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    'Usually not. They are typically ordered separately when symptoms or risk factors are present, or as part of a functional medicine evaluation.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do I need fasting before these tests?',
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    'Requirements vary by test. Please follow the specific instructions provided at the time of booking.',
            },
        },
        {
            '@type': 'Question',
            name: 'How often should these vitamins be checked?',
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    'Frequency depends on your symptoms, treatment plan and your physician’s recommendation — typically every 3 to 6 months after starting supplementation.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can deficiencies occur despite a healthy diet?',
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    'Yes. Absorption problems, medications, chronic stress, alcohol use and chronic illness can all impair B-vitamin status even with a balanced diet.',
            },
        },
    ],
};

const testJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalTest',
    name: 'Vitamin B1, B2, B5 and B6 Profile',
    alternateName: 'B-Complex Micronutrient Panel',
    code: {
        '@type': 'MedicalCode',
        codingSystem: 'Functional Medicine',
        code: 'VITAMIN-B-COMPLEX-PROFILE',
    },
    usedToDiagnose: [
        { '@type': 'MedicalCondition', name: 'Vitamin B1 (Thiamine) deficiency' },
        { '@type': 'MedicalCondition', name: 'Vitamin B2 (Riboflavin) deficiency' },
        { '@type': 'MedicalCondition', name: 'Vitamin B5 (Pantothenic acid) deficiency' },
        { '@type': 'MedicalCondition', name: 'Vitamin B6 (Pyridoxine) deficiency' },
        { '@type': 'MedicalCondition', name: 'Peripheral neuropathy' },
        { '@type': 'MedicalCondition', name: 'Chronic fatigue' },
    ],
    relevantSpecialty: [
        { '@type': 'MedicalSpecialty', name: 'Nutrition' },
        { '@type': 'MedicalSpecialty', name: 'Neurology' },
        { '@type': 'MedicalSpecialty', name: 'Endocrinology' },
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
    medicalSpecialty: ['Pathology', 'ClinicalLaboratoryScience', 'Nutrition'],
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
            name: 'Vitamin B1, B2, B5 and B6 Testing',
            item: PAGE_URL,
        },
    ],
};

const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline:
        'Importance of Vitamin B1, B2, B5 and B6 Testing: Why These Essential Nutrients Matter More Than You Think',
    description:
        'Advanced micronutrient blood test that measures Vitamin B1 (Thiamine), B2 (Riboflavin), B5 (Pantothenic acid) and B6 (Pyridoxal-5-phosphate) to uncover hidden deficiencies behind fatigue, neuropathy and brain fog.',
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
        { '@type': 'Thing', name: 'Vitamin B1 (Thiamine)' },
        { '@type': 'Thing', name: 'Vitamin B2 (Riboflavin)' },
        { '@type': 'Thing', name: 'Vitamin B5 (Pantothenic Acid)' },
        { '@type': 'Thing', name: 'Vitamin B6 (Pyridoxine)' },
        { '@type': 'Thing', name: 'Micronutrient testing' },
        { '@type': 'Thing', name: 'Peripheral neuropathy' },
        { '@type': 'Thing', name: 'Homocysteine metabolism' },
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
    lastReviewed: '2026-05-25',
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

export default function VitaminBTestingPage() {
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
            <VitaminB />
        </>
    );
}
