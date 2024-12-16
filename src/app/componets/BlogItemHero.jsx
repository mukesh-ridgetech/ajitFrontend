import React from "react";
import Image from "next/image";
import { baseurl } from "../helper/Helper";
const BlogItemHero = ({ data }) => {
  return (
    <div className='className="main-container"'>
      <div className="blogItem-hero-container">
        <div className="blogItem-hero-content-section">
          <div className="blogitem-image-section">
            <img
              src={`${baseurl}${data?.image}`}
              alt="Description of the image"
              style={{ width: "250px", height: "400px" }}
            />
          </div>
          <div className="blogItem-heding-box">
            <h4 className="blogItem-conten-heading">{data?.title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItemHero;
