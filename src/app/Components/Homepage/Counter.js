'use client';

import { useState, useEffect } from 'react';

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 2000; // Duration in milliseconds
    const incrementTime = 50;
    const increment = end / (duration / incrementTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}</>;
};

export default Counter;
