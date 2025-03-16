import { CartItem } from "./CartItem";

export const Car = ({ carItems }) => {
  return (
    <>
      <h2 className="dark:text-white text-4xl font-bold mb-5">Car</h2>
      <ul className="space-y-5">
        {carItems.map((carItem) => (
          <li key={carItem.product.id}>
            <CartItem item={carItem} />
          </li>
        ))}
      </ul>
    </>
  );
};
