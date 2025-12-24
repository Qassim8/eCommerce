import { useState } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";
import LogoIcon from "/logo-tree.png";

const MenuNav = ({ isContainer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-4 bg-gray-900">
      <div className="flex md:hidden justify-between items-center px-3">
        <div className="flex items-center gap-1">
          <img className="w-6 object-contain" src={LogoIcon} />
          <h2 className="text-2xl text-slate-300 font-medium">Ecobazar</h2>
        </div>
        <button
          className="md:hidden text-white text-2xl block ps-3"
          onClick={() => setOpen(!open)}
        >
          <RxHamburgerMenu />
        </button>
      </div>

      <div
        className={`${
          isContainer
            ? "container px-3 md:px-0 xl:max-w-7xl lg:max-w-4xl md:max-w-2xl mx-auto"
            : "px-4"
        } flex justify-between items-center`}
      >
        {/* Links */}
        <div className="hidden lg:flex gap-8 text-gray-400">
          <div className="flex items-center gap-1 hover:text-white duration-200">
            <Link to={"/"}>Home</Link>
            <IoIosArrowDown />
          </div>
          <div className="flex items-center gap-1 hover:text-white duration-200">
            <Link to={"/shop"}>Shop</Link>
            <IoIosArrowDown />
          </div>
          <div className="flex items-center gap-1 hover:text-white duration-200">
            <Link to={"/"}>Pages</Link>
            <IoIosArrowDown />
          </div>
          <div className="flex items-center gap-1 hover:text-white duration-200">
            <Link to={"/"}>Blog</Link>
            <IoIosArrowDown />
          </div>
          <Link className="hover:text-white duration-200" to={"/"}>
            About Us
          </Link>
          <Link className="hover:text-white duration-200" to={"/"}>
            Contact Us
          </Link>
        </div>
        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 bg-gray-900 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-5 px-6 py-6 text-gray-300">
            {["Home", "Shop", "Pages", "Blog", "About Us", "Contact Us"].map(
              (item) => (
                <Link
                  key={item}
                  onClick={() => setOpen(false)}
                  className="hover:text-white transition"
                  to="/"
                >
                  {item}
                </Link>
              )
            )}

            <div className="flex items-center gap-2 text-white mt-4 border-t border-gray-700 pt-4">
              <FaPhoneVolume />
              <span>(219) 555-0114</span>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="hidden sm:flex text-white items-center gap-2">
          <FaPhoneVolume />
          <span>(219) 555-0114</span>
        </div>
      </div>
    </div>
  );
};

export default MenuNav;
