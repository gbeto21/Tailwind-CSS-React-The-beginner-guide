import { RxHamburgerMenu } from "react-icons/rx";
import NikeLogo from "../assets/nike-logo.svg?react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export const Nav = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* Burger button */}
      <button className="hover:bg-gray-100 rounded-lg p-2 focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu size={25} />
      </button>
      {/* Menu list */}
      <div className="w-fll">
        <ul className="bg-gray-50 text-lg border border-gray-50 rounded-lg p-4">
          {ROUTES.map((route, index) => (
            <li
              className={`rounded py-2 px-3 cursor-pointer ${
                index == 0 ? "bg-blue-500 text-white" : "hover:bg-gray-100"
              }`}
              key={route}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
