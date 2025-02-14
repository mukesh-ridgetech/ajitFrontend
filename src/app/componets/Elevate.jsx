// Elevate.js
"use client";
import React from "react";
const scrollToBookDiscovery = () => {
  const targetSection = document.getElementById("book-discovery");
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
};

const Elevate = () => {
  return (
    <div className="elevate">
      {/* Background Video */}
      <video className="elevate__video-bg" autoPlay loop muted>
        <source src="/images/video.mp4" type="video/mp4" />
        <h4 className="evaluate">Elevate Every Aspect of Your Life</h4>
      </video>

      {/* Overlay Content */}
      <div className="elevate__overlay">
        <div className="overlay-content">
          <h1 className="elevate__heading">
            Elevate Every Aspect of Your Life
          </h1>
          <p className="elevate__description">
            Turn your potential into reality with proven global coaching
            frameworks, bridging the gap between who you are and who you aspire
            to become.
          </p>
        </div>

        <button
          className="navbar-button"
          style={{ margin: "auto" }}
          onClick={scrollToBookDiscovery}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Elevate;
