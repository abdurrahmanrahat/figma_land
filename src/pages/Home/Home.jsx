import Fastest from "../../components/Home/Fastest/Fastest";
import Features from "../../components/Home/Features/Features";
import Fingertip from "../../components/Home/Fingertip/Fingertip";
import Hero from "../../components/Home/Hero/Hero";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import Partners from "../../components/Partners/Partners";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Fastest />
      <Fingertip />
      <Partners />
      <Testimonials />
    </div>
  );
};

export default Home;
