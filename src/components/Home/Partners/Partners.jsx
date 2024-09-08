import { IMAGES } from "../../../image-data";

const Partners = () => {
  const partners = [
    {
      logo: IMAGES.Partners.partner01,
      clientName: "John Done",
    },
    {
      logo: IMAGES.Partners.partner02,
      clientName: "Rahat Hossain",
    },
    {
      logo: IMAGES.Partners.partner03,
      clientName: "Yasin Arafath",
    },
    {
      logo: IMAGES.Partners.partner04,
      clientName: "Mahtab Hossen",
    },
    {
      logo: IMAGES.Partners.partner05,
      clientName: "Sumon Hasan",
    },
    {
      logo: IMAGES.Partners.partner01,
      clientName: "Tanvir Islam",
    },
    {
      logo: IMAGES.Partners.partner04,
      clientName: "Steepe John",
    },
    {
      logo: IMAGES.Partners.partner02,
      clientName: "John Done",
    },
  ];

  return (
    <div className="mt-[100px]">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-secondary text-[48px] tracking-[0.2px] mb-4">
          Partners
        </h2>
        <p className="text-[28px] text-textGray leading-[40px] tracking-[0.2px] max-w-[49ch] px-10 sm:px-0">
          Most calendars are designed for teams.
          <span className="hidden sm:block">
            Slate is designed for freelancers
          </span>
        </p>
      </div>

      {/* logo */}
      <div className="container-class md:px-[60px] mt-[40px] ">
        <div className="divide-y divide-[#E8E8E8]">
          <div className="grid grid-cols-4  divide-x divide-[#E8E8E8]">
            {partners.slice(0, 4).map((partner, index) => (
              <div
                key={index}
                className="p-2 sm:p-6 flex flex-col justify-center items-center text-center gap-4"
              >
                <p className="text-textGray tracking-[0.1px]">
                  {partner.clientName}
                </p>
                <img src={partner.logo} alt="" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 divide-x divide-[#E8E8E8]">
            {partners.slice(4).map((partner, index) => (
              <div
                key={index}
                className="p-2 sm:p-6 flex flex-col justify-center items-center text-center gap-4"
              >
                <p className="text-textGray tracking-[0.1px]">
                  {partner.clientName}
                </p>
                <img src={partner.logo} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-16 text-center">
          <button className="px-[52px] py-[10px] text-[20px] rounded-full capitalize text-white bg-primary border border-solid border-primary shadow-custom space-2">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;
