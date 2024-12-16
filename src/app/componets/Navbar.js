"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
const Navbar = ({ type }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(type);

  const handleActive = (item) => {
    setActive(item);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="navbar-container1">
      <div className="navbar-left-container">
        <div className="navbar-logo-button"></div>

        <div className="nav-hidden">
          <div className="navbar-link-item">
            <ul>
              <li
                className={` ${active === "Home" ? "active" : ""}`}
                onClick={() => {
                  handleActive("Home");
                }}
              >
                <a href="/">Home</a>
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
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>

          <button className="navbar-button">Contact Us</button>
        </div>

        <button className="menu-icon mobile" onClick={handleMenuClick}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}

      {menuOpen && (
        <div className="mobile-menu">
          <div className="nav-hidden1">
            <div className="navbar-link-item1">
              <ul>
                <li
                  className={` ${active === "Home" ? "active" : ""}`}
                  onClick={() => {
                    handleActive("Home");
                  }}
                >
                  <a href="/">Home</a>
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
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </div>

            <button className="navbar-button">Contact Us</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
