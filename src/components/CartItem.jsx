import { CiTrash } from "react-icons/ci";
import { Select } from "../components/Select";
import { SIZES, QTY } from "../constant";

export const CartItem = ({
  item: {
    qty,
    size,
    product: { src, title, description, price },
  },
}) => {
  return (
    <div className="cursor-pointer bg-gray-50 hover:bg-[#DAFFA2] p-2 space-y-2 dark:bg-transparent dark:hover:bg-night-50">
      {/* Image */}
      <div className="flex space-x-2">
        <img className="h-24" src={src} alt="car item" />
        {/* Title & description */}
        <div className="space-y-2 dark:text-white">
          <div className="font-bold">{title}</div>
          <div className="text-sm text-gray-400">{description}</div>
        </div>
        {/* Price */}
        <div className="font-bold dark:text-white">${price}</div>
      </div>

      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold dark:text-white">SIZE</div>
            <Select
              title=""
              options={SIZES}
              className={"w-16 p-1 pl-2"}
              value={size}
            />
          </div>
          <div>
            <div className="font-bold dark:text-white">QTY</div>
            <Select
              title=""
              options={QTY}
              className={"w-16 p-1 pl-2"}
              value={qty}
            />
          </div>
        </div>
        <button>
          <CiTrash size={25} className="text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
};
