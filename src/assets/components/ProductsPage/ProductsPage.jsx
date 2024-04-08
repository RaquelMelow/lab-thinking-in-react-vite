// ProductsPage.jsx
import { useState } from "react";
import jsonData from "../../../data.json";
import SearchBar from "../SearchBar/SearchBar";
import ProductTable from "../ProductTable/ProductTable";

function ProductsPage() {
  const [searchProduct, setSearchProduct] = useState('');
  const [checkProducts, setCheckProducts] = useState(false);

  const handleCheck = (event) => {
    console.log(event)
    setCheckProducts(event.target.checked)
  }


  const handleSearchChange = (searchTerm) => {
    setSearchProduct(searchTerm);
  }

  const filterProducts = jsonData 
  .filter(product => product.name.toLowerCase().includes(searchProduct))
  .filter(product => checkProducts ? product.inStock : true)
  

  return (
    <>
      <SearchBar onSearch={handleSearchChange} onCheck={handleCheck}/>
      <ProductTable products={filterProducts} />
    </>
  );
}

export default ProductsPage;
