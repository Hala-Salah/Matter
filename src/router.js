import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CategoryList from "./views/CategoryList";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import NotFound from "./views/NotFound";
import ProductDetails from "./views/ProductDetails";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path=":category" element={<CategoryList />} />
          <Route path=":Product/pro" element={<ProductDetails />}>
            <Route path=":Product"  />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
