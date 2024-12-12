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

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;

    return (
      <div className="carousel-button-group">
        <button
          className={`left ${currentSlide === 0 ? "disable" : ""}`}
          onClick={previous}
          disabled={currentSlide === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
          >
            <path
              d="M11.705 14.705C11.798 14.6121 11.8717 14.5018 11.9221 14.3804C11.9724 14.259 11.9983 14.1289 11.9983 13.9975C11.9983 13.8661 11.9724 13.736 11.9221 13.6146C11.8717 13.4932 11.798 13.3829 11.705 13.29L6.415 8L11.705 2.705C11.8926 2.51736 11.9981 2.26287 11.9981 1.9975C11.9981 1.73214 11.8926 1.47764 11.705 1.29C11.5174 1.10236 11.2629 0.996948 10.9975 0.996948C10.7321 0.996948 10.4776 1.10236 10.29 1.29L4.29 7.29C4.10375 7.47737 3.99921 7.73082 3.99921 7.995C3.99921 8.25919 4.10375 8.51264 4.29 8.7L10.29 14.7C10.3825 14.7933 10.4926 14.8675 10.6138 14.9182C10.735 14.969 10.8651 14.9953 10.9965 14.9958C11.1279 14.9963 11.2581 14.9708 11.3797 14.9209C11.5013 14.871 11.6118 14.7977 11.705 14.705Z"
              fill="#2A2A33"
            />
          </svg>
        </button>
        <button className="right" onClick={next}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
          >
            <path
              d="M4.295 1.295C4.20202 1.38787 4.12826 1.49816 4.07794 1.61955C4.02761 1.74095 4.00171 1.87108 4.00171 2.00249C4.00171 2.13391 4.02761 2.26404 4.07794 2.38544C4.12826 2.50683 4.20202 2.61712 4.295 2.71L9.585 8L4.295 13.295C4.10736 13.4826 4.00194 13.7371 4.00194 14.0025C4.00194 14.2679 4.10736 14.5224 4.295 14.71C4.48264 14.8976 4.73713 15.0031 5.0025 15.0031C5.26786 15.0031 5.52236 14.8976 5.71 14.71L11.71 8.71C11.8962 8.52263 12.0008 8.26918 12.0008 8.005C12.0008 7.74081 11.8962 7.48736 11.71 7.3L5.71 1.3C5.61745 1.20669 5.50742 1.13254 5.3862 1.08179C5.26498 1.03103 5.13495 1.00467 5.00353 1.00421C4.87212 1.00374 4.7419 1.02918 4.62032 1.07908C4.49875 1.12898 4.3882 1.20235 4.295 1.295Z"
              fill="#2A2A33"
            />
          </svg>
        </button>
      </div>
    );
  };

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
          customButtonGroup={<ButtonGroup />}
          renderButtonGroupOutside
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
