import React from "react";
import AboutMatter from "../components/HomePage/AboutMatter";
import AsSeenOn from "../components/HomePage/AsSeenOn";
import Carousels from "../components/HomePage/Carousels";
import RecommendedVideos from "../components/HomePage/Recommended Videos";

const HomePage = () => {
  return (
    <>
      <Carousels />
      
      <AboutMatter />
      <RecommendedVideos/>
      <AsSeenOn/>
    </>
  );
};

export default HomePage;
