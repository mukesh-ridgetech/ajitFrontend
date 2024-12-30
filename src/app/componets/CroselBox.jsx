import React from "react";

const CroselBox = ({ i1, text, bg }) => {
  return (
    <div>
      <div className="marques-box-container" style={{ background: `${bg}` }}>
        <div>
          <img src={i1} alt="" style={{ height: "70px" }} />
          {/* <div className="marque-line"></div> */}
        </div>

        <h1 className="marque-text">{text}</h1>
      </div>
    </div>
  );
};

export default CroselBox;
