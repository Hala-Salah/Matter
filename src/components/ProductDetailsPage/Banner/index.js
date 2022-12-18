import React from "react";
import styles from "./styles.module.css";

const Banner = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <img
          className={styles.banner}
          src="/assets/Banner/banner.png"
          alt="Banner"
        />
      </div>

  
    </>
  );
};

export default Banner;
