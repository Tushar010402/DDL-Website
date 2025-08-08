export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.drdangslab.com';
  
  try {
      const [blogsRes, articlesRes] = await Promise.all([
          fetch('https://backend.dangsccg.co.in/api/get_blogs/'),
          fetch('https://backend.dangsccg.co.in/api/get_articles/')
      ]);

      const [blogs, articles] = await Promise.all([
          blogsRes.json(),
          articlesRes.json()
      ]);

      // Dynamic URLs from API
      const blogUrls = blogs.map((blog) => ({
          url: `${baseUrl}/blogs/${blog.url_name}`,
          lastModified: blog.release_date,
          changeFrequency: 'weekly',
          priority: 0.7
      }));

      const articleUrls = articles.map((article) => ({
          url: `${baseUrl}/articles/${article.url_name}`,
          lastModified: article.release_date,
          changeFrequency: 'weekly',
          priority: 0.7
      }));

      // Static Main Pages
      const mainPages = [
          {
              url: baseUrl,
              lastModified: new Date(),
              changeFrequency: 'daily',
              priority: 1.0
          },
          {
              url: `${baseUrl}/HomeCollection`,
              lastModified: new Date(),
              changeFrequency: 'weekly',
              priority: 0.8
          },
          {
              url: `${baseUrl}/Bacteriophage-Sensitivity-Testing`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.8
          },
          {
              url: `${baseUrl}/Legacy`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.7
          },
          {
              url: `${baseUrl}/QualityAssurance`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.7
          },
          {
              url: `${baseUrl}/ResearchAndTrials`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.7
          },
          {
              url: `${baseUrl}/Services`,
              lastModified: new Date(),
              changeFrequency: 'weekly',
              priority: 0.8
          },
          {
              url: `${baseUrl}/ClinicalPathology`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.7
          },
          {
              url: `${baseUrl}/Healthguide`,
              lastModified: new Date(),
              changeFrequency: 'weekly',
              priority: 0.8
          },
          {
              url: `${baseUrl}/TermAndConditions`,
              lastModified: new Date(),
              changeFrequency: 'yearly',
              priority: 0.5
          },
          {
              url: `${baseUrl}/food-allergy-test`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.7
          },
          {
              url: `${baseUrl}/News`,
              lastModified: new Date(),
              changeFrequency: 'daily',
              priority: 0.8
          },
          {
              url: `${baseUrl}/MolecularBiology`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.7
          },
          {
              url: `${baseUrl}/Histocytopathology`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.7
          },
          {
              url: `${baseUrl}/CoronaVirus`,
              lastModified: new Date(),
              changeFrequency: 'weekly',
              priority: 0.8
          },
          {
              url: `${baseUrl}/VirtualTour`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.6
          },
          {
              url: `${baseUrl}/SwineFlue`,
              lastModified: new Date(),
              changeFrequency: 'weekly',
              priority: 0.7
          },
          {
              url: `${baseUrl}/Feedback`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.6
          },
          {
              url: `${baseUrl}/Career`,
              lastModified: new Date(),
              changeFrequency: 'weekly',
              priority: 0.7
          },
          {
              url: `${baseUrl}/Recognition`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.7
          },
          {
              url: `${baseUrl}/TestProfiles`,
              lastModified: new Date(),
              changeFrequency: 'weekly',
              priority: 0.8
          },
          {
              url: `${baseUrl}/H3N2Tests`,
              lastModified: new Date(),
              changeFrequency: 'weekly',
              priority: 0.8
          }
      ];

      // Health Checkup Package Pages
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
          'helicobacter-pylorit-test',
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
          'thyroid-profile-with-FT3,-FT4-test'
      ].map(slug => ({
          url: `${baseUrl}/health-checkup-packages/${slug}.html`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.8
      }));

      // Combine all URLs
      return [
          ...mainPages,
          ...healthCheckupPages,
          ...blogUrls,
          ...articleUrls
      ];

  } catch (error) {
      console.error('Error generating sitemap:', error);
      // Fallback returns all static pages if API fails
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
          // Add other static pages here as fallback
      ];
  }
}