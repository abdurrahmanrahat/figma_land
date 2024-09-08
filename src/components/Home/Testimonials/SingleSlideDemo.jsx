import { IMAGES } from "../../../image-data";

const SingleSlideDemo = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-6">
      <div className="mb-4">
        <img src={IMAGES.Testimonials.testimonialLogo} alt="testimonial logo" />
      </div>
      <p className="text-[22px] md:text-[28px] text-textGray leading-[40px] tracking-[0.2px] max-w-[62ch]">
        Most calendars are designed for teams. Slate is designed for freelancers
        who want a simple way to plan their schedule.
      </p>

      <div className="flex gap-3 justify-center items-center">
        <img
          src={IMAGES.Testimonials.testimonialAvatar}
          alt="testimonial avatar"
        />
        <div className="text-start">
          <p className="text-textGray tracking-[0.1px]">Organize Across</p>
          <p className="text-secondary font-medium tracking-[0.1px]">
            UI Designer
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleSlideDemo;
