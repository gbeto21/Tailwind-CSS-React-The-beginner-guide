import { useState } from "react";
import { Nav } from "./components/Nav";
import { NewArrivalSection } from "./components/NewArrivalSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { Sidebar } from "./components/Sidebar";
import { SHOES } from "./constant";

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
      ></Sidebar>
    </div>
  );
};
