import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Products from './pages/Products';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { useState } from 'react';
import { useProducts } from './hooks/useProducts';
 

function App() {
   const [searchText, setSearchText] = useState("");

   const { products,
           finalProducts,
          } = useProducts(searchText);


  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
        setSearchText(value);

        if (!value.trim()) {
          setSuggestions([]);
          return;
        }

        const filtered = products
          .filter((p) =>
            p.title.toLowerCase().includes(value.toLowerCase())
          )
          .slice(0, 5);

        setSuggestions(filtered);
      };

  
 
  return (
    <>
     <Navbar searchText={searchText} setSearchText={setSearchText} products={products} handleChange={handleChange} suggestions={suggestions} setSuggestions={setSuggestions} />
    <Routes>
      <Route path="/" element={<Products searchText={searchText} />} />
      <Route path="/cart" element={<Cart />} />
      <Route path='/product/:id' element={<ProductDetailsPage />} />
    </Routes>
    </>
     
  );
}

export default App

 