import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { NewArrivalSection } from "./components/NewArrivalSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { Car } from "./components/Car";
import { Sidebar } from "./components/Sidebar";
import { SHOES } from "./constant";

const FAKE_CAR = SHOES.map((shoe) => {
  return { product: shoe, qty: 1, size: 44 };
});

export const App = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark")
    );
  };

  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClick={() => setIsSideBarOpen(true)} />
      <ShoeDetail />
      <NewArrivalSection items={SHOES} />
      <Sidebar
        isOpen={isSideBarOpen}
        onClickClose={() => setIsSideBarOpen(false)}
      >
        <h2 className="text-2xl font-bold mb-10">Cart</h2>
        <Car carItems={FAKE_CAR} />
      </Sidebar>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="bg-night-50 rounded-full px-4 py-2 text-white dark:bg-white dark:text-night shadow-lg"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
};
