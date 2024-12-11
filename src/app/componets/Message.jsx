import React from "react";
import Image from "next/image";
const Message = () => {
  return (
    <div className="main-container">
      <div className="message-main-conatainer">
        <div className="maessage-content">
          <div className="message-content-left">
            <h1 className="sub-heading">Message from Ajit</h1>
            <p className="main-para">
              "I’m here to challenge you to see beyond the familiar, broaden
              your perspective, and explore new horizons. Coaching is more than
              guidance; it’s a space where you’re supported, heard, and truly
              understood. As your coach, I bring neutrality, non-judgment, and
              the belief that we are all flawless in our journey of growth.
              Let’s achieve the extraordinary together."
            </p>
          </div>
          <div className="message-content-right">
            <Image
              src="/images/m1.png"
              alt="Description of the image"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
