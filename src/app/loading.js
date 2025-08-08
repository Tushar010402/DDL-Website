// src/app/loading.js
"use client";

import { useEffect, useState } from 'react';

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');

  // Simulate loading progress
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        const newProgress = Math.min(oldProgress + Math.random() * 20, 100);
        
        // Update loading text based on progress
        if (newProgress < 30) {
          setLoadingText('Loading resources...');
        } else if (newProgress < 60) {
          setLoadingText('Preparing content...');
        } else if (newProgress < 90) {
          setLoadingText('Almost there...');
        } else {
          setLoadingText('Completing...');
        }
        
        return newProgress;
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Logo placeholder - replace with your logo */}
      

      {/* Main loading spinner */}
      
        
        

      {/* Progress bar */}
      

     
     

      
    </div>
  );
}