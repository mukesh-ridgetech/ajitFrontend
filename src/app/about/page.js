import Navbar from "../componets/Navbar";
import ABoutHero from "../componets/ABoutHero";
import Footer from "../componets/Footer";
import Know from "../componets/Know";
import AboutVision from "../componets/AboutVision";

const page = () => {
  return (
    <div>
      <Navbar type={"About Us"} />
      <ABoutHero />
      <AboutVision />
      <Know />
      <Footer />
    </div>
  );
};

export default page;
