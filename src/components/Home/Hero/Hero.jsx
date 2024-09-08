import { IMAGES } from "../../../image-data";

const Hero = () => {
  return (
    <div className="h-[768px] xl:h-[890px] relative">
      <div className="w-full h-full absolute inset-0"></div>
      <div
        className="w-full h-full flex items-center justify-center relative text-white"
        style={{
          backgroundImage: `url(${IMAGES.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          //   clipPath: "polygon(0 0, 100% 0, 50% 100%)",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[48px] leading-[55px] md:text-[60px] md:leading-[69px] lg:text-[74px] lg:leading-[84px] tracking-wide font-bold capitalize text-center max-w-[17ch]">
            The best products start with Figma
          </h1>
          <p className="text-white text-[28px] leading-[40px] mt-[30px] mb-[60px] tracking-[0.2px] px-10 sm:px-0 text-center max-w-[49ch]">
            Most calendars are designed for teams.{" "}
            <span className="hidden sm:block">
              Slate is designed for freelancers
            </span>
          </p>
          <button className="px-[52px] py-[10px] text-[20px] rounded-full capitalize text-white bg-primary border border-solid border-primary shadow-custom space-2">
            Try for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
