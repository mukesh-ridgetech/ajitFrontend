import React from "react";
import Marquee from "react-fast-marquee";
import CroselBox from "./CroselBox";

const CoauchingTransformation1 = () => {
  return (
    <div style={{ marginBottom: "40px" }}>
      <div className="marque-heading-box">
        <h1 className="sub-heading2">Transformative Coaching Topics</h1>
        {/* <p className="semi-heading">Personal Challenges</p> */}
      </div>

      <Marquee
        direction={"right"}
        speed={"50"}
        loop={0}
        delay={0}
        pauseOnHover={true}
      >
        <CroselBox
          i1={"/images/clip.png"}
          text={"Motivational Leadership"}
          bg={"#F5CE67"}
        />

        <CroselBox
          i1={"/images/clip2.png"}
          text={"Cultural Transformation"}
          bg={"#767BF3"}
        />

        <CroselBox i1={"/images/clip3.png"} text={"Money"} bg={"#F5CE67"} />

        <CroselBox
          i1={"/images/clip4.png"}
          text={"Impove Performance and productivity"}
          bg={"#767BF3"}
        />

        <CroselBox
          i1={"/images/clip4.png"}
          text={"Better Work Life Quality"}
          bg={"#F5CE67"}
        />

        <CroselBox i1={"/images/clip3.png"} text={"Money"} bg={"#767BF3"} />
      </Marquee>

      {/* <div className="marque-heading-box">
        <p className="semi-heading">Personal Challenges</p>
      </div> */}

      <Marquee
        direction={"left"}
        speed={"50"}
        loop={0}
        delay={0}
        pauseOnHover={true}
        style={{ marginTop: "40px" }}
      >
        <CroselBox
          i1={"/images/clip5.png"}
          text={"More Time For Managers"}
          bg={"#767BF3"}
        />

        <CroselBox
          i1={"/images/clip6.png"}
          text={"Enhanced Staff Development"}
          bg={"#F5CE67"}
        />

        <CroselBox
          i1={"/images/clip7.png"}
          text={"Increse Creativity"}
          bg={"#767BF3"}
        />

        <CroselBox
          i1={"/images/clip.png"}
          text={"Better Use Of Skills And Resources"}
          bg={"#F5CE67"}
        />

        <CroselBox
          i1={"/images/clip.png"}
          text={"Life Skill Beyound Work"}
          bg={"#767BF3"}
        />

        <CroselBox
          i1={"/images/clip7.png"}
          text={"Increse Creativity"}
          bg={"#F5CE67"}
        />
      </Marquee>
    </div>
  );
};

export default CoauchingTransformation1;
