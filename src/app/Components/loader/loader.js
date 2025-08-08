'use client';

import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      <img src="/PhotosAndLogos/logo-loader.gif" alt="Logo" className="w-30 h-30 mb-4 animate-pulse" />
    </div>
  );
};

export default Loader;
