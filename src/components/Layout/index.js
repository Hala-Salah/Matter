import React from "react";
import { Outlet } from "react-router-dom";
import DarkBar from "./LayoutComponents/AppNav/DarkNav";
import LightNavBar from "./LayoutComponents/AppNav/LightNavBar";
import Footer from "./LayoutComponents/Footer";

const Layout = () => {
  return (
    <>
      <DarkBar />
      <LightNavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
