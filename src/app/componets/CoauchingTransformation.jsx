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
        speed={"60"}
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

        <CroselBox
          i1={"/images/t11.png"}
          text={"Career Transition"}
          bg={"#F5CE67"}
        />

        <CroselBox i1={"/images/t12.png"} text={"Children"} bg={"#767BF3"} />

        <CroselBox
          i1={"/images/t13.png"}
          text={"Spiritual Purpose"}
          bg={"#F5CE67"}
        />

        <CroselBox i1={"/images/t14.png"} text={"Health"} bg={"#767BF3"} />

        <CroselBox i1={"/images/t15.png"} text={"Joy"} bg={"#F5CE67"} />

        <CroselBox
          i1={"/images/t16.png"}
          text={"Negative emotions"}
          bg={"#767BF3"}
        />

        <CroselBox
          i1={"/images/clip4.png"}
          text={"Balance of life"}
          bg={"#F5CE67"}
        />

        <CroselBox
          i1={"/images/t18.png"}
          text={"Inability to learn quickly"}
          bg={"#767BF3"}
        />
      </Marquee>

      <div className="marque-heading-box">
        <p className="semi-heading" style={{ marginTop: "24px" }}>
          Professional Challenges
        </p>
      </div>

      <Marquee
        direction={"left"}
        speed={"60"}
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

        <CroselBox i1={"/images/t21.png"} text={"Innovation"} bg={"#F5CE67"} />

        <CroselBox i1={"/images/t22.png"} text={"Recognition"} bg={"#767BF3"} />

        <CroselBox
          i1={"/images/t23.png"}
          text={"Time Management"}
          bg={"#F5CE67"}
        />

        <CroselBox i1={"/images/t24.png"} text={"Priorities"} bg={"#767BF3"} />

        <CroselBox
          i1={"/images/t25.png"}
          text={"Business Planning"}
          bg={"#F5CE67"}
        />

        <CroselBox i1={"/images/t26.png"} text={"Sales"} bg={"#767BF3"} />

        <CroselBox i1={"/images/t27.png"} text={"Profits"} bg={"#F5CE67"} />

        <CroselBox
          i1={"/images/t28.png"}
          text={"How to write a Business Plan"}
          bg={"#767BF3"}
        />

        <CroselBox
          i1={"/images/t29.png"}
          text={"An organization’s spiritual purpose"}
          bg={"#F5CE67"}
        />

        <CroselBox
          i1={"/images/t210.png"}
          text={"Mission, Vision, Goals, Values"}
          bg={"#767BF3"}
        />

        <CroselBox
          i1={"/images/t211.png"}
          text={"Return on Investment"}
          bg={"#F5CE67"}
        />

        <CroselBox i1={"/images/t24.png"} text={"Priorities"} bg={"#767BF3"} />
      </Marquee>
    </div>
  );
};

export default CoauchingTransformation;
