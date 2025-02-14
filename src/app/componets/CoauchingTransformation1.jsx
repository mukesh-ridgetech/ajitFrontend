import React from "react";
import Marquee from "react-fast-marquee";
import CroselBox from "./CroselBox";

const CoauchingTransformation1 = () => {
  return (
    <div
      style={{ marginBottom: "40px", width: "100%" }}
      className="md:mb-[0px] lg:mb-[40px]"
    >
      <div className="marque-heading-box">
        <h1 className="sub-heading2">Transformative Coaching Topics</h1>
        {/* <p className="semi-heading">Personal Challenges</p> */}
      </div>

      <Marquee
        direction={"right"}
        speed={"60"}
        loop={0}
        delay={0}
        pauseOnHover={true}
        // className="crosel-moving-box"
      >
        <CroselBox
          i1={"/images/New.png"}
          text={"Motivational Leadership"}
          bg={"#F5CE67"}
        />

        <CroselBox
          i1={"/images/New2.png"}
          text={"Cultural Transformation"}
          bg={"#767BF3"}
        />

        <CroselBox
          i1={"/images/New9.png"}
          text={"Crisis Management"}
          bg={"#F5CE67"}
        />

        <CroselBox
          i1={"/images/New3.png"}
          text={"Impoved Performance and Productivity"}
          bg={"#767BF3"}
        />

        <CroselBox
          i1={"/images/New5.png"}
          text={"Better Work Life Quality"}
          bg={"#F5CE67"}
        />

        <CroselBox
          i1={"/images/New9.png"}
          text={"Crisis Management"}
          bg={"#767BF3"}
        />
      </Marquee>

      {/* <div className="marque-heading-box">
        <p className="semi-heading">Personal Challenges</p>
      </div> */}

      <Marquee
        direction={"left"}
        speed={"60"}
        loop={0}
        delay={0}
        pauseOnHover={true}
        style={{ marginTop: "40px" }}
        className=" md:mt-[24px] lg:mt-[40px]"
      >
        <CroselBox
          i1={"/images/New6.png"}
          text={"More Time For Managers"}
          bg={"#767BF3"}
        />

        <CroselBox
          i1={"/images/New4.png"}
          text={"Enhanced Staff Development"}
          bg={"#F5CE67"}
        />

        <CroselBox
          i1={"/images/New7.png"}
          text={"Increased Creativity"}
          bg={"#767BF3"}
        />

        <CroselBox
          i1={"/images/New8.png"}
          text={"Better Use Of Skills And Resources"}
          bg={"#F5CE67"}
        />

        <CroselBox
          i1={"/images/New10.png"}
          text={"Life Skill Beyond Work"}
          bg={"#767BF3"}
        />

        <CroselBox
          i1={"/images/New7.png"}
          text={"Increased Creativity"}
          bg={"#F5CE67"}
        />
      </Marquee>
    </div>
  );
};

export default CoauchingTransformation1;
