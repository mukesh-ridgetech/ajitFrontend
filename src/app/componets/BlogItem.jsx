"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { redirect } from "next/navigation";
import { baseurl } from "../helper/Helper";
import { useRouter } from "next/navigation";
const BlogItem = () => {
  const [blogdata, setBlogData] = useState();
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

  const fetchBlog = async () => {
    try {
      const response = await axios.get(baseurl + "/api/blog/getAllBlog");
      console.log(response.data);

      if (response.data) {
        setBlogData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  // const handleNavigate = (item) => {
  //   redirect("/blogItem");
  // };
  const router = useRouter();
  const handleNavigate = (id) => {
    router.push(`/blogItem/${id}`); // Navigate to the dynamic route with the id
  };

  const colors = ["#D2B3DB", "#767BF3", "#F5CE67"];
  return (
    <div className="main-container">
      <div className="section-item-main-container">
        <div className="section-container">
          {blogdata?.map((item, index) => {
            const colorIndex = index % colors.length;
            return (
              <div
                key={item?._id}
                style={{
                  backgroundImage: `url(${baseurl}${item?.image})`,
                  "--dynamic-color": colors[colorIndex],
                }}
                className=" blog-crosel-box-item1-box bg-cover bg-center"
              >
                <div className="blog-title">{item?.title}</div>

                <div
                  className="marque-container"
                  style={{ paddingLeft: "20px" }}
                >
                  <div className="marquee-text">
                    {item?.metaTags[0]?.content}
                  </div>
                </div>

                <button
                  className="crosel-button"
                  onClick={() => {
                    handleNavigate(`${item?._id}`);
                  }}
                  style={{ color: "white" }}
                >
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
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
