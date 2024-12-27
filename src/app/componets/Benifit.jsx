import React from "react";
import CouachingBox from "./CouachingBox";
const Benifit = () => {
  return (
    <div className="main-container">
      <div className="binifit-sectioin-main-container">
        <h1 className="benifit-section-main-heading">
          Who Can Benefit from This Coaching?
        </h1>
        <div className="benifix-box-container-section">
          <CouachingBox
            text={"Corporate Executives"}
            im={"/images/bee1.png"}
            bg={"#767BF3"}
          />
          <CouachingBox
            text={"Senior Managers"}
            im={"/images/bee2.png"}
            bg={"#F5CE67"}
          />
          <CouachingBox
            text={"Team Leaders"}
            im={"/images/bee3.png"}
            bg={"#E59AA9"}
          />
        </div>

        <div className="benifit-para-section-now">
          <div className="benifit-para-section-now-box">
            <h1 className="benifit-section-main-heading">
              Why Choose Stakeholder Centered Coaching?
            </h1>
          </div>

          <div className="benifit-para-section-now-box1">
            <p className="para">
              A distinctive methodology that places stakeholders at the core,
              utilizing Feedforward to enhance selected leadership skills. This
              approach emphasizes both behavioral change and perception shifts,
              ensuring measurable and impactful results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifit;
