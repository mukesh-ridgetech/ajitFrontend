import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
import Blog from "../componets/Blog";
import BlogItemHero from "../componets/BlogItemHero";
import BlogContent from "../componets/BlogContent";
const page = () => {
  return (
    <div>
      <Navbar type={"Blog"} />
      <BlogItemHero />
      <BlogContent />
      <Blog />
      <Footer />
    </div>
  );
};

export default page;
