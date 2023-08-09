// import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Map from "../Map";

import React, { useState, useEffect } from "react";
// import emailjs from "emailjs-com";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Map from "../Map";

// import YourImage from "path/to/your/image.jpg"; // Import your image here

const binhodoro = () => {
  const [time, setTime] = useState(25 * 60); // Initial time in seconds (25 minutes)
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
      // Send completion email or perform other actions here
      toast.success("Pomodoro completed!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, time]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(25 * 60); // Reset time to 25 minutes
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <div className="container">
        <div className="tokyo_tm_contact">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Binhodoro</span>
                <h3>Be productive Davis.</h3>
              </div>
            </div>
          </div>
          {/* END TITLE */}

          {/* <img src={YourImage} alt="Your Image" /> Insert your image here */}

          {/* Pomodoro Timer */}
          <div className="pomodoro-timer">
            <div className="timer-display">
              <span>{formatTime(time)}</span>
            </div>
            <div className="timer-buttons">
              {!isRunning ? (
                <button onClick={startTimer}>Start</button>
              ) : (
                <button onClick={stopTimer}>Stop</button>
              )}
              <button onClick={resetTimer}>Reset</button>
            </div>
          </div>
          {/* END Pomodoro Timer */}

          {/* MENU WRAP */}
        </div>
      </div>
      {/* END COTACT */}
    </>
  );
};

export default binhodoro;
