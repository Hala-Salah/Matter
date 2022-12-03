import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
export const LeftSection = () => {
  return (
  
       <Link to ="/" className={styles.link}>
         <img
          className={styles.matterLogo}
          src="/assets/images/matterLogo.png"
          alt="MatterLogo"
        />
       </Link>
      );
};

export default LeftSection;
