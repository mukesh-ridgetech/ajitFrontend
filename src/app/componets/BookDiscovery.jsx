"use client";
import React, { useState } from "react";
import Image from "next/image";
const BookDiscovery = () => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedCouching, setSelectedCouching] = useState("");

  const handleType = (event) => {
    setSelectedProgram(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedProgram(event.target.value);
  };
  return (
    <div className="main-container">
      <div className="book-apointment-main-container">
        <div className="book-apointment-main-container-form">
          <div className="book-apointment-main-container-form-left">
            <h2 className="sub-heading">Book Your Discovery Call</h2>
            <h4 className="main-para">
              Elevate your journey. Discover how personalized coaching can
              unlock your full potential. Fill in the information below to get
              started.
            </h4>

            <div className="book-apointement-form">
              <div className="fist-name">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Enter Email" />
                <input type="phone" placeholder="Enter Phone" />
              </div>

              <div className="container-select">
                <h3 className="select-option-label">Select a Coaching Type</h3>
                <div className="radio-group">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="coachingtype"
                      value="individual"
                      checked={setSelectedProgram === "individual"}
                      onChange={handleType}
                    />
                    Individual
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="coachingtype"
                      value="corporate"
                      checked={setSelectedProgram === "corporate"}
                      onChange={handleType}
                    />
                    Corporate
                  </label>

                  {selectedCouching === "corporate" ? (
                    <>
                      <input type="text" />
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="container-select">
                <h3 className="select-option-label">
                  Select a Coaching Program
                </h3>
                <div className="radio-group">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="coachingProgram"
                      value="executive"
                      checked={selectedProgram === "executive"}
                      onChange={handleChange}
                    />
                    One-on-One Executive Coaching
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="coachingProgram"
                      value="personal"
                      checked={selectedProgram === "personal"}
                      onChange={handleChange}
                    />
                    One-on-One Coaching (Personal/Professional Growth)
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="coachingProgram"
                      value="business"
                      checked={selectedProgram === "business"}
                      onChange={handleChange}
                    />
                    Stakeholder-Centered Coaching for Business Leaders
                  </label>
                </div>
              </div>

              <div style={{ marginTop: "20px" }}>
                <button className="navbar-button">Send Message</button>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/book.png"
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

export default BookDiscovery;
