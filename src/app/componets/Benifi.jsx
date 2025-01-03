import React from "react";

const Benifi = () => {
  return (
    <div className="main-container">
      <div className="benifit-main-container">
        <h1 className="benifit-heading">Who Can Benefit from This Coaching?</h1>
        <div className="benifit-box-container">
          <div className="benifite-box" style={{ background: "#f5ce67" }}>
            <div>
              <img
                src="/images/be1.png"
                alt=""
                // style={{ height: "70px", marginBottom: "10px" }}
                className="Couching-box-images"
              />
              <div className="line-box"></div>
            </div>

            <div>
              <p className="benifit-para">Emerging Leaders</p>
            </div>
          </div>

          <div className="benifite-box" style={{ background: "#E9F3FF" }}>
            <div>
              <img
                src="/images/be2.png"
                alt=""
                className="Couching-box-images"
              />
              <div className="line-box5 md:w-[70px] lg:w-[130px]"></div>
            </div>
            <p className="benifit-para">Established Professionals</p>
          </div>

          <div className="benifite-box" style={{ background: "#767BF3" }}>
            <div>
              <img
                src="/images/be3.png"
                alt=""
                className="Couching-box-images"
              />
              <div className="line-box"></div>
            </div>
            <p className="benifit-para">Senior Executives</p>
          </div>

          <div className="benifite-box" style={{ background: "#E59AA9" }}>
            <div>
              <img
                src="/images/be4.png"
                alt=""
                className="Couching-box-images"
              />
              <div className="line-box"></div>
            </div>
            <p className="benifit-para">Entrepreneurs</p>
          </div>

          <div className="benifite-box" style={{ background: "#E8D9EC" }}>
            <div>
              <img
                src="/images/be5.png"
                alt=""
                className="Couching-box-images"
              />
              <div className="line-box"></div>
            </div>
            <p className="benifit-para">Career Changers</p>
          </div>

          <div className="benifite-box" style={{ background: "#D2B3DB" }}>
            <div>
              <img
                src="/images/be6.png"
                alt=""
                className="Couching-box-images"
              />
              <div className="line-box"></div>
            </div>
            <p className="benifit-para">Individuals Seeking Personal Growth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifi;
