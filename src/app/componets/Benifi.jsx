import React from "react";

const Benifi = () => {
  return (
    <div className="main-container">
      <div className="benifit-main-container">
        <h1 className="benifit-heading">Who Can Benefit from This Coaching?</h1>
        <div className="benifit-box-container">
          <div className="benifite-box" style={{ background: "#f5ce67" }}>
            <img src="/images/be1.png" alt="" style={{ width: "80px" }} />
            <div>
              <p className="benifit-para">Emerging Leaders</p>
            </div>
          </div>

          <div className="benifite-box" style={{ background: "#E9F3FF" }}>
            <img src="/images/be2.png" alt="" style={{ width: "80px" }} />
            <p className="benifit-para">Established Professionals</p>
          </div>

          <div className="benifite-box" style={{ background: "#767BF3" }}>
            <img src="/images/be2.png" alt="" style={{ width: "80px" }} />
            <p className="benifit-para">Senior Executives</p>
          </div>

          <div className="benifite-box" style={{ background: "#E59AA9" }}>
            <img src="/images/be4.png" alt="" style={{ width: "80px" }} />
            <p className="benifit-para">EmEntrepreneurs</p>
          </div>

          <div className="benifite-box" style={{ background: "#E8D9EC" }}>
            <img src="/images/be5.png" alt="" style={{ width: "80px" }} />
            <p className="benifit-para">Career Changers</p>
          </div>

          <div className="benifite-box" style={{ background: "#D2B3DB" }}>
            <img src="/images/be5.png" alt="" style={{ width: "80px" }} />
            <p className="benifit-para">Individuals Seeking Personal Growth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifi;
