import React from "react";
import Marquee from "react-fast-marquee";
import CroselBox from "./CroselBox";

const CoauchingTransformation = () => {
  return (
    <div style={{ marginBottom: "40px" }}>
      <div className="marque-heading-box">
        <h1 className="sub-heading2">Transformative Coaching Topics</h1>
        <p className="semi-heading">Personal Challenges</p>
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
          text={"Relationships"}
          bg={"#F5CE67"}
        />

        <CroselBox
          i1={"/images/clip2.png"}
          text={"Communication"}
          bg={"#767BF3"}
        />

        <CroselBox i1={"/images/clip3.png"} text={"Money"} bg={"#F5CE67"} />

        <CroselBox
          i1={"/images/clip4.png"}
          text={"Self-esteem"}
          bg={"#767BF3"}
        />
      </Marquee>

      <div className="marque-heading-box">
        <p className="semi-heading">Professional Challenges</p>
      </div>

      <Marquee
        direction={"left"}
        speed={"50"}
        loop={0}
        delay={0}
        pauseOnHover={true}
      >
        <CroselBox
          i1={"/images/clip5.png"}
          text={"Leadership"}
          bg={"#F5CE67"}
        />

        <CroselBox
          i1={"/images/clip6.png"}
          text={"Team Building"}
          bg={"#767BF3"}
        />

        <CroselBox
          i1={"/images/clip7.png"}
          text={"Conflict resolution & communication"}
          bg={"#F5CE67"}
        />

        <CroselBox
          i1={"/images/clip.png"}
          text={"Relationships"}
          bg={"#767BF3"}
        />
      </Marquee>
    </div>
  );
};

export default CoauchingTransformation;
