import React, { useState, useEffect } from 'react';

const LoadingBar = ({ isLoading, duration = 500 }) => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressInterval;
    let hideTimeout;

    if (isLoading) {
      // Reset progress and show immediately when loading starts
      setProgress(0);
      setVisible(true);

      // Start progress after a tiny delay to ensure reset is visible
      progressInterval = setTimeout(() => {
        const updateFrequency = 20;
        const incrementAmount = (90 / (duration / updateFrequency));
        
        progressInterval = setInterval(() => {
          setProgress(prev => {
            if (prev < 90) {
              return Math.min(prev + incrementAmount, 90);
            }
            return prev;
          });
        }, updateFrequency);
      }, 50);
    } else if (visible) {
      clearInterval(progressInterval);
      setProgress(100);
      hideTimeout = setTimeout(() => {
        setVisible(false);
        // Reset progress only after the bar is hidden
        setTimeout(() => setProgress(0), 200);
      }, 200);
    }

    return () => {
      clearInterval(progressInterval);
      clearTimeout(hideTimeout);
    };
  }, [isLoading, duration, visible]);

  return (
    <div
      className="loading-bar"
      style={{
        height: '3px',
        background: '#f0f0f0',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.2s ease-out',
        pointerEvents: 'none',
      }}
    >
      <div
        className="loading-progress"
        style={{
          height: '100%',
          width: `${progress}%`,
          background: '#6f4ab9',
          transition: progress === 0 ? 'none' : `width ${progress === 100 ? 0.2 : 0.3}s ease-out`,
          borderRadius: '0 2px 2px 0',
          boxShadow: '0 0 10px #6f4ab9',
        }}
      />
    </div>
  );
};

export default LoadingBar;
