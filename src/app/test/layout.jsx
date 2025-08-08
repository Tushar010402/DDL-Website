// app/test/layout.jsx
export async function generateMetadata({ params, searchParams }) {
    return {
      metadataBase: new URL('https://drdangs.com'),
      title: 'Medical Tests & Diagnostics | Dr Dangs Lab',
      description: 'Comprehensive medical tests and diagnostic services at Dr Dangs Lab. High-quality, accurate testing with detailed reports.',
      openGraph: {
        title: 'Medical Tests & Diagnostics | Dr Dangs Lab',
        description: 'Comprehensive medical tests and diagnostic services at Dr Dangs Lab.',
        type: 'website',
        url: 'https://drdangs.com/tests',
      }
    }
  }
  
  export default function TestLayout({ children }) {
    return <>{children}</>;
  }