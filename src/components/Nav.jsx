import { TbShoppingBag } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import NikeLogo from "../assets/nike-logo.svg?react";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export const Nav = ({ onClick }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="z-10 relative flex flex-wrap justify-between items-center">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* Burger button */}
      <button
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className="lg:hidden hover:bg-gray-100 rounded-lg p-2 focus:ring-2 focus:ring-gray-200"
      >
        <RxHamburgerMenu size={25} />
      </button>
      {/* Menu list */}
      <div
        className={`${showMobileMenu ? "" : "hidden"} w-full lg:w-auto lg:block`}
      >
        <ul className="lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 lg:border-none lg:bg-transparent text-lg border border-gray-50 rounded-lg p-4">
          {ROUTES.map((route, index) => (
            <li
              className={`lg:hover:text-blue-500 lg:hover:bg-transparent rounded py-2 px-3 cursor-pointer ${
                index == 0
                  ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                  : "hover:bg-gray-100"
              } ${(index == 3 || index == 4) && "lg:text-white"}`}
              key={route}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>
      {/*Cart button*/}
      <div
        onClick={onClick}
        className="btn-press-anim fixed left-4 bottom-4 lg:static lg:mr-8"
      >
        <div className="flex-center cursor-pointer h-12 w-12 rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
};
