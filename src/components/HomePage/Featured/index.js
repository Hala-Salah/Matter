import React , {useContext}from "react";
import TitleComponent from "../../TitleComponent";
import Products from "../../Products";
import { ProductsContext } from "../../../App";
const Featured = () => {
   const productsData = useContext(ProductsContext);
  return (
    <>
      <TitleComponent title={"Featured"} />
      <Products productsData={productsData}/>
    </>
  );
};

export default Featured;
