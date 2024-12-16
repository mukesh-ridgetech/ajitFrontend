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
  const colors = ["#D2B3DB", "#767BF3", "#F5CE67"];

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide, totalItems },
    } = rest;

    const isLastSlide = currentSlide === totalItems - 1;
    console.log("currentSlide", currentSlide, isLastSlide);

    return (
      <div className="carousel-button-group">
        <button
          className={`left ${currentSlide === 0 ? "disable" : ""}`}
          onClick={previous}
          disabled={currentSlide === 0}
        >
          {currentSlide === 0 ? (
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
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.5575 22.0575C17.697 21.9182 17.8076 21.7528 17.8831 21.5707C17.9586 21.3886 17.9974 21.1934 17.9974 20.9963C17.9974 20.7991 17.9586 20.6039 17.8831 20.4218C17.8076 20.2397 17.697 20.0743 17.5575 19.935L9.62251 12L17.5575 4.05751C17.839 3.77605 17.9971 3.3943 17.9971 2.99626C17.9971 2.59821 17.839 2.21647 17.5575 1.93501C17.276 1.65355 16.8943 1.49542 16.4963 1.49542C16.0982 1.49542 15.7165 1.65355 15.435 1.93501L6.43501 10.935C6.15563 11.2161 5.99882 11.5962 5.99882 11.9925C5.99882 12.3888 6.15563 12.769 6.43501 13.05L15.435 22.05C15.5738 22.19 15.7389 22.3012 15.9207 22.3773C16.1025 22.4534 16.2976 22.493 16.4947 22.4937C16.6918 22.4944 16.8872 22.4562 17.0695 22.3814C17.2519 22.3065 17.4177 22.1965 17.5575 22.0575Z"
                fill="#824DEE"
              />
            </svg>
          )}
        </button>
        <button className="right" onClick={next} disabled={isLastSlide}>
          {isLastSlide ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M17.5575 22.7274C17.697 22.5881 17.8076 22.4226 17.8831 22.2405C17.9586 22.0584 17.9974 21.8632 17.9974 21.6661C17.9974 21.469 17.9586 21.2738 17.8831 21.0917C17.8076 20.9096 17.697 20.7442 17.5575 20.6049L9.62251 12.6699L17.5575 4.72737C17.839 4.44591 17.9971 4.06416 17.9971 3.66612C17.9971 3.26807 17.839 2.88633 17.5575 2.60487C17.276 2.32341 16.8943 2.16528 16.4963 2.16528C16.0982 2.16528 15.7165 2.32341 15.435 2.60487L6.43501 11.6049C6.15563 11.8859 5.99882 12.2661 5.99882 12.6624C5.99882 13.0586 6.15563 13.4388 6.43501 13.7199L15.435 22.7199C15.5738 22.8598 15.7389 22.9711 15.9207 23.0472C16.1025 23.1233 16.2976 23.1629 16.4947 23.1636C16.6918 23.1642 16.8872 23.1261 17.0695 23.0512C17.2519 22.9764 17.4177 22.8663 17.5575 22.7274Z"
                fill="#B8B8B8"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M6.44249 2.61248C6.30303 2.75179 6.19239 2.91722 6.1169 3.09932C6.04142 3.28141 6.00256 3.4766 6.00256 3.67373C6.00256 3.87085 6.04142 4.06604 6.1169 4.24814C6.19239 4.43023 6.30303 4.59567 6.44249 4.73498L14.3775 12.67L6.44249 20.6125C6.16103 20.8939 6.00291 21.2757 6.00291 21.6737C6.00291 22.0718 6.16103 22.4535 6.44249 22.735C6.72395 23.0164 7.1057 23.1746 7.50374 23.1746C7.90179 23.1746 8.28353 23.0164 8.56499 22.735L17.565 13.735C17.8444 13.4539 18.0012 13.0738 18.0012 12.6775C18.0012 12.2812 17.8444 11.901 17.565 11.62L8.56499 2.61998C8.42618 2.48002 8.26114 2.36879 8.07931 2.29266C7.89748 2.21653 7.70242 2.17699 7.5053 2.17629C7.30817 2.17559 7.11285 2.21376 6.93048 2.2886C6.74812 2.36345 6.5823 2.4735 6.44249 2.61248Z"
                fill="#824DEE"
              />
            </svg>
          )}
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
