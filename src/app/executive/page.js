import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
import CoauchingHero from "../componets/CoauchingHero";
import Proven from "../componets/Proven";
import BookDiscovery from "../componets/BookDiscovery";
import Progress from "../componets/Progress";
import Bebifit1 from "../componets/Bebifit1";
import Impact from "../componets/Impact";
import CoauchingTransformation from "../componets/CoauchingTransformation";

const page = () => {
  return (
    <div>
      <Navbar type={"Coaching"} />
      <CoauchingHero />
      <Bebifit1 />
      <Impact />
      <CoauchingTransformation />
      <Proven />
      <BookDiscovery />
      <Footer />
    </div>
  );
};

export default page;
