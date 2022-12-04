import "./App.css";
import Router from "./router";
import React, { useState, useEffect, createContext} from "react";
import axios from "axios";

export const ProductsContext = createContext(null);
function App() {
  const url = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }, [url]);

  return (
    <ProductsContext.Provider value={products}>
  
      <Router />
    </ProductsContext.Provider>
  );
}

export default App;
