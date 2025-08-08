'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-KJR1PGY6E7'; // Your GA4 Measurement ID
const GA_LEGACY_ID = 'UA-85484803-1'; // Your Universal Analytics ID

const GoogleAnalytics = () => {
  useEffect(() => {
    // Set cookie expiration to 2 years (in seconds)
    const cookieExpiration = 2 * 365 * 24 * 60 * 60;

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }

    // Initialize GA4 with custom cookie settings
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      cookie_expires: cookieExpiration,
      cookie_update: false, // Prevent automatic cookie updates
      cookie_flags: 'SameSite=Strict;Secure',
    });

    // Initialize Universal Analytics with custom cookie settings
    gtag('config', GA_LEGACY_ID, {
      cookie_expires: cookieExpiration,
      cookie_update: false,
      cookie_flags: 'SameSite=Strict;Secure',
    });
  }, []);

  return (
    <>
      {/* GA4 Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      
      {/* Initialize gtag */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // GA4 Configuration
            gtag('config', '${GA_MEASUREMENT_ID}', {
              cookie_expires: ${2 * 365 * 24 * 60 * 60},
              cookie_update: false,
              cookie_flags: 'SameSite=Strict;Secure',
            });

            // Universal Analytics Configuration
            gtag('config', '${GA_LEGACY_ID}', {
              cookie_expires: ${2 * 365 * 24 * 60 * 60},
              cookie_update: false,
              cookie_flags: 'SameSite=Strict;Secure',
            });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
