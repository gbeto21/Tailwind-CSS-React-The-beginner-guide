import { useState } from "react";
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
    </div>
  );
};
