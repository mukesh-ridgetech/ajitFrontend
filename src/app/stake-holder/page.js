import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
import BookDiscovery from "../componets/BookDiscovery";
import CoauchingHero from "../componets/CoauchingHero";
import Benifit from "../componets/Benifit";
import Essential from "../componets/Essential";
import LeaderShip from "../componets/LeaderShip";
import CoachingsHero from "../componets/CoachingsHero";

const page = () => {
  return (
    <div>
      <Navbar type={"Coaching"} />
      <CoachingsHero />
      <Benifit />
      <Essential />
      <LeaderShip />
      <BookDiscovery />

      <Footer />
    </div>
  );
};

export default page;
