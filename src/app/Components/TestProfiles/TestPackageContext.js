// src/app/Components/TestProfiles/TestPackageContext.js
'use client';

import React, { createContext, useContext, useState } from 'react';

const TestPackageContext = createContext();

export const useTestPackage = () => {
  const context = useContext(TestPackageContext);
  if (!context) {
    throw new Error('useTestPackage must be used within a TestPackageProvider');
  }
  return context;
};

export const TestPackageProvider = ({ children }) => {
  const [selectedTestPackage, setSelectedTestPackage] = useState('');

  const value = {
    selectedTestPackage,
    setSelectedTestPackage,
  };

  return (
    <TestPackageContext.Provider value={value}>
      {children}
    </TestPackageContext.Provider>
  );
};
