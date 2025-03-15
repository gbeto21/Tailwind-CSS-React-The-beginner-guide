export const CartItem = ({ item }) => {
  return (
    <div className="flex hover:bg-[#DAFFA2] p-2 cursor-pointer bg-gray-50 space-x-2">
      <img className="h-24" src={item.src} alt="car item" />
      <div className="space-y-2">
        <div className="font-bold">{item.title}</div>
        <div className="text-sm text-gray-400">{item.description}</div>
      </div>
      <div className="font-bold">${item.price}</div>
    </div>
  );
};
