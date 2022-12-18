import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../App";

import DePage from "../components/ProductDetailsPage";
const ProductDetails = () => {
  const { Product } = useParams();
  const productsData = useContext(ProductsContext);
  if (productsData) {
    const viewedProduct = productsData.find(
      (IDProduct) => IDProduct.id == Product
    );
    return (
      <>
        {" "}
    <DePage viewedProduct={viewedProduct}/>
        
      </>
    );
  }
};

export default ProductDetails;
