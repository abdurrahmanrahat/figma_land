import { CiMail } from "react-icons/ci";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IoLocationOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { IMAGES } from "../../../image-data";

const Contact = () => {
  return (
    <div className="my-[100px]">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-secondary text-[48px] tracking-[0.2px] mb-4">
          Contact Us
        </h2>
        <p className="text-[28px] text-textGray leading-[40px] tracking-[0.2px] max-w-[49ch] px-10 sm:px-0">
          Most calendars are designed for teams.
          <span className="hidden sm:block">
            Slate is designed for freelancers
          </span>
        </p>
      </div>

      {/* form and location */}
      <div className="container-class mt-[50px] md:mt-[60px] grid grid-cols-1 sm:grid-cols-12 gap-4 md:gap-12">
        {/* Form Section */}
        <div className="col-span-1 sm:col-span-5 shadow-lightShadow border border-[#DDDDDD] rounded-[10px] p-[20px] sm:px-[10px] sm:py-[20px] md:p-[40px]">
          <h3 className="text-secondary text-[22px] font-bold leading-7 tracking-[0.1px] text-center mb-8 sm:mb-10">
            Contact Us
          </h3>
          <form className="space-y-6 sm:space-y-8">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-[20px] py-[12px] sm:px-[28px] sm:py-[14px] rounded-full border border-[#E8E8E8] bg-[#F4F4F4] focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-[20px] py-[12px] sm:px-[28px] sm:py-[14px] rounded-full border border-[#E8E8E8] bg-[#F4F4F4] focus:outline-none"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                className="w-full px-[20px] py-[12px] sm:px-[28px] sm:py-[14px] rounded-lg border border-[#E8E8E8] bg-[#F4F4F4] focus:outline-none"
              ></textarea>
            </div>
            <div className="text-center">
              <button className="px-[36px] py-[12px] text-[18px] sm:text-[20px] rounded-full capitalize text-white bg-primary border border-solid border-primary shadow-custom">
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Location Section */}
        <div className="col-span-1 sm:col-span-7 flex flex-col justify-center gap-12 mt-[40px] sm:mt-0">
          <div className="space-y-6 grid sm:grid-cols-12 gap-2">
            <div className="flex items-start sm:flex-col sm:items-center gap-2 sm:gap-4 sm:col-span-5 sm:text-center">
              <IoLocationOutline className="text-[36px] sm:text-[32px] text-primary" />
              <p className="text-[15px] tracking-[0.2px] ">
                6386 Spring St undefined Anchorage, Georgia 12473 United States
              </p>
            </div>
            <div className="flex items-start sm:flex-col sm:items-center gap-2 sm:gap-4 sm:col-span-3">
              <IoPhonePortraitOutline className="text-[24px] sm:text-[32px] text-primary" />
              <p className="text-[15px] tracking-[0.2px]">(239) 555-0108</p>
            </div>
            <div className="flex items-start sm:flex-col sm:items-center gap-2 sm:gap-4 sm:col-span-4">
              <CiMail className="text-[24px] sm:text-[32px] text-primary" />
              <p className="text-[15px] tracking-[0.2px]">
                willie.jennings@example.com
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img src={IMAGES.map} alt="" />
          </div>

          <div className="text-[28px] flex gap-5 text-primary">
            <FaLinkedin className="cursor-pointer" />
            <FaTwitterSquare className="cursor-pointer" />
            <FaFacebookSquare className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
