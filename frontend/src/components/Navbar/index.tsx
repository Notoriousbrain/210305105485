import { Link, useLocation } from "react-router-dom";
import { CrossIcon, MenuIcon } from "../../icons";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container z-50 mx-auto w-full">
      <div
        className={`h-[10vh] fixed z-50 container w-full flex items-center ${
          location.pathname === "/"
            ? "border-none"
            : "border-b-2 border-[#E2E2E2]"
        } bg-white justify-between px-10 md:px-6 xs:px-4`}
      >
        <Link to="/">
          {/* <img
            src={logo}
            alt="Keywis"
            className="w-[150px] sm:w-[125px] xs:w-[100px]"
          /> */}
          <div className="text-[40px] md:text-[32px] sm:text-[24px]">AffordMed</div>
        </Link>
        <div className="flex items-center gap-10 md:gap-6 mds:hidden">
          <Link
            to="/"
            className={`${
              location.pathname === "/"
                ? "font-semibold text-[#020202]"
                : "font-medium text-[#636363]"
            }`}
          >
            Home
          </Link>
          <Link
            to="/#products"
            className={`${
              location.pathname === "/#products"
                ? "font-semibold text-[#020202]"
                : "font-medium text-[#636363]"
            }`}
          >
            Products
          </Link> 
        </div>
        <div onClick={handleMenu} className="hidden mds:block">
          {isOpen ? <CrossIcon /> : <MenuIcon />}
        </div>
      </div>
      <div
        className={`transition-transform my-[10vh] fixed w-full z-50 duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-[200%]"
        }`}
      >
        <div className="bg-white flex flex-col justify-between pb-4 z-50 h-[90vh] px-6">
          <div className="flex flex-col items-start space-y-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`${
                location.pathname === "/"
                  ? "font-semibold text-[#020202]"
                  : "font-medium text-[#636363]"
              }`}
            >
              Home
            </Link>
            <Link
              to="/#about-us"
              onClick={() => setIsOpen(false)}
              className={`${
                location.pathname === "/#about-us"
                  ? "font-semibold text-[#020202]"
                  : "font-medium text-[#636363]"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/#products"
              onClick={() => setIsOpen(false)}
              className={`${
                location.pathname === "/#products"
                  ? "font-semibold text-[#020202]"
                  : "font-medium text-[#636363]"
              }`}
            >
              Products
            </Link>
            <Link
              to="/contact-us"
              onClick={() => setIsOpen(false)}
              className={`${
                location.pathname === "/contact-us"
                  ? "font-semibold text-[#020202]"
                  : "font-medium text-[#636363]"
              }`}
            >
              Contact Us
            </Link>
          </div>
          {/* <div className="bg-my-primary cursor-pointer space-x-2 px-2 rounded-[15px] py-3 text-white flex items-center justify-center">
            <CartIcon />
            <div>Your Orders</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
