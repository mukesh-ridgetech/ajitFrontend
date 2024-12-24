import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
import Impact from "../componets/Impact";
import CoauchingHero from "../componets/CoauchingHero";
const page = () => {
  return (
    <div>
      <Navbar Coaching={"Coaching"} />
      <CoauchingHero />
      <Impact />
      <Footer />
    </div>
  );
};

export default page;
