 import Controls from '../components/Controls';
import ProductList from '../components/ProductList';
import Loader from '../components/Loader';
import { useProducts } from '../hooks/useProducts';
import ProductListSkeleton from '../components/ProductListSkeleton';
 

function Products({searchText}){
    const{
        finalProducts,
        categories,
        loading,
        setSortBy,
        setCategory,
    } = useProducts(searchText);

   

    return (
        <>
        <Controls categories={categories} setSortBy={setSortBy} setCategory={setCategory}/>
        {   loading
            ? <ProductListSkeleton />
            : <ProductList finalProducts={finalProducts} />
        }
        </>
    );
}

export default Products;