import ProductCardSkeleton from "../components/ProductCardSkeleton";

function ProductListSkeleton() {
  // Create an array of 8 items to fill the screen
  const skeletonCards = Array(8).fill(null);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
      {skeletonCards.map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}

export default ProductListSkeleton;