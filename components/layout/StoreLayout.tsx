import React from "react";
import productsData from "../../data/data";
import ProductCard from "../products/ProductCard";

const StoreLayout = () => {
  const [filteredProducts, setFilteredProducts] = React.useState(
    productsData.slice(0, 100)
  );

  return (
    <div>
      <ProductCard products={filteredProducts.slice(0, 100)} />
    </div>
  );
};

export default StoreLayout;
