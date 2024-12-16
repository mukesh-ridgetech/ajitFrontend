// import Navbar from "../../componets/Navbar";
// import Footer from "../../componets/Footer";
// import Blog from "../../componets/Blog";
// import BlogItemHero from "../../componets/BlogItemHero";
"use client";
import { useState, useEffect } from "react";
import Navbar from "../../componets/Navbar";
import BlogItemHero from "../../componets/BlogItemHero";
import BlogContent from "../../componets/BlogContent";
import Blog from "../../componets/Blog";
import Footer from "../../componets/Footer";
import { useRouter } from "next/navigation";
import axios from "axios";
import { baseurl } from "@/app/helper/Helper";
// import BlogContent from "../../Blogcomponets/BlogContent";
const page = ({ params }) => {
  const { id } = params;

  const [data, setData] = useState();

  const fetchBlogdata = async () => {
    try {
      const response = await axios.get(`${baseurl}/api/blog/getbyId/${id}`);
      console.log("response.data", response.data);
      if (response.data) {
        setData(response.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchBlogdata();
  }, []);

  // console.log("id is ", id);
  return (
    <div>
      <Navbar type={"Blog"} />
      <BlogItemHero data={data} />
      <BlogContent data={data} />
      <Blog />
      <Footer />
    </div>
  );
};

export default page;
