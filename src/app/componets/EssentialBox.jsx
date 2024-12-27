import React from "react";

const EssentialBox = ({ data, im, heading, bg }) => {
  return (
    <div className="Essential-Box" style={{ background: `${bg}` }}>
      <div className="Essential-Box-top">
        <img src={im} alt="" className="essential-image" />
        <div className="Essential-Box-top-heading-box">
          <h2 className="Essential-Box-top-heading-box-heading">{heading}</h2>
        </div>
      </div>
      <div className="Essential-Box-top-list">
        {
          <ul>
            {data?.map((item) => {
              return (
                <>
                  <li>
                    <p className="essential-para">{item.text}</p>
                  </li>
                </>
              );
            })}
          </ul>
        }
      </div>
    </div>
  );
};

export default EssentialBox;
