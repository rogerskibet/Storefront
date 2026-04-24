import { Link } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { CartContext } from "../context/CartContext";
import { ShoppingCart, Store, Menu, X, Search } from "lucide-react";

function Navbar({ searchText, handleChange, suggestions, setSuggestions }) {
  const { cart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setSuggestions]);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 gap-2 sm:gap-4">
          
          {/* 1. Logo - Always Visible */}
          <Link to="/" className="flex items-center gap-1.5 shrink-0">
            <Store className="w-6 h-6 text-indigo-600" />
            <h1 className="text-lg font-bold text-gray-800 tracking-tight hidden sm:block">
             Shoply
            </h1>
          </Link>

          {/* 2. Search Bar - Always Visible */}
          <div className="flex-1 max-w-md relative" ref={searchRef}>
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
              <input
                value={searchText}
                onChange={handleChange}
                placeholder="Search..."
                className="w-full bg-gray-100 border-none rounded-full pl-9 pr-4 py-1.5 text-sm focus:ring-2 focus:ring-indigo-500 transition-all sm:py-2 sm:pl-10"
              />
            </div>

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border shadow-xl rounded-xl overflow-hidden z-50">
                {suggestions.map((item) => (
                  <Link
                    key={item.id}
                    to={`/product/${item.id}`}
                    onClick={() => {
                      setSuggestions([]);
                      setIsMenuOpen(false);
                    }}
                    className="block px-4 py-3 hover:bg-indigo-50 text-sm text-gray-700 border-b last:border-none"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 3. Right Section: Cart and Menu Toggle */}
          <div className="flex items-center gap-1 sm:gap-3 shrink-0">
            {/* Desktop Navigation Links (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-6 mr-4">
              <Link to="/" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition">
                Products
              </Link>
            </div>

            {/* Cart Icon - Always Visible */}
            <Link 
              to="/cart" 
              className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold min-w-[18px] h-[18px] flex items-center justify-center rounded-full border-2 border-white px-1">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button - Visible on Mobile */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 4. Mobile Menu (Collapsible Links Only) */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1 pt-3">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-xl font-medium transition"
              >
                Products
              </Link>
              {/* You can add more links here like 'Categories', 'Orders', etc. */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;