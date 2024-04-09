import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  // Function to get current time
  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert hours to 12-hour format
    const minutes = now.getMinutes();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  }

  // Function to update current time every minute
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div>
        {currentTime}
    </div>
  );
};

export default Clock;
