import React from "react";
import Image from "next/image";
const BlogItemHero = () => {
  return (
    <div className='className="main-container"'>
      <div className="blogItem-hero-container">
        <div className="blogItem-hero-content-section">
          <div className="blogitem-image-section">
            <Image
              src="/images/bg2.png"
              alt="Description of the image"
              width={250}
              height={400}
            />
          </div>
          <div className="blogItem-heding-box">
            <h4 className="blogItem-conten-heading">
              Where Coaching Works: A Guide to Personal and Professional
              Development
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItemHero;
