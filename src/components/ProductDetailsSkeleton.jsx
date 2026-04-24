export default function ProductDetailsSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse">
      
      {/* 1. Breadcrumb Skeleton */}
      <div className="h-4 w-32 bg-gray-100 rounded-md mb-8"></div>

      {/* 2. Side-by-Side Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24 pb-16 border-b border-gray-100">
        
        {/* Left: Image Showcase Skeleton */}
        <div className="w-full">
          <div className="bg-gray-100 rounded-3xl border border-gray-50 min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
            {/* Inner "Ghost" Image */}
            <div className="w-2/3 h-2/3 bg-gray-200 rounded-2xl opacity-50"></div>
          </div>
        </div>

        {/* Right: Detailed Content Skeleton */}
        <div className="flex flex-col pt-4 space-y-8">
          
          {/* Category & Title */}
          <div className="space-y-4">
            <div className="h-6 w-24 bg-gray-100 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-10 w-full bg-gray-200 rounded-xl"></div>
              <div className="h-10 w-3/4 bg-gray-200 rounded-xl"></div>
            </div>
            {/* Reviews */}
            <div className="h-6 w-40 bg-gray-100 rounded-lg"></div>
          </div>

          {/* Price & Shipping */}
          <div className="space-y-3">
            <div className="h-12 w-32 bg-gray-200 rounded-xl"></div>
            <div className="h-4 w-48 bg-gray-100 rounded-md"></div>
          </div>

          {/* Description Block */}
          <div className="bg-white border border-gray-50 rounded-2xl p-6 space-y-3">
            <div className="h-3 w-20 bg-gray-100 rounded mb-4"></div>
            <div className="h-4 w-full bg-gray-100 rounded"></div>
            <div className="h-4 w-full bg-gray-100 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-100 rounded"></div>
          </div>

          {/* Action Button */}
          <div className="h-12 w-full sm:w-72 bg-gray-200 rounded-2xl"></div>

          {/* Value Props Strip Skeleton */}
          <div className="grid grid-cols-3 gap-6 py-8 border-y border-gray-50">
            <div className="flex flex-col items-center space-y-2">
              <div className="h-6 w-6 bg-gray-100 rounded-full"></div>
              <div className="h-2 w-12 bg-gray-100 rounded"></div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-6 w-6 bg-gray-100 rounded-full"></div>
              <div className="h-2 w-12 bg-gray-100 rounded"></div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-6 w-6 bg-gray-100 rounded-full"></div>
              <div className="h-2 w-12 bg-gray-100 rounded"></div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Recommendations Section Skeleton */}
      <div className="mt-20">
         <div className="h-8 w-64 bg-gray-200 rounded-xl mb-10"></div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-80 bg-gray-100 rounded-2xl border border-gray-50"></div>
            ))}
         </div>
      </div>
    </div>
  );
}