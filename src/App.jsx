import { Nav } from "./components/Nav";
import { NewArrivalSection } from "./components/NewArrivalSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { SHOES } from "./constant";

export const App = () => {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav />
      <ShoeDetail />
      <NewArrivalSection items={SHOES} />
    </div>
  );
};
