import Sibo from '@/app/Components/sibo-test-delhi-ncr/Sibo';

const PAGE_URL = 'https://www.drdangslab.com/sibo-test-delhi-ncr';
const ORG_URL = 'https://www.drdangslab.com';
const HERO_IMAGE = 'https://www.drdangslab.com/PhotosAndLogos/Understanding-SIBO.webp';

export const metadata = {
    metadataBase: new URL(ORG_URL),
    title:
        'SIBO Test in Delhi NCR | Small Intestinal Bacterial Overgrowth Breath Test - Dr. Dangs Lab',
    description:
        'Understand SIBO (Small Intestinal Bacterial Overgrowth) — causes, symptoms, diagnosis and the non-invasive breath test. Book your SIBO test in Delhi, Gurugram or Noida at Dr. Dangs Lab, one of India’s first NABL-accredited labs.',
    keywords: [
        'SIBO test Delhi',
        'SIBO test Gurugram',
        'SIBO test Noida',
        'SIBO breath test',
        'Small Intestinal Bacterial Overgrowth',
        'Hydrogen breath test',
        'Lactulose breath test',
        'Glucose breath test',
        'Gut health test Delhi NCR',
        'Bloating test',
        'IBS testing',
        'Methane breath test',
        'Dr. Dangs Lab',
    ],
    authors: [{ name: 'Dr. Dangs Lab', url: ORG_URL }],
    creator: 'Dr. Dangs Lab',
    publisher: 'Dr. Dangs Lab',
    category: 'Health & Diagnostics',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title:
            'SIBO Test in Delhi NCR | Small Intestinal Bacterial Overgrowth - Dr. Dangs Lab',
        description:
            'Causes, symptoms, diagnosis and testing for SIBO. Non-invasive breath test, home or lab collection, NABL-accredited.',
        url: PAGE_URL,
        siteName: 'Dr. Dangs Lab',
        type: 'article',
        locale: 'en_IN',
        images: [
            {
                url: HERO_IMAGE,
                width: 1200,
                height: 630,
                alt: 'SIBO (Small Intestinal Bacterial Overgrowth) Breath Test at Dr. Dangs Lab',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SIBO Test in Delhi NCR | Dr. Dangs Lab',
        description:
            'Non-invasive breath test for Small Intestinal Bacterial Overgrowth (SIBO). Home or lab collection across Delhi NCR, NABL-accredited.',
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
        'article:section': 'Gastroenterology',
        'article:tag':
            'SIBO, Small Intestinal Bacterial Overgrowth, Breath Test, Hydrogen Breath Test, Lactulose, Glucose, Gut Health, IBS',
    },
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Can SIBO be cured permanently?',
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    'SIBO can be treated, but recurrence is common, especially if the underlying cause isn’t managed. A combination of medication, diet, and lifestyle changes improves long-term outcomes.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is SIBO the same as IBS?',
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    'No. However, many people with IBS-like symptoms are later found to have SIBO. The symptoms overlap, but the causes and treatment differ.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the difference between glucose and lactulose as a substrate?',
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    'Glucose is absorbed quickly in the upper small intestine and is more useful for detecting overgrowth in the proximal small intestine, but may miss distal SIBO. Lactulose is not absorbed and travels the full length of the small bowel, covering a broader area, but can be affected by intestinal transit time and may cause some discomfort.',
            },
        },
    ],
};

const testJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalTest',
    name: 'Small Intestinal Bacterial Overgrowth (SIBO) Breath Test',
    alternateName: 'Hydrogen / Methane Breath Test',
    code: {
        '@type': 'MedicalCode',
        codingSystem: 'Gastroenterology',
        code: 'SIBO-BREATH-TEST',
    },
    usedToDiagnose: [
        { '@type': 'MedicalCondition', name: 'Small Intestinal Bacterial Overgrowth' },
        { '@type': 'MedicalCondition', name: 'Chronic bloating' },
        { '@type': 'MedicalCondition', name: 'Irritable bowel syndrome (IBS)' },
        { '@type': 'MedicalCondition', name: 'Malabsorption' },
    ],
    relevantSpecialty: [
        { '@type': 'MedicalSpecialty', name: 'Gastroenterology' },
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
    medicalSpecialty: ['Pathology', 'ClinicalLaboratoryScience', 'Gastroenterologic'],
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
            name: 'Services',
            item: `${ORG_URL}/Services`,
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'SIBO Test',
            item: PAGE_URL,
        },
    ],
};

const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline:
        'SIBO Test in Delhi NCR: Understanding Small Intestinal Bacterial Overgrowth',
    description:
        'A non-invasive breath test for Small Intestinal Bacterial Overgrowth (SIBO) — covering causes, symptoms, diagnosis, and the difference between glucose and lactulose substrates.',
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
        { '@type': 'Thing', name: 'Small Intestinal Bacterial Overgrowth (SIBO)' },
        { '@type': 'Thing', name: 'Hydrogen breath test' },
        { '@type': 'Thing', name: 'Methane breath test' },
        { '@type': 'Thing', name: 'Gut health' },
        { '@type': 'Thing', name: 'Irritable bowel syndrome (IBS)' },
        { '@type': 'Thing', name: 'Bloating' },
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
        name: 'Gastroenterologic',
    },
};

export default function SiboPage() {
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
            <Sibo />
        </>
    );
}
