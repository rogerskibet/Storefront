import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import QuantityControlButton from "../components/QuantityControlButton";
import { CartContext } from "../context/CartContext";
import ProductDetailsSkeleton from "../components/ProductDetailsSkeleton";
import { 
  ArrowLeft, 
  Star, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  LayoutGrid 
} from "lucide-react";

function ProductDetailsPage() {
  const { id } = useParams();
  const { cart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [otherProducts, setOtherProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);
        window.scrollTo(0, 0); 
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchProduct();
  }, [id]);

  //Reccomendation FETCH
  useEffect(() => {
    if (!product) return;
    async function fetchAllRecommendations() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const allProducts = await res.json();
        const availableProducts = allProducts.filter(
          (p) => p.id !== product.id && !cart.some((item) => item.id === p.id)
        );
        const related = availableProducts
          .filter((p) => p.category === product.category)
          .sort(() => 0.5 - Math.random()).slice(0, 4);
        const others = availableProducts
          .filter((p) => p.category !== product.category)
          .sort(() => 0.5 - Math.random()).slice(0, 4);
        setRelatedProducts(related);
        setOtherProducts(others);
      } catch (err) { console.error(err); }
    }
    fetchAllRecommendations();
  }, [product, cart]);

  if (loading) return  <ProductDetailsSkeleton />

  if (error || !product) return (
    <div className="max-w-5xl mx-auto mt-20 text-center">
      <h2 className="text-2xl font-bold text-gray-800">Product not found.</h2>
      <Link to="/" className="text-indigo-600 hover:underline mt-4 block">Return to Shop</Link>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Navigation */}
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors mb-8 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Catalog
      </Link>

      {/* Side-by-Side Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pb-16 border-b border-gray-100">
        
        {/* Left: Image Showcase */}
        <div className="w-full">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-16 border border-gray-100 flex items-center justify-center min-h-[400px] lg:min-h-[600px]">
            <img 
              src={product.image} 
              alt={product.title} 
              className="max-h-[450px] w-auto object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>

        {/* Right: Detailed Content */}
        <div className="flex flex-col h-full pt-4">
          <div className="mb-6">
            <span className="bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {product.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-gray-900 mt-6 leading-tight">
              {product.title}
            </h1>
            
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-amber-700 text-sm">{product.rating?.rate}</span>
              </div>
              <span className="text-gray-400 text-sm font-medium">
                {product.rating?.count} Reviews
              </span>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-gray-900">${product.price.toFixed(2)}</span>
              <span className="text-gray-400 line-through text-lg">${(product.price * 1.2).toFixed(2)}</span>
            </div>
            <p className="text-green-600 text-sm font-bold flex items-center gap-1.5 mt-2">
              <Truck className="w-4 h-4" /> In Stock & Ready to Ship
            </p>
          </div>

          <div className="prose prose-sm text-gray-600 mb-10">
             <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Description</h3>
             <p className="text-lg leading-relaxed text-gray-700">
               {product.description}
             </p>
          </div>

          {/* Action Area */}
          <div className="max-w-xs mb-12">
            <label className="block text-xs font-bold text-gray-400 uppercase mb-3 ml-1">Select Quantity</label>
            <QuantityControlButton product={product} />
          </div>

          {/* Value Props Strip */}
          <div className="grid grid-cols-3 gap-6 py-8 border-y border-gray-100">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-6 h-6 text-indigo-600 mb-2" />
              <span className="text-[10px] font-bold text-gray-800 uppercase">Secure</span>
            </div>
            <div className="flex flex-col items-center border-x border-gray-100 px-4">
              <RotateCcw className="w-6 h-6 text-indigo-600 mb-2" />
              <span className="text-[10px] font-bold text-gray-800 uppercase">Returns</span>
            </div>
            <div className="flex flex-col items-center">
              <LayoutGrid className="w-6 h-6 text-indigo-600 mb-2" />
              <span className="text-[10px] font-bold text-gray-800 uppercase">Original</span>
            </div>
          </div>
        </div>
      </div>

      {/* Suggestions Below */}
      <div className="mt-20">
         <h2 className="text-3xl font-black text-gray-900 mb-10">Frequently Viewed Together</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
         </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;