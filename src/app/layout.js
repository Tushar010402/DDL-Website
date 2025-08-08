// src/app/layout.jsx

import { Inter, Montserrat } from 'next/font/google';
import { Suspense, lazy } from 'react';
import Script from 'next/script';
import './globals.css';
import LoaderWrapper from './Components/loader/loader-wrapper';

// Lazy load components
const DynamicNavbar = lazy(() => import('./Components/DynamicNavbar/DynamicNavbar'));
const RightSideButton = lazy(() => import('./Components/RightSideButton/RightSideButton'));
const Footer = lazy(() => import('./Components/Footer/Footer'));
const ScrollToTop = lazy(() => import('./Components/ScrollToTop'));
const GoogleAnalytics = lazy(() => import('./Components/GoogleAnalytics'));
const MetaPixel = lazy(() => import('./Components/MetaPixel'));

// Loading spinner component


// Initialize fonts
const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Dr Dangs Lab',
  description: 'Best Pathology Lab & Diagnostic Centre in Delhi NCR',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-p6VZjlvUy1KJ4T+vDJ1eV1TfAzrtZsI8xNkxrdoeJQW5F/X5iFkdg0VH6BuQpS5kqlUwVJoIqkI+v4h8f3wMGQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preload" href="/PhotosAndLogos/LogoOnNavbar.JPG" as="image" />
        <link rel="preload" href="/PhotosAndLogos/Drdangsname.JPG" as="image" />
      </head>
      <body className={inter.className}>
      
          <div className="relative">
            {/* Single Dynamic Navbar that handles all cases */}
            <DynamicNavbar />
            
            <RightSideButton />
            <ScrollToTop />

            <main className="pt-[53px] pl-[90px] min-h-screen relative" id="MainDivForMobileViews">
             <LoaderWrapper>{children}</LoaderWrapper> 
            </main>

            <Footer />
          </div>
      

        {/* Analytics */}
        <GoogleAnalytics />
        <MetaPixel />
        
      </body>
    </html>
  );
}
