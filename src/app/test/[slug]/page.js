// app/test/[slug]/page.js
import TestDetail from '@/app/Components/TestDetail/TestDetail';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export async function generateMetadata({ params: { slug } }) {
  try {
    const response = await fetch(`https://backend.dangsccg.co.in/api/api/test/${slug}`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      return {
        title: 'Test | Dr Dangs Lab',
        description: 'Medical diagnostic test information at Dr Dangs Lab'
      };
    }

    const test = await response.json();
    
    return {
      title: test.meta_title || `${test.test_heading} | Dr Dangs Lab`,
      description: test.meta_description || test.test_description?.replace(/<[^>]*>/g, '').slice(0, 160) || '',
      openGraph: {
        title: test.og_title || test.meta_title || `${test.test_heading} | Dr Dangs Lab`,
        description: test.og_description || test.meta_description || test.test_description?.replace(/<[^>]*>/g, '').slice(0, 160) || '',
        type: test.og_type || 'website',
        url: test.og_url || `https://drdangs.com/test/${test.url_name}`,
        siteName: test.og_site_name || 'Dr Dangs Lab',
        images: (test.og_image || test.test_thumbnail_image) ? [
          {
            url: `https://backend.dangsccg.co.in${test.og_image || test.test_thumbnail_image}`,
            alt: test.thumbnail_alt_text || ''
          }
        ] : []
      }
    };
  } catch (error) {
    console.error('Metadata generation error:', error);
    return {
      title: 'Test | Dr Dangs Lab',
      description: 'Medical diagnostic test information at Dr Dangs Lab'
    };
  }
}

export default async function Page({ params: { slug } }) {
  try {
    const response = await fetch(`https://backend.dangsccg.co.in/api/api/test/${slug}`, {
      cache: 'no-store'
    });

    if (!response.ok) {
      return <div>Test not found</div>;
    }

    const initialTest = await response.json();
    return <TestDetail initialTest={initialTest} />;
  } catch (error) {
    console.error('Page loading error:', error);
    return <div>Error loading test</div>;
  }
}