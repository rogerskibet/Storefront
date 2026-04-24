import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function AddToCartButton({ product }) {
  const { addToCart } = useContext(CartContext);

  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(product);

    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <button
      onClick={handleClick}
      className={`mt-auto px-3 py-1 rounded text-white transition ${
        added
          ? "bg-green-600"
          : "bg-black hover:bg-green-600"
      }`}
    >
      {added ? "Added ✓" : "Add to Cart"}
    </button>
  );
}