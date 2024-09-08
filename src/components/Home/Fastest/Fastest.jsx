import { IMAGES } from "../../../image-data";

const Fastest = () => {
  return (
    <div className="container-class mt-[100px] grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
      <div className="space-y-4 text-center sm:text-start">
        <h2 className="text-[48px] text-secondary tracking-[0.2px] leading-[55px]">
          Fastest way to organize
        </h2>
        <p className="text-[28px] text-textGray leading-[40px] tracking-[0.2px] max-w-[49ch] px-10 sm:px-0">
          Most calendars are designed for teams.
          <span className="hidden sm:block">
            Slate is designed for freelancers
          </span>
        </p>
        <div className="pt-8">
          <button className="px-[52px] py-[10px] text-[20px] rounded-full capitalize text-white bg-primary border border-solid border-primary shadow-custom">
            Try for free
          </button>
        </div>
      </div>
      <div className="mt-[50px] sm:mt-0">
        <img src={IMAGES.fastest} alt="fastest" />
      </div>
    </div>
  );
};

export default Fastest;
