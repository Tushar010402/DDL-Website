import SDF from '@/app/Components/sperm-dna-fragmentation-test-delhi/SDF';

const PAGE_URL = 'https://www.drdangslab.com/sperm-dna-fragmentation-test-delhi';
const ORG_URL = 'https://www.drdangslab.com';
const HERO_IMAGE = 'https://www.drdangslab.com/PhotosAndLogos/Sperm-DNA-Fragmentation-Test-SDF.webp';

export const metadata = {
    metadataBase: new URL(ORG_URL),
    title:
        'Sperm DNA Fragmentation Test (SDF) in Delhi | Advanced Semen Analysis - Dr. Dangs Lab',
    description:
        'Sperm DNA Fragmentation (SDF) testing with the TUNEL assay at Dr. Dangs Lab — an advanced semen analysis that looks beyond count, motility and morphology to assess sperm DNA integrity. Useful for male infertility, repeated IVF failure and recurrent pregnancy loss.',
    keywords: [
        'Sperm DNA Fragmentation Test',
        'SDF test Delhi',
        'SDF test Gurugram',
        'SDF test Noida',
        'TUNEL assay',
        'Advanced semen analysis',
        'Male infertility test',
        'Seminogram',
        'Sperm DNA integrity test',
        'DNA fragmentation index',
        'IVF failure',
        'Recurrent pregnancy loss',
        'ICSI success',
        'Oxidative stress sperm',
        'Dr. Dangs Lab',
    ],
    authors: [{ name: 'Dr. Dangs Lab', url: ORG_URL }],
    creator: 'Dr. Dangs Lab',
    publisher: 'Dr. Dangs Lab',
    category: 'Health & Diagnostics',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title:
            'Sperm DNA Fragmentation Test (SDF) in Delhi | Advanced Semen Analysis - Dr. Dangs Lab',
        description:
            'Advanced Semen Analysis including the TUNEL assay to assess sperm DNA integrity beyond routine semen analysis. Book your SDF test in Delhi, Gurugram or Noida.',
        url: PAGE_URL,
        siteName: 'Dr. Dangs Lab',
        type: 'article',
        locale: 'en_IN',
        images: [
            {
                url: HERO_IMAGE,
                width: 1200,
                height: 630,
                alt: 'Sperm DNA Fragmentation (SDF) Test — TUNEL assay at Dr. Dangs Lab',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sperm DNA Fragmentation Test (SDF) in Delhi | Dr. Dangs Lab',
        description:
            'Advanced Semen Analysis with the TUNEL assay to assess sperm DNA integrity for male infertility, IVF failure and recurrent pregnancy loss.',
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
        'article:section': 'Andrology',
        'article:tag':
            'Sperm DNA Fragmentation, SDF, TUNEL Assay, Advanced Semen Analysis, Male Infertility, IVF Failure, Recurrent Pregnancy Loss, ICSI',
    },
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What are normal SDF levels?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Normal SDF levels indicate minimal DNA damage and better chances of conception.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is high sperm DNA fragmentation?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'It refers to significant DNA damage in sperm that can affect fertilization and embryo development.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does SDF affect IVF success?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. High SDF is linked to IVF failure, poor embryo quality and implantation issues.',
            },
        },
        {
            '@type': 'Question',
            name: 'How to reduce DNA fragmentation in sperm?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Through lifestyle changes, medical treatment and antioxidant support.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is SDF part of semen analysis?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. It is an advanced test performed alongside routine sperm analysis or seminogram.',
            },
        },
    ],
};

const testJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalTest',
    name: 'Sperm DNA Fragmentation (SDF) Test — TUNEL Assay',
    alternateName: 'Advanced Semen Analysis (Sperm DNA Integrity Test)',
    code: {
        '@type': 'MedicalCode',
        codingSystem: 'Andrology',
        code: 'SDF-TUNEL',
    },
    usedToDiagnose: [
        { '@type': 'MedicalCondition', name: 'Male infertility' },
        { '@type': 'MedicalCondition', name: 'Unexplained infertility' },
        { '@type': 'MedicalCondition', name: 'Recurrent pregnancy loss' },
        { '@type': 'MedicalCondition', name: 'Repeated IVF failure' },
        { '@type': 'MedicalCondition', name: 'Sperm DNA damage' },
    ],
    relevantSpecialty: [
        { '@type': 'MedicalSpecialty', name: 'Andrology' },
        { '@type': 'MedicalSpecialty', name: 'Urology' },
        { '@type': 'MedicalSpecialty', name: 'Reproductive medicine' },
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
    medicalSpecialty: ['Pathology', 'ClinicalLaboratoryScience', 'Andrology'],
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
            name: 'Sperm DNA Fragmentation Test (SDF)',
            item: PAGE_URL,
        },
    ],
};

const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline:
        'Sperm DNA Fragmentation Test (SDF): Advanced Semen Analysis with the TUNEL Assay',
    description:
        'An advanced semen analysis that looks beyond count, motility and morphology to assess sperm DNA integrity using the TUNEL assay — useful for male infertility, repeated IVF failure and recurrent pregnancy loss.',
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
        { '@type': 'Thing', name: 'Sperm DNA fragmentation' },
        { '@type': 'Thing', name: 'TUNEL assay' },
        { '@type': 'Thing', name: 'Male infertility' },
        { '@type': 'Thing', name: 'Semen analysis' },
        { '@type': 'Thing', name: 'IVF failure' },
        { '@type': 'Thing', name: 'Recurrent pregnancy loss' },
        { '@type': 'Thing', name: 'Oxidative stress' },
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
        name: 'Andrology',
    },
};

export default function SDFPage() {
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
            <SDF />
        </>
    );
}
