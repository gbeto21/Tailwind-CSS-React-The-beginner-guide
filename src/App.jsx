import { Nav } from "./components/Nav";
import { ShoeDetail } from "./components/ShoeDetail";
import { Card } from "./components/Card";
import { SHOES } from "./constant";

export const App = () => {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      {/* <Nav />
      <ShoeDetail /> */}
      <Card item={SHOES[0]} />
    </div>
  );
};
