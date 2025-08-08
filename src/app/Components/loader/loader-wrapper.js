// components/AppWrapper.tsx
'use client';

import { useEffect, useState } from 'react';

import Loader from './loader';

export default function LoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); //  seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return <>{children}</>;
}
