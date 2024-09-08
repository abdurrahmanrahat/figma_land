import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IMAGES } from "../../image-data";

const UserSidebar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [scrollBgColor, setScrollBgColor] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNavToggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Company" },
    { id: 3, text: "Resources" },
    { id: 4, text: "About" },
    { id: 5, text: "Contact" },
  ];

  // Function to handle clicks outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpenMenu &&
        !document.getElementById("navbar").contains(event.target)
      ) {
        setIsOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenMenu]);

  const listenToScroll = () => {
    let addBgColorHeight = 200;
    const windowScrollHeight =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (windowScrollHeight > addBgColorHeight) {
      setScrollBgColor(true);
    } else {
      setScrollBgColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <div
      className={` ${
        scrollBgColor
          ? "bg-black transition-all duration-1000"
          : "bg-transparent"
      } text-white px-4 md:px-0 py-4 md:py-0 fixed top-0 left-0 z-[999] w-full h-auto`}
    >
      <div className="max-w-[1240px] mx-auto px-[4%] md:px-0">
        <div className="flex items-center justify-between py-4">
          {/* Nav items section */}
          <div className="md:flex gap-5">
            <ul className="hidden md:flex space-x-5">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="text-gray-100 hover:text-[#0095CF] transition-all duration-500 p-4 cursor-pointer"
                >
                  {item.text}
                </li>
              ))}
            </ul>
            <img src={IMAGES.logo} alt="" />
          </div>

          {/* Mobile Navigation Icon */}
          <div onClick={handleNavToggle} className="block md:hidden ">
            {isOpenMenu ? <X /> : <Menu />}
          </div>

          {/* Mobile menu */}
          <div
            id="navbar"
            className={`fixed md:hidden top-0 left-0 w-[70%] h-screen bg-black text-gray-100 ease-in-out duration-700 z-[999] p-[20px] ${
              isOpenMenu ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* logo and close toggle icon */}
            <div className="mb-[12px]">
              <Link href="/">
                <img src={IMAGES.logo} alt="" />
              </Link>
            </div>

            {/* mobile nav items */}
            <nav>
              <ul className="space-y-[6px]">
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className="text-gray-100 hover:text-[#0095CF] transition-all duration-500 p-4 cursor-pointer"
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* Mobile Navlinks end */}

          {/* auth */}
          <div className="hidden md:flex text-[22px] gap-5 mt-2">
            <FaLinkedin />
            <FaTwitterSquare />
            <FaFacebookSquare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;

{
  /* <li className="font-medium md:text-[18px] hover:text-[#0095CF] transition-all duration-500">
  <ActiveLink href="/flashsale">Flash Sale</ActiveLink>
</li>; */
}
