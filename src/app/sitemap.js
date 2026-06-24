// Helper function to encode URL for XML sitemap
function encodeUrlForXml(url) {
  return encodeURI(url)
    .replace(/&/g, '&amp;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.drdangslab.com';

  try {
      const [blogsRes, articlesRes, testsRes] = await Promise.all([
          fetch('https://backend.dangsccg.co.in/api/get_blogs/'),
          fetch('https://backend.dangsccg.co.in/api/get_articles/'),
          fetch('https://backend.dangsccg.co.in/api/api/get_tests/', {
              headers: { 'Origin': 'https://www.drdangslab.com' }
          })
      ]);

      const [blogs, articles] = await Promise.all([
          blogsRes.json(),
          articlesRes.json()
      ]);

      let tests = [];
      try {
          if (testsRes.ok) {
              tests = await testsRes.json();
          }
      } catch (e) {
          console.log('Tests API not available');
      }

      const blogUrls = blogs.map((blog) => ({
          url: encodeUrlForXml(`${baseUrl}/blogs/${blog.url_name}`),
          lastModified: blog.release_date,
          changeFrequency: 'weekly',
          priority: 0.7
      }));

      const articleUrls = articles.map((article) => ({
          url: encodeUrlForXml(`${baseUrl}/articles/${article.url_name}`),
          lastModified: article.release_date,
          changeFrequency: 'weekly',
          priority: 0.7
      }));

      const testUrls = tests.map((test) => ({
          url: encodeUrlForXml(`${baseUrl}/test/${test.url_name}`),
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.8
      }));

      const homePage = [{
          url: baseUrl,
          lastModified: new Date(),
          changeFrequency: 'daily',
          priority: 1.0
      }];

      const servicePages = [
          'HomeCollection',
          'Services',
          'TestProfiles',
          'Healthguide',
          'News',
          'Career',
          'Feedback',
          'our-locations'
      ].map(page => ({
          url: `${baseUrl}/${page}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.9
      }));

      const departmentPages = [
          'ClinicalPathology',
          'Biochemistry',
          'Haematology',
          'Microbiology',
          'MolecularBiology',
          'Histocytopathology',
          'FlowCytometry',
          'SpecializedTesting',
          'FunctionalMedicine'
      ].map(page => ({
          url: `${baseUrl}/${page}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.7
      }));

      const aboutPages = [
          'Legacy',
          'QualityAssurance',
          'ResearchAndTrials',
          'Recognition',
          'VirtualTour',
          'TermAndConditions'
      ].map(page => ({
          url: `${baseUrl}/${page}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.6
      }));

      const locationPages = [
          'pathology-labs-in-punjabi-bagh',
          'DiagnosticInPunjabibagh',
          'DiagnosticsInGurgaon'
      ].map(page => ({
          url: `${baseUrl}/${page}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.7
      }));

      const diseasePages = [
          'CoronaVirus',
          'H3N2Tests',
          'H3N2',
          'SwineFlue',
          'Bacteriophage-Sensitivity-Testing',
          'Bacteriophage',
          'CBNAAT',
          'CBNAATCOVID',
          'STD-Testing',
          'AllergyWeb',
          'food-allergy-test',
          'Discover-Your-Allergies-Early-with-Allergynius-Dx'
      ].map(page => ({
          url: `${baseUrl}/${page}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.8
      }));

      const staticTestPages = [
          'VitaminD',
          'VitaminB12',
          'VitaminB9',
          'vitamin-c-blood-test-in-delhi-ncr',
          'ThyroidProfile',
          'LipidProfile',
          'LiverFunctionTest',
          'KidneyFunctionTest',
          'CBCTest',
          'HBA1cTest',
          'BloodGlucoseTest',
          'CalciumTest',
          'IronTest',
          'ZincTest',
          'MagnesiumTest',
          'PhosphorusTest',
          'HSCRP',
          'ESRSEDRate',
          'TotalIgETest',
          'HelicobacterPylori',
          'MicroalbuminuriaTest',
          'ProstateSpecificAntigenFreeandTotal',
          'RT3Test',
          'TuberculosisTest',
          'Urineroutine',
          'BioFire',
          'BiofireRespiratory'
      ].map(page => ({
          url: `${baseUrl}/${page}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8
      }));

      const landingPages = [
          'dendrite-dx-alzheimers-diagnosis-delhi',
          'cmv-dna-viral-load-rt-pcr-test-delhi-gurgaon',
          'myositis-profile-16-antigens-test-delhi-gurgaon',
          'type-1-diabetes-autoantibody-test-delhi-gurgaon',
          'urine-iodine-test-delhi-gurgaon',
          '4-Key-Blood-Tests-for-Cardiac-Health',
          'test/importance-of-omega-3-omega-6-testing',
          'test/importance-of-vitamin-b1-b2-b5-b6-testing',
          'test/salivary-cortisol-testing-delhi',
          'test/sperm-dna-fragmentation-test-delhi',
          'test/sibo-test-delhi-ncr'
      ].map(page => ({
          url: `${baseUrl}/${page}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8
      }));

      const healthCheckupIndex = [{
          url: `${baseUrl}/health-checkup-packages`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.9
      }];

      const healthCheckupPages = [
          'diagnostic-centre-and-pathology-lab-gurgaon',
          'glycosylated-haemoglobin-HBA1c',
          'Vitamin-D-test',
          'Lipid-Profile-Test',
          'Zinc-Test',
          'reverse-t3-test',
          'complete-blood-count-test',
          'Iron-Test',
          'Functional-medicine-testing',
          'magnesium-test',
          'Urine-routine-and-microscopy-Test',
          'Prostate-Specific-Antigen-Free-and-Total',
          'Microalbuminuria',
          'esr-sed-rate-test',
          'helicobacter-pylori-test',
          'Folic-Acid-Vitamin-B-9-Test',
          'Phosphorus-test',
          'dengue-fever-test',
          'HS-CRP-High-Sensitivity-C-Reactive-protein-test',
          'calcium-test',
          'blood-glucose-fasting-test',
          'Allergy-Component-Testing',
          'acne-pimples-test',
          'Tuberculosis-TB-Test',
          'Biofire-GI-Panel-Test',
          'Biofire-Respiratory-2-Panel',
          'Vitamin-B12-Test',
          'liver-function-tests',
          'kidney-function-tests',
          'CBNAAT',
          'CBNAAT-COVID19-Test',
          'ige-test',
          'thyroid-profile-with-FT3,-FT4-test',
          'H3N2-Test'
      ].map(slug => ({
          url: encodeUrlForXml(`${baseUrl}/health-checkup-packages/${slug}.html`),
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.8
      }));

      return [
          ...homePage,
          ...servicePages,
          ...departmentPages,
          ...aboutPages,
          ...locationPages,
          ...diseasePages,
          ...staticTestPages,
          ...landingPages,
          ...healthCheckupIndex,
          ...healthCheckupPages,
          ...testUrls,
          ...blogUrls,
          ...articleUrls
      ];

  } catch (error) {
      console.error('Error generating sitemap:', error);
      return [
          {
              url: baseUrl,
              lastModified: new Date(),
              changeFrequency: 'daily',
              priority: 1.0
          },
          {
              url: `${baseUrl}/healthguide`,
              lastModified: new Date(),
              changeFrequency: 'weekly',
              priority: 0.8
          }
      ];
  }
}
