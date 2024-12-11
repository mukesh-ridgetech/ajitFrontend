"use client";

import React, { useState } from "react";

const CustomModel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        style={{ padding: "10px 20px", cursor: "pointer", background: "pink" }}
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Custom Modal</h2>
            <p>
              This is a custom modal with a black background and blue border.
            </p>
            <button
              onClick={closeModal}
              style={{ padding: "10px 20px", cursor: "pointer" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomModel;

/* Add the following styles in App.css */
