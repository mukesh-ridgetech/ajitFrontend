import React from "react";

const Footer = () => {
  return (
    <div className="main-container">
      <div className="footer-main-section">
        <div className="footer-content-section">
          <div className="footer-logo">
            <img src="/images/logo1.png" alt="" style={{ height: "55px" }} />
          </div>
          <div className="footer-heading">
            <h4>Contact Us</h4>
          </div>

          <div className="footer-navbar">
            <p className="footer-email">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M4.30775 19.75C3.80258 19.75 3.375 19.575 3.025 19.225C2.675 18.875 2.5 18.4474 2.5 17.9423V6.55775C2.5 6.05258 2.675 5.625 3.025 5.275C3.375 4.925 3.80258 4.75 4.30775 4.75H19.6923C20.1974 4.75 20.625 4.925 20.975 5.275C21.325 5.625 21.5 6.05258 21.5 6.55775V17.9423C21.5 18.4474 21.325 18.875 20.975 19.225C20.625 19.575 20.1974 19.75 19.6923 19.75H4.30775ZM12 12.8077L4 7.69225V17.9423C4 18.0321 4.02883 18.1058 4.0865 18.1635C4.14417 18.2212 4.21792 18.25 4.30775 18.25H19.6923C19.7821 18.25 19.8558 18.2212 19.9135 18.1635C19.9712 18.1058 20 18.0321 20 17.9423V7.69225L12 12.8077ZM12 11.25L19.8463 6.25H4.15375L12 11.25ZM4 7.69225V6.25V17.9423C4 18.0321 4.02883 18.1058 4.0865 18.1635C4.14417 18.2212 4.21792 18.25 4.30775 18.25H4V7.69225Z"
                  fill="#F2F2F2"
                />
              </svg>
              ajit@leadershipladder.in
            </p>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/about">About Us</a>
              </li>

              <li>
                <a href="/executive">Coaching</a>
              </li>

              <li>
                <a href="/blog">Blog</a>
              </li>

              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright-section">
          <p>Copyright ©2024 All rights reserved </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
