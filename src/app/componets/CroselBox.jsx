import React from "react";

const CroselBox = ({ i1, text, bg }) => {
  return (
    <div>
      <div className="marques-box-container" style={{ background: `${bg}` }}>
        <img src={i1} alt="" style={{ width: "80px" }} />
        <div className="marque-line"></div>
        <h1 className="marque-text">{text}</h1>
      </div>
    </div>
  );
};

export default CroselBox;
