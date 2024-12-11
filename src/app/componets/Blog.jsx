"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";

const Blog = () => {
  const data = [
    {
      id: 1,
      title: "Clarifying Misconceptions: What Coaching is Not",
      content:
        "As you will agree, we all have the potential to grow and achieve remarkable things. However, over time, we often develop limiting",
      image: "/images/bg1.png",
      bgColor: "#4caf50",
    },

    {
      id: 2,
      title: "Clarifying Misconceptions: What Coaching is Not",
      content:
        "As you will agree, we all have the potential to grow and achieve remarkable things. However, over time, we often develop limiting",
      image: "/images/bg2.png",
      bgColor: "#4caf50",
    },

    {
      id: 3,
      title: "Clarifying Misconceptions: What Coaching is Not",
      content:
        "As you will agree, we all have the potential to grow and achieve remarkable things. However, over time, we often develop limiting",
      image: "/images/bg2.png",
      bgColor: "#4caf50",
    },

    {
      id: 4,
      title: "Clarifying Misconceptions: What Coaching is Not",
      content:
        "As you will agree, we all have the potential to grow and achieve remarkable things. However, over time, we often develop limiting",
      image: "/images/bh3.png",
      bgColor: "#4caf50",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const colors = ["#4caf50", "#2196F3", "#FF9800"];
  return (
    <div className="main-container">
      <div className="blog-main-container">
        <div className="sub-heading" style={{ textAlign: "center" }}>
          Blog
        </div>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
        >
          {data?.map((item, index) => {
            const colorIndex = index % colors.length;
            return (
              <div
                key={item?.id}
                style={{
                  backgroundImage: `url(${item?.image})`,
                  "--dynamic-color": colors[colorIndex],
                }}
                className="blog-crosel-box-item bg-cover bg-center"
              >
                <div className="blog-title">{item?.title}</div>

                <div className="marque-container">
                  <div className="marquee-text">{item?.content}</div>
                </div>

                <button className="crosel-button">
                  Explore
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="35"
                    viewBox="0 0 34 35"
                    fill="none"
                    className="btn-image"
                  >
                    <g clip-path="url(#clip0_811_1549)">
                      <path
                        d="M21.428 27.8465L18.6473 27.8465V16.2146L7.01535 16.2146L7.01535 13.4339L21.428 13.4339L21.428 27.8465Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_811_1549">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.0625 17.8281) rotate(-45)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Blog;
