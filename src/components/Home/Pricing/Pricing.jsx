const Pricing = () => {
  const prices = [
    {
      title: "Free",
      desc: "Organize across all apps by hand",
      price: "00",
      validity: "Monthly",
      features: [
        "Pricing Feature",
        "Pricing Feature",
        "Pricing Feature",
        "Pricing Feature",
        "Pricing Feature",
      ],
    },
    {
      title: "Standard",
      desc: "Organize across all apps by hand",
      price: "10",
      validity: "Monthly",
      features: [
        "Pricing Feature",
        "Pricing Feature",
        "Pricing Feature",
        "Pricing Feature",
        "Pricing Feature",
      ],
    },
    {
      title: "Business",
      desc: "Organize across all apps by hand",
      price: "99",
      validity: "Yearly",
      features: [
        "Pricing Feature",
        "Pricing Feature",
        "Pricing Feature",
        "Pricing Feature",
        "Pricing Feature",
      ],
    },
  ];

  return (
    <div className="bg-secondary py-[100px]">
      <div className="flex flex-col justify-center items-center text-center text-white">
        <h2 className=" text-[48px] tracking-[0.2px] mb-4">Pricing</h2>
        <p className="text-[28px] leading-[40px] tracking-[0.2px] max-w-[49ch] px-10 sm:px-0">
          Most calendars are designed for teams.
          <span className="hidden sm:block">
            Slate is designed for freelancers
          </span>
        </p>
      </div>

      {/* price table */}
      <div className="container-class mt-[50px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {prices.map((price, index) => (
            <div
              key={index}
              className="rounded-[10px] border border-[#DEDEDE] px-[40px] py-[50px] bg-white flex flex-col justify-center items-center text-center gap-8 group hover:bg-primary hover:text-white transition-all duration-500"
            >
              <div>
                <h3 className="text-secondary group-hover:text-white transition-all duration-500 text-[20px] font-bold leading-7 tracking-[0.1px]">
                  {price.title}
                </h3>
                <p className="text-textGray group-hover:text-white transition-all duration-500 leading-[23px] tracking-[0.1px] text-center">
                  {price.desc}
                </p>
              </div>

              <div className="flex justify-center items-center gap-2">
                <h2 className="text-secondary group-hover:text-white transition-all duration-500 text-[74px] font-bold leading-[84px] tracking-[0.2px]">
                  {price.price}
                </h2>
                <div className="text-start">
                  <h3 className="text-secondary group-hover:text-white transition-all duration-500 text-[20px] font-bold leading-7 tracking-[0.1px]">
                    $
                  </h3>
                  <p className="text-textGray group-hover:text-white transition-all duration-500 leading-[23px] tracking-[0.1px]">
                    {price.validity}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {price.features.map((feature, index) => (
                  <p
                    key={index}
                    className="text-textGray group-hover:text-white transition-all duration-500 text-[15px] leading-[23px] tracking-[0.2px]"
                  >
                    {feature}
                  </p>
                ))}
              </div>

              <div className="">
                <button className="px-[52px] py-[10px] text-[20px] rounded-full capitalize text-white bg-primary border border-solid border-primary shadow-custom space-2 group-hover:text-primary transition-all duration-500 group-hover:bg-white">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
