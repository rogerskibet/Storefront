// import Stats from '../components/Stats';
// import Navbar from '../components/Navbar';
// import Controls from '../components/Controls';
// import ProductList from '../components/ProductList';
// import Loader from '../components/Loader';
// import { useProducts } from '../hooks/useProducts';
 

// function Dashboard(){
//     const{
//         finalProducts,
//         categories,
//         loading,
//         setSortBy,
//         setCategory,
//         searchText,
//         setSearchText,
//         showStats,
//         setShowStats,
//         user,
//     } = useProducts();

   


 

//         if (loading) {
//             return <Loader/>
//         }

//     return (
//         <>
       
//         <Navbar showStats={showStats} setShowStats={setShowStats} user={user}  />
//         { showStats && <Stats categories={categories} finalProducts={finalProducts}/> }
//         <Controls categories={categories} setSortBy={setSortBy} setCategory={setCategory} searchText={searchText} setSearchText={setSearchText}/>
//         <ProductList finalProducts={finalProducts}  />
//         </>
//     );
// }

// export default Dashboard