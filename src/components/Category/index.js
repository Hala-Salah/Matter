import React, { useContext } from "react";
import { ProductsContext } from "../../App";
import CategoryHeader from "./CategoryHeader";

const CategoryProductList = (props) => {
  const ProductData = useContext(ProductsContext);
  if (ProductData) {
    const categoryArray = [
      ...new Set(ProductData.map((item) => item.category)),
    ];

    return (
      <>
        <CategoryHeader categoryName={props.category} />
      </>
    );
  }

  return (
    <>
      <div>{props.category}</div>
    </>
  );
};

export default CategoryProductList;
