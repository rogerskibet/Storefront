function Stats({finalProducts,categories}){
    return(
        <div className="flex flex-wrap gap-4 items-center justify-center mb-8">
        <div className="border rounded-lg p-2 text-sm">
            <p className="text-gray-500 text-xs">Total Products</p>
            <h2 className="text-lg font-bold">{finalProducts.length}</h2>
        </div>  
        {
            categories.map(category =>   
            <div className="border rounded-lg p-2 text-sm" key={category}>
            <p className="text-gray-500 text-xs">{category}</p>
            <h2 className="text-lg font-bold"> 
                {
                    finalProducts.filter(p => p.category === category).length
                }
            </h2>
        </div>  )
        }   
        </div>
    );
}

export default Stats;