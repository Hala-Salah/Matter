import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./styles.module.css";
export const LeftSection = () => {
  return (
  
        <img
          className={styles.matterLogo}
          src="/assets/images/matterLogo.png"
          alt="MatterLogo"
        />
      );
};

export default LeftSection;
