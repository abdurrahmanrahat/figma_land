import Fastest from "../../components/Home/Fastest/Fastest";
import Features from "../../components/Home/Features/Features";
import Fingertip from "../../components/Home/Fingertip/Fingertip";
import Hero from "../../components/Home/Hero/Hero";
import Partners from "../../components/Home/Partners/Partners";
import Pricing from "../../components/Home/Pricing/Pricing";
import Testimonials from "../../components/Home/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Fastest />
      <Fingertip />
      <Partners />
      <Testimonials />
      <Pricing />
    </div>
  );
};

export default Home;
