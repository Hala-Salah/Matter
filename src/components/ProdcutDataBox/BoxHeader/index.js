import React from "react";
import styles from "./styles.module.css";
import { VscClose } from "react-icons/vsc";
const BoxHeader = (props) => {
  return (
    <div className={styles.BoxHeader}>
      <h1>{props.productTitle}</h1>
      <button onClick={props.close} className={styles.closeButton}>
        
        <VscClose className={styles.icon} />
      </button>
    </div>
  );
};

export default BoxHeader;
