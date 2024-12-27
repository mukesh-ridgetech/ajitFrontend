import React from "react";

const CouachingBox = ({ text, im, bg }) => {
  return (
    <div>
      <div className="Couching-div-box-main" style={{ background: `${bg}` }}>
        <img src={im} alt="" style={{ width: "80px" }} />
        <h1 className="marque-text-now">{text}</h1>
      </div>
    </div>
  );
};

export default CouachingBox;
