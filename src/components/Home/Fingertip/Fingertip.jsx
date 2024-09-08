import { IMAGES } from "../../../image-data";

const Fingertip = () => {
  return (
    <div className="container-class mt-[100px] flex flex-col sm:flex-row-reverse gap-12 md:gap-16 items-center">
      <div className="text-center sm:text-start flex flex-col justify-center gap-4">
        <h3 className="text-[20px] font-bold tracking-[0.1px] text-secondary ">
          At your fingertips
        </h3>
        <h2 className="text-[48px] tracking-[0.2px] leading-[55px] text-secondary md:max-w-[16ch] capitalize hidden sm:block">
          Lightning fast prototyping
        </h2>
        <h2 className="text-[48px] tracking-[0.2px] leading-[55px] text-secondary max-w-[16ch] capitalize sm:hidden">
          Newsletter
        </h2>
        <div className="mt-[50px] sm:mt-0 sm:hidden">
          <img src={IMAGES.fingertip} alt="fastest" />
        </div>

        <div className="p-4">
          <h3 className="text-[20px] font-bold tracking-[0.1px] text-secondary ">
            Subscribe to our Newsletter
          </h3>
          <p className="text-[18px] text-textGray">
            Available exclusivery on Figmaland
          </p>
          <div className="grid grid-cols-12 justify-between items-center gap-6 mt-5">
            <div className="col-span-12 md:col-span-8">
              <input
                type="text"
                placeholder="Your Email"
                className="w-full px-[28px] py-[14px] rounded-full border border-[#E8E8E8] bg-[#F4F4F4]"
              />
            </div>
            <div className="col-span-12 md:col-span-4 ">
              <button className="px-[28px] py-[14px] w-full text-[20px] rounded-full capitalize text-white bg-primary border border-solid border-primary shadow-custom">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[50px] sm:mt-0 hidden sm:block">
        <img src={IMAGES.fingertip} alt="fastest" />
      </div>
    </div>
  );
};

export default Fingertip;
