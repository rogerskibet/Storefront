import { Filter, ArrowUpDown } from "lucide-react";

function Controls({ categories, setSortBy, setCategory }) {
  const sortOptions = [
    { label: "Title A-Z", value: "title-asc" },
    { label: "Title Z-A", value: "title-desc" },
    { label: "Price Low → High", value: "price-asc" },
    { label: "Price High → Low", value: "price-desc" },
    { label: "Rating High → Low", value: "rating-desc" }
  ];

  return (
    <div className="bg-white/50 backdrop-blur-sm border border-gray-200 shadow-sm rounded-2xl p-4 mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          Browse Catalog
        </h2>

        <div className="flex flex-wrap items-center gap-3">
          {/* Category Filter */}
          <div className="relative flex-1 min-w-[160px]">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-500 pointer-events-none" />
            <select
              id="filter"
              className="w-full appearance-none bg-white border border-gray-200 rounded-xl pl-10 pr-8 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all cursor-pointer hover:bg-gray-50"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category} className="capitalize">
                  {category}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none border-l pl-2 border-gray-200">
               <span className="block w-2 h-2 border-b-2 border-r-2 border-gray-400 rotate-45 -translate-y-1"></span>
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="relative flex-1 min-w-[160px]">
            <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-500 pointer-events-none" />
            <select
              id="sort"
              className="w-full appearance-none bg-white border border-gray-200 rounded-xl pl-10 pr-8 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all cursor-pointer hover:bg-gray-50"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Sort By</option>
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
             <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none border-l pl-2 border-gray-200">
               <span className="block w-2 h-2 border-b-2 border-r-2 border-gray-400 rotate-45 -translate-y-1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Controls;