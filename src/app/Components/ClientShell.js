'use client';

import dynamic from 'next/dynamic';

// All layout-level client components loaded with ssr:false to prevent
// React hydration mismatch (#418) caused by React.lazy in Server Components.
const DynamicNavbar   = dynamic(() => import('./DynamicNavbar/DynamicNavbar'),     { ssr: false });
const RightSideButton = dynamic(() => import('./RightSideButton/RightSideButton'), { ssr: false });
const ScrollToTop     = dynamic(() => import('./ScrollToTop'),                     { ssr: false });
const Footer          = dynamic(() => import('./Footer/Footer'),                   { ssr: false });
const GoogleAnalytics = dynamic(() => import('./GoogleAnalytics.jsx'),             { ssr: false });
const MetaPixel       = dynamic(() => import('./MetaPixel'),                       { ssr: false });

export default function ClientShell({ children }) {
  return (
    <>
      <DynamicNavbar />
      <RightSideButton />
      <ScrollToTop />
      {children}
      <Footer />
      <GoogleAnalytics />
      <MetaPixel />
    </>
  );
}
