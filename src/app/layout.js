// src/app/layout.jsx

import { Inter, Montserrat } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import LoaderWrapper from './Components/loader/loader-wrapper';
import WhatsAppFloatingButton from './Components/Whatsapp-Button/whatsapp';
import ClientShell from './Components/ClientShell';

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
    <html lang="en" className={`${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preload" href="/PhotosAndLogos/LogoOnNavbar.JPG" as="image" />
        <link rel="preload" href="/PhotosAndLogos/Drdangsname.JPG" as="image" />
      </head>
      <body className={inter.className} suppressHydrationWarning>

          <div className="relative">
            <ClientShell>
              <main className="pt-[53px] pl-[90px] min-h-screen relative" id="MainDivForMobileViews">
                <LoaderWrapper>{children}</LoaderWrapper>
              </main>
              <WhatsAppFloatingButton />
            </ClientShell>
          </div>
        
      </body>
    </html>
  );
}
