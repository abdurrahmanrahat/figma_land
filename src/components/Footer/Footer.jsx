import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IoLocationOutline, IoPhonePortraitOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#252b42] text-white">
      <div className="max-w-[1240px] mx-auto px-[4%] md:px-0">
        <div className="py-[90px] grid grid-cols-1 sm:grid-cols-4 gap-20 sm:gap-0 text-center sm:text-start">
          {/* col 01 */}
          <div>
            <h3 className="text-[22px] font-bold tracking-[0.1] mb-6">
              Popular Pages
            </h3>

            <ul className="space-y-5">
              <li className="text-[15px] tracking-[0.2] cursor-pointer">
                Home
              </li>
              <li className="text-[15px] tracking-[0.2] cursor-pointer">
                About
              </li>
              <li className="text-[15px] tracking-[0.2] cursor-pointer">
                Contact
              </li>
              <li className="text-[15px] tracking-[0.2] cursor-pointer">
                Price
              </li>
              <li className="text-[15px] tracking-[0.2] cursor-pointer">
                Products
              </li>
            </ul>
          </div>

          {/* col 02 */}
          <div>
            <h3 className="text-[22px] font-bold tracking-[0.1] mb-6">
              Tomothy
            </h3>

            <ul className="space-y-5">
              <li className="text-[15px] tracking-[0.2]">Eleanor Edwards</li>
              <li className="text-[15px] tracking-[0.2]">Ted Robertson</li>
              <li className="text-[15px] tracking-[0.2]">Annette Russel</li>
              <li className="text-[15px] tracking-[0.2]">Jannie Mckinney</li>
              <li className="text-[15px] tracking-[0.2]">Gloria Richards</li>
            </ul>
          </div>

          {/* col 03 */}
          <div>
            <h3 className="text-[22px] font-bold tracking-[0.1] mb-6">
              Jane Black
            </h3>

            <ul className="space-y-5">
              <li className="text-[15px] tracking-[0.2]">Philip Jones</li>
              <li className="text-[15px] tracking-[0.2]">Product</li>
              <li className="text-[15px] tracking-[0.2]">Colleen Russell</li>
              <li className="text-[15px] tracking-[0.2]">Marvin Hawkins</li>
              <li className="text-[15px] tracking-[0.2]">Bruce Simmons</li>
            </ul>
          </div>

          {/* col 04 */}
          <div className="flex flex-col justify-center items-center sm:items-start gap-5">
            <div className="flex gap-2">
              <IoLocationOutline className="text-[22px]" />
              <p className="text-[15px] tracking-[0.2]">
                7480 Mockingbird Hill undefined
              </p>
            </div>
            <div className="flex gap-2">
              <IoPhonePortraitOutline className="text-[22px]" />
              <p className="text-[15px] tracking-[0.2]">(239) 555-0108</p>
            </div>
            <div className="text-[22px] flex gap-5">
              <FaLinkedin />
              <FaTwitterSquare />
              <FaFacebookSquare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
