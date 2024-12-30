"use client";
import React, { useState } from "react";
import Progress from "./Progress";
const Impact = () => {
  const initialValues = [
    { percentage: 0, target: 80, text: "Improved Work Performance" },
    { percentage: 0, target: 73, text: "Improved Business Management" },
    { percentage: 0, target: 72, text: "Improved Time Management" },
    { percentage: 0, target: 51, text: "Improved Team Effectiveness" },
  ];

  const initialValues1 = [
    { percentage: 0, target: 70, text: "Improved Work Performance" },
    { percentage: 0, target: 61, text: "Improved Business Management" },
    { percentage: 0, target: 57, text: "Improved Time Management" },
    { percentage: 0, target: 51, text: "Improved Team Effectiveness" },
  ];

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="main-container">
      <div className="impact-main-container">
        <div className="impact-heading-main-container">
          <h1 className="impact-heading-main-container-heading">
            Impact of Coaching
          </h1>
          <p className="impact-heading-main-container-para">
            A study conducted by Bersin & Associates shows that organizations
            with senior leaders who coach effectively and frequently improve
            their business results by 21% as compared to those who never coach.
          </p>
        </div>
        <div
          className="imapact-progress-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="imapact-progress-container-left">
            <h4 className="imapact-progress-container-left-heading">
              Increased Productivity
            </h4>
            <h6 className="imapact-progress-container-left-semi-heading">
              Professional coaching maximizes potential and, therefore, unlocks
              latent sources of productivity
            </h6>

            <Progress initialValues={initialValues} isHovered={isHovered} />
            <div className="imapact-progress-container-left-text">
              <div className="imapact-progress-container-left-text-para-box">
                <p className="imapact-progress-container-left-text-para">
                  Improved Work Performance
                </p>
              </div>

              <div className="imapact-progress-container-left-text-para-box">
                <p className="imapact-progress-container-left-text-para">
                  Improved Business Management
                </p>
              </div>
              <div className="imapact-progress-container-left-text-para-box">
                <p className="imapact-progress-container-left-text-para">
                  Improved Time Management
                </p>
              </div>
              <div className="imapact-progress-container-left-text-para-box">
                <p className="imapact-progress-container-left-text-para">
                  Improved Team Effectiveness
                </p>
              </div>
            </div>
          </div>
          <div className="imapact-progress-container-right">
            <h4 className="imapact-progress-container-left-heading">
              Positive People
            </h4>
            <h6 className="imapact-progress-container-left-semi-heading">
              Building the self-cofidence of employees to face challenges is
              critical in meeting organizational demands.
            </h6>

            <Progress initialValues={initialValues1} isHovered={isHovered} />
            <div className="imapact-progress-container-left-text">
              <div className="imapact-progress-container-left-text-para-box">
                <p className="imapact-progress-container-left-text-para">
                  Improved Self- Confidence
                </p>
              </div>

              <div className="imapact-progress-container-left-text-para-box">
                <p className="imapact-progress-container-left-text-para">
                  Improved Relationships
                </p>
              </div>
              <div className="imapact-progress-container-left-text-para-box">
                <p className="imapact-progress-container-left-text-para">
                  Improved Communication Skills
                </p>
              </div>
              <div className="imapact-progress-container-left-text-para-box">
                <p className="imapact-progress-container-left-text-para">
                  Improved Life/ Work Life Balance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
