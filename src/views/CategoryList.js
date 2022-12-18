import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CategoryBody from "../components/Category/CategoryBody";
import CategoryHeader from "../components/Category/CategoryHeader";
import { ProductsContext, CategoryContext } from "../App";
import { useState } from "react";
let FilterItems;
const CategoryList = () => {
  const { category } = useParams();
  const categories = useContext(CategoryContext);
  const ProductData = useContext(ProductsContext);

  {
    if (ProductData && categories) {
      FilterItems = ProductData.filter((item) => item.category === category);
    }
    const [changeCategory, setChangeCategory] = useState(category);
    const [filtered, setFiltered] = useState(FilterItems);
    const filteredChange = (category) => {
      const filteredArray = ProductData.filter((productCategory) => {
        return productCategory.category === category;
      });
      setFiltered(filteredArray);
      setChangeCategory(category);
    };

    return (
      <>
        <CategoryHeader
          ProductData={ProductData}
          categoryName={changeCategory}
        />
        <CategoryBody
          category={changeCategory}
          filteredChange={filteredChange}
          filtered={filtered}
        />
      </>
    );
  }
};

export default CategoryList;
