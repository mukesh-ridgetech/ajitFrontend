"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import Image from "next/image";

const Testinomial = () => {
  const data = [
    {
      id: 1,
      title: "Ashish Syngal",
      heding: "SVP, Customer Success ProHance ",
      content:
        "Ajit's coaching has transformed my life. His expert guidance has empowered me to achieve a harmonious balance between my personal and professional goals. I'm incredibly grateful for his support in helping me become a more well-rounded individual.",
      image: "/images/t1.png",
      bgColor: "#4caf50",
      rating: 5,
    },

    {
      id: 2,
      title: "shfgksdjgh",
      heding: "we all have the potential to grow and achieve",
      content:
        "Ajit's coaching has transformed my life. His expert guidance has empowered me to achieve a harmonious balance between my personal and professional goals. I'm incredibly grateful for his support in helping me become a more well-rounded individual.",
      image: "/images/bg1.png",
      bgColor: "#4caf50",
      rating: 4,
    },

    {
      id: 3,
      title: "shfgksdjgh",
      heding: "we all have the potential to grow and achieve",
      content:
        "Ajit's coaching has transformed my life. His expert guidance has empowered me to achieve a harmonious balance between my personal and professional goals. I'm incredibly grateful for his support in helping me become a more well-rounded individual.",
      image: "/images/bg2.png",
      bgColor: "#4caf50",
      rating: 3,
    },

    {
      id: 4,
      title: "shfgksdjgh",
      heding: "we all have the potential to grow and achieve",
      content:
        "Ajit's coaching has transformed my life. His expert guidance has empowered me to achieve a harmonious balance between my personal and professional goals. I'm incredibly grateful for his support in helping me become a more well-rounded individual.",
      image: "/images/bh3.png",
      bgColor: "#4caf50",
      rating: 5,
    },

    {
      id: 4,
      title: "shfgksdjgh",
      heding: "we all have the potential to grow and achieve",
      content:
        "Ajit's coaching has transformed my life. His expert guidance has empowered me to achieve a harmonious balance between my personal and professional goals. I'm incredibly grateful for his support in helping me become a more well-rounded individual.",
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
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.5562 22.0582C17.6956 21.9189 17.8063 21.7534 17.8818 21.5713C17.9572 21.3892 17.9961 21.1941 17.9961 20.9969C17.9961 20.7998 17.9572 20.6046 17.8818 20.4225C17.8063 20.2404 17.6956 20.075 17.5562 19.9357L9.62116 12.0007L17.5562 4.05818C17.8376 3.77672 17.9957 3.39497 17.9957 2.99693C17.9957 2.59888 17.8376 2.21714 17.5562 1.93568C17.2747 1.65422 16.893 1.49609 16.4949 1.49609C16.0969 1.49609 15.7151 1.65422 15.4337 1.93568L6.43366 10.9357C6.15429 11.2167 5.99747 11.5969 5.99747 11.9932C5.99747 12.3895 6.15429 12.7696 6.43366 13.0507L15.4337 22.0507C15.5725 22.1906 15.7375 22.3019 15.9194 22.378C16.1012 22.4541 16.2962 22.4937 16.4934 22.4944C16.6905 22.4951 16.8858 22.4569 17.0682 22.382C17.2505 22.3072 17.4164 22.1972 17.5562 22.0582Z"
                fill="#B8B8B8"
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
          customButtonGroup={<ButtonGroup />}
          renderButtonGroupOutside
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
                    <p className="para5" style={{ marginBottom: "10px" }}>
                      {item?.content}
                    </p>

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
