import React from "react";
import CouachingBox from "./CouachingBox";
const Bebifit1 = () => {
  return (
    <div className="main-container">
      <div className="binifit-sectioin-main-container">
        <h1 className="benifit-section-main-heading">
          Who Can Benefit from This Coaching?
        </h1>
        <div className="benifix-box-container-section1">
          <CouachingBox
            text={"Corporate Executives"}
            im={"/images/bee1.png"}
            bg={"#F5CE67"}
          />

          <CouachingBox
            text={"Organization Leaders"}
            im={"/images/bee3.png"}
            bg={"#767BF3"}
          />
        </div>
      </div>
    </div>
  );
};

export default Bebifit1;
