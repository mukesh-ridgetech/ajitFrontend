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
      question: "Is it worth investing in coaching?",
      answer:
        "The value of coaching can be significant in terms of personal and professional growth. While there may be an initial investment, the long-term benefits can outweigh the cost. Consider the potential return on investment in terms of increased productivity, improved decision-making, and overall self-fulfillment.",
    },
    {
      question:
        " How is coaching different from Mentoring/Training/Counselling/Therapy?",
      answer:
        "Coaching, mentoring, training, counseling, and therapy are all distinct approaches to personal and professional development. Coaching focuses on goal achievement and future-oriented development, while mentoring involves sharing experience and advice. Training emphasizes skill acquisition and knowledge transfer, while counseling and therapy address emotional and psychological well-being. Understanding these differences can help individuals choose the most appropriate approach for their specific needs.",
    },
    {
      question: "Is coaching confidential?",
      answer:
        " Yes, coaching is confidential. Coaches are bound by ethical codes to maintain client privacy and confidentiality.",
    },
    {
      question: "What makes Ridge Tech Corporation unique?",
      answer:
        "With a 97% client retention rate, Ridge Tech Corporation is trusted by over 60 satisfied clients and has delivered 100+ custom web and mobile app solutions. Our team of digital transformation experts offers tailored solutions to businesses of all sizes.",
    },

    {
      question: "How long does coaching typically last?",
      answer:
        "The duration of coaching can vary depending on the client's goals and needs. Coaching provides meaningful and sustainable results in 9-12 months. While frequency of sessions may vary, we suggest 60-90 mins sessions every month. Therefore, an individual should plan for 9-12 sessions to achieve desired results.",
    },

    {
      question: "Can coaching be done online?",
      answer:
        "Yes, coaching sessions can be conducted online, in-person, or a combination of both to accommodate your busy schedule or location.",
    },

    {
      question: " How much does coaching cost?",
      answer:
        "Coaching fees can vary depending on the length of engagement and number of sessions. It's important to discuss pricing and payment terms upfront with the coach.",
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
