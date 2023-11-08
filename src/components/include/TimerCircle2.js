import React, { useState, useEffect } from 'react';

const TimerCircle2 = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // For demonstration purposes, increment percentage every second
    const interval = setInterval(() => {
      setPercentage((prev) => (prev + 1) % 101);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Calculate the stroke dash array based on the percentage
  const radius = 95; // Radius of the circle path
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

  return (
    <div className='timer__circle'>
      <svg width="200" height="200" viewBox="0 0 200 200">
        {/* Background circle */}
        <circle cx="100" cy="100" r="95" fill="transparent" stroke="black" strokeWidth="5" />
        
        {/* Progress path */}
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="transparent"
          stroke="red"
          strokeWidth="5"
          strokeDasharray={strokeDasharray}
          transform="rotate(-90 100 100)" // Rotate to start from the top
        />
      </svg>
      {/* Rotating point */}
      <div
        style={{
          position: 'absolute',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: 'red',
          top: '5px', // Adjust to center the point on the path
          left: '50%',
          transform: `rotate(${(percentage / 100) * 360}deg)`,
          transformOrigin: '50% 100px',
        }}
      />
    </div>
  );
};

export default TimerCircle2;
