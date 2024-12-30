"use client";
import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Initial progress values
// const initialValues = [
//   { percentage: 0, target: 50 },
//   { percentage: 0, target: 70 },
//   { percentage: 0, target: 90 },
//   { percentage: 0, target: 60 },
// ];

const ProgressCircle = ({ initialValues = [], isHovered }) => {
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

  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgressBars((prevBars) =>
  //       prevBars.map((bar) => {
  //         if (bar?.percentage < bar?.target) {
  //           return { ...bar, percentage: bar?.percentage + 1 }; // Increase percentage by 1
  //         } else {
  //           return bar; // No change if the target is already reached
  //         }
  //       })
  //     );
  //   }, 10); // Update progress every 100ms

  //   return () => clearInterval(interval); // Clean up interval when the component unmounts
  // }, []);

  useEffect(() => {
    let interval;

    if (isHovered) {
      // Reset the percentages to 0 first
      // setProgressBars(initialValues.map((bar) => ({ ...bar, percentage: 0 })));

      // Start the interval after a short delay to ensure reset
      setTimeout(() => {
        interval = setInterval(() => {
          setProgressBars((prevBars) =>
            prevBars.map((bar) => {
              if (bar.percentage < bar.target) {
                return { ...bar, percentage: bar.percentage + 1 }; // Increment percentage
              } else {
                return bar; // Keep the bar unchanged if it reached the target
              }
            })
          );
        }, 100); // Update progress every 10ms
      }, 100); // Add a delay of 100ms to ensure reset is visible
    }

    return () => {
      if (interval) {
        clearInterval(interval); // Clear the interval when `isHovered` changes or component unmounts
      }
    };
  }, [isHovered, initialValues]);

  return (
    <div
      // style={{
      //   display: "flex",
      //   justifyContent: "space-around",
      //   marginTop: "50px",
      //   height: "auto",
      // }}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      className="progress-bar-container"
    >
      {progressBars?.map((bar, index) => (
        <div
          key={index}
          // style={{
          //   width: "100px",
          //   height: "100px",
          //   textAlign: "center",
          //   background: "#ffffff",
          //   borderRadius: "50%",
          // }}
          className="progress-bar-content-container"
        >
          {/* Progress Bar */}
          <CircularProgressbar
            value={bar?.percentage}
            text={`${bar?.percentage}%`}
            styles={buildStyles({
              textSize: "28px",
              pathColor: "#d78a25", // Color of the progress bar
              textColor: "#d78a25", // Color of the text inside the circle
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
