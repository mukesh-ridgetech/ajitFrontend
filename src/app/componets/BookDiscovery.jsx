"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
// import Modal from "react-modal";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

// Set the modal's app element for accessibility (specific to Next.js)
// if (typeof window !== "undefined") {
//   Modal.setAppElement("#__next");
// }

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleSelection = (event) => {
    const { value } = event.target;
    setSelectedType(value);
    setDisplayCorporateInput(value === "Enterprise");
  };

  // const handleSelection = (event) => {
  //   const { value } = event.target;
  //   setSelectedType(value);

  //   // Open modal if Enterprise is selected
  //   if (value === "Enterprise") {
  //     setOpen(true);
  //   } else {
  //     setOpen(false); // Close modal for Individual
  //   }
  // };

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
            <h4
              className="main-para11 md:text-left"
              style={{ marginBottom: "13px" }}
            >
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
                        selectedType === "Enterprise" ? "active" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="coachingType"
                        value="Enterprise"
                        checked={selectedType === "Enterprise"}
                        onChange={handleSelection}
                      />
                      Enterprise
                    </label>
                  </div>
                  {displayCorporateInput && (
                    <div className="corporate-class">
                      <input
                        type="text"
                        placeholder="Enter Company Name"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}
                </div>

                {/* <Modal
                  opened={isModalOpen}
                  onClose={closeModal}
                  title="Enter Company Name"
                  centered
                >
                  <TextInput
                    placeholder="Enter Company Name"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    label="Company Name"
                    withAsterisk
                  />
                  <Button onClick={closeModal} mt="md" fullWidth>
                    OK
                  </Button>
                </Modal> */}

                {/* <Modal open={open} onClose={onCloseModal} center>
                  <div className="corporate-class">
                    <input
                      type="text"
                      placeholder="Enter Company Name"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                </Modal> */}

                <div className="container-select">
                  <h3 className="select-option-label">
                    Select a Coaching Program
                  </h3>
                  <div className="radio-group">
                    <label
                      className={`radio-option ${
                        selectedProgram ===
                        "One-on-One Executive Coaching (Enterprise)"
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="coachingProgram"
                        value="One-on-One Executive Coaching (Enterprise)"
                        checked={
                          selectedProgram ===
                          "One-on-One Executive Coaching (Enterprise)"
                        }
                        onChange={handleChange}
                      />
                      One-on-One Executive Coaching (Enterprise)
                    </label>

                    <label
                      className={`radio-option ${
                        selectedProgram ===
                        "Stakeholder-Centered Coaching Business Leaders(Enterprise)"
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="coachingProgram"
                        value="Stakeholder-Centered Coaching Business Leaders(Enterprise)"
                        checked={
                          selectedProgram ===
                          "Stakeholder-Centered Coaching Business Leaders(Enterprise)"
                        }
                        onChange={handleChange}
                      />
                      Stakeholder-Centered Coaching-Business Leaders(Enterprise)
                    </label>
                    {/* <label
                      className={`radio-option ${
                        selectedProgram ===
                        "Stakeholder-Centered Coaching Business Leaders(Enterprise)"
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="coachingProgram"
                        value="Stakeholder-Centered Coaching Business Leaders(Enterprise)"
                        checked={
                          selectedProgram ===
                          "Stakeholder-Centered Coaching Business Leaders(Enterprise)"
                        }
                        onChange={handleChange}
                      />
                      Stakeholder-Centered Coaching Business Leaders
                      (Enterprise)
                    </label> */}
                    <label
                      className={`radio-option ${
                        selectedProgram === "One-on-One Coaching (Individual)"
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="coachingProgram"
                        value="One-on-One Coaching (Individual)"
                        checked={
                          selectedProgram === "One-on-One Coaching (Individual)"
                        }
                        onChange={handleChange}
                      />
                      One-on-One Coaching (Individual)
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
              className="book-recovery-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDiscovery;
