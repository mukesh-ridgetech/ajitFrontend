import React from "react";

const AboutVision = () => {
  return (
    <div className="about-vision-container">
      <div className="about-vision-animated-box">
        <div className="about-vision-animated-box-upper">
          <div className="about-vision-text-box">
            <h4 className="about-vision-animated-box-upper-heading">
              Our Vision & Mission
            </h4>
          </div>
          <div className="about-vision-animated-box-upper-image">
            <img src="/images/vi1.png" alt="" />

            <div className="about-vision-animated-box-upper-image-text">
              <h6 className="vision-heading">Mission</h6>
              <p className="vision-para">
                At Leadership Ladder, we are committed to providing world-class
                coaching and development programs that inspire growth, foster
                excellence, and drive sustainable success. We aim to equip
                individuals with the tools and mindset needed to navigate
                challenges, embrace opportunities, and achieve meaningful
                outcomes.
              </p>
            </div>
          </div>
        </div>
        <div className="about-vision-animated-box-upper-image">
          <img src="/images/vi2.png" alt="" />
          <div className="about-vision-animated-box-upper-image-text1">
            <h6 className="vision-heading1">Vision</h6>
            <p className="vision-para1">
              To empower individuals and organizations to climb the ladder of
              growth with confidence, clarity, and purpose, unlocking their full
              potential to create a transformative impact on their lives and the
              world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
