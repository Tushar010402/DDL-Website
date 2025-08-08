// src/app/Components/ScrollToTop.jsx

'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Adds smooth scrolling effect
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
