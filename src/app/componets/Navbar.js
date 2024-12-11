"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const handleActive = (item) => {
    setActive(item);
  };
  return (
    <div className="navbar-container1">
      <div className="navbar-left-container">
        <div className="navbar-logo-button"></div>
        <div className="navbar-link-item">
          <ul>
            <li
              className={` ${active === "Home" ? "active" : ""}`}
              onClick={() => {
                handleActive("Home");
              }}
            >
              <a href="#">Home</a>
            </li>

            <li
              onClick={() => {
                handleActive("About Us");
              }}
              className={` ${active === "About Us" ? "active" : ""}`}
            >
              <a href="#">About Us</a>
            </li>

            <li
              onClick={() => {
                handleActive("Coaching");
              }}
              className={` ${active === "Coaching" ? "active" : ""}`}
            >
              <a href="#">Coaching</a>
            </li>

            <li
              onClick={() => {
                handleActive("Blog");
              }}
              className={` ${active === "Blog" ? "active" : ""}`}
            >
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <button className="navbar-button">Contact Us</button>
    </div>
  );
};

export default Navbar;
