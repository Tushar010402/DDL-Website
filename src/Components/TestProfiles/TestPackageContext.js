import React, { createContext, useContext, useState } from 'react';

const TestPackageContext = createContext();

export const useTestPackage = () => useContext(TestPackageContext);

export const TestPackageProvider = ({ children }) => {
  const [selectedTestPackage, setSelectedTestPackage] = useState(null);

  return (
    <TestPackageContext.Provider value={{ selectedTestPackage, setSelectedTestPackage }}>
      {children}
    </TestPackageContext.Provider>
  );
};
