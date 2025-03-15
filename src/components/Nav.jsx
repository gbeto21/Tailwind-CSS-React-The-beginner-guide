import { RxHamburgerMenu } from "react-icons/rx";
import NikeLogo from "../assets/nike-logo.svg?react";

export const Nav = () => {
  return (
    <nav className="flex justify-between items-center">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* Burger button */}
      <button className="hover:bg-gray-100 rounded-lg p-2 focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu size={25} />
      </button>
    </nav>
  );
};
