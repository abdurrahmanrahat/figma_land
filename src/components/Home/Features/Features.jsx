import { IMAGES } from "../../../image-data";

const Features = () => {
  const features = [
    {
      icon: IMAGES.Features.feature01,
      title: "OpenType Variable fonts",
      desc: "Slate helps you see how many more days you need to work to reach your financial goal.",
    },
    {
      icon: IMAGES.Features.feature02,
      title: "Design with real data",
      desc: "Slate helps you see how many more days you need to work to reach your financial goal.",
    },
    {
      icon: IMAGES.Features.feature03,
      title: "Fastest way to take action",
      desc: "Slate helps you see how many more days you need to work to reach your financial goal.",
    },
  ];

  return (
    <div className="mt-[100px]">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-secondary text-[48px] tracking-[0.2px] mb-4">
          Features
        </h2>
        <p className="text-[28px] text-textGray leading-[40px] tracking-[0.2px] max-w-[49ch] px-10 sm:px-0">
          Most calendars are designed for teams.
          <span className="hidden sm:block">
            Slate is designed for freelancers
          </span>
        </p>
      </div>

      {/* features */}
      <div className="container-class md:px-[60px] mt-[40px] flex flex-col sm:flex-col-reverse">
        <div>
          <img src={IMAGES.video} alt="" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-16 xxl:gap-20  mt-12 sm:mt-0">
          {features?.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-5 text-center px-8 py-12 sm:px-4 sm:py-8 md:px-8 md:py-12 hover:shadow-custom transition-all duration-500"
            >
              <img src={feature.icon} alt="" />
              <h3 className="text-[20px] font-bold tracking-[0.1px]">
                {feature.title}
              </h3>
              <p className="text-[18px] tracking-[0.2px]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
