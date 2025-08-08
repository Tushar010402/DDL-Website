/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add transpilePackages for et-line
    transpilePackages: ['et-line'],
    
    // Add image domain configuration
    images: {
        domains: ['backend.dangsccg.co.in'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'backend.dangsccg.co.in',
                port: '',
                pathname: '/**',
            },
        ],
        // Enable image optimization
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        formats: ['image/webp'],
        minimumCacheTTL: 60,
    },
    
    async redirects() {
        return [
            { source: '/ServiceAllergytesting.aspx', destination: '/AllergyWeb', permanent: true },
            { source: '/HomeCollectionServices.aspx', destination: '/HomeCollection', permanent: true },
            { source: '/ServiceBacteriophageSenstivityTesting.aspx', destination: '/Bacteriophage', permanent: true },
            { source: '/Legacy.aspx', destination: '/Legacy', permanent: true },
            { source: '/Services.aspx', destination: '/Services', permanent: true },
            { source: '/QualityAssurance.aspx', destination: '/QualityAssurance', permanent: true },
            { source: '/VirtualTour.aspx', destination: '/VirtualTour', permanent: true },
            
            { source: '/ResearchAndTrials.aspx', destination: '/ResearchAndTrials', permanent: true },
            { source: '/Recognition.aspx', destination: '/Recognition', permanent: true },
            { source: '/Careers.aspx', destination: '/Career', permanent: true },
            { source: '/News.aspx', destination: '/News', permanent: true },
            { source: '/healthguide.aspx', destination: '/Healthguide', permanent: true },
            { source: '/Feedback.aspx', destination: '/Feedback', permanent: true },
            { source: '/CoronaVirus.aspx', destination: '/CoronaVirus', permanent: true },
            // { source: '/Swine-Flu-H1n1-Test.aspx', destination: '/SwineFlue', permanent: true },
            { source: '/TermsAndConditions.aspx', destination: '/TermAndConditions', permanent: true },
            { source: '/ServiceHaematology.aspx', destination: '/Haematology', permanent: true },
            { source: '/ServiceBiochemistry.aspx', destination: '/Biochemistry', permanent: true },
            { source: '/ServiceMicrobiology.aspx', destination: '/Microbiology', permanent: true },
            { source: '/ServiceHistocytopathology.aspx', destination: '/Histocytopathology', permanent: true },
            { source: '/ServiceMolecularbiology.aspx', destination: '/MolecularBiology', permanent: true },
            { source: '/ServiceFlowcytometry.aspx', destination: '/FlowCytometry', permanent: true },
            { source: '/HoliDays.aspx', destination: '/HoliDays', permanent: true },
            { source: '/downloads/HowToTakePhageTherapy.pdf', destination: '/HowToTakePhageTherapy.pdf', permanent: true },
            { source: '/ServiceClinicalpathology.aspx', destination: '/ClinicalPathology', permanent: true },
            { source: '/ServiceSpecializedTestingForHospitals.aspx', destination: '/SpecializedTesting', permanent: true },
            { source: '/TestProfiles', destination: '/health-checkup-packages', permanent: true },
            { source: '/downloads/FOODALLEGRY.pdf', destination: '/FOODALLEGRY.pdf', permanent: true },
            { source: '/downloads/IMUPRO.pdf', destination: '/IMUPRO.pdf', permanent: true },
            { source: '/downloads/H1N1-H3N2-Flu-Panel-02.pdf', destination: '/H1N1-H3N2-Flu-Panel-02.pdf', permanent: true },
            { source: '/downloads/SAMPLEREPORT-IMUPRO.pdf', destination: '/SAMPLEREPORT-IMUPRO.pdf', permanent: true },
            { source: '/downloads/SampleReport.pdf', destination: '/SampleReport.pdf', permanent: true },
            { source: '/downloads/ConsentFormforBacteriophageTesting.pdf', destination: '/ConsentFormforBacteriophageTesting.pdf', permanent: true },
            // { source: '/health-checkup-packages/H3N2-Test.html', destination: '/H3N2', permanent: true },
            { source: '/health-checkup-packages/TEST-PACKAGES-BROCHURE-INCLUDING-FM-TESTS-APRIL24.pdf', destination: '/TEST-PACKAGES-BROCHURE-INCLUDING-FM-TESTS-APRIL24.pdf', permanent: true },
            { source: '/TestResults.aspx', destination: 'https://reports.drdangslab.com/drdangs/design/PatientPortal/PatientLogin.aspx', permanent: true },
            { source: '/Packages.aspx', destination: '/TEST-PACKAGES-BROCHURE-INCLUDING-FM-TESTS-APRIL24.pdf', permanent: true },
            {source: '/AllergyWeb', destination: '/food-allergy-test', permanent:true},
            {source: '/Bacteriophage', destination: '/Bacteriophage-Sensitivity-Testing', permanent:true},
            {source: '/SwineFlue', destination: '/Swine-Flu-H1n1-Test.aspx', permanent:true},
            {source: '/H3N2Tests', destination: '/H3N2-Tests', permanent:true},
	    {source: '/DiagnosticsInGurgaon', destination: '/health-checkup-packages/diagnostic-centre-and-pathology-lab-gurgaon.html', permanent:true},






              // Medical Tests   
            // { source: '/health-checkup-packages/glycosylated-haemoglobin-HBA1c.html', destination: '/HBA1cTest', permanent: true },
            // { source: '/health-checkup-packages/Vitamin-D-test.html', destination: '/VitaminD', permanent: true },
            // { source: '/health-checkup-packages/Lipid-Profile-Test.html', destination: '/LipidProfile', permanent: true },
            // { source: '/health-checkup-packages/Zinc-Test.html', destination: '/ZincTest', permanent: true },
            // { source: '/health-checkup-packages/reverse-t3-test.html', destination: '/RT3Test', permanent: true },
            // { source: '/health-checkup-packages/complete-blood-count-test.html', destination: '/CBCTest', permanent: true },
            // { source: '/health-checkup-packages/Iron-Test.html', destination: '/IronTest', permanent: true },
            // { source: '/health-checkup-packages/Functional-medicine-testing.html', destination: '/FunctionalMedicine', permanent: true },
            // { source: '/health-checkup-packages/magnesium-test.html', destination: '/MagnesiumTest', permanent: true },
            // { source: '/health-checkup-packages/Urine-routine-and-microscopy-Test.html', destination: '/Urineroutine', permanent: true },
            // { source: '/health-checkup-packages/Prostate-Specific-Antigen-Free-and-Total.html', destination: '/ProstateSpecificAntigenFreeandTotal', permanent: true },
            // { source: '/health-checkup-packages/Microalbuminuria.html', destination: '/MicroalbuminuriaTest', permanent: true },
            // { source: '/health-checkup-packages/esr-sed-rate-test.html', destination: '/ESRSEDRate', permanent: true },
            // { source: '/health-checkup-packages/helicobacter-pylorit-test.html', destination: '/HelicobacterPylori', permanent: true },
            // { source: '/health-checkup-packages/Folic-Acid-Vitamin-B-9-Test.html', destination: '/VitaminB9', permanent: true },
            // { source: '/health-checkup-packages/Phosphorus-test.html', destination: '/PhosphorusTest', permanent: true },
            // { source: '/health-checkup-packages/HS-CRP-High-Sensitivity-C-Reactive-protein-test.html', destination: '/HSCRP', permanent: true },
            // { source: '/health-checkup-packages/H3N2-Test.html', destination: '/H3N2Tests', permanent: true },
            // { source: '/health-checkup-packages/calcium-test.html', destination: '/CalciumTest', permanent: true },
            // { source: '/health-checkup-packages/blood-glucose-fasting-test.html', destination: '/BloodGlucoseTest', permanent: true },
            // { source: '/health-checkup-packages/Tuberculosis%20-TB-Test.html', destination: '/TuberculosisTest', permanent: true },
            // { source: '/health-checkup-packages/Biofire-GI-Panel-Test.html', destination: '/BioFire', permanent: true },
            // { source: '/health-checkup-packages/Biofire-Respiratory-2-Panel.html', destination: '/BiofireRespiratory', permanent: true },
            // { source: '/health-checkup-packages/Vitamin-B12-Test.html', destination: '/VitaminB12', permanent: true },
            // { source: '/health-checkup-packages/liver-function-tests.html', destination: '/LiverFunctionTest', permanent: true },
            // { source: '/health-checkup-packages/kidney-function-tests.html', destination: '/KidneyFunctionTest', permanent: true },
            // { source: '/health-checkup-packages/CBNAAT.html', destination: '/CBNAAT', permanent: true },
            // { source: '/health-checkup-packages/CBNAAT-COVID19-Test.html', destination: '/CBNAATCOVID', permanent: true },
            // { source: '/health-checkup-packages/ige-test.html', destination: '/TotalIgETest', permanent: true },
            // { source: '/health-checkup-packages/thyroid-profile-with-FT3,-FT4-test.html', destination: '/Thyroid-Profile', permanent: true },
            // Additional Tests from Original List
            // { source: '/health-checkup-packages/Allergy-Component-Testing.html', destination: '/AllergyComponentTesting', permanent: true },
            // { source: '/health-checkup-packages/acne-pimples-test.html', destination: '/AcnePimplesTest', permanent: true },
            // { source: '/health-checkup-packages/diagnostic-centre-and-pathology-lab-gurgaon.html', destination: '/DiagnonsticsInGurgaon', permanent: true },
            


        ];
    },
    
    reactStrictMode: true,
    
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        });
        return config;
    },
};

export default nextConfig;