"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
const BookDiscovery = () => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedType, setSelectedType] = useState(""); // Tracks the selected radio button
  const [displayCorporateInput, setDisplayCorporateInput] = useState(false); // Tracks whether to show additional input
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSelection = (event) => {
    const { value } = event.target;
    setSelectedType(value);
    setDisplayCorporateInput(value === "corporate");
  };

  const handleChange = (event) => {
    setSelectedProgram(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      access_key: "4bd1a050-9fb5-4786-b778-2a4578ac671a", // Your Web3Forms access key
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      program: selectedProgram,
      coachingType: selectedType,
      company: formData.company || "N/A", // Default to "N/A" if not corporate
    };

    try {
      const response = await axios.post(
        "https://api.web3forms.com/submit",
        payload
      );
      if (response.data.success) {
        alert("Your message has been sent successfully!");
        // Reset the form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        setSelectedProgram("");
        setSelectedType("");
        setDisplayCorporateInput(false);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Failed to send your message. Please try again later.");
    }
  };
  return (
    <div className="main-container">
      <div className="book-apointment-main-container" id="book-discovery">
        <div className="book-apointment-main-container-form">
          <div className="book-apointment-main-container-form-left">
            <h2 className="sub-heading">Book Your Discovery Call</h2>
            <h4 className="main-para" style={{ marginBottom: "13px" }}>
              Elevate your journey. Discover how personalized coaching can
              unlock your full potential. Fill in the information below to get
              started.
            </h4>

            <form onSubmit={handleSubmit}>
              <div className="book-apointment-form">
                <div className="fist-name">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Enter Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="container-select">
                  <h3 className="select-option-label">
                    Select a Coaching Type
                  </h3>
                  <div className="radio-group1">
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
                  {displayCorporateInput && (
                    <div className="corporate-class">
                      <input
                        type="text"
                        placeholder="Enter Company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}
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

                <textarea
                  id="textarea"
                  name="message"
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
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>

                <div style={{ marginTop: "20px" }}>
                  <button type="submit" className="navbar-button">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="book-apointment-right-image">
            <img
              src="/images/ft1.png"
              alt="Description of the image"
              style={{ height: "630px", width: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDiscovery;
