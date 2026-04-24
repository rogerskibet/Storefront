import ProductCard from "./ProductCard";
function ProductList({finalProducts}){
    return(
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
            {
                finalProducts.map(product => <ProductCard   key={product.id} product={product} rating={product.rating} />)
            }
        </div>
    );
}

export default ProductList;