import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
import Impact from "../componets/Impact";
import CoauchingHero from "../componets/CoauchingHero";
import CoauchingTransformation from "../componets/CoauchingTransformation";
import Benifi from "../componets/Benifi";
import BookDiscovery from "../componets/BookDiscovery";
import Proven from "../componets/Proven";
import CoachingsHero from "../componets/CoachingsHero";
import Coaching1Hero from "../componets/Coaching1Hero";
const page = () => {
  return (
    <div>
      <Navbar Coaching={"Coaching"} />
      <Coaching1Hero />
      <Benifi />
      <Impact />
      <CoauchingTransformation />
      <Proven />
      <BookDiscovery />
      <Footer />
    </div>
  );
};

export default page;
