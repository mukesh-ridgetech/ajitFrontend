import React from "react";
import EssentialBox from "./EssentialBox";
const Essential = () => {
  const data = [
    { text: "Treat Others With Respect" },
    { text: "Build Trust" },
    { text: "Collaborate With Others" },
    { text: "Build Cross-Functional Relationships" },
    {
      text: "Listen To Different POVs With An Open Mind Before Giving My Opinion",
    },
  ];

  const data1 = [
    { text: "Present Self With Confidence" },
    { text: "Develop Executive Presence" },
    { text: "Stand Up For What I Believe In" },
    { text: "Present My POV Persuasively" },
    { text: "Become More Assertive" },
  ];

  const data2 = [
    { text: "Delegate More Effectively" },
    { text: " Hold Others Accountable " },
    { text: "Focus On The Critical Few Issues" },
    { text: "Take Appropriate Risks" },
    { text: "Become More Assertive" },
  ];

  const data3 = [
    { text: "Become A Better Coach And Mentor" },
    { text: " Match My Leadership Style To The Specific Need Of Others " },
    { text: "Develop And Link Team Strategy To Business Strategy " },
    { text: " Address Conflict Constructively And Timely" },
    { text: "Stand Up To Individuals Who Undermine Teamwork" },
  ];
  return (
    <div className="main-container">
      <div className="essential-main-container">
        <h1 className="benifit-section-main-heading">
          Top 20 Essential Skills for Leadership Development
        </h1>
        <div className="Essential-main-box-container">
          <EssentialBox
            data={data}
            heading={"Building Relationships and Trust"}
            im={"/images/es1.png"}
            bg={"#767BF3"}
          />
          <EssentialBox
            data={data1}
            heading={"Leading with Confidence and Influence"}
            im={"/images/es2.png"}
            bg={"#EFB1B1"}
          />
          <EssentialBox
            data={data2}
            heading={"Driving Performance and Accountability"}
            im={"/images/es3.png"}
            bg={"#D2B3DB"}
          />
          <EssentialBox
            data={data3}
            heading={"Coaching, Strategy, and Conflict Management"}
            im={"/images/es4.png"}
            bg={"#F5CE67"}
          />
        </div>
      </div>
    </div>
  );
};

export default Essential;
