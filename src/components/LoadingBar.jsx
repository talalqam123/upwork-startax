import React, { useState, useEffect } from 'react';

const LoadingBar = ({ isLoading, duration = 500 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressInterval;
    if (isLoading) {
      setProgress(0);
      const updateFrequency = 20; // Update every 20ms for smooth animation
      const incrementAmount = (90 / (duration / updateFrequency)); // Distribute progress over duration

      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev < 90) {
            return Math.min(prev + incrementAmount, 90);
          }
          return prev;
        });
      }, updateFrequency);
    } else {
      setProgress(100);
      const timeout = setTimeout(() => {
        setProgress(0);
      }, 300); // Shorter reset time
      return () => clearTimeout(timeout);
    }
    return () => clearInterval(progressInterval);
  }, [isLoading, duration]);

  return (
    <div
      className="loading-bar"
      style={{
        height: '3px',
        background: progress > 0 ? '#f0f0f0' : 'transparent',
        position: 'fixed',
        top: '60px',
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <div
        className="loading-progress"
        style={{
          height: '100%',
          width: `${progress}%`,
          background: '#6f4ab9',
          transition: 'width 0.2s ease-out', // Faster transition
          borderRadius: '0 2px 2px 0',
          boxShadow: '0 0 10px #6f4ab9',
        }}
      />
    </div>
  );
};

export default LoadingBar;
