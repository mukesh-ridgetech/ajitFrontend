"use client";
import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Initial progress values
const initialValues = [
  { percentage: 0, target: 50 },
  { percentage: 0, target: 70 },
  { percentage: 0, target: 90 },
  { percentage: 0, target: 60 },
];

const ProgressCircle = () => {
  // State for managing the percentage and target for each progress bar
  const [progressBars, setProgressBars] = useState(initialValues);

  // Handle user input for each progress bar
  const handleTargetChange = (index, event) => {
    const newTarget = parseInt(event.target.value, 10);
    setProgressBars((prevBars) =>
      prevBars.map((bar, i) =>
        i === index ? { ...bar, target: newTarget } : bar
      )
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressBars((prevBars) =>
        prevBars.map((bar) => {
          if (bar.percentage < bar.target) {
            return { ...bar, percentage: bar.percentage + 1 }; // Increase percentage by 1
          } else {
            return bar; // No change if the target is already reached
          }
        })
      );
    }, 10); // Update progress every 100ms

    return () => clearInterval(interval); // Clean up interval when the component unmounts
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "50px",
      }}
    >
      {progressBars.map((bar, index) => (
        <div
          key={index}
          style={{ width: "200px", height: "200px", textAlign: "center" }}
        >
          {/* Progress Bar */}
          <CircularProgressbar
            value={bar.percentage}
            text={`${bar.percentage}%`}
            styles={buildStyles({
              pathColor: "#f1c40f", // Color of the progress bar
              textColor: "#f1c40f", // Color of the text inside the circle
              trailColor: "#e0e0e0", // Background circle color
              strokeLinecap: "round", // Rounded edges for the progress path
              pathTransitionDuration: 0.5, // Smooth animation of progress
            })}
          />
        </div>
      ))}
    </div>
  );
};

export default ProgressCircle;
