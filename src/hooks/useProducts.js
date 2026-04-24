import { useEffect,useState } from "react";

export function useProducts(searchText){
      //App States
    const[products,setProducts] = useState([]);
    const[loading,setLoading] = useState(true);
    const[sortBy,setSortBy] = useState("");
    const[category,setCategory] = useState("");
    // const[searchText,setSearchText] = useState("");
    const[showStats,setShowStats] = useState(false);
    const[user,setUser] = useState(localStorage.getItem("user") || null );




    //API Call
    // useEffect(() => {
    //     fetch("https://fakestoreapi.com/products").then(res => res.json()).then(data => {
    //         setProducts(data);
    //         setLoading(false);
    //     });
    // }, []);

    // API Call with force Loader
        useEffect(() => {
    async function fetchProducts() {
        const start = Date.now();

        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        const elapsed = Date.now() - start;

        const MIN_LOADING_TIME = 600;

        const remaining = MIN_LOADING_TIME - elapsed;

        if (remaining > 0) {
        setTimeout(() => {
            setProducts(data);
            setLoading(false);
        }, remaining);
        } else {
        setProducts(data);
        setLoading(false);
        }
    }

    fetchProducts();
    }, []);


    const categories = [...new Set(products.map(p => p.category))];

    // Filter Search and Sort Logic
    const finalProducts = [...products]
    .filter(p => category ? p.category === category : true)
    .filter(p => searchText ? p.title.toLowerCase().includes(searchText.toLowerCase()) : true)
    .sort((a,b) => {
        //Sort
        switch(sortBy){
            case "title-asc":
                return a.title.localeCompare(b.title);

            case "title-desc":
                return b.title.localeCompare(a.title);

            case "price-asc":
                return a.price - b.price;

            case "price-desc":
                return b.price - a.price;

            case "rating-desc":
                return b.rating.rate - a.rating.rate;
            default:
                return 0;
        }

    });

    return {
        products,
        finalProducts,
        categories,
        loading,
        sortBy,
        setSortBy,
        category,
        setCategory,
        // setSearchText,
        showStats,
        setShowStats,
        user,
        setUser,
    }
}