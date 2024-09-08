import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleSlideDemo from "./SingleSlideDemo";

const Testimonials = () => {
  return (
    <div className="my-[100px]">
      <h2 className="text-secondary text-center text-[48px] tracking-[0.2px] mb-4">
        Testimonials
      </h2>

      <div className="container-class md:px-[60px] mt-[50px]">
        <div
          style={{
            position: "relative",
          }}
        >
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={2200}
            centerMode={false}
            containerClass="container-padding-bottom"
            draggable
            focusOnSelect={false}
            infinite={true}
            keyBoardControl
            itemClass="px-3"
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 564,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 564,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rtl={false}
            slidesToSlide={1}
            swipeable
            showDots
          >
            <SingleSlideDemo />
            <SingleSlideDemo />
            <SingleSlideDemo />
            <SingleSlideDemo />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
