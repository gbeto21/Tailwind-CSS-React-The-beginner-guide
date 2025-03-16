import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { NewArrivalSection } from "./components/NewArrivalSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { Car } from "./components/Car";
import { Sidebar } from "./components/Sidebar";
import { SHOES } from "./constant";

export const App = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOES[1]);
  const [carItems, setCarItems] = useState([]);

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

  const addToCar = (product, qty, size) => {
    if (qty && size) {
      const updatedCarItems = [...carItems];
      const existingItemIndex = carItems.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex > -1) {
        updatedCarItems[existingItemIndex].qty = qty;
        updatedCarItems[existingItemIndex].size = size;
      } else updatedCarItems.push({ product, qty, size });

      setCarItems(updatedCarItems);
    }
  };

  return (
    <div className="animate-fadeIn p-10 xl:px-24 dark:bg-night">
      <Nav onClick={() => setIsSideBarOpen(true)} />
      <ShoeDetail shoe={currentShoe} onClickAdd={addToCar} />
      <NewArrivalSection items={SHOES} onClickCard={setCurrentShoe} />
      <Sidebar
        isOpen={isSideBarOpen}
        onClickClose={() => setIsSideBarOpen(false)}
      >
        <Car carItems={carItems} />
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
