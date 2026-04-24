function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col h-full animate-pulse">
      
      {/* 1. Image Area Skeleton */}
      <div className="pt-6 pb-2 px-4 mb-4">
        <div className="h-48 w-full bg-gray-100 rounded-2xl"></div>
      </div>

      {/* 2. Content Area Skeleton */}
      <div className="flex-grow space-y-3">
        {/* Category Label */}
        <div className="h-3 bg-gray-100 rounded w-1/4"></div>
        
        {/* Title (2 lines) */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>

        {/* Star Rating Area */}
        <div className="flex gap-2 mt-4">
          <div className="h-3 bg-gray-100 rounded w-20"></div>
          <div className="h-3 bg-gray-100 rounded w-8"></div>
        </div>
      </div>

      {/* 3. Footer Area Skeleton */}
      <div className="mt-4 pt-4 border-t border-gray-50 space-y-4">
        {/* Price */}
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        
        {/* Button */}
        <div className="h-10 bg-gray-100 rounded-xl w-full"></div>
      </div>
      
    </div>
  );
}
export default ProductCardSkeleton;