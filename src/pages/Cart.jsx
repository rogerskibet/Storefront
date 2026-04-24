import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, CreditCard } from "lucide-react";

function Cart() {
  const { cart, removeFromCart, addToCart, decreaseQuantity } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="max-w-xl mx-auto py-20 px-6 text-center">
        <div className="bg-indigo-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10 text-indigo-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h1>
        <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" /> Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex items-center gap-4 mb-8">
        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full transition">
           <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
        <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
          {cart.length} Items
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-4 bg-white border border-gray-100 shadow-sm rounded-2xl p-4 transition-hover hover:shadow-md"
            >
              {/* Product Image */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-gray-50 rounded-xl overflow-hidden border">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain p-2"
                />
              </div>

              {/* Info & Controls */}
              <div className="flex-1 w-full text-center sm:text-left">
                <h2 className="font-bold text-gray-800 line-clamp-1 mb-1">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3">${item.price.toFixed(2)} each</p>

                <div className="flex items-center justify-center sm:justify-start gap-4">
                  {/* Quantity Switcher */}
                  <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="p-1.5 hover:bg-white rounded-md transition shadow-sm disabled:opacity-50"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="w-3.5 h-3.5 text-gray-600" />
                    </button>
                    <span className="px-4 font-semibold text-sm">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="p-1.5 hover:bg-white rounded-md transition shadow-sm"
                    >
                      <Plus className="w-3.5 h-3.5 text-gray-600" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center gap-1.5 text-sm font-medium text-red-500 hover:text-red-600 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Remove</span>
                  </button>
                </div>
              </div>

              {/* Subtotal */}
              <div className="text-right hidden sm:block">
                <p className="text-sm text-gray-400 font-medium">Subtotal</p>
                <p className="text-lg font-bold text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 sticky top-24">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h3>
            
            <div className="space-y-3 pb-6 border-b border-gray-200">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 mb-6">
              <span className="text-base font-bold text-gray-800">Total Amount</span>
              <span className="text-2xl font-black text-indigo-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button className="w-full bg-indigo-600 text-white flex items-center justify-center gap-2 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
              <CreditCard className="w-5 h-5" /> Checkout Now
            </button>
            
            <p className="text-center text-xs text-gray-400 mt-4">
              Secure Checkout • Fast Shipping • Easy Returns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;