import React from "react";

const CoauchingHero = () => {
  return (
    <div className="elevate1">
      <video className="elevate__video-bg1" autoPlay loop muted>
        <source src="/images/cv.mp4" type="video/mp4" />
        <h4 className="evaluate">Elevate Every Aspect of Your Life</h4>
      </video>

      <div className="couaching-hero-heading-box">
        <h1 className="couaching-hero-heading">
          One-on-One Executive Coaching (Enterprise)
        </h1>
      </div>

      <div className="couching-button">
        <button className="navbar-button">Get in Touch</button>
      </div>
    </div>
  );
};

export default CoauchingHero;
