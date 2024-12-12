import Blog from "../componets/Blog";
import Navbar from "../componets/Navbar";
import BlogHero from "../componets/BlogHero";
import BlogItem from "../componets/BlogItem";
import Footer from "../componets/Footer";
const blog = () => {
  return (
    <div>
      <Navbar type={"Blog"} />
      <BlogHero />
      <BlogItem />
      <Footer />
    </div>
  );
};

export default blog;
