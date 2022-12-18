import "./App.css";
import Router from "./router";
import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
export const ProductsContext = createContext(null);
export const CategoryContext = createContext(null);



function App() {
  const url = "https://fakestoreapi.com/products";
  const categoryUrl = "https://fakestoreapi.com/products/categories";
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState(null);


  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }, [url]);
  useEffect(() => {
    axios.get(categoryUrl).then((response) => {
      setCategory(response.data);
    });
  }, [categoryUrl]);

  return (
    <ProductsContext.Provider value={products}>
      <CategoryContext.Provider value={category}>
        <Router />
      </CategoryContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;
