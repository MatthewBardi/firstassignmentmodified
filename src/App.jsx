import React, { useState, useEffect } from 'react';
import './App.css';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const countdownDate = new Date();
    countdownDate.setMinutes(countdownDate.getMinutes() + 5); 

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = countdownDate - now;

      if (difference > 0) {
        setTimeLeft(difference);
      } else {
        clearInterval(interval);
        setTimeLeft(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="countdown">
      {formatTime(timeLeft)}
    </div>
  );
};

export default CountdownTimer;
