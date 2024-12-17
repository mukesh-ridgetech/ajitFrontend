"use client";
import React, { useState } from "react";
import Image from "next/image";
const BookDiscovery = () => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedCouching, setSelectedCouching] = useState("");

  const [selectedType, setSelectedType] = useState(""); // Tracks the selected radio button
  const [displayCorporateInput, setDisplayCorporateInput] = useState(false); // Tracks whether to show additional input

  const handleSelection = (event) => {
    const { value } = event.target;
    setSelectedType(value);
    setDisplayCorporateInput(value === "corporate");
  };

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
            <h4 className="main-para" style={{ marginBottom: "13px" }}>
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
                <div className="radio-group1">
                  <div>
                    <label
                      className={`radio-option ${
                        selectedType === "individual" ? "active" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="coachingType"
                        value="individual"
                        checked={selectedType === "individual"}
                        onChange={handleSelection}
                      />
                      Individual
                    </label>
                    <label
                      className={`radio-option ${
                        selectedType === "corporate" ? "active" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="coachingType"
                        value="corporate"
                        checked={selectedType === "corporate"}
                        onChange={handleSelection}
                      />
                      Corporate
                    </label>
                  </div>

                  <div>
                    {displayCorporateInput && (
                      <div className="corporate-class">
                        <input
                          type="text"
                          placeholder="Enter Company"
                          className="corporate-input"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="container-select">
                <h3 className="select-option-label">
                  Select a Coaching Program
                </h3>
                <div className="radio-group">
                  <label
                    className={`radio-option ${
                      selectedProgram === "executive" ? "active" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="coachingProgram"
                      value="executive"
                      checked={selectedProgram === "executive"}
                      onChange={handleChange}
                    />
                    One-on-One Executive Coaching
                  </label>
                  <label
                    className={`radio-option ${
                      selectedProgram === "personal" ? "active" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="coachingProgram"
                      value="personal"
                      checked={selectedProgram === "personal"}
                      onChange={handleChange}
                    />
                    One-on-One Coaching (Personal/Professional Growth)
                  </label>
                  <label
                    className={`radio-option ${
                      selectedProgram === "business" ? "active" : ""
                    }`}
                  >
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

              <div>
                <textarea
                  id="textarea"
                  name="textarea"
                  rows="3"
                  style={{
                    width: "100%", // Make it responsive
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #22272C",
                    background: "#050709",
                    color: "white",
                    marginTop: "20px",
                  }}
                  placeholder="Query/Message"
                ></textarea>
              </div>

              <div style={{ marginTop: "20px" }}>
                <button className="navbar-button">Send Message</button>
              </div>
            </div>
          </div>

          <div className="book-apointment-right-image">
            <img
              src="/images/ft1.png"
              alt="Description of the image"
              style={{ height: "670px", width: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDiscovery;
