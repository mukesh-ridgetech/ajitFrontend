import React from "react";
import Image from "next/image";
const CoachingPower = () => {
  return (
    <div className="main-container">
      <div className="couching-main-contaier">
        <div className="couching-main-section">
          <div className="coaching-left-box">
            <h1 className="sub-heading">The Power of Coaching</h1>
            <p className="main-para">
              Limiting beliefs and external pressures can hold you back from
              achieving your true potential. Coaching empowers you to overcome
              these barriers, step out of your comfort zone, and make decisions
              aligned with your values. It's a transformative journey toward
              clarity, growth, and success.
            </p>
          </div>

          <div className="couching-right-box">
            <div className="couching-right-box-left">
              <Image
                src="/images/c1.png"
                alt="Description of the image"
                width={500}
                height={300}
              />
            </div>

            <div className="couching-right-box-right">
              <Image
                src="/images/c2.png"
                alt="Description of the image"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingPower;
