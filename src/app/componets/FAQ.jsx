"use client";
import React, { useState } from "react";

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto w-full my-8">
      {faqs?.map((faq, index) => (
        <div
          key={index}
          className={`py-[15px] ${
            activeIndex === index
              ? " custom-gradient text-white rounded-md"
              : "bg-[#140C1C]"
          }`}
          style={{
            marginBottom: "10px",
            borderRadius: "10px",
            // background: "linear-gradient(to right, #2A1454, #8750F7)",
          }}
        >
          <div
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center cursor-pointer px-4"
          >
            <h3
              className={`text-[18px] font-medium ${
                activeIndex === index ? "text-white" : "text-gray-300"
              }`}
            >
              {faq.question}
            </h3>
            <span
              className={`text-[24px] font-bold ${
                activeIndex === index ? "text-white" : "text-purple-500"
              }`}
            >
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          <div
            className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
              activeIndex === index ? "max-h-screen px-4" : "max-h-0"
            }`}
          >
            <div className="mt-4 bg-opacity-30 p-4 rounded-md">
              <p className="text-[16px] text-gray-300">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
