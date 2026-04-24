import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Plus, Minus, ShoppingCart } from "lucide-react";

export default function QuantityControlButton({ product }) {
  const { cart, addToCart, decreaseQuantity } = useContext(CartContext);

  const item = cart.find((i) => i.id === product.id);

  // 1. Initial "Add to Cart" State
  if (!item) {
    return (
      <button
        onClick={() => addToCart(product)}
        className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-200 shadow-md shadow-indigo-100 active:scale-[0.98]"
      >
        <ShoppingCart className="w-4 h-4" />
        <span>Add to Cart</span>
      </button>
    );
  }

  // 2. Quantity Adjustment State
  return (
    <div className="flex items-center justify-between w-full bg-gray-50 border border-gray-100 rounded-xl p-1 animate-in fade-in zoom-in duration-200">
      <button
        onClick={() => decreaseQuantity(product.id)}
        className="flex items-center justify-center w-9 h-9 bg-white text-indigo-600 rounded-lg shadow-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors border border-gray-100 active:scale-90"
        aria-label="Decrease quantity"
      >
        <Minus className="w-4 h-4" />
      </button>

      <div className="flex flex-col items-center">
        <span className="text-xs text-gray-400 font-medium uppercase leading-none mb-0.5">Qty</span>
        <span className="text-sm font-bold text-gray-800 leading-none">
          {item.quantity}
        </span>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="flex items-center justify-center w-9 h-9 bg-white text-indigo-600 rounded-lg shadow-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors border border-gray-100 active:scale-90"
        aria-label="Increase quantity"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}