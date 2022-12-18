import React from "react";
import styles from "./styles.module.css";

const ErrorNotFound = () => {
  return (
    <>
      
      <div className={styles.errorPage}>
        <img
          className={styles.errorImg}
          src="/assets/images/NotFound/ErrorNotFound.png" alt="Error Not Found ! "
        />
       
      </div>

    </>
  );
};

export default ErrorNotFound;
