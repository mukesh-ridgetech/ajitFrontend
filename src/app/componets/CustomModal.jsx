"use client";

import React, { useState } from "react";

const CustomModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="open-modal-btn" onClick={openModal}>
        Open Modal
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              ✖
            </button>
            <div className="modal-body">
              <div className="option">
                <div className="circle">
                  <img
                    src="https://via.placeholder.com/50" // Replace with a real Individual icon image URL
                    alt="Individual"
                  />
                </div>
                <p className="label">Individual</p>
              </div>
              <div className="option">
                <div className="circle">
                  <img
                    src="https://via.placeholder.com/50" // Replace with a real Corporate icon image URL
                    alt="Corporate"
                  />
                </div>
                <p className="label purple">Corporate</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;
