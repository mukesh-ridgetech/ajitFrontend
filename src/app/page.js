import Image from "next/image";
import Contact from "./componets/Contact";
import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import CoachingPower from "./componets/CoachingPower";
import Message from "./componets/Message";
import TransformCouching from "./componets/TransformCouching";
import FAQ from "./componets/FAQ";
import FAQMAIN from "./componets/FAQMAIN";
import BookDiscovery from "./componets/BookDiscovery";
import Blog from "./componets/Blog";
import Testinomial from "./componets/Testinomial";
import Elevate from "./componets/Elevate";
import Footer from "./componets/Footer";
import Progress from "./componets/Progress";
import CustomModal from "./componets/CustomModal";
import CustomModel from "./componets/CustomModel";
export default function Home() {
  var faqs = [
    {
      question: "What services does Ridge Tech Corporation provide?",
      answer:
        "Ridge Tech Corporation offers a range of services, including Data Intelligence & Automation, Robotics Process Automation, Wireframing & Prototyping, App Development, SaaS Solutions, Enterprise Solutions, and On-Demand Solutions.",
    },
    {
      question: "What industries does Ridge Tech Corporation serve?",
      answer:
        "We cater to a diverse range of industries, including Healthcare, Fintech, Real Estate, eCommerce, Fitness, Restaurants, Travel, Sports, Social Networking, Education, Entertainment, and Logistics.",
    },
    {
      question: "How can I connect with Ridge Tech Corporation?",
      answer:
        "You can connect with us by clicking on the Connect With Our Expert button on our homepage or through our contact page.",
    },
    {
      question: "What makes Ridge Tech Corporation unique?",
      answer:
        "With a 97% client retention rate, Ridge Tech Corporation is trusted by over 60 satisfied clients and has delivered 100+ custom web and mobile app solutions. Our team of digital transformation experts offers tailored solutions to businesses of all sizes.",
    },

    {
      question: "What makes Ridge Tech Corporation unique?",
      answer:
        "With a 97% client retention rate, Ridge Tech Corporation is trusted by over 60 satisfied clients and has delivered 100+ custom web and mobile app solutions. Our team of digital transformation experts offers tailored solutions to businesses of all sizes.",
    },
  ];
  return (
    <div>
      <Navbar type={"Home"} />
      {/* <CustomModel /> */}
      <Hero />
      <CoachingPower />
      <TransformCouching />
      <Message />
      <Elevate />
      <FAQMAIN faqs={faqs} />
      <Blog />
      <Testinomial />
      <BookDiscovery />
      <Footer />
    </div>
  );
}
