import { CiTrash } from "react-icons/ci";
import { Select } from "../components/Select";
import { SIZES, QTY } from "../constant";

export const CartItem = ({ item }) => {
  return (
    <div className="cursor-pointer bg-gray-50 hover:bg-[#DAFFA2] p-2 space-y-2">
      {/* Image */}
      <div className="flex space-x-2">
        <img className="h-24" src={item.src} alt="car item" />
        {/* Title & description */}
        <div className="space-y-2">
          <div className="font-bold">{item.title}</div>
          <div className="text-sm text-gray-400">{item.description}</div>
        </div>
        {/* Price */}
        <div className="font-bold">${item.price}</div>
      </div>

      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold">SIZE</div>
            <Select title="" options={SIZES} className={"w-16 p-1"} />
          </div>
          <div>
            <div className="font-bold">QTY</div>
            <Select title="" options={QTY} className={"w-16 p-1"} />
          </div>
        </div>
        <button>
          <CiTrash size={25} className="text-black" />
        </button>
      </div>
    </div>
  );
};
