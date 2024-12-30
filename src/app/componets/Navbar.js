"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
const Navbar = ({ type }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(type);
  const [dropdown, setDropDown] = useState(false);

  const handleActive = (item) => {
    setActive(item);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdown = () => {
    setDropDown(!dropdown);
  };

  return (
    <div className="navbar-container1">
      <div className="navbar-left-container">
        <div className="navbar-logo-button">
          <img src="/images/logo.png" alt="" />
        </div>

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
                <a href="/about">About Us</a>
              </li>

              <li
                // onClick={() => {
                //   handleActive("Coaching");
                // }}

                onClick={handleDropdown}
                className={` ${active === "Coaching" ? "active" : ""}`}
              >
                <a href="#">Coaching</a>
              </li>

              {dropdown && (
                <div className="Nav-dropdown-content">
                  <ul>
                    <li>
                      <a href="/executive">
                        One-on-One Executive Coaching (Enterprise)
                      </a>
                    </li>

                    <li>
                      <a href=" /stake-holder">
                        Stakeholder-Centered Coaching for Business Leaders
                        (Enterprise)
                      </a>
                    </li>

                    <li>
                      <a href="/coaching">
                        One-on-One Coaching (Personal/Professional Growth)-
                        Individual
                      </a>
                    </li>
                  </ul>
                </div>
              )}

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
                  <a href="/about">About Us</a>
                </li>

                <li
                  // onClick={() => {
                  //   handleActive("Coaching");
                  // }}

                  onClick={handleDropdown}
                  className={` ${active === "Coaching" ? "active" : ""}`}
                >
                  <a href="#">Coaching</a>
                </li>

                {dropdown && (
                  <div className="Nav-dropdown-mobile">
                    <ul>
                      <li>
                        <a href="/executive">
                          One-on-One Executive Coaching (Enterprise)
                        </a>
                      </li>

                      <li>
                        <a href=" /stake-holder">
                          Stakeholder-Centered Coaching for Business Leaders
                          (Enterprise)
                        </a>
                      </li>

                      <li>
                        <a href="/coaching">
                          One-on-One Coaching (Personal/Professional Growth)-
                          Individual
                        </a>
                      </li>
                    </ul>
                  </div>
                )}

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

            {/* <button className="navbar-button">Contact Us</button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
