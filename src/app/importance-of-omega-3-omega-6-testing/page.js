import Omega from '@/app/Components/importance-of-omega-3-omega-6-testing/Omega';

const PAGE_URL = 'https://www.drdangslab.com/importance-of-omega-3-omega-6-testing';
const ORG_URL = 'https://www.drdangslab.com';
const HERO_IMAGE = 'https://www.drdangslab.com/PhotosAndLogos/Omega-3-Omega-6-Testing.webp';

export const metadata = {
    metadataBase: new URL(ORG_URL),
    title:
        'Importance of Omega-3 and Omega-6 Testing for Heart & Inflammation',
    description:
        'Learn why Omega-3 and Omega-6 Testing is important for inflammation, heart health, brain function, and metabolic wellness. Explore AA/EPA ratio insights.',
    keywords: [
        'Importance of Omega-3 and Omega-6 Testing',
        'Omega-3 and Omega-6 test',
        'Omega-3 Index',
        'AA/EPA ratio',
        'Omega-6 to Omega-3 ratio',
        'Essential fatty acid test',
        'Fatty acid profile test',
        'Inflammation blood test',
        'Functional medicine test',
        'Omega-3 test in Delhi',
        'Omega-3 test Gurugram',
        'Omega-3 test Noida',
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
            'Importance of Omega-3 and Omega-6 Testing for Inflammation & Heart Health',
        description:
            'Advanced fatty acid blood test measuring EPA, DHA, AA, LA and key ratios such as the Omega-3 Index and AA/EPA — available at Dr. Dangs Lab, Delhi NCR.',
        url: PAGE_URL,
        siteName: 'Dr. Dangs Lab',
        type: 'article',
        locale: 'en_IN',
        images: [
            {
                url: HERO_IMAGE,
                width: 1200,
                height: 630,
                alt: 'Omega-3 and Omega-6 Testing at Dr. Dangs Lab',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title:
            'Importance of Omega-3 and Omega-6 Testing | Dr. Dangs Lab',
        description:
            'Assess inflammation, Omega-3 Index and cardiovascular risk with an advanced fatty acid profile at Dr. Dangs Lab.',
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
            'Omega-3, Omega-6, Fatty Acid Test, Omega-3 Index, AA/EPA Ratio, Inflammation, Heart Health',
    },
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Can vegetarians be deficient in Omega-3?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Plant sources provide ALA, but conversion to EPA and DHA is limited.',
            },
        },
        {
            '@type': 'Question',
            name: 'How often should I repeat the test?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Every 3 to 6 months after dietary or supplement changes.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do fish oil supplements guarantee good results?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Not always. Absorption and dose vary, which is why testing is useful.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is fasting required for this test?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Requirements may vary by laboratory and follow the instructions provided at the time of booking.',
            },
        },
        {
            '@type': 'Question',
            name: 'Where can I get Omega-3 and Omega-6 Testing in India?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'You can access advanced fatty acid testing through Dr. Dangs Lab’s Functional Medicine Testing Platform.',
            },
        },
    ],
};

const testJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalTest',
    name: 'Omega-3 and Omega-6 Fatty Acid Profile',
    alternateName: 'Essential Fatty Acid Test',
    code: {
        '@type': 'MedicalCode',
        codingSystem: 'Functional Medicine',
        code: 'OMEGA-3-6-PROFILE',
    },
    usedToDiagnose: [
        { '@type': 'MedicalCondition', name: 'Chronic inflammation' },
        { '@type': 'MedicalCondition', name: 'Cardiovascular disease risk' },
        { '@type': 'MedicalCondition', name: 'Fatty acid imbalance' },
    ],
    relevantSpecialty: [
        { '@type': 'MedicalSpecialty', name: 'Cardiology' },
        { '@type': 'MedicalSpecialty', name: 'Endocrinology' },
        { '@type': 'MedicalSpecialty', name: 'Nutrition' },
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
    medicalSpecialty: ['Pathology', 'ClinicalLaboratoryScience', 'Cardiology'],
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
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: ORG_URL,
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Functional Medicine',
            item: `${ORG_URL}/FunctionalMedicine`,
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Omega-3 and Omega-6 Testing',
            item: PAGE_URL,
        },
    ],
};

const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline:
        'Importance of Omega-3 and Omega-6 Testing: A Deeper Look at Your Inflammation and Heart Health',
    description:
        'Advanced fatty acid blood test that measures EPA, DHA, AA, LA and key ratios such as the Omega-3 Index and AA/EPA — revealing inflammatory balance and cardiovascular risk.',
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
        { '@type': 'Thing', name: 'Omega-3 fatty acids' },
        { '@type': 'Thing', name: 'Omega-6 fatty acids' },
        { '@type': 'Thing', name: 'Omega-3 Index' },
        { '@type': 'Thing', name: 'AA/EPA ratio' },
        { '@type': 'Thing', name: 'Cardiovascular health' },
        { '@type': 'Thing', name: 'Chronic inflammation' },
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

export default function OmegaTestingPage() {
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
            <Omega />
        </>
    );
}
