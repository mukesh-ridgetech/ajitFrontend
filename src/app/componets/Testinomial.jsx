"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import Image from "next/image";

const Testinomial = () => {
  const data = [
    {
      id: 1,
      title: "shfgksdjgh",
      heding: "lorem10 ksjf ksjdgfk sdkfj ",
      content:
        "As you will agree, we all have the potential to grow and achieve remarkable things. However, over time, we often develop limiting",
      image: "/images/bh3.png",
      bgColor: "#4caf50",
      rating: 5,
    },

    {
      id: 2,
      title: "shfgksdjgh",
      heding: "lorem10 ksjf ksjdgfk sdkfj ",
      content:
        "As you will agree, we all have the potential to grow and achieve remarkable things. However, over time, we often develop limiting",
      image: "/images/bg1.png",
      bgColor: "#4caf50",
      rating: 4,
    },

    {
      id: 3,
      title: "shfgksdjgh",
      heding: "lorem10 ksjf ksjdgfk sdkfj ",
      content:
        "As you will agree, we all have the potential to grow and achieve remarkable things. However, over time, we often develop limiting",
      image: "/images/bg2.png",
      bgColor: "#4caf50",
      rating: 3,
    },

    {
      id: 4,
      title: "shfgksdjgh",
      heding: "lorem10 ksjf ksjdgfk sdkfj ",
      content:
        "As you will agree, we all have the potential to grow and achieve remarkable things. However, over time, we often develop limiting",
      image: "/images/bh3.png",
      bgColor: "#4caf50",
      rating: 5,
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="main-container">
      <div className="testinomial-main-container">
        <div className="sub-heading" style={{ textAlign: "center" }}>
          Testimonials
        </div>
        <Carousel
          swipeable={false}
          draggable={false}
          //   showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          //   infinite={true}
          //   autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
        >
          {data?.map((item) => {
            return (
              <>
                <div key={item?.id} className="testimomial-item-box">
                  <div className="testinomial-item-image">
                    <img
                      src={`${item?.image}`}
                      alt="Description of the image"
                      className="circular-image"
                    />
                  </div>

                  <div className="testinomial-content">
                    <h3 className="testinomial-title">{item?.title}</h3>
                    <h4 className="testinomial-heading">{item?.heding}</h4>
                    <p className="para">{item?.content}</p>

                    <div className="testinomial-rating">
                      {Array.from({ length: item?.rating }).map((_, index) => (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                        >
                          <path
                            d="M10.0734 1.06245C10.5224 -0.319513 12.4776 -0.319515 12.9266 1.06245L14.5309 6.00014C14.7318 6.61818 15.3077 7.03662 15.9575 7.03662H21.1493C22.6024 7.03662 23.2066 8.89604 22.031 9.75015L17.8307 12.8018C17.305 13.1838 17.085 13.8608 17.2858 14.4789L18.8902 19.4166C19.3392 20.7985 17.7575 21.9477 16.5819 21.0936L12.3817 18.0419C11.8559 17.66 11.1441 17.66 10.6183 18.0419L6.41807 21.0936C5.2425 21.9477 3.66078 20.7985 4.10981 19.4166L5.71416 14.4789C5.91497 13.8608 5.69498 13.1838 5.16925 12.8018L0.969001 9.75015C-0.206569 8.89604 0.397592 7.03662 1.85068 7.03662H7.04247C7.69231 7.03662 8.26825 6.61818 8.46906 6.00015L10.0734 1.06245Z"
                            fill="#F5CE67"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Testinomial;
