import React, { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =  document.documentElement.scrollTop;
      const trackLength = documentHeight - windowHeight;
      const scrollPercentage = (scrollTop / trackLength) * 100;
      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-blue-400">
      <div
        className="h-full bg-green-700"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
