// Timer.js
import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer = null;

    if (isRunning) {
      // Start the timer if it's running
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    // Clean up the interval when the component unmounts or when the timer stops
    return () => clearInterval(timer);
  }, [isRunning]);

  // Helper function to handle the button click and toggle the timer
  const handleStartButtonClick = () => {
    setIsRunning(!isRunning);
  };

  // Helper function to format the seconds as "HH:mm:ss"
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div>
      <h1>Timer</h1>
      <p>{formatTime(seconds)}</p>
      <button
        onClick={handleStartButtonClick}
        className="bg-yellow-500 px-4 py-2 rounded text-white"
      >
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default Timer;
