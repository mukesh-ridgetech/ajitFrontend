import React from "react";
import FAQ from "./FAQ";
const FAQMAIN = ({ faqs }) => {
  return (
    <div className="main-container">
      <div className="faq-main-container">
        <div className="faq-main-container-left">
          <h1 className="sub-heading">Frequently Asked Questions (FAQs)</h1>
          <h4 className="semi-title">
            Your Guide to Understanding Coaching and How it can Transform Your
            Journey.
          </h4>
        </div>

        <div className="faq-main-container-right">
          <FAQ faqs={faqs} />
        </div>
      </div>
    </div>
  );
};

export default FAQMAIN;
