import StarRating from "../components/StarRating";
import QuantityControlButton from "./QuantityControlButton";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { ShoppingBag, CheckCircle2, Eye } from "lucide-react";

function ProductCard({ product }) {
  const { cart } = useContext(CartContext);

  const cartItem = cart.find((item) => item.id === product.id);
  const isInCart = !!cartItem;

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
      
      {/* 1. Status Badge (Top Right) */}
      {isInCart && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg animate-in fade-in zoom-in">
          <CheckCircle2 className="w-3 h-3" />
          <span>IN CART {cartItem?.quantity > 1 && `(${cartItem.quantity})`}</span>
        </div>
      )}

      {/* 2. Product Image Container */}
      <Link 
        to={`/product/${product.id}`} 
        className="relative block pt-6 pb-2 px-4 overflow-hidden bg-gray-50/50"
      >
        <img
          className="h-48 w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
          src={product.image}
          alt={product.title}
        />
        
        {/* Hover Overlay Icon */}
        <div className="absolute inset-0 bg-indigo-900/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-white p-3 rounded-full shadow-md translate-y-4 group-hover:translate-y-0 transition-transform">
            <Eye className="w-5 h-5 text-indigo-600" />
          </div>
        </div>
      </Link>

      {/* 3. Content Area */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          {/* Category - Subtitle */}
          <p className="text-[10px] uppercase tracking-widest text-indigo-500 font-bold mb-1">
            {product.category || "General"}
          </p>

          <Link to={`/product/${product.id}`}>
            <h3 className="font-bold text-gray-800 leading-tight line-clamp-2 group-hover:text-indigo-600 transition-colors">
              {product.title}
            </h3>
          </Link>

          <div className="flex items-center gap-2 mt-2">
            <StarRating rating={product.rating?.rate} />
            <span className="text-xs text-gray-400">({product.rating?.count})</span>
          </div>
        </div>

        {/* 4. Price & Action Footer */}
        <div className="mt-4 pt-4 border-t border-gray-50 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-black text-gray-900">
              <span className="text-sm font-semibold align-top mr-0.5">$</span>
              {product.price}
            </p>
          </div>

          <div className="w-full">
            {/* Wrapping your existing QuantityControlButton */}
            <QuantityControlButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;