// components/CustomCarousel.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaLinkedin } from "react-icons/fa6";
import h1 from "/public/images/h1.png";
import CustomModal from "./CustomModal";
const Hero = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  const questions = [
    {
      id: 1,
      question:
        "What area of your life would you like the most clarity and direction in?",
      options: [
        "Defining clear goals and identifying actionable steps to pursue them.",
        "Building a meaningful career that aligns with my passions and core values.",
        "Achieving financial security and creating the life I envision.",
        "Harmonizing personal and professional priorities for a more balanced and fulfilling life.",
        "Finding purpose and building a deeper sense of self and identity.",
      ],
    },

    {
      id: 2,
      question: "How do you like to work towards personal growth?",
      options: [
        "Engaging in self-reflection and seeking personalized guidance to uncover my path.",
        "Working with a coach or mentor who provides accountability and support in reaching my goals.",
        "Embracing lifelong learning to adapt and thrive across various life areas, such as career, relationships, spirituality, and finances.",
        "Harmonizing personal and professional priorities for a more balanced and fulfilling life.",
        "Seeking immersive experiences that reignite my passions and focus on holistic growth.",
      ],
    },

    {
      id: 3,
      question:
        "What is your belief system with respect to your personal and professional growth?",
      options: [
        "I believe in continuous growth and that meaningful achievements come from consistent effort and evolution.",
        "Life’s goals and purpose are constantly evolving, and I need to invest time in self-reflection and skill enhancement.",
        "Past experiences shape limiting beliefs; regular guidance and support help me unlock my full potential.",
        "Harmonizing personal and professional priorities for a more balanced and fulfilling life.",
        "Time is a precious resource, and I must focus on high-impact actions to achieve my best self.",
      ],
    },

    {
      id: 4,
      question:
        "What kind of support do you feel would be most beneficial for your growth journey?",
      options: [
        "Structured guidance with actionable steps and regular check-ins.",
        "A listening ear and someone to challenge my thought process.",
        "Tools and resources to improve specific skills or areas of my life.",
        "Harmonizing personal and professional priorities for a more balanced and fulfilling life.",
        "Freedom to explore and experiment with occasional feedback.",
      ],
    },
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  // Handle answer selection
  const handleOptionChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  console.log("answer is now", answers);

  // Handle navigation
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      closeModal2();
      openModal4();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    // setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal2 = () => {
    setIsModalOpen2(true);
    setIsModalOpen(false);
    closeModal1();
    setAnswers({}); // Reset answers
    setCurrentQuestion(0); // Go back to the first question

    // setIsModalOpen(false);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  // CustomModal

  const [isOpen1, setIsOpen1] = useState(false);

  const openModal1 = () => {
    setIsOpen1(true);
    closeModal();
  };
  const closeModal1 = () => setIsOpen1(false);

  const [isModalOpen4, setIsModalOpen4] = useState(false);

  const openModal4 = () => {
    setIsModalOpen4(true);
    // setIsModalOpen(false);
  };

  const closeModal4 = () => {
    setIsModalOpen4(false);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="main-container">
      <div className="hero-main-section">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
        >
          <div
            className="crosel-item"
            // style={{
            //   width: "100%",
            //   height: "500px",
            // }}
          >
            <div className="hero-item-container">
              <div className="item-main">
                <h1 className="heading">Unlock Your Potential</h1>
                <h4 className="semi-heading">
                  Take charge, navigate your journey, and lead with clarity.
                </h4>

                <div className="hero-button-group">
                  <button className="hero-button1" onClick={openModal1}>
                    Take a Quiz
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="35"
                      viewBox="0 0 34 35"
                      fill="none"
                      className="quiz-rotate"
                    >
                      <g clip-path="url(#clip0_712_4375)">
                        <path
                          d="M20.225 18.2207C20.3981 18.0476 20.4846 17.8319 20.4846 17.5736C20.4846 17.3152 20.398 17.0994 20.2248 16.9262C20.0517 16.7531 19.8359 16.6665 19.5776 16.6665C19.3193 16.6665 19.1036 16.7531 18.9304 16.9262C18.7573 17.0993 18.6707 17.3151 18.6707 17.5734C18.6706 17.8318 18.7571 18.0476 18.9303 18.2207C19.1035 18.394 19.3193 18.4805 19.5778 18.4804C19.8361 18.4804 20.0518 18.3939 20.225 18.2207ZM17.6766 16.5155L18.5196 15.6725C18.2095 15.3443 18.0138 15.0664 17.9323 14.8388C17.8507 14.6113 17.8144 14.2292 17.8235 13.6926C17.837 13.0535 17.7948 12.5671 17.6969 12.2335C17.5991 11.9 17.4074 11.5904 17.1218 11.3049C16.6186 10.8017 16.0259 10.5643 15.3438 10.5928C14.6617 10.6213 14.0405 10.9157 13.4802 11.476C13.0424 11.9138 12.7781 12.4197 12.6874 12.9936C12.5968 13.5674 12.6797 14.1331 12.9363 14.6907L14.0213 14.2473C13.8555 13.842 13.7948 13.4745 13.8393 13.1446C13.8837 12.8145 14.0305 12.5248 14.2798 12.2756C14.5899 11.9655 14.9343 11.8005 15.3132 11.7806C15.6921 11.7607 16.0285 11.8976 16.3223 12.1914C16.5008 12.37 16.6178 12.5879 16.6732 12.8453C16.7284 13.1028 16.7456 13.4704 16.7248 13.948C16.6821 14.5927 16.7149 15.0666 16.8232 15.3699C16.9317 15.6732 17.2161 16.0551 17.6766 16.5155ZM18.1309 24.1767C17.7737 24.5339 17.3476 24.7125 16.8526 24.7125C16.3576 24.7125 15.9315 24.5339 15.5743 24.1767L7.52426 16.1266C7.16706 15.7694 6.98845 15.3433 6.98845 14.8484C6.98845 14.3534 7.16706 13.9273 7.52426 13.5701L15.5743 5.52004C15.9315 5.16283 16.3576 4.98423 16.8526 4.98423C17.3476 4.98423 17.7737 5.16283 18.1309 5.52004L26.1809 13.5701C26.5381 13.9273 26.7167 14.3534 26.7167 14.8484C26.7167 15.3433 26.5381 15.7694 26.1809 16.1266L18.1309 24.1767ZM17.0702 23.116L25.1203 15.066C25.1747 15.0115 25.2019 14.939 25.2018 14.8484C25.2019 14.7577 25.1747 14.6852 25.1203 14.6308L17.0702 6.5807C17.0158 6.52625 16.9432 6.49909 16.8526 6.4992C16.762 6.49909 16.6894 6.52625 16.635 6.5807L8.58492 14.6308C8.53048 14.6852 8.50331 14.7577 8.50343 14.8484C8.50331 14.939 8.53048 15.0115 8.58492 15.066L16.635 23.116C16.6894 23.1705 16.762 23.1977 16.8526 23.1975C16.9432 23.1976 17.0158 23.1705 17.0702 23.116ZM18.1309 29.1264C17.7737 29.4837 17.3476 29.6623 16.8526 29.6623C16.3576 29.6623 15.9315 29.4837 15.5743 29.1264L6.4636 20.0157L7.52426 18.9551L16.635 28.0658C16.6894 28.1202 16.762 28.1474 16.8526 28.1473C16.9432 28.1474 17.0158 28.1202 17.0702 28.0658L26.1809 18.9551L27.2416 20.0157L18.1309 29.1264Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_712_4375">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.0588379 17.5) rotate(-45)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>

                  <button className="hero-button2">
                    <h1
                      className="hero-h1-class"
                      style={{ marginRight: "10px" }}
                    >
                      Connect On LinkedIn
                    </h1>
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                      style={{ marginLeft: "10px" }}
                    >
                      <path
                        d="M23.75 4.25C24.413 4.25 25.0489 4.51339 25.5178 4.98223C25.9866 5.45107 26.25 6.08696 26.25 6.75V24.25C26.25 24.913 25.9866 25.5489 25.5178 26.0178C25.0489 26.4866 24.413 26.75 23.75 26.75H6.25C5.58696 26.75 4.95107 26.4866 4.48223 26.0178C4.01339 25.5489 3.75 24.913 3.75 24.25V6.75C3.75 6.08696 4.01339 5.45107 4.48223 4.98223C4.95107 4.51339 5.58696 4.25 6.25 4.25H23.75ZM23.125 23.625V17C23.125 15.9192 22.6957 14.8828 21.9315 14.1185C21.1672 13.3543 20.1308 12.925 19.05 12.925C17.9875 12.925 16.75 13.575 16.15 14.55V13.1625H12.6625V23.625H16.15V17.4625C16.15 16.5 16.925 15.7125 17.8875 15.7125C18.3516 15.7125 18.7967 15.8969 19.1249 16.2251C19.4531 16.5533 19.6375 16.9984 19.6375 17.4625V23.625H23.125ZM8.6 11.2C9.15695 11.2 9.6911 10.9788 10.0849 10.5849C10.4788 10.1911 10.7 9.65695 10.7 9.1C10.7 7.9375 9.7625 6.9875 8.6 6.9875C8.03973 6.9875 7.50241 7.21007 7.10624 7.60624C6.71007 8.00241 6.4875 8.53973 6.4875 9.1C6.4875 10.2625 7.4375 11.2 8.6 11.2ZM10.3375 23.625V13.1625H6.875V23.625H10.3375Z"
                        fill="#007AFF"
                      />
                    </svg> */}
                    {/* <FaLinkedin className="linkedin-icon" /> */}
                    <svg
                      className="linkedin-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                      style={{ marginLeft: "10px" }}
                    >
                      <path
                        d="M23.75 4.25C24.413 4.25 25.0489 4.51339 25.5178 4.98223C25.9866 5.45107 26.25 6.08696 26.25 6.75V24.25C26.25 24.913 25.9866 25.5489 25.5178 26.0178C25.0489 26.4866 24.413 26.75 23.75 26.75H6.25C5.58696 26.75 4.95107 26.4866 4.48223 26.0178C4.01339 25.5489 3.75 24.913 3.75 24.25V6.75C3.75 6.08696 4.01339 5.45107 4.48223 4.98223C4.95107 4.51339 5.58696 4.25 6.25 4.25H23.75ZM23.125 23.625V17C23.125 15.9192 22.6957 14.8828 21.9315 14.1185C21.1672 13.3543 20.1308 12.925 19.05 12.925C17.9875 12.925 16.75 13.575 16.15 14.55V13.1625H12.6625V23.625H16.15V17.4625C16.15 16.5 16.925 15.7125 17.8875 15.7125C18.3516 15.7125 18.7967 15.8969 19.1249 16.2251C19.4531 16.5533 19.6375 16.9984 19.6375 17.4625V23.625H23.125ZM8.6 11.2C9.15695 11.2 9.6911 10.9788 10.0849 10.5849C10.4788 10.1911 10.7 9.65695 10.7 9.1C10.7 7.9375 9.7625 6.9875 8.6 6.9875C8.03973 6.9875 7.50241 7.21007 7.10624 7.60624C6.71007 8.00241 6.4875 8.53973 6.4875 9.1C6.4875 10.2625 7.4375 11.2 8.6 11.2ZM10.3375 23.625V13.1625H6.875V23.625H10.3375Z"
                        fill="#007AFF"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="imagesdlkfjsldf" style={{ marginTop: "1.5%" }}>
                <Image
                  src="/images/h1.png"
                  alt="Description of the image"
                  width={700}
                  height={300}
                />
              </div>
              {/* <img src="/images/h1.png" alt="" className="image-class" /> */}
            </div>
          </div>

          <div
            className="crosel-item"
            // style={{
            //   width: "100%",
            //   height: "500px",
            // }}
          >
            <div className="hero-item-container">
              <div className="item-main">
                <h1 className="heading">Empower Your Path</h1>
                <h4 className="semi-heading">
                  Break barriers, embrace growth, and step into your best self.
                </h4>

                <div className="hero-button-group">
                  <button className="hero-button1" onClick={openModal1}>
                    Take a Quiz
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="35"
                      viewBox="0 0 34 35"
                      fill="none"
                      className="quiz-rotate"
                    >
                      <g clip-path="url(#clip0_712_4375)">
                        <path
                          d="M20.225 18.2207C20.3981 18.0476 20.4846 17.8319 20.4846 17.5736C20.4846 17.3152 20.398 17.0994 20.2248 16.9262C20.0517 16.7531 19.8359 16.6665 19.5776 16.6665C19.3193 16.6665 19.1036 16.7531 18.9304 16.9262C18.7573 17.0993 18.6707 17.3151 18.6707 17.5734C18.6706 17.8318 18.7571 18.0476 18.9303 18.2207C19.1035 18.394 19.3193 18.4805 19.5778 18.4804C19.8361 18.4804 20.0518 18.3939 20.225 18.2207ZM17.6766 16.5155L18.5196 15.6725C18.2095 15.3443 18.0138 15.0664 17.9323 14.8388C17.8507 14.6113 17.8144 14.2292 17.8235 13.6926C17.837 13.0535 17.7948 12.5671 17.6969 12.2335C17.5991 11.9 17.4074 11.5904 17.1218 11.3049C16.6186 10.8017 16.0259 10.5643 15.3438 10.5928C14.6617 10.6213 14.0405 10.9157 13.4802 11.476C13.0424 11.9138 12.7781 12.4197 12.6874 12.9936C12.5968 13.5674 12.6797 14.1331 12.9363 14.6907L14.0213 14.2473C13.8555 13.842 13.7948 13.4745 13.8393 13.1446C13.8837 12.8145 14.0305 12.5248 14.2798 12.2756C14.5899 11.9655 14.9343 11.8005 15.3132 11.7806C15.6921 11.7607 16.0285 11.8976 16.3223 12.1914C16.5008 12.37 16.6178 12.5879 16.6732 12.8453C16.7284 13.1028 16.7456 13.4704 16.7248 13.948C16.6821 14.5927 16.7149 15.0666 16.8232 15.3699C16.9317 15.6732 17.2161 16.0551 17.6766 16.5155ZM18.1309 24.1767C17.7737 24.5339 17.3476 24.7125 16.8526 24.7125C16.3576 24.7125 15.9315 24.5339 15.5743 24.1767L7.52426 16.1266C7.16706 15.7694 6.98845 15.3433 6.98845 14.8484C6.98845 14.3534 7.16706 13.9273 7.52426 13.5701L15.5743 5.52004C15.9315 5.16283 16.3576 4.98423 16.8526 4.98423C17.3476 4.98423 17.7737 5.16283 18.1309 5.52004L26.1809 13.5701C26.5381 13.9273 26.7167 14.3534 26.7167 14.8484C26.7167 15.3433 26.5381 15.7694 26.1809 16.1266L18.1309 24.1767ZM17.0702 23.116L25.1203 15.066C25.1747 15.0115 25.2019 14.939 25.2018 14.8484C25.2019 14.7577 25.1747 14.6852 25.1203 14.6308L17.0702 6.5807C17.0158 6.52625 16.9432 6.49909 16.8526 6.4992C16.762 6.49909 16.6894 6.52625 16.635 6.5807L8.58492 14.6308C8.53048 14.6852 8.50331 14.7577 8.50343 14.8484C8.50331 14.939 8.53048 15.0115 8.58492 15.066L16.635 23.116C16.6894 23.1705 16.762 23.1977 16.8526 23.1975C16.9432 23.1976 17.0158 23.1705 17.0702 23.116ZM18.1309 29.1264C17.7737 29.4837 17.3476 29.6623 16.8526 29.6623C16.3576 29.6623 15.9315 29.4837 15.5743 29.1264L6.4636 20.0157L7.52426 18.9551L16.635 28.0658C16.6894 28.1202 16.762 28.1474 16.8526 28.1473C16.9432 28.1474 17.0158 28.1202 17.0702 28.0658L26.1809 18.9551L27.2416 20.0157L18.1309 29.1264Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_712_4375">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.0588379 17.5) rotate(-45)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>

                  <button className="hero-button2">
                    <h1
                      className="hero-h1-class"
                      style={{ marginRight: "10px" }}
                    >
                      Connect On LinkedIn
                    </h1>
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                      style={{ marginLeft: "10px" }}
                    >
                      <path
                        d="M23.75 4.25C24.413 4.25 25.0489 4.51339 25.5178 4.98223C25.9866 5.45107 26.25 6.08696 26.25 6.75V24.25C26.25 24.913 25.9866 25.5489 25.5178 26.0178C25.0489 26.4866 24.413 26.75 23.75 26.75H6.25C5.58696 26.75 4.95107 26.4866 4.48223 26.0178C4.01339 25.5489 3.75 24.913 3.75 24.25V6.75C3.75 6.08696 4.01339 5.45107 4.48223 4.98223C4.95107 4.51339 5.58696 4.25 6.25 4.25H23.75ZM23.125 23.625V17C23.125 15.9192 22.6957 14.8828 21.9315 14.1185C21.1672 13.3543 20.1308 12.925 19.05 12.925C17.9875 12.925 16.75 13.575 16.15 14.55V13.1625H12.6625V23.625H16.15V17.4625C16.15 16.5 16.925 15.7125 17.8875 15.7125C18.3516 15.7125 18.7967 15.8969 19.1249 16.2251C19.4531 16.5533 19.6375 16.9984 19.6375 17.4625V23.625H23.125ZM8.6 11.2C9.15695 11.2 9.6911 10.9788 10.0849 10.5849C10.4788 10.1911 10.7 9.65695 10.7 9.1C10.7 7.9375 9.7625 6.9875 8.6 6.9875C8.03973 6.9875 7.50241 7.21007 7.10624 7.60624C6.71007 8.00241 6.4875 8.53973 6.4875 9.1C6.4875 10.2625 7.4375 11.2 8.6 11.2ZM10.3375 23.625V13.1625H6.875V23.625H10.3375Z"
                        fill="#007AFF"
                      />
                    </svg> */}
                    {/* <FaLinkedin className="linkedin-icon" /> */}
                    <svg
                      className="linkedin-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                      style={{ marginLeft: "10px" }}
                    >
                      <path
                        d="M23.75 4.25C24.413 4.25 25.0489 4.51339 25.5178 4.98223C25.9866 5.45107 26.25 6.08696 26.25 6.75V24.25C26.25 24.913 25.9866 25.5489 25.5178 26.0178C25.0489 26.4866 24.413 26.75 23.75 26.75H6.25C5.58696 26.75 4.95107 26.4866 4.48223 26.0178C4.01339 25.5489 3.75 24.913 3.75 24.25V6.75C3.75 6.08696 4.01339 5.45107 4.48223 4.98223C4.95107 4.51339 5.58696 4.25 6.25 4.25H23.75ZM23.125 23.625V17C23.125 15.9192 22.6957 14.8828 21.9315 14.1185C21.1672 13.3543 20.1308 12.925 19.05 12.925C17.9875 12.925 16.75 13.575 16.15 14.55V13.1625H12.6625V23.625H16.15V17.4625C16.15 16.5 16.925 15.7125 17.8875 15.7125C18.3516 15.7125 18.7967 15.8969 19.1249 16.2251C19.4531 16.5533 19.6375 16.9984 19.6375 17.4625V23.625H23.125ZM8.6 11.2C9.15695 11.2 9.6911 10.9788 10.0849 10.5849C10.4788 10.1911 10.7 9.65695 10.7 9.1C10.7 7.9375 9.7625 6.9875 8.6 6.9875C8.03973 6.9875 7.50241 7.21007 7.10624 7.60624C6.71007 8.00241 6.4875 8.53973 6.4875 9.1C6.4875 10.2625 7.4375 11.2 8.6 11.2ZM10.3375 23.625V13.1625H6.875V23.625H10.3375Z"
                        fill="#007AFF"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="imagesdlkfjsldf">
                <Image
                  src="/images/h5.png"
                  alt="Description of the image"
                  width={680}
                  height={300}
                />
              </div>
            </div>
          </div>

          <div
            className="crosel-item"
            // style={{
            //   width: "100%",
            //   height: "500px",
            // }}
          >
            <div className="hero-item-container">
              <div className="item-main">
                <h1 className="heading">Transform Your Life</h1>
                <h4 className="semi-heading">
                  Discover your strengths, unleash your greatness, and thrive.
                </h4>

                <div className="hero-button-group">
                  <button className="hero-button1" onClick={openModal1}>
                    Take a Quiz
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="35"
                      viewBox="0 0 34 35"
                      fill="none"
                      className="quiz-rotate"
                    >
                      <g clip-path="url(#clip0_712_4375)">
                        <path
                          d="M20.225 18.2207C20.3981 18.0476 20.4846 17.8319 20.4846 17.5736C20.4846 17.3152 20.398 17.0994 20.2248 16.9262C20.0517 16.7531 19.8359 16.6665 19.5776 16.6665C19.3193 16.6665 19.1036 16.7531 18.9304 16.9262C18.7573 17.0993 18.6707 17.3151 18.6707 17.5734C18.6706 17.8318 18.7571 18.0476 18.9303 18.2207C19.1035 18.394 19.3193 18.4805 19.5778 18.4804C19.8361 18.4804 20.0518 18.3939 20.225 18.2207ZM17.6766 16.5155L18.5196 15.6725C18.2095 15.3443 18.0138 15.0664 17.9323 14.8388C17.8507 14.6113 17.8144 14.2292 17.8235 13.6926C17.837 13.0535 17.7948 12.5671 17.6969 12.2335C17.5991 11.9 17.4074 11.5904 17.1218 11.3049C16.6186 10.8017 16.0259 10.5643 15.3438 10.5928C14.6617 10.6213 14.0405 10.9157 13.4802 11.476C13.0424 11.9138 12.7781 12.4197 12.6874 12.9936C12.5968 13.5674 12.6797 14.1331 12.9363 14.6907L14.0213 14.2473C13.8555 13.842 13.7948 13.4745 13.8393 13.1446C13.8837 12.8145 14.0305 12.5248 14.2798 12.2756C14.5899 11.9655 14.9343 11.8005 15.3132 11.7806C15.6921 11.7607 16.0285 11.8976 16.3223 12.1914C16.5008 12.37 16.6178 12.5879 16.6732 12.8453C16.7284 13.1028 16.7456 13.4704 16.7248 13.948C16.6821 14.5927 16.7149 15.0666 16.8232 15.3699C16.9317 15.6732 17.2161 16.0551 17.6766 16.5155ZM18.1309 24.1767C17.7737 24.5339 17.3476 24.7125 16.8526 24.7125C16.3576 24.7125 15.9315 24.5339 15.5743 24.1767L7.52426 16.1266C7.16706 15.7694 6.98845 15.3433 6.98845 14.8484C6.98845 14.3534 7.16706 13.9273 7.52426 13.5701L15.5743 5.52004C15.9315 5.16283 16.3576 4.98423 16.8526 4.98423C17.3476 4.98423 17.7737 5.16283 18.1309 5.52004L26.1809 13.5701C26.5381 13.9273 26.7167 14.3534 26.7167 14.8484C26.7167 15.3433 26.5381 15.7694 26.1809 16.1266L18.1309 24.1767ZM17.0702 23.116L25.1203 15.066C25.1747 15.0115 25.2019 14.939 25.2018 14.8484C25.2019 14.7577 25.1747 14.6852 25.1203 14.6308L17.0702 6.5807C17.0158 6.52625 16.9432 6.49909 16.8526 6.4992C16.762 6.49909 16.6894 6.52625 16.635 6.5807L8.58492 14.6308C8.53048 14.6852 8.50331 14.7577 8.50343 14.8484C8.50331 14.939 8.53048 15.0115 8.58492 15.066L16.635 23.116C16.6894 23.1705 16.762 23.1977 16.8526 23.1975C16.9432 23.1976 17.0158 23.1705 17.0702 23.116ZM18.1309 29.1264C17.7737 29.4837 17.3476 29.6623 16.8526 29.6623C16.3576 29.6623 15.9315 29.4837 15.5743 29.1264L6.4636 20.0157L7.52426 18.9551L16.635 28.0658C16.6894 28.1202 16.762 28.1474 16.8526 28.1473C16.9432 28.1474 17.0158 28.1202 17.0702 28.0658L26.1809 18.9551L27.2416 20.0157L18.1309 29.1264Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_712_4375">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.0588379 17.5) rotate(-45deg)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>

                  <button className="hero-button2">
                    <h1
                      className="hero-h1-class"
                      style={{ marginRight: "10px" }}
                    >
                      Connect On LinkedIn
                    </h1>
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                      style={{ marginLeft: "10px" }}
                    >
                      <path
                        d="M23.75 4.25C24.413 4.25 25.0489 4.51339 25.5178 4.98223C25.9866 5.45107 26.25 6.08696 26.25 6.75V24.25C26.25 24.913 25.9866 25.5489 25.5178 26.0178C25.0489 26.4866 24.413 26.75 23.75 26.75H6.25C5.58696 26.75 4.95107 26.4866 4.48223 26.0178C4.01339 25.5489 3.75 24.913 3.75 24.25V6.75C3.75 6.08696 4.01339 5.45107 4.48223 4.98223C4.95107 4.51339 5.58696 4.25 6.25 4.25H23.75ZM23.125 23.625V17C23.125 15.9192 22.6957 14.8828 21.9315 14.1185C21.1672 13.3543 20.1308 12.925 19.05 12.925C17.9875 12.925 16.75 13.575 16.15 14.55V13.1625H12.6625V23.625H16.15V17.4625C16.15 16.5 16.925 15.7125 17.8875 15.7125C18.3516 15.7125 18.7967 15.8969 19.1249 16.2251C19.4531 16.5533 19.6375 16.9984 19.6375 17.4625V23.625H23.125ZM8.6 11.2C9.15695 11.2 9.6911 10.9788 10.0849 10.5849C10.4788 10.1911 10.7 9.65695 10.7 9.1C10.7 7.9375 9.7625 6.9875 8.6 6.9875C8.03973 6.9875 7.50241 7.21007 7.10624 7.60624C6.71007 8.00241 6.4875 8.53973 6.4875 9.1C6.4875 10.2625 7.4375 11.2 8.6 11.2ZM10.3375 23.625V13.1625H6.875V23.625H10.3375Z"
                        fill="#007AFF"
                      />
                    </svg> */}
                    {/* <FaLinkedin className="linkedin-icon" /> */}
                    <svg
                      className="linkedin-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                      style={{ marginLeft: "10px" }}
                    >
                      <path
                        d="M23.75 4.25C24.413 4.25 25.0489 4.51339 25.5178 4.98223C25.9866 5.45107 26.25 6.08696 26.25 6.75V24.25C26.25 24.913 25.9866 25.5489 25.5178 26.0178C25.0489 26.4866 24.413 26.75 23.75 26.75H6.25C5.58696 26.75 4.95107 26.4866 4.48223 26.0178C4.01339 25.5489 3.75 24.913 3.75 24.25V6.75C3.75 6.08696 4.01339 5.45107 4.48223 4.98223C4.95107 4.51339 5.58696 4.25 6.25 4.25H23.75ZM23.125 23.625V17C23.125 15.9192 22.6957 14.8828 21.9315 14.1185C21.1672 13.3543 20.1308 12.925 19.05 12.925C17.9875 12.925 16.75 13.575 16.15 14.55V13.1625H12.6625V23.625H16.15V17.4625C16.15 16.5 16.925 15.7125 17.8875 15.7125C18.3516 15.7125 18.7967 15.8969 19.1249 16.2251C19.4531 16.5533 19.6375 16.9984 19.6375 17.4625V23.625H23.125ZM8.6 11.2C9.15695 11.2 9.6911 10.9788 10.0849 10.5849C10.4788 10.1911 10.7 9.65695 10.7 9.1C10.7 7.9375 9.7625 6.9875 8.6 6.9875C8.03973 6.9875 7.50241 7.21007 7.10624 7.60624C6.71007 8.00241 6.4875 8.53973 6.4875 9.1C6.4875 10.2625 7.4375 11.2 8.6 11.2ZM10.3375 23.625V13.1625H6.875V23.625H10.3375Z"
                        fill="#007AFF"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="imagesdlkfjsldf">
                <Image
                  src="/images/h6.png"
                  alt="Description of the image"
                  width={680}
                  height={300}
                />
              </div>
            </div>
          </div>
          {/* <div className="crosel-item">
            <div style={{ paddingTop: "10%" }}>
              <h1 className="heading">Empower Your Path</h1>
              <h4 className="semi-heading">
                Break barriers, embrace growth, and step into your best self.
              </h4>
            </div>
          </div> */}

          {/* <div className="crosel-item">
            <div style={{ paddingTop: "10%" }}>
              <h1 className="heading">Transform Your Life</h1>
              <h4 className="semi-heading">
                Discover your strengths, unleash your greatness, and thrive.
              </h4>
            </div>
          </div> */}
        </Carousel>
      </div>

      {/* {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              ✖
            </button>
            <div className="modal-body">
              <div className="option">
                <div className="circle">
                  <img
                    src="https://via.placeholder.com/50" 
                    alt="Individual"
                  />
                </div>
                <p className="label">Individual</p>
              </div>
              <div className="option">
                <div className="circle">
                  <img
                    src="https://via.placeholder.com/50" 
                    alt="Corporate"
                  />
                </div>
                <p className="label purple">Corporate</p>
              </div>
            </div>
          </div>
        </div>
      )} */}

      {/* <Modal
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        centered
        bodyStyle={{
          backgroundColor: "#000",
          textAlign: "center",
          padding: "20px",
          borderRadius: "10px",
        }}
        closeIcon={<span style={{ color: "#fff", fontSize: "18px" }}>✖</span>}
      >
        <div className="modal-body">
          <div className="option" onClick={openModal2}>
            <div className="circle">
              <img
                src="/images/f1.png" // Replace with actual "Individual" icon
                alt="Individual"
              />
            </div>
            <p className="label">Individual</p>
          </div>
          <div className="option" onClick={openModal2}>
            <div className="circle">
              <img
                src="/images/f2.png" // Replace with actual "Corporate" icon
                alt="Corporate"
              />
            </div>
            <p className="label purple">Corporate</p>
          </div>
        </div>
      </Modal> */}

      <Modal
        open={isModalOpen2}
        onCancel={closeModal2}
        footer={null}
        centered
        bodyStyle={{
          backgroundColor: "#000",
          textAlign: "center",
          padding: "20px",
          borderRadius: "10px",
        }}
        closeIcon={<span style={{ color: "#fff", fontSize: "18px" }}>✖</span>}
      >
        <div className="modal-body">
          <div>
            <div className="quiz-container">
              <div className="quiz-header">
                <p>{`Question ${currentQuestion + 1} out of ${
                  questions.length
                }`}</p>
              </div>

              <div className="quiz-question">
                <h2 className="sub-semi-heading">
                  {questions[currentQuestion].question}
                </h2>
              </div>

              <div className="quiz-options">
                {questions[currentQuestion].options.map((option, index) => (
                  <label key={index} className="option-label">
                    <input
                      type="radio"
                      name={`question-${questions[currentQuestion].id}`}
                      value={option}
                      checked={
                        answers[questions[currentQuestion].id] === option
                      }
                      onChange={() =>
                        handleOptionChange(
                          questions[currentQuestion].id,
                          option
                        )
                      }
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div className="quiz-footer">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  // disabled={currentQuestion === questions.length - 1}
                >
                  Next
                </button>
              </div>

              {/* <div className="quiz-debug">
                <h3>Answers Debug:</h3>
                <pre>{JSON.stringify(answers, null, 2)}</pre>
              </div> */}
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        open={isModalOpen4}
        onCancel={closeModal4}
        footer={null}
        centered
        // styles={{
        //   body: {
        //     backgroundColor: "#000",
        //     textAlign: "center",
        //     padding: "20px",
        //     borderRadius: "10px",
        //   },
        // }}
        closeIcon={<span style={{ color: "#fff", fontSize: "18px" }}>✖</span>}
      >
        <div className="modal-body">
          <div className="tankyou-conatainer">
            <div className="tankyou-conatainer-left">
              <div>
                <h1 className="sub-heading1">Thank You For Taking Quiz</h1>
                <p className="para1">
                  Your responses reflect a strong commitment to fostering
                  meaningful change within your organization’s leadership.
                  Executive Coaching and Stakeholder-Centered Coaching are
                  transformative solutions that can enhance leadership
                  performance, cultivate a culture of excellence, and amplify
                  your organization’s overall impact.
                </p>
              </div>

              <div className="quize-ul-tag">
                <h2
                  style={{
                    fontSize: "24px",
                    color: "white",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  What’s Next?
                </h2>
                <ul>
                  <li>
                    <p className="para1">
                      Discover Our Services: Visit our [Home Page] to explore
                      how our coaching programs can support your leaders and
                      drive organizational growth.
                    </p>
                  </li>

                  <li>
                    <p className="para1">
                      Contact Us: Have questions or want to learn more? Reach
                      out to us through the [Contact Us] page, and we’ll be
                      happy to assist you.
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="para3">
                  <span id="span">
                    Together, we can unlock the full potential of your leaders
                    and take your organization to new heights.
                  </span>
                  <br />
                  <br /> We look forward to partnering with you.
                </h2>
              </div>
            </div>
            <div className="tankyou-conatainer-right">
              <Image
                src="/images/m4.png"
                alt="Description of the image"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </Modal>

      <div>
        {isOpen1 && (
          <div className="modal-overlay">
            <div className="modal-content">
              <span
                onClick={closeModal1}
                className="cross-button"
                style={{ color: "#fff", fontSize: "18px" }}
              >
                ✖
              </span>
              <div className="modal-body">
                <div className="option" onClick={openModal2}>
                  <div className="circle">
                    <img
                      src="/images/f1.png" // Replace with actual "Individual" icon
                      alt="Individual"
                    />
                  </div>
                  <p className="label">Individual</p>
                </div>
                <div className="option" onClick={openModal2}>
                  <div className="circle">
                    <img
                      src="/images/f2.png" // Replace with actual "Corporate" icon
                      alt="Corporate"
                    />
                  </div>
                  <p className="label purple">Corporate</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
